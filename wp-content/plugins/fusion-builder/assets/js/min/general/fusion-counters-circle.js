!function(e){"use strict";e.fn.awbAnimateCounterCircles=function(){e.each(fusion.getObserverSegmentation(e(this)),function(t){var r=fusion.getAnimationIntersectionData(t),i=new IntersectionObserver(function(t,r){e.each(t,function(t,n){var c=e(n.target).closest(".fusion-counters-circle").children().length;fusion.shouldObserverEntryAnimate(n,r)&&(e(n.target).awbCalculateCircleSize(!0),e(n.target).awbDrawCircles(),i.unobserve(n.target),1===c&&setTimeout(function(){a.observe(e(n.target).parent()[0])},e(n.target).children(".counter-circle").attr("data-speed")))})},r),a=new ResizeObserver(function(t){e.each(t,function(t,r){e(r.target).is(":hidden")||e(r.target).children().awbRedrawCircles()})});e(this).children().each(function(){i.observe(this)})})},e.fn.awbDrawCircles=function(){var t=e(this),r=t.children(".counter-circle").attr("data-countdown"),i=t.children(".counter-circle").attr("data-filledcolor"),a=t.children(".counter-circle").attr("data-unfilledcolor"),n=t.children(".counter-circle").attr("data-scale"),c=t.children(".counter-circle").attr("data-size"),o=t.children(".counter-circle").attr("data-speed"),l=t.children(".counter-circle").attr("data-strokesize"),s=t.children(".counter-circle").attr("data-percent-original");n&&(n=e("body").css("color")),r?(t.children(".counter-circle").attr("data-percent",100),t.children(".counter-circle").easyPieChart({barColor:i,trackColor:a,scaleColor:n,scaleLength:5,lineCap:"round",lineWidth:l,size:c,rotate:0,animate:{duration:o,enabled:!0}}),t.children(".counter-circle").data("easyPieChart").update(s)):t.children(".counter-circle").easyPieChart({barColor:i,trackColor:a,scaleColor:n,scaleLength:5,lineCap:"round",lineWidth:l,size:c,rotate:0,animate:{duration:o,enabled:!0}})},e.fn.awbCalculateCircleSize=function(t){var r,i,a,n=e(this);n.attr("data-currentsize",n.width()),n.removeAttr("style"),n.children().removeAttr("style"),r=n.data("originalsize"),i=n.parent().width(),a=i<n.data("currentsize")?i:r,n.css({width:a,height:a}),n.find(".fusion-counter-circle").each(function(){e(this).css({width:a,height:a,"font-size":50*a/220}),e(this).data("size",a),e(this).data("strokesize",a/220*11),t||e(this).data("animate",!1),e(this).attr("data-size",a),e(this).attr("data-strokesize",a/220*11)})},e.fn.awbRedrawCircles=function(){var t=e(this);t.awbCalculateCircleSize(!1),t.find("canvas").remove(),t.find(".counter-circle").removeData("easyPieChart"),t.awbDrawCircles()}}(jQuery),jQuery(window).on("load",function(){jQuery(".fusion-counters-circle").awbAnimateCounterCircles()}),jQuery(window).on("fusion-element-render-fusion_counter_circle",function(e,t){jQuery('div[data-cid="'+t+'"]').awbRedrawCircles()});
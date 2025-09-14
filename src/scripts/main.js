/******************************************************************************\
|                                                                              |
|                                   main.js                                    |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the application entry point and loading.                 |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

// load configuration files
//
Promise.all([

	// configs
	//
	fetch('config/config.json').then(response => response.json()),
	fetch('config/branding.json').then(response => response.json()),
	fetch('config/theme.json').then(response => response.json()),

	// settings
	//
	fetch('settings/settings.json').then(response => response.json()),
	fetch('apps/apps.json').then(response => response.json()),
	fetch('apps/preferences.json').then(response => response.json()),
]).then((files) => {

	// set globals
	//
	let i = 0;

	// load configs
	//
	window.config = files[i++];
	window.config.branding = files[i++];
	window.config.theme = files[i++];

	// load settings
	//
	window.config.settings = files[i++];
	window.config.apps = files[i++];
	window.config.preferences = files[i++];

	// collapse preferences
	//
	let preferences = {}
	let apps = Object.keys(window.config.preferences);
	for (let i = 0; i < apps.length; i++) {
		let app = apps[i];
		let prefs = window.config.preferences[app];
		let tabs = Object.keys(prefs);
		let attributes = {};
		for (let j = 0; j < tabs.length; j++) {
			let tab = tabs[j];
			Object.assign(attributes, prefs[tab]);
		}
		preferences[app] = attributes;
	}
	window.config.preferences = preferences;

	// load application
	//
	import('./application.js').then((Application) => {

		// go!
		//
		$(document).ready(() => {
			window.application = new Application.default({});

			// start!
			//
			application.start();
		});
	});
});
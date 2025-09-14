/******************************************************************************\
|                                                                              |
|                             user-preferences.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a model of a set of user application preferences.        |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import UserKeyValues from '../../models/settings/user-key-values.js';
import Browser from '../../utilities/web/browser.js';

export default UserKeyValues.extend({

	//
	// attributes
	//

	app: undefined,

	//
	// ajax attributes
	//

	urlRoot: config.servers.api + '/preferences',

	//
	// querying methods
	//

	matches: function(preference, value) {
		return this.get(preference) == value;
	},

	includes: function(preference, item) {
		return this.has(preference) && this.get(preference).includes(item);
	},

	hasMultiple: function(preference) {
		return this.has(preference) && this.get(preference).length > 0;
	},

	//
	// setting methods
	//

	addItem: function(preference, item) {
		let array = this.get(preference);
		if (!array.includes(item)) {
			array.push(item);
		}
		this.set(preference, array);
	},

	removeItem: function(preference, item) {
		let array = this.get(preference);
		let index = array.indexOf(item);
		if (index > -1) {
			array.splice(index, 1);
		}
		this.set(preference, array);
	},

	applyTo: function(view, attributes) {
		let keys = attributes? Object.keys(attributes) : Object.keys(this.attributes);
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			let value = this.get(key);
			view.setOption(key, value);
		}
	},

	reset: function() {
		this.set(this.constructor.getDefaults(this.app));
	},

	//
	// fetching methods
	//

	fetch: function(options) {
		return UserKeyValues.prototype.fetch.call(this, _.extend({
			url: this.urlRoot + '/' + this.app
		}, options));
	},

	fetchByUser: function(user, options) {
		return this.fetch(_.extend({
			url: user.url() + '/preferences/' + this.app
		}, options));
	},

	//
	// saving methods
	//

	save: function(attributes, options) {
		return UserKeyValues.prototype.save.call(this, attributes, _.extend({
			url: this.urlRoot + '/' + this.app
		}, options));
	},

	saveValue: function(key, value, options) {
		$.ajax(_.extend({}, options, {
			url: this.urlRoot + '/' + this.app + '/' + key,
			type: 'PUT',
			data: {
				value: value
			}
		}));
	},

	delete: function(options) {
		$.ajax(_.extend({}, options, {
			url: this.urlRoot + '/' + this.app,
			type: 'DELETE'
		}));
	}
}, {

	//
	// static methods
	//

	isValuePerDevice: function(value) {
		let keys = Object.keys(value)
		return keys.includes('phone') ||
			keys.includes('tablet') ||
			keys.includes('desktop');
	},

	booleansToArray: function(value, device) {
		let array = [];
		let keys = Object.keys(value);
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			if (this.toValue(value[key], device)) {
				array.push(key);
			}
		}
		return array;
	},

	toValue: function(value, device) {
		let isDict = value && typeof value == 'object' && value.length == undefined;

		// check if value is specified per device
		//
		if (isDict) {
			if (this.isValuePerDevice(value)) {
				return this.toValue(value[device], device);
			} else {
				return this.booleansToArray(value, device);
			}
		} else {
			return value;
		}
	},

	toKeyValuePairs: function(array, device) {
		let values = {};

		for (let key in array) {
			values[key] = this.toValue(array[key], device);
		}

		return values;
	},

	getDefaults: function(app) {
		let preferences = config.preferences[app];
		if (preferences) {
			return this.toKeyValuePairs(preferences, Browser.device);
		}
	},

	create: function(app, options) {
		let defaults = this.getDefaults(app);

		// create preferences using defaults
		//
		let preferences = new this.prototype.constructor(_.extend({}, defaults, options));
		
		// set preferences app name
		//
		if (Browser.device != 'desktop') {
			preferences.app = Browser.device + '_' + app;
		} else {
			preferences.app = app;
		}

		// preferences have been specified
		//
		if (options) {
			preferences.loaded = true;
		}

		return preferences;
	}
});
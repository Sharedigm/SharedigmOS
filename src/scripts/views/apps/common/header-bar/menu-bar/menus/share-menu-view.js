/******************************************************************************\
|                                                                              |
|                               share-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying share dropdown menus.                   |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import MenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/menu-view.js';

export default MenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "share-by-invitation",
			"icon": "fa fa-user-friends",
			"name": "By Invitation"
		},
		"separator",
		{
			"class": "share-by-topic",
			"icon": "fa fa-newspaper",
			"name": "By Discussion Topic"
		},
		{
			"class": "share-by-message",
			"icon": "fa fa-comments",
			"name": "By Chat Messsage"
		},
		"separator",
		{
			"class": "share-by-link",
			"icon": "fa fa-link",
			"name": "By Link"
		},
		{
			"class": "share-by-email",
			"icon": "fa fa-envelope",
			"name": "By Email"
		}
	],

	visible: function() {
		let hasTopics = application.hasApp('topic_browser');
		let hasChats = application.hasApp('chat_browser');
		let hasConnectionManager = application.hasApp('connection_manager');

		return {
			'share-by-invitation': hasConnectionManager,
			'share-by-topic': hasTopics,
			'share-by-message': hasChats,
			'share-by-link': true,
			'share-by-email': true
		};
	},

	enabled: function() {
		let hasShareable = this.parent.app.hasShareable? this.parent.app.hasShareable() : false;

		return {
			'share-by-invitation': hasShareable,
			'share-by-topic': hasShareable,
			'share-by-message': hasShareable,
			'share-by-link': hasShareable,
			'share-by-email': hasShareable
		};
	},

	//
	// getting methods
	//

	getItems: function() {
		return this.items;
	},

	getFileItems: function() {
		let files = config.defaults.sharing.files;
		let items = [];

		// add file types
		//
		if (files) {
			items.push('separator');
			let keys = Object.keys(files);
			for (let i = 0; i < keys.length; i++) {
				let key = keys[i];
				items.push({
					class: 'share-attachments',
					icon: files[key].icon,
					name: key
				});
			}
		}

		return items;
	}
});
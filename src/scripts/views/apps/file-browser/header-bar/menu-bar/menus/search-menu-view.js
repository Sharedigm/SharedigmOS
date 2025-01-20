/******************************************************************************\
|                                                                              |
|                              search-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying search dropdown menus.                  |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import SearchMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/search-menu-view.js';

export default SearchMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "search-by-name",
			"group": "search-by",
			"icon": "fa fa-font",
			"name": "By Name",
			"select": true
		},
		{
			"class": "search-by-kind",
			"group": "search-by",
			"icon": "fa fa-file",
			"name": "By Kind",
			"select": true
		},
		{
			"class": "search-by-size",
			"group": "search-by",
			"icon": "fa fa-download",
			"name": "By Size",
			"select": true
		},
		"separator",
		{
			"class": "search-by-keyword",
			"group": "search-by",
			"icon": "fa fa-key",
			"name": "By Keyword",
			"select": true
		},
		{
			"class": "search-by-meaning",
			"group": "search-by",
			"icon": "fa fa-lightbulb",
			"name": "By Meaning",
			"select": true
		},
		"separator",
		{
			"class": "search-by-date",
			"icon": "fa fa-calendar-alt",
			"name": "By Date",
			"select": true,
			"menu": [
				{
					"class": "search-by-create-date",
					"group": "search-by",
					"icon": "fa fa-magic",
					"name": "Create Date",
					"select": true
				},
				{
					"class": "search-by-modify-date",
					"group": "search-by",
					"icon": "fa fa-edit",
					"name": "Modify Date",
					"select": true
				},
				{
					"class": "search-by-access-date",
					"group": "search-by",
					"icon": "fa fa-eye",
					"name": "Access Date",
					"select": true
				}
			]
		},
		{
			"class": "photo",
			"icon": "fa fa-image",
			"name": "By Photo",
			"select": true,
			"menu": [
				{
					"class": "search-by-resolution",
					"group": "search-by",
					"icon": "fa fa-arrows-alt",
					"name": "Resolution",
					"select": true
				},
				{
					"class": "search-by-make-model",
					"group": "search-by",
					"icon": "fa fa-camera",
					"name": "Make / Model",
					"select": true
				},
				{
					"class": "search-by-focal-length",
					"group": "search-by",
					"icon": "fa fa-arrows-alt-h",
					"name": "Focal Length",
					"select": true
				},
				{
					"class": "search-by-aperture",
					"group": "search-by",
					"icon": "fa fa-dot-circle",
					"name": "Aperture",
					"select": true
				},
				{
					"class": "search-by-exposure",
					"group": "search-by",
					"icon": "fa fa-clock",
					"name": "Exposure",
					"select": true
				},
				{
					"class": "search-by-iso",
					"group": "search-by",
					"icon": "fa fa-film",
					"name": "ISO",
					"select": true
				},
				{
					"class": "search-by-capture-date",
					"group": "search-by",
					"icon": "fa fa-calendar-alt",
					"name": "Capture Date",
					"select": true
				}
			]
		},
		"separator",
		{
			"class": "sharing",
			"icon": "fa fa-share",
			"name": "By Sharing",
			"select": true,
			"menu": [
				{
					"class": "search-by-shared-with-me",
					"group": "search-by",
					"icon": "fa fa-reply",
					"name": "Shared with Me",
					"select": true
				},
				{
					"class": "search-by-shared-by-me",
					"group": "search-by",
					"icon": "fa fa-share",
					"name": "Shared by Me",
					"select": true
				},
				{
					"class": "search-by-links",
					"group": "search-by",
					"icon": "fa fa-link",
					"name": "Links",
					"select": true
				}
			]
		},
		"separator",
		{
			"class": "index-items",
			"icon": "fa fa-list",
			"name": "Index Items"
		},
		{
			"class": "unindex-items",
			"icon": "fa fa-close",
			"name": "Unindex Items"
		}
	],

	events: {
		'click .search-by > a': 'onClickSearchBy',
		'click .index-items': 'onClickIndexItems',
		'click .unindex-items': 'onClickUnindexItems'
	},

	//
	// querying methods
	//

	visible: function() {
		return {
			'index-items': true,
			'unindex-items': true,
		}
	},

	enabled: function() {
		let hasSelected = this.parent.app.hasSelected();

		return {
			'index-items': hasSelected,
			'unindex-items': hasSelected
		}
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let searchKind = preferences.get('search_kind');

		return {
			'name': searchKind == 'name',
			'kind': searchKind == 'kind',
			'size': searchKind == 'size',
			'keyword': searchKind == 'keyword',
			'meaning': searchKind == 'meaning',
			'create-date': searchKind == 'create_date',
			'modify-date': searchKind == 'modify_date',
			'access-date': searchKind == 'access_date',
			'resolution': searchKind == 'resolution',
			'make-model': searchKind == 'make_model',
			'focal-length': searchKind == 'focal_length',
			'aperture': searchKind == 'aperture',
			'exposure': searchKind == 'exposure',
			'iso': searchKind == 'iso',
			'capture-date': searchKind == 'capture_date'
		};
	},

	//
	// mouse event handling methods
	//

	onClickIndexItems: function() {

		// index selected items
		//
		this.parent.app.indexSelected();
	},

	onClickUnindexItems: function() {

		// unindex selected items
		//
		this.parent.app.unindexSelected();
	}
});
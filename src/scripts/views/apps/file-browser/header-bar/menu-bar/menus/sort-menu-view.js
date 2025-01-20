/******************************************************************************\
|                                                                              |
|                               sort-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying sort dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import SortMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/sort-menu-view.js';

export default SortMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "name",
			"group": "sort-by",
			"icon": "fa fa-font",
			"name": "By Name",
			"select": true
		},
		{
			"class": "kind",
			"group": "sort-by",
			"icon": "fa fa-file",
			"name": "By Kind",
			"select": true
		},
		"separator",
		{
			"class": "size",
			"group": "sort-by",
			"icon": "fa fa-download",
			"name": "By Size",
			"select": true
		},
		{
			"class": "date",
			"icon": "fa fa-calendar-alt",
			"name": "By Date",
			"select": true,
			"menu": [
				{
					"class": "create-date",
					"group": "sort-by",
					"icon": "fa fa-magic",
					"name": "Create Date",
					"select": true
				},
				{
					"class": "modify-date",
					"group": "sort-by",
					"icon": "fa fa-edit",
					"name": "Modify Date",
					"select": true
				},
				{
					"class": "access-date",
					"group": "sort-by",
					"icon": "fa fa-eye",
					"name": "Access Date",
					"select": true
				}
			]
		},
		{
			"class": "audio",
			"icon": "fa fa-music",
			"name": "By Audio",
			"select": true,
			"menu": [
				{
					"class": "album",
					"group": "sort-by",
					"icon": "fa fa-folder",
					"name": "Album",
					"select": true
				},
				{
					"class": "artist",
					"group": "sort-by",
					"icon": "fa fa-user",
					"name": "Artist",
					"select": true
				},
				{
					"class": "band",
					"group": "sort-by",
					"icon": "fa fa-users",
					"name": "Band",
					"select": true
				},
				{
					"class": "composer",
					"group": "sort-by",
					"icon": "fa fa-magic",
					"name": "Composer",
					"select": true
				},
				{
					"class": "genre",
					"group": "sort-by",
					"icon": "fa fa-tags",
					"name": "Genre",
					"select": true
				},
				{
					"class": "length",
					"group": "sort-by",
					"icon": "fa fa-clock",
					"name": "Length",
					"select": true
				},
				{
					"class": "publisher",
					"group": "sort-by",
					"icon": "fa fa-money-bill",
					"name": "Publisher",
					"select": true
				},
				{
					"class": "track-number",
					"group": "sort-by",
					"icon": "fa fa-list-ol",
					"name": "Track Number",
					"select": true
				},
				{
					"class": "year",
					"group": "sort-by",
					"icon": "fa fa-calendar-alt",
					"name": "Year",
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
					"class": "resolution",
					"group": "sort-by",
					"icon": "fa fa-arrows-alt",
					"name": "Resolution",
					"select": true
				},
				{
					"class": "make-model",
					"group": "sort-by",
					"icon": "fa fa-camera",
					"name": "Make / Model",
					"select": true
				},
				{
					"class": "focal-length",
					"group": "sort-by",
					"icon": "fa fa-arrows-alt-h",
					"name": "Focal Length",
					"select": true
				},
				{
					"class": "aperture",
					"group": "sort-by",
					"icon": "fa fa-dot-circle",
					"name": "Aperture",
					"select": true
				},
				{
					"class": "exposure",
					"group": "sort-by",
					"icon": "fa fa-clock",
					"name": "Exposure",
					"select": true
				},
				{
					"class": "iso",
					"group": "sort-by",
					"icon": "fa fa-film",
					"name": "ISO",
					"select": true
				},
				{
					"class": "capture-date",
					"group": "sort-by",
					"icon": "fa fa-calendar-alt",
					"name": "Capture Date",
					"select": true
				}
			]
		},
		"separator",
		{
			"class": "sort-increasing",
			"group": "sort-order",
			"icon": "fa fa-sort-amount-up",
			"name": "Increasing",
			"select": true
		},
		{
			"class": "sort-decreasing",
			"group": "sort-order",
			"icon": "fa fa-sort-amount-down",
			"name": "Decreasing",
			"select": true
		}
	],

	//
	// querying methods
	//

	hidden: function() {
		return {
			'audio': this.parent.app.model.get('num_audio_files') == 0,
			'photo': this.parent.app.model.get('num_image_files') == 0
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let sortKind = preferences.get('sort_kind');
		let sortOrder = preferences.get('sort_order');

		return {
			'name': sortKind == 'name',
			'kind': sortKind == 'kind',
			'size': sortKind == 'size',
			'create-date': sortKind == 'create_date',
			'modify-date': sortKind == 'modify_date',
			'access-date': sortKind == 'access_date',
			'resolution': sortKind == 'resolution',
			'make-model': sortKind == 'make_model',
			'focal-length': sortKind == 'focal_length',
			'aperture': sortKind == 'aperture',
			'exposure': sortKind == 'exposure',
			'iso': sortKind == 'iso',
			'capture-date': sortKind == 'capture_date',
			'sort-increasing': sortOrder == 'increasing',
			'sort-decreasing': sortOrder == 'decreasing'
		};
	},

	//
	// event handling methods
	//

	onChange: function() {
		this.setItemVisible('audio', this.parent.app.model.get('num_audio_files') > 0);
		this.setItemVisible('photo', this.parent.app.model.get('num_image_files') > 0);
	}
});
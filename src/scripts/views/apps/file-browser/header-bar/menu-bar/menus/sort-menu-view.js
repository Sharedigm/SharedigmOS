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
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import SortMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/sort-menu-view.js';

export default SortMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .sort-kind': 'onClickSortKind',
		'click .sort-order': 'onClickSortOrder'
	},

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

		return {
			'sort-kind name': preferences.matches('sort_kind', 'name'),
			'sort-kind kind': preferences.matches('sort_kind', 'kind'),
			'sort-kind size': preferences.matches('sort_kind', 'size'),
			'sort-kind create-date': preferences.matches('sort_kind', 'create_date'),
			'sort-kind modify-date': preferences.matches('sort_kind', 'modify_date'),
			'sort-kind access-date': preferences.matches('sort_kind', 'access_date'),
			'sort-kind resolution': preferences.matches('sort_kind', 'resolution'),
			'sort-kind make-model': preferences.matches('sort_kind', 'make_model'),
			'sort-kind focal-length': preferences.matches('sort_kind', 'focal_length'),
			'sort-kind aperture': preferences.matches('sort_kind', 'aperture'),
			'sort-kind exposure': preferences.matches('sort_kind', 'exposure'),
			'sort-kind iso': preferences.matches('sort_kind', 'iso'),
			'sort-kind capture-date': preferences.matches('sort_kind', 'capture_date'),
			'sort-order increasing': preferences.matches('sort_order', 'increasing'),
			'sort-order decreasing': preferences.matches('sort_order', 'decreasing')
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
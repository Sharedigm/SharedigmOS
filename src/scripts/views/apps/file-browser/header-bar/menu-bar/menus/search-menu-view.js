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
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import SearchMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/search-menu-view.js';

export default SearchMenuView.extend({

	//
	// attributes
	//

	events: {
		'click .search-kind': 'onClickSearchKind',
		'click .index-items': 'onClickIndexItems',
		'click .unindex-items': 'onClickUnindexItems'
	},

	//
	// querying methods
	//

	visible: function() {
		let hasConnectionManager = application.hasApp('connection_manager');

		return {
			'search-by-shared-with-me': hasConnectionManager,
			'search-by-shared-by-me': hasConnectionManager,
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

		return {
			'search-kind name': preferences.matches('search_kind', 'name'),
			'search-kind kind': preferences.matches('search_kind', 'kind'),
			'search-kind size': preferences.matches('search_kind', 'size'),
			'search-kind keyword': preferences.matches('search_kind', 'keyword'),
			'search-kind meaning': preferences.matches('search_kind', 'meaning'),
			'search-kind create-date': preferences.matches('search_kind', 'create_date'),
			'search-kind modify-date': preferences.matches('search_kind', 'modify_date'),
			'search-kind access-date': preferences.matches('search_kind', 'access_date'),
			'search-kind resolution': preferences.matches('search_kind', 'resolution'),
			'search-kind make-model': preferences.matches('search_kind', 'make_model'),
			'search-kind focal-length': preferences.matches('search_kind', 'focal_length'),
			'search-kind aperture': preferences.matches('search_kind', 'aperture'),
			'search-kind exposure': preferences.matches('search_kind', 'exposure'),
			'search-kind iso': preferences.matches('search_kind', 'iso'),
			'search-kind capture-date': preferences.matches('search_kind', 'capture_date')
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
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

import MenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/menu-view.js';

export default MenuView.extend({

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

	selected: function() {
		let preferences = this.parent.app.preferences;

		// set initial menu state
		//
		return {
			'sort-order increasing': preferences.matches('sort_order', 'increasing'),
			'sort-order decreasing': preferences.matches('sort_order', 'decreasing')
		};
	},

	//
	// mouse event handling methods
	//

	onClickSortKind: function(event) {
		let sortKind = this.getItemName(event.target);

		// update menu
		//
		this.setGroupItemSelected('sort_kind', sortKind);

		// update app
		//
		this.parent.app.setOption('sort_kind', sortKind);
		this.parent.app.getChildView('contents').onChange();
	},

	onClickSortOrder: function(event) {
		let sortOrder = this.getItemName(event.target);

		// update menu
		//
		this.setGroupItemSelected('sort_order', sortOrder);

		// update app
		//
		this.parent.app.setOption('sort_order', sortOrder);
		this.parent.app.getChildView('contents').onChange();
	}
});
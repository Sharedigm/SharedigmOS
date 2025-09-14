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

import MenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/menu-view.js';

export default MenuView.extend({

	//
	// attributes
	//

	events: {
		'click .search-kind': 'onClickSearchKind'
	},

	//
	// setting methods
	//

	setSearchKind: function(searchKind) {

		// update menu
		//
		this.setGroupItemSelected('search_kind', searchKind);

		// set selected search menu item
		//
		if (searchKind) {
			let searchBy = searchKind.replace(/_/g, '-');
			searchBy = searchBy.replace('min', 'num').replace('max', 'num');
			searchBy = searchBy.replace('before_', '').replace('after_', '');
			searchBy = searchBy.replace('before', 'date').replace('after', 'date');
			this.setItemSelected('search-by-' + searchBy, true);
		}
	},

	//
	// mouse event handling methods
	//

	onClickSearchKind: function(event) {
		let searchKind = this.getItemName(event.target);

		// show / hide search
		//
		if (!this.isItemSelected(searchKind)) {
			let search = [];
			search[searchKind] = undefined;
			this.parent.parent.showSearch(search);
		} else {
			this.parent.parent.showSearch();
		}
	},
});
/******************************************************************************\
|                                                                              |
|                                view-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying view dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ViewMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/view-menu-view.js';

export default ViewMenuView.extend({

	//
	// attributes
	//

	events: {

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// view options
		//
		'click .view-source': 'onClickViewSource',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',

		// window options
		//
		'click .shrink-window': 'onClickShrinkWindow',
		'click .grow-window': 'onClickGrowWindow',
		'click .expand-window': 'onClickExpandWindow',

		// desktop options
		//
		'click .prev-space': 'onClickPrevSpace',
		'click .next-space': 'onClickNextSpace',
		'click .minimize-all': 'onClickMinimizeAll',
		'click .unminimize-all': 'onClickUnminimizeAll',
		'click .view-full-screen': 'onClickViewFullScreen',

		// preferences options
		//
		'click .view-preferences': 'onClickViewPreferences'
	},

	//
	// querying methods
	//

	selected: function() {
		let preferences = this.parent.app.preferences;

		return {

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels index': preferences.includes('sidebar_panels', 'index')
		};	
	},

	//
	// mouse event handling methods
	//

	onClickViewSource: function() {
		this.parent.app.showSource();
	},

	onClickShowSideBar: function() {

		// update menu
		//
		this.toggleMenuItem('show-sidebar');

		// update parent
		//
		this.parent.app.setOption('show_sidebar', this.isItemSelected('show-sidebar'));
	}
});
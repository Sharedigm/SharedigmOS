/******************************************************************************\
|                                                                              |
|                               view-menu-view.js                              |
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

		// view options
		//
		'click li[type="detail-kind"]': 'onClickDetailKind',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',

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

	visible: function() {
		let hasMapViewer = config.apps.map_viewer != undefined && config.apps.map_viewer.hidden != true;

		return {
			'show-actions-panel': hasMapViewer
		};
	},

	enabled: function() {
		let isCurrent = this.parent.app.model.isCurrent();

		return {
			'show-mutual-connections-panel': !isCurrent
		};
	},

	selected: function() {
		let preferences = this.parent.parent.app.preferences;

		return {

			// detail options
			//
			'detail-kind profile': preferences.matches('detail_kind', 'profile'),
			'detail-kind posts': preferences.matches('detail_kind', 'posts'),
			'detail-kind connections': preferences.matches('detail_kind', 'connections'),
			'detail-kind sharing': preferences.matches('detail_kind', 'sharing'),

			// sidebar options
			//
			'show-sidebar': preferences.includes('panes', 'sidebar'),
			'sidebar-panels activity': preferences.includes('sidebar_panels', 'activity'),
			'sidebar-panels status': preferences.includes('sidebar_panels', 'status'),
			'sidebar-panels actions': preferences.includes('sidebar_panels', 'actions'),
			'sidebar-panels mutual-connections': preferences.includes('sidebar_panels', 'mutual_connections'),

			// sidebar item options
			//
			'sidebar-view-kind icons': preferences.matches('sidebar_view_kind', 'icons'),
			'sidebar-view-kind lists': preferences.matches('sidebar_view_kind', 'lists'),
			'sidebar-view-kind cards': preferences.matches('sidebar_view_kind', 'cards'),
			'sidebar-view-kind tiles': preferences.matches('sidebar_view_kind', 'tiles')
		};
	}
});
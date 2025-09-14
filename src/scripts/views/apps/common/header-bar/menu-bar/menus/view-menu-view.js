/******************************************************************************\
|                                                                              |
|                              view-menu-view.js                               |
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

import MenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/menu-view.js';

export default MenuView.extend({

	//
	// attributes
	//

	events: {

		// view options
		//
		'click .view-kind': 'onClickViewKind',
		'click .map-view-kind': 'onClickMapViewKind',
		'click .property-kind': 'onClickPropertyKind',

		// details options
		//
		'click .view-details': 'onClickViewDetails',
		'click .detail-kind': 'onClickDetailKind',
		'click .date-format': 'onClickDateFormat',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',
		'click .sidebar-tile-size': 'onClickSideBarTileSize',

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

	visible: function() {
		let isDesktop = this.parent.app.isDesktop();
		let hasSpaces = isDesktop && this.parent.app.hasSpaces();
		let isWindowed = !isDesktop;

		return {
			'window-size': isWindowed,
			'spaces': hasSpaces,
			'windows': isDesktop,
			'view-full-screen': isDesktop
		};
	},

	//
	// toggling methods
	//

	toggleOption: function(option) {

		// call superclass method
		//
		this.toggleMenuItem(option);

		// update parent
		//
		this.parent.app.setOption(option, this.isItemSelected(option));
	},

	toggleToolbar: function(toolbar) {

		// call superclass method
		//
		this.toggleMenuItem('toolbars ' + toolbar);

		// update parent
		//
		this.parent.app.setOption('toolbars', this.getSelectedGroupItems('toolbars'));
	},

	toggleLayer: function(layer) {

		// call superclass method
		//
		this.toggleMenuItem('layers ' + layer);

		// update parent
		//
		this.parent.app.setOption('layers', this.getSelectedGroupItems('layers'));
	},

	toggleSideBarPanel: function(panel) {

		// call superclass method
		//
		this.toggleMenuItem('sidebar-panels ' + panel);

		// update parent
		//
		this.parent.app.setOption('sidebar_panels', this.getSelectedGroupItems('sidebar_panels'));
	},

	//
	// rendering methods
	//

	showSettingsManager: function() {
		application.launch('settings_manager', {
			app: this.parent.app
		});
	},

	//
	// mouse event handling methods
	//

	onClickOption: function(event) {
		let option = this.getItemName($(event.currentTarget));

		// update menu and app
		//
		this.toggleOption(option);
	},

	onClickViewKind: function(event) {
		let viewKind = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.setGroupItemSelected('view_kind', viewKind);

		// update app
		//
		this.parent.app.setOption('view_kind', viewKind);
	},

	onClickMapViewKind: function(event) {
		let mapViewKind = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.setGroupItemSelected('map_view_kind', mapViewKind);

		// update app
		//
		this.parent.app.setOption('map_view_kind', mapViewKind);
	},

	onClickViewDetails: function() {
		let detailKinds = this.getSelectedGroupItems('detail_kind');

		// update menu
		//
		this.setItemsDeselected(detailKinds);
		this.setItemSelected('view-details', false);

		// update app
		//
		this.parent.app.setOption('detail_kind', false);
	},

	onClickDetailKind: function(event) {
		let detailKind = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.setGroupItemSelected('detail_kind', detailKind);
		this.setItemSelected('view-details', true);

		// update app
		//
		this.parent.app.setOption('detail_kind', detailKind);
	},

	onClickDateFormat: function(event) {
		let dateFormat = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.setGroupItemSelected('date_format', dateFormat);

		// update app
		//
		this.parent.app.setOption('date_format', dateFormat);
	},

	//
	// sidebar mouse event handling methods
	//

	onClickShowSidebar: function(event) {
		this.onClickOption(event);
	},

	onClickSideBarPanel: function(event) {
		let sidebarPanel = this.getItemName($(event.currentTarget));

		// update menu and app
		//
		this.toggleSideBarPanel(sidebarPanel);
	},

	onClickSideBarViewKind: function(event) {
		let sidebarViewKind = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.setGroupItemSelected('sidebar_view_kind', sidebarViewKind);

		// update app
		//
		this.parent.app.setOption('sidebar_view_kind', sidebarViewKind);
	},

	onClickSideBarTileSize: function(event) {
		let sidebarTileSize = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.setGroupItemSelected('sidebar_tile_size', sidebarTileSize);

		// update app
		//
		this.parent.app.setOption('sidebar_tile_size', sidebarTileSize);
	},

	//
	// toolbar mouse event handling methods
	//

	onClickShowToolbars: function() {
		let showToolbars = this.isItemSelected('show_toolbars');

		// update menu
		//
		this.toggleMenuItem('show-toolbars');

		// update app
		//
		this.parent.app.setOption('toolbars', !showToolbars);
	},

	onClickShowToolbar: function(event) {
		let name = this.getItemName($(event.target).closest('a'));

		// update toolbar
		//
		this.toggleToolbar(name);
	},

	//
	// window mouse event handling methods
	//

	onClickShrinkWindow: function() {
		this.parent.app.dialog.shrink();
	},

	onClickGrowWindow: function() {
		this.parent.app.dialog.grow();
	},

	onClickExpandWindow: function() {
		this.parent.app.expand();
	},

	//
	// desktop event handling methods
	//

	onClickPrevSpace: function() {
		this.parent.app.prevSpace();
	},

	onClickNextSpace: function() {
		this.parent.app.nextSpace();
	},

	onClickMinimizeAll: function() {
		if (this.hasParentView('desktop')) {
			this.getParentView('desktop').getChildView('modals').minimizeAll();
		}
	},

	onClickUnminimizeAll: function() {
		if (this.hasParentView('desktop')) {
			this.getParentView('desktop').getChildView('footer tasks').unminimizeAll();
		}
	},

	onClickViewFullScreen: function() {
		application.toggleFullScreen();
	},
	
	//
	// preference mouse event handling methods
	//

	onClickViewPreferences: function() {
		if (this.show_settings_manager != false) {
			this.showSettingsManager();
		} else {
			this.parent.app.showPreferencesDialog();
		}
	}
});
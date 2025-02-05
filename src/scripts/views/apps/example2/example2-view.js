/******************************************************************************\
|                                                                              |
|                                example2-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines an app used as an example two column app.                |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import AppSplitView from '../../../views/apps/common/app-split-view.js';
import HeaderBarView from '../../../views/apps/example2/header-bar/header-bar-view.js';
import SideBarView from '../../../views/apps/example2/sidebar/sidebar-view.js';
import ContentView from '../../../views/apps/example2/mainbar/content-view.js';
import FooterBarView from '../../../views/apps/example2/footer-bar/footer-bar-view.js';

export default AppSplitView.extend({

	//
	// attributes
	//

	name: 'example2',

	//
	// rendering methods
	//

	onRender: function() {

		// call superclass method
		//
		AppSplitView.prototype.onRender.call(this);

		// show child views
		//
		this.showHeaderBar();
		this.showContents();
		this.showFooterBar();

		// load menus
		//
		this.onLoad();

		// show initial message
		//
		this.showMessage("Your App Here!");
	},

	//
	// header bar rendering methods
	//

	getHeaderBarView: function() {
		return new HeaderBarView();
	},

	//
	// content rendering methods
	//

	getSideBarView: function() {
		return new SideBarView();
	},

	getContentView: function() {
		return new ContentView();
	},

	//
	// footer bar rendering methods
	//

	getFooterBarView: function() {
		return new FooterBarView();
	}
});
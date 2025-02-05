/******************************************************************************\
|                                                                              |
|                                example1-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines an app used as an example single column app.             |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import AppView from '../../../views/apps/common/app-view.js';
import HeaderBarView from '../../../views/apps/example1/header-bar/header-bar-view.js';
import FooterBarView from '../../../views/apps/example1/footer-bar/footer-bar-view.js';

export default AppView.extend({

	//
	// attributes
	//

	name: 'example1',

	//
	// rendering methods
	//

	onRender: function() {

		// call superclass method
		//
		AppView.prototype.onRender.call(this);

		// show child views
		//
		this.showHeaderBar();
		this.showContents();
		this.showFooterBar();

		// load menus
		//
		this.onLoad();
	},

	showContents: function() {
		this.showMessage("Your App Here!");
	},

	//
	// header bar rendering methods
	//

	getHeaderBarView: function() {
		return new HeaderBarView();
	},

	//
	// footer bar rendering methods
	//

	getFooterBarView: function() {
		return new FooterBarView();
	}
});
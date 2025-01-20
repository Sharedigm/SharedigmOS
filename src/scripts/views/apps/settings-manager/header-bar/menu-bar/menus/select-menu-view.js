/******************************************************************************\
|                                                                              |
|                              select-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying file dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import SelectMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/select-menu-view.js';

export default SelectMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "select-first",
			"icon": "fa fa-fast-backward",
			"name": "First",
			"shortcut": "up arrow"
		},
		{
			"class": "select-prev",
			"icon": "fa fa-backward",
			"name": "Prev",
			"shortcut": "left arrow"
		},
		{
			"class": "select-next",
			"icon": "fa fa-forward",
			"name": "Next",
			"shortcut": "right arrow"
		},
		{
			"class": "select-last",
			"icon": "fa fa-fast-forward",
			"name": "Last",
			"shortcut": "down arrow"
		}
	],

	events: {
		'click .select-first': 'onClickSelectFirst',
		'click .select-prev': 'onClickSelectPrev',
		'click .select-next': 'onClickSelectNext',
		'click .select-last': 'onClickSelectLast'
	},

	enabled: function() {
		return this.parent.app.preferences.get('show_sidebar');
	},

	//
	// mouse event handling methods
	//

	onClickSelectFirst: function() {
		this.parent.app.select('first');
	},

	onClickSelectPrev: function() {
		this.parent.app.select('prev');
	},

	onClickSelectNext: function() {
		this.parent.app.select('next');
	},

	onClickSelectLast: function() {
		this.parent.app.select('last');
	}
});
/******************************************************************************\
|                                                                              |
|                               view-menu-view.js                              |
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

import ViewMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/view-menu-view.js';

export default ViewMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "window-size",
			"icon": "far fa-window-maximize",
			"name": "Window Size",
			"menu": [
				{
					"class": "shrink-window",
					"icon": "fa fa-minus",
					"name": "Shrink",
					"shortcut": "command-["
				},
				{
					"class": "grow-window",
					"icon": "fa fa-plus",
					"name": "Grow",
					"shortcut": "command-]"
				},
				{
					"class": "expand-window",
					"icon": "fa fa-expand",
					"name": "Expand",
					"shortcut": "command-\\"
				}
			]
		},
		"separator",
		{
			"class": "spaces",
			"icon": "far fa-window-maximize",
			"name": "Spaces",
			"select": true,
			"menu": [
				{
					"class": "prev-space",
					"icon": "fa fa-chevron-left",
					"name": "Prev",
					"shortcut": "command-left arrow"
				},
				{
					"class": "next-space",
					"icon": "fa fa-chevron-right",
					"name": "Next",
					"shortcut": "command-right arrow"
				}
			]
		},
		{
			"class": "windows",
			"icon": "far fa-window-restore",
			"name": "Windows",
			"select": true,
			"menu": [
				{
					"class": "minimize-all",
					"icon": "fa fa-window-minimize",
					"name": "Minimize All"
				},
				{
					"class": "unminimize-all",
					"icon": "fa fa-window-restore",
					"name": "Unminimize All"
				}
			]
		},
		{
			"class": "view-full-screen",
			"icon": "fa fa-desktop",
			"name": "Full Screen",
			"shortcut": "command-up arrow",
			"select": true
		},
		"separator",
		{
			"class": "view-preferences",
			"icon": "fa fa-snowflake",
			"name": "Preferences"
		}
	],

	events: {

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
	}
});
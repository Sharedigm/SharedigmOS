/******************************************************************************\
|                                                                              |
|                              select-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying select dropdown menus.                  |
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
			"class": "select-all",
			"icon": "fa fa-asterisk",
			"name": "All",
			"shortcut": "command-A"
		},
		{
			"class": "select-none",
			"icon": "fa fa-minus",
			"name": "None",
			"shortcut": "shift-command-A"
		},
		{
			"class": "select-invert",
			"icon": "fa fa-random",
			"name": "Invert",
			"shortcut": "shift-command-I"
		},
		"separator",
		{
			"class": "select-multiple",
			"icon": "fa fa-ellipsis-h",
			"name": "Multiple",
			"shortcut": "shift-command-M",
			"select": true
		},
		"separator",
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
		},
		"separator",
		{
			"class": "select-before",
			"icon": "fa fa-long-arrow-left",
			"name": "Before",
			"shortcut": "command-9"
		},
		{
			"class": "select-after",
			"icon": "fa fa-long-arrow-right",
			"name": "After",
			"shortcut": "command-0"
		},
		"separator",
		{
			"class": "select-files",
			"icon": "fa fa-file",
			"name": "Files",
			"shortcut": "command-F"
		},
		{
			"class": "select-folders",
			"icon": "fa fa-folder",
			"name": "Folders",
			"shortcut": "command-G"
		}
	],

	events: {
		'click .select-all': 'onClickSelectAll',
		'click .select-none': 'onClickSelectNone',
		'click .select-invert': 'onClickSelectInvert',
		'click .select-multiple': 'onClickSelectMultiple',
		'click .select-first': 'onClickSelectFirst',
		'click .select-prev': 'onClickSelectPrev',
		'click .select-next': 'onClickSelectNext',
		'click .select-last': 'onClickSelectLast',
		'click .select-before': 'onClickSelectBefore',
		'click .select-after': 'onClickSelectAfter',
		'click .select-files': 'onClickSelectFiles',
		'click .select-folders': 'onClickSelectFolders'
	},

	//
	// querying methods
	//

	enabled: function() {
		let hasSelected = this.parent.app.hasSelected();
		let hasChildren = this.parent.app.hasChildren();
		let allSelected = this.parent.app.allSelected();

		return {
			'select-all': !allSelected,
			'select-none': hasSelected,
			'select-invert': hasSelected && !allSelected,
			'select-multiple': hasChildren,
			'select-first': hasSelected,
			'select-prev': hasSelected,
			'select-next': hasSelected,
			'select-last': hasSelected,
			'select-before': hasSelected,
			'select-after': hasSelected,
			'select-files': hasChildren,
			'select-folders': hasChildren
		};
	},

	//
	// mouse event handling methods
	//

	onClickSelectAll: function() {
		this.parent.app.selectAll();
	},

	onClickSelectNone: function() {
		this.parent.app.deselectAll();
	},

	onClickSelectInvert: function() {
		this.parent.app.selectInvert();
	},

	onClickSelectMultiple: function() {
		this.parent.app.setMultiSelectable(this.toggleMenuItem('select-multiple'));
	},

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
	},

	onClickSelectBefore: function() {
		this.parent.app.select('before');
	},

	onClickSelectAfter: function() {
		this.parent.app.select('after');
	},

	onClickSelectFiles: function() {
		this.parent.app.select('files');
	},

	onClickSelectFolders: function() {
		this.parent.app.select('folders');
	}
});
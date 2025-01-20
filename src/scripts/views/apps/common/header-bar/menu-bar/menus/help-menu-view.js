/******************************************************************************\
|                                                                              |
|                              help-menu-view.js                               |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying help dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import File from '../../../../../../models/storage/files/file.js';
import Topic from '../../../../../../models/topics/topic.js';
import MenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/menu-view.js';
import AddressBar from '../../../../../../utilities/web/address-bar.js';

export default MenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "view-about-info",
			"icon": "fa fa-info-circle",
			"name": "About"
		},
		"separator",
		{
			"class": "view-app",
			"icon": "fa fa-question-circle",
			"name": "View Help Pages"
		},
		{
			"class": "view-topic",
			"icon": "fa fa-newspaper",
			"name": "Search Community Help"
		},
		"separator",
		{
			"class": "contact-us",
			"icon": "fa fa-envelope",
			"name": "Contact Us"
		},
	],

	events: {
		'click .view-about-info': 'onClickViewAboutInfo',
		'click .view-app': 'onClickViewApp',
		'click .view-topic': 'onClickViewTopic',
		'click .contact-us': 'onClickContactUs'
	},

	//
	// querying methods
	//

	visible: function() {
		return {
			'view-about-info': application.hasApp('help_viewer'),
			'view-app': application.hasApp('help_viewer') && config.defaults.help.show_app,
			'view-topic': application.hasApp('topic_viewer') && config.defaults.help.show_topic,
			'contact-us': config.defaults.help.show_contact
		};
	},

	//
	// getting methods
	//

	getUrl: function() {
		return '#help/apps/' + this.parent.app.name.replace(/_/g, '-');
	},

	getAppName: function() {
		return config.apps[this.parent.app.name].name;
	},

	//
	// rendering methods
	//

	render: function() {

		// set app name in first menu item
		//
		this.items[0].name = "About " + this.getAppName();

		// call superclass method
		//
		MenuView.prototype.render.call(this);
	},

	//
	// mouse event handling methods
	//

	onClickViewAboutInfo: function() {
		application.launch('help_viewer', {
			url: this.getUrl()
		});
	},

	onClickViewApp: function() {
		application.launch('help_viewer');
	},

	onClickViewPdf: function() {
		application.launch('pdf_viewer', {
			model: new File({
				path: config.defaults.help.docs
			})
		});
	},

	onClickViewTopic: function() {
		application.launch('topic_viewer', {
			topic: new Topic({
				name: config.defaults.help.topic
			}),

			// options
			//
			search: {
				message: this.getAppName()
			},

			// capabilities
			//
			editable: true
		});
	},

	onClickContactUs: function() {
		application.showUrl(AddressBar.get('base') + '#contact');
	}
});
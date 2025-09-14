/******************************************************************************\
|                                                                              |
|                          preferences-group-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines an abstract base class for form views.                   |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import App from '../../../../models/apps/app.js';
import Apps from '../../../../collections/apps/apps.js';
import FormView from '../../../../views/forms/form-view.js';
import AppIconsView from '../../../../views/apps/common/items/icons/app-icons-view.js';
import PreferencesFormView from '../../../../views/apps/common/forms/preferences-form-view.js';

export default FormView.extend({

	//
	// attributes
	//

	tagName: 'form',
	className: 'form-vertical',

	template: template(`
		<div class="app-icons"></div>

		<% if (typeof tabs != 'undefined') { %>
		<ul class="nav nav-tabs" role="tablist">
			<% for (let i = 0; i < tabs.length; i++) { %>
			<% let tab = tabs[i]; %>
			<% let name = tab.name; %>
			<% let icon = tab.icon; %>
			<% let text = tab.text; %>
			<% let className = name.replace(/_/g, '-'); %>
			<li role="presentation" class="<%= className %>-tab<% if (i == 0) { %> active<% } %>">
				<a role="tab" data-toggle="tab" href=".<%= className %>-prefs">
					<i class="<%= icon %>"></i>
					<label><%= text %></label>
				</a>
			</li>
			<% } %>
		</ul>

		<div class="tab-content">
			<% for (let i = 0; i < tabs.length; i++) { %>
			<% let tab = tabs[i]; %>
			<% let name = tab.name; %>
			<% let icon = tab.icon; %>
			<% let className = name.replace(/_/g, '-'); %>
			<div role="tabpanel" class="<%= className %>-prefs tab-pane<% if (i == 0) { %> active<% } %>">
			</div>
			<% } %>
		</div>
		<% } %>
	`),

	tabs: [],

	//
	// constructor
	//

	initialize: function() {

		// get tabs from resources
		//
		let resources = this.options.resources;

		// set attributes
		//
		if (resources) {
			this.tabs = resources.preferences;
		}
	},

	//
	// querying methods
	//

	hasChanged: function() {

		// check for change from any child view
		//
		let childNames = Object.keys(this.regions);
		for (let i = 0; i < childNames.length; i++) {
			let childView = this.getChildView(childNames[i]);
			if (childView.hasChanged && childView.hasChanged()) {
				return true;
			}
		}
		return false;
	},

	//
	// getting methods
	//

	getValues: function() {

		// concatenate values from all child views
		//
		let values = {};
		let childNames = Object.keys(this.regions);
		for (let i = 0; i < childNames.length; i++) {
			let childView = this.getChildView(childNames[i]);
			if (childView && childView.getValues) {
				values = _.extend(values, childView.getValues());
			}
		}
		return values;
	},

	getOriginalValues: function() {

		// concatenate original values from all child views
		//
		let values = {};
		let childNames = Object.keys(this.regions);
		for (let i = 0; i < childNames.length; i++) {
			let childView = this.getChildView(childNames[i]);
			if (childView && childView.getValues) {
				values = _.extend(values, childView.getOriginalValues());
			}
		}
		return values;
	},

	getActiveTab: function() {
		let className = this.$el.find('.nav-tabs li.active').attr('class');
		return className.replace('active', '').replace('-tab', '').replace(/-/g, '_').trim();
	},

	getActiveView: function() {
		return this.getChildView(this.getActiveTab());
	},

	//
	// setting methods
	//

	setOption: function(key, value) {

		// notify parent
		//
		if (this.options.onchange) {
			this.options.onchange(key, value);
		} else if (this.parent.opener && this.parent.opener.setOption) {
			this.parent.opener.setOption(key, value);
		}

		// update form
		//
		if (this.update) {
			this.update();
		}
	},

	//
	// rendering methods
	//

	regions: function() {
		let regions = {
			item: {
				el: '.app-icons',
				replaceElement: true
			}
		};

		// add tab regions
		//
		if (this.options.resources) {
			let tabs = this.options.resources.preferences;
			for (let i = 0; i < tabs.length; i++) {
				let tab = tabs[i];
				let region = tab.name.toLowerCase().replace(/ /g, '_');
				let className = region.replace(/_/g, '-');
				regions[region] = '.' + className + '-prefs';
			}
		}

		return regions;
	},

	templateContext: function() {
		return {
			tab: this.options.tab,
			tabs: this.tabs
		};
	},

	onRender: function() {

		// show header icon
		//
		this.showAppIcon();

		// show tabs
		//
		this.showTabs();
	},

	showAppIcon: function() {
		this.showChildView('item', new AppIconsView({
			collection: new Apps(new App(
				config.apps[this.model.app]
			)),

			// capabilities
			//
			selectable: false
		}));
	},

	showTab: function(tab) {
		let region = tab;
		let options = this.options.resources[tab.replace(/-/g, '_') + '_prefs'];
		let preferences = options? options : {};

		if (this.hasRegion(region)) {
			this.showChildView(region, new PreferencesFormView({
				model: this.model,
				preferences: preferences,

				// callbacks
				//
				onchange: this.options.onchange
			}));
		}
	},

	showTabs: function() {
		for (let i = 0; i < this.tabs.length; i++) {
			this.showTab(this.tabs[i].name);
		}
	},

	update: function() {

		// show / hide sidebar tab
		//
		if (this.hasChildView('display')) {
			if (this.getChildView('display').getValue('show_sidebar')) {
				this.$el.find('.sidebar-tab').show();
			} else {
				this.$el.find('.sidebar-tab').hide();
			}
		}
	},

	//
	// keyboard event handling methods
	//

	onKeyDown: function(event) {
		let activeView = this.getActiveView();
		if (activeView && activeView.onKeyDown) {
			activeView.onKeyDown(event);
		}
	}
});
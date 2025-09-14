/******************************************************************************\
|                                                                              |
|                              help-cover-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view used for viewing help pages.                      |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import HelpPageView from '../../../../views/apps/help-viewer/mainbar/help-page-view.js';
import DomUtils from '../../../../utilities/web/dom-utils.js';

export default HelpPageView.extend({

	//
	// attributes
	//

	template: template(`
		<div class="contents container">
			<div class="center aligned cover content">

				<div class="logo">
					<img src="<%= logo %>" />
				</div>

				<% if (logotype) { %>
				<h1 class="brand">
					<% if (logotype.names) { %>
					<% let names = logotype.names; %>
					<% let keys = Object.keys(names); %>
					<% for (let i = 0; i < keys.length; i++) { %><% let key = keys[i]; %><span><%= key.replace(/ /g, '&nbsp') %></span><% } %>
					<% } %>
				</h1>
				<% } %>

				<h2 class="name"><%= name %></h2>

				<div>
					<p>Version <%= version %></p>
				</div>
			</div>
		</div>
	`),

	className: 'page',

	regions: {
		container: '.container'
	},

	events: {
		'click .title-icon': 'onClickTitleIcon'
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return {
			logo: config.settings.help.logo.src,
			logotype: config.branding.welcome.splash.brand.logotype,
			name: config.settings.help.name,
			version: config.settings.help.version
		};
	},

	onRender: function() {

		// set logo styles
		//
		this.setLogoStyles(this.$el.find('.logo'), config.settings.help.logo);

		// set logo image styles
		//
		if (config.settings.help.logo.rendering == 'pixelated') {
			this.$el.find('img').addClass('pixelated');
		}

		// set logotype styles
		//
		if (config.branding.welcome.splash.brand) {
			if (config.branding.welcome.splash.brand.logotype &&
				config.branding.welcome.splash.brand.logotype.font) {
				application.loadFont(config.branding.welcome.splash.brand.logotype.font);
			}
			this.setLogoTypeStyles(this.$el.find('.brand'), config.branding.welcome.splash.brand.logotype);
		}
	},

	setLogoStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		DomUtils.setBlockStyles(element, attributes);
		DomUtils.setBorderStyles(element, attributes);
		DomUtils.setBackgroundStyles(element, attributes);
	},

	setLogoTypeStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		// set font styles
		//
		DomUtils.setTitleStyles(element, attributes);

		// set logotype name styles
		//
		if (attributes.names) {
			let elements = $(element).find('> span');
			let keys = Object.keys(attributes.names);
			for (let i = 0; i < keys.length; i++) {
				DomUtils.setTitleStyles($(elements[i]), attributes.names[keys[i]]);
			}
		}
	},

	//
	// mouse event handling methods
	//

	onClickTitleIcon: function() {
		this.parent.parent.setAddress('#help');
	}
});
/******************************************************************************\
|                                                                              |
|                                 header-view.js                               |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the application header and associated content.           |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import '../../../vendor/bootstrap/js/collapse.js';
import BaseView from '../../views/base-view.js';
import DomUtils from '../../utilities/web/dom-utils.js';
import Browser from '../../utilities/web/browser.js';

export default BaseView.extend({

	//
	// attributes
	//

	id: 'header',

	template: template(`
		<div class="navbar navbar-fixed-top navbar-inverse">
			<div class="collapse navbar-collapse">
		
				<div class="navbar-brand">
					<div class="active brand">
						<% if (branding.header.brand.logo) { %>
						<img class="logo" src="<%= branding.header.brand.logo.src %>" />
						<% } %>
		
						<% if (branding.header.brand.logotype) { %>
						<div class="logotype">
							<% if (branding.header.brand.logotype.names) { %>
							<% let keys = Object.keys(branding.header.brand.logotype.names); %>
							<% for (let i = 0; i < keys.length; i++) { %><% let key = keys[i]; %><span><%= key.replace(/ /g, '&nbsp') %></span><% } %>
							<% } %>
						</div>
						<% } %>
					</div>
				</div>

				<!-- standard navbar -->
				<% if (branding.header.nav) { %>
				<ul class="nav heading navbar-nav">
					<% let keys = Object.keys(branding.header.nav) %>
					<% for (let i = 0; i < keys.length; i++) { %>
					<% let key = keys[i]; %>
					<% let nav_item = branding.header.nav[key]; %>
					<% let nav_name = nav_item.href.replace('#', ''); %>
					<% let className = ''; %>
					<% if (nav == nav_name) { %>
					<% className += " active"; %>
					<% } %>
					<% if (nav_item.platform) { %>
					<% className += " " + nav_item.platform; %>
					<% } %>
					<li<% if (className != '') {%> class="<%= className %>" <% } %>><a class="<%= nav_name %>" href="<%= nav_item.href %>"<% if (nav_item.color) { %> style="color:<%= nav_item.color %>"<% } %>><i class="<%= nav_item.icon %>"></i><label><%= key %></label></a></li>
					<% } %>
				</ul>
				<% } %>

				<ul class="navbar-nav navbar-right hidden-xs">
					<div class="navbar-form">
						<div class="buttons">
							<% let buttons = branding.header.buttons; %>
							<% let keys = Object.keys(buttons); %>

							<% if (show_sign_in) { %>
							<button class="sign-in btn btn-lg btn-primary">
								<i class="<%= buttons[keys[0]].icon %>"></i><%= keys[0] %>
							</button>
							<% } %>

							<% if (show_sign_up) { %>
							<button class="sign-up btn btn-lg">
								<i class="<%= buttons[keys[1]].icon %>"></i><%= keys[1] %>
							</button>
							<% } %>
						</div>
					</div>
				</ul>
			</div>
		</div>
	`),

	events: {
		'click .brand': 'onClickBrand',
		'click .sign-in': 'onClickSignIn',
		'click .sign-up': 'onClickSignUp',
	},

	//
	// constructor
	//

	initialize: function() {

		// load required fonts
		//
		if (config.branding.header.brand && config.branding.header.brand.logotype) {
			this.loadFonts(config.branding.header.brand.logotype);
		}
	},

	loadFonts: function(logotype) {
		if (logotype.font) {
			application.loadFont(logotype.font);
		}

		// load fonts for logotype names
		//
		if (logotype.names) {
			let keys = Object.keys(logotype.names);
			for (let i = 0; i < keys.length; i++) {
				let key = keys[i];
				if (logotype.names[key].font) {
					application.loadFont(logotype.names[key].font);
				}
			}
		}
	},

	//
	// setting methods
	//

	setNav: function(nav) {
		this.$el.find('ul.nav > li.active').removeClass('active');
		if (nav) {
			this.$el.find('ul.nav > li > a.' + nav).closest('li').addClass('active');
		}
	},

	setStyles: function(attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.height) {
			this.$el.css('min-height', attributes.height);
		}
		if (attributes.align == 'center') {
			this.$el.addClass('center-aligned');
		}
	},

	setLogoStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		// set logo styles
		//
		DomUtils.setBlockStyles($(element), attributes);
		DomUtils.setBorderStyles($(element), attributes);
		DomUtils.setBackgroundStyles($(element), attributes);
		DomUtils.setImageStyles($(element).find('img'), attributes);
	},

	setLogoTypeStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		// set logotype styles
		//
		DomUtils.setTextBlockStyles(this.$el.find('.brand'), attributes);

		// set logotype name styles
		//
		if (attributes.names) {
			let elements = this.$el.find('.brand .logotype span');
			let keys = Object.keys(attributes.names);
			for (let i = 0; i < keys.length; i++) {
				DomUtils.setTextBlockStyles($(elements[i]), attributes.names[keys[i]]);
			}
		}
	},

	setBrandStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		if (attributes.logo) {
			this.setLogoStyles(this.$el.find('.logo'), attributes.logo);
		}
		if (attributes.logotype) {
			this.setLogoTypeStyles(this.$el.find('.logotype'), attributes.logotype);
		}
	},

	setNavBarStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		// set nav bar styles
		//
		if (attributes.background == 'transparent') {
			$(element).css('background', attributes.background);
		}
		if (attributes.background && attributes.background != 'transparent') {
			$(element).addClass('colored').css('background', attributes.background);
		}
		if (attributes.font) {
			$(element).css('font-family', config.settings.fonts[attributes.font]['font-family']);
		}
		if (attributes.background == 'transparent') {
			$(element).removeClass('navbar-inverse');
		}

		// set nav item styles
		//
		if (attributes.color) {
			$(element).find('.navbar-nav li a').css('color', attributes.color).addClass('colored');
		}
		if (attributes.nav) {
			this.setNavStyles($(element).find('.navbar-nav'), attributes.nav);
		}
	},

	setNavStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		if (attributes.color) {
			this.$el.css({
				'color': attributes.color,
				'font-family': attributes.font
			});
		}
	},

	setButtonsStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		let keys = Object.keys(attributes);
		if (attributes[keys[0]]) {
			this.setButtonStyles($(element).find('.sign-in'), attributes[keys[0]]);
		}
		if (attributes[keys[1]]) {
			this.setButtonStyles($(element).find('.sign-up'), attributes[keys[1]]);
		}
	},

	setButtonStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}

		// set button colors
		//
		if (attributes.background) {
			$(element).css({
				'color': attributes.color,
				'background': attributes.background,
				'border-color': attributes.background
			});
		}
		if (attributes.color) {
			$(element).css('color', attributes.color);
		}
		if (attributes.font) {
			$(element).css('font-family', config.settings.fonts[attributes.font]['font-family']);
		}
	},

	setHeaderStyles: function(attributes) {
		this.setStyles(attributes);
		this.setNavBarStyles(this.$el.find('.navbar'), attributes);
		this.setBrandStyles(this.$el.find('.brand'), attributes.brand);
		this.setButtonsStyles(this.$el.find('.buttons'), attributes.buttons);
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return {
			defaults: config.settings.defaults,
			branding: config.branding,
			nav: this.options.nav,
			show_sign_in: application.session.has('config'),
			show_sign_up: application.session.has('config')? application.session.get('config').sign_up_enabled : false,
			is_mobile: Browser.is_mobile
		};
	},

	onRender: function() {

		// apply custom styles
		//
		if (config.branding.header) {
			this.setHeaderStyles(config.branding.header);
		}
	},

	//
	// mouse event handling methods
	//

	onClickBrand: function() {
		application.navigate('#', {
			reset: true
		});
	},

	onClickSignIn: function() {
		application.signIn();
	},

	onClickSignUp: function() {
		application.signUp();
	},

	//
	// cleanup method
	//

	onBeforeDestroy: function() {
		$('.tooltip').remove();
	}
});
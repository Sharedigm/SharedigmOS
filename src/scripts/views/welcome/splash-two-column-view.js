/******************************************************************************\
|                                                                              |
|                                  splash-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the splash view portion of the welcome view.             |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ImageFile from '../../models/storage/media/image-file.js';
import VideoFile from '../../models/storage/media/video-file.js';
import UserPreferences from '../../models/preferences/user-preferences.js';
import BaseView from '../../views/base-view.js';
import DomUtils from '../../utilities/web/dom-utils.js';

export default BaseView.extend({

	//
	// attributes
	//

	className: 'splash row two-column',

	regions: {
		background: '.background',
		masthead: {
			el: '.masthead > .overlay',
			replaceElement: true
		},
		carousel: {
			el: '.carousel .overlay',
			replaceElement: true
		},
		cells: {
			el: '.carousel-cells',
			replaceElement: true
		},
		details: {
			el: '.details',
			replaceElement: true
		}
	},

	events: {
		'click .logo': 'onClickLogo',
		'click .show-video': 'onClickShowVideo',
		'click .sign-in': 'onClickSignIn',
		'click .sign-up': 'onClickSignUp',
		'click .search .btn': 'onClickSearch'
	},

	//
	// constructor
	//

	initialize: function() {

		// load required fonts
		//
		if (config.branding.welcome.splash) {
			this.loadFonts(config.branding.welcome.splash);
		}
		if (config.branding.links) {
			for (let i = 0; i < config.branding.links.length; i++) {
				if (config.branding.links[i].font) {
					application.loadFont(config.branding.links[i].font);
				}
			}
		}
	},

	loadFonts: function(attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.brand && attributes.brand.logotype) {
			this.loadLogoTypeFonts(attributes.brand.logotype);
		}
		if (attributes.tagline && attributes.tagline.font) {
			application.loadFont(attributes.tagline.font);
		}
		if (attributes.description && attributes.description.font) {
			application.loadFont(attributes.description.font);
		}
	},

	loadLogoTypeFonts: function(logotype) {
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
	// querying methods
	//

	isMultiWord: function(names) {
		for (let i = 0; i < names.length; i++) {
			if (names[i].includes(' ')) {
				return true;
			}
		}
		return false;
	},

	//
	// getting methods
	//

	getImageUrls: function(paths) {
		let urls = [];
		for (let i = 0; i < paths.length; i++) {
			urls.push(new ImageFile({
				path: paths[i]
			}).getUrl());
		}
		return urls;
	},

	getLogoTypeLength: function(logotype) {
		let length = 0;

		if (logotype.names) {
			let keys = Object.keys(logotype.names);
			for (let i = 0; i < keys.length; i++) {
				let name = keys[i];
				if (name && !name.startsWith('.')) {
					length += name.length;
				}
			}
		}

		return length;
	},

	//
	// logo style setting methods
	//

	setLogoStyles: function(element, attributes) {
		if (!attributes) {
			return;
		}
		if (attributes.class) {
			$(element).addClass(attributes.class);
		}
		if (attributes.size) {
			$(element).addClass(attributes.size);
		}

		// set logo styles
		//
		DomUtils.setBlockStyles($(element), attributes);
		DomUtils.setBorderStyles($(element), attributes);
		DomUtils.setBackgroundStyles($(element), attributes);
		DomUtils.setImageStyles($(element).find('img'), attributes);
	},

	setLogoTypeStyles: function(element, attributes) {
		if ((this.getLogoTypeLength(attributes) < 8 || attributes.short) && attributes.short != false) {
			$(element).addClass('short');
		}
		if (this.getLogoTypeLength(attributes) > 15 || attributes.long) {
			$(element).addClass('long');
		}
		if (attributes.color) {
			$(element).css('color', attributes.color);
		}

		// set logotype text styles
		//
		DomUtils.setTextBlockStyles(element, attributes);

		// set logotype name text styles
		//
		if (attributes.names) {
			let elements = $(element).find('> span');
			let keys = Object.keys(attributes.names);
			for (let i = 0; i < keys.length; i++) {
				DomUtils.setTextBlockStyles($(elements[i]), attributes.names[keys[i]]);
			}
		}

		if (this.isMultiWord(Object.keys(attributes.names))) {
			$(element).addClass('multiword');
		}
	},

	//
	// splash style setting methods
	//

	setSplashStyles: function(element, splash) {

		// set splash styles
		//
		if (splash.width) {
			$(element).css('min-width', splash.width);
		}
		if (splash.brand) {
			this.setSplashBrandStyles(element, splash.brand);
		}
		if (splash) {
			DomUtils.setBackgroundStyles($(element), splash);
		}

		// set splash text styles
		//
		if (splash.greeting) {
			DomUtils.setTextBlockStyles($(element).find('.greeting'), splash.greeting);
		}
		if (splash.tagline) {
			DomUtils.setTextBlockStyles($(element).find('.tagline'), splash.tagline);
		}
		if (splash.description) {
			DomUtils.setTextBlockStyles($(element).find('.description'), splash.description);
		}

		// set search styles
		//
		if (splash.search) {
			DomUtils.setTextBlockStyles($(element).find('.search'), splash.search);
		}
	},

	setSplashBrandStyles: function(element, attributes) {

		// set splash logo styles
		//
		if (attributes.logo) {
			this.setLogoStyles($(element).find('.logo'), attributes.logo);
		}

		// set splash logotype styles
		//
		if (attributes.logotype) {
			this.setLogoTypeStyles($(element).find('.logotype'), attributes.logotype);
		}
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return {
			defaults: config.settings.defaults,
			branding: config.branding,
			filters: this.options.filters,
			show_video: config.branding.welcome.splash.video != undefined,
			show_sign_in: application.session.has('config'),
			show_sign_up: application.session.has('config')? application.session.get('config').sign_up_enabled : false
		};
	},

	onRender: function() {

		// set splash styles
		//
		if (config.branding.welcome.splash) {
			this.setSplashStyles(this.$el, config.branding.welcome.splash);
		}
	},

	showVideoFile: function(file, options) {
		application.launch('video_player', {
			model: file,
			preferences: UserPreferences.create('video_player', {
				panes: []
			}),
			autoplay: true
		}, options);
	},

	showVideo: function(path) {

		// load video file
		//
		new VideoFile({
			path: path
		}).fetch({

			// callbacks
			//
			success: (file) => {
				this.showVideoFile(file, {
					maximized: true,
					full_screen: false
				});
			},

			error: () => {

				// show error message
				//
				application.error({
					message: 'Video not found.'
				});
			}
		});
	},

	//
	// event handling methods
	//
	
	onLoad: function() {

		// add lightbox for details
		//
		this.parent.addLightBox();

		// call page onload
		//
		this.parent.onLoad();
	},

	//
	// mouse event handling methods
	//

	onClickLogo: function() {
		if (config.branding.welcome.splash.brand.logo.sound) {
			application.play(config.branding.welcome.splash.brand.logo.sound);
		}
	},

	onClickShowVideo: function() {
		this.showVideo(config.settings.welcome.options.view_video.path);
	},

	onClickSignIn: function() {
		application.signIn();
	},

	onClickSignUp: function() {
		application.signUp();
	},

	onClickSearch: function() {
		let search = this.$el.find('.search input').val();
		if (search && search != '') {
			application.navigate('#search?query=' + encodeURIComponent(search), {
				trigger: true
			});
		}
	},

	//
	// keyboard event handling methods
	//

	onKeyDown: function(event) {
		if (event.keyCode == 13) {
			this.onClickSearch();
		}
	},

	//
	// window event handling methods
	//

	onResize: function() {

		// unify heights of carousel cells
		//
		let carouselCells = this.$el.find('.carousel-cell');
		let height = $(carouselCells[0]).height();
		for (let i = 1; i < carouselCells.length; i++) {
			$(carouselCells[i]).css('height', height);
		}
	},

	//
	// cleanup methods
	//

	onBeforeDestroy: function() {
		$(window).off("resize", this.onResize);
	}
});
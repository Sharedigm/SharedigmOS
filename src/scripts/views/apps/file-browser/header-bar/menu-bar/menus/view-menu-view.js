/******************************************************************************\
|                                                                              |
|                               view-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying view dropdown menus.                    |
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
			"class": "view-icons",
			"group": "view-kind",
			"icon": "fa fa-th",
			"name": "Icons",
			"select": true
		},
		{
			"class": "view-names",
			"group": "view-kind",
			"icon": "fa fa-align-left",
			"name": "Names",
			"select": true
		},
		{
			"class": "view-lists",
			"group": "view-kind",
			"icon": "fa fa-list",
			"name": "Lists",
			"select": true
		},
		{
			"class": "view-strips",
			"group": "view-kind",
			"icon": "fa fa-columns",
			"name": "Strips",
			"select": true,
			"hidden": true
		},
		{
			"class": "view-trees",
			"group": "view-kind",
			"icon": "fa fa-tree",
			"name": "Trees",
			"select": true
		},
		{
			"class": "view-cards",
			"group": "view-kind",
			"icon": "fa fa-id-card",
			"name": "Cards",
			"select": true
		},
		{
			"class": "view-tiles",
			"group": "view-kind",
			"icon": "fa fa-th-large",
			"name": "Tiles",
			"select": true
		},
		{
			"class": "view-pages",
			"group": "view-kind",
			"icon": "fa fa-book-open",
			"name": "Pages",
			"select": true
		},
		{
			"class": "view-gallery",
			"group": "view-kind",
			"icon": "fa fa-image",
			"name": "Gallery",
			"select": true
		},
		{
			"class": "view-maps",
			"group": "view-kind",
			"icon": "fa fa-map",
			"name": "Maps",
			"select": true,
			"menu": [
				{
					"class": "view-map",
					"group": "map-mode",
					"icon": "fa fa-map",
					"name": "Map",
					"select": true
				},
				{
					"class": "view-satellite",
					"group": "map-mode",
					"icon": "fa fa-satellite",
					"name": "Satellite",
					"select": true
				},
				{
					"class": "view-hybrid",
					"group": "map-mode",
					"icon": "fa fa-map-marked-alt",
					"name": "Hybrid",
					"select": true
				},
				{
					"class": "view-streets",
					"group": "map-mode",
					"icon": "fa fa-road",
					"name": "Streets",
					"select": true
				},
				{
					"class": "view-transportation",
					"group": "map-mode",
					"icon": "fa fa-bus",
					"name": "Transportation",
					"select": true
				},
				{
					"class": "view-aeronautical",
					"group": "map-mode",
					"icon": "fa fa-plane",
					"name": "Aeronautical",
					"select": true
				},
				"separator",
				{
					"group": "map-view-kind",
					"icon": "fa fa-map-location",
					"name": "Items",
					"menu": [
						{
							"class": "view-map-icons",
							"group": "map-view-kind",
							"icon": "fa fa-th",
							"name": "Icons",
							"select": true
						},
						{
							"class": "view-map-lists",
							"group": "map-view-kind",
							"icon": "fa fa-list",
							"name": "Lists",
							"select": true
						},
						{
							"class": "view-map-cards",
							"group": "map-view-kind",
							"icon": "fa fa-id-card",
							"name": "Cards",
							"select": true
						},
						{
							"class": "view-map-tiles",
							"group": "map-view-kind",
							"icon": "fa fa-th-large",
							"name": "Tiles",
							"select": true
						},
						"separator",
						{
							"class": "show-item-names",
							"icon": "fa fa-font",
							"name": "Names",
							"select": true
						},
						{
							"class": "show-geo-orientations",
							"icon": "fa fa-location-arrow",
							"name": "Orientations",
							"select": true
						}
					]
				},
				"separator",
				{
					"class": "pan-to",
					"icon": "fa fa-arrows-alt",
					"name": "Pan",
					"menu": [
						{
							"class": "pan-north",
							"icon": "fa fa-arrow-up",
							"name": "North",
							"shortcut": "up arrow"
						},
						{
							"class": "pan-south",
							"icon": "fa fa-arrow-down",
							"name": "South",
							"shortcut": "down arrow"
						},
						{
							"class": "pan-east",
							"icon": "fa fa-arrow-right",
							"name": "East",
							"shortcut": "right arrow"
						},
						{
							"class": "pan-west",
							"icon": "fa fa-arrow-left",
							"name": "West",
							"shortcut": "left arrow"
						}
					]
				},
				{
					"class": "zoom-to",
					"icon": "fa fa-search",
					"name": "Zoom",
					"menu": [
						{
							"class": "zoom-in",
							"icon": "fa fa-search-plus",
							"name": "Zoom In",
							"shortcut": "="
						},
						{
							"class": "zoom-out",
							"icon": "fa fa-search-minus",
							"name": "Zoom Out",
							"shortcut": "-"
						}
					]
				},
				{
					"class": "reset-view",
					"icon": "fa fa-undo",
					"name": "Reset",
					"shortcut": "shift-command-R"
				}
			]
		},
		"separator",
		{
			"class": "show-toolbars",
			"icon": "fa fa-wrench",
			"name": "Toolbars",
			"select": true,
			"menu": [
				{
					"class": "show-nav-bar",
					"group": "show-toolbar",
					"icon": "fa fa-sitemap",
					"name": "Nav",
					"select": true
				},
				{
					"class": "show-sharing-bar",
					"group": "show-toolbar",
					"icon": "fa fa-share",
					"name": "Sharing",
					"select": true
				}
			]
		},
		{
			"class": "show-items",
			"icon": "fa fa-file",
			"name": "Items",
			"select": true,
			"menu": [
				{
					"class": "show-hidden-files",
					"icon": "far fa-file",
					"name": "Hidden Files",
					"shortcut": "shift-command-.",
					"select": true
				},
				{
					"class": "show-file-extensions",
					"icon": "fa fa-file",
					"name": "File Extensions",
					"shortcut": "shift-command-x",
					"select": true
				},
				{
					"class": "show-thumbnails",
					"icon": "fa fa-image",
					"name": "Thumbnails",
					"select": true
				},
				{
					"class": "show-image-names",
					"icon": "fa fa-font",
					"name": "Image Names",
					"select": true
				}
			]
		},
		{
			"class": "show-properties",
			"icon": "fa fa-ribbon",
			"name": "Properties",
			"select": true,
			"menu": [
				{
					"class": "show-places",
					"group": "show-property",
					"icon": "fa fa-globe",
					"name": "Places",
					"select": true
				},
				{
					"class": "show-links",
					"group": "show-property",
					"icon": "fa fa-link",
					"name": "Links",
					"select": true
				},
				{
					"class": "show-shares",
					"group": "show-property",
					"icon": "fa fa-share",
					"name": "Shares",
					"select": true
				},
				{
					"class": "show-owners",
					"group": "show-property",
					"icon": "fa fa-user",
					"name": "Owners",
					"select": true
				},
				{
					"class": "show-indices",
					"group": "show-property",
					"icon": "fa fa-list",
					"name": "Indices",
					"select": true
				}
			]
		},
		{
			"class": "view-details",
			"icon": "fa fa-tags",
			"name": "Details",
			"select": true,
			"menu": [
				{
					"class": "view-size",
					"group": "detail-kind",
					"icon": "fa fa-download",
					"name": "Size",
					"select": true
				},
				{
					"class": "view-date",
					"icon": "fa fa-calendar-alt",
					"name": "Date",
					"select": true,
					"menu": [
						{
							"class": "view-create-date",
							"group": "detail-kind",
							"icon": "fa fa-magic",
							"name": "Create Date",
							"select": true
						},
						{
							"class": "view-modify-date",
							"group": "detail-kind",
							"icon": "fa fa-edit",
							"name": "Modify Date",
							"select": true
						},
						{
							"class": "view-access-date",
							"group": "detail-kind",
							"icon": "fa fa-eye",
							"name": "Access Date",
							"select": true
						},
						"separator",
						{
							"class": "view-date-only",
							"group": "date-format",
							"icon": "fa fa-calendar-alt",
							"name": "Date Only",
							"select": true
						},
						{
							"class": "view-day-date",
							"group": "date-format",
							"icon": "fa fa-calendar-plus",
							"name": "Day, Date",
							"select": true
						},
						{
							"class": "view-time-only",
							"group": "date-format",
							"icon": "fa fa-clock",
							"name": "Time Only",
							"select": true
						},
						{
							"class": "view-date-time",
							"group": "date-format",
							"icon": "fa fa-calendar-check",
							"name": "Date, Time",
							"select": true
						},
						{
							"class": "view-day-date-time",
							"group": "date-format",
							"icon": "fa fa-calendar-alt",
							"name": "Day, Date, Time",
							"select": true
						}
					]
				},
				{
					"group": "view-audio",
					"icon": "fa fa-music",
					"name": "Audio",
					"select": true,
					"menu": [
						{
							"class": "view-album",
							"group": "detail-kind",
							"icon": "fa fa-folder",
							"name": "Album",
							"select": true
						},
						{
							"class": "view-artist",
							"group": "detail-kind",
							"icon": "fa fa-user",
							"name": "Artist",
							"select": true
						},
						{
							"class": "view-band",
							"group": "detail-kind",
							"icon": "fa fa-users",
							"name": "Band",
							"select": true
						},
						{
							"class": "view-composer",
							"group": "detail-kind",
							"icon": "fa fa-magic",
							"name": "Composer",
							"select": true
						},
						{
							"class": "view-genre",
							"group": "detail-kind",
							"icon": "fa fa-tags",
							"name": "Genre",
							"select": true
						},
						{
							"class": "view-length",
							"group": "detail-kind",
							"icon": "fa fa-clock",
							"name": "Length",
							"select": true
						},
						{
							"class": "view-publisher",
							"group": "detail-kind",
							"icon": "fa fa-money-bill",
							"name": "Publisher",
							"select": true
						},
						{
							"class": "view-track-number",
							"group": "detail-kind",
							"icon": "fa fa-list-ol",
							"name": "Track Number",
							"select": true
						},
						{
							"class": "view-year",
							"group": "detail-kind",
							"icon": "fa fa-calendar-alt",
							"name": "Year",
							"select": true
						}
					]
				},
				{
					"group": "view-photo",
					"icon": "fa fa-image",
					"name": "Photo",
					"select": true,
					"menu": [
						{
							"class": "view-resolution",
							"group": "detail-kind",
							"icon": "fa fa-arrows-alt",
							"name": "Resolution",
							"select": true
						},
						{
							"class": "view-make-model",
							"group": "detail-kind",
							"icon": "fa fa-camera",
							"name": "Make / Model",
							"select": true
						},
						{
							"class": "view-focal-length",
							"group": "detail-kind",
							"icon": "fa fa-arrows-alt-h",
							"name": "Focal Length",
							"select": true
						},
						{
							"class": "view-exposure",
							"group": "detail-kind",
							"icon": "fa fa-clock",
							"name": "Exposure",
							"select": true
						},
						{
							"class": "view-aperture",
							"group": "detail-kind",
							"icon": "fa fa-dot-circle",
							"name": "Aperture",
							"select": true
						},
						{
							"class": "view-iso",
							"group": "detail-kind",
							"icon": "fa fa-film",
							"name": "ISO",
							"select": true
						},
						{
							"class": "view-capture-date",
							"group": "detail-kind",
							"icon": "fa fa-calendar-alt",
							"name": "Capture Date",
							"select": true
						}
					]
				},
				{
					"group": "view-video",
					"icon": "fa fa-video",
					"name": "Video",
					"select": true,
					"menu": [
						{
							"class": "view-resolution",
							"group": "detail-kind",
							"icon": "fa fa-arrows-alt",
							"name": "Resolution",
							"select": true
						},
						{
							"class": "view-duration",
							"group": "detail-kind",
							"icon": "fa fa-clock",
							"name": "Duration",
							"select": true
						},
						{
							"class": "view-bit-rate",
							"group": "detail-kind",
							"icon": "fa fa-chart-bar",
							"name": "Bit Rate",
							"select": true
						}
					]
				}
			]
		},
		{
			"class": "show-sidebar",
			"icon": "fa fa-pause",
			"name": "Sidebar",
			"select": true,
			"menu": [
				{
					"class": "show-clipboard-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-clipboard",
					"name": "Clipboard",
					"select": true
				},
				{
					"class": "show-favorites-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-star",
					"name": "Favorites",
					"select": true
				},
				{
					"class": "show-files-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-folder",
					"name": "Files",
					"select": true
				},
				{
					"class": "show-shared-panel",
					"group": "show-sidebar-panel",
					"icon": "fa fa-share",
					"name": "Shared",
					"select": true
				}
			]
		},
		{
			"class": "view-sidebar-items",
			"icon": "fa fa-th",
			"name": "Sidebar Items",
			"select": true,
			"menu": [
				{
					"class": "view-sidebar-icons",
					"group": "sidebar-view-kind",
					"icon": "fa fa-th",
					"name": "Icons",
					"select": true
				},
				{
					"class": "view-sidebar-lists",
					"group": "sidebar-view-kind",
					"icon": "fa fa-list",
					"name": "Lists",
					"select": true
				},
				{
					"class": "view-sidebar-trees",
					"group": "sidebar-view-kind",
					"icon": "fa fa-tree",
					"name": "Trees",
					"select": true
				},
				{
					"class": "view-sidebar-cards",
					"group": "sidebar-view-kind",
					"icon": "fa fa-id-card",
					"name": "Cards",
					"select": true
				},
				{
					"class": "view-sidebar-tiles",
					"group": "sidebar-view-kind",
					"icon": "fa fa-th-large",
					"name": "Tiles",
					"select": true
				}
			]
		},
		"separator",

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

		// view options
		//
		'click .view-kind > a': 'onClickViewKind',
		'click .map-view-kind > a': 'onClickMapViewKind',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .show-toolbar > a': 'onClickShowToolbar',

		// item options
		//
		'click .show-hidden-files': 'onClickShowHiddenFiles',
		'click .show-thumbnails': 'onClickOption',
		'click .show-image-names': 'onClickOption',
		'click .show-file-extensions': 'onClickOption',

		// property options
		//
		'click li.show-properties > a': 'onClickShowProperties',
		'click li.show-property > a': 'onClickShowProperty',

		// details options
		//
		'click .view-details': 'onClickViewDetails',
		'click .detail-kind > a': 'onClickDetailKind',
		'click .date-format > a': 'onClickDateFormat',

		// map options
		//
		'click .map-mode > a': 'onClickMapMode',
		'click .pan-north': 'onClickPanNorth',
		'click .pan-south': 'onClickPanSouth',
		'click .pan-east': 'onClickPanEast',
		'click .pan-west': 'onClickPanWest',
		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .reset-view': 'onClickResetView',
		'click .map-item-kind > a': 'onClickMapItemKind',
		'click .show-item-names': 'onClickOption',
		'click .show-geo-orientations': 'onClickOption',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .show-sidebar-panel > a': 'onClickShowSideBarPanel',
		'click .sidebar-view-kind > a': 'onClickSideBarViewKind',

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
	},

	//
	// querying methods
	//

	visible: function() {
		let isDesktop = this.parent.app.isDesktop();
		let hasSpaces = isDesktop && this.parent.app.hasSpaces();
		let numFiles = this.parent.app.model.get('num_files');
		let isWindowed = !isDesktop;

		return _.extend({}, ViewMenuView.prototype.visible.call(this), {
			'view-gallery': numFiles && numFiles.image > 0,
			'view-audio': numFiles && numFiles.audio > 0,
			'view-photo': numFiles && numFiles.image > 0,
			'view-video': numFiles && numFiles.video > 0,
			'view-maps': this.parent.app.hasGeolocatedItems(),
			'map-items': this.parent.app.hasGeolocatedItems(),
			'toolbars': true,

			// window items
			//
			'window-size': isWindowed,
			'spaces': hasSpaces,
			'windows': isDesktop,
			'view-full-screen': isDesktop
		});
	},

	enabled: function() {
		let preferences = this.parent.app.preferences;
		let showingMap = preferences.get('view_kind') == 'maps';

		return {
			'pan-to': showingMap,
			'pan-north': showingMap,
			'pan-south': showingMap,
			'pan-east': showingMap,
			'pan-west': showingMap,
			'zoom-to': showingMap,
			'zoom-in': showingMap,
			'zoom-out': showingMap,
			'reset-view': showingMap
		};
	},

	selected: function() {
		let preferences = this.parent.app.preferences;
		let isDesktop = this.parent.app.isDesktop();
		let viewKind = preferences.get('view_kind');
		let mapMode = preferences.get('map_mode');
		let toolbars = preferences.get('toolbars') || [];
		let properties = preferences.get('properties') || [];
		let detailKind = preferences.get('detail_kind');
		let dateFormat = preferences.get('date_format');
		let mapViewKind = preferences.get('map_view_kind');
		let sidebarPanels = preferences.get('sidebar_panels') || [];
		let sidebarViewKind = preferences.get('sidebar_view_kind');

		return {

			// view options
			//
			'view-icons': viewKind == 'icons',
			'view-names': viewKind == 'names',
			'view-lists': viewKind == 'lists',
			'view-trees': viewKind == 'trees',
			'view-cards': viewKind == 'cards',
			'view-tiles': viewKind == 'tiles',
			'view-pages': viewKind == 'pages',
			'view-gallery': viewKind == 'gallery',
			'view-maps': viewKind == 'maps',

			// map options
			//
			'view-map': mapMode == 'map',
			'view-aerial': mapMode == 'aerial',
			'view-satellite': mapMode == 'satellite',
			'view-hybrid': mapMode == 'hybrid',
			'view-streets': mapMode == 'streets',
			'view-transportation': mapMode == 'transportation',
			'view-sectional': mapMode == 'sectional',
			'view-ifrlo': mapMode == 'ifrlo',
			'view-ifrhi': mapMode == 'ifrhi',

			// toolbar options
			//
			'show-toolbars': toolbars.length > 0,
			'show-nav-bar': toolbars.includes('nav'),
			'show-sharing-bar': toolbars.includes('sharing'),
			'show-indexing-bar': toolbars.includes('indexing'),

			// item attributes
			//
			'show-hidden-files': preferences.get('show_hidden_files') == true,
			'show-file-extensions': preferences.get('show_file_extensions') == true,
			'show-thumbnails': preferences.get('show_thumbnails') == true,
			'show-image-names': preferences.get('show_image_names') == true,

			// item properties
			//
			'show-properties': properties.length > 0,
			'show-places': properties.includes('places'),
			'show-links': properties.includes('links'),
			'show-shares': properties.includes('shares'),
			'show-owners': properties.includes('owners'),
			'show-indices': properties.includes('indices'),

			// map item options
			//
			'view-map-icons': mapViewKind == 'icons',
			'view-map-lists': mapViewKind == 'lists',
			'view-map-cards': mapViewKind == 'cards',
			'view-map-tiles': mapViewKind == 'tiles',
			'view-map-pages': mapViewKind == 'pages',
			'show-item-names': preferences.get('show_item_names'),
			'show-geo-orientations': preferences.get('show_geo_orientations'),

			// detail options
			//
			'view-details': typeof detailKind == 'string' && detailKind != '',
			'view-size': detailKind == 'size',
			'view-create-date': detailKind == 'create_date',
			'view-modify-date': detailKind == 'modify_date',
			'view-access-date': detailKind == 'access_date',
			'view-date-only': dateFormat == 'date_only',
			'view-day-date': dateFormat == 'day_date',
			'view-time-only': dateFormat == 'time_only',
			'view-date-time': dateFormat == 'date_time',
			'view-day-date-time': dateFormat == 'day_date_time' || !dateFormat,
			'view-resolution': detailKind == 'resolution',
			'view-make-model': detailKind == 'make_model',
			'view-focal-length': detailKind == 'focal_length',
			'view-exposure': detailKind == 'exposure',
			'view-aperture': detailKind == 'aperture',
			'view-iso': detailKind == 'iso',
			'view-capture-date': detailKind == 'capture_date',

			// sidebar options
			//
			'show-sidebar': isDesktop? preferences.get('show_desktop_sidebar') : preferences.get('show_sidebar'),
			'show-clipboard-panel': sidebarPanels.includes('clipboard'),
			'show-favorites-panel': sidebarPanels.includes('favorites'),
			'show-files-panel': sidebarPanels.includes('files'),
			'show-shared-panel': sidebarPanels.includes('shared'),

			// sidebar item options
			//
			'view-sidebar-icons': sidebarViewKind == 'icons',
			'view-sidebar-lists': sidebarViewKind == 'lists',
			'view-sidebar-trees': sidebarViewKind == 'trees',
			'view-sidebar-cards': sidebarViewKind == 'cards',
			'view-sidebar-tiles': sidebarViewKind == 'tiles'
		};
	},

	//
	// getting methods
	//

	getProperties: function() {
		return this.getElementAttributes('.show-properties li a', 'class', (value) => {
			return value.replace('show-', '').replace(/-/g, '_');
		});
	},

	getSelectedProperties: function() {
		return this.getElementAttributes('.show-properties li.selected a', 'class', (value) => {
			return value.replace('show-', '').replace('-bar', '').replace(/-/g, '_');
		});
	},

	//
	// setting methods
	//

	setOption: function(className, value) {
		let option = className.replace(/-/g, '_');

		// call superclass method
		//
		this.setItemSelected(className, value);

		// update parent
		//
		this.parent.app.setOption(option, value);
	},

	toggleOption: function(className) {
		let option = className.replace(/-/g, '_');

		// call superclass method
		//
		this.toggleMenuItem(className);

		// update parent
		//
		this.parent.app.setOption(option, this.isItemSelected(className));
	},

	toggleProperty: function(property) {

		// call superclass method
		//
		this.toggleMenuItem('show-' + property);

		// update parent
		//
		this.parent.app.setOption('properties', this.getSelectedProperties());
	},

	setMapMode: function(mapMode) {
		this.$el.find('li.map-mode').removeClass('selected');
		this.$el.find('li .view-' + mapMode).closest('li').addClass('selected');
	},

	//
	// rendering methods
	//

	onRender: function() {

		// call superclass method
		//
		ViewMenuView.prototype.onRender.call(this);

		// listen for changes in full screen status
		//
		if (this.parent.app.isDesktop()) {
			$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', () => {
				this.setItemSelected('view-full-screen', application.isFullScreen());						
			});
		}
	},

	//
	// map event handling methods
	//

	onClickMapMode: function(event) {
		let className = $(event.currentTarget).attr('class').split(' ')[0];
		let mapMode = className.replace('view-', '').replace(/-/g, '_');

		// update menu
		//
		this.setMapMode(mapMode);
		if (!this.isItemSelected('view-maps')) {
			this.setViewKind('maps');
		}

		// update parent
		//
		this.parent.app.setOption('map_mode', mapMode);
	},

	onClickResetView: function() {
		this.parent.app.getActiveView().getChildView('items').resetView();
	},

	//
	// pan event handling methods
	//

	onClickPanNorth: function() {
		let itemsView = this.parent.app.getActiveView().getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('north', {
				duration: 1000
			});
		}
	},

	onClickPanSouth: function() {
		let itemsView = this.parent.app.getActiveView().getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('south', {
				duration: 1000
			});
		}
	},

	onClickPanEast: function() {
		let itemsView = this.parent.app.getActiveView().getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('east', {
				duration: 1000
			});
		}
	},
	
	onClickPanWest: function() {
		let itemsView = this.parent.app.getActiveView().getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').panToDirection('west', {
				duration: 1000
			});
		}
	},

	//
	// zoom event handling methods
	//

	onClickZoomIn: function() {
		let itemsView = this.parent.app.getActiveView().getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').zoomIn({
				duration: 1000
			});
		}
	},

	onClickZoomOut: function() {
		let itemsView = this.parent.app.getActiveView().getChildView('items');
		if (itemsView && itemsView.hasChildView('map')) {
			itemsView.getChildView('map').zoomOut({
				duration: 1000
			});
		}
	},

	//
	// view option event handling methods
	//

	onClickShowProperties: function() {
		let showProperties = this.isItemSelected('show-properties');

		// update menu
		//
		this.toggleMenuItem('show-properties');
		if (!showProperties) {
			this.$el.find('.show-properties li').addClass('selected');
		} else {
			this.$el.find('.show-properties li').removeClass('selected');
		}

		// update view
		//
		this.parent.app.setOption('properties', showProperties? [] : this.getProperties());
	},

	onClickShowProperty: function(event) {
		let className = $(event.currentTarget).attr('class');

		// update menu
		//
		this.toggleMenuItem(className);

		// update view
		//
		this.parent.app.setOption('properties', this.getSelectedProperties());
	},

	onClickShowHiddenFiles: function() {
		this.toggleOption('show-hidden-files');
	},

	onClickShowMagnified: function() {
		this.setOption('view-magnified', true);
	},

	onClickShowUnmagnified: function() {
		this.setOption('view-magnified', false);
	},

	//
	// cleanup methods
	//

	onBeforeDestroy: function() {
		$(document).off('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange');
	}
});
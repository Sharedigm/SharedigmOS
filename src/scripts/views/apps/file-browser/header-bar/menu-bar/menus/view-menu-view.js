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
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ViewMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/view-menu-view.js';

export default ViewMenuView.extend({

	//
	// attributes
	//

	events: {

		// view options
		//
		'click .view-kind': 'onClickViewKind',
		'click .map-view-kind': 'onClickMapViewKind',

		// toolbar options
		//
		'click .show-toolbars': 'onClickShowToolbars',
		'click .toolbars': 'onClickShowToolbar',

		// item options
		//
		'click .show-options': 'onClickShowOptions',

		// property options
		//
		'click .show-properties': 'onClickShowProperties',
		'click .properties': 'onClickShowProperty',

		// details options
		//
		'click .view-details': 'onClickViewDetails',
		'click .detail-kind': 'onClickDetailKind',
		'click .date-format': 'onClickDateFormat',

		// map options
		//
		'click .map-mode': 'onClickMapMode',
		'click .pan-north': 'onClickPanNorth',
		'click .pan-south': 'onClickPanSouth',
		'click .pan-east': 'onClickPanEast',
		'click .pan-west': 'onClickPanWest',
		'click .zoom-in': 'onClickZoomIn',
		'click .zoom-out': 'onClickZoomOut',
		'click .reset-view': 'onClickResetView',
		'click .map-item-kind': 'onClickMapItemKind',
		'click .show-item-names': 'onClickOption',
		'click .show-geo-orientations': 'onClickOption',

		// sidebar options
		//
		'click .show-sidebar': 'onClickShowSidebar',
		'click .sidebar-panels': 'onClickSideBarPanel',
		'click .sidebar-view-kind': 'onClickSideBarViewKind',
		'click .sidebar-tile-size': 'onClickSideBarTileSize',

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
		let hasMapViewer = application.hasApp('map_viewer');
		let isMappable = hasMapViewer && this.parent.app.hasGeolocatedItems && this.parent.app.hasGeolocatedItems();

		return _.extend({}, ViewMenuView.prototype.visible.call(this), {
			'view-gallery': numFiles && numFiles.image > 0,
			'view-audio': numFiles && numFiles.audio > 0,
			'view-photo': numFiles && numFiles.image > 0,
			'view-video': numFiles && numFiles.video > 0,
			'view-maps': isMappable,
			'map-items': isMappable,
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

		return {

			// view options
			//
			'view-kind icons': preferences.matches('view_kind', 'icons'),
			'view-kind names': preferences.matches('view_kind', 'names'),
			'view-kind lists': preferences.matches('view_kind', 'lists'),
			'view-kind trees': preferences.matches('view_kind', 'trees'),
			'view-kind cards': preferences.matches('view_kind', 'cards'),
			'view-kind tiles': preferences.matches('view_kind', 'tiles'),
			'view-kind pages': preferences.matches('view_kind', 'pages'),
			'view-kind gallery': preferences.matches('view_kind', 'gallery'),
			'view-kind maps': preferences.matches('view_kind', 'maps'),

			// map options
			//
			'map-mode map': preferences.matches('map_mode', 'map'),
			'map-mode aerial': preferences.matches('map_mode', 'aerial'),
			'map-mode satellite': preferences.matches('map_mode', 'satellite'),
			'map-mode hybrid': preferences.matches('map_mode', 'hybrid'),
			'map-mode streets': preferences.matches('map_mode', 'streets'),
			'map-mode transportation': preferences.matches('map_mode', 'transportation'),
			'map-mode sectional': preferences.matches('map_mode', 'sectional'),
			'map-mode ifrlo': preferences.matches('map_mode', 'ifrlo'),
			'map-mode ifrhi': preferences.matches('map_mode', 'ifrhi'),

			// toolbar options
			//
			'show-toolbars': preferences.hasMultiple('toolbars'),
			'toolbars nav': preferences.includes('toolbars', 'nav'),
			'toolbars sharing': preferences.includes('toolbars', 'sharing'),
			'toolbars indexing': preferences.includes('toolbars', 'indexing'),

			// item attributes
			//
			'show-options hidden_files': preferences.includes('options', 'hidden_files'),
			'show-options file_extensions': preferences.includes('options', 'file_extensions'),
			'show-options thumbnails': preferences.includes('options', 'thumbnails'),
			'show-options image_names': preferences.includes('options', 'image_names'),

			// item properties
			//
			'show_properties': preferences.hasMultiple('properties'),
			'properties places': preferences.includes('properties', 'places'),
			'properties links': preferences.includes('properties', 'links'),
			'properties shares': preferences.includes('properties', 'shares'),
			'properties owners': preferences.includes('properties', 'owners'),
			'properties indices': preferences.includes('properties', 'indices'),

			// map options
			//
			'map-options grid': preferences.includes('map_options', 'grid'),
			'map-options smoothing': preferences.includes('map_options', 'smoothing'),
			'map-options item-names': preferences.includes('map_options', 'item_names'),
			'map-options geo-orientations': preferences.includes('map_options', 'geo_orientations'),

			// map view kind
			//
			'map-view-kind icons': preferences.matches('map_view_kind', 'icons'),
			'map-view-kind lists': preferences.matches('map_view_kind', 'lists'),
			'map-view-kind cards': preferences.matches('map_view_kind', 'cards'),
			'map-view-kind tiles': preferences.matches('map_view_kind', 'tiles'),
			'map-view-kind pages': preferences.matches('map_view_kind', 'pages'),

			// detail options
			//
			'view-details': preferences.has('detail_kind'),
			'detail-kind size': preferences.matches('detail_kind', 'size'),
			'detail-kind create_date': preferences.matches('detail_kind', 'create_date'),
			'detail-kind modify_date': preferences.matches('detail_kind', 'modify_date'),
			'detail-kind access_date': preferences.matches('detail_kind', 'access_date'),

			// date format options
			//
			'date-format date_only': preferences.matches('date_format', 'date_only'),
			'date-format day_date': preferences.matches('date_format', 'day_date'),
			'date-format time_only': preferences.matches('date_format', 'time_only'),
			'date-format date_time': preferences.matches('date_format', 'date_time'),
			'date-format day_date_time': preferences.matches('date_format', 'day_date_time'),

			// photo options
			//
			'detail-kind resolution': preferences.matches('detail_kind', 'resolution'),
			'detail-kind make_model': preferences.matches('detail_kind', 'make_model'),
			'detail-kind focal_length': preferences.matches('detail_kind','focal_length'),
			'detail-kind exposure': preferences.matches('detail_kind', 'exposure'),
			'detail-kind aperture': preferences.matches('detail_kind', 'aperture'),
			'detail-kind iso': preferences.matches('detail_kind', 'iso'),
			'detail-kind capture_date': preferences.matches('detail_kind', 'capture_date'),

			// sidebar options
			//
			'show-sidebar': this.parent.app.isDesktop()? preferences.get('show_desktop_sidebar') : preferences.includes('panes', 'sidebar'),
			'sidebar-panels clipboard': preferences.includes('sidebar_panels', 'clipboard'),
			'sidebar-panels favorites': preferences.includes('sidebar_panels', 'favorites'),
			'sidebar-panels files': preferences.includes('sidebar_panels', 'files'),
			'sidebar-panels shared': preferences.includes('sidebar_panels', 'shared'),

			// sidebar item options
			//
			'sidebar-view-kind icons': preferences.matches('sidebar_view_kind', 'icons'),
			'sidebar-view-kind lists': preferences.matches('sidebar_view_kind', 'lists'),
			'sidebar-view-kind trees': preferences.matches('sidebar_view_kind', 'trees'),
			'sidebar-view-kind cards': preferences.matches('sidebar_view_kind', 'cards'),
			'sidebar-view-kind tiles': preferences.matches('sidebar_view_kind', 'tiles')
		};
	},

	//
	// setting methods
	//

	setOption: function(option, value) {

		// call superclass method
		//
		this.setItemSelected(option, value);

		// update parent
		//
		this.parent.app.setOption(option, value);
	},

	toggleOption: function(option) {

		// call superclass method
		//
		this.toggleMenuItem(option);

		// update parent
		//
		this.parent.app.setOption(option, this.isItemSelected(option));
	},

	toggleProperty: function(property) {

		// call superclass method
		//
		this.toggleMenuItem('show-' + property);

		// update parent
		//
		this.parent.app.setOption('properties', this.getSelectedGroupItems('properties'));
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
		let mapMode = this.getItemName(event.target)

		// update menu
		//
		this.setGroupItemSelected('map_mode', mapMode);

		// update app
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
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('north', {
				duration: 1000
			});
		}
	},

	onClickPanSouth: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('south', {
				duration: 1000
			});
		}
	},

	onClickPanEast: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('east', {
				duration: 1000
			});
		}
	},
	
	onClickPanWest: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.panToDirection('west', {
				duration: 1000
			});
		}
	},

	//
	// zoom event handling methods
	//

	onClickZoomIn: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.zoomIn({
				duration: 1000
			});
		}
	},

	onClickZoomOut: function() {
		let mapView = this.parent.app.getMapView();
		if (mapView) {
			mapView.zoomOut({
				duration: 1000
			});
		}
	},

	//
	// view option event handling methods
	//

	onClickShowOptions: function(event) {
		let itemName = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.toggleMenuItem('show-options ' + itemName);

		// update view
		//
		this.parent.app.setOption('options', this.getSelectedGroupItems('show-options'));
	},

	onClickShowProperties: function() {

		// update menu
		//
		this.toggleMenuItem('show-properties');

		// update app
		//
		let showProperties = this.isItemSelected('show-properties');
		this.parent.app.setOption('properties', showProperties? this.getSelectedGroupItems('properties') : false);
	},

	onClickShowProperty: function(event) {
		let itemName = this.getItemName($(event.currentTarget));

		// update menu
		//
		this.toggleMenuItem('properties ' + itemName);

		// update view
		//
		this.parent.app.setOption('properties', this.getSelectedGroupItems('properties'));
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
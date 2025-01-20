<?php
/******************************************************************************\
|                                                                              |
|                               ImageFilters.php                               |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a utility for filtering items (files and directories).   |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.txt', which is part of this source code distribution.        |
|                                                                              |
|******************************************************************************|
|            Copyright (C) 2016-2024, Sharedigm, www.sharedigm.com             |
\******************************************************************************/

namespace App\Http\Filters;

use Illuminate\Http\Request;
use App\Models\Storage\Media\ImageFile;
use App\Utilities\Strings\StringUtils;

class ImageFilters
{
	//
	// image width filters
	//

	/**
	 * Apply min width filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMinWidth(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('min_width')) {
			$width = intval($request->input('min_width'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($width) {
				return $item instanceof ImageFile && $item->resolution[0] > $width;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply width filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByWidth(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('width')) {
			$width = intval($request->input('width'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($width) {
				return $item instanceof ImageFile && $item->resolution[0] == $width;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply max width filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMaxWidth(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('max_width')) {
			$width = intval($request->input('max_width'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($width) {
				return $item instanceof ImageFile && $item->resolution[0] < $width;
			})->values();
		}

		return $items;
	}

	//
	// image height filters
	//

	/**
	 * Apply min height filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMinHeight(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('min_height')) {
			$height = intval($request->input('min_height'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($height) {
				return $item instanceof ImageFile && $item->resolution[1] > $height;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply height filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByHeight(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('height')) {
			$height = intval($request->input('height'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($height) {
				return $item instanceof ImageFile && $item->resolution[1] == $height;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply max height filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMaxHeight(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('max_height')) {
			$height = intval($request->input('max_height'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($height) {
				return $item instanceof ImageFile && $item->resolution[1] < $height;
			})->values();
		}

		return $items;
	}

	//
	// image resolution filters
	//

	/**
	 * Apply min resolution filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMinResolution(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('min_resolution')) {
			$resolution = intval($request->input('min_resolution'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($resolution) {
				return ($item instanceof ImageFile && ($item->resolution[0] > $resolution) && $item->resolution[1] > $resolution);
			})->values();
		}

		return $items;
	}

	/**
	 * Apply resolution filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByResolution(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('resolution')) {
			$resolution = intval($request->input('resolution'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($resolution) {
				return ($item instanceof ImageFile && ($item->resolution[0] == $resolution) || $item->resolution[1] == $resolution);
			})->values();
		}

		return $items;
	}

	/**
	 * Apply max resolution filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMaxResolution(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('max_resolution')) {
			$resolution = intval($request->input('max_resolution'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($resolution) {
				return ($item instanceof ImageFile && ($item->resolution[0] < $resolution) && $item->resolution[1] < $resolution);
			})->values();
		}

		return $items;
	}

	//
	// image exif filters
	//

	/**
	 * Apply make / model filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMakeModel(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('make_model')) {
			$makeModel = strtolower($request->input('make_model'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($makeModel) {
				return $item instanceof ImageFile && $item->exif && array_key_exists('Model', $item->exif) && StringUtils::contains(strtolower($item->exif['Model']), $makeModel);
			})->values();
		}

		return $items;
	}

	//
	// image focal length filters
	//

	/**
	 * Apply min focal length filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMinFocalLength(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('min_focal_length')) {
			$focalLength = intval(rtrim($request->input('min_focal_length'), 'mm'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($focalLength) {
				return $item instanceof ImageFile && $item->hasExifValue('FocalLength') && $item->getExifValue('FocalLength') > $focalLength;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply focal length filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByFocalLength(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('focal_length')) {
			$focalLength = intval(rtrim($request->input('focal_length'), 'mm'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($focalLength) {
				return $item instanceof ImageFile && $item->hasExifValue('FocalLength') && $item->getExifValue('FocalLength') == $focalLength;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply max focal length filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMaxFocalLength(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('max_focal_length')) {
			$focalLength = intval(rtrim($request->input('max_focal_length'), 'mm'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($focalLength) {
				return $item instanceof ImageFile && $item->hasExifValue('FocalLength') && $item->getExifValue('FocalLength') < $focalLength;
			})->values();
		}

		return $items;
	}

	//
	// image aperture filters
	//

	/**
	 * Apply min aperture filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMinAperture(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('min_aperture')) {
			$aperture = floatval(ltrim($request->input('min_aperture'), 'F'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($aperture) {
				return $item instanceof ImageFile && $item->hasExifValue('FNumber') && $item->getExifValue('FNumber') > $aperture;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply aperture filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByAperture(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('aperture')) {
			$aperture = floatval(ltrim($request->input('aperture'), 'F'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($aperture) {
				return $item instanceof ImageFile && $item->hasExifValue('FNumber') && $item->getExifValue('FNumber') == $aperture;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply max aperture filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMaxAperture(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('max_aperture')) {
			$aperture = floatval(ltrim($request->input('max_aperture'), 'F'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($aperture) {
				return $item instanceof ImageFile && $item->hasExifValue('FNumber') && $item->getExifValue('FNumber') < $aperture;
			})->values();
		}

		return $items;
	}

	//
	// image exposure filters
	//

	/**
	 * Apply min exposure filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMinExposure(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('min_exposure')) {
			$exposure = $request->input('min_exposure');
			if (StringUtils::startsWith($exposure, '1/')) {
				$exposure = 1.0 / intval(substr($exposure, 2));
			}

			// filter collection
			//
			$items = $items->filter(function($item) use ($exposure) {
				return $item instanceof ImageFile && $item->hasExifValue('ExposureTime') && $item->getExifValue('ExposureTime') > $exposure;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply exposure filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByExposure(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('exposure')) {
			$exposure = $request->input('exposure');
			if (StringUtils::startsWith($exposure, '1/')) {
				$exposure = 1.0 / intval(substr($exposure, 2));
			}

			// filter collection
			//
			$items = $items->filter(function($item) use ($exposure) {
				return $item instanceof ImageFile && $item->hasExifValue('ExposureTime') && $item->getExifValue('ExposureTime') == $exposure;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply max exposure filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMaxExposure(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('max_exposure')) {
			$exposure = $request->input('max_exposure');
			if (StringUtils::startsWith($exposure, '1/')) {
				$exposure = 1.0 / intval(substr($exposure, 2));
			}

			// filter collection
			//
			$items = $items->filter(function($item) use ($exposure) {
				return $item instanceof ImageFile && $item->hasExifValue('ExposureTime') && $item->getExifValue('ExposureTime') < $exposure;
			})->values();
		}

		return $items;
	}

	//
	// image iso filters
	//

	/**
	 * Apply min iso filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMinIso(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('min_iso')) {
			$iso = intval($request->input('min_iso'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($iso) {
				return $item instanceof ImageFile && $item->hasExifValue('ISOSpeedRatings') && $item->getExifValue('ISOSpeedRatings') > $iso;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply iso filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByIso(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('iso')) {
			$iso = intval($request->input('iso'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($iso) {
				return $item instanceof ImageFile && $item->hasExifValue('ISOSpeedRatings') && $item->getExifValue('ISOSpeedRatings') == $iso;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply max iso filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByMaxIso(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('max_iso')) {
			$iso = intval($request->input('max_iso'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($iso) {
				return $item instanceof ImageFile && $item->hasExifValue('ISOSpeedRatings') && $item->getExifValue('ISOSpeedRatings') < $iso;
			})->values();
		}

		return $items;
	}

	//
	// image capture date filters
	//

	/**
	 * Apply before capture date filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByBeforeCaptureDate(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('before_capture_date')) {
			$date = date_parse($request->input('before_capture_date'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($date) {
				return $item instanceof ImageFile && $item->hasExifValue('DateTimeOriginal') && $item->getExifValue('DateTimeOriginal') < $date;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply capture date filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByCaptureDate(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('capture_date')) {
			$date = date_parse($request->input('capture_date'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($date) {
				return $item instanceof ImageFile && $item->hasExifValue('DateTimeOriginal') && $item->getExifValue('DateTimeOriginal') == $date;
			})->values();
		}

		return $items;
	}

	/**
	 * Apply after capture date filter to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filterByAfterCaptureDate(Request $request, $items) {

		// parse parameters
		//
		if ($request->has('after_capture_date')) {
			$date = date_parse($request->input('after_capture_date'));

			// filter collection
			//
			$items = $items->filter(function($item) use ($date) {
				return $item instanceof ImageFile && $item->hasExifValue('DateTimeOriginal') && $item->getExifValue('DateTimeOriginal') > $date;
			})->values();
		}

		return $items;
	}

	//
	// item filters
	//

	/**
	 * Apply filters to collection.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Illuminate\Support\Collection $items
	 * @return Illuminate\Support\Collection
	 */
	static function filter(Request $request, $items) {

		// apply image width filters
		//
		$items = self::filterByMinWidth($request, $items);
		$items = self::filterByWidth($request, $items);
		$items = self::filterByMaxWidth($request, $items);

		// apply image height filters
		//
		$items = self::filterByMinHeight($request, $items);
		$items = self::filterByHeight($request, $items);
		$items = self::filterByMaxHeight($request, $items);

		// apply image resolution filters
		//
		$items = self::filterByMinResolution($request, $items);
		$items = self::filterByResolution($request, $items);
		$items = self::filterByMaxResolution($request, $items);

		// apply image exif filters
		//
		$items = self::filterByMakeModel($request, $items);

		$items = self::filterByMinFocalLength($request, $items);
		$items = self::filterByFocalLength($request, $items);
		$items = self::filterByMaxFocalLength($request, $items);

		$items = self::filterByMinAperture($request, $items);
		$items = self::filterByAperture($request, $items);
		$items = self::filterByMaxAperture($request, $items);

		$items = self::filterByMinExposure($request, $items);
		$items = self::filterByExposure($request, $items);
		$items = self::filterByMaxExposure($request, $items);

		$items = self::filterByMinIso($request, $items);
		$items = self::filterByIso($request, $items);
		$items = self::filterByMaxIso($request, $items);

		$items = self::filterByBeforeCaptureDate($request, $items);
		$items = self::filterByCaptureDate($request, $items);
		$items = self::filterByAfterCaptureDate($request, $items);
		
		return $items;
	}
}
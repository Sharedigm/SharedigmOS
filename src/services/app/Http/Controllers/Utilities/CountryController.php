<?php
/******************************************************************************\
|                                                                              |
|                             CountryController.php                            |
|                                                                              |
|******************************************************************************|
|                                                                              |
|       This is a controller for providing country information.                |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.txt', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

namespace App\Http\Controllers\Utilities;

use App\Models\Utilities\Country;
use App\Http\Controllers\Controller;

class CountryController extends Controller
{
	/**
	 * Get all countries.
	 *
	 * @return App\Models\Utilities\Country[]
	 */
	public function getAll() {
		$countries = Country::all();
		return $countries;
	}
}
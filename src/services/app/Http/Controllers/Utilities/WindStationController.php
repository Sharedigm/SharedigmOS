<?php
/******************************************************************************\
|                                                                              |
|                          WindStationController.php                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|       This is a controller for providing wind station information.           |
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

use App\Models\Utilities\WindStation;
use App\Http\Controllers\Controller;

class WindStationController extends Controller
{
	/**
	 * Get all wind stations.
	 *
	 * @return App\Models\Utilities\WindStation[]
	 */
	public function getAll() {
		$countries = WindStation::all();
		return $countries;
	}
}
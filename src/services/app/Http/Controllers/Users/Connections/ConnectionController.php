<?php
/******************************************************************************\
|                                                                              |
|                           ConnectionController.php                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a controller for managing users' connections.                 |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.txt', which is part of this source code distribution.        |
|                                                                              |
|******************************************************************************|
|            Copyright (C) 2016-2024, Sharedigm, www.sharedigm.com             |
\******************************************************************************/

namespace App\Http\Controllers\Users\Connections;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Response;
use App\Models\Users\User;
use App\Models\Users\Connections\ConnectionRequest;
use App\Http\Controllers\Controller;

class ConnectionController extends Controller
{
	//
	// get methods
	//

	/**
	 * Get connected users.
	 *
	 * @return App\Models\Users\User[]
	 */
	public function getConnected(Request $request) {
		return $this->getConnectionsByIndex($request, Session::get('user_id'));
	}

	/**
	 * Get unconnected users.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param string $userId - the id of the user to find strangers of
	 * @return App\Models\Users\User[]
	 */
	public function getUnconnected(Request $request) {

		// get parameters
		//
		$name = $request->input('name');

		// find current user
		//
		$user = User::find(Session::get('user_id'));
		if (!$user) {
			return response("User not found.", 404);
		}

		// find user's non-connections
		//
		return $user->findStrangersByName($name);
	}

	/**
	 * Get a user's connections.
	 *
	 * @param string $id - the id of the user to get connections of
	 * @return App\Models\Users\User[]
	 */
	public function getConnectionsByIndex(Request $request, string $userId) {

		// find user by id
		//
		$user = User::find($userId);
		if (!$user) {
			return response("User not found.", 404);
		}

		// find user connections
		//
		$connections = $user->getConnections()->sortBy('last_name')->values();

		// apply filters
		//
		$connections = $this->filterConnections($request, $connections);

		return $connections;
	}

	/**
	 * Get a two user's mutual connections.
	 *
	 * @param string $userId - the id of the user to get mutual connections of
	 * @param string $connectionId - the id of the connection in common
	 * @return App\Models\Users\User[]
	 */
	public function getMutualConnectionsByIndex(string $userId, string $connectionId) {
		$mutualConnections = [];

		// find user by id
		//
		$user = User::find($userId);
		if (!$user) {
			return response("User not found.", 404);
		}

		// find connection by id
		//
		$connection = User::find($connectionId);
		if (!$connection) {
			return response("Connection not found.", 404);
		}

		$usersConnections = $user->getConnections()->sortBy('last_name')->values();
		$connectionsConnections = $connection->getConnections()->sortBy('last_name')->values();

		foreach ($usersConnections as $connection) {
			foreach ($connectionsConnections as $candidate) {
				if ($candidate->is($connection)) {
					array_push($mutualConnections, $connection);
					break;
				}
			}
		}

		return $mutualConnections;
	}

	/**
	 * Remove a user from a user's connections list.
	 *
	 * @param string $userId - the id of the user to isdisconnect connections of
	 * @param string $connectionId - the id of the connection to disconnect
	 * @return App\Models\Users\User[]
	 */
	public function deleteIndex(string $userId, string $connectionId) {
		
		// find user by id
		//
		$user = User::find($userId);
		if (!$user) {
			return response("User not found.", 404);
		}

		// find connection by id
		//
		$connection = User::find($connectionId);
		if (!$connection) {
			return response("Connection not found.", 404);
		}

		// get connection request
		//
		$connectionRequest = ConnectionRequest::where('user_id', '=', $userId)
			->where('connection_id', '=', $connectionId)->first();
		if (!$connectionRequest) {
			$connectionRequest = ConnectionRequest::where('user_id', '=', $connectionId)
				->where('connection_id', '=', $userId)->first();			
		}
		if (!$connectionRequest) {
			return response("Connection request not found.", 404);
		}

		// delete connection request
		//
		$connectionRequest->delete();

		return $user;
	}

	//
	// filtering methods
	//

	/**
	 * Filter connections according to request.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @param Connection[] $connections - the connections to filter
	 * @return Connection[]
	 */
	function filterConnections($request, $connections) {
		if ($request->has('name')) {
			$name = $request->input('name');
			$connections = $this->filterByName($connections, $name);
		}
		if ($request->has('location')) {
			$location = $request->input('location');
			$connections = $this->filterByLocation($connections, $location);
		}
		if ($request->has('occupation')) {
			$occupation = $request->input('occupation');
			$connections = $this->filterByOccupation($connections, $occupation);
		}
		if ($request->has('gender')) {
			$gender = $request->input('gender');
			$connections = $this->filterByGender($connections, $gender);
		}
		if ($request->has('age')) {
			$age = $request->input('age');
			$connections = $this->filterByAge($connections, $age);
		}
		if ($request->has('min_age')) {
			$age = $request->input('min_age');
			$connections = $this->filterByAge($connections, $age, 'greater_than');
		}
		if ($request->has('max_age')) {
			$age = $request->input('max_age');
			$connections = $this->filterByAge($connections, $age, 'less_than');
		}
		if ($request->has('birth_date')) {
			$birthDate = $request->input('birth_date');
			$connections = $this->filterByBirthDate($connections, $birthDate);
		}
		if ($request->has('before_birth_date')) {
			$birthDate = $request->input('before_birth_date');
			$connections = $this->filterByBirthDate($connections, $birthDate, 'before');
		}
		if ($request->has('after_birth_date')) {
			$birthDate = $request->input('after_birth_date');
			$connections = $this->filterByBirthDate($connections, $birthDate, 'after');
		}
		if ($request->has('join_date')) {
			$joinDate = $request->input('join_date');
			$connections = $this->filterByJoinDate($connections, $joinDate, 'after');
		}
		if ($request->has('before_join_date')) {
			$joinDate = $request->input('before_join_date');
			$connections = $this->filterByJoinDate($connections, $joinDate, 'before');
		}
		if ($request->has('after_join_date')) {
			$joinDate = $request->input('after_join_date');
			$connections = $this->filterByJoinDate($connections, $joinDate, 'after');
		}
		if ($request->has('connect_date')) {
			$connectDate = $request->input('connect_date');
			$connections = $this->filterByConnectDate($connections, $connectDate);
		}
		if ($request->has('before_connect_date')) {
			$connectDate = $request->input('before_connect_date');
			$connections = $this->filterByConnectDate($connections, $connectDate, 'before');
		}
		if ($request->has('after_connect_date')) {
			$connectDate = $request->input('after_connect_date');
			$connections = $this->filterByConnectDate($connections, $connectDate, 'after');
		}

		return $connections;
	}

	/**
	 * Filter connections by name.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $name - the name to filter for.
	 * @return Connection[]
	 */
	function filterByName($connections, $name) {	
		return $connections->filter(function ($connection) use ($name) {
			return str_contains(strtolower($connection->getFullName()), strtolower($name));
		})->values();
	}

	/**
	 * Filter connections by location.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $location - the location to filter for.
	 * @return Connection[]
	 */
	function filterByLocation($connections, $location) {
		return $connections->filter(function ($connection) use ($location) {
			return str_contains(strtolower($connection->location), strtolower($location));
		})->values();
	}

	/**
	 * Filter connections by occupation.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $occupation - the occupation to filter for.
	 * @return Connection[]
	 */
	function filterByOccupation($connections, $occupation) {
		return $connections->filter(function ($connection) use ($occupation) {
			return str_contains(strtolower($connection->occupation), strtolower($occupation));
		})->values();
	}

	/**
	 * Filter connections by gender.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $gender - the gender to filter for.
	 * @return Connection[]
	 */
	function filterByGender($connections, $gender) {
		return $connections->filter(function ($connection) use ($gender) {
			return strtolower($connection->gender) == strtolower($gender);
		})->values();
	}

	/**
	 * Filter connections by age.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $age - the age to filter for.
	 * @param strinig $operator - the comparison to apply.
	 * @return Connection[]
	 */
	function filterByAge($connections, $age, $operator = 'equal') {
		return $connections->filter(function ($connection) use ($age, $operator) {
			switch ($operator) {
				case 'greater_than':
					return $connection->age > $age;
				case 'greater_equal':
					return $connection->age >= $age;
				case 'less_than':
					return $connection->age < $age;
				case 'less_equal':
					return $connection->age <=$age;
				default:
					return $connection->age == $age;
			}
		})->values();
	}

	/**
	 * Filter connections by birth date.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $birthDate - the birth date to filter for.
	 * @param strinig $operator - the comparison to apply.
	 * @return Connection[]
	 */
	function filterByBirthDate($connections, $birthDate, $operator = 'equal') {
		return $connections->filter(function ($connection) use ($birthDate, $operator) {
			switch ($operator) {
				case 'before':
					return $connection->birth_date > $birthDate;
				case 'after':
					return $connection->birth_date > $birthDate;
				default:
					return $connection->birth_date == $birthDate;
			}
		})->values();
	}

	/**
	 * Filter connections by join date.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $joinDate - the join date to filter for.
	 * @param strinig $operator - the comparison to apply.
	 * @return Connection[]
	 */
	function filterByJoinDate($connections, $joinDate, $operator = 'equal') {
		return $connections->filter(function ($connection) use ($joinDate, $operator) {
			switch ($operator) {
				case 'before':
					return $connection->join_date > $joinDate;
				case 'after':
					return $connection->join_date > $joinDate;
				default:
					return $connection->join_date == $joinDate;
			}
		})->values();
	}

	/**
	 * Filter connections by age.
	 *
	 * @param Connection[] $connections - the connections to filter.
	 * @param string $connectDate - the connect date to filter for.
	 * @param strinig $operator - the comparison to apply.
	 * @return Connection[]
	 */
	function filterByConnectDate($connections, $connectDate, $operator = 'equal') {
		return $connections->filter(function ($connection) use ($connectDate, $operator) {
			switch ($operator) {
				case 'before':
					return $connection->connect_date > $connectDate;
				case 'after':
					return $connection->connect_date > $connectDate;
				default:
					return $connection->connect_date == $connectDate;
			}
		})->values();
	}
}
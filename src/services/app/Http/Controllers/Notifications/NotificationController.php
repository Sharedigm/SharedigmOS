<?php
/******************************************************************************\
|                                                                              |
|                           NotificationController.php                         |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a controller for fetching and managing notifications.         |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.txt', which is part of this source code distribution.        |
|                                                                              |
|******************************************************************************|
|            Copyright (C) 2016-2024, Sharedigm, www.sharedigm.com             |
\******************************************************************************/

namespace App\Http\Controllers\Notifications;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Collection;
use Illuminate\Notifications\DatabaseNotification;
use App\Models\Users\User;
use App\Models\Storage\Sharing\Info\ShareRequestInfo;
use App\Models\Gestures\Info\GestureInfo;
use App\Notifications\BaseNotification;
use App\Http\Controllers\Controller;
use App\Http\Filters\MessageFilter;
use App\Http\Filters\DateFilter;
use App\Http\Filters\RangeFilter;
use App\Utilities\Strings\StringUtils;

class NotificationController extends Controller
{
	//
	// querying methods
	//

	/**
	 * Get the notifications for the current user.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @return App\Notifications\Notification[]
	 */
	public function getCurrent(Request $request) {
		$notifications = User::current()->unreadNotifications->sortByDesc('created_at');
		$array = [];

		// parse filter parameters
		//
		if ($request->has('before')) {
			$before = $request->input('before');
			$notifications = $notifications->filter(function($notification) use ($before) {
    			return $notification->created_at < $before;
			});
		}
		if ($request->has('date')) {
			$date = $request->input('date');
			$notifications = $notifications->filter(function($notification) use ($date) {
    			return $notification->created_at == $date;
			});
		}
		if ($request->has('after')) {
			$after = $request->input('after');
			$notifications = $notifications->filter(function($notification) use ($after) {
    			return $notification->created_at > $after;
			});
		}
		if ($request->has('message')) {
			$message = strtolower($request->input('message'));
			$notifications = $notifications->filter(function($notification) use ($message) {
				$item = self::getItem($notification->data);
				$itemMessage = strtolower($item['message']);
    			return $item && StringUtils::contains($itemMessage,
    				$message);
			});
		}

		// append additional data to notifications
		//
		foreach ($notifications as $notification) {
			$notification = $this->appended($notification);
			if ($notification) {
				array_push($array, $notification);
			}
		}

		return $array;
	}

	/**
	 * Get a notification.
	 *
	 * @param string $id - the id of the notification to get
	 * @return App\Notifications\Notification
	 */
	public function getIndex(string $id) {

		// find notification by id
		//
		return $this->appended(DatabaseNotification::find($id));
	}

	//
	// setting methods
	//

	/**
	 * Dismiss a notification.
	 *
	 * @param string $id - the id of the notification to dismiss
	 * @return App\Notifications\Notification[]
	 */
	public function dismissIndex(string $id) {
		$notification = DatabaseNotification::find($id);
		$notification->markAsRead();
		return self::appended(DatabaseNotification::find($id));
	}

	//
	// private methods
	//

	/**
	 * Get item associated with a notification.
	 *
	 * @param object $data - the attributes of the item
	 * @return object
	 */
	private static function getItem($data) {
		if (array_key_exists('share_request_id', $data)) {
			return ShareRequestInfo::find($data['share_request_id']);
		} else if (array_key_exists('gesture_id', $data)) {
			return GestureInfo::find($data['gesture_id']);
		}
	}

	/**
	 * Append data to a notification.
	 *
	 * @param DatabaseNotification $notification - the notification to append to
	 * @return App\Notifications\Notification
	 */
	private static function appended(DatabaseNotification $notification) {
		$data = $notification->data;

		// append share request data
		//
		if (array_key_exists('share_request_id', $data)) {
			$shareRequest = ShareRequestInfo::find($data['share_request_id']);
			if ($shareRequest) {
				$notification['share_request'] = $shareRequest;
				return $notification;
			}

		// append gesture data
		//
		} else if (array_key_exists('gesture_id', $data)) {
			$gesture = GestureInfo::find($data['gesture_id']);
			if ($gesture) {
				$notification['gesture'] = $gesture;
				return $notification;
			}
		}

		return null;
	}
}
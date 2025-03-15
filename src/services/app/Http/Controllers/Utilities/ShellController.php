<?php
/******************************************************************************\
|                                                                              |
|                               ShellController.php                            |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a controller for running shell commands.                      |
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

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Utilities\Security\Shell;

class ShellController extends Controller
{
	//
	// shell methods
	//

	/**
	 * Execute a shell command.
	 *
	 * @param Illuminate\Http\Request $request - the Http request object
	 * @return string
	 */
	public function postCommand(Request $request) {

		// parse params
		//
		$directory = $request->input('directory');
		$command = $request->input('command');

		$shell = new Shell([
			'directory' => $directory
		]);

		// parse command
		//
		$executable = Shell::parseExecutable($command);
		$flags = Shell::parseFlags($command);
		$args = Shell::parseArgs($command);

		// execute command
		//
		$output = $shell->exec($executable, $flags, $args);

		return [
			'directory' => $shell->directory,
			'output' => $output
		];
	}
}
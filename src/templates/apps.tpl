<h1><i class="fa fa-rocket"></i>Apps</h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><i class="fa fa-rocket"></i>Apps</li>
</ol>

<div class="content">
	<p><%= application.name %> has a continually growing collection of apps for communicating with your contacts and managing your data. </p>
	<% let apps = []; %>

	<% apps = application.getApps((app) => { return app.get('category') == 'system' && !app.get('disabled'); }); %>
	<% if (apps.length != 0) { %>
	<div class="section">
		<div class="row">
			<div class="col-sm-4">
				<h2><i class="fa fa-desktop"></i>System Apps</h2>
				<p>The system apps allow you to use the core functionality of the system. </p>
				<br />
			</div>
			<div class="col-sm-8">
				<div class="app-icons large icon-grid" style="text-align:center">
				<% for (let i = 0; i < apps.length; i++) { %>
				<% let app = apps.at(i); %>
				<a class="item" href="#apps/<%= app.get('app') %>" style="text-decoration:none">	
					<div class="row">
						<div class="icon colored <%= app.get('color') %>">
							<img src="images/icons/apps/<%= app.get('app') + '.svg' %>" />
							<i class="<%= app.get('icon') %>"></i>
						</div>
					</div>
					<div class="row">
						<div class="name"><%= app.get('name') %></div>
					</div>
				</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
	<% } %>

	<% apps = application.getApps((app) => { return app.get('category') == 'social' && !app.get('disabled'); }); %>
	<% if (apps.length != 0) { %>
	<div class="section">
		<div class="row">
			<div class="col-sm-4">
				<h2><i class="fa fa-user"></i>Social Apps</h2>
				<p>Social apps are provided to allow you to connect with friends or colleages and to share messages, files, folders, photos, and music. </p>
				<br />
			</div>
			<div class="col-sm-8">
				<div class="app-icons large icon-grid" style="text-align:center">
				<% for (let i = 0; i < apps.length; i++) { %>
				<% let app = apps.at(i); %>
				<a class="item" href="#apps/<%= app.get('app') %>" style="text-decoration:none">	
					<div class="row">
						<div class="icon colored <%= app.get('color') %>">
							<img src="images/icons/apps/<%= app.get('app') + '.svg' %>" />
							<i class="<%= app.get('icon') %>"></i>
						</div>
					</div>
					<div class="row">
						<div class="name"><%= app.get('name') %></div>
					</div>
				</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
	<% } %>

	<% apps = application.getApps((app) => { return app.get('category') == 'productivity' && !app.get('disabled'); }); %>
	<% if (apps.length != 0) { %>
	<div class="section">
		<div class="row">
			<div class="col-sm-4">
				<h2><i class="fa fa-briefcase"></i>Productivity Apps</h2>
				<p>Productivity apps help you with your work, allowing you to create or edit files and to manage projects. </p>
				<br />
			</div>
			<div class="col-sm-8">
				<div class="app-icons large icon-grid" style="text-align:center">
				<% for (let i = 0; i < apps.length; i++) { %>
				<% let app = apps.at(i); %>
				<a class="item" href="#apps/<%= app.get('app') %>" style="text-decoration:none">	
					<div class="row">
						<div class="icon colored <%= app.get('color') %>">
							<img src="images/icons/apps/<%= app.get('app') + '.svg' %>" />
							<i class="<%= app.get('icon') %>"></i>
						</div>
					</div>
					<div class="row">
						<div class="name"><%= app.get('name') %></div>
					</div>
				</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
	<% } %>

	<% apps = application.getApps((app) => { return app.get('category') == 'multimedia' && !app.get('disabled'); }); %>
	<% if (apps.length != 0) { %>
	<div class="section">
		<div class="row">
			<div class="col-sm-4">
				<h2><i class="fa fa-music"></i>Multimedia Apps</h2>
				<p>Multimedia apps allow you to enjoy image, video, or audio media files. </p>
				<br />
			</div>
			<div class="col-sm-8">
				<div class="app-icons large icon-grid" style="text-align:center">
				<% for (let i = 0; i < apps.length; i++) { %>
				<% let app = apps.at(i); %>
				<a class="item" href="#apps/<%= app.get('app') %>" style="text-decoration:none">	
					<div class="row">
						<div class="icon colored <%= app.get('color') %>">
							<img src="images/icons/apps/<%= app.get('app') + '.svg' %>" />
							<i class="<%= app.get('icon') %>"></i>
						</div>
					</div>
					<div class="row">
						<div class="name"><%= app.get('name') %></div>
					</div>
				</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
	<% } %>

	<% apps = application.getApps((app) => { return app.get('category') == 'configuration' && !app.get('disabled'); }); %>
	<% if (apps.length != 0) { %>
	<div class="section">
		<div class="row">
			<div class="col-sm-4">
				<h2><i class="fa fa-gear"></i>Configuration Apps</h2>
				<p>The configuration apps allow you to configure the system and environment to suit your needs and personal aesthetics. </p>
				<br />
			</div>
			<div class="col-sm-8">
				<div class="app-icons large icon-grid" style="text-align:center">
				<% for (let i = 0; i < apps.length; i++) { %>
				<% let app = apps.at(i); %>
				<a class="item" href="#apps/<%= app.get('app') %>" style="text-decoration:none">	
					<div class="row">
						<div class="icon colored <%= app.get('color') %>">
							<img src="images/icons/apps/<%= app.get('app') + '.svg' %>" />
							<i class="<%= app.get('icon') %>"></i>
						</div>
					</div>
					<div class="row">
						<div class="name"><%= app.get('name') %></div>
					</div>
				</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
	<% } %>

	<% apps = application.getApps((app) => { return app.get('category') == 'utility' && !app.get('disabled'); }); %>
	<% if (apps.length != 0) { %>
	<div class="section">
		<div class="row">
			<div class="col-sm-4">
				<h2><i class="fa fa-tools"></i>Utility Apps</h2>
				<p>Utility apps add basic additional functionality to make life just a little bit easier. </p>
				<br />
			</div>
			<div class="col-sm-8">
				<div class="app-icons large icon-grid" style="text-align:center">
				<% for (let i = 0; i < apps.length; i++) { %>
				<% let app = apps.at(i); %>
				<a class="item" href="#apps/<%= app.get('app') %>" style="text-decoration:none">	
					<div class="row">
						<div class="icon colored <%= app.get('color') %>">
							<img src="images/icons/apps/<%= app.get('app') + '.svg' %>" />
							<i class="<%= app.get('icon') %>"></i>
						</div>
					</div>
					<div class="row">
						<div class="name"><%= app.get('name') %></div>
					</div>
				</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
	<% } %>

	<% apps = application.getApps((app) => { return app.get('category') == 'examples' && !app.get('disabled'); }); %>
	<% if (apps.length != 0) { %>
	<div class="section">
		<div class="row">
			<div class="col-sm-4">
				<h2><i class="fa fa-rocket"></i>Example Apps</h2>
				<p>Examples apps are provided for developers as a set of simple templates containing the core structure of apps to use as a base for the development of new apps. </p>
				<br />
			</div>
			<div class="col-sm-8">
				<div class="app-icons large icon-grid" style="text-align:center">
				<% for (let i = 0; i < apps.length; i++) { %>
				<% let app = apps.at(i); %>
				<a class="item" href="#apps/<%= app.get('app') %>" style="text-decoration:none">	
					<div class="row">
						<div class="icon colored <%= app.get('color') %>">
							<img src="images/icons/apps/<%= app.get('app') + '.svg' %>" />
							<i class="<%= app.get('icon') %>"></i>
						</div>
					</div>
					<div class="row">
						<div class="name"><%= app.get('name') %></div>
					</div>
				</a>
				<% } %>
				</div>
			</div>
		</div>
	</div>
	<% } %>
</div>
<h1><i class="<%= config.apps.account_manager.icon %>"></i><%= config.apps.account_manager.name %></h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><a href="#apps"><i class="fa fa-rocket"></i>Apps</a></li>
	<li><i class="fa fa-user"></i><%= config.apps.account_manager.name %></li>
</ol>

<div class="content">
	<div class="attention icon colored <%= config.apps.account_manager.color %>">
		<img src="images/icons/apps/<%= config.apps.account_manager.image || config.apps.account_manager.app + '.svg' %>" />
	</div>

	<div class="description section">
		<p>The <%= config.apps.account_manager.name %> app is used to help an administrator to view and manage user accounts. </p>
	</div>

	<div class="details section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-check"></i>Features</h2>
				<ul>
					<li>View accounts by name, location, occupation, or gender.</p>
					<li>Search for accounts by name.</li>
					<li>Sort accounts by name, date, or storage.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h2><i class="fa fa-star"></i>Benefits</h2>
				<ul>
					<li>Manage user accounts. </p>
					<li>Monitor account creation.</li>
				</ul>
			</div>
		</div>
	</div>

	<h2><i class="fa fa-info-circle"></i>For More Information</h2>
	<ul>
		<li><a href="#help/building-social-network/finding-connections">Finding Connections</a></li>
	</ul>
	
	<h2><i class="fa fa-desktop"></i>Screen Shots</h2>
	<div class="figure desktop-only">
		<a href="images/info/apps/account-manager/account-manager.png" target="_blank" class="lightbox" title="<%= config.apps.account_manager.name %>"><img class="dialog" src="images/info/apps/account-manager/account-manager.png" /></a>
		<div class="caption"><%= config.apps.account_manager.name %></div>
	</div>
	<div class="figure mobile-only">
		<a href="images/info/apps/account-manager/mobile/mobile-account-manager.png" target="_blank" class="lightbox" title="<%= config.apps.account_manager.name %>"><img class="dialog" src="images/info/apps/account-manager/mobile/mobile-account-manager.png" /></a>
		<div class="caption"><%= config.apps.account_manager.name %></div>
	</div>
</div>
<h1><i class="<%= config.apps['example2'].icon %>"></i><%= config.apps['example2'].name %></h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><a href="#apps"><i class="fa fa-rocket"></i>Apps</a></li>
	<li><i class="fa fa-file-alt"></i><%= config.apps['example2'].name %></li>
</ol>

<div class="content">
	<div class="attention icon colored <%= config.apps['example2'].color %>">
		<img src="images/icons/apps/<%= config.apps['example2'].image || config.apps['example2'].app + '.svg' %>" />
	</div>

	<div class="description section">
		<p>The <%= config.apps['example2'].name %> app is a simple example of a two-column app with a mainbar and a sidebar. </p>
	</div>

	<div class="details section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-check"></i>Features</h2>
				<ul>
					<li>Menu bar.</li>
					<li>Two-column layout.</li>
					<li>Resizable window.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h2><i class="fa fa-star"></i>Benefits</h2>
				<ul>
					<li>Create your own two-column apps from this example. </li>
				</ul>
			</div>
		</div>
	</div>

	<h2><i class="fa fa-desktop"></i>Screen Shots</h2>
	<div class="figure desktop-only">
		<a href="images/info/apps/example2/example2.png" target="_blank" class="lightbox" title="<%= config.apps['example2'].name %>"><img class="dialog" src="images/info/apps/example2/example2.png" /></a>
		<div class="caption"><%= config.apps['example2'].name %></div>
	</div>
	<div class="figure mobile-only">
		<a href="images/info/apps/example2/mobile/mobile-example2.png" target="_blank" class="lightbox" title="<%= config.apps['example2'].name %>"><img src="images/info/apps/example2/mobile/mobile-example2.png" /></a>
		<div class="caption"><%= config.apps['example2'].name %></div>
	</div>
</div>
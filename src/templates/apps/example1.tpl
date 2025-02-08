<h1><i class="<%= config.apps['example1'].icon %>"></i><%= config.apps['example1'].name %></h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><a href="#apps"><i class="fa fa-rocket"></i>Apps</a></li>
	<li><i class="fa fa-file-alt"></i><%= config.apps['example1'].name %></li>
</ol>

<div class="content">
	<div class="attention icon colored <%= config.apps['example1'].color %>">
		<img src="images/icons/apps/<%= config.apps['example1'].image || config.apps['example1'].app + '.svg' %>" />
	</div>

	<div class="description section">
		<p>The <%= config.apps['example1'].name %> app is a simple example of a single-column app. </p>
	</div>

	<div class="details section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-check"></i>Features</h2>
				<ul>
					<li>Menu bar.</li>
					<li>Single-column layout.</li>
					<li>Resizable window.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h2><i class="fa fa-star"></i>Benefits</h2>
				<ul>
					<li>Create your own single-column apps from this example. </li>
				</ul>
			</div>
		</div>
	</div>

	<h2><i class="fa fa-desktop"></i>Screen Shots</h2>
	<div class="figure desktop-only">
		<a href="images/info/apps/example1/example1.png" target="_blank" class="lightbox" title="<%= config.apps['example1'].name %>"><img class="dialog" src="images/info/apps/example1/example1.png" /></a>
		<div class="caption"><%= config.apps['example1'].name %></div>
	</div>
	<div class="figure mobile-only">
		<a href="images/info/apps/example1/mobile/mobile-example1.png" target="_blank" class="lightbox" title="<%= config.apps['example1'].name %>"><img src="images/info/apps/example1/mobile/mobile-example1.png" /></a>
		<div class="caption"><%= config.apps['example1'].name %></div>
	</div>
</div>
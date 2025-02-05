<h1><i class="<%= config.apps['example3'].icon %>"></i><%= config.apps['example3'].name %></h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><a href="#apps"><i class="fa fa-rocket"></i>Apps</a></li>
	<li><i class="fa fa-file-alt"></i><%= config.apps['example3'].name %></li>
</ol>

<div class="content">
	<div class="attention icon colored <%= config.apps['example3'].color %>">
		<img src="images/icons/apps/<%= config.apps['example3'].image || config.apps['example3'].app + '.svg' %>" />
	</div>

	<div class="description section">
		<p>The <%= config.apps['example3'].name %> is a simple example of a simple accessory app. </p>
	</div>

	<div class="details section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-check"></i>Features</h2>
				<ul>
					<li>No menu bar.</li>
					<li>Single content column.</li>
					<li>Fixed size window.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h2><i class="fa fa-star"></i>Benefits</h2>
				<ul>
					<li>Create your own accessory apps from this example. </li>
				</ul>
			</div>
		</div>
	</div>

	<h2><i class="fa fa-desktop"></i>Screen Shots</h2>
	<div class="figure desktop-only">
		<a href="images/info/apps/example3/example3.png" target="_blank" class="lightbox" title="<%= config.apps['example3'].name %>"><img class="dialog" src="images/info/apps/example3/example3.png" style="width:300px" /></a>
		<div class="caption"><%= config.apps['example3'].name %></div>
	</div>
	<div class="figure mobile-only">
		<a href="images/info/apps/example3/mobile/mobile-example3.png" target="_blank" class="lightbox" title="<%= config.apps['example3'].name %>"><img src="images/info/apps/example3/mobile/mobile-example3.png" /></a>
		<div class="caption"><%= config.apps['example3'].name %></div>
	</div>
</div>
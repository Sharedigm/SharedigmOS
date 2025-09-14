<h1><i class="<%= config.apps.post_viewer.icon %>"></i><%= config.apps.post_viewer.name %></h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><a href="#apps"><i class="fa fa-rocket"></i>Apps</a></li>
	<li><i class="fa fa-hashtag"></i><%= config.apps.post_viewer.name %></li>
</ol>

<div class="content">
	<div class="attention icon colored <%= config.apps.post_viewer.color %>">
		<img src="images/icons/apps/<%= config.apps.post_viewer.image || config.apps.post_viewer.app + '.svg' %>" />
	</div>

	<div class="description section">
		<p>The <%= config.apps.post_viewer.name %> app lets you view posts and and their associated comments and replies. </p>
	</div>

	<div class="details section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-check"></i>Features</h2>
				<ul>
					<li>Read friends' news posts and post your own news updates.</li>
					<li>Post new articles, comment on existing posts, and reply to comments.</li>
					<li>'Like' posts, comments, and replies.</li>
					<li>Include files and photos with your posts.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h2><i class="fa fa-star"></i>Benefits</h2>
				<ul>
					<li>Allows you to keep up-to-date with events in the lives of your friends and colleagues.</li>
				</ul>
			</div>
		</div>
	</div>

	<h2><i class="fa fa-info-circle"></i>For More Information</h2>
	<ul>
		<li><a href="#help/sharing-news">Sharing News</a></li>
	</ul>
	
	<h2><i class="fa fa-desktop"></i>Screen Shots</h2>
	<div class="figure desktop-only">
		<a href="images/info/apps/post-viewer/post-viewer.png" target="_blank" class="lightbox" title="<%= config.apps.post_viewer.name %>"><img class="dialog" src="images/info/apps/post-viewer/post-viewer.png" /></a>
		<div class="caption"><%= config.apps.post_viewer.name %></div>
	</div>
	<div class="figure mobile-only">
		<a href="images/info/apps/post-viewer/mobile/mobile-post-viewer.png" target="_blank" class="lightbox" title="<%= config.apps.post_viewer.name %>"><img src="images/info/apps/post-viewer/mobile/mobile-post-viewer.png" /></a>
		<div class="caption"><%= config.apps.post_viewer.name %></div>
	</div>
</div>
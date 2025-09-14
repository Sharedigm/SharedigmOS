<h1><i class="<%= config.apps.chat_browser.icon %>"></i><%= config.apps.chat_browser.name %></h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><a href="#apps"><i class="fa fa-rocket"></i>Apps</a></li>
	<li><i class="fa fa-comments"></i><%= config.apps.chat_browser.name %></li>
</ol>

<div class="content">
	<div class="attention icon colored <%= config.apps.chat_browser.color %>">
		<img src="images/icons/apps/<%= config.apps.chat_browser.image || config.apps.chat_browser.app + '.svg' %>" />
	</div>

	<div class="description section">
		<p>The <%= config.apps.chat_browser.name %> app lets you view and manage your direct messaging chat sessions. </p>
	</div>

	<div class="details section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-check"></i>Features</h2>
				<ul>
					<li>View your chat sessions.</li>
					<li>View participant names, number of chat participants, and number of messages.</li>
					<li>View and sort by create or modify date.</li> 
				</ul>
			</div>
			<div class="col-sm-6">
				<h2><i class="fa fa-star"></i>Benefits</h2>
				<ul>
					<li>Manage your chat communications easily.</li>
				</ul>
			</div>
		</div>
	</div>

	<h2><i class="fa fa-info-circle"></i>For More Information</h2>
	<ul>
		<li><a href="#help/sharing-messages">Sharing Messages</a></li>
	</ul>

	<h2><i class="fa fa-desktop"></i>Screen Shots</h2>
	<div class="figure desktop-only">
		<a href="images/info/apps/chat-browser/chat-browser.png" target="_blank" class="lightbox" title="<%= config.apps.chat_browser.name %>"><img class="dialog" src="images/info/apps/chat-browser/chat-browser.png" /></a>
		<div class="caption"><%= config.apps.chat_browser.name %></div>
	</div>
	<div class="figure mobile-only">
		<a href="images/info/apps/chat-browser/mobile/mobile-chat-browser.png" target="_blank" class="lightbox" title="<%= config.apps.chat_browser.name %>"><img src="images/info/apps/chat-browser/mobile/mobile-chat-browser.png" /></a>
		<div class="caption"><%= config.apps.chat_browser.name %></div>
	</div>
</div>
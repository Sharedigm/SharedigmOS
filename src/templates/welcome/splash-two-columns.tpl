<svg class="defs">
	<defs>
		<%= filters %>
	</defs>
</svg>

<div class="col-md-6">
	<div class="contents">
		<% if (branding.welcome.splash.brand.logo) { %>
		<div class="logo">
			<% if (branding.welcome.splash.brand.logo.href) { %><a href="<%= branding.welcome.splash.brand.logo.href %>"><% } %><img src="<%= branding.welcome.splash.brand.logo.src %>"<% if (branding.welcome.splash.brand.logo.tooltip) { %> data-toggle="tooltip" title="<%= branding.welcome.splash.brand.logo.tooltip %>"<% } %> /><% if (branding.welcome.splash.brand.logo.href) { %></a><% } %>
		</div>
		<% } %>

		<% if (branding.welcome.splash.greeting && branding.welcome.splash.greeting.text) { %>
		<div class="greeting"><%= branding.welcome.splash.greeting.text %></div>
		<% } %>

		<% if (branding.welcome.splash.brand.logotype) { %>
		<% if (branding.welcome.splash.brand.logotype.href) { %><a href="<%= branding.welcome.splash.brand.logotype.href %>"><% } %>
		<div class="logotype">
			<% if (branding.welcome.splash.brand.logotype.names) { %>
			<% let names = branding.welcome.splash.brand.logotype.names; %>
			<% let keys = Object.keys(names); %>
			<% for (let i = 0; i < keys.length; i++) { %><% let key = keys[i]; %><span><%= key.replace(/ /g, '&nbsp') %></span><% } %>
			<% } %>
		</div>
		<% if (branding.welcome.splash.brand.logotype.href) { %></a><% } %>
		<% } %>

		<% if (branding.welcome.splash.tagline && branding.welcome.splash.tagline.text) { %>
		<div class="tagline"><%= branding.welcome.splash.tagline.text %></div>
		<% } %>
	</div>
</div>

<div class="col-md-6">
	<div class="contents">
		<% if (branding.welcome.splash.description && branding.welcome.splash.description.text) { %>
		<div class="description"><%= branding.welcome.splash.description.text %></div>
		<% } %>

		<% if (branding.links) { %>
		<div class="links">
			<% for (let i=0; i < branding.links.length; i++) { %>
			<div class="link"<% if (branding.links[i].font && defaults.fonts[branding.links[i].font]) { %>style="font-family:<%= defaults.fonts[branding.links[i].font]['font-family'] %>"<% } %>>
				<% if (branding.links[i].image) { %>
				<a href="<%= branding.links[i].url %>"><img class="pixelated" src="<%= branding.links[i].image %>" /></a>
				<% } %>
				<a href="<%= branding.links[i].url %>"><%= branding.links[i].text %></a>
			</div>
			<% } %>
		</div>
		<% } %>

		<% if (branding.welcome.splash.search) { %>
		<div class="search row">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="<%= branding.welcome.splash.search.placeholder || 'Search' %>">
				<div class="input-group-addon btn" data-toggle="tooltip" title="<%= branding.welcome.splash.search.tips || ('Search ' + application.name) %>">
					<i class="active fa fa-search"></i>
				</div>
			</div>
		</div>
		<% } %>

		<div class="buttons">
			<% if (show_video) { %>
			<button class="show-video btn btn-lg desktop-only">
				<i class="fa fa-video"></i>View Video
			</button>
			<% } %>
			<div class="visible-xs">
				<% if (show_sign_in) { %>
				<button class="sign-in btn btn-primary btn-lg">
					<i class="fa fa-chevron-right"></i>Sign In
				</button>
				<% } %>
				<% if (show_sign_up) { %>
				<button class="sign-up btn btn-lg">
					<i class="fa fa-pencil-alt"></i>Sign Up!
				</button>
				<% } %>
			</div>
		</div>
	</div>
</div>
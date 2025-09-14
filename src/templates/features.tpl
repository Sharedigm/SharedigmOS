<h1><i class="fa fa-lightbulb"></i>Features</h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><i class="fa fa-lightbulb"></i>Features</li>
</ol>

<div class="content">
	<p><%= application.name %> has many unique and useful features including: </p>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-server"></i>Self-Hostable</h2>
				<p><%= application.name %> can be hosted on your own server. Any standard web server can be used to host your own <%= application.name %> instance on your own hardware or hardware that you control. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<img src="images/info/features/server.svg" />
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fab fa-docker"></i>Docker Installable</h2>
				<p><%= application.name %> can be installed in one easy step using Docker or you can install it manually if you'd prefer. Either way, we've worked hard to make it so that you don't have to. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<img src="images/info/features/docker-mark-blue.svg" />
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-smile"></i>Friendly User Interface</h2>
				<p>The friendly and familiar user interface has been designed to blend the power of the cloud with the best aspects of the user interfaces that you already know and love. </p>
			</div>
			<div class="col-sm-6">
				<div class="icon-grid figure">
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/files/txt.svg" /></div>
						</div>
						<div class="row">
							<div class="name">File</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/folder-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Folder</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/folder-empty.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Empty Folder</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/files/jpg.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Photo</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/files/mp4.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Video</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/trash-empty.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Trash</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-share"></i>File Sharing</h2>
				<p>Share your files in a variety of ways. </p>
				<ul>
					<li>share by hyperlink</li>
					<li>share by invitation / shared file or folder</li>
					<li>share by email</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<div class="icon-grid figure">
					<div class="file item">
						<div class="row">
							<div class="icon"><img src="images/icons/files/text.svg" /></div>
						</div>
						<div class="row">
							<div class="name">File</div>
						</div>
					</div>
					<div class="file item">
						<div class="row">
							<div class="icon"><img src="images/icons/files/text.svg" /></div>
							<div class="badges">
								<div class="links badge tooltip-trigger" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="has 1 link">
									<i class="fa fa-link"></i>
									<span class="num-links">3</span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Linked File</div>
						</div>
					</div>
					<div class="file item">
						<div class="row">
							<div class="icon">
								<img src="images/icons/files/text.svg" />
								<div class="owner small tile">
									<div class="thumbnail" style="background-image:url(images/logos/indie-logo.svg"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Shared File</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/folder-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Folder</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/folder-full.svg" /></div>
							<div class="badges">
								<div class="links badge tooltip-trigger" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="has 1 link">
									<i class="fa fa-link"></i>
									<span class="num-links">5</span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Linked Folder</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon">
								<img src="images/icons/folders/folder-full.svg" />
								<div class="owner small tile">
									<div class="thumbnail" style="background-image:url(images/logos/indie-logo.svg"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Shared Folder</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-key"></i>Access Controls</h2>
				<p>When sharing files and folders, you can: </p>
				<ul>
					<li>allow readonly or password access</li>
					<li>limit number of accesses</li>
					<li>set expiration time / date</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<img src="images/info/features/key.svg" />
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-rocket"></i>Apps</h2>
				<p><%= application.name %> has a collection of <a href="#apps">apps</a> for viewing, managing and sharing your data.</p>
			</div>
			<div class="col-sm-6">
				<div class="icons animated carousel">
					<% let apps = application.getVisibleApps(); %>
					<% for (let i = 0; i < apps.length; i++) { %>
					<% let app = apps.at(i); %>

					<% if (!app.get('disabled')) { %>
					<div class="carousel-cell">
						<div class="app-icons large icon-grid items">
							<a href="#apps/<%= app.get('app') %>">
							<div class="item" href="#apps/profile-browser" style="text-decoration:none">	
								<div class="row">
									<div class="icon colored <%= app.get('color') %>">
										<img src="images/icons/apps/<%= app.get('image') || app.get('app') + '.svg' %>" />
										<i class="<%= app.get('icon') %>"></i>
									</div>
								</div>
								<div class="row">
									<div class="name"><%= app.get('name') %></div>
								</div>
							</div>
							</a>
						</div>
					</div>
					<% } %>

					<% } %>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-cog"></i>Customizable</h2>
				<p>When you host the platform yourself, you get to control its features and appearance.  We've made it easy for you, the platform operator, to customize it to reflect your brand, your audience, and your particular applications. </p>
			</div>
			<div class="col-sm-6">
				<div class="attention"><div class="emphasis">Build Your Brand. </div></div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-paint-roller"></i>Themeable</h2>
				<p>A set of themes is provided so that each user can make their computing environment match their personal style and preferences. Make it look like your favorite OS, like a vintage OS, or like something totally new and different. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<a href="images/info/features/theme-manager.png" target="_blank" class="lightbox" title="Theme Manager"><img src="images/info/features/theme-manager-cropped.png" /></a>
					<div class="caption">Theme Manager</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<a class="unstyled" href="#features/integrated-design">
					<h2><i class="fa fa-network-wired"></i>Integrated</h2>
					<p>The integrated design makes it efficient to use because sharing is integrated throughout the system and apps and the apps work seamlessly together. </p>
				</a>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<a href="#features/integrated-design"><img src="images/info/features/integrated-design.png" /></a>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-mobile"></i>Platform Independent</h2>
				<p><%= application.name %> works across all of your devices and operating systems.  It runs on your laptop, destop, tablet, or phone and works with Windows, MacOS, Linux, iOS, and Android and requires no installation.  This means that your data and applications will always be accessible no matter what device or OS you're using. <p> 
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<a href="images/info/mobile/iphone.png" target="_blank" class="lightbox" title="<%= application.name %> Mobile"><img src="images/info/mobile/iphone.png" /></a>
					<div class="caption"><%= application.name %> Mobile</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-code"></i>Web Postable</h2>
				<p>You can <a href="#features/web-postable">post and view</a> files that have been uploaded to <%= application.name %> on other websites easily with just a bit of HTML code. </p>
			</div>
			<div class="col-sm-6">
				<a href="#features/web-postable">
					<div class="code well">
		&lt;iframe src="YOUR FILE LINK HERE"&gt;&lt;/iframe&gt
					</div>
				</a>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-vault"></i>Secure</h2>
				<p><%= application.name %> was designed to keep users' data and files safe and secure.  For added security and convenience, you can configure the platform to use third party identity providers to manage user passwords. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<img src="images/info/features/safe.svg" />
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-lock"></i>Private</h2>
				<p>By hosting your own cloud, your data is private and controlled by you.  You decide who can see it and how they use it.  You can even run <%= application.name %> on a private network or SCIF to control access to sensitive data. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<img src="images/info/features/lock.svg" />
				</div>
			</div>
		</div>
	</div>
</div>
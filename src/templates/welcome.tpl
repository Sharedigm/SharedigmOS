<div class="primary colored section">
	<div class="row">
		<div class="col-sm-6">
			<h1><img class="icon" src="images/logos/logo.svg" />Sharing Made Simple</h1>
			<p><%= application.name %> is a <a href="#features/self-hostable">self-hostable</a> cloud based operating system that brings together file management, file sharing, and collaboration / social networking all in one easy to use platform. </p>
			<p>Sharedigm can help you to share your digital life.</p>
		</div>
		<div class="col-sm-6">
			<div class="figure">
				<a href="images/info/desktop/desktop.png" target="_blank" class="lightbox" title="Desktop"><img src="images/info/desktop/desktop.png" /></a>
				<div class="caption">Desktop</div>
			</div>
			<div class="figure" style="margin-right:-100px; margin-top:-250px">
				<a href="images/info/mobile/iphone.png" target="_blank" class="lightbox" title="Mobile>"><img src="images/info/mobile/iphone.png" /></a>
				<div class="caption">Mobile</div>
			</div>
		</div>
	</div>
</div>

<div class="section">
	<div class="row">
		<div class="col-sm-6">
			<h2><i class="fa fa-dollar-sign"></i>It's Free!</h2>
			<p><%= application.name %> is 100% completely free to <a href="#installation">download and run</a> on your own server. </p>
		</div>
		<div class="col-sm-6">
			<div class="figure">
				<a href="#downloads">
					<img style="width:150px" src="images/welcome/free-icon.svg" />
				</a>
			</div>
		</div>
	</div>
</div>

<div class="section">
	<div class="row">
		<div class="col-sm-6">
			<h2><i class="fa fa-smile"></i>It's Easy to Use</h2>
			<p>The easy to use and familiar user interface blends the power of the cloud with the best aspects of the user interfaces that you already know and love. </p>
		</div>
		<div class="col-sm-6">
			<div class="figure">
				<img src="images/welcome/smile.svg" />
			</div>	
		</div>
	</div>
</div>

<div class="section">
	<div class="row">
		<div class="col-sm-6">
			<h2><i class="fa fa-fire"></i>It's Easy to Launch</h2>
			<p><%= application.name %> makes it <a href="#installation">quick and easy to launch</a> your own personal, customized <%= application.name %> on your own server. </p>
		</div>
		<div class="col-sm-6">
			<div class="figure">
				<a href="#downloads">
					<img height="175px" src="images/welcome/rocket-icon.svg" />
				</a>
			</div>
		</div>
	</div>
</div>

<div class="section">
	<div class="row">
		<div class="col-sm-6">
			<h2><i class="fa fa-pencil-alt"></i>It's Quick To Sign Up</h2>
			<% let identityProviders = application.session.has('config')? application.session.get('config').identity_providers : undefined; %>
			<% if (identityProviders && identityProviders.length > 0) { %>
			<p>Signing up is quick and easy.  There's a simple registration form or if you're already signed in to an identity provider (<%= identityProviders.join(', ') %>), just hit the "Sign Up With" button and you can get started in seconds! </p>
			<% } else { %>
			<p>Signing up is quick and easy.  Fill out a simple registration to get started in seconds! </p>
			<% } %>
		</div>
		<div class="col-sm-6">
			<div class="well">
				<br />
				<div class="buttons">
					<a href="#sign-up"><button class="sign-up btn btn-lg">
						<i class="fa fa-pencil-alt"></i>Sign Up!
					</button></a>
				</div>
				<br />
			</div>
		</div>
	</div>
</div>

<div class="section">
	<div class="row">
		<div class="col-sm-6">
			<h2><i class="fa fa-mobile"></i>It's Accessible Anywhere</h2>
			<p>Access your digital world from anywhere on <a href="#features/platform-independent">any internet connected device.</a> </p>
		</div>
		<div class="col-sm-6">
			<a href="#features/platform-independent">
				<div class="figure">
					<a href="images/info/mobile/iphone.png" target="_blank" class="lightbox" title="<%= application.name %> Mobile"><img src="images/info/mobile/iphone.png" /></a>
					<div class="caption"><%= application.name %> Mobile</div>
				</div>
			</a>
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
			<h2><i class="fa fa-tools"></i>It's Self-Hostable!</h2>
			<p>Are you a DIY type person?  You can <a href="#features/self-hostable">run <%= application.name %> on your own server</a>! Join the host it yourself (HIY) movement to retake control over your data! </p>
		</div>
		<div class="col-sm-6">
			<div class="figure">
				<a href="#welcome/we-can-do-it">
					<img class="vertical" src="images/welcome/we-can-do-it.jpg" />
				</a>
			</div>
		</div>
	</div>
</div>

<div class="section">
	<div class="row">
		<div class="col-sm-6">
			<h2><i class="fa fa-heart"></i>You Might Also Like</h2>
			<p>You might also like these other websites built upon the Sharedigm <a href="#platform">platform</a>. </p>
		</div>
		<div class="col-sm-6">
			<div class="icons large icon-grid items">

				<div class="item">	
					<div class="row">
						<a href="http://www.rocketkitty.org" target="_blank">
							<div class="icon">
								<img src="images/logos/rocketkitty.png" />
							</div>
						</a>
					</div>
					<div class="row">
						<div class="name">RocketKitty</div>
					</div>
				</div>

				<div class="item">	
					<div class="row">
						<a href="http://www.easybucket.org" target="_blank">
							<div class="icon">
								<img src="images/logos/easybucket.png" />
							</div>
						</a>
					</div>
					<div class="row">
						<div class="name">EasyBucket</div>
					</div>
				</div>

				<div class="item">	
					<div class="row">
						<a href="http://www.opticexplorer.com" target="_blank">
							<div class="icon">
								<img src="images/logos/opticexplorer.png" />
							</div>
						</a>
					</div>
					<div class="row">
						<div class="name">OpticExplorer</div>
					</div>
				</div>

				<div class="item">	
					<div class="row">
						<a href="http://www.dreamachines.ai" target="_blank">
							<div class="icon">
								<img src="images/logos/dreamachines.png" />
							</div>
						</a>
					</div>
					<div class="row">
						<div class="name">Dreamachines</div>
					</div>
				</div>

				<div class="item">
					<div class="row">
						<a href="http://cloudintosh.sharedigm.com" target="_blank">
							<div class="icon">
								<img src="images/logos/cloudintosh.png" />
							</div>
						</a>
					</div>
					<div class="row">
						<div class="name">Cloudintosh</div>
					</div>
				</div>

				<div class="item">	
					<div class="row">
						<a href="http://windows3000.sharedigm.com" target="_blank">
							<div class="icon">
								<img src="images/logos/windows3000.png" />
							</div>
						</a>
					</div>
					<div class="row">
						<div class="name">Windows3000</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
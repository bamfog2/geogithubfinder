$(document).ready(function(){
	$('#userSearch').on('keyup', function(e){

	let username = e.target.value;

	// Make request to github
	$.ajax({

		url: 'http://api.github.com/users/' +username,
			data:{
				client_id:'01faadec19155fac7d57',
				client_secret:'e0d76d961a0b65bccd01e833029891eb70c2767a'
			}

		}).done(function(user){

			

			$('#profile').html(`
				<div class="panel panel-default">
					  <div class="panel-heading">
					    <h3 class="panel-title">${user.name}</h3>
					  </div>
					  <div class="panel-body">
					    <div class="row">
					    	<div class="col-md-3">
					    		<img style="width: 100%" class="thumbnail" src="${user.avatar_url}">
					    		<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
					    	</div>

					    	<div class="col-md-9">
						    	<span class="label label-default">Public Repos: ${user.public_repos}</span>
								<span class="label label-primary">Public Gists: ${user.public_gists}</span>
								<span class="label label-success">Followers: ${user.followers}</span>
								<span class="label label-info">Following: ${user.following}</span>
								<br><br>

								<ul class="list-group">
									  <li class="list-group-item">Company: ${user.company}</li>
									  <li class="list-group-item">Website/blog: ${user.blog}</li>
									  
									  <li class="list-group-item">Since: ${user.created_at}</li>
								</ul>


					    	</div>

					    </div>
					  </div>
				</div>

					<h3 class="page-header">Latest Repos</h3>
					<div id="repos"></div>
				`);
		});
	});

});
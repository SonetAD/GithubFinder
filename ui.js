class Ui {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img
              target="blank"
              class="img-fluid mb-3"
              src="${user.avatar_url}"
              alt="Profile picture"
            />
            <a href="${user.html_url}" class="btn btn-block btn-primary mb-3"
              >View Profile</a
            >
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary"
              >Public Repos: ${user.public_repos}</span
            >
            <span class="badge badge-success"
              >Public Gists: ${user.public_gists}</span
            >
            <span class="badge badge-secondary"
              >Followers: ${user.followers}</span
            >
            <span class="badge badge-info">Following: ${user.following}</span>
            <br /><br /><br /><br />
            <ul class='list-group'>
                <li class='list-group-item'>Company: ${user.company}</li>
    <li class='list-group-item'>Website/Blog:     <a href="${user.blog}" target="blank">${user.blog}</a>
    </li>
                <li class='list-group-item'>Location: ${user.location}</li>
                <li class='list-group-item'>Member scince: ${user.created_at}</li>
            </ul>
          </div>
        </div>
  
      </div>
      <h3 class='page-header'>Latest Repos</h3>
      <div id='repos'></div>
      `;
  }

  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `
      <div class="card card-body">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge badge-success"
            >Stars: ${repo.stargazers_count}</span
          >
          <span class="badge badge-primary"
            >Watchers: ${repo.watchers_count}</span
          >
          <span class="badge badge-secondary">Forks: ${repo.forks_count}</span>
        </div>
      </div>
    </div>
      `;
    });

    document.querySelector('#repos').innerHTML = output;
  }
}

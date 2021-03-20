class Github {
  constructor() {
    this.clientID = 'fd0a5d319546663390eb';
    this.clientSecret = '61de9994d77a253694b36a594c68b53c3312b82b';
    this.reposCount = 5;
    this.reposSort = 'created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );

    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}

//  init github
const github = new Github();

//  init Ui class
const ui = new Ui();

//  search input

let searchUser = document.querySelector('input');

searchUser.addEventListener('keyup', (e) => {
  let searchText = e.target.value;
  if (searchText != '') {
    github.getUser(searchText).then((data) => {
      if (data.profile.message) {
        if (data.profile.message.includes('API rate limit exceeded')) {
          ui.profile.textContent = 'Server is overloaded.Please try later.';
        } else {
          ui.profile.textContent = 'User not found.';
        }
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.profile.innerHTML = '';
  }

  e.preventDefault();
});

//  search input

let searchUser = document.querySelector('input');

searchUser.addEventListener('keyup', (e) => {
  let searchText = e.target.value;
  if (searchText != '') {
    console.log(searchText);
  }
  e.preventDefault();
});

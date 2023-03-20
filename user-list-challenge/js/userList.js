/* --- HTML Element References --- */

// Add 3 Users button
const addThreeUsers = document.querySelector("#three-user-button");
console.log(addThreeUsers);

// Remove User Button
const removeUsers = document.querySelector("#remove-user-button");
console.log(removeUsers);

// Display User Button
const displayUsers = document.querySelector("#display-user-button");
console.log(displayUsers);

// Sort User Button
const sortUsers = document.querySelector("#sort-user-button");
console.log(sortUsers);
;

/* --- Arrays --- */

// User List

// Array
// let newArray = [];
// let userList = ["Radiohead", "Joy Division", "The Cure", "Nirvana"];

/* --- Functions --- */

//  Sort User Function
let userList = ["Radiohead", "Joy Division", "The Cure", "Nirvana"];
let newArray = [];
let users = userList;
// function sortUserList() {
//   for (i = 0; i < userList; i++) {
//     let sorted = users.sort();
//     sorted.append(newArray);
//   }
//   return newArray;
// }

console.log(users[0]);

/* --- Event Listeners --- */

// Add Three Users
addThreeUsers.addEventListener("click", function () {
  prompt("Please input three new users: ");
});

// Remove User
removeUsers.addEventListener("click", function () {
  prompt("Please select which user you would like to remove: ");
});

// Display all users
displayUsers.addEventListener("click", function () {
  window.alert(userList);
});

// Sort users
sortUsers.addEventListener("click", function () {
  console.log(sortUserList());
});

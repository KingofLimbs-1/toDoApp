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


/* --- Arrays --- */ 

// Empty array for sorting
newArray = [];

// User List
const userList = [
  "PixelPalooza",
  "CosmicChaos",
  "MindMeldMaster",
  "SnackAttack87",
  "NeonNinja",
  "TechTornado",
  "MysticMuffin",
  "AquaAce",
  "SkySurferX",
  "SparklingSapphire",
];

/* --- Functions --- */ 







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
});

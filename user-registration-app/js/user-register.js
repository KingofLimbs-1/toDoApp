/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register");
console.log(registerTab);

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users");
console.log(userTabs);

/* --- Nav references --- */

// Register user button
const userRegister = document.querySelector("#users-tab-button");
console.log(userRegister);

// User list button
const userView = document.querySelector("#register-tab-button");
console.log(userView);

/* --- Form field references --- */

// Form reference
const formFields = document.getElementById("register-form");
console.log(formFields);

/* --- Table list reference --- */
const tableList = document.getElementById("user-list");
console.log(tableList);

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

/* --- "Create New User" Function --- */

// Input data retrieval
const firstName = document.getElementById("firstname").value;
const lastName = document.getElementById("lastname").value;
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

// User object data storage
const users = [];

// Function
function createUser(firstName, lastName, username, email, password) {
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
  };

  users.push(newUser);
}

/* --- "Create User Element" Function --- */

// Function
function createUserElement(userElement) {
  // New DOM element creation
  const userDisplay = document.createElement("li");
  // Adding to the entry class
  userDisplay.classList.add("entry");

  // New span elements creation

  // Username
  const usernameSpan = document.createElement("span");
  usernameSpan.textContent = userElement.username;

  // First Name
  const firstNameSpan = document.createElement("span");
  firstNameSpan.textContent = userElement.firstName;

  // Last Name
  const lastNameSpan = document.createElement("span");
  lastNameSpan.textContent = userElement.lastName;

  // Email
  const emailSpan = document.createElement("span");
  emailSpan.textContent = userElement.email;

  // Password
  const passwordSpan = document.createElement("span");
  passwordSpan.textContent = userElement.password;

  // Adding newly created span elements to userDisplay element

  userDisplay.append(usernameSpan);
  userDisplay.append(firstNameSpan);
  userDisplay.append(lastNameSpan);
  userDisplay.append(emailSpan);
  userDisplay.append(passwordSpan);

  // Function return

  return userDisplay;
}

/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */

// View User List Button (Event listener/On-click interactivity)
// Added a kind of "toggle on/off" functionality to this event listener.
userView.addEventListener("click", function () {
  const viewUsers = document.querySelector("section.users");
  if (viewUsers.style.display === "none" || viewUsers.style.display === "") {
    viewUsers.style.display = "block";
  } else {
    viewUsers.style.display = "none";
  }
});

// Register User Button (Event listener/On-click interactivity)
userRegister.addEventListener("click", function () {
  const registerSection = document.querySelector("section.register");
  registerSection.style.display = "block";
});

// Submit Button (Event listener)
// Preventing form submission default behavior
formFields.addEventListener("submit", function (event) {
  event.preventDefault();
});

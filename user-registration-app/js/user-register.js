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
  const newUsers = document.createElement("li");
  // Adding to the entry class
  newUsers.classList.add("entry");

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

  // Adding newly created span elements to "newUsers" element

  newUsers.append(usernameSpan);
  newUsers.append(firstNameSpan);
  newUsers.append(lastNameSpan);
  newUsers.append(emailSpan);
  newUsers.append(passwordSpan);

  // Function return

  return newUsers;
}

/* --- "Populate User List" Function --- */

// Function
function populateUserList(users) {
  for (i = 0; i < users.length; i++) {
    // User List HTML retrieval
    const userList = document.getElementById("user-list");
    // "user" array element initialization
    const user = users[i];
    // "createUserElement" function call
    const li = createUserElement(user);
    // Appending "li" to "userList"
    userList.append(li);
  }
}

/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */

// View User List Button (Event listener/On-click interactivity)
// Added a "toggle on/off" functionality to this event listener.
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

// Submit button Test

formFields.addEventListener("submit", function (event) {
  // Prevent form default behavior
  event.preventDefault();

  // Grabbing input elements
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // "createUser" function call. Takes input elements as parameters.
  createUser(firstName, lastName, username, email, password);
  // "populateUserList" function call. Adding created user to user list.
  populateUserList(users);

  //   Clear input fields
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

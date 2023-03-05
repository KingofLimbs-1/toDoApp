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

// References the "View User List" button
const userView = document.getElementById("register-tab-button");
console.log(userView);

// References the "Register" button
const userRegistration = document.getElementById("users-tab-button");
console.log(userRegistration);

/* --- Form field references --- */

// References form input fields
// Subject to change though. Not sure if I'm referencing the right part.
// Instead of the input tag, maybe I should be referencing the form itself. 
// Only referenced it like this cause I wanted referencing to be specific to input fields, not <h1> tag as well for example.
// Will come back to this. 
const formFields = document.getElementsByTagName("input");
console.log(formFields);

/* --- Table list reference --- */

const tableList = document.getElementById("user-list");
console.log(tableList);

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

// code here...

/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */

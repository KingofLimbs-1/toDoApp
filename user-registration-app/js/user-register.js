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

/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */

// View User List Button (On-click interactivity)
// Added a kind of "toggle on/off" functionality to this event listener.

userView.addEventListener("click", function() {
    const viewUsers = document.querySelector("section.users");
    if (viewUsers.style.display === "none" || viewUsers.style.display === "") {
        viewUsers.style.display = "block";
    } else {
        viewUsers.style.display = "none";
    }
});

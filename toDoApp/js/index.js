/* --- Element References --- */

// Body
const allElements = document.getElementById("all-elements");
// Task Input Field
const taskInput = document.getElementById("taskInput");
// Add Task Button
const addTaskBtn = document.getElementById("add-new-task-button");
// Task List
const taskList = document.getElementById("taskList");
// Toggle Button
const toggle = document.querySelector(".toggle");

/* ---/ Element References /--- */

/* --- Functionality --- */
/* ---/ Functionality /--- */

/* --- Event Listeners --- */
// Light Mode Switch Event
toggle.addEventListener("click", function () {
  allElements.classList.toggle("light-mode");
});
/* ---/ Event Listeners /--- */

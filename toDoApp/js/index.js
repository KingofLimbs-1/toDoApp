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
  // Body element "light-mode" switch
  allElements.classList.toggle("light-mode");
  // CSS class state toggle references
  toggle.classList.toggle("light");
  toggle.classList.toggle("dark");
  // Toggle switch "image" switch
  const toggleImg = document.querySelector("img");
  if (toggle.classList.contains("light")) {
    toggleImg.src = "/images/moon-icon.png";
  } else {
    toggleImg.src = "/images/sun-icon.png";
  }
});
/* ---/ Event Listeners /--- */

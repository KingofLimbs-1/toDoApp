/* --- Element References --- */

// Body
const allElements = document.getElementById("allElements");
// Task Input Field
const taskInput = document.getElementById("taskInput");
// Add Task Button
const addTaskBtn = document.getElementById("add-new-task-button");
// Incompleted Task List
const taskList = document.getElementById("taskList");
// Toggle Button
const toggle = document.querySelector(".toggle");
// Completed Task List
const completedTasks = document.getElementById("completedTasks");
// Task Data Storage
const tasks = [];

/* ---/ Element References /--- */

/* --- Functionality --- */

// "Add task to task list" function
function addTask() {
  // "taskInput" value variable assignment
  const taskText = taskInput.value;
  if (taskText !== "") {
    // Adding task input data to task array
    tasks.push({
      text: taskText,
    });
    // Incomplete task "li" creation
    const li = document.createElement("li");
    // Checkbox element creation
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // "li" content variable assignment
    li.textContent = taskText;
    // Checkbox append to task list "li"
    li.appendChild(checkbox);
    // "li" append to taskList
    taskList.appendChild(li);
    // "taskInput" field clear
    taskInput.value = "";
  }
}
// "Add completed task to completed tasks list" function
function completeTask(event) {
  // Task list checkbox reference
  const checkbox = event.target;
  // List item (checkbox parent) reference
  const li = checkbox.parentNode;
  // Completed task "li" creation
  const completedTask = document.createElement("li");
  // Task text node creation
  const completedText = document.createTextNode(li.textContent);
  // Text node append to completed task "li"
  completedTask.appendChild(completedText);
  // Completed task append to "completedTasks" list
  completedTasks.appendChild(completedTask);
  // "li" + task text removal from "taskList"
  taskList.removeChild(li);
}
/* 
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

// Add Task Button Event
addTaskBtn.addEventListener("click", function (event) {
  // Prevent form default behavior
  event.preventDefault();
  addTask();
});

// Checkbox Event
taskList.addEventListener("change", completeTask);
/* ---/ Event Listeners /--- */

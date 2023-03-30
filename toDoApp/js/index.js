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
const completedTaskList = document.getElementById("completedTaskList");
// Task Data Storage
let tasks = [];

/* ---/ Element References /--- */

/* --- Functionality --- */

// "Local storage save" function
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// "Task array load from storage" function
function loadTasks() {
  // "tasks" array retrieval
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks !== null) {
    // "savedTasks" string parse +  new variable assignment
    tasks = JSON.parse(savedTasks);
    // "tasks" array task object loop
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      const li = document.createElement("li");
      li.textContent = task.text;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      li.appendChild(checkbox);
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.textContent = "Delete";
      li.appendChild(deleteBtn);
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "editBtn";
      li.appendChild(editBtn);
      taskList.appendChild(li);
    }
  }
}

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
    // "li" content variable assignment
    li.textContent = taskText;

    // Checkbox element creation
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    // Delete button creation
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);

    // Edit button creation
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";
    li.appendChild(editBtn);

    // "li" append to taskList
    taskList.appendChild(li);
    // "taskInput" field clear
    taskInput.value = "";
    saveTasks();
  }
}

// "Add completed task to completed tasks list" function
function completeTask(event) {
  // "completeTasks" section reference
  const completeTasks = document.querySelector("section.completeTasks");
  // Display logic to hide aforementioned section when page is first displayed
  if (
    completeTasks.style.display === "none" ||
    completeTasks.style.display === ""
  ) {
    completeTasks.style.display = "block";
  }

  // Task list checkbox reference
  const checkbox = event.target;
  // List item (checkbox parent) reference
  const li = checkbox.parentNode;
  // Task content reference
  const taskContent = li.firstChild.textContent;
  // Completed task "li" creation
  const completedTask = document.createElement("li");
  // Task text node creation
  const completedText = document.createTextNode(taskContent);
  // Text node append to completed task "li"
  completedTask.appendChild(completedText);
  // Completed task append to "completedTaskList" list
  completedTaskList.appendChild(completedTask);
  // "li" + task text removal from "taskList"
  taskList.removeChild(li);

  saveTasks();
}
/* ---/ Functionality /--- */

/* --- Event Listeners --- */

// Window Object Event
window.addEventListener("load", function () {
  loadTasks();
});

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
  // "incompleteTasks" section reference
  const incompleteTasks = document.querySelector("section.incompleteTasks");
  // Display logic to hide aforementioned section when page is first displayed
  if (
    incompleteTasks.style.display === "none" ||
    incompleteTasks.style.display === ""
  ) {
    incompleteTasks.style.display = "block";
  }
  // Prevent form default behavior
  event.preventDefault();
  addTask();
});

// Checkbox Event
taskList.addEventListener("change", completeTask);

// Edit Button Event
taskList.addEventListener("click", function (event) {
  const target = event.target;

  // Text edit logic
  if (target.textContent === "Edit") {
    // taskList "li" element grab
    const li = target.parentNode;
    // Makes "li" content editable
    li.contentEditable = true;
    // "editBtn" text change
    target.textContent = "Save";

    // Save edited text logic
  } else if (target.textContent === "Save") {
    // Another taskList "li" element grab
    const li = target.parentNode;
    // Makes "li" content un-editable
    li.contentEditable = false;
    // Switches back "editBtn" text
    target.textContent = "Edit";
    // "taskList" array conversion + "li" element grab
    const taskIndex = Array.from(taskList.children).indexOf(li);
    // Task text update with new user input
    tasks[taskIndex].text = li.textContent.trim();
    saveTasks();
  }
});

// Delete button Event
taskList.addEventListener("click", function (event) {
  const target = event.target;

  // taskList item removal logic
  if (target.textContent === "Delete") {
    // taskList "li" grab
    const li = target.parentNode;
    // taskList array conversion + "li" element grab
    const taskIndex = Array.from(taskList.children).indexOf(li);
    // "tasks" array task removal
    tasks.splice(taskIndex, 1);
    // Task element removal
    taskList.removeChild(li);
    saveTasks();
  }
});
/* ---/ Event Listeners /--- */

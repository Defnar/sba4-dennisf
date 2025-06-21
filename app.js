const taskNameInput = document.getElementById("new-task-input");
const categoryInput = document.getElementById("category-input");
const dateTimeInput = document.getElementById("date-time-input");
const addTaskButton = document.getElementById("add-task");
const filterByDropdown = document.getElementById("type-dropdown");
const filterSelectionDropdown = document.getElementById("filter");
const taskGrid = document.getElementById("task-grid");

let fullTaskList = [];
let displayedTaskList = [];
let categoryList = [];
let filterByStatusList = ["Active", "Complete", "Overdue"];

function Task(taskName, categoryName, timeDeadline, status = "Active") {
  this.name = taskName;
  this.category = categoryName;
  this.deadline = timeDeadline;
  this.status = status;
}

function optionBuilder(optionName) {
  let option = document.createElement("option");
  option.value = optionName;
  option.textContent = optionName;
  filterSelectionDropdown.appendChild(option);
}

function categoryBuilder() {
  categoryList = [];
  categoryList.push("Any");
  for (let task of fullTaskList) {
    if (!categoryList.includes(task.category)) {
      categoryList.push(task.category);
    }
  }
}

filterByDropdown.addEventListener("change", function () {
  if (filterByDropdown.value == "category") {
    filterSelectionDropdown.innerHTML = "";
    categoryBuilder();
    for (let cat of categoryList) {
      optionBuilder(cat);
    }
  } else {
    for (let filterStatus of filterByStatusList) {
        optionBuilder(filterStatus)
    }
  }
});

function timeCheck(deadline) {
  let deadlineTime = new Date(deadline);
  let currentTime = new Date();
  if (deadlineTime <= currentTime) {
    return "Overdue";
  } else return "Active";
}

addTaskButton.addEventListener("click", function () {
  let newTask = new Task(
    taskNameInput.value,
    categoryInput.value,
    dateTimeInput.value
  );
  fullTaskList.push(newTask);
});

function updateTaskView() {}

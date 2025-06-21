//working on commenting more, there's a lot here to keep track of


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



//task builder for each task
function Task(taskName, categoryName, timeDeadline, status = "Active") {
  this.name = taskName;
  this.category = categoryName;
  this.deadline = timeDeadline;
  this.status = status;
}


//builds options for the filter selection box
function optionBuilder(optionName) {
  let option = document.createElement("option");
  option.value = optionName;
  option.textContent = optionName;
  filterSelectionDropdown.appendChild(option);
}



//builds category list to use in making options for the dropdown menu
function categoryBuilder() {
  categoryList = [];
  categoryList.push("Any");
  for (let task of fullTaskList) {
    if (!categoryList.includes(task.category)) {
      categoryList.push(task.category);
    }
  }
}



//event listener to listen for first filter to change
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

//takes and compares deadline to current time
function timeCheck(deadline) {
  let deadlineTime = new Date(deadline);
  let currentTime = new Date();
  if (deadlineTime <= currentTime) {
    return "Overdue";
  } else return "Active";
}


//event listener that creates new tasks and adds them to the list
addTaskButton.addEventListener("click", function () {
  let newTask = new Task(
    taskNameInput.value,
    categoryInput.value,
    dateTimeInput.value
  );
  fullTaskList.push(newTask);
});


//testing function, bring the full task list to the current task list
function testCase() {
    displayedTaskList = [...fullTaskList]
}



//create the cards that hold the task information
function cardBuilder(task) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.innerHTML = `
    <p class="card-category">${task.category}</p>
    <h3 class="card-title">${task.name}</h3>
    <p class="deadline">${new Date(task.deadline)}
    
    `

}





//updates the task view with the cards
function updateTaskView() {
    taskGrid.innerHTML = {};
}

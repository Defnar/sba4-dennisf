//working on commenting more, there's a lot here to keep track of
const taskNameInput = document.getElementById("new-task-input");
const categoryInput = document.getElementById("category-input");
const dateTimeInput = document.getElementById("date-time-input");
const addTaskButton = document.getElementById("add-task");
const statusFilterDropdown = document.getElementById("status-filter");
const categoryFilterDropdown = document.getElementById("category-filter");
const taskGrid = document.getElementById("task-grid");
const updateButton = document.getElementById("update")

//full task list is pulled from local storage, or declared if nonexistant later
let fullTaskList = JSON.parse(localStorage.getItem("fullTaskList"));

//category list creates a dropdown menu based on user-defined categories.  displayed task lists uses filters to determine what should be displayed
let displayedTaskList = [];
let categoryList = [];

if (!fullTaskList) {
  fullTaskList = [];
} else {
  updateTaskView();
  categoryBuilder();
}

//task builder for each task
function Task(taskName, categoryName, timeDeadline, status = "Active") {
  this.name = taskName;
  this.category = categoryName;
  this.deadline = timeDeadline;
  this.status = status;
}

function saveData() {
  let taskJSON = JSON.stringify(fullTaskList);
  localStorage.setItem("fullTaskList", taskJSON);
}

//builds category list and uses it to create dropdown menu, only call when adding or deleting tasks
function categoryBuilder() {
  categoryList = [];
  categoryList.push("Any");
  categoryFilterDropdown.innerHTML = "";
  for (let task of fullTaskList) {
    if (!categoryList.includes(task.category)) {
      categoryList.push(task.category);
    }
  }
  for (let category of categoryList) {
    let option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilterDropdown.appendChild(option);
  }
}

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

  if (!taskNameInput.value || !categoryInput.value || !dateTimeInput.value)
  {
    return;
  }

  let newTask = new Task(
    taskNameInput.value,
    categoryInput.value,
    dateTimeInput.value
  );


  fullTaskList.push(newTask);
  saveData();
  categoryBuilder();
  updateTaskView();
});

updateButton.addEventListener("click", function() {
  updateTaskView();
})

//create the cards that hold the task information
function cardBuilder(task) {
  let card = document.createElement("div");
  card.classList.add("card");

  //checks status to see if card should be updated
  if (task.status - "Active") {
    task.status = timeCheck(task.deadline);
  }

  const statusArr = ["Active", "Complete", "Overdue"];

  let cardOptions = document.createElement("select");

  //builds dropdown menu and selects corret option for status
  for (let cardStatus of statusArr) {
    let option = document.createElement("option");

    if (task.status == cardStatus) {
      option.selected = true;
    }
    option.value = cardStatus;
    option.textContent = cardStatus;
    cardOptions.appendChild(option);
  }

  //build card html
  card.innerHTML = `
    <p class="card-category">${task.category}</p>
    <h3 class="card-title">${task.name}</h3>
    <p class="deadline">${new Date(task.deadline).toLocaleString()}</p>
    `;

  card.appendChild(cardOptions);

  //I would prefer to add this elsewhere, but I'm not sure how to attach this to the dorpdown options in another way
  cardOptions.addEventListener("change", function () {
    task.status = cardOptions.value;
    saveData();
  });

  //returns card for update task view to handle
  return card;
}

//filters the lists and displays what user wants to see.  I learned about arrows here a little, still fuzzy on the subject
function filterList() {
  displayedTaskList = [];
  let statusFilter = statusFilterDropdown.value;
  let categoryFilter = categoryFilterDropdown.value;
  let intermediaryArray = fullTaskList.filter(task => task.status == statusFilter || statusFilter == "Any")
  displayedTaskList = intermediaryArray.filter(task => task.category == categoryFilter || categoryFilter == "Any") 

}

//updates the task view with the cards
function updateTaskView() {
  taskGrid.innerHTML = "";
  filterList();
 
  for (let task of displayedTaskList) {
    taskGrid.appendChild(cardBuilder(task));
  }
}

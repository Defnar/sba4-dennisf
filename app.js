const taskNameInput = document.getElementById("new-task-input");
const categoryInput = document.getElementById("category-input");
const dateTimeInput = document.getElementById("date-time-input");
const addTaskButton = document.getElementById("add-task");
const filterByDropdown = document.getElementById("type-dropdown");
const filterSelectionDropdown = document.getElementById("filter");
const taskGrid = document.getElementById("task-grid");


let fullTaskList = [];

function Task(taskName, categoryName, timeDeadline, status="Active") {
    this.name = taskName;
    this.category = categoryName;
    this.deadline = timeDeadline;
    this.status = status;
}


function timeCheck(deadline) {
    let deadlineTime = new Date(deadline);
    let currentTime = new Date();
    if (deadlineTime <= currentTime) {
        return "Overdue";
    }
    else return "Active";
}


addTaskButton.addEventListener("click", function() {
    let newTask = new Task(taskNameInput.value, categoryInput.value, dateTimeInput.value);
    fullTaskList.push(newTask);
})


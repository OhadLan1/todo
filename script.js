const taskManager1 = new TaskManager();
const submitBtn = document.getElementById("submit");
const descriptionInput = document.getElementById("description");
const listTasks = document.getElementById("tasks-list");
const dateTargetInput = document.getElementById("date-target");
const numTasksCompleted = document.getElementById("num-tasks-completed");

const completed = document.getElementsByClassName("completed");
const deleteBtn = document.getElementsByClassName("delete");
const editInput = document.getElementsByClassName("edit");

submitBtn.addEventListener("click", addTask);

const todayDate = new Date();

function addCompleteEvent() {
  if (completed.length > 0) {
    let arr = Array.from(completed);
    arr.forEach((element) => {
      element.addEventListener("click", changeStat);
    });
  }
}
function addDeleteEvent() {
  if (deleteBtn.length > 0) {
    let arr2 = Array.from(deleteBtn);
    arr2.forEach((element) => {
      element.addEventListener("click", deleteTask);
    });
  }
}
function addEditEvent() {
  if (editInput.length > 0) {
    let arr3 = Array.from(editInput);
    arr3.forEach((element) => {
      element.addEventListener("click", editDescription);
    });
  }
}
function addTask() {
  if (
    descriptionInput.value.length > 2 &&
    dateTargetInput.valueAsNumber >= todayDate.getTime()
  ) {
    taskManager1.add(descriptionInput.value, dateTargetInput);
    showTaskManager();
  } else alert("please enter logical task");

  descriptionInput.value = "";
  dateTargetInput.value = "";
}
function deleteTask(event) {
  let index = event.path[1].id;
  taskManager1.delete(index);
  showTaskManager();
}
function changeStat(event) {
  let index = Number(event.path[1].id);
  let task = taskManager1.tasks[index];
  task.changeStatus();
  showTaskManager();
}
function showTaskManager() {
  let index = 0;
  let counter = 0;
  listTasks.innerHTML = "";
  taskManager1.tasks.map((element) => {
    if (element.status === "completed") {
      listTasks.innerHTML += `<li class="mt-2" id="${index}" readonly><button class="completed green me-1">🏁</button><button class="delete bi bi-trash me-1"></button><button class="edit bi bi-pencil-square"></button> ${element.description} </li>`;
      counter++;
    } else {
      listTasks.innerHTML += `<li class="mt-2" id="${index}" readonly><button class="completed me-1">🏁</button><button class="delete bi bi-trash me-1"></button><button class="edit bi bi-pencil-square"></button> ${element.description} </li>`;
    }
    index++;
  });
  numTasksCompleted.innerText = `${counter} / ${taskManager1.tasks.length} `;
  addCompleteEvent();
  addDeleteEvent();
  addEditEvent();
}
function editDescription(event) {
  let index = Number(event.path[1].id);
  let editedDescription = window.prompt("edit your task description", "");
  if (editedDescription !== null && editDescription.length > 2) {
    taskManager1.tasks[index].description = editedDescription;
  } else if (editedDescription === null) {
  } else alert("please enter logical task");
  showTaskManager();
}

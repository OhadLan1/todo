class TaskManager {
  tasks = [];
  id = 0;

  add(description, dateTarget) {
    this.tasks.push(new Task(description, this.id, dateTarget));1
    this.id++;
  }
  delete(index) {
    this.tasks.splice(index, 1);
  }
}

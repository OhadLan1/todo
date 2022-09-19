class TaskManager {
  constructor() {
    this.tasks = [];
    this.id = 0;
  }

  add(description, dateTarget) {
    this.tasks.push(new Task(description, this.id, dateTarget));
    this.id++;
  }
  delete(index) {
    this.tasks.splice(index, 1);
  }
}

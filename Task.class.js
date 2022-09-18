class Task {
  status = "uncompleted";
  date = new Date();

  constructor(description, id, dateTarget) {
    this.description = description;
    this.id = id;
    this.dateTarget = dateTarget;
  }
  changeStatus() {
    if (this.status === "uncompleted") {
      this.status = "completed";
    } else this.status = "uncompleted";
  }
}

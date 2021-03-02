export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.addTask = (newTask) => {
      this.tasks.push(newTask);
    };
  }
}

module.exports = Project;
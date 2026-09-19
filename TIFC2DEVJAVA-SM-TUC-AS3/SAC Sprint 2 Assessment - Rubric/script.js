class Task {
  constructor(id, title, description, assignee, dueDate, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.status = status;
  }
}

class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks;
    this.nextId = tasks.reduce((highestId, task) => Math.max(highestId, task.id), 0) + 1;
  }

  addTask(taskDetails) {
    const task = new Task(
      this.nextId,
      taskDetails.title,
      taskDetails.description,
      taskDetails.assignee,
      taskDetails.dueDate,
      taskDetails.status
    );

    this.tasks.push(task);
    this.nextId += 1;
    return task;
  }

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      return false;
    }

    this.tasks.splice(taskIndex, 1);
    return true;
  }
}

const startingTasks = [
  new Task(1, "Design UI", "Create wireframes for the dashboard.", "Alice", "2026-09-10", "TODO"),
  new Task(2, "API setup", "Configure the task service endpoints.", "Bob", "2026-09-12", "IN PROGRESS"),
  new Task(3, "Testing", "Write unit tests for task operations.", "Charlie", "2026-09-15", "REVIEW")
];

const taskManager = new TaskManager(startingTasks);
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function createTaskCard(task) {
  const card = document.createElement("article");
  card.className = "task-card";
  card.dataset.taskId = task.id;

  const heading = document.createElement("div");
  heading.className = "task-card-heading";

  const title = document.createElement("h3");
  title.textContent = task.title;
  heading.append(title);

  const id = document.createElement("span");
  id.className = "task-id";
  id.textContent = `#${task.id}`;
  heading.append(id);

  const description = document.createElement("p");
  description.textContent = task.description;

  const details = document.createElement("dl");
  details.innerHTML = `
    <div><dt>Assigned to</dt><dd></dd></div>
    <div><dt>Due date</dt><dd></dd></div>
  `;
  details.children[0].querySelector("dd").textContent = task.assignee;
  details.children[1].querySelector("dd").textContent = task.dueDate;

  const footer = document.createElement("div");
  footer.className = "task-card-footer";

  const status = document.createElement("span");
  status.className = "status-badge";
  status.textContent = task.status;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.dataset.taskId = task.id;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskManager.deleteTask(Number(deleteButton.dataset.taskId));
    renderTasks();
  });

  footer.append(status, deleteButton);
  card.append(heading, description, details, footer);
  return card;
}

function renderTasks() {
  taskList.replaceChildren();
  taskManager.tasks.forEach((task) => taskList.append(createTaskCard(task)));
  taskCount.textContent = `${taskManager.tasks.length} ${taskManager.tasks.length === 1 ? "task" : "tasks"}`;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(taskForm);

  taskManager.addTask({
    title: formData.get("title").trim(),
    description: formData.get("description").trim(),
    assignee: formData.get("assignee").trim(),
    dueDate: formData.get("dueDate"),
    status: formData.get("status")
  });

  taskForm.reset();
  renderTasks();
});

renderTasks();

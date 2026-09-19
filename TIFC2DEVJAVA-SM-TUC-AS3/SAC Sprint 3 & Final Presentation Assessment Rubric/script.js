const STORAGE_KEY = "sprint3Tasks";

class Task {
  constructor(id, title, description, assignee, dueDate, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.status = status;
  }

  static fromJSON(taskData) {
    return new Task(taskData.id, taskData.title, taskData.description, taskData.assignee, taskData.dueDate, taskData.status);
  }
}

class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks.map((task) => task instanceof Task ? task : Task.fromJSON(task));
    this.nextId = this.tasks.reduce((highestId, task) => Math.max(highestId, task.id), 0) + 1;
  }

  addTask(taskDetails) {
    const task = new Task(this.nextId, taskDetails.title, taskDetails.description, taskDetails.assignee, taskDetails.dueDate, taskDetails.status);
    this.tasks.push(task);
    this.nextId += 1;
    this.save();
    return task;
  }

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) return false;
    this.tasks.splice(taskIndex, 1);
    this.save();
    return true;
  }

  updateTask(taskId, taskDetails) {
    const task = this.tasks.find((item) => item.id === taskId);
    if (!task) return null;
    Object.assign(task, taskDetails);
    this.save();
    return task;
  }

  assignTo(taskId, assignee) {
    return this.updateTask(taskId, { assignee });
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
  }
}

function loadTasks() {
  try {
    const storedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(storedTasks) ? storedTasks.map(Task.fromJSON) : [];
  } catch (error) {
    return [];
  }
}

function createTaskCard(task, manager, onChange) {
  const card = document.createElement("article");
  card.className = "task-card";
  card.dataset.taskId = task.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Edit ${task.title}`);

  const heading = document.createElement("div");
  heading.className = "task-card-heading";
  const title = document.createElement("h3");
  title.textContent = task.title;
  const id = document.createElement("span");
  id.className = "task-id";
  id.textContent = `#${task.id}`;
  heading.append(title, id);

  const description = document.createElement("p");
  description.textContent = task.description;

  const details = document.createElement("dl");
  details.innerHTML = "<div><dt>Assigned to</dt><dd></dd></div><div><dt>Due date</dt><dd></dd></div>";
  details.children[0].querySelector("dd").textContent = task.assignee;
  details.children[1].querySelector("dd").textContent = task.dueDate;

  const footer = document.createElement("div");
  footer.className = "task-card-footer";
  const status = document.createElement("span");
  status.className = "status-badge";
  status.textContent = task.status;

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const editButton = document.createElement("button");
  editButton.className = "edit-button";
  editButton.type = "button";
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  editButton.addEventListener("click", (event) => {
    event.stopPropagation();
    onChange("edit", task.id);
  });
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    manager.deleteTask(task.id);
    onChange("delete", task.id);
  });
  actions.append(editButton, deleteButton);
  footer.append(status, actions);
  card.append(heading, description, details, footer);

  const editCard = () => onChange("edit", task.id);
  card.addEventListener("click", editCard);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      editCard();
    }
  });
  return card;
}

function setupApplication() {
  const taskForm = document.getElementById("taskForm");
  if (!taskForm) return;

  const manager = new TaskManager(loadTasks());
  const taskList = document.getElementById("taskList");
  const taskCount = document.getElementById("taskCount");
  const formHeading = document.getElementById("formHeading");
  const formMode = document.getElementById("formMode");
  const saveButton = document.getElementById("saveButton");
  const cancelButton = document.getElementById("cancelButton");
  const formMessage = document.getElementById("formMessage");
  let editingTaskId = null;

  function clearForm() {
    taskForm.reset();
    editingTaskId = null;
    formHeading.textContent = "Add a task";
    formMode.textContent = "SAVE";
    saveButton.textContent = "Save task";
    cancelButton.hidden = true;
    formMessage.textContent = "";
  }

  function populateForm(taskId) {
    const task = manager.tasks.find((item) => item.id === taskId);
    if (!task) return;
    editingTaskId = taskId;
    taskForm.elements.title.value = task.title;
    taskForm.elements.description.value = task.description;
    taskForm.elements.assignee.value = task.assignee;
    taskForm.elements.dueDate.value = task.dueDate;
    taskForm.elements.status.value = task.status;
    formHeading.textContent = "Update task";
    formMode.textContent = "UPDATE";
    saveButton.textContent = "Update task";
    cancelButton.hidden = false;
    formMessage.textContent = "Editing selected task.";
    taskForm.elements.title.focus();
  }

  function renderTasks() {
    taskList.replaceChildren();
    manager.tasks.forEach((task) => taskList.append(createTaskCard(task, manager, (action, taskId) => {
      if (action === "edit") populateForm(taskId);
      if (action === "delete") renderTasks();
    })));
    taskCount.textContent = `${manager.tasks.length} ${manager.tasks.length === 1 ? "task" : "tasks"}`;
  }

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(taskForm);
    const taskDetails = {
      title: formData.get("title").trim(),
      description: formData.get("description").trim(),
      assignee: formData.get("assignee").trim(),
      dueDate: formData.get("dueDate"),
      status: formData.get("status")
    };
    const missingField = Object.entries(taskDetails).find(([, value]) => !value);
    if (missingField) {
      formMessage.textContent = `Please enter a value for ${missingField[0]}.`;
      taskForm.elements[missingField[0]].focus();
      return;
    }

    if (editingTaskId === null) {
      manager.addTask(taskDetails);
    } else {
      manager.updateTask(editingTaskId, taskDetails);
    }
    clearForm();
    renderTasks();
  });

  cancelButton.addEventListener("click", clearForm);
  renderTasks();
  window.taskManager = manager;
}

window.Task = Task;
window.TaskManager = TaskManager;
window.createTaskCard = createTaskCard;
window.loadTasks = loadTasks;
setupApplication();

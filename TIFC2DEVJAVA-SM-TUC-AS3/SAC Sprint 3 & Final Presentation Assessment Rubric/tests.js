const testCases = [
  {
    name: "TaskManager adds a task with a unique ID",
    run() {
      const manager = new TaskManager();
      const task = manager.addTask({ title: "New task", description: "Details", assignee: "Alex", dueDate: "2026-09-20", status: "TODO" });
      assert(task.id === 1 && manager.tasks.length === 1, "Task was added with ID 1");
    }
  },
  {
    name: "TaskManager deletes a task by ID",
    run() {
      const manager = new TaskManager([new Task(4, "Remove me", "Details", "Alex", "2026-09-20", "TODO")]);
      assert(manager.deleteTask(4) && manager.tasks.length === 0, "Task was deleted from the array");
    }
  },
  {
    name: "TaskManager updates a task",
    run() {
      const manager = new TaskManager([new Task(2, "Old title", "Old details", "Alex", "2026-09-20", "TODO")]);
      const updated = manager.updateTask(2, { title: "New title", description: "New details", assignee: "Sam", dueDate: "2026-09-21", status: "DONE" });
      assert(updated.title === "New title" && manager.tasks[0].status === "DONE", "Task object contains updated data");
    }
  },
  {
    name: "TaskManager assigns a task",
    run() {
      const manager = new TaskManager([new Task(3, "Assign me", "Details", "Alex", "2026-09-20", "TODO")]);
      manager.assignTo(3, "Jordan");
      assert(manager.tasks[0].assignee === "Jordan", "Assignee was updated");
    }
  },
  {
    name: "UI renders an added task in the list",
    run() {
      const manager = new TaskManager();
      const list = document.createElement("div");
      list.append(createTaskCard(manager.addTask({ title: "UI task", description: "Details", assignee: "Alex", dueDate: "2026-09-20", status: "TODO" }), manager, () => {}));
      assert(list.querySelector(".task-card h3").textContent === "UI task", "Added task is rendered in HTML");
    }
  },
  {
    name: "UI removes a task from the list",
    run() {
      const manager = new TaskManager([new Task(1, "Delete from UI", "Details", "Alex", "2026-09-20", "TODO")]);
      const list = document.createElement("div");
      const card = createTaskCard(manager.tasks[0], manager, () => card.remove());
      list.append(card);
      card.querySelector(".delete-button").click();
      assert(list.querySelectorAll(".task-card").length === 0 && manager.tasks.length === 0, "Deleted task is removed from HTML and model");
    }
  }
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function runTests() {
  const results = document.getElementById("testResults");
  const summary = document.getElementById("testSummary");
  let passed = 0;

  testCases.forEach((testCase) => {
    const result = document.createElement("li");
    try {
      testCase.run();
      result.className = "test-pass";
      result.textContent = `PASS: ${testCase.name}`;
      passed += 1;
    } catch (error) {
      result.className = "test-fail";
      result.textContent = `FAIL: ${testCase.name} (${error.message})`;
    }
    results.append(result);
  });

  summary.textContent = `${passed}/${testCases.length} tests passed`;
  summary.classList.toggle("all-passed", passed === testCases.length);
}

runTests();

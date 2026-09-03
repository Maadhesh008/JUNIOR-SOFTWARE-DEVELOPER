document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect values
  const name = document.getElementById('taskName').value.trim();
  const desc = document.getElementById('taskDesc').value.trim();
  const assigned = document.getElementById('assignedTo').value.trim();
  const due = document.getElementById('dueDate').value;
  const status = document.getElementById('status').value;

  // Validation
  if (!name || !desc || !assigned || !due || !status) {
    alert("All fields are required. Please fill them correctly.");
    return;
  }

  // Create card
  const card = document.createElement('div');
  card.className = 'list-group-item';

  card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${desc}</p>
        <p><strong>Assigned To:</strong> ${assigned}</p>
        <p><strong>Due Date:</strong> ${due}</p>
        <span class="badge bg-info">${status}</span>
      </div>
    </div>
  `;

  document.getElementById('taskList').appendChild(card);

  // Reset form
  this.reset();
});

// Preload 5 sample tasks
const sampleTasks = [
  {name:"Design UI",desc:"Create wireframes",assigned:"Alice",due:"2026-09-10",status:"TODO"},
  {name:"API Setup",desc:"Configure endpoints",assigned:"Bob",due:"2026-09-12",status:"IN PROGRESS"},
  {name:"Testing",desc:"Unit tests",assigned:"Charlie",due:"2026-09-15",status:"REVIEW"},
  {name:"Deployment",desc:"Push to server",assigned:"Dana",due:"2026-09-18",status:"DONE"},
  {name:"Docs",desc:"Write documentation",assigned:"Eve",due:"2026-09-20",status:"TODO"}
];

sampleTasks.forEach(t => {
  const card = document.createElement('div');
  card.className = 'list-group-item';
  card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${t.name}</h5>
        <p class="card-text">${t.desc}</p>
        <p><strong>Assigned To:</strong> ${t.assigned}</p>
        <p><strong>Due Date:</strong> ${t.due}</p>
        <span class="badge bg-info">${t.status}</span>
      </div>
    </div>
  `;
  document.getElementById('taskList').appendChild(card);
});
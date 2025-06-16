const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const taskDatetime = document.getElementById('task-datetime');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  const dateTime = taskDatetime.value;

  if (!taskText || !dateTime) return;

  const li = document.createElement('li');
  li.className = 'task-item';

  const taskDetails = document.createElement('div');
  taskDetails.className = 'task-details';
  taskDetails.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(dateTime).toLocaleString()}</small>`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.onclick = () => {
    taskDetails.classList.toggle('task-completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', taskText);
    if (newText) {
      taskDetails.innerHTML = `<strong>${newText}</strong><br><small>${new Date(dateTime).toLocaleString()}</small>`;
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskDetails);
  li.appendChild(actions);
  taskList.appendChild(li);

  form.reset();
});

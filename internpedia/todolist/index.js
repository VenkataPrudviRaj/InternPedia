let pendingTasks = [];
let completedTasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        pendingTasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
}

function completeTask(index) {
    const task = pendingTasks.splice(index, 1);
    completedTasks.push(task);
    renderTasks();
}

function deleteTask(index, list) {
    if (list === 'pending') {
        pendingTasks.splice(index, 1);
    } else {
        completedTasks.splice(index, 1);
    }
    renderTasks();
}

function renderTasks() {
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    pendingTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            ${task}
            <button onclick="completeTask(${index})">Complete</button>
            <button onclick="deleteTask(${index}, 'pending')">Delete</button>
        `;
        pendingTasksList.appendChild(li);
    });

    completedTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item completed';
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index}, 'completed')">Delete</button>
        `;
        completedTasksList.appendChild(li);
    });
}

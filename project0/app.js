document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const taskForm = document.getElementById('taskForm');

    // Sample tasks
    const tasks = [
        { id: 1, text: 'Learn HTML', completed: false },
        { id: 2, text: 'Learn CSS', completed: true },
        { id: 3, text: 'Learn JavaScript', completed: false }
    ];

    // Display tasks
    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} />
                <span>${task.text}</span>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Add new task
    taskForm.innerHTML = `
        <input type="text" id="newTask" placeholder="New task..." />
        <button onclick="addTask()">Add Task</button>
    `;

    // Function to add a new task
    window.addTask = function () {
        const newTaskInput = document.getElementById('newTask');
        const newTaskText = newTaskInput.value.trim();

        if (newTaskText !== '') {
            const newTask = {
                id: tasks.length + 1,
                text: newTaskText,
                completed: false
            };

            tasks.push(newTask);
            displayTasks();
            newTaskInput.value = '';
        }
    };

    // Function to delete a task
    window.deleteTask = function (taskId) {
        const index = tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            tasks.splice(index, 1);
            displayTasks();
        }
    };

    // Initial display of tasks
    displayTasks();
});


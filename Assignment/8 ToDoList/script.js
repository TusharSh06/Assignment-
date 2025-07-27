// Wait for the DOM to be fully loaded
window.onload = function() {
    // Get DOM elements
    var taskInput = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskList = document.getElementById('taskList');
    var taskCount = document.getElementById('taskCount');
    var clearCompletedBtn = document.getElementById('clearCompleted');

    // Load tasks from localStorage or initialize empty array
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTaskCount();
    }

    // Function to update the task counter
    function updateTaskCount() {
        var remaining = 0;
        for (var i = 0; i < tasks.length; i++) {
            if (!tasks[i].completed) {
                remaining++;
            }
        }
        taskCount.textContent = remaining + ' ' + (remaining === 1 ? 'task' : 'tasks') + ' remaining';
    }

    // Function to create a new task element
    function createTaskElement(task) {
        var li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) {
            li.className += ' completed';
        }
        li.setAttribute('data-id', task.id);

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = toggleTask;

        var taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = deleteTask;

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        return li;
    }

    // Function to render all tasks
    function renderTasks() {
        taskList.innerHTML = '';
        for (var i = 0; i < tasks.length; i++) {
            taskList.appendChild(createTaskElement(tasks[i]));
        }
        saveTasks();
    }

    // Function to add a new task
    function addTask() {
        var text = taskInput.value.trim();
        if (text) {
            var newTask = {
                id: Date.now().toString(),
                text: text,
                completed: false
            };
            tasks.unshift(newTask);
            taskInput.value = '';
            renderTasks();
        }
    }

    // Function to toggle task completion
    function toggleTask(e) {
        var taskId = e.target.parentElement.getAttribute('data-id');
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === taskId) {
                tasks[i].completed = !tasks[i].completed;
                break;
            }
        }
        renderTasks();
    }

    // Function to delete a task
    function deleteTask(e) {
        var taskId = e.target.parentElement.getAttribute('data-id');
        var newTasks = [];
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== taskId) {
                newTasks.push(tasks[i]);
            }
        }
        tasks = newTasks;
        renderTasks();
    }

    // Function to clear completed tasks
    function clearCompletedTasks() {
        var newTasks = [];
        for (var i = 0; i < tasks.length; i++) {
            if (!tasks[i].completed) {
                newTasks.push(tasks[i]);
            }
        }
        tasks = newTasks;
        renderTasks();
    }

    // Event Listeners
    addTaskBtn.onclick = addTask;
    
    taskInput.onkeypress = function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    };
    
    clearCompletedBtn.onclick = clearCompletedTasks;

    // Initial render
    renderTasks();
};


document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');
        const tasks = taskList.getElementsByTagName('li');
        let taskExists = false;

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].textContent.replace('Delete', '').trim() === taskValue) {
                taskExists = true;
                break;
            }
        }

        if (!taskExists) {
            const li = document.createElement('li');
            li.textContent = taskValue;

            // Mark as complete functionality
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            // Delete functionality
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = ''; // Clear input after adding
        } else {
            alert('Task already exists!');
        }
    }
});
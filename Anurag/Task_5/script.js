const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("addTask").addEventListener("click", () => {
    const taskTitle = document.getElementById("taskInput").value.trim();
    const taskPriority = document.getElementById("taskPriority").value;

    if (taskTitle) {
        tasks.push({ title: taskTitle, priority: taskPriority });
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to localStorage
        document.getElementById("taskInput").value = "";
        displayTasks();
    }
});

const displayTasks = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    tasks.map((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task.title} - <b>${task.priority}</b> 
            <button onclick="deleteTask(${index})">❌</button>`;
        taskList.appendChild(li);
    });

    document.getElementById("taskCount").innerText = 
        `Total Tasks: ${tasks.reduce((count) => count + 1, 0)}`;
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    displayTasks();
};

document.getElementById("filterTasks").addEventListener("change", (e) => {
    const filteredTasks = tasks.filter(task => task.priority === e.target.value || e.target.value === "All");
    displayFilteredTasks(filteredTasks);
});

const displayFilteredTasks = (filteredTasks) => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    filteredTasks.map((task) => {
        const li = document.createElement("li");
        li.innerHTML = `${task.title} - <b>${task.priority}</b>`;
        taskList.appendChild(li);
    });
};

// Load tasks from localStorage on page load
window.addEventListener("load", displayTasks);

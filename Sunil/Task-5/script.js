const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click", () =>
{
    const taskText = taskInput.value.trim();
    if (!taskText == "")
    {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText)
{
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const task = document.createElement("span");
    task.textContent = taskText;
    li.appendChild(task);

    const markCompleteBtn = document.createElement("button");
    markCompleteBtn.textContent = "Complete";
    markCompleteBtn.addEventListener("click", () => {
        li.classList.toggle("Complete");
         markCompleteBtn.classList.toggle("button-completed");
         
    });
    li.append(markCompleteBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

 }
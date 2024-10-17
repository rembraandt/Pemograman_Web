document.getElementById("addButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    addTaskToList(taskText);
    taskInput.value = ""; // Clear the input
});

function addTaskToList(taskText) {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(li);
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement;
    const taskTextElement = li.querySelector("span");
    const taskText = taskTextElement.innerText;

    const newTaskText = prompt("Edit your task:", taskText);
    
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskTextElement.innerText = newTaskText.trim();
    }
}



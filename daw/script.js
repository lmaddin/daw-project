function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = '<input type="checkbox" onchange="toggleTaskCompletion(this)">' + taskInput.value;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function toggleTaskCompletion(checkbox) {
    var taskItem = checkbox.parentElement;
    if (checkbox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}

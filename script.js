document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", function() {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            inputField.value = "";
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(listItem);

        const completeButton = listItem.querySelector(".complete-btn");
        completeButton.addEventListener("click", function() {
            listItem.classList.toggle("completed");
        });

        const deleteButton = listItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
    }
});

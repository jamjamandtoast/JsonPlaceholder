"use strict";
const todoIdInput = document.getElementById("todoId");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const completedInput = document.getElementById("completed");
const userIdInput = document.getElementById("userId");
function fetchTodoData() {
      const todoId = todoIdInput.value;

      fetch(`http://localhost:3000/todos/${todoId}`)
        .then(response => response.json())
        .then(todo => {

          titleInput.value = todo.title;
          descriptionInput.value = todo.description;
          completedInput.checked = todo.completed;
          userIdInput.value = todo.userId;
        })
        .catch(error => console.error('Error:', error));
    }
    function cancel() {
      window.location.href = "index.html";
    }

    function updateTodo() {
      const todoId = todoIdInput.value;

      const updatedTodo = {
        id: parseInt(todoId),
        title: titleInput.value,
        description: descriptionInput.value,
        completed: completedInput.checked,
        userId: parseInt(userIdInput.value)
      };

      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
      })
        .then(response => {
          if (response.ok) {
            console.log("ToDo updated successfully");
          } else {
            console.error("Error updating ToDo");
          }
        })
        .catch(error => console.error('Error:', error));
    }
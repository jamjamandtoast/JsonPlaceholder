"use strict";

const todoIdInput = document.getElementById("todoIdInput");
const messageDiv = document.getElementById("messageDiv");
const button = document.getElementById("button");

window.onload = () => {
    button.onclick = handleClick;
}

function handleClick() {
  
    const todoId = todoIdInput.value;
     // making  an API call using fetch()
    fetch("http://localhost:3000/todos/" + todoId)
      .then(response => response.json())
      .then(data =>{
        let message = `TODO: ${data.id} ${data.title} completed: ${data.completed} user: ${data.userId}`
        messageDiv.innerHTML = message;
      });

}

    
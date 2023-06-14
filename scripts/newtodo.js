"use strict";

const todoTitle = document.getElementById("todoTitle");
const todoCompleted = document.getElementById("todoCompleted");
const todoUserId = document.getElementById("todoUserId");
const todoButton = document.getElementById("todoButton");

window.onload = function() {
  todoButton.onclick = onButtonClick;
}

function onButtonClick() {
  // Create a new todo using the API!
  // Create JSON object to include in the request body
  let bodyData = {
    title: todoTitle.value,
    completed: todoCompleted.value,
    userId: todoUserId.value
  };
  
  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => {
        // If the POST finishes successfully, display a message
        messageText.innerHTML = "New Todo added with ID of " + json.id;

    })
    .catch(err => {
        // If the POST returns an error, display a message

        messageText.innerHTML = "Unexpected error";
    });
};

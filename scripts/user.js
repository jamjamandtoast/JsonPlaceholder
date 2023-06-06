const userTable = document.getElementById("userTable");

window.onload = () => {
  tableforusers();
};

function tableforusers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      users.forEach((user, index) => {
        const row = document.createElement('tr');

        // Create cells for each field
        const indexCell = document.createElement('th');
        indexCell.setAttribute('scope', 'row');
        indexCell.textContent = index + 1;
        row.appendChild(indexCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;
        row.appendChild(usernameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = user.phone;
        row.appendChild(phoneCell);

        const websiteCell = document.createElement('td');
        websiteCell.textContent = user.website;
        row.appendChild(websiteCell);

        userTable.appendChild(row);
      });
    })
   
}
const body = document.body;

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const tBody = document.querySelector(".tbody");

let users = [];

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  generateId() {
    return (this.id = Date.now());
  }
}

function createUser(username, email, password) {
  let user = new User(username, email, password);
  user.generateId();
  return user;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value && email.value && password.value) {
    users.push(createUser(username.value, email.value, password.value));
    // console.log(users);
    resetForm();
    drawTable(users);
  } else {
    window.alert("User field");
  }
});

function resetForm() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((item) => {
    item.value = "";
  });
}

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((item) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML += `            
    <td>${item.id}</td>
    <td>${item.username}</td>
    <td>${item.email}</td>
    <td>${item.password}</td>
    <td><button class="btn btn-danger">Delete</button></td> 
    `;
    tBody.append(trElem);
  });
}

const body = document.body;

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");

let users = JSON.parse(localStorage.getItem("users")) || [];

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
    console.log(users);

    localStorage.setItem("users", JSON.stringify(users));
    resetForm();
    window.location = "login.html";
  } else {
    window.alert("User not found");
  }
});

function resetForm() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((item) => {
    item.value = "";
  });
}

let darkBtn = document.getElementById("darkBtn");
let changeBtn = document.getElementById("changeText");
let title = document.getElementById("title");

darkBtn.onclick = function () {
  document.body.classList.toggle("dark");
};

changeBtn.onclick = function () {
  title.innerText = "Welcome 🚀";
};

document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "") {
    document.getElementById("nameError").innerText = "Name required";
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email required";
  }
};

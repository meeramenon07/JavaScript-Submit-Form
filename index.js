const form = document.querySelector("form");
const para = document.querySelector("p");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const submit = document.getElementById("submit");
const email = document.getElementById("email");
form.addEventListener("submit", function(event){
  if (name.value === "" || surname.value === "" || email.value === "") {
    event.preventDefault();
    para.textContent = " You need to enter full details ";
  } else {
    alert("Success ! Form submission complete!");
  }
});

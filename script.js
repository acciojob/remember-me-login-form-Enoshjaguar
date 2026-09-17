let form = document.getElementById("loginForm");

let username = document.getElementById("username");
let password = document.getElementById("password");

let checkbox = document.getElementById("checkbox");

let existing = document.getElementById("existing");


// Check if credentials already exist
let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

if (savedUsername !== null && savedPassword !== null) {
    existing.style.display = "block";
}


// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let user = username.value;
    let pass = password.value;

    alert("Logged in as " + user);

    if (checkbox.checked) {

        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        existing.style.display = "block";

    } else {

        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }

});


// Existing user login
existing.addEventListener("click", function() {

    let savedUser = localStorage.getItem("username");

    alert("Logged in as " + savedUser);

});
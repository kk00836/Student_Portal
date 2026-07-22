// Login Validation

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if(username === "student" && password === "cmru123"){
        window.location.href = "home.html";
        return false;
    }

    error.innerHTML = "Invalid Username or Password";
    return false;
}


// Contact Form Validation

function validateContact(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


// Logout

function logout(){
    window.location.href = "index.html";
}

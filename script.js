script.js



function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (email == "admin@gmail.com" && pass == "1234") {
        document.getElementById("msg").innerHTML = "Login Successful";
    } else {
        document.getElementById("msg").innerHTML = "Invalid Login";
    }
    return false;
}


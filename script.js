function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {

        document.getElementById("login").style.display = "none";

        document.getElementById("registration").style.display = "block";

    } else {

        document.getElementById("loginMsg").innerHTML =
            "Invalid Username or Password!";

    }
}


document.getElementById("registration").addEventListener("submit", function(event) {

    event.preventDefault();

    let age = Number(document.getElementById("age").value);

    let phone = document.getElementById("phone").value;

    if (age <= 0 || age >= 30) {
        alert("Age must be below 30!");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must contain exactly 10 digits!");
        return;
    }

    document.getElementById("success").innerHTML =
        "Registered Successfully!";

});
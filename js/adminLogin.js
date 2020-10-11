const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "LibAdmin" && password === "ADMIN1") {

        alert("You have successfully logged in."); location.assign("/html/add.html");
    }
    else if (username === "LibAdmin-jr" && password === "ADMIN2") {
        alert("You have successfully logged in.");
        location.assign("/html/add.html")
    }
    else if (username === "LibAdmin-sub" && password === "ADMIN3") {
        alert("You have successfully logged in.");
        location.assign("/html/add.html")

    }
    else {
            loginErrorMsg.style.opacity = 1;
        }
    })
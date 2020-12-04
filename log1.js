const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const title = loginForm.title.value;

    if (username !== "" && title !== "") {
        alert("You have successfully send.");
        location.reload();
    } else {
        
    }
})
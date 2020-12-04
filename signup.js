/* const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "hz" && password === "hz") {
        alert("You have successfully logged in.");
        location.reload();
        window.location.href = "index.html";
        storeData();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}) */

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDkOhJWuJ3CsueJQaxkqB3k2bfPzO0uaqk",
    authDomain: "web104final.firebaseapp.com",
    databaseURL: "https://web104final.firebaseio.com",
    projectId: "web104final",
    storageBucket: "web104final.appspot.com",
    messagingSenderId: "582460869112",
    appId: "1:582460869112:web:e0607dddd621fe5ed7ae0d",
    measurementId: "G-FNG24W1CZ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function storeData(){
/*   let form = document.getElementById("login-form").value
  let email = document.getElementById("username-field").value
  let password = document.getElementById("password-field").value */
const loginForm = document.getElementById("login-form").value;
const username = document.getElementById("username-field").value;
const password = document.getElementById("password-field").value;
  db.collection("leads").doc(loginForm).set({
    email: username,
    password = password,
  })
  /* .then(function() {
    alert("Document successfully written!");
    })
    
    .catch(function(error) {
    console.error("Error writing document: ", error);
    }); */
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "hz" && password === "hz") {
        alert("You have successfully logged in.");
        location.reload();
        storeData();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
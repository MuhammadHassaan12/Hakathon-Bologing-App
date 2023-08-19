// Import the functions you need from the SDKs you need
import { auth } from "./firebase.mjs"
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


var btn = document.getElementById("login")
btn.addEventListener("click", () => {


    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
console.log(email, password)
            // Signed in 
            const user = userCredential.user;
            console.log("user==>", user)
            alert('loged in')
            window.location.href = "./dashboard.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, "errorCode");
            console.log(errorMessage, "errorMessage")

        });

})

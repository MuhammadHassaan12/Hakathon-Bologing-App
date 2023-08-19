import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
//  import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC4tvBZX638MCF2jluLBHlMqzaGtMTJSp8",
    authDomain: "hakhathon-bloging-app.firebaseapp.com",
    projectId: "hakhathon-bloging-app",
    storageBucket: "hakhathon-bloging-app.appspot.com",
    messagingSenderId: "349742218754",
    appId: "1:349742218754:web:63f314f22df81e7a58b11b",
    measurementId: "G-S8BTS4FGWV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var btn = document.getElementById("submit")
btn.addEventListener("click", () => {

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value;
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value

    createUserWithEmailAndPassword(auth, email, password, fname, lname)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("account created")
            window.location.href = ".././index.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, "errorCode");
            console.log(errorMessage, "errorMessage");
            // ..
        });

})




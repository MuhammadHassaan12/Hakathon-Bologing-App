import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC4tvBZX638MCF2jluLBHlMqzaGtMTJSp8",
    authDomain: "hakhathon-bloging-app.firebaseapp.com",
    projectId: "hakhathon-bloging-app",
    storageBucket: "hakhathon-bloging-app.appspot.com",
    messagingSenderId: "349742218754",
    appId: "1:349742218754:web:63f314f22df81e7a58b11b",
    measurementId: "G-S8BTS4FGWV"
  };
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app)
  export const db = getFirestore(app)
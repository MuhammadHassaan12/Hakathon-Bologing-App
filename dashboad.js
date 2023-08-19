import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { signOut ,getAuth} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { setDoc, deleteDoc, updateDoc, collection, doc, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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
const analytics = getAnalytics(app);
const db = getFirestore(app);

const logOut = document.getElementById('logout');
logOut.addEventListener('click', ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = './index.html';
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
})
let btn = document.getElementById('dshbtn')
let addTodo = async () => {
    let todoInp = document.getElementById("placeholder").value;
    let commint = document.getElementById("textarea").value;
    try {
        await setDoc(doc(db, "todos", todoInp, commint), {
            todo: todoInp,
            commint: commint,
        });
        getData()
    } catch (e) {
        console.log(e);
    }
}

let show_container = document.querySelector(".show-container");
let querySnapshot = await getDocs(collection(db, "todos"));
show_container.innerHTML = ""
querySnapshot.forEach((doc) => {
    show_container.innerHTML += `
        <div class="main-be" id='${doc.data().todoInp}'>
          <p>${doc.data().commint}</p>
          <div class="buttons">
          <button onclick="updateInp('${doc.data().todoInp}')">Update</button>
          <button onclick="deleteTodo('${doc.data().commint}')">Delete</button>
          </div>
          </div>
        `
});

let deleteTodo = async (todoInp,commint) => {
    await deleteDoc(doc(db, "todos", todoInp, commint));
    getData()
}

getData()

let updateInp = (todoInp,commint) => {
    localStorage.setItem("purana-mal", todoInp,commint)
    document.getElementById(`${todo}`).innerHTML = `
    <div>
          <input value="${todo}" id='${todo}-3' />
          <div class="buttons">
          <button onclick="updateTodo('${todo}')">Set</button>
          <button onclick="deleteTodo('${todo}')">Delete</button>
          </div>
        </div>
    `
}

let updateTodo = async (todoInp,commint) => {
    let todoRef = doc(db, "todos", localStorage.getItem("purana-mal"));
    let newTodo = document.getElementById(`${todoInp}-3`).value
    await updateDoc(todoRef, {
        todo: newTodo
    });

    getData()
}

window.addTodo = addTodo
window.updateTodo = updateTodo
window.updateInp = updateInp
window.deleteTodo = deleteTodo
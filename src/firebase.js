// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsLAhqVI4DE3afG0bZvE6Xd3aUAdIbzG4",
  authDomain: "nihongobros.firebaseapp.com",
  databaseURL: "https://nihongobros-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nihongobros",
  storageBucket: "nihongobros.appspot.com",
  messagingSenderId: "307483252923",
  appId: "1:307483252923:web:4a0ebdad530e078495f19e",
  measurementId: "G-L89TET79FV"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const writeData = (name, time, score, percentage) => {
    const db = getDatabase();
    const reference = ref(db, "users/" + name);

    set(reference, {
        name,
        time,
        score,
        percentage
    })
}

const getUsers = () => {
    const db = getDatabase();
    const reference = ref(db, "users/");

    onValue(reference, (snap) => {
        const data = snap.val();
        console.log(data);
    })
}

export { writeData, getUsers };
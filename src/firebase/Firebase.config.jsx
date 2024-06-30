// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXn70ndNLUNWMpGvWrQDZ7dBXViMvnBKk",
    authDomain: "panel-admin-4-mui.firebaseapp.com",
    projectId: "panel-admin-4-mui",
    storageBucket: "panel-admin-4-mui.appspot.com",
    messagingSenderId: "445129800881",
    appId: "1:445129800881:web:b02f921fb996349989b690",
    measurementId: "G-VJJR3QPNLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
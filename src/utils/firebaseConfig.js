// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGUpBykdKjMWpZYE2PGUR-0xxCNUk3flo",
    authDomain: "ecomm-lautaro-mora.firebaseapp.com",
    projectId: "ecomm-lautaro-mora",
    storageBucket: "ecomm-lautaro-mora.appspot.com",
    messagingSenderId: "479352536814",
    appId: "1:479352536814:web:b84c67fa99097ce3f03dff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
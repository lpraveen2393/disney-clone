// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0KpfOZfHYtB9elxWrGW2jEP_vUCyce-s",
    authDomain: "disney-clone-afefb.firebaseapp.com",
    projectId: "disney-clone-afefb",
    storageBucket: "disney-clone-afefb.appspot.com",
    messagingSenderId: "862219228577",
    appId: "1:862219228577:web:e6f891fc2641a7f5ab67e0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, db };
//export default db;


//not according to the video refer to this https://chatgpt.com/c/808a8b5f-7aab-4f80-8886-b1136d5e6875  ;
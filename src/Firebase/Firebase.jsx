import {initializeApp} from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyAhWyqrEl9Gl8XHlztX5iSqsLHf2C_qEjM",
    authDomain: "testing-auth-d6a7d.firebaseapp.com",
    projectId: "testing-auth-d6a7d",
    storageBucket: "testing-auth-d6a7d.firebasestorage.app",
    messagingSenderId: "69037439156",
    appId: "1:69037439156:web:fcf9c288ed467939053fe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
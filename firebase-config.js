// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Replace this with your actual Firebase project config object!
const firebaseConfig = {
  apiKey: "AIzaSyBTT_f0-KoXV0xiF5H86GjI5PT1gLxaZfg",
  authDomain: "beybladebattlearena-c6d40.firebaseapp.com",
  databaseURL: "https://beybladebattlearena-c6d40-default-rtdb.firebaseio.com",
  projectId: "beybladebattlearena-c6d40",
  storageBucket: "beybladebattlearena-c6d40.firebasestorage.app",
  messagingSenderId: "731518647168",
  appId: "1:731518647168:web:6bae6474f33ce395ff9f65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Database so other files can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
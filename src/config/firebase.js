import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPqpgc6XBhHgK6Yk3o0prgo5OVqEYROkw",
  authDomain: "financeasy-f7d5c.firebaseapp.com",
  projectId: "financeasy-f7d5c",
  storageBucket: "financeasy-f7d5c.appspot.com",
  messagingSenderId: "773415463545",
  appId: "1:773415463545:web:99e5d988fccdfbf0bc82a8",
  measurementId: "G-6Q3QMZH3MB",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Auth
const auth = getAuth();

// Db
const db = getFirestore();

// Analytics
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { auth, db };

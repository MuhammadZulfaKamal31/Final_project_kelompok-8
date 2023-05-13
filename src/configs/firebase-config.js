import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-bT_IQuZqzFcQnlVdqm9Xq777sSTTEcY",
  authDomain: "login-firebase-66263.firebaseapp.com",
  databaseURL:
    "https://login-firebase-66263-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-firebase-66263",
  storageBucket: "login-firebase-66263.appspot.com",
  messagingSenderId: "664441722164",
  appId: "1:664441722164:web:1e193ca2d608a47a9a8161",
  measurementId: "G-TZMQXDV706",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

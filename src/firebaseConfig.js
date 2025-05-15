// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsdhiML6Fa8gl4Ub_YCvmQcSqB0zZxv3c",
  authDomain: "ecommerce-7db44.firebaseapp.com",
  projectId: "ecommerce-7db44",
  storageBucket: "ecommerce-7db44.firebasestorage.app",
  messagingSenderId: "169940175887",
  appId: "1:169940175887:web:1e0d9755ff4fc2dbb0277a",
  measurementId: "G-6G2RGJ1626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 
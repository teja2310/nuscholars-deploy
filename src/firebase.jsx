// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnecu0f-5Z2nMDSsepD_MKqtJCp4ih2KI",
  authDomain: "nuscholars-chat.firebaseapp.com",
  projectId: "nuscholars-chat",
  storageBucket: "nuscholars-chat.appspot.com",
  messagingSenderId: "915292196288",
  appId: "1:915292196288:web:f53af10e7f7156f7988c25",
  measurementId: "G-Q5FTD96D88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);
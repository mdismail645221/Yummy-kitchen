// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHIDLg1NnEdNPsiy3G5U2lqF7M6TTPhNY",
  authDomain: "yummy-kitchen-5875e.firebaseapp.com",
  projectId: "yummy-kitchen-5875e",
  storageBucket: "yummy-kitchen-5875e.appspot.com",
  messagingSenderId: "739127209657",
  appId: "1:739127209657:web:2eb96e50f3b33276ccf568",
  measurementId: "G-DENMEZ5HDD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
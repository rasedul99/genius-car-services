import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBRA2trlE5AKwAG0aBRB_RJmaSdN0PPZLs",
  authDomain: "genius-car-services-baaea.firebaseapp.com",
  projectId: "genius-car-services-baaea",
  storageBucket: "genius-car-services-baaea.appspot.com",
  messagingSenderId: "190342888683",
  appId: "1:190342888683:web:73edba90a42f6347ba52ae",
  measurementId: "G-P6KEF4Z2B9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;

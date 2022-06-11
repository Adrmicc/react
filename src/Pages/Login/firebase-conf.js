import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHfBoYS1N1xknXCq1-IAepP2QtD6f-CU8",
  authDomain: "react-app-39e17.firebaseapp.com",
  projectId: "react-app-39e17",
  storageBucket: "react-app-39e17.appspot.com",
  messagingSenderId: "343798257195",
  appId: "1:343798257195:web:2e9d6933a4c7cdc552bc6e"
};

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

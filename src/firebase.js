import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhbVAuWXkewbZNP1a1KknskpNGB_F8deU",
  authDomain: "react-expense-tracker-de748.firebaseapp.com",
  databaseURL: "https://react-expense-tracker-de748-default-rtdb.firebaseio.com",
  projectId: "react-expense-tracker-de748",
  storageBucket: "react-expense-tracker-de748.appspot.com",
  messagingSenderId: "320796700967",
  appId: "1:320796700967:web:e10e55cbd4efe4bf7ff902"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


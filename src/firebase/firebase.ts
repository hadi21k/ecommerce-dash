import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk_VJeWFWF8AVgX614GqghdmqMRSBab40",
  authDomain: "ecommerce-dashboard-761e9.firebaseapp.com",
  projectId: "ecommerce-dashboard-761e9",
  storageBucket: "ecommerce-dashboard-761e9.appspot.com",
  messagingSenderId: "356916501064",
  appId: "1:356916501064:web:fe46540a1a0604ac73967d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh4EP3BCiSHrwdHJ-ECq_5vX9L3M9VcUM",
  authDomain: "instantmessaging-fd7e4.firebaseapp.com",
  projectId: "instantmessaging-fd7e4",
  storageBucket: "instantmessaging-fd7e4.appspot.com",
  messagingSenderId: "234970532564",
  appId: "1:234970532564:web:866e110d23e186a4300941"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
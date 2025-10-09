import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCASfCFPZP6Qt-2BLqgpJfOr-MzD1toO9Q",
  authDomain: "websitec3-56fd3.firebaseapp.com",
  projectId: "websitec3-56fd3",
  storageBucket: "websitec3-56fd3.firebasestorage.app",
  messagingSenderId: "928811609903",
  appId: "1:928811609903:web:f21b27f5a08092982ebbda",
  measurementId: "G-6E2HFWRHZF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDKxWtmiGD8rLKg2qwVQ01yAPaRMzQkWIU",
  authDomain: "fir-chat-665c9.firebaseapp.com",
  projectId: "fir-chat-665c9",
  storageBucket: "fir-chat-665c9.firebasestorage.app",
  messagingSenderId: "877657254543",
  appId: "1:877657254543:web:cc125eb380da7f4c295efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence( AsyncStorage)
});

export const db = getFirestore(app);

export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-7e4b7.firebaseapp.com',
  projectId: 'mern-blog-7e4b7',
  storageBucket: 'mern-blog-7e4b7.appspot.com',
  messagingSenderId: '828717953850',
  appId: '1:828717953850:web:ee2f6a977c398144825603',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

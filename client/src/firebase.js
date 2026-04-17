// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiwebsitebuilder-6fe60.firebaseapp.com",
  projectId: "aiwebsitebuilder-6fe60",
  storageBucket: "aiwebsitebuilder-6fe60.firebasestorage.app",
  messagingSenderId: "956604133042",
  appId: "1:956604133042:web:6801f548d9fa426ee7e3ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

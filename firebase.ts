// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${API_KEY}`,
  authDomain: "netflix-nextjs-app.firebaseapp.com",
  projectId: "netflix-nextjs-app",
  storageBucket: "netflix-nextjs-app.appspot.com",
  messagingSenderId: "510045382888",
  appId: "1:510045382888:web:a2754b90aa4a5272f1415d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
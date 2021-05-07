import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyBhrlgKF4eRCn2v_pyiYvOWDX7LYS4xMCo",
    authDomain: "mk11-ind-project.firebaseapp.com",
    projectId: "mk11-ind-project",
    storageBucket: "mk11-ind-project.appspot.com",
    messagingSenderId: "574002518376",
    appId: "1:574002518376:web:5ad280b557cf7d662c9edd"

})

export const auth = app.auth()

export default app
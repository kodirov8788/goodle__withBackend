import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARFvIX5yvgVXrkd0FfO80w5e7gvpsdyuI",
  authDomain: "goodle-4e599.firebaseapp.com",
  projectId: "goodle-4e599",
  storageBucket: "goodle-4e599.appspot.com",
  messagingSenderId: "946553779860",
  appId: "1:946553779860:web:90794187dd4c476f3a6681",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;

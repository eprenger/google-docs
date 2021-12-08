import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCCnJvF4NQ_cGsxPmttX16PfJiPzPws818",
  authDomain: "docs-clone-d58cb.firebaseapp.com",
  projectId: "docs-clone-d58cb",
  storageBucket: "docs-clone-d58cb.appspot.com",
  messagingSenderId: "1055726723792",
  appId: "1:1055726723792:web:6a4fbb4bdc53c924b074d5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };

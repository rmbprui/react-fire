import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2gJiHvdRv3n9IDcVMb2VTOXVk2xREXIA",
  authDomain: "flutter-notes-8bf6d.firebaseapp.com",
  databaseURL:
    "https://flutter-notes-8bf6d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flutter-notes-8bf6d",
  storageBucket: "flutter-notes-8bf6d.appspot.com",
  messagingSenderId: "866004177737",
  appId: "1:866004177737:web:d7810b657b3bc87e7b0098",
  measurementId: "G-CEZ1MDQP6M",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };

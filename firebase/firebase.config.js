import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC6qC9D9-6r3uw_RJv7lkX8P0X3qIuup1M",
  authDomain: "digital-asset-5b107.firebaseapp.com",
  projectId: "digital-asset-5b107",
  storageBucket: "digital-asset-5b107.appspot.com",
  messagingSenderId: "816088038588",
  appId: "1:816088038588:web:4293032169a0d4ce8964b9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
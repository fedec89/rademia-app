
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNTmN_6mSvl3XCxAszQUrtCi703ZMQRa8",
  authDomain: "rademia-app.firebaseapp.com",
  projectId: "rademia-app",
  storageBucket: "rademia-app.appspot.com",
  messagingSenderId: "877555859515",
  appId: "1:877555859515:web:13b513de42225d0d2f1c1e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



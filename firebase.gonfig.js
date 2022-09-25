import { getApp. getApps, initializeApp } from "firbase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB5REGQ-SGx0-JOONdHTx8uz2s02aQ4bDo",
    authDomain: "restaurantapp-6978b.firebaseapp.com",
    databaseURL: "https://restaurantapp-6978b-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-6978b",
    storageBucket: "restaurantapp-6978b.appspot.com",
    messagingSenderId: "357738859781",
    appId: "1:357738859781:web:112a1c6971bb1189ea3b6c",
    measurementId: "G-DHPWSWY48F"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };

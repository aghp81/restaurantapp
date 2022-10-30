// saving new Item

import { setDoc } from "firebase/firestore";
import { firestore } from "../firebase.gonfig";

export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, "foodItems", `&{Date.now()}`), data, {merge : true, 
        });
};
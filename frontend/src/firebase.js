import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "./firebaseConfig";


const FireBaseApp = firebase.initializeApp(
    firebaseConfig
);

export const FireBaseAuth = FireBaseApp.auth();
export default FireBaseApp;
import firebase from "firebase/app"

import "firebase/auth"

export const auth =  firebase.initializeApp( {
    apiKey: "AIzaSyArQllIR41zryudckui_PlzxRevf6otoCg",
    authDomain: "minichat-42850.firebaseapp.com",
    projectId: "minichat-42850",
    storageBucket: "minichat-42850.appspot.com",
    messagingSenderId: "212059011492",
    appId: "1:212059011492:web:bd643481fbf15ebb21e931"
  }).auth();
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjl6X3b_0x83vfttqxPfdgUqpXcN75xWY",
    authDomain: "appvilanova-75062.firebaseapp.com",
    databaseURL: "https://appvilanova-75062-default-rtdb.firebaseio.com",
    projectId: "appvilanova-75062",
    storageBucket: "appvilanova-75062.appspot.com",
    messagingSenderId: "455077835349",
    appId: "1:455077835349:web:ee4d700203369eae579adc",
    measurementId: "G-6XH35PE79V"
};

firebase.firebaseConfig(firebaseConfig);
firebase.firestore();

export default FirebaseDB;
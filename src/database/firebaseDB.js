//import firebase from 'firebase';
import { Alert } from 'react-native';
//import "firebase/firestore";
import  {firebase} from '@react-native-firebase/database';
import  '@react-native-firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDK1zd5PRyjcX5kwft7Bh58BIjB68DUzqQ",
  authDomain: "app-vila-nova.firebaseapp.com",
  projectId: "app-vila-nova",
  storageBucket: "app-vila-nova.appspot.com",
  messagingSenderId: "16037217",
  appId: "1:16037217:web:1d8eab63ae76c79420c120",
  measurementId: "G-15WR21JQ86"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);
var firestoreDb = firebase.firestore();


//const pessoaFirebase = firebase.initializeApp(firebaseConfig);
//Alert.alert('pessoaFirebase' , pessoaFirebase);
 
  export default firestoreDb
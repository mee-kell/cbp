import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDLvzREc2wCtRFaRGowze5UksRj5OUsD9M",
  authDomain: "code-blue-pwa.firebaseapp.com",
  databaseURL: "https://code-blue-pwa.firebaseio.com",
  projectId: "code-blue-pwa",
  storageBucket: "code-blue-pwa.appspot.com",
  messagingSenderId: "517107272411",
  appId: "1:517107272411:web:2eaeca9a4a9a11cd0b9afe",
  measurementId: "G-VY34Y0KND6"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const CodeBlueRef = firebase.firestore();

export default CodeBlueRef
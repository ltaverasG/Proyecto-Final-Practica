 import firebase from 'firebase/app';
 import 'firebase/auth'; 

 const firebaseConfig = {
    apiKey: "AIzaSyCSqwlo-vRhmyACTKlgmeY61upr3id8-WM",
    authDomain: "proyecto-final-prog-web-bfef4.firebaseapp.com",
    databaseURL: "https://proyecto-final-prog-web-bfef4-default-rtdb.firebaseio.com",
    projectId: "proyecto-final-prog-web-bfef4",
    storageBucket: "proyecto-final-prog-web-bfef4.appspot.com",
    messagingSenderId: "605202811093",
    appId: "1:605202811093:web:88b162ef700e8527b53a5c"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth()

  export {auth ,firebaseConfig} 
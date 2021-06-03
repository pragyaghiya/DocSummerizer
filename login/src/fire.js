import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDCaoRCxqaobOLgi2GPtaGF9YJ8Qqebojw",
    authDomain: "login-b2a90.firebaseapp.com",
    projectId: "login-b2a90",
    storageBucket: "login-b2a90.appspot.com",
    messagingSenderId: "946059384458",
    appId: "1:946059384458:web:91e3cab4d5c290b0573f73"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;

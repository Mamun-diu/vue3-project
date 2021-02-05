import firebase from "firebase/app";
// import 'firebase/functions';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDo_QRvsO2eo3Yshse_Q7WsvYOcVEk1G2w",
    authDomain: "vue3-multi-project.firebaseapp.com",
    projectId: "vue3-multi-project",
    storageBucket: "vue3-multi-project.appspot.com",
    messagingSenderId: "318167014213",
    appId: "1:318167014213:web:3dfc815e139a28123bfc2c",
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;
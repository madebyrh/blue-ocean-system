import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3UVtn1odyGTMiKk6n0Fx-rSeJXRqut50",
    authDomain: "blue-ocean-system.firebaseapp.com",
    databaseURL: "https://blue-ocean-system.firebaseio.com",
    projectId: "blue-ocean-system",
    storageBucket: "blue-ocean-system.appspot.com",
    messagingSenderId: "25350385607",
    appId: "1:25350385607:web:f3d92fcde13b7f21"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
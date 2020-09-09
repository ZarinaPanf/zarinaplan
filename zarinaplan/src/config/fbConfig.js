import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWdVQwDkod7zg7sqH6FuHnWQ7uTrZv-3M",
    authDomain: "zarina-plan.firebaseapp.com",
    databaseURL: "https://zarina-plan.firebaseio.com",
    projectId: "zarina-plan",
    storageBucket: "zarina-plan.appspot.com",
    messagingSenderId: "149882684432",
    appId: "1:149882684432:web:cd4feb31d68eacbb4cf695",
    measurementId: "G-5KY7BPFDSZ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
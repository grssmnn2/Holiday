import Rebase from 're-base';
import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyDAgDav2w82IpP-o_vyY7uOx3VPvsv43ZE",
    authDomain: "holiday-35fd2.firebaseapp.com",
    databaseURL: "https://holiday-35fd2.firebaseio.com",
    projectId: "holiday-35fd2",
    storageBucket: "holiday-35fd2.appspot.com",
    messagingSenderId: "750469917988"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())

export { app, base }

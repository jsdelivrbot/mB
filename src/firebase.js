import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTIfIn_chbtcqDZJ9yQNPi0ZOJ5tn5vyY",
    authDomain: "today-in-vg.firebaseapp.com",
    databaseURL: "https://today-in-vg.firebaseio.com",
});

export default firebase;
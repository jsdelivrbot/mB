import { FETCH_USER } from './types';
import firebase from '../firebase';

export function fetchUser(userID) {
    const dbRef = firebase.database().ref('user-list').child(`${userID}`);

    const user = dbRef.on('value', (res) => {
        const userSnapshot = res.val();
        return userSnapshot;
    });

    return {
        type: FETCH_USER,
        payload: user
    }
}
import { FETCH_USERS } from './types';
import firebase from '../firebase';


export function fetchUsers() {
    const dbRef = firebase.database().ref('user-list');

    const userList = dbRef.on('value', (res) => {
        const fullUserList = res.val();
        const dirtyList = [];
        const cleanList = [];

        // Push each user into a dirty list
        fullUserList.forEach(user => {
            dirtyList.push(fullUserList[user]);
        });

        // Return only users that have a profile image
        const cleanList = dirtyList.filter(function(user){
            return user.profileImage === true;
        });

        // Return our clean list
        return cleanList;
    });

    return {
        type: FETCH_USERS,
        payload: userList
    }
}
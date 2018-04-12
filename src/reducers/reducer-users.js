import { FETCH_USERS, FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload.date;
        default:
            return state;
    }
}
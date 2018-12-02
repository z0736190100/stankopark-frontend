import {
    FETCH_USER,
    AUTH_USER,
    SIGNOUT_USER,
    AUTH_ERROR
} from "store/actions/types.js";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        case AUTH_USER:
            return {...state, authenticated: true};
        case SIGNOUT_USER:
            return {...state, authenticated: false};
        case AUTH_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

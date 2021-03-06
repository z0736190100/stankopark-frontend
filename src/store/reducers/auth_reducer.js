import {
    AUTH_USER,
    LOGOUT_USER,
    AUTH_PROCESSING_ERROR,
    REGISTER_USER
} from "store/actions/types.js";

export default function (state = null , action) {
    switch (action.type) {
        case AUTH_USER:
            return {...state, authenticated: true, token: action.payload};
        case LOGOUT_USER:
            return {...state, authenticated: false};
        case AUTH_PROCESSING_ERROR:
            return {...state, error: action.payload};
        case REGISTER_USER:
            // TODO: is this switching forms reducer redundant?
            return {...state, welcomeLogin: action.payload.welcomeLogin};
        default:
            return state;
    }
}

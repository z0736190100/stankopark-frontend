import {
    REGISTER_USER,
    FETCH_USER
} from "store/actions/types.js";

export default function (state = null , action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        case REGISTER_USER:
            return {...state, registered: action.payload};
        default:
            return state;
    }
}

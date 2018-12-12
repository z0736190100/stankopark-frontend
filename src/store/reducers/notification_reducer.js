import {
    SHOW_NOTIFICATION
} from "store/actions/types.js";


//TODO: notification object
export default function (state = null, action) {
    const payload = action.payload;
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return payload;
        default:
            return state;
    }
}
import {
    SHOW_NOTIFICATION
} from "store/actions/types.js";

export default function (state = null, action) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return action.payload;
        default:
            return state;
    }
}
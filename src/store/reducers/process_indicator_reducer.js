import {
    PROCESS_INDICATE
} from "store/actions/types.js";

export default function (state = null, action) {
    switch (action.type) {
        case PROCESS_INDICATE:
            return action.payload || false;
        default:
            return state;
    }
}

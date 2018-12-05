import {
    TEST_NOTIFICATION
} from "store/actions/types.js";

export default function (state = null, action) {
    switch (action.type) {
        case TEST_NOTIFICATION:
            return action.payload;
        default:
            return state;
    }
}
import {
    SAVE_MACHINE_UNIT_SUCCESS
} from "store/actions/types.js";

export default function (state = null, action) {
    switch (action.type) {
        case SAVE_MACHINE_UNIT_SUCCESS:
            return action.payload || false;
        default:
            return state;
    }
}
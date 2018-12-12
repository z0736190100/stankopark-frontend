import {
    SHOW_NOTIFICATION
} from "store/actions/types.js";

export const serverConnectionError = (err) => dispatch => {
    console.log("server error action creator");
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            error: {
                open: true,
                color: "danger",
                message: err.message
            }
        }
    });
};
import {
    SHOW_NOTIFICATION,
    PROCESS_INDICATE
} from "store/actions/types.js";

export const serverConnectionError = (err) => dispatch => {
    console.log("server error action creator");
    dispatch({
        type: PROCESS_INDICATE,
        payload: {
            authentication: false
        }
    });
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
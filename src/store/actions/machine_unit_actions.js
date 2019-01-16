import {
    SAVE_MACHINE_UNIT_SUCCESS,
    SHOW_NOTIFICATION,
    AUTH_PROCESSING_ERROR
} from "store/actions/types.js";

import {
    SERVER_ERROR_MESSAGE,
    NOT_AUTHORIZED_REQUEST_MESSAGE,
    SAVE_MACHINE_UNIT_SUCCESS_MESSAGE
} from "variables/API_messages.js";

import {serverConnectionError} from "store/actions/general_errors_actions.js";

import {a} from "util/axios_template.js";

// TODO: SAVE_MACHINE_UNIT_FAIL

export const saveMachineUnit = (values) => dispatch => {

    // TODO: get current user, put to request body (JWT ?)
    a.post("/api/machine_units", values)
        .then(res => {

            dispatch(saveMUnitSuccess(res.data));
            // TODO: redirect to route in case of successfull save - show new passport of MU

        })
        .catch( error => {
            // TODO: 403 error handling with NOT_AUTHORIZED_REQUEST_MESSAGE
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status >= 400 && error.response.status < 500) {

                dispatch(notAuthorizedRequestError({
                    message: `${error.response.status}: ${NOT_AUTHORIZED_REQUEST_MESSAGE}`
                }));
            } else if (error.response.status >= 500) {
                //TODO: remove attributes from serverConnectionError
                dispatch(serverConnectionError({
                    message: `${error.response.status}: ${SERVER_ERROR_MESSAGE}`
                }));
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log("The request was made but no response was received. Error request: ", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Something happened in setting up the request that triggered an Error. ", error.message);
            }
            // NB: console.log(error.config);
        });

};

const saveMUnitSuccess = (data) => dispatch => {
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            authentication: {
                open: true,
                color: "success",
                message: SAVE_MACHINE_UNIT_SUCCESS_MESSAGE
            }
        }
    });
    dispatch({
        type: SAVE_MACHINE_UNIT_SUCCESS,
        payload: data
    });
};

const notAuthorizedRequestError = (err) => dispatch => {
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            error: {
                open: true,
                color: "warning",
                message: err.message
            }
        }
    });
    // KUNG-FUSION: do we need NOT_AUTHORIZED_... action?
    dispatch({
        type: AUTH_PROCESSING_ERROR,
        payload: {
            error: {
                open: true,
                color: "warning",
                message: err.message
            }
        }
    });
};
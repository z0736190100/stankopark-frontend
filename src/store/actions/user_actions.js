import axios from "axios";
import {
    FETCH_USER,
    REGISTER_USER,
    SHOW_NOTIFICATION
} from "store/actions/types.js";
import {
    SERVER_ERROR_MESSAGE,
    REGISTRATION_ERROR_MESSAGE,
    REGISTRATION_SUCCESS_MESSAGE
} from "variables/API_messages.js";

import {serverConnectionError} from "store/actions/general_errors_actions.js";

// KUNG-FUSION: what is a profit of async-await here?
export const fetchCurrentUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");

    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const registerUser = ({firstName, lastName, email, password, password2}) => dispatch => {
    axios.post("api/users", {firstName, lastName, email, password, password2})
        .then(res => {
            dispatch(registrationSuccess());
        })
        .catch( error => {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status >= 400 && error.response.status < 500) {

                dispatch(registrationError({
                    message: `${error.response.status}: ${REGISTRATION_ERROR_MESSAGE}`
                }));
            } else if (error.response.status >= 500) {

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

const registrationSuccess = () => dispatch => {
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            registration: {
                open: true,
                color: "success",
                message: REGISTRATION_SUCCESS_MESSAGE
            }
        }
    });
};

const registrationError = err => dispatch => {
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
};
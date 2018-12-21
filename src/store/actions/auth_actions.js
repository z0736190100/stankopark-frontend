import {
    AUTH_USER,
    LOGOUT_USER,
    AUTH_ERROR,
    SHOW_NOTIFICATION
} from "store/actions/types.js";
import {
    SERVER_ERROR_MESSAGE,
    AUTH_ERROR_MESSAGE
} from "variables/API_messages.js";

import {serverConnectionError} from "store/actions/general_errors_actions.js";

import axios from "axios";

export const loginUser = ({email, password}, history) => dispatch => {
    axios.post("/api/login", {email, password})
        .then(res => {
            // save JWT to LocalStorage
            localStorage.setItem("token", res.data.token);
            dispatch(authSuccess(res.data));
            // redirect to route in case of successfull authentication
            //browserHistory.push("/dashboard");
            // history.push("/layout");
        })
        .catch( error => {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status >= 400 && error.response.status < 500) {

                dispatch(authError({
                    message: `${error.response.status}: ${AUTH_ERROR_MESSAGE}`
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

export const logoutUser = () => dispatch => {
    localStorage.removeItem("token");

    console.log("logout");

    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            logout: {
                open: true,
                color: "success",
                message: `Вы вышли из приложения. До новых встреч!`
            }
        }
    });

    dispatch({
        type: LOGOUT_USER,
        payload: null
    })
};


const authSuccess = (data) => dispatch => {
    // TODO: emit USER_PUB_DATA type for personalising views (avatar, name, etc.)
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            authentication: {
                open: true,
                color: "success",
                message: `Привет, ${data.firstName}!`
            }
        }
    });
    // TODO: for RESTful more data should be passed to payload
    dispatch({
        type: AUTH_USER,
        payload: data.token
    });
};

const authError = (err) => dispatch => {
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
    dispatch({
        type: AUTH_ERROR,
        payload: {
            error: {
                open: true,
                color: "warning",
                message: err.message
            }
        }
    });
};




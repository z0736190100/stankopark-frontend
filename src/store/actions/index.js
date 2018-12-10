import {
    AUTH_USER,
    FETCH_USER,
    LOGOUT_USER,
    AUTH_ERROR,
    REGISTER_USER,
    SHOW_NOTIFICATION
} from "store/actions/types.js";
import axios from "axios";

export const fetchUserAction = () => async dispatch => {
    const res = await axios.get("/api/current_user");

    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const switchAuth = () => async dispatch => {
    const permitted = true;
    //LOGGER
    console.log(
        "\n < actions/index.js:23 > switchAuth() --> const permitted = \n"
    );
    console.log(permitted);
    // END LOGGER
    dispatch({
        type: FETCH_USER,
        payload: permitted
    });
};

export const loginUser = ({email, password}, history) => dispatch => {
    axios.post("/api/login", {email, password})
        .then(res => {
            const isOk = res.status === 200;
            // save JWT to LocalStorage
            if (isOk) {
                localStorage.setItem("token", res.data.token);
                dispatch({
                    type: SHOW_NOTIFICATION,
                    payload: {
                        login_notif: {
                            color: "success",
                            message: `Welcome, ${res.data.firstName}!`
                        }
                    }
                });
                console.log("token is saved ", res.data.token);

                dispatch({
                    type: AUTH_USER,
                    payload: res.data.token
                });

                // redirect to route in case of successfull authentication
                //browserHistory.push("/dashboard");
                // history.push("/layout");

            } else {
                dispatch(authError("Bad credentials."));
            }
        })
        .catch(err => {
            dispatch(authError("Bad credentials."));
        });
};

export const authError = (err) => dispatch => {
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            error: {
                color: "danger",
                message: err.message || err
            }
        }
    });
    dispatch({
        type: AUTH_ERROR,
        payload: {
            error: {
                color: "danger",
                message: err.message
            }
        }
    });
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("token");

    console.log("logout");

    dispatch({
        type: LOGOUT_USER,
        payload: null
    })
};

export const registerUser = ({firstName, lastName, email, password, password2}) => dispatch => {
    axios.post("api/users", {firstName, lastName, email, password, password2})
        .then(res => {
            const payload = res.data;
            const isOk = res.status === 200;
            payload.notifications = {
                color: isOk ? "success" : "warning",
                message: isOk ? "Registration successfully accomplished, tovarish'!" : "Smth went wrong..."
            };
            dispatch({
                type: SHOW_NOTIFICATION,
                payload
            });
            return isOk;
        })
        // dispatch ERROR_ACTION here
        .catch(err => {
            dispatch({
                type: SHOW_NOTIFICATION,
                payload: {
                    error: {
                        color: "danger",
                        message: err.message
                    }
                }
            });
        })
};

export const testNotification = () => dispatch => {
    console.log("test notification action");
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: {
            first: {
                color: "success",
                open: true,
                message: "first"
            },
            second: {
                color: "warning",
                open: true,
                message: "second"
            }
        }
    });
};

export const clearNotification = () => dispatch => {
    console.log("clear notification action");
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: null
    })
};

export const toRegForm = () => dispatch => {
    dispatch({
        type: REGISTER_USER,
        payload: {welcomeLogin: false}
    });
};

export const toLoginForm = () => dispatch => {
    dispatch({
        type: REGISTER_USER,
        payload: {welcomeLogin: true}
    });
};
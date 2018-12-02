import {
    AUTH_USER,
    FETCH_USER,
    LOGOUT_USER,
    AUTH_ERROR,
    REGISTER_USER
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

export const loginUser = ({email, password}) => dispatch => {
    axios.post("/api/login", {email, password})
        .then(res => {
            dispatch({
                type: AUTH_USER,
                payload: res.data.token
            });
            // save JWT to LocalStorage
            localStorage.setItem("token", res.data.token);
            // redirect to route in case of successfull authentication
            //browserHistory.push("/dashboard");
        })
        .catch(err => {
            dispatch(authError("Bad credentials."));
        });
};

export const authError = (err) => dispatch => {
    dispatch({
        type: AUTH_ERROR,
        payload: err
    });
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("token");
    dispatch({
        type: LOGOUT_USER
    })
};

export const registerUser = ({firstName, lastName, email, password, password2}) => dispatch => {
    axios.post("api/users", {firstName, lastName, email, password, password2})
        .then(res => {
            console.log(res.data);
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
};

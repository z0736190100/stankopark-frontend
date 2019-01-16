import {
    REGISTER_USER,
    SHOW_NOTIFICATION
} from "store/actions/types.js";

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

export const clearNotification = () => dispatch => {
    dispatch({
        type: SHOW_NOTIFICATION,
        payload: null
    })
};
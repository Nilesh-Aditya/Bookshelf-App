import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "./types";

import {
    USER_LOADED,
    AUTH_ERROR
} from "./types";


export const loadUser = async (dispatch, getState) => {
    try {
        const res = await fetch('/api/login');
        const data = await res.json();

        dispatch({ type: 'auth/loginSucces', payload: data });
        
    } catch (error) {
        dispatch({ type: 'auth/error', payload: error });
    }
}
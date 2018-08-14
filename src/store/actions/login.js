import * as actionTypes from '../actions/actionTypes';
import {} from 'axios';

export const loginStart =()=>{
    return {
        type: actionTypes.LOGIN_START
    }
}

export const loginSuccess =(authToken)=>{
    return {
        type: actionTypes.LOGIN_SUCCESS,
        authToken : authToken
    }
}

export const loginFailed =()=>{
    return {
        type: actionTypes.LOGIN_FAILED
    }
}

export const logoutSuccess =()=>{
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}


export const login=(userName, password) => {
    return dispatch => {
        dispatch(loginStart())
        dispatch(loginSuccess())        
    }
}

export const logout=() => {
    return dispatch => {
        dispatch(logoutSuccess())
    }
}
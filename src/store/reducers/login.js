import * as actionTypes  from '../actions/actionTypes';

const initialState = {
    loading: false,
    errors: null,
    authToken: null,
    login:false
}

const reducer =(state = initialState, action )=> {
    switch(action.type){
        case actionTypes.LOGIN_START : 
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS : 
        return {
            ...state,
            loading: false,
            authToken: action.authToken,
            errors: null,
            login: true
        }
        case actionTypes.LOGIN_FAILED : 
        return {
            ...state,
            loading: false,
            errors: action.errors,
            login:false
        }
        case actionTypes.LOGOUT_SUCCESS : 
        return {
            ...state,
            loading: false,
            errors: null,
            authToken:null,
            login:false
        }

        default: return {...state}
    }
}

export default reducer;
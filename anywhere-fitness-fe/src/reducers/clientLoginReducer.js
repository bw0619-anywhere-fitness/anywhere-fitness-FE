import {
    CLIENT_LOGIN_START,
    CLIENT_LOGIN_SUCCESS,
    CLIENT_LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../actions';

const initialState = {
    error: "",
    clientLoggingIn: false,
    clientLoggedIn: false,
    client: ""
};

export const clientLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_LOGIN_START:
            return {
                ...state,
                error: "",
                clientLoggingIn: true
            }
        case CLIENT_LOGIN_SUCCESS:
            return {
                ...state,
                errpr: "",
                clientLoggingIn: false,
                clientLoggedIn: true,
                client: action.payload
            }
        case CLIENT_LOGIN_FAILURE:
            return {
                ...state,
                clientLoggingIn: false,
                clientLoggedIn: false,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                clientLoggedIn: false
            }
        default:
            return state;
    }
}
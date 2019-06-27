import {
    CLIENT_REGISTER_START,
    CLIENT_REGISTER_SUCCESS,
    CLIENT_REGISTER_FAILURE
} from '../actions';

const initialState = {
    clientUser: [],
    creatingClientUser: false,
    error: ""
}

export const clientRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_REGISTER_START:
            return {
                ...state,
                error: "",
                creatingClientUser: true
            }
        case CLIENT_REGISTER_SUCCESS:
            return {
                ...state,
                clientUser: action.payload,
                creatingClientUser: false
            }
        case CLIENT_REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingClientUser: false
            }
        default:
            return state;
    }
}
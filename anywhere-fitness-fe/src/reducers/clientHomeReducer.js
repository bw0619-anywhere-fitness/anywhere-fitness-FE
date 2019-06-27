import {
    GETALLCLASSES_CLIENT_START,
    GETALLCLASSES_CLIENT_SUCCESS,
    GETALLCLASSES_CLIENT_FAILURE
} from '../actions';

const initialState = {
    clientClasses: [],
    gettingClasses: false,
    error: ""
}

export const clientHomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLCLASSES_CLIENT_START:
            return {
                ...state,
                error: "",
                gettingClasses: true
            }
        case GETALLCLASSES_CLIENT_SUCCESS:
            return {
                ...state,
                clientClasses: action.payload,
                gettingClasses: false
            }
        case GETALLCLASSES_CLIENT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
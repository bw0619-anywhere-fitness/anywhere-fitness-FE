import {
  GETALLCLASSES_CLIENT_START,
  GETALLCLASSES_CLIENT_SUCCESS,
  GETALLCLASSES_CLIENT_FAILURE,
  GETCLASS_CLIENT_BYID_START,
  GETCLASS_CLIENT_BYID_SUCCESS,
  GETCLASS_CLIENT_BYID_FAILURE
} from "../actions";

const initialState = {
  clientClasses: [],
  clientSignUpClasses: [],
  gettingClass: false,
  gettingClasses: false,
  error: ""
};

export const clientHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLCLASSES_CLIENT_START:
      return {
        ...state,
        error: "",
        gettingClasses: true
      };
    case GETALLCLASSES_CLIENT_SUCCESS:
      return {
        ...state,
        clientClasses: action.payload,
        gettingClasses: false
      };
    case GETALLCLASSES_CLIENT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case GETCLASS_CLIENT_BYID_START:
      return {
        ...state,
        error: "",
        gettingClass: true
      };
    case GETCLASS_CLIENT_BYID_SUCCESS:
      return {
        ...state,
        clientSignUpClasses: action.payload,
        gettingClass: false
      };
    case GETCLASS_CLIENT_BYID_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

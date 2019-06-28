import {
  GETALLCLASSES_CLIENT_START,
  GETALLCLASSES_CLIENT_SUCCESS,
  GETALLCLASSES_CLIENT_FAILURE,
  GETCLASS_CLIENT_BYID_START,
  GETCLASS_CLIENT_BYID_SUCCESS,
  GETCLASS_CLIENT_BYID_FAILURE,
  SIGNUP_CLIENT_CLASS_START,
  SIGNUP_CLIENT_CLASS_SUCCESS,
  SIGNUP_CLIENT_CLASS_FAILURE
} from "../actions";

const initialState = {
  clientClasses: [],
  clientSignUpClasses: [],
  clientSignUpClass: "",
  gettingClass: false,
  gettingClasses: false,
  signingUpClass: false,
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
    case SIGNUP_CLIENT_CLASS_START:
      return {
        ...state,
        error: "",
        signingUpClass: true
      };
    case SIGNUP_CLIENT_CLASS_SUCCESS:
      return {
        ...state,
        clientSignUpClass: action.payload,
        signingUpcalss: false
      };
    case SIGNUP_CLIENT_CLASS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { registerReducer } from "./registerReducer";
import { loginReducer } from "./loginReducer";
import { homeReducer } from './homeReducer';
import { clientRegisterReducer } from './clientRegisterReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    homeReducer,
    clientRegisterReducer
});
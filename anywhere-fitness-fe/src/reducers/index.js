import { combineReducers } from 'redux';
import { registerReducer } from "./registerReducer";
import { loginReducer } from "./loginReducer";
import { homeReducer } from './homeReducer';
import { clientRegisterReducer } from './clientRegisterReducer';
import { clientLoginReducer } from './clientLoginReducer';
import { clientHomeReducer } from './clientHomeReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    homeReducer,
    clientRegisterReducer,
    clientLoginReducer,
    clientHomeReducer
});
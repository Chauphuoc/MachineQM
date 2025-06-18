import {combineReducers} from '@reduxjs/toolkit';
import AuthReducer from './feature/auth/middleware/auth-reducer';

const rootReducers = combineReducers({
  AuthReducer
});

export default rootReducers;

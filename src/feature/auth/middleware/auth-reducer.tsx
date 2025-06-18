import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {AuthInitialState} from '../interface';

const initialState: AuthInitialState = {
    username: '',
    password: ''
};

export const AuthReducer = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    actionSetUsername: (
      state: AuthInitialState,
      action: PayloadAction<string>
    ) => {
      state.username = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  actionSetUsername
} = AuthReducer.actions;

export default AuthReducer.reducer;

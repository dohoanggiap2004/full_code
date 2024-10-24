import { combineReducers, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isLogin: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isLogin = true;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const authReducer = combineReducers({
    login: loginSlice.reducer
})

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;
export default authReducer

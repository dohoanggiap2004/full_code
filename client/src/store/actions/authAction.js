import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure } from './loginSlice';

export const login = (formData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post('/auth/login', formData);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.response?.data.message || error.message));
  }
};

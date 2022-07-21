import types from "store/types";

export const setSignUpError = (data) => ({
  type: types.SET_SIGN_UP_ERROR,
  payload: data,
});

export const setLoginError = (data) => ({
  type: types.SET_LOGIN_ERROR,
  payload: data,
});

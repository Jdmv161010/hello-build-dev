import { postRequest } from "api";
import types from "store/types";
import { setLoginError, setSignUpError } from "./ui";

export const setLogin = (data) => ({
  type: types.SET_LOGIN,
  payload: data,
});

export const setLogout = () => ({
  type: types.SET_LOGOUT,
});

export function registerUser(user, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setSignUpError(false));
      const body = { data: { user } };
      const response = await postRequest("/session/register", body);

      if (response instanceof Error) throw response;

      navigate("/auth");
    } catch (error) {
      dispatch(setSignUpError(true));
      console.log(error);
    }
  };
}

export function authUser(user) {
  return async (dispatch) => {
    try {
      dispatch(setLoginError(false));
      const body = { data: { user } };
      const response = await postRequest("/session/login", body);

      if (response instanceof Error) throw response;

      const { data } = response.data;

      if ("isAuthenticated" in data && data.isAuthenticated) {
        sessionStorage.setItem("isAuthenticated", true);
        sessionStorage.setItem("user", data.user);
        dispatch(setLogin(true));
      }
    } catch (error) {
      dispatch(setLoginError(true));
      console.log(error);
    }
  };
}

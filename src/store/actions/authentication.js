import { postRequest } from "api";
import types from "store/types";
import { setLoginError, setSignUpError } from "./ui";

export const setAuth = (data) => ({
  type: types.SET_AUTH,
  payload: data,
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
        dispatch(setAuth(true));
      }
    } catch (error) {
      dispatch(setLoginError(true));
      console.log(error);
    }
  };
}

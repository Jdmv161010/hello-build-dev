import { postRequest } from "api";
import types from "store/types";

export const setRepositories = (data) => ({
  type: types.SET_REPOSITORIES,
  payload: data,
});

export function getRepositories() {
  return async (dispatch, getState) => {
    try {
      const user = sessionStorage.getItem("user");

      const body = { data: { user } };
      const response = await postRequest("/profile/get-repositories", body);

      if (response instanceof Error) throw response;
      const { data } = response.data;

      dispatch(setRepositories(data));
    } catch (error) {
      console.log(error);
    }
  };
}

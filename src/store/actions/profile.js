import { postRequest } from "api";
import types from "store/types";

export const setRepositories = (data) => ({
  type: types.SET_REPOSITORIES,
  payload: data,
});

export function getRepositories() {
  return async (dispatch) => {
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

export function saveFavRepositories(favRepos) {
  return async () => {
    try {
      const user = sessionStorage.getItem("user");

      const body = { data: { user, favRepos } };
      const response = await postRequest("/profile/save-repositories", body);

      if (response instanceof Error) throw response;

      window.alert("Successfully saved");
    } catch (error) {
      console.log(error);
    }
  };
}

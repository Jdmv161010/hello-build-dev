import types from "store/types";

const initialState = {
  isAuthenticated: false,
  repositories: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case types.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;

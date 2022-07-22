import types from "store/types";

const initialState = {
  isAuthenticated: false,
  repositories: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case types.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    case types.SET_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default appReducer;

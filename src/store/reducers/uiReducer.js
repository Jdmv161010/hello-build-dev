import types from "store/types";

const initialState = {
  isSignUpError: false,
  isLoginError: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SIGN_UP_ERROR:
      return {
        ...state,
        isSignUpError: action.payload,
      };
    case types.SET_LOGIN_ERROR:
      return {
        ...state,
        isLoginError: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;

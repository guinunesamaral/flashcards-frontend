import * as authTypes from "./Types";
import { authDatabase } from "../../shared/auth.database";

const initialState = {
  auth: {
    isSignedIn: false,
    email: "",
    password: "",
  },
};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case authTypes.SET_AUTH:
    case authTypes.SIGN_IN:
      const found = authDatabase.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (found) {
        return {
          auth: { isSignedIn: true, ...action.payload },
        };
      }
      return { ...state };
    case authTypes.SIGN_UP:
      return { ...state };
    default:
      return state;
  }
};

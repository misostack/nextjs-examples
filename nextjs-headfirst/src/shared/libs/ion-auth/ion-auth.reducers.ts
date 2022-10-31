import { IonAuthSession } from "./index";
import { Dispatch, Reducer } from "react";
// actions
export interface IonAuthActions {
  type: "signedIn" | "signedOut";
  payload?: any;
}

// reducers
const ionAuthReducers: Reducer<IonAuthSession, IonAuthActions> = (
  state: IonAuthSession,
  action: IonAuthActions
) => {
  // signIn
  if (action.type === "signedIn") {
    // set session
    // set state
    return {
      ...action.payload,
    };
  }
  // signOut
  if (action.type === "signedOut") {
    // set session
    // set state
    return {
      user: null,
      accessToken: "",
      refreshToken: "",
      permissions: [],
    };
  }
  return state;
};

// define dispatch actions
const ionAuthActions = {
  signIn: (dispatch: Dispatch<IonAuthActions>, payload: IonAuthSession) => {
    dispatch({
      type: "signedIn",
      payload,
    });
  },
  signOut: (dispatch: Dispatch<IonAuthActions>) => {
    dispatch({
      type: "signedOut",
    });
  },
};

export { ionAuthReducers, ionAuthActions };

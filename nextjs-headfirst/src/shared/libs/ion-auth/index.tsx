import { createContext, Dispatch, useContext, useReducer } from "react";
import {
  ionAuthActions,
  IonAuthActions,
  ionAuthReducers,
} from "./ion-auth.reducers";
// initialAuthStates
export interface IonAuthSession {
  uid: any;
  accessToken: any;
  refreshToken: any;
  permissions: Array<any>;
}
const initialAuthStates: IonAuthSession = {
  uid: null,
  accessToken: "",
  refreshToken: "",
  permissions: [],
};
// create context
const AuthContext = createContext(initialAuthStates);
const AuthDispatchContext = createContext<Dispatch<IonAuthActions> | null>(
  null
);

const IonAuthProvider = ({
  children,
  initialSession = initialAuthStates,
}: {
  initialSession: IonAuthSession;
  children: JSX.Element[] | JSX.Element;
}) => {
  const [session, dispatch] = useReducer(ionAuthReducers, initialSession);
  return (
    <>
      <AuthContext.Provider value={session}>
        <AuthDispatchContext.Provider value={dispatch}>
          {children}
        </AuthDispatchContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

const useSession = () => {
  return useContext(AuthContext);
};

const useIonAuthDispatch = () => {
  return useContext(AuthDispatchContext) as Dispatch<IonAuthActions>;
};

const signedIn = ionAuthActions.signIn;
const signedOut = ionAuthActions.signOut;

export { IonAuthProvider, signedIn, signedOut, useSession, useIonAuthDispatch };

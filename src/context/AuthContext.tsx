import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

//Interface para saber como luce el context.
export interface AuthState {
    isLogIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//Estado Inicial del State
export const authInitialState: AuthState = {
    isLogIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

//Interfaz para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Exponer el proveedor de información
export const AuthProvider = ({children}:any)=>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    //Creando el método SignIn;
    const signIn = () => {
        dispatch({ type: 'SignIn'});
    }

    return(
        <AuthContext.Provider value={{ 
            authState,
            signIn,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

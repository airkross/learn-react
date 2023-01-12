import { createContext } from "react";

interface ContextState {
    isAuth: boolean
    isAppLoading: boolean
    setIsAuth: (isAuth: ContextState['isAuth']) => void
}

export const AuthContext = createContext({} as ContextState)
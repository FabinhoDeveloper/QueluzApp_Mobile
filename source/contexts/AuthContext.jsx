import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [isSigned, setIsSigned] = useState(!!user)

    async function login(usuario) {
        const user = usuario

        setUser(user)
        await AsyncStorage.setItem('@user', JSON.stringify(user))
    }

    function signIn( usuario ) {
        login(usuario)
    }

    function enterWithoutLogin() {
        setIsSigned(true)
    }
    
    async function logout() {
        if (AsyncStorage.getItem("@user")) {
            await AsyncStorage.removeItem("@user")
        }
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ isSigned, login, logout, signIn, enterWithoutLogin, user }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

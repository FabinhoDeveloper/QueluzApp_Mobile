import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const isSigned = !!user

    async function login(usuario) {
        setUser(usuario)
        await AsyncStorage.setItem('@user', JSON.stringify(usuario))
    }

    function signIn( first_name, surname, cpf, cellphone, email, password, password_confirmation, address ) {
        const user = { first_name, surname, cpf, cellphone, email, address }
        setUser(user)
    }
    
    async function logout() {
        await AsyncStorage.removeItem("@user")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ isSigned, login, logout, signIn, user }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const isSigned = !!user

    async function login(usuario) {
        const user = { 
            userId: usuario.idUsuario,
            first_name: usuario.primeiroNome, 
            surname: usuario.sobrenome, 
            cpf: usuario.cpf, 
            cellphone: usuario.telefone, 
            email: usuario.email, 
            address: usuario.endereco
        }

        setUser(user)
        await AsyncStorage.setItem('@user', JSON.stringify(user))
    }

    function signIn( usuario ) {
        login(usuario)
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

import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [isSigned, setIsSigned] = useState(false)

    const userSigned = { 
        id: 1,
        first_name: "Fábio", 
        surname: "Santos", 
        cpf: "17741576755",
        email: "fabio.ti@queluz.sp.gov.br", 
        address: "Rua das Flores, 123, Queluz", 
        cellphone: "(24) 99275-3941"
    }

    function login( cpf, password ) {
        setIsSigned(true)
        setUser(userSigned)
    }

    function signIn( first_name, surname, cpf, cellphone, email, password, password_confirmation, address ) {
        setIsSigned(true)
        setUser(userSigned)
    }
    
    function logout() {
        setIsSigned(false)
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

import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [isSigned, setIsSigned] = useState(false)

    const userSigned = { 
        id: 1,
        first_name: "Fábio", 
        surname: "Santos", 
        email: "fabio.ti@queluz.sp.gov.br", 
        address: "Rua das Flores, 123, Queluz", 
        cellphone: "(24) 99275-3941"
    }

    function login( cpf, password ) {
        setIsSigned(true)
        setUser(userSigned)
    }

    function logout() {
        setIsSigned(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ isSigned, login, logout, user }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

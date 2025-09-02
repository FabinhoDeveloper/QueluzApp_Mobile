import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [isSigned, setIsSigned] = useState(false)

    function login( cpf, password ) {
        setIsSigned(true)
    }

    function logout() {
        setIsSigned(false)
    }

    return (
        <AuthContext.Provider value={{ isSigned, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

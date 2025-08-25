import { useState } from "react"
import { StyleSheet, View } from "react-native"

export default function Login() {
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    
    function handleLogin() {
        // Realiza o fetch com a API
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>

            </View>

            <View style={styles.loginForm}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

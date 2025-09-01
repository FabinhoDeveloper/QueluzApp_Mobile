import { useState } from "react"
import { TouchableWithoutFeedback, StyleSheet, View, Text, Image, TouchableOpacity, Keyboard, ActivityIndicator, Alert } from "react-native"

import FormInput from "../components/FormInput"
import PrimaryButton from "../components/PrimaryButton"

import applyCpfMask from "../utils/applyCpfMask"

export default function Login({ navigation }) {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    // Função para lidar com a mudança do CPF
    const handleCpfChange = (text) => {
        const maskedCpf = applyCpfMask(text)
        setCpf(maskedCpf)
    }

    // Função para obter apenas os dígitos do CPF (para enviar para API)
    const getCpfDigits = () => {
        return cpf.replace(/\D/g, '')
    }

    const handleLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigation.navigate("MainStackNavigator")
            setIsLoading(false)
        }, 1000)        
        // Realiza o fetch com a API
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainContent}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("../../assets/images/logo_temporario.png")}/>
                    </View>
                    <View style={styles.formContainer}>
                        <FormInput
                            name="Seu CPF"
                            keyboardType="numeric"
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChangeText={handleCpfChange} // Usar a função com máscara
                        />
                        <FormInput
                            name="Senha"
                            placeholder="Digite sua Senha"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                        />


                        <TouchableOpacity>
                            <Text style={styles.changePassword}>Esqueci minha senha</Text>    
                        </TouchableOpacity>
                    </View>
                
                    <View style={styles.buttonContainer}>
                        <PrimaryButton text={
                            !isLoading ?
                            'Entrar' :
                            <ActivityIndicator size={24} color={"#F5F5F7"}/>    
                        } onPress={handleLogin}/>
                        <PrimaryButton text='Continuar sem Cadastro' onPress={handleLogin}/>

                        <View style={styles.registerContainer}>
                            <Text style={styles.registerHelper}>Ainda não possui uma conta?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                <Text style={styles.register}>Registre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.footerMainTextContainer}>
                            <Text style={styles.footerMainTextDescription}><Text style={styles.footerMainTextAppName}>Queluz + | </Text> Desenvolvido por Diretoria de Tecnologia da</Text>
                            <Text style={styles.footerMainTextDescription}>Informação e Secretaria de Comunicação</Text>
                        </View>
                        <Text style={styles.footerHallName}>Prefeitura Municipal de Queluz</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7',
    },
    mainContent: {
        flex: 1,
        paddingTop: 165,
        alignItems: 'center',
    },
    logoContainer: {
        marginBottom: 42,
        alignItems: 'center'
    },
    logo: {
        width: 152,
        height: 85
    },    
    formContainer: {
        gap: 20.7,
        marginBottom: 18
    },
    changePassword: {
        fontSize: 12,
        fontFamily: 'Poppins_500Medium',
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        gap: 5.7
    },
    registerContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        marginTop: 18,
        marginBottom: 70
    },
    registerHelper: {
        fontSize: 10,
        fontFamily: 'Poppins_500Medium'
    },
    register: {
        fontSize: 10,
        fontFamily: 'Poppins_500Medium',
        color: '#0C447F',
        textDecorationLine: 'underline'
    },
    footer: {
        width: 254,
        height: 59,
        gap: 19,
        alignItems: 'center',
    },
    footerMainTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    footerMainTextAppName: {
            fontSize: 7,
            fontFamily: 'Poppins_300Light',
    },
    footerMainTextDescription: {
            fontSize: 7,
            fontFamily: 'Poppins_200ExtraLight'
    },
    footerHallName: {
            fontSize: 7,
            fontFamily: 'Poppins_200ExtraLight'
    }
});

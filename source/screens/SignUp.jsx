import { useState } from "react"
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native"

import FormInput from "../components/FormInput"
import CustomButton from "../components/CustomButton"
import SearchBox from "../components/SearchBox"

import applyCpfMask from "../utils/applyCpfMask"

export default function SingUp({ navigation }) {
    // Função para lidar com a mudança do CPF
    const handleCpfChange = (text) => {
        const maskedCpf = applyCpfMask(text)
        setCpf(maskedCpf)
    }

    // Função para obter apenas os dígitos do CPF (para enviar para API)
    const getCpfDigits = () => {
        return cpf.replace(/\D/g, '')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainContent}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../assets/images/logo_temporario.png")}/>
                </View>
                <View style={styles.formContainer}>
                    <FormInput
                        name="Primeiro Nome"
                        placeholder="Digite seu primeiro nome"  
                    />
                    <FormInput
                        name="Sobrenome"
                        placeholder="Digite seu sobrenome"
                    />
                    <FormInput
                        name="CPF"
                        keyboardType="numeric"
                        placeholder="Digite seu CPF"
                    />
                    <FormInput
                        name="Telefone"
                        placeholder="Digite seu telefone"
                    />
                    <FormInput
                        name="E-mail"
                        placeholder="Digite seu email"
                    />
                    <FormInput
                        name="Senha"
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                    />
                    <FormInput
                        name="Confirmação da Senha"
                        placeholder="Digite sua senha novamente"
                        secureTextEntry={true}
                    />
                    <FormInput
                        name="Endereço"
                        placeholder="Digite seu endereço"                       
                    />
                </View>
            
                <View style={styles.buttonContainer}>
                    <CustomButton text='Cadastrar-se'/>

                    <View style={styles.registerContainer}>
                        <Text style={styles.registerHelper}>Já possui uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.register}>Login</Text>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7',
    },
    mainContent: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center'
    },
    logoContainer: {
        marginBottom: 32,
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
        marginTop: 10,
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
        fontSize: 12,
        fontFamily: 'Poppins_500Medium'
    },
    register: {
        fontSize: 12,
        fontFamily: 'Poppins_500Medium',
        color: '#0C447F',
        textDecorationLine: 'underline'
    },
    footer: {
        marginBottom: 50,
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

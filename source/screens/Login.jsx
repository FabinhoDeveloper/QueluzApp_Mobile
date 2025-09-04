import { useState } from "react"
import { TouchableWithoutFeedback, StyleSheet, View, Text, Image, TouchableOpacity, Keyboard, ActivityIndicator } from "react-native"
import { useForm, Controller } from 'react-hook-form'

import FormInput from "../components/FormInput"
import PrimaryButton from "../components/PrimaryButton"
import { useAuth } from "../contexts/AuthContext"

import applyCpfMask from "../utils/applyCpfMask"

export default function Login({ navigation }) {
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useAuth()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            cpf: "",
            password: ""
        },
        mode: "onSubmit"
    })

    const onSubmit = (data) => {
        console.log(data) // aqui você vê o CPF e senha enviados pelo form
        setIsLoading(true)
        const cpfDigits = data.cpf.replace(/\D/g, '') // remove máscara
        setTimeout(() => {
            login(cpfDigits, data.password)
            setIsLoading(false)
        }, 1000)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainContent}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("../../assets/images/logo_temporario.png")}/>
                    </View>
                    <View style={styles.formContainer}>
                        {/* CPF */}
                        <Controller
                            control={control}
                            name="cpf"
                            rules={[]}
                            render={({ field: { value, onChange, onBlur } }) => (
                                <FormInput
                                    name="CPF"
                                    placeholder="Digite seu CPF"
                                    keyboardType="numeric"
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={text => onChange(applyCpfMask(text))}
                                    error={errors.cpf?.message}
                                />
                            )}
                        />
                        {errors.cpf && <Text style={styles.errorMessage}>{errors.cpf.message}</Text>}

                        {/* Senha */}
                        <Controller
                            control={control}
                            name="password"
                            rules={[]}
                            render={({ field: { value, onChange, onBlur } }) => (
                                <FormInput
                                    name="Senha"
                                    placeholder="Digite sua Senha"
                                    secureTextEntry
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    error={errors.password?.message}
                                />
                            )}
                        />
                        {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

                        <TouchableOpacity>
                            <Text style={styles.changePassword}>Esqueci minha senha</Text>    
                        </TouchableOpacity>
                    </View>
                
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            text={!isLoading ? 'Entrar' : <ActivityIndicator size={24} color={"#F5F5F7"}/>}
                            onPress={handleSubmit(onSubmit)}
                        />
                        <PrimaryButton text='Continuar sem Cadastro' onPress={handleSubmit(onSubmit)}/>

                        <View style={styles.registerContainer}>
                            <Text style={styles.registerHelper}>Ainda não possui uma conta?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                <Text style={styles.register}>Registre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.footerMainTextContainer}>
                            <Text style={styles.footerMainTextDescription}>
                                <Text style={styles.footerMainTextAppName}>Queluz + | </Text> Desenvolvido por Diretoria de Tecnologia da
                            </Text>
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
    container: { flex: 1, backgroundColor: '#F5F5F7' },
    mainContent: { flex: 1, paddingTop: 165, alignItems: 'center' },
    logoContainer: { marginBottom: 42, alignItems: 'center' },
    logo: { width: 152, height: 85 },
    formContainer: { gap: 20.7, marginBottom: 18, width: 313 },
    errorMessage: { color: 'red', marginTop: -10 },
    changePassword: { fontSize: 12, fontFamily: 'Poppins_500Medium', textDecorationLine: 'underline' },
    buttonContainer: { gap: 5.7 },
    registerContainer: { flexDirection: 'row', gap: 5, justifyContent: 'center', marginTop: 18, marginBottom: 70 },
    registerHelper: { fontSize: 10, fontFamily: 'Poppins_500Medium' },
    register: { fontSize: 10, fontFamily: 'Poppins_500Medium', color: '#0C447F', textDecorationLine: 'underline' },
    footer: { width: 254, height: 59, gap: 19, alignItems: 'center' },
    footerMainTextContainer: { flexDirection: 'column', alignItems: 'center' },
    footerMainTextAppName: { fontSize: 7, fontFamily: 'Poppins_300Light' },
    footerMainTextDescription: { fontSize: 7, fontFamily: 'Poppins_200ExtraLight' },
    footerHallName: { fontSize: 7, fontFamily: 'Poppins_200ExtraLight' }
})

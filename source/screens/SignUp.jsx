import { StyleSheet, View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../contexts/AuthContext"

import FormInput from "../components/FormInput"
import PrimaryButton from "../components/PrimaryButton"
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer"

import applyCpfMask from "../utils/applyCpfMask"
import applyPhoneMask from "../utils/applyPhoneMask"
import isCpfValid from "../utils/isCpfValid"
import getCpfDigits from "../utils/getCpfDigits"

export default function SignUp() {
    const navigation = useNavigation()
    const {} = useAuth()
    const { control, handleSubmit, formState: { errors }} = useForm({
        defaultValues: { 
            first_name: "", 
            surname: "", 
            cpf: "", 
            cellphone: "", 
            email: "", 
            password: "", 
            password_confirmation: "", 
            address: "" 
        },
        mode: "onSubmit"
    })

    const handleSignUp = (data) => {
        console.log(data)
        navigation.navigate()
    }

    return (
        <KeyboardAvoidingContainer>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainContent}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("../../assets/images/logo_temporario.png")}/>
                    </View>
                    <View style={styles.formContainer}>
                        <Controller
                            control={control}
                            name="first_name"
                            rules={{ required: "Campo obrigatório" }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="Primeiro nome"
                                    placeholder="Digite seu primeiro nome"
                                    value={value}
                                    onChangeText={text => onChange(text)}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.first_name && <Text style={styles.errorMessage}>{errors.first_name.message}</Text>}

                        <Controller
                            control={control}
                            name="surname"
                            rules={{ required: "Campo obrigatório" }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="Sobrenome"
                                    placeholder="Digite seu sobrenome"
                                    value={value}
                                    onChangeText={text => onChange(text)}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.surname && <Text style={styles.errorMessage}>{errors.surname.message}</Text>}

                        <Controller
                            control={control}
                            name="cpf"
                            rules={{ 
                                required: "Campo obrigatório", 
                                validate: (v) => isCpfValid(v.replace(/\D/g, "")) || "CPF inválido" 
                            }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="CPF"
                                    placeholder="Digite seu CPF"
                                    keyboardType="numeric"
                                    value={value}
                                    onChangeText={text => onChange(applyCpfMask(text))}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.cpf && <Text style={styles.errorMessage}>{errors.cpf.message}</Text>}

                        <Controller
                            control={control}
                            name="cellphone"
                            rules={{
                                required: "Campo obrigatório",
                                validate: (v) => (v.replace(/\D/g, "").length === 11 || "Telefone inválido")
                            }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="Telefone celular"
                                    placeholder="Digite seu telefone"
                                    keyboardType="numeric"
                                    value={value}
                                    onChangeText={text => onChange(applyPhoneMask(text))}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.cellphone && <Text style={styles.errorMessage}>{errors.cellphone.message}</Text>}

                        <Controller
                            control={control}
                            name="email"
                            rules={{ 
                                required: "Campo obrigatório",
                                validate: (v) => v.includes("@") || "E-mail inválido"
                            }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="E-mail"
                                    placeholder="Digite seu email"
                                    value={value}
                                    onChangeText={text => onChange(text)}
                                    onBlur={onBlur}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            )}
                        />
                        {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

                        <Controller
                            control={control}
                            name="password"
                            rules={{ required: "Campo obrigatório" }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="Senha"
                                    placeholder="Digite sua senha"
                                    secureTextEntry={true}
                                    value={value}
                                    onChangeText={text => onChange(text)}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

                        <Controller
                            control={control}
                            name="password_confirmation"
                            rules={{ required: "Campo obrigatório" }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="Confirmação da Senha"
                                    placeholder="Digite sua senha novamente"
                                    secureTextEntry={true}
                                    value={value}
                                    onChangeText={text => onChange(text)}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.password_confirmation && <Text style={styles.errorMessage}>{errors.password_confirmation.message}</Text>}

                        <Controller
                            control={control}
                            name="address"
                            rules={{ required: "Campo obrigatório" }}
                            render={({field: {value, onChange, onBlur}}) => (
                                <FormInput
                                    name="Endereço"
                                    placeholder="Digite seu endereço"
                                    value={value}
                                    onChangeText={text => onChange(text)}
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.address && <Text style={styles.errorMessage}>{errors.address.message}</Text>}
                    </View>
                
                    <View style={styles.buttonContainer}>
                        <PrimaryButton text='Cadastrar-se' onPress={handleSubmit(handleSignUp)}/>

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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7',
        marginHorizontal: 20
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
        marginBottom: 18,
        width: 313,
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
    },
    errorMessage: {
        color: "red",
        marginTop: -15
    }
});

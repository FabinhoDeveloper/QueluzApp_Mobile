import { Alert, StyleSheet, Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";
import ProfilePic from "../components/ProfilePic";
import PrimaryButton from "../components/PrimaryButton";
import FormInput from "../components/FormInput";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import applyCpfMask from "../utils/applyCpfMask";
import applyPhoneMask from "../utils/applyPhoneMask";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import { Controller, useForm } from "react-hook-form";
import api from '../services/api.js'

export default function Profile() {
    const { user, logout } = useAuth()

    const { register, handleSubmit, control, setValue } = useForm({
        defaultValues: {
            primeiroNome: user.primeiroNome,
            sobrenome: user.sobrenome,
            email: user.email,
            telefone: user.telefone,
            cpf: user.cpf,
            endereco: user.endereco
        }
    });
    const [editable, setEditable] = useState(false)

    const excluirConta = () => {
        Alert.alert("Conta excluida com sucesso")
    }

    const editarConta = async (data) => {
        try {
            const response = await api.put(`/user/update/${user.idUsuario}`, data)
            
            if (!response.error) {
                Alert.alert("Sucesso", "Conta editada com sucesso")
            } else {
                Alert.alert("Erro", "Não foi possível editar a conta")
            }
        } catch (error) {
            console.error('Erro ao editar conta:', error)
            Alert.alert(
                "Erro",
                "Ocorreu um erro ao editar a conta. Tente novamente mais tarde."
            )
        }
    }

    return (
        <ScrollViewWithMarginBottom style={styles.container} size={100}>
            <SecondaryTabHeader/>
            <View style={styles.mainContent}>
                <View style={styles.profileArea}>
                    <ProfilePic/>    
                </View>
                <View style={styles.infoArea}>
                    <View style={styles.userInfoArea}>
                        { editable &&
                        <>
                            <Controller
                                control={control}
                                name="primeiroNome"
                                render={({ field: { value, onChange } }) => (
                                    <FormInput name="Primeiro Nome" value={value} onChangeText={onChange} />
                                )}
                            />
                            <Controller
                                control={control}
                                name="sobrenome"
                                render={({ field: { value, onChange } }) => (
                                    <FormInput name="Sobrenome" value={value} onChangeText={onChange} />
                                )}
                            />
                        </>
                        }
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { value, onChange } }) => (
                                <FormInput name="Email" value={value} editable={editable} onChangeText={onChange} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="telefone"
                            render={({ field: { value, onChange } }) => (
                                <FormInput
                                    name="Telefone"
                                    value={editable ? value : applyPhoneMask(value)}
                                    editable={editable}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="cpf"
                            render={({ field: { value, onChange } }) => (
                                <FormInput
                                    name="CPF"
                                    value={editable ? value : applyCpfMask(value)}
                                    editable={editable}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="endereco"
                            render={({ field: { value, onChange } }) => (
                                <FormInput name="Endereço" value={value} editable={editable} onChangeText={onChange} />
                            )}
                        />
                    </View>
                    <View style={styles.buttonArea}>
                        <PrimaryButton
                            text={ editable ? "Confirmar Alterações" : "Editar Informações"}
                            onPress={ editable ? handleSubmit((data) => { editarConta(data); setEditable(false); }) : () => setEditable(true)}
                        />
                        <PrimaryButton
                            text={ editable ? "Cancelar Alterações" : "Excluir Conta"}
                            onPress={ editable
                                ? () => {
                                    // reset form values to original user data and exit edit mode
                                    setValue('primeiroNome', user.primeiroNome);
                                    setValue('sobrenome', user.sobrenome);
                                    setValue('email', user.email);
                                    setValue('telefone', user.telefone);
                                    setValue('cpf', user.cpf);
                                    setValue('endereco', user.endereco);
                                    setEditable(false);
                                }
                                : excluirConta()
                            }
                        />
                        <PrimaryButton text={"Sair"} onPress={() => logout()}/>
                    </View>
                </View>
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        flex: 1,
        marginHorizontal: 20,
        gap: 20
    },
    profileArea: {
        height: 250,
        marginTop: -60
    },
    infoArea: {
        gap: 50
    },
    userInfoArea: {
        gap: 10,
    },
    buttonArea: {
        alignItems: 'center',
        gap: 10
    }
})

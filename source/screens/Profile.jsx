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

export default function Profile() {
    const { user, logout } = useAuth()

    const [email, setEmail] = useState(user.email)
    const [cellphone, setCellphone] = useState(user.telefone)
    const [cpf, setCpf] = useState(user.cpf)
    const [address, setAddress] = useState(user.endereco)
    const [editable, setEditable] = useState(false)

    const cancelarConta = () => {
        Alert.alert("Conta excluida com sucesso")
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
                        <FormInput name="Email" value={email} editable={editable}/>
                        <FormInput name="Telefone" value={applyPhoneMask(cellphone)} editable={editable}/>
                        <FormInput name="CPF" value={applyCpfMask(cpf)} editable={editable}/>
                        <FormInput name="Endereço" value={address} editable={editable}/>
                    </View>
                    <View style={styles.buttonArea}>
                        <PrimaryButton text={ editable ? "Confirmar Alterações" : "Editar Informações"} onPress={() => setEditable(true)}/>
                        <PrimaryButton text={ editable ? "Cancelar Alterações" : "Excluir Conta"} onPress={() => editable ? setEditable(false) : cancelarConta()}/>
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
        height: '30%',
        marginTop: -40
    },
    infoArea: {
        gap: 50
    },
    userInfoArea: {
        gap: 10
    },
    buttonArea: {
        alignItems: 'center',
        gap: 10
    }
})

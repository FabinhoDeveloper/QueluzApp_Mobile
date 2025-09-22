import { View, StyleSheet } from 'react-native'

import SecondaryStackHeader from '../components/SecondaryStackHeader'
import SuccessMessage from '../components/SuccessMessage';

export default function ConsultationSuccess() {
    return (
        <View style={styles.container}>
            <SecondaryStackHeader title={"Agendamento\nde Consulta"} color={"#228D9C"}/>
            <SuccessMessage text={"Fique tranquilo, sua solicitação foi registrada com sucesso. Nossa equipe entrará em contato para confirmar os detalhes do seu atendimento."}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

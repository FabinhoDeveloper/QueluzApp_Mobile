import { View, StyleSheet } from 'react-native'

import SecondaryStackHeader from '../components/SecondaryStackHeader'
import SuccessMessage from '../components/SuccessMessage';

export default function TripSuccess() {
    return (
        <View style={styles.container}>
            <SecondaryStackHeader title={"Agendamento\nde Viagem"} color={"#228D9C"}/>
            <SuccessMessage text={"Fique tranquilo, sua solicitação foi registrada com sucesso. Nossa equipe entrará em contato para confirmar os detalhes da sua viagem."}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

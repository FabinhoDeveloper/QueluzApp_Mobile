import { StyleSheet, Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";
import PhoneCard from "../components/PhoneCard";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";


export default function UsefulPhoneNumbers() {
    return (
        <ScrollViewWithMarginBottom size={150}>
            <SecondaryTabHeader/>
            <View style={styles.container}>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Emergência (SAMU)"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
                <PhoneCard name={"Prefeitura Municipal"} address={"Rua Prudente de Moraes, 100, Centro"} phone={"(12) 3147-9020"}/>
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50
    }
})
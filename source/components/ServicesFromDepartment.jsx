import { ScrollView, StyleSheet, Text, View } from "react-native";
import SecondaryStackHeader from "../components/SecondaryStackHeader";
import HomeSection from "../components/HomeSection";

export default function ServicesFromDepartment({ children, departmentName, headerColor }) {
    return (
        <ScrollView>
            <SecondaryStackHeader title={departmentName} color={headerColor}/>
            <View style={styles.mainContent}>
                <HomeSection title={"Selecione o serviço desejado:"}>
                    <View style={styles.servicesList}>
                        { children }
                    </View>
                </HomeSection>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    servicesList: {
        gap: 8
    }
})

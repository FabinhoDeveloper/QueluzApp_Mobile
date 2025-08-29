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
                        { children ? children :
                            <View style={{paddingTop: 50, paddingBottom: 50, alignItems: 'center'}}>
                                <Text style={{ fontFamily: 'Poppins_500Medium', textDecorationStyle: 'double'}}>Nada a encontrar aqui ainda! Atualizações em breve...</Text>
                            </View>
                        }
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

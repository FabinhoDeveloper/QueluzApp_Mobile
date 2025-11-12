import { StyleSheet, View, Text } from "react-native";

import TripCard from "../components/TripCard";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryTabHeader from "../components/SecondaryTabHeader";
import ProfilePic from "../components/ProfilePic";
import LoginRequired from "../components/LoginRequired";

import { useAuth } from "../contexts/AuthContext";

export default function Requests() {
    const { user } = useAuth()
    
    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryTabHeader/>

            { user ? (
                <View style={styles.mainContent}>   
                    <FormSection marginBottom={true}>
                        <ProfilePic/>
                    </FormSection>
                
                    <FormSection title={"Minhas solicitações"}>
                        <View style={styles.tripRecords}>
                            <TripCard status={"CONFIRMADA"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                            <TripCard status={"CANCELADA"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                            <TripCard status={"PENDENTE"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                            <TripCard status={"CONFIRMADA"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                            <TripCard status={"CANCELADA"} local={"Hemocentro de Taubaté"} data={"02/02/2025"}/>
                            <TripCard status={"PENDENTE"} local={"Santa Casa de Aparecida"} data={"02/02/2025"}/>
                        </View>
                    </FormSection>
                </View> 
            ) : (
                <View style={styles.LoginRequiredContainer}>
                    <LoginRequired/>
                </View>
            )}
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContent: {
        marginHorizontal: 20,
    },
    tripRecords: {
        marginTop: 10,
        gap: 8    
    },
    mainContent: {
        marginHorizontal: 20,
    },
    LoginRequired: {
        marginHorizontal: 20,
    }
})

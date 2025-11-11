import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import TripCard from "../components/TripCard";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import SecondaryButton from "../components/SecondaryButton";

import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";

export default function TripMainPage() {
    const { user } = useAuth()
    const [tripList, setTripList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchTrips() {
            try {
                const response = await api.get(`/viagem/getRequests/${user.idUsuario}`)
                                
                if (response.data && !response.data.error) {
                    setTripList(response.data.requestsWithSignedUrls)
                }
            } catch (error) {
                console.error("Erro ao buscar viagens:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchTrips()
    }, [])


    return (
        <ScrollViewWithMarginBottom size={100}>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
            <View style={styles.mainContent}>
                <FormSection marginBottom={true}>
                    <SecondaryButton title={"Solicitar viagem"} linkTarget={"TripForm"}/>
                </FormSection>

                <FormSection title={"Minhas viagens"}>
                    <View style={styles.tripRecords}>
                        {isLoading ? (
                            <View style={{ height: '100%' }}>
                                <Text>Carregando...</Text>
                            </View>

                        ) : tripList.length > 0 ? (
                            tripList.map((trip) => (
                                <TripCard 
                                    key={trip.idSolicitacaoViagem}
                                    status={trip.StatusSolicitacao.statusViagem}
                                    local={trip.local_consulta}
                                    data={new Date(trip.data_consulta).toLocaleDateString('pt-BR')}
                                />
                            ))
                        ) : (
                            <Text>Nenhuma viagem encontrada</Text>
                        )}
                    </View>
                </FormSection>
            </View>
        </ScrollViewWithMarginBottom>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        marginHorizontal: 20,
    },
    tripRecords: {
        gap: 8    
    }
})

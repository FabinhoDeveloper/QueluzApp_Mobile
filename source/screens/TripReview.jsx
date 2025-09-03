import { Text, View } from "react-native";

import SecondaryStackHeader from "../components/SecondaryStackHeader";
import FormSection from "../components/FormSection";
import ScrollViewWithMarginBottom from "../components/ScrollViewWithMarginBottom";
import { TextInput } from "react-native-gesture-handler";

export default function TripReview() {
    return (
        <ScrollViewWithMarginBottom>
            <SecondaryStackHeader title={"Solicitação\nde Viagem"} color={"#228D9C"}/>
            <View style={{ marginHorizontal: 20 }}>
                <FormSection marginBottom={true} title={"Revise suas informações"}></FormSection>
                

            </View>
            
        </ScrollViewWithMarginBottom>
    )
}
import { Text, View } from "react-native";

import SecondaryTabHeader from "../components/SecondaryTabHeader";

export default function Profile() {
    return (
        <View style={{ flex: 1}}>
            <SecondaryTabHeader/>
            <Text>Profile Screen</Text>
        </View>
    )
}

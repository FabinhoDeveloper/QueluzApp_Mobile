import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function FormPicker(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Picker style={styles.formPicker}>
                <Picker.Item label="Selecione uma categoria" value="" />
                <Picker.Item label="Elogio" value="elogio" />
                <Picker.Item label="Sugestão" value="sugestao" />
                <Picker.Item label="Reclamação" value="reclamacao" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 13  
    },
    name: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
    },  
    formPicker: {
        borderWidth: 1,
        borderColor: 'black'
    }
})

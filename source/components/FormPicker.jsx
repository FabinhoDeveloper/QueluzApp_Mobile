import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function FormPicker(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
                <View style={styles.pickerContainer}>
                    <Picker 
                        {...props}
                    >
                        <Picker.Item label="Selecione uma categoria" value="" />
                        <Picker.Item label="Elogio" value="elogio" />
                        <Picker.Item label="Sugestão" value="sugestao" />
                        <Picker.Item label="Reclamação" value="reclamacao" />
                    </Picker>
                </View>
                
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
    pickerContainer: {
        height: 41.31,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 12,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    formPicker: {
        marginLeft: 10,
        height: 41.31,
        color: "#636364",
        fontFamily: 'Poppins_300Light',
        fontSize: 14,
    }
})
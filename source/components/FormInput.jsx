import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FormInput(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <TextInput
                style={[
                    styles.textInput, 
                    props.size ? {
                        height: props.size, 
                        textAlignVertical: 'top',
                        paddingTop: 12 // adiciona espaço no topo quando input é maior
                    } : {
                        height: 41.31,
                        textAlignVertical: 'center'
                    }
                ]}           
                multiline={props.size ? true : false} // habilita múltiplas linhas quando tem size
                textBreakStrategy="simple"     
                {...props}
        />
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
    textInput: {
        width: '100%',
        borderWidth: 1,
        fontFamily: 'Poppins_300Light',
        borderColor: '#C4C4C4',
        borderRadius: 12,
        paddingHorizontal: 18,
        color: "#636364",
        fontSize: 14,
        // Propriedades para centralizar o placeholder
        textAlignVertical: 'center', // Android
        paddingTop: 0, // Remove padding top padrão
        paddingBottom: 0, // Remove padding bottom padrão
        includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
        textAlign: 'left', // Mantém alinhado à esquerda horizontalmente
    }
})

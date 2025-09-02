import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function DepartmentCard({ departmentName, source, linkTarget }) {
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={
                linkTarget ? () => {
                    if (typeof linkTarget === "string") {
                        navigation.navigate(linkTarget);
                    } else if (typeof linkTarget === "object" && linkTarget.stack) {
                        navigation.navigate(linkTarget.stack, {
                        screen: linkTarget.screen,
                    });
                }
            } : undefined }>                
                <Image source={source}/>
            </TouchableOpacity>
            <Text style={styles.departmentName}>{departmentName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        alignItems: 'center',
        gap: 8
    },
    card: {
        backgroundColor: '#BFBFBF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        width: 104,
        height: 82
    },
    departmentName: {
        fontSize: 11,
        fontFamily: 'Poppins_500Medium',
        letterSpacing: -0.2,
        textAlign: 'center'
    }
})
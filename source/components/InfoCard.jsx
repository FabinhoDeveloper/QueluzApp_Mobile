import { View, Text, StyleSheet } from "react-native";

// InfoCard.jsx
export default function InfoCard({ title, items }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.informationContainer}>
                {items.map((item, i) => (
                    <Text key={i} style={item.bold ? styles.informationBold : styles.information}>
                        {item.label ? `${item.label}: ` : ""}{item.value}
                    </Text>
                ))}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
        borderRadius: 12,
        gap: 8,
        paddingHorizontal: 20,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'Poppins_700Bold'
    },
    informationContainer: {
        gap: -9
    },
    information: {
        fontFamily: 'Poppins_300Light',
        fontSize: 14
    },
    informationBold: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 14
    }
})
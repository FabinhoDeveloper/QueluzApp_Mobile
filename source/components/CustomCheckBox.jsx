import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomCheckBox({ options, selected, onSelect }) {
    return (
        <View style={styles.container}>
        {options.map((option) => (
            <TouchableOpacity
                key={option.value}
                style={styles.option}
                onPress={() => onSelect(option.value)}
            >
                <View style={styles.radioCircle}>
                    {selected === option.value && <View style={styles.selectedDot} />}
                </View>
                <Text style={styles.label}>{option.label}</Text>
            </TouchableOpacity>
        ))}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  label: {
    marginLeft: 8,
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    textAlignVertical: 'center', // Android
    paddingTop: 0, // Remove padding top padrão
    paddingBottom: 0, // Remove padding bottom padrão
    includeFontPadding: false, // Remove espaçamento extra da fonte (Android)
  },
});

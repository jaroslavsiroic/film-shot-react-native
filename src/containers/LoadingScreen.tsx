import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Colors } from "../styles";

export const LoadingScreen: React.FC = (props) => {
    return (
        <View style={styles.safeArea}>
            <Text style={styles.text}>Loading Yello!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.main,
    },
    text: {
        color: Colors.white,
        textAlign: "justify",
        fontSize: 60,
        fontWeight: "normal",
    },
});

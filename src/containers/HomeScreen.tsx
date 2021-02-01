import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from "react-native";
import { useAtom } from "jotai";
import { homeScreenListAtom } from "../atoms";
import { Colors } from "../styles";
import { HomeMessageItem } from "../types";
import { ListItem } from "../components/ListItem";

export const HomeScreen: React.FC = () => {
    const [homeMessages] = useAtom(homeScreenListAtom);
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.main} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            >
                {homeMessages.map((message: HomeMessageItem, i) => (
                    <ListItem key={i} {...message} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.main,
    },
    scrollView: {
        height: "100%",
        backgroundColor: Colors.white,
    },
});

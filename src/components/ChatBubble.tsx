import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles";

interface BubbleProps {
    text: string;
    isSend: boolean;
}

export const ChatBubble: React.FC<BubbleProps> = (props) => {
    const styles = getStyle(props.isSend);
    return (
        <View style={styles.container}>
            <View style={[styles.bubble]}>
                <Text textBreakStrategy="simple" style={styles.textStyle}>
                    {props.text}
                </Text>
            </View>
        </View>
    );
};

const getStyle = (isSend: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: isSend ? "flex-end" : "flex-start",
        },
        bubble: {
            borderRadius: 20,
            marginHorizontal: 10,
            marginVertical: 5,
            padding: 13,
            maxWidth: "75%",
            backgroundColor: isSend ? Colors.main : Colors.blueGrey,
        },
        textStyle: {
            fontWeight: "500",
            fontSize: 15,
            color: Colors.white,
        },
    });

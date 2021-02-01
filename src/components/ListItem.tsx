import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useUpdateAtom } from "jotai/utils";
import { Colors } from "../styles";
import { HomeMessageItem } from "../types";
import { homeScreenListAtom } from "../atoms";

export const ListItem: React.FC<HomeMessageItem> = (props) => {
    const navigation = useNavigation();
    const updateHomeList = useUpdateAtom(homeScreenListAtom);

    return (
        <TouchableOpacity
            style={[
                styles.container,
                props.unread ? styles.containerUnread : null,
            ]}
            onPress={() => {
                if (props.unread) {
                    updateHomeList((list) => {
                        list = Object.assign([], list);
                        const index = list.findIndex(
                            (item) => item.sender.id === props.sender.id
                        );
                        list[index].unread = false;
                        return list;
                    });
                }
                navigation.navigate("Chat", props.sender);
            }}
        >
            <Image style={styles.image} source={props.sender.imageUrl} />
            <View style={styles.textBox1}>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.name}
                >
                    {props.sender.name}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.message}
                >
                    {props.text}
                </Text>
            </View>
            <View style={styles.textBox2}>
                <Text style={styles.timeText}>{props.time}</Text>
                {props.unread && (
                    <View style={styles.newBadge}>
                        <Text
                            textBreakStrategy="simple"
                            style={styles.newBadgeText}
                        >
                            NEW
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        padding: 10,
        margin: 2,
    },
    containerUnread: {
        backgroundColor: Colors.main,
    },
    textBox1: {
        paddingVertical: 5,
        justifyContent: "space-between",
        flexShrink: 1,
        flexGrow: 1,
    },
    textBox2: {
        marginLeft: 5,
        paddingVertical: 5,
        justifyContent: "space-between",
        alignItems: "center",
    },
    newBadge: {
        alignSelf: "flex-end",
        minWidth: 40,
        padding: 5,
        backgroundColor: Colors.white,
        borderRadius: 15,
    },
    newBadgeText: {
        textAlign: "center",
        fontSize: 10,
        fontWeight: "bold",
        color: Colors.main,
    },
    message: {
        fontWeight: "normal",
    },
    name: {
        fontSize: 20,
        fontWeight: "normal",
    },
    timeText: {},
    textUnread: {
        color: Colors.white,
        textAlign: "justify",
        fontSize: 20,
        fontWeight: "bold",
    },
    image: {
        marginRight: 10,
        borderRadius: 30,
        width: 60,
        height: 60,
    },
});

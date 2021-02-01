import { useAtom } from "jotai";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Icon, IconType, ListItem } from "react-native-elements";
import { userProfile, isLoggedInAtom } from "../atoms";
import { Colors } from "../styles";

interface SettingsItem {
    title: string;
    subtitle?: string;
    icon: {
        name: string;
        type?: IconType;
        color?: string;
    };
    onPress?(): void;
}

const getSettingsList = (setLoggedIn: (v: boolean) => void): SettingsItem[] => {
    const settingListItems: SettingsItem[] = [
        {
            title: "Edit Profile",
            icon: {
                name: "edit",
                type: "ant-design",
                color: Colors.main,
            },
        },
        {
            title: "Privacy",
            icon: {
                name: "Safety",
                type: "ant-design",
                color: Colors.main,
            },
        },
        {
            title: "Notifications & Sound",
            icon: {
                name: "notification",
                type: "ant-design",
                color: Colors.main,
            },
        },
        {
            title: "Message Requests",
            subtitle: "2 new requests",
            icon: {
                name: "message1",
                type: "ant-design",
                color: Colors.main,
            },
        },
        {
            title: "Photos & Media",
            icon: {
                name: "folderopen",
                type: "ant-design",
                color: Colors.main,
            },
        },
        {
            title: "Logout",
            icon: {
                name: "logout",
                type: "ant-design",
                color: Colors.main,
            },
            onPress: () => {
                setLoggedIn(false);
            },
        },
    ];
    return settingListItems;
};

export const ProfileScreen = () => {
    const [user] = useAtom(userProfile);
    const [, setLoggedIn] = useAtom(isLoggedInAtom);
    const settings = getSettingsList(setLoggedIn);
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.main} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            >
                <View style={styles.userContainer}>
                    <Image style={styles.userImage} source={user.imageUrl} />
                    <Text style={styles.userName}>{user.name}</Text>
                </View>
                {settings.map((item: SettingsItem, i) => (
                    <ListItem key={i} onPress={item.onPress}>
                        <Icon
                            reverse
                            underlayColor={Colors.main}
                            size={20}
                            name={item.icon.name}
                            type={item.icon.type}
                            color={item.icon.color}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={styles.settingsTitle}>
                                {item.title}
                            </ListItem.Title>
                            {item.subtitle && (
                                <ListItem.Subtitle>
                                    {item.subtitle}
                                </ListItem.Subtitle>
                            )}
                        </ListItem.Content>
                        <ListItem.Chevron color={Colors.main} size={20} />
                    </ListItem>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        alignItems: "center",
    },
    userImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        margin: 20,
    },
    userName: {
        fontSize: 25,
    },
    settingsTitle: {},
    safeArea: {
        backgroundColor: Colors.main,
    },
    scrollView: {
        height: "100%",
        backgroundColor: Colors.white,
    },
});

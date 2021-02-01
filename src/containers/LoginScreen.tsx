import React from "react";
import { Text, StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Input } from "react-native-elements";
import { Colors } from "../styles";
import { useAtom } from "jotai";
import { isLoggedInAtom } from "../atoms";

export const LoginScreen: React.FC = (props) => {
    const [, setLoggedIn] = useAtom(isLoggedInAtom);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.main} />
            <View style={styles.textBox}>
                <Text style={styles.text}>Hey! Welcome to</Text>
                <Text style={[styles.text, styles.filmShot]}>Film Shot</Text>
            </View>
            <View style={styles.inputWrapperView}>
                <Input
                    placeholder="Enter email"
                    leftIcon={{
                        size: 30,
                        type: "ant-design",
                        name: "mail",
                        color: Colors.white,
                    }}
                    placeholderTextColor={Colors.white}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                />
                <Input
                    secureTextEntry
                    placeholder="Enter password"
                    leftIcon={{
                        size: 30,
                        type: "ant-design",
                        name: "lock",
                        color: Colors.white,
                    }}
                    placeholderTextColor={Colors.white}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                />
            </View>
            <Button
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.buttonTitleStyle}
                icon={
                    <Icon
                        type="ant-design"
                        name="camerao"
                        size={30}
                        color={Colors.main}
                    />
                }
                title="Sign in"
                onPress={() => {
                    setLoggedIn(true);
                }}
            />
            <Text style={[styles.marginBox, styles.text]}>-- or --</Text>
            <Button
                buttonStyle={styles.buttonOutlineStyle}
                titleStyle={styles.buttonOutlineTitleStyle}
                icon={
                    <Icon
                        type="ant-design"
                        name="camera"
                        size={30}
                        color={Colors.white}
                    />
                }
                title="Sign up"
                onPress={() => {
                    navigation.navigate("SignUpScreen");
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.main,
    },
    textBox: {
        flexDirection: "column",
    },
    text: {
        color: Colors.white,
        textAlign: "left",
        fontSize: 20,
        fontWeight: "normal",
    },
    filmShot: {
        fontSize: 40,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    marginBox: {
        margin: 15,
    },
    inputWrapperView: {
        width: "100%",
        paddingHorizontal: 20,
        margin: 20,
    },
    inputContainerStyle: {
        borderColor: Colors.white,
        borderBottomWidth: 2,
    },
    inputStyle: {
        fontWeight: "500",
        paddingLeft: 5,
        color: Colors.white,
    },
    buttonStyle: {
        backgroundColor: Colors.white,
    },
    buttonTitleStyle: {
        padding: 15,
        color: Colors.main,
        fontWeight: "bold",
        fontSize: 20,
    },
    buttonOutlineStyle: {
        borderWidth: 1,
        borderColor: Colors.white,
        backgroundColor: Colors.main,
    },
    buttonOutlineTitleStyle: {
        padding: 15,
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 20,
    },
});

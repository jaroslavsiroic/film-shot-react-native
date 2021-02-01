import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import { Colors } from "./styles";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ChatScreen } from "./containers/ChatScreen";
import { User } from "./types";
import TabNavigation from "./tabNavigation";
import { LoginScreen } from "./containers/LoginScreen";
import { isLoggedInAtom } from "./atoms";
import { useAtom } from "jotai";
import SignUpScreen from "./containers/SignUpScreen";

type StackParamList = {
    Home: undefined;
    Chat: User;
};

const Stack = createStackNavigator<StackParamList>();
const LoginStack = createStackNavigator();

const StackNavigation = () => {
    const [isLoggedIn] = useAtom(isLoggedInAtom);

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Stack.Navigator
                    headerMode="screen"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Colors.main,
                        },
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={TabNavigation}
                        options={{
                            headerShown: true,
                            headerTitleAlign: "center",
                            headerTitle: (props) => (
                                <Text style={styles.headerText}>
                                    Yello! chats
                                </Text>
                            ),
                            headerRight: () => (
                                <Icon
                                    style={styles.iconStyle}
                                    color={Colors.white}
                                    type="ant-design"
                                    name="form"
                                />
                            ),
                            headerLeft: () => (
                                <Icon
                                    style={styles.iconStyle}
                                    color={Colors.white}
                                    type="ant-design"
                                    name="search1"
                                />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name="Chat"
                        component={ChatScreen}
                        options={({ route, navigation }) => {
                            const user: User = route.params;
                            return {
                                headerTitle: () => null,
                                headerRight: () => (
                                    <Icon
                                        style={styles.iconStyle}
                                        color={Colors.white}
                                        type="ant-design"
                                        name="ellipsis1"
                                    />
                                ),
                                headerLeft: () => (
                                    <View style={styles.headerLeftContainer}>
                                        <TouchableOpacity
                                            onPress={navigation.goBack}
                                        >
                                            <Icon
                                                style={styles.iconStyle}
                                                color={Colors.white}
                                                type="ant-design"
                                                name="arrowleft"
                                            />
                                        </TouchableOpacity>
                                        <Image
                                            style={styles.headerImage}
                                            source={user.imageUrl}
                                        />
                                        <Text style={styles.headerName}>
                                            {user.name}
                                        </Text>
                                    </View>
                                ),
                            };
                        }}
                    />
                </Stack.Navigator>
            ) : (
                <LoginStack.Navigator
                    headerMode="screen"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Colors.main,
                        },
                    }}
                >
                    <LoginStack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <LoginStack.Screen
                        name="SignUpScreen"
                        component={SignUpScreen}
                        options={({ navigation }) => {
                            return {
                                headerShown: true,
                                headerTitleAlign: "center",
                                headerTitle: (props) => (
                                    <Text style={styles.headerText}>
                                        Sign up
                                    </Text>
                                ),

                                headerLeft: () => (
                                    <TouchableOpacity
                                        onPress={navigation.goBack}
                                    >
                                        <Icon
                                            style={styles.iconStyle}
                                            color={Colors.white}
                                            type="ant-design"
                                            name="arrowleft"
                                        />
                                    </TouchableOpacity>
                                ),
                            };
                        }}
                    />
                </LoginStack.Navigator>
            )}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: 23,
    },
    iconStyle: {
        marginHorizontal: 15,
    },
    headerLeftContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerImage: {
        borderRadius: 20,
        width: 30,
        height: 30,
    },
    headerName: {
        marginLeft: 5,
        color: Colors.white,
        fontSize: 20,
    },
});

export default StackNavigation;

import React from "react";
import { Icon } from "react-native-elements";
import { Colors } from "./styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAtom } from "jotai";
import { unreadMessageCount } from "./atoms";
import { ProfileScreen } from "./containers/ProfileScreen";
import { HomeScreen } from "./containers/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const [unreadCount] = useAtom(unreadMessageCount);

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: Colors.main,
                showLabel: false,
                style: {
                    backgroundColor: Colors.white,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarBadge: unreadCount > 0 ? unreadCount : undefined,
                    tabBarBadgeStyle: {
                        backgroundColor: Colors.main,
                        color: Colors.white,
                    },
                    tabBarIcon: ({ color }) => (
                        <Icon
                            type="ant-design"
                            name="message1"
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            type="ant-design"
                            name="user"
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;

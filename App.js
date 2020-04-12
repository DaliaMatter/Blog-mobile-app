import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "./screens/profile";
import Posts from "./screens/posts";
import PostDetails from "./screens/postDetails";

const {
    Navigator: TabNavigator,
    Screen: TabScreen,
} = createBottomTabNavigator();
const {
    Navigator: StackNavigator,
    Screen: StackScreen,
} = createStackNavigator();

const NavStack = () => {
    return (
        <StackNavigator
            screenOptions={{
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "lightblue",
                },
            }}
        >
            <StackScreen
                name="AllPosts"
                component={Posts}
                options={{
                    title: "Posts",
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
                }}
            />
            <StackScreen
                name="PostDetails"
                component={PostDetails}
                options={{
                    title: "Post Details",
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
                }}
            />
        </StackNavigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator
                tabBarOptions={{
                    style: {
                        backgroundColor: "lightblue",
                        height: 60,
                        paddingVertical: 5,
                    },
                    labelStyle: {
                        fontSize: 15,
                        lineHeight: 20,
                    },
                    activeTintColor: "white",
                }}
            >
                <TabScreen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: (params) => (
                            <FontAwesome
                                name="user"
                                color={params.color}
                                size={params.size}
                            />
                        ),
                    }}
                />
                <TabScreen
                    name="Posts"
                    component={NavStack}
                    options={{
                        tabBarLabel: "Posts",
                        tabBarIcon: (params) => (
                            <FontAwesome
                                name="comment"
                                color={params.color}
                                size={params.size}
                            />
                        ),
                    }}
                />
            </TabNavigator>
        </NavigationContainer>
    );
}

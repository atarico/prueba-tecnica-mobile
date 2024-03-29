import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Cart from "../screens/Cart/CartScreen";
import Home from "../screens/Home/HomeScreen";
import ProductDetail from "../screens/ProductsDetails/ProductDetailScreen";


const Stack = createNativeStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{
                    title: "Product Detail",
                    headerStyle: { backgroundColor: "#0594a4" },
                    headerTintColor: "#f5f5f5",
                    headerTitleAlign: "center",
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
}


const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#0594a4",
            }}

        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={30} />),
                    title: "Cart",
                    headerStyle: { backgroundColor: "#0594a4" },
                    headerTintColor: "#f5f5f5",
                    headerTitleAlign: "center",
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import BioScreen from "../screens/BioScreen";
import CareerTestScreen from "../screens/CareerTestScreen";
import PersonalityTestScreen from "../screens/PersonalityTestScreen";
import ReportScreen from "../screens/ReportScreen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={CategoryScreen}
                options={{
                    headerShown: false,
                    title: 'Home'
                }}
            />
            <Stack.Screen
                name="BioScreen"
                component={BioScreen}
                options={{
                    headerShown: false,
                    title: 'BioScreen'
                }}
            />
            <Stack.Screen
                name="CareerTestScreen"
                component={CareerTestScreen}
                options={{
                    headerShown: false,
                    title: 'CareerTestScreen'
                }}
            />
            <Stack.Screen
                name="PersonalityTestScreen"
                component={PersonalityTestScreen}
                options={{
                    headerShown: false,
                    title: 'PersonalityTestScreen'
                }}
            />
            <Stack.Screen
                name="ReportScreen"
                component={ReportScreen}
                options={{
                    headerShown: false,
                    title: 'ReportScreen'
                }}
            />
        </Stack.Navigator>)};
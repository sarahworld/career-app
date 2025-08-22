import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )

};

export default AuthNavigator;
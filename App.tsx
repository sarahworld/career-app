import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from "./context/AuthContext";
import RootNavigation from "./navigation/RootNavigation";


export default function App() {
    return (
        <AuthProvider>
                <NavigationContainer>
                    <RootNavigation/>
                </NavigationContainer>
        </AuthProvider>
    );
}




import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from "./context/AuthContext";
import RootNavigation from "./navigation/RootNavigation";
// import * as dotenv from 'dotenv';
//
// dotenv.config();


export default function App() {
    return (
        <AuthProvider>
                <NavigationContainer>
                    <RootNavigation/>
                </NavigationContainer>
        </AuthProvider>
    );
}




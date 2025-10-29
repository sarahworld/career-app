import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from "./context/AuthContext";
import RootNavigation from "./navigation/RootNavigation";
<<<<<<< HEAD
// import * as dotenv from 'dotenv';
//
// dotenv.config();
=======
>>>>>>> 0c8491aa1f711e5deac00ec37572dd49715776f2


export default function App() {
    return (
        <AuthProvider>
                <NavigationContainer>
                    <RootNavigation/>
                </NavigationContainer>
        </AuthProvider>
    );
}




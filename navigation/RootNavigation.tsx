import {useAuth} from "../context/AuthContext";
import {AppNavigator} from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import React from "react";

export const RootNavigation = () => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <AppNavigator/> : <AuthNavigator/>;
}

export default RootNavigation;
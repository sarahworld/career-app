import React, { createContext, useContext, useState } from 'react';

type User = {
    email: string;
    username: string;
    // Add other user properties as needed
};

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null >(null)


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    // dummy login
    const login = () => {
        try {
            setIsAuthenticated(true);
            setUser({ email: 'user@example.com', username: 'user' });
        } catch (error) {
            console.error("Login failed", error);
        }
    }

    // dummy logout
    const logout = () => {
        try {
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error("Logout failed", error);
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within the AuthProvider");
    return ctx;
};
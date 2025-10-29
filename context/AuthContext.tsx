// File: context/AuthContext.tsx
typescript
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { useGoogleAuthNative } from '../hooks/useGoogleAuth.native';

interface User {
    email: string;
    username: string;
    // Add other user properties as needed
}

export interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (provider: 'google' | 'facebook' | 'linkedin') => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mapGoogleResultToUser = (result: unknown): User => {
    // TODO: tighten types when SignInSuccessResponse is available here
    const payload = (result as any)?.user ?? (result as any);
    return {
        email: payload?.email ?? payload?.emailAddress ?? 'unknown@example.com',
        username: payload?.name ?? payload?.givenName ?? 'user',
    };
};

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    // Keep hook at top level
    const googleAuth = useGoogleAuthNative();

    const login = useCallback(async (provider: 'google' | 'facebook' | 'linkedin'): Promise<void> => {
        try {
            if (provider !== 'google') {
                // TODO: implement other providers
                return;
            }

            const result = await googleAuth.signIn();

            if (!result) {
                // sign-in cancelled or no-op
                return;
            }

            const mappedUser = mapGoogleResultToUser(result);
            setIsAuthenticated(true);
            setUser(mappedUser);
        } catch (error) {
            // keep logging minimal and non-blocking
            // eslint-disable-next-line no-console
            console.error('Login failed', error);
            throw error;
        }
    }, [googleAuth]);

    const logout = useCallback(async (): Promise<void> => {
        try {
            // attempt provider sign-out if available
            try {
                await googleAuth.signOut();
            } catch {
                // ignore provider sign-out errors to avoid blocking UI
            }
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Logout failed', error);
        }
    }, [googleAuth]);

    const value = useMemo<AuthContextType>(() => ({
        isAuthenticated,
        user,
        login,
        logout,
    }), [isAuthenticated, user, login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within the AuthProvider');
    return ctx;
};

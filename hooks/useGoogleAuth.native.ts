
import { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import {
    GoogleSignin,
    SignInSuccessResponse,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID } from '@env';

export interface UseGoogleAuthNativeReturn {
    signIn: () => Promise<SignInSuccessResponse | null>;
    signOut: () => Promise<void>;
}

/*
  Android-only implementation.
  - For server auth (id token) include `webClientId`. For Android-specific flows include `androidClientId`.
*/
export const useGoogleAuthNative = (): UseGoogleAuthNativeReturn => {
    useEffect(() => {
        // Only configure on native Android to avoid any web/native-surface issues.
        if (Platform.OS !== 'android') {
            // eslint-disable-next-line no-console
            console.warn('useGoogleAuth (native) configured only for Android. Current platform:', Platform.OS);
            return;
        }

        if (!GOOGLE_ANDROID_CLIENT_ID && !GOOGLE_WEB_CLIENT_ID) {
            // eslint-disable-next-line no-console
            console.warn(
                'Google client IDs not provided. Set GOOGLE_ANDROID_CLIENT_ID and/or GOOGLE_WEB_CLIENT_ID in env.'
            );
        }

        GoogleSignin.configure({
            // androidClientId is used in some setups; include if available
            androidClientId: GOOGLE_ANDROID_CLIENT_ID ?? undefined,
            // webClientId is required if you need idToken for backend verification
            webClientId: GOOGLE_WEB_CLIENT_ID ?? undefined,
            offlineAccess: true,
            forceCodeForRefreshToken: true,
        });
        // No cleanup required for GoogleSignin.configure
    }, []);

    const signIn = useCallback(async (): Promise<SignInSuccessResponse | null> => {
        try {
            if (Platform.OS !== 'android') {
                // eslint-disable-next-line no-console
                console.warn('signIn called on non-Android platform; returning null.');
                return null;
            }

            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const userInfo = await GoogleSignin.signIn();
            return userInfo as SignInSuccessResponse;
        } catch (error) {
            const code = (error as { code?: string }).code;
            if (code === statusCodes.SIGN_IN_CANCELLED) {
                return null;
            }
            // eslint-disable-next-line no-console
            console.error('Google sign-in error:', error);
            throw error;
        }
    }, []);

    const signOut = useCallback(async (): Promise<void> => {
        try {
            if (Platform.OS !== 'android') return;
            // Revoke access then sign out to be safe
            if (typeof (GoogleSignin as any).revokeAccess === 'function') {
                // revokeAccess may not exist on all versions; guard it
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                await (GoogleSignin as any).revokeAccess();
            }
            await GoogleSignin.signOut();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Google sign-out error:', error);
            // swallow errors to avoid crashing logout flows
        }
    }, []);

    return { signIn, signOut };
};

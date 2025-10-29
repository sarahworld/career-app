import React, {useEffect} from 'react';
import {useAuth} from "../../context/AuthContext";
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as Font from "expo-font";
import LoginButton from "../../components/LoginButton";


const { width } = Dimensions.get('window');

const LoginScreen: React.FC = () => {

    const [fontsLoaded, setFontsLoaded] = React.useState(false);
    const { login } = useAuth();

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'LilitaOne-Regular':require('../../assets/fonts/LilitaOne-Regular.ttf'),
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.circle}>
                    <Text style={styles.logoText}>PATHFINDER</Text>
                </View>
            </View>

            <LoginButton title="Google Login" onPress={() => {login("google")}}/>
            <LoginButton  title="Facebook Login" onPress={login} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7dce8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    circle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#d3f4e0',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
    },
    logoText: {
        fontSize: 20,
        fontWeight: '900',
        letterSpacing:3,
        fontFamily: 'LilitaOne-Regular',
        color: '#000',
    },
    button: {
        flexDirection: 'row', // Align items in a row


        paddingBottom: 10,
        marginVertical: 15,
        borderRadius:10,

    },
});

export default LoginScreen;

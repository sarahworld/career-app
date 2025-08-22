import React from 'react';
import {useAuth} from "../context/AuthContext";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
interface LoginButtonProps {
    title: string;
    onPress?: () => void;

}

const LoginButton: React.FC<LoginButtonProps> = ({ title, onPress }) => {

    const {login } = useAuth();

    const handlePress = () => {
      onPress ? onPress() : login();
    };

    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>)

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EECA66',
        width: screenWidth * 0.8, // 90% of screen width
        height: screenHeight * 0.05, // 7% of screen height
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        marginVertical: 15,
        flexDirection: 'row',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'LilitaOne-Regular',
        letterSpacing:1,
        textAlign: 'center',
    },
});

export default LoginButton;

import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: (Dimensions.get('window').width) * 0.8, // 90% of screen width
        height: (Dimensions.get('window').height) * 0.06, // 7% of screen height
        backgroundColor: '#EECA66',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:"black",
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 6,
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'LilitaOne-Regular',
        letterSpacing:1,
    },
});

export default PrimaryButton;

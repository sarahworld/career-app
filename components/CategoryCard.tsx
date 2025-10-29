import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Dimensions, Text} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 60) / 2; // 2 cards per row with padding and margin

interface Props {
    imageSource: any;
    title: string;
    onPress?: () => void;
}

const CategoryCard: React.FC<Props> = ({ imageSource, onPress, title }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_SIZE,
        height: CARD_SIZE,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:"black",
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        elevation: 6,
        margin: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '80%',
    },
    labelContainer: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        borderTopWidth: 1,

    },
    label: {
        fontWeight: 'regular',
        color: '#333',
        fontSize: 20,
        fontFamily:'LilitaOne-Regular'
    },
});

export default CategoryCard;

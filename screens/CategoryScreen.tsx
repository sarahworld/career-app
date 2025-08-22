import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import CategoryCard from '../components/CategoryCard';
import PrimaryButton from '../components/PrimaryButton';


const { width } = Dimensions.get('window');

export default function CategorySelectionScreen() {
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={styles.container}>
            {/* Top Logo Row */}
            <View style={styles.topRow}>
                <View style={styles.logoCircle}>
                    <Text style={styles.logoText}>PATHFINDER</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {/* Category Cards */}
                <View style={styles.grid}>
                    <CategoryCard imageSource={require('../assets/categories/student.png')} title="Student" />
                    <CategoryCard imageSource={require('../assets/categories/mom.png')} title="Mom" />
                    <CategoryCard imageSource={require('../assets/categories/midcareer.png')} title="Mid Career" />
                    <CategoryCard imageSource={require('../assets/categories/immigrant.png')} title="New Immigrant" />
                </View>

                {/* Space for Ad */}
                <View style={styles.adSpace}>
                    <Text style={styles.adText}>Ad Space</Text>
                </View>

                <PrimaryButton title="Get Started" onPress={() => navigation.navigate('BioScreen')} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7dce8',
        paddingTop: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    logoCircle: {
        width: 70,
        height: 70,
        backgroundColor: '#d3f4e0',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        elevation: 5,
    },
    logoText: {
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'LilitaOne-Regular',
    },
    content: {
        alignItems: 'center',
        paddingBottom: 40,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    adSpace: {
        height: 80,
        width: width * 0.9,
        marginTop: 20,
        backgroundColor: '#ccc',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adText: {
        color: '#444',
        fontStyle: 'italic',
    },
});
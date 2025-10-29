import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform,
} from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';

// ---------- Reusable bits (kept here for DRY + portability) ----------
const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Text style={styles.label}>{children}</Text>
);

const Field: React.FC<{
    value: string;
    onChangeText: (t: string) => void;
    placeholder?: string;
}> = ({ value, onChangeText, placeholder }) => (
    <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#9a9a9a"
    />
);

const MultilineField: React.FC<{
    value: string;
    onChangeText: (t: string) => void;
    placeholder?: string;
}> = ({ value, onChangeText, placeholder }) => (
    <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9a9a9a"
        multiline
        textAlignVertical="top"
        numberOfLines={6}
        style={styles.textArea}
    />
);

const PrimaryButton: React.FC<{
    title: string;
    onPress: () => void;
    style?: any;
}> = ({ title, onPress, style: styleOverride }) => (
    <TouchableOpacity onPress={onPress} style={[styles.cta, styleOverride]}>
        <Text style={styles.ctaText}>{title}</Text>
    </TouchableOpacity>
);

const Pill: React.FC<{ text: string }> = ({ text }) => (
    <View style={styles.pill}>
        <Text style={styles.pillText}>{text}</Text>
    </View>
);

// ----------------------- Screen -----------------------
// type BioScreenProps = {
//     navigation?: { goBack: () => void; navigate: (r: string) => void };
// };

const BioScreen: React.FC = () => {


    const navigation = useNavigation<NavigationProp<any>>();
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("New Migrant");
    const [workExp, setWorkExp] = useState("");
    const [education, setEducation] = useState("");

    const handleSave = () => {
        // TODO: persist to storage / backend
        console.log({ name, city, category, workExp, education });
    };

    const goToTest = () => {
        // TODO: navigate to your test screen
        navigation.navigate("CareerTestScreen")
    };

    return (
        <View style={styles.root}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation?.goBack?.()}
                    style={styles.backButton}
                >
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <View style={{ width: 48 }} />{/* spacer to balance layout */}
            </View>

            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <Pill text={category} />

                <View style={styles.formCard}>
                    <Label>Name:</Label>
                    <Field value={name} onChangeText={setName} placeholder="Your name" />

                    <Label>City:</Label>
                    <Field value={city} onChangeText={setCity} placeholder="e.g., Surrey" />

                    <Label>Category:</Label>
                    <Field
                        value={category}
                        onChangeText={setCategory}
                        placeholder="New Migrant / New Mom / Student…"
                    />

                    <Label>Work Experience:</Label>
                    <MultilineField
                        value={workExp}
                        onChangeText={setWorkExp}
                        placeholder="Briefly describe your experience"
                    />

                    <Label>Education:</Label>
                    <MultilineField
                        value={education}
                        onChangeText={setEducation}
                        placeholder="Highest education, certifications, courses"
                    />
                </View>

                <View style={styles.footerButtons}>
                    <PrimaryButton title="Save" onPress={handleSave} />
                    <PrimaryButton title="Go to Test" onPress={goToTest} />
                </View>
            </ScrollView>
        </View>
    );
};



// ----------------------- Styles -----------------------
const pastelBg = "#E6DCEA";
const mint = "#D3F2E2";
const yellow = "#EECA66";
const cardIvory = "#FFFFFF";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: pastelBg,
    },
    header: {
        backgroundColor: mint,
        paddingTop: 18,
        paddingBottom: 12,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#00000025",
    },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    backIcon: {
        fontSize: 22,
        fontWeight: "700",
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "900",
        fontFamily: 'LilitaOne-Regular',
        letterSpacing:2,
    },

    scroll: {
        padding: 14,
        paddingBottom: 32,
    },
    pill: {
        alignSelf: "center",
        backgroundColor: yellow,
        paddingVertical: 16,
        paddingHorizontal: 28,
        marginBottom: 14,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:"black",
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 6,
    },
    pillText: {
        fontWeight: "400",
        fontSize: 18,
        fontFamily: 'LilitaOne-Regular',
        letterSpacing:2,
    },
    formCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 14,
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: "#00000015",
    },
    label: {
        marginTop: 10,
        marginBottom: 6,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'LilitaOne-Regular',
        letterSpacing:1,

    },
    input: {
        backgroundColor: cardIvory,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#00000035",
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    textArea: {
        backgroundColor: cardIvory,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#00000035",
        paddingHorizontal: 12,
        paddingTop: 10,
        height: 130,
    },
    footerButtons: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,

    },
    cta: {
        backgroundColor: yellow,
        paddingVertical: 14,
        paddingHorizontal: 24,
        margin:20,
        minWidth: 130,
        alignItems: "center",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:"black",
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        elevation: 6,
    },
    ctaText: {
        fontWeight: "400",
        fontSize: 18,
        fontFamily: 'LilitaOne-Regular',
        letterSpacing:1,
    },
});


export default BioScreen;
import React, { useMemo, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Switch,
    FlatList,
    TouchableOpacity,
    Platform,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

// ---------------- Reusable UI bits ----------------
const colors = {
    bg: "#E6DCEA",
    header: "#D3F2E2",
    card: "#ffffff",
    cta: "#EECA66",
    text: "#000",
};

const Header: React.FC<{ title: string; onBack?: () => void }> = ({ title, onBack }) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} accessibilityRole="button">
            <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 48 }} />
    </View>
);

const Card: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
    <View style={[styles.card]}>{children}</View>
);

const PrimaryButton: React.FC<{ title: string; onPress: () => void }> = ({ title, onPress }) => (
    <TouchableOpacity style={styles.cta} onPress={onPress}>
        <Text style={styles.ctaText}>{title}</Text>
    </TouchableOpacity>
);

type ToggleRowProps = {
    id: string;
    text: string;
    bold?: boolean;
    value: boolean;
    onChange: (id: string, v: boolean) => void;
};
const ToggleRow: React.FC<ToggleRowProps> = ({ id, text, bold, value, onChange }) => (
    <View style={styles.row}>
        <Text style={[styles.rowText, bold && styles.rowTextBold]}>{text}</Text>
        <Switch
            value={value}
            onValueChange={(v) => onChange(id, v)}
            thumbColor={Platform.OS === "android" ? (value ? "#6b6b6b" : "#6b6b6b") : undefined}
            trackColor={{ false: "#d6cfe0", true: "#bcb3c6" }}
        />
    </View>
);

// ---------------- Screen ----------------
type CareerTestScreenProps = {
    navigation: { navigate: () => void };
};

type Question = { id: string; text: string; bold?: boolean };

function CareerTestScreen() {
    const navigation = useNavigation<NavigationProp<any>>();
    const questions: Question[] = useMemo(
        () => [
            { id: "q1", text: "I like to work on cars:" },
            { id: "q2", text: "I like to do puzzles" },
            { id: "q3", text: "I am good at working independently", bold: true },
            { id: "q4", text: "I like to work in teams" },
            {
                id: "q5",
                text: "I am an ambitious person,\nI set goals for myself",
                bold: true,
            },
            {
                id: "q6",
                text: "I like to organize things,\n(files, desks/offices)",
                bold: true,
            },
        ],
        []
    );

    const [answers, setAnswers] = useState<Record<string, boolean>>({});

    const setAnswer = (id: string, v: boolean) =>
        setAnswers((prev) => ({ ...prev, [id]: v }));

    const onSubmit = () => {
        const score = Object.values(answers).filter(Boolean).length;
        console.log("Answers:", answers, "Score:", score);
    };

    return (
        <View style={styles.root}>
            <Header title="Career Test" onBack={() => navigation.navigate("Home")} />
            <Card style={{ marginTop: 10 }}>
                <FlatList
                    data={questions}
                    keyExtractor={(q) => q.id}
                    renderItem={({ item }) => (
                        <ToggleRow
                            id={item.id}
                            text={item.text}
                            value={!!answers[item.id]}
                            onChange={setAnswer}
                        />
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    showsVerticalScrollIndicator={false}
                />
            </Card>
            <View style={styles.footer}>
                <PrimaryButton title="Submit" onPress={() => navigation.navigate("PersonalityTestScreen")} />
            </View>
        </View>
    );
}

export default CareerTestScreen;

// ---------------- Styles ----------------
const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.bg },
    header: {
        backgroundColor: colors.header,
        paddingTop: 18,
        paddingBottom: 12,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#00000020",
    },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    backIcon: { fontSize: 22, fontWeight: "700" },
    headerTitle: {
        fontSize: 30,
        fontWeight: "900",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 2,
    },
    card: {
        flex: 1,
        backgroundColor: colors.card,
        borderRadius: 14,
        marginHorizontal: 10,
        padding: 14,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
    },
    rowText: {
        flex: 1,
        fontSize: 18,
        fontWeight: "400",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
        paddingRight: 12,
    },
    rowTextBold: {
        fontWeight: "700",
    },
    separator: { height: 6 },
    footer: {
        paddingVertical: 16,
        alignItems: "center",
    },
    cta: {
        backgroundColor: colors.cta,
        paddingVertical: 14,
        paddingHorizontal: 28,
        minWidth: 140,
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 6,
    },
    ctaText: {
        fontSize: 18,
        fontWeight: "400",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
    },
});
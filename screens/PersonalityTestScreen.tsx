// screens/PersonalityTestScreen.tsx
import React, { useMemo, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Platform,
} from "react-native";

/* ----------------------- Theme ----------------------- */
const COLORS = {
    bg: "#E6DCEA",
    header: "#D3F2E2",
    card: "#ffffff",
    text: "#000",
    cta: "#EECA66",
    red: "#F9A0A0",
    redDark: "#DD3333",
    redLight: "#f8b2b2",
    green: "#B7E2A8",
    greenDark: "#2BA425",
    greenLight: "#bfe8c1",
    neutral: "#cccccc",
};
import { NavigationProp, useNavigation } from "@react-navigation/native";

/* ----------------------- Reusable UI ----------------------- */
const Header: React.FC<{ title: string; onBack?: () => void }> = ({
                                                                      title,
                                                                      onBack,
                                                                  }) => (
    <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => onBack?.()}>
            <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 48 }} />
    </View>
);

const Card: React.FC<{ children: React.ReactNode; style?: any }> = ({
                                                                        children,
                                                                        style,
                                                                    }) => <View style={[styles.card, style]}>{children}</View>;

type PillProps = {
    label: string;
    selected?: boolean;
    color?: "redDark" | "red" | "green" | "greenDark" | "neutral";
    onPress?: () => void;
};

const ChoicePill: React.FC<PillProps & { style?: any }> = ({
                                                               label,
                                                               selected,
                                                               color = "neutral",
                                                               onPress,
                                                               style,
                                                           }) => {
    return (
        <TouchableOpacity
            style={[
                styles.pill,
                { backgroundColor: COLORS[color] },
                selected && styles.pillSelected,
                style,
            ]}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={{ selected }}
        >
            <Text
                style={[styles.pillText, selected && styles.pillTextSelected]}
                numberOfLines={2}
                ellipsizeMode="tail"
                adjustsFontSizeToFit

            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

type LikertRowProps = {
    id: string;
    text: string;
    value?: number; // 1..5
    onChange: (id: string, val: number) => void;
    bold?: boolean;
};
const LikertRow: React.FC<LikertRowProps> = ({
                                                 id,
                                                 text,
                                                 value,
                                                 onChange,
                                                 bold,
                                             }) => (
    <View style={{ marginBottom: 16 }}>
        <Text style={[styles.qText]}>{text}</Text>
        <View style={styles.pillRow}>
            {[1,2,3,4,5].map((val, idx) => {
                const allowedColors: Array<"redDark" | "red" | "neutral" | "green" | "greenDark"> =
                    ["redDark", "red", "neutral", "green", "greenDark"];
                return (
                    <ChoicePill
                        key={val}
                        label={["Strongly disagree", "disagree", "Neutral", "Agree", "Strongly Agree"][idx]}
                        color={allowedColors[idx]}
                        selected={value === val}
                        onPress={() => onChange(id, val)}
                        style={idx < 4 ? { marginRight: 8 } : { marginRight: 0 }}
                    />
                );
            })}
        </View>
    </View>
);

const PrimaryButton: React.FC<{ title: string; onPress: () => void }> = ({
                                                                             title,
                                                                             onPress,
                                                                         }) => (
    <TouchableOpacity style={styles.cta} onPress={onPress}>
        <Text style={styles.ctaText}>{title}</Text>
    </TouchableOpacity>
);

/* ----------------------- Types ----------------------- */
type Question = { id: string; text: string; bold?: boolean };
type Props = {};

/* ----------------------- Screen ----------------------- */
const PersonalityTestScreen: React.FC<Props> = () => {

    const navigation = useNavigation<NavigationProp<any>>();
    const questions: Question[] = useMemo(
        () => [
            {
                id: "q1",
                text: "I would be quite bored by a visit to an art gallery.",

            },
            {
                id: "q2",
                text: "I plan ahead and organize things, to avoid scrambling at the last minute..",
            },
            {
                id: "q3",
                text: "I plan ahead and organize things, to avoid scrambling at the last minute..",
            },
        ],
        []
    );

    const [answers, setAnswers] = useState<Record<string, number>>({});

    const setAnswer = (id: string, val: number) =>
        setAnswers((prev) => ({ ...prev, [id]: val }));

    const onSubmit = () => {
        // Example: compute mean score (1..5)
        const vals = Object.values(answers);
        const mean = vals.length
            ? vals.reduce((a, b) => a + b, 0) / vals.length
            : 0;
        console.log("answers:", answers, "mean:", mean);
        navigation.navigate("ReportScreen")
        // TODO: map to HEXACO/Big-5 traits and navigate to results

    };

    return (
        <View style={styles.root}>
            <Header title="Personality Test" onBack={() => navigation?.goBack?.()} />

            <Card style={{ marginTop: 10 }}>
                <FlatList
                    data={questions}
                    keyExtractor={(q) => q.id}
                    renderItem={({ item }) => (
                        <LikertRow
                            id={item.id}
                            text={item.text}
                            value={answers[item.id]}
                            onChange={setAnswer}
                        />
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<View style={{ height: 8 }} />}
                />
            </Card>

            <View style={styles.footer}>
                <PrimaryButton title="Submit" onPress={onSubmit} />
            </View>
        </View>
    );
};

export default PersonalityTestScreen;

/* ----------------------- Styles ----------------------- */
const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: COLORS.bg },

    header: {
        backgroundColor: COLORS.header,
        paddingTop: 18,
        paddingBottom: 12,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#00000022",
    },
    backBtn: {
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
        backgroundColor: COLORS.card,
        borderRadius: 14,
        marginHorizontal: 10,
        padding: 10,

    },

    qText: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: 10,
        fontWeight: "200",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
        textAlign: "left",
    },


    pillRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pill: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 6,
        marginRight: 8, // Add margin except for last pill in render
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        elevation: 5,
        minWidth: 0, // Allow shrinking


    },
    pillSelected: {
        transform: [{ translateY: -1 }],
    },
    pillText: {
        fontSize: 14, // reduced from 16
        fontWeight: "400",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
        textAlign: "center",
    },

    pillTextSelected: {
        textDecorationLine: "underline",
    },

    footer: {
        paddingVertical: 16,
        alignItems: "center",
    },
    cta: {
        backgroundColor: COLORS.cta,
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 28,
        minWidth: 140,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#00000080",
    },
    ctaText: {
        fontSize: 18,
        fontWeight: "400",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
    },
});
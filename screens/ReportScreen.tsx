// screens/report.tsx
import React, { useMemo } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Share,
    ScrollView,
} from "react-native";

/* ----------------------- Theme ----------------------- */
const COLORS = {
    bg: "#e4e1c9",
    header: "#e4e1c9",
    card: "#e4e1c9",
    text: "#000",
    lilac: "#ea5db9",
    mint: "#d6f1e7",
    sand: "#edcb6e",
    ctaShare: "#e9c9f2",
    ctaHome: "#d3f4e0",
};

const SHADOW = Platform.select({
    ios: {
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    android: { elevation: 6 },
});

/* ----------------------- Reusable UI ----------------------- */
const Header: React.FC<{ title: string; onBack?: () => void }> = ({
                                                                      title,
                                                                  }) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
);


type CardProps = {
    title: string;
    subtitle?: string;
    color?: string;
    children?: React.ReactNode;
};
const BubbleCard: React.FC<CardProps> = ({
                                             title,
                                             subtitle,
                                             color = COLORS.card,
                                             children,
                                         }) => (
    <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={styles.cardTitle}>{title}</Text>
        {!!subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
        {children}
    </View>
);

const PillButton: React.FC<{ label: string; bg: string; onPress: () => void }> =
    ({ label, bg, onPress }) => (
        <TouchableOpacity style={[styles.pillBtn, { backgroundColor: bg }]} onPress={onPress}>
            <Text style={styles.pillBtnText}>{label}</Text>
        </TouchableOpacity>
    );

/* ----------------------- Types ----------------------- */
type Career = {
    id: string;
    title: string;
    whyItFits?: string;
    color: string;
};

type Props = {
    navigation?: { navigate: (r: string) => void };
    careers?: Career[]; // optionally pass in from previous screen
};

/* ----------------------- Screen ----------------------- */
const ReportScreen: React.FC<Props> = ({ navigation, careers: passedCareers }) => {
    // Fallback sample (replace with results from your scoring logic)
    const careers = useMemo<Career[]>(
        () =>
            passedCareers ?? [
                {
                    id: "1",
                    title: "UX Researcher",
                    whyItFits: "Why it fits:",
                    color: COLORS.lilac,
                },
                { id: "2", title: "Entrepreneur", color: COLORS.mint },
                { id: "3", title: "Motivational speaker", color: COLORS.sand },
            ],
        [passedCareers]
    );

    const onShare = async () => {
        const text = `Top careers for you:\n${careers
            .map((c, i) => `${i + 1}. ${c.title}`)
            .join("\n")}`;
        try {
            await Share.share({ message: text });
        } catch {}
    };

    return (
        <View style={styles.root}>
            <Header title="Report" />

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.headline}>Top 3 careers for you</Text>

                <View style={styles.cardsWrap}>
                    {careers.map((c) => (
                        <BubbleCard
                            key={c.id}
                            title={c.title}
                            subtitle={c.whyItFits}
                            color={c.color}
                        />
                    ))}
                </View>

                <View style={styles.footerBtns}>
                    <PillButton label="Share" bg={COLORS.ctaShare} onPress={onShare} />
                    <PillButton
                        label="Home"
                        bg={COLORS.ctaHome}
                        onPress={() => navigation?.navigate?.("Home")}
                    />
                </View>
            </ScrollView>
        </View>
    );
};


/* ----------------------- Styles ----------------------- */
const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: COLORS.bg },
    header: {
        backgroundColor: COLORS.header,
        paddingTop: 18,
        paddingBottom: 12,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#00000022",
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: "900",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 2,
        color: COLORS.text,
        textAlign: "center",
        marginVertical: 8, },

    content: { padding: 12, paddingBottom: 32 },
    headline: {
        fontSize: 24,
        fontWeight: "400",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
        color: COLORS.text,
        textAlign: "center",
        marginVertical: 8,
    },

    cardsWrap: { gap: 14 },

    card: {

        padding: 14,
        width:'50%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 6,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "200",
        color: COLORS.text,
        marginBottom: 6,
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
        textAlign: "left",
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: "700",
        color: COLORS.text,
        opacity: 0.9,
    },

    footerBtns: {
        marginTop: 18,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    pillBtn: {
        alignSelf: "center",
        paddingVertical: 16,
        paddingHorizontal: 28,
        margin: 14,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 6,
    },
    pillBtnText: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: 10,
        fontWeight: "200",
        fontFamily: "LilitaOne-Regular",
        letterSpacing: 1,
        textAlign: "left", },
});

export default ReportScreen;
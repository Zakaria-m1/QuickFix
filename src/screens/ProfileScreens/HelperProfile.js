import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

// Helper Profile Component
const HelperProfile = () => {
    const { colors } = useTheme();
    const styles = getStyles(colors);

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 2,
            },
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profileHeader}>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Zakaria</Text>
                        <Text style={styles.earnings}>
                            Totala intäkter: <Text style={styles.earningsAmount}>5000 kr</Text>
                        </Text>
                    </View>
                    <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Aktivitet</Text>
                    <LineChart
                        data={data}
                        width={320}
                        height={220}
                        chartConfig={{
                            backgroundColor: colors.background,
                            backgroundGradientFrom: colors.background,
                            backgroundGradientTo: colors.background,
                            decimalPlaces: 2,
                            color: (opacity = 1) => colors.primary,
                            labelColor: (opacity = 1) => colors.text,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: colors.accent,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Dina betyg</Text>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Visa recensioner</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Jobbstatistik</Text>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Antal genomförda jobb: 50</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// Styles
const getStyles = (colors) => StyleSheet.create({
    safeareaview: {
        marginBottom: 80,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    createAccountButton: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    createAccountButtonText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        fontSize: 16,
        color: colors.text,
        marginLeft: 5,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    actionButton: {
        alignItems: 'center',
    },
    actionButtonText: {
        marginTop: 5,
        fontSize: 14,
        color: colors.text,
    },
    section: {
        padding: 20,
        backgroundColor: colors.card,
        marginBottom: 10,
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
    },
    sectionDescription: {
        fontSize: 14,
        color: colors.text,
        marginTop: 5,
    },
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    progressText: {
        fontSize: 14,
        color: colors.text,
    },
    sectionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.separator,
    },
    sectionItemText: {
        fontSize: 16,
        color: colors.text,
    },
    versionText: {
        fontSize: 12,
        color: colors.gray,
        textAlign: 'center',
        marginVertical: 20,
    },
    earnings: {
        fontSize: 16,
        color: colors.text,
        marginTop: 5,
    },
    earningsAmount: {
        color: colors.accent,
    },
    helperSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    helperImage: {
        width: '90%',
        height: 200,
        borderRadius: 10,
    },
    helperButton: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 10,
    },
    helperButtonText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    helperText: {
        marginTop: 10,
        fontSize: 16,
        color: colors.text,
    },
    helperLink: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HelperProfile;

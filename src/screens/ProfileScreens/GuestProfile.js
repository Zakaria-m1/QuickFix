import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

// Guest Profile Component
const GuestProfile = () => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (
        <SafeAreaView style={styles.safeareaview}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.createAccountButton}>
                        <Text style={styles.createAccountButtonText}>SKAPA KONTO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Krediter</Text>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Ge bort krediter</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Lös in kampanjkod</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Inställningar</Text>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Annonsbevakning</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Meddelanden & notiser</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Betalsätt</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Region</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Språk</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Översättningsspråk</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Hjälp</Text>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Hjälp & FAQ</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Kontakta oss</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Information</Text>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Så här fungerar TipTapp</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Återvinningsinformation</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Har du en idé till att förbättra appen?</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Användarvillkor</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text style={styles.sectionItemText}>Integritetspolicy</Text>
                        <MaterialIcons name="chevron-right" size={24} color={colors.text} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.versionText}>TipTapp version 4.61.0 (20240611160021)</Text>
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

export default GuestProfile;

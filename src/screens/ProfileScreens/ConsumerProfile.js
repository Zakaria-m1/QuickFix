import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import JobbaModal from '../../components/modals/JobbaModal';

// Consumer Profile Component
const ConsumerProfile = () => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profileHeader}>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Zakaria M</Text>
                        <View style={styles.ratingContainer}>
                            <MaterialIcons name="star" size={20} color={colors.accent} />
                            <Text style={styles.rating}>4.20</Text>
                        </View>
                    </View>
                    <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                        <MaterialIcons name="support" size={24} color={colors.accent} />
                        <Text style={styles.actionButtonText}>Hjälp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MaterialIcons name="account-balance-wallet" size={24} color={colors.accent} />
                        <Text style={styles.actionButtonText}>Plånboken</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MaterialIcons name="event" size={24} color={colors.accent} />
                        <Text style={styles.actionButtonText}>Aktivitet</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.helperSection}>
                    <Image source={{ uri: 'https://th.bing.com/th/id/R.7beee0700b652cbad6fb99374aa2db03?rik=nhf%2bTawNcWgpgw&pid=ImgRaw&r=0' }} style={styles.helperImage} />
                    <TouchableOpacity style={styles.helperButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.helperButtonText}>Tjäna pengar nu</Text>
                    </TouchableOpacity>
                    <JobbaModal visible={modalVisible} onClose={() => setModalVisible(false)} />
                    <Text style={styles.helperText}>Är ni ett företag?</Text>
                    <TouchableOpacity style={styles.smallButton}>
                        <Text style={styles.smallButtonText}>Skapa konto här istället</Text>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Säkerhetskontroll</Text>
                    <Text style={styles.sectionDescription}>Stärk säkerheten genom att aktivera ytterligare funktioner</Text>
                    <View style={styles.progressBarContainer}>
                        <Text style={styles.progressText}>1/6</Text>
                        <Progress.Bar progress={0.16} width={200} color={colors.primary} />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>100% rabatt på din första annons</Text>
                    <Text style={styles.sectionDescription}>Hitta hjälp till ett lägre pris...</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}></Text>
                    <Text style={styles.sectionDescription}>Förmåner för </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Beräknad CO₂-besparing</Text>
                    <Text style={styles.sectionDescription}>0 g</Text>
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
                <Text style={styles.versionText}>Quik version 1.0.0 (20240611160021)</Text>
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
        color: colors.accent,
        marginLeft: 5,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 55,
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

    },
    helperImage: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        marginBottom: 5,
    },
    helperButton: {
        backgroundColor: colors.accent,
        paddingVertical: 15,
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
        marginTop: 20,
        fontSize: 16,
        color: colors.text,
    },
    smallButton: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 15,
    },
    smallButtonText: {
        color: colors.accent,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ConsumerProfile;

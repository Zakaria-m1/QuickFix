import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../../styles/global';
import { useTheme } from '@react-navigation/native';
import GlobalModal from '../common/Button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const broomIcon = <FontAwesome5 name="broom" size={20} color="#000" />;
const categories = [
    { name: 'Städning', icon: 'home-outline', gradient: ['#4facfe', '#00f2fe'], details: [
        { detail: 'Dammsugning', icon: broomIcon }, // using a sweeping icon to resemble broom
        { detail: 'Fönsterputs', icon: 'ios-eye-outline' },
        { detail: 'Golvvård', icon: 'layers-outline' },
        { detail: 'Köksrengöring', icon: 'sparkles' }
    ]},
    { name: 'Flytt och Transport', icon: 'car-outline', gradient: ['#fbc2eb', '#a6c1ee'], details: [
        { detail: 'Flytta vad som helst', icon: 'cube-outline' },
        { detail: 'Leverans samma dag', icon: 'time-outline' },
        { detail: 'Försäkring utan självrisk', icon: 'shield-checkmark-outline' },
        { detail: 'Tunga lyft', icon: 'barbell-outline' }
    ]},
    { name: 'Hantverkare', icon: 'construct-outline', gradient: ['#43e97b', '#38f9d7'], details: [
        { detail: 'Snickeri', icon: 'hammer-outline' },
        { detail: 'VVS-tjänster', icon: 'water-outline' },
        { detail: 'Elektriker', icon: 'flash-outline' },
        { detail: 'Måleri', icon: 'color-palette-outline' }
    ]},
    { name: 'Trädgård', icon: 'leaf-outline', gradient: ['#fa709a', '#fee140'], details: [
        { detail: 'Gräsklippning', icon: 'cut-outline' },
        { detail: 'Beskärning', icon: 'cut-outline' },
        { detail: 'Landskapsdesign', icon: 'map-outline' },
        { detail: 'Plantering', icon: 'flower-outline' }
    ]},
    { name: 'IT-hjälp', icon: 'desktop-outline', gradient: ['#4facfe', '#00f2fe'], details: [
        { detail: 'Datorreparation', icon: 'settings-outline' },
        { detail: 'Nätverksinstallation', icon: 'wifi-outline' },
        { detail: 'Virusborttagning', icon: 'shield-outline' },
        { detail: 'Teknisk support', icon: 'headset-outline' }
    ]},
    { name: 'Personliga Tjänster', icon: 'person-outline', gradient: ['#fbc2eb', '#a6c1ee'], details: [
        { detail: 'Personlig assistans', icon: 'hand-left-outline' },
        { detail: 'Livscoaching', icon: 'bulb-outline' },
        { detail: 'Rådgivning', icon: 'chatbubble-outline' },
        { detail: 'Ärendehantering', icon: 'clipboard-outline' }
    ]},
    { name: 'Event Tjänster', icon: 'calendar-outline', gradient: ['#43e97b', '#38f9d7'], details: [
        { detail: 'Eventplanering', icon: 'calendar-outline' },
        { detail: 'Catering', icon: 'restaurant-outline' },
        { detail: 'Dekoration', icon: 'balloon-outline' },
        { detail: 'Underhållning', icon: 'musical-notes-outline' }
    ]},
    { name: 'Skönhet och Hälsa', icon: 'heart-outline', gradient: ['#fa709a', '#fee140'], details: [
        { detail: 'Hårklippning', icon: 'cut-outline' },
        { detail: 'Massage', icon: 'hand-left-outline' },
        { detail: 'Hudvård', icon: 'sparkles-outline' },
        { detail: 'Manikyr', icon: 'finger-print-outline' }
    ]},
    { name: 'Fordon', icon: 'bicycle-outline', gradient: ['#4facfe', '#00f2fe'], details: [
        { detail: 'Bilreparation', icon: 'car-outline' },
        { detail: 'Cykelservice', icon: 'bicycle-outline' },
        { detail: 'Däckbyte', icon: 'settings-outline' },
        { detail: 'Biltvätt', icon: 'water-outline' }
    ]},
    { name: 'Bostad', icon: 'home-outline', gradient: ['#fbc2eb', '#a6c1ee'], details: [
        { detail: 'Fastighetsköp', icon: 'home-outline' },
        { detail: 'Fastighetsförvaltning', icon: 'business-outline' },
        { detail: 'Hyresbostäder', icon: 'bed-outline' },
        { detail: 'Homestaging', icon: 'color-palette-outline' }
    ]},
    { name: 'Jobb', icon: 'briefcase-outline', gradient: ['#43e97b', '#38f9d7'], details: [
        { detail: 'Jobbsökning', icon: 'search-outline' },
        { detail: 'CV-skrivning', icon: 'document-outline' },
        { detail: 'Intervjuträning', icon: 'mic-outline' },
        { detail: 'Karriärcoachning', icon: 'school-outline' }
    ]},
    { name: 'Affärsverksamhet', icon: 'storefront-outline', gradient: ['#fa709a', '#fee140'], details: [
        { detail: 'Företagskonsulting', icon: 'business-outline' },
        { detail: 'Marknadsföring', icon: 'megaphone-outline' },
        { detail: 'Affärsutveckling', icon: 'analytics-outline' },
        { detail: 'Redovisning', icon: 'calculator-outline' }
    ]}
];


const AnnonsScreen = () => {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const toggleModal = (category) => {
        setSelectedCategory(category);
        setModalVisible(!isModalVisible);
    };

    const renderIcon = (iconName) => {
        return <Icon name={iconName} size={20} color={colors.accent} />;
    };

    return (
        <SafeAreaView style={styles.container}>
                <Text style={globalStyles.logo}>Vad behöver du hjälp med?</Text>
                <Text style={styles.description}>Genom att välja en kategori kan vi matcha dig med rätt personer!</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.cardsContainer}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.card} onPress={() => toggleModal(category)}>
                            <View style={[styles.gradient, { backgroundColor: colors.accent }]} />
                            <View style={styles.iconTextContainer}>
                                <Icon name={category.icon} size={24} color="#7a7a7a" />
                                <Text style={styles.cardText}>{category.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {selectedCategory && (
                <GlobalModal visible={isModalVisible} onClose={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Icon name={selectedCategory.icon} size={30} color={colors.primary} />
                            <Text style={styles.modalTitle}>{selectedCategory.name}</Text>
                        </View>
                        <View style={styles.detailsContainer}>
                            {selectedCategory.details && selectedCategory.details.map((detail, index) => (
                                <View key={index} style={styles.detailItem}>
                                    {renderIcon(detail.icon)}
                                    <Text style={styles.modalDetail}>{detail.detail}</Text>
                                </View>
                            ))}
                        </View>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Fortsätt</Text>
                        </TouchableOpacity>
                    </View>
                </GlobalModal>
            )}
        </SafeAreaView>
    );
};

const getStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        marginTop: 60,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#7a7a7a',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    cardsContainer: {
        width: '90%',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        overflow: 'hidden',
    },
    gradient: {
        width: 40,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    cardText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#7a7a7a',
        marginLeft: 10,
    },
    modalContent: {
        padding: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginLeft: 10,
    },
    detailsContainer: {
        marginBottom: 15,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    modalDetail: {
        fontSize: 16,
        color: colors.text,
        marginLeft: 10,
    },
    modalButton: {
        marginTop: 20,
        padding: 10,
        paddingHorizontal: 50,
        backgroundColor: colors.accent,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default AnnonsScreen;
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../consts/colors';

const ProfileScreen = () => {
    const chartData = [5, 12, 6, 8, 14, 9, 4];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const barColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#1abc9c'];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileSection}>
                <Image
                    source={require("../assets/images/profile.png")} style={styles.profileImage}
                />
                <Text style={styles.username}>Firas BOUKADIDA</Text>
            </View>

            <View style={styles.chartSection}>
                <View style={styles.chartContainer}>
                    {chartData.map((value, index) => (
                        <View key={index} style={styles.barWrapper}>
                            <View style={[styles.bar, { height: value * 10, backgroundColor: barColors[index] }]} />
                            <Text style={styles.weekDay}>{weekDays[index]}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.card1}>
                <Text style={styles.quoteTitle}>Today's Quote</Text>
                <Text style={styles.quoteText}>
                    It is better to conquer yourself than to win a thousand battles.
                </Text>
            </View>

            <View style={styles.card}>
                {['Notifications', 'Language', 'FAQ'].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.settingRow}>
                        <View style={styles.settingInfo}>
                            <Icon name={item === 'FAQ' ? 'help-outline' : item.toLowerCase()} size={24} color="black" />
                            <Text style={styles.settingText}>{item}</Text>
                        </View>
                        <Icon name="chevron-right" size={24} color="gray" />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    profileSection: {
        alignItems: 'center',
        marginTop: 60
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    chartSection: {
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 40
    },
    chartContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 120,
        justifyContent: 'space-between',
        width: '100%'
    },
    barWrapper: {
        alignItems: 'center',
        width: '12%'
    },
    bar: {
        width: 20,
        borderRadius: 5
    },
    weekDay: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#B9B9B9'
    },
    card1: {
        padding: 18,
        marginBottom: 20,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
    },
    card: {
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
    },
    quoteTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 5
    },
    quoteText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    settingRow: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',

    },
    settingInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingText: {
        marginLeft: 10,
        fontSize: 16
    }
});

export default ProfileScreen;
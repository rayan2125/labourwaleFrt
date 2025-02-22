import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';
import COLORS from "../consts/colors";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.textContainer}>
                    <Text style={styles.greeting}>Hi, Firas!</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/images/profile.png")}
                        style={styles.profileImage}
                    />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <IconF name="search" size={20} color={COLORS.darkGray} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor={COLORS.dark}
                />
            </View>

            <View style={styles.cardsRow}>
                <View style={[styles.card, styles.cardDark]}>
                    <Text style={styles.cardTitle}>Stress day</Text>
                    <Text style={styles.cardTitle}>Relaxation</Text>
                    <View style={styles.playButtonContainer}>
                        <View style={styles.playIconCont}>
                            <Icon name="controller-play" size={30} color={COLORS.dark} />
                        </View>
                        <View style={styles.chipContainer}>
                            <Text style={styles.chipText}>15 min</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.card, styles.cardLight]}>
                    <Text style={styles.cardTitleDark}>Evening</Text>
                    <Text style={styles.cardTitleDark}>Meditation</Text>
                    <Text style={styles.cardTitleDark}>to Relax</Text>

                    <View style={styles.playButtonContainer}>
                        <View style={styles.playIconContainerDark}>
                            <Icon name="controller-play" size={30} color={COLORS.dark} />
                        </View>
                        <View style={styles.chipContainerDark}>
                            <Text style={styles.chipTextDark}>12 min</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.featuredRow}>
                <Text style={styles.featuredText}>Featured for you</Text>
                <TouchableOpacity>
                    <Text style={styles.seeMoreText}>See more</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.exploreCard}>
                <Text style={styles.exploreTitle}>Explore new activities</Text>

                <View style={styles.chipRow}>
                    <View style={styles.exploreChipWhite}>
                        <Text style={styles.exploreChipTextDark}>10 min</Text>
                    </View>
                    <View style={styles.exploreChipPrimary}>
                        <Text style={styles.exploreChipTextLight}>Evening</Text>
                    </View>

                    <View style={styles.playIconContainer}>
                        <Icon name="controller-play" size={24} color={COLORS.dark} />
                    </View>
                </View>
            </View>
            <View style={styles.exploreCardSec}>
                <Text style={styles.exploreTitle}>Meditation for deep sleep</Text>

                <View style={styles.chipRow}>
                    <View style={styles.exploreChipWhite}>
                        <Text style={styles.exploreChipTextDark}>12 min</Text>
                    </View>
                    <View style={styles.exploreChipWhite}>
                        <Text style={styles.exploreChipTextDark}>Sleep</Text>
                    </View>
                    <View style={styles.exploreChipWhite}>
                        <Text style={styles.exploreChipTextDark}>Evening</Text>
                    </View>

                    <View style={styles.playIconContainerSec}>
                        <Icon name="controller-play" size={24} color={COLORS.dark} />
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.white,
    },
    row: {
        marginTop: 45,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textContainer: {
        flex: 6,
    },
    imageContainer: {
        flex: 6,
        alignItems: "flex-end",
    },
    greeting: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.dark,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    searchContainer: {
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        fontSize: 16,
        color: COLORS.dark,
        flex: 1,
    },
    featuredRow: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    featuredText: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.dark,
    },
    seeMoreText: {
        fontSize: 16,
        color: COLORS.grey,
        fontWeight: "600",
    },
    cardsRow: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    card: {
        flex: 6,
        borderRadius: 25,
        padding: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    cardDark: {
        backgroundColor: COLORS.dark,
    },
    cardLight: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginLeft: 20,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.white,
        marginBottom: 10,
    },
    cardTitleDark: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.dark,
    },
    playButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 45,
    },
    playIconContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    playIcon: {
        color: COLORS.dark,
    },
    playIconContainerDark: {
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    playIconDark: {
        color: COLORS.dark,
    },
    chipContainer: {
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 10,
        backgroundColor: COLORS.white,
    },
    chipText: {
        fontSize: 16,
        color: COLORS.dark,
    },
    chipContainerDark: {
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 10,
        backgroundColor: COLORS.secondary,
    },
    chipTextDark: {
        fontSize: 16,
        color: COLORS.dark,
    },
    exploreCard: {
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    exploreCardSec: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    exploreTitle: {
        fontSize: 22,
        fontWeight: "500",
        color: COLORS.dark,
        marginBottom: 10,
    },
    
    chipRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    
    exploreChipWhite: {
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        marginRight: 10,
        borderWidth: 1,
        borderColor: COLORS.grey,
    },
    
    exploreChipPrimary: {
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: COLORS.primary,
        borderWidth: 1,
        borderColor: COLORS.white,
    },
    
    exploreChipTextDark: {
        fontSize: 16,
        color: COLORS.dark,
        fontWeight: "600",
    },
    
    exploreChipTextLight: {
        fontSize: 16,
        color: COLORS.dark,
        fontWeight: "600",
    },
    playIconCont: {
        backgroundColor: COLORS.white,
        borderRadius: 30,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    
    playIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 'auto',
    },
    playIconContainerSec: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 'auto',
    }
});

export default HomeScreen;

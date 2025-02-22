import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import COLORS from "../consts/colors";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const slides = [
    { id: 1, color: "#F7D788", emoji: require("../assets/images/happy.png"), emoji2: require("../assets/images/sad.png") },
    { id: 2, color: "#fff", emoji: null },
];

const emotions = [
    "Insomnia", "Anxiety", "Sadness", "Stress",
    "Uncertainty", "Laziness", "Anger", "Apathy",
    "Envy", "Other"
];

const TutoScreen = () => {
    const [fadeAnim] = useState(new Animated.Value(1));
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigation = useNavigation();
    const swiperRef = useRef(null);
    const [selectedEmotions, setSelectedEmotions] = useState([]);
    const [selectedColor, setSelectedColor] = useState("#F7D788");
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (activeIndex === 0) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        } else {
            fadeAnim.setValue(1);
        }
    }, [activeIndex]);

    const handleImageClick = (color, index) => {
        setSelectedColor(color);
        setSelectedImage(index);
    };

    const toggleEmotion = (emotion) => {
        setSelectedEmotions((prev) =>
            prev.includes(emotion) ? prev.filter(e => e !== emotion) : [...prev, emotion]
        );
    };

    const onSlideChange = (index) => {
        setActiveIndex(index);
        setIsTransitioning(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.paginationContainer}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            activeIndex === index && styles.activePaginationDot,
                        ]}
                    />
                ))}
            </View>

            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={false}
                onIndexChanged={onSlideChange}
            >
                {slides.map((slide, index) => (
                    <View
                        key={slide.id}
                        style={[styles.container, { backgroundColor: index === 0 ? selectedColor : "#fff" }]}
                    >
                        {index === 0 && (
                            <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
                                Hi Firas, How are you? What’s your mood today?
                            </Animated.Text>
                        )}

                        {index === 0 && (
                            <View style={styles.imageRow}>
                                <TouchableOpacity onPress={() => handleImageClick("#F7D788", 0)}>
                                    <Image
                                        source={slide.emoji}
                                        style={[
                                            styles.image,
                                            selectedImage === 0 && styles.selectedImage,
                                        ]}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleImageClick("#ACBAEE", 1)}>
                                    <Image
                                        source={slide.emoji2}
                                        style={[
                                            styles.image,
                                            selectedImage === 1 && styles.selectedImage,
                                        ]}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}

                        {index === 1 && (
                            <View style={styles.emotionsContainer}>
                                <Text style={styles.title}>What's bothering you?</Text>
                                <View style={styles.chipGrid}>
                                    {emotions.map((emotion, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={[
                                                styles.chip,
                                                selectedEmotions.includes(emotion) && styles.selectedChip
                                            ]}
                                            onPress={() => toggleEmotion(emotion)}
                                        >
                                            <Text style={styles.chipText}>{emotion}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        )}

                        <View style={styles.buttonContainer}>

                            <TouchableOpacity
                                style={styles.continueButton}
                                onPress={() => {
                                    if (index < slides.length - 1) {
                                        setIsTransitioning(true);
                                        swiperRef.current.scrollBy(1);
                                    } else {
                                        navigation.replace("MainTabs");
                                    }
                                }}
                            >
                                <Text style={styles.continueButtonText}>
                                    {index < slides.length - 1 ? "Continue" : "Finish"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        position: "relative",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: COLORS.dark,
        fontFamily: "Palanquin-Regular",
        position: "absolute",
        top: "20%",
        zIndex: 1,
    },
    imageRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
    },
    image: {
        width: width / 2.8,
        height: 160,
        borderRadius: 20,
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: "transparent",
        zIndex: 1,
    },
    selectedImage: {
        borderColor: COLORS.dark,
        borderWidth: 1,
        transform: [{ scale: 1.2 }],
    },
    buttonContainer: {
        position: "absolute",
        bottom: "10%",
        width: "100%",
        paddingHorizontal: 20,
        zIndex: 1,
    },
    emotionsContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    chipGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    chip: {
        backgroundColor: "#FAEED2",
        padding: 20,
        borderRadius: 35,
        margin: 5,
        width: "45%",
        alignItems: "center",
    },
    selectedChip: {
        backgroundColor: "#F7D788",
    },
    chipText: {
        fontSize: 16,
        color: COLORS.dark,
    },
    continueButton: {
        backgroundColor: COLORS.dark,
        paddingVertical: 15,
        borderRadius: 25,
        width: width - 80,
        alignItems: "center",
    },
    continueButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    skipButton: {
        backgroundColor: "transparent",
        paddingVertical: 15,
        borderRadius: 25,
        marginBottom: 15,
        width: width - 80,
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.dark,
    },
    skipButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.dark,
    },
    paginationContainer: {
        position: "absolute",
        top: 80,
        flexDirection: "row",
        alignSelf: "center",
        zIndex: 1,
    },
    paginationDot: {
        width: 100,
        height: 4,
        backgroundColor: "#aaa69d",
        marginHorizontal: 5,
        borderRadius: 5,
    },
    activePaginationDot: {
        backgroundColor: COLORS.dark,
        width: 100,
        height: 4,
    },
});

export default TutoScreen;

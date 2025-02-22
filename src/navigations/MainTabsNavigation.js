import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../consts/colors';
import ProfileScreen from '../pages/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="home" color={COLORS.dark} size={size} />
                    ),
                    tabBarLabelStyle: { color: COLORS.primaryDark }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="user" color={COLORS.dark} size={size} />
                    ),
                    tabBarLabelStyle: { color: COLORS.primaryDark }
                }}
            />
        </Tab.Navigator>
    );
}
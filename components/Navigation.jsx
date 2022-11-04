import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Game from "./Game";
import Score from "./Score";

const Tab = createBottomTabNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray'
                }}
                initialRouteName="Home"
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Welcome'
                }}
                />
                <Tab.Screen name="Game" component={Game} />
                <Tab.Screen name={"Score"} component={Score} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


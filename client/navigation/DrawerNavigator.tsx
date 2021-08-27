import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen, SpendingScreen, IncomeScreen } from '../screens/index';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Spending"
      options={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Spending"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Income" component={BottomTabNavigator} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

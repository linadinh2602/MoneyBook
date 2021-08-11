import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { SpendingScreen, IncomeScreen } from '../screens/index';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Spending" component={SpendingScreen} />
        <Drawer.Screen name="Income" component={IncomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

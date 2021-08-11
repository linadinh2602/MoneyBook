/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { BottomTabParamList } from '../types';
import { IncomeScreen, SpendingScreen, LoginScreen } from '../screens';
import { MenuIcon } from '../assets/icons';

//import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="SpendingScreen"
      tabBarOptions={{ activeTintColor: 'red' }}
    >
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => <MenuIcon name="menu-icon" />,
        }}
      />
      <BottomTab.Screen
        name="SpendingScreen"
        component={SpendingScreen}
        options={{
          tabBarIcon: ({ color }) => <MenuIcon name="menu-icon" />,
        }}
      />
      <BottomTab.Screen
        name="IncomeScreen"
        component={IncomeScreen}
        options={{
          tabBarIcon: ({ color }) => <MenuIcon name="menu-icon" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Optional: Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

// const TabOneStack = createStackNavigator<TabOneParamList>();

// function TabOneNavigator() {
//   return (
//     <TabOneStack.Navigator>
//       <TabOneStack.Screen
//         name="SpendingScreen"
//         component={SpendingScreen}
//         options={{ headerTitle: 'Home' }}
//       />
//     </TabOneStack.Navigator>
//   );
// }

import React from 'react';
import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './constants/themes';
import useCustomFont from './hooks/useCustomFont';

import BottomTabNavigator from './navigation/BottomTabNavigator';

export default function App() {
  const isFontLoadingComplete = useCustomFont();

  if (!isFontLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <BottomTabNavigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

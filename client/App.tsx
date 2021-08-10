import React from 'react';
import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, Heading } from 'native-base';

import { theme } from './constants/themes';
import useCustomFont from './hooks/useCustomFont';

import {
  ViewWithBackGround,
  ViewWithTopHeader,
} from './components/ReusableView';

export default function App() {
  const isFontLoadingComplete = useCustomFont();

  if (!isFontLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <ViewWithTopHeader>
            <Heading size="xl">Hello World</Heading>
          </ViewWithTopHeader>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}

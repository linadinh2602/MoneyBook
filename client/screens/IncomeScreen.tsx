import React from 'react';

import { View } from 'native-base';
import {
  FrameWithTopHeaderBackground,
  LargeOverlayContainer,
} from '../components';

export const IncomeScreen = () => {
  return (
    <View bg="primary.50" maxWidth="100%" maxHeight="100%">
      <FrameWithTopHeaderBackground header="Income" />
      <LargeOverlayContainer />
    </View>
  );
};

import React from 'react';
import { Flex, Box, Button } from 'native-base';
import { SpendingScreen, IncomeScreen } from '../screens';

export const DrawerNavigationView = (props) => {
  const { navigation } = props;
  return (
    <Flex>
      <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </Box>
      <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </Box>
    </Flex>
  );
};

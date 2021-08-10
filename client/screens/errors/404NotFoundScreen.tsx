import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../../types';

const styles = StyleSheet.create({
});

export default function NotFound404Screen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}


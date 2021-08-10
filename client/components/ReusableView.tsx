import React from 'react';
import { Flex, Heading } from 'native-base';
import { View, ImageBackground, ViewProps } from 'react-native';

export type ViewWithChildrenProps = { children?: React.ReactNode } & ViewProps;

// Use for Login, Signup Screen

export function ViewWithBackGround(props: ViewWithChildrenProps) {
  const { style, children, ...otherProps } = props;

  return (
    <Flex style={style} {...otherProps} width="100%" height="100%">
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center' }}
        source={require('../assets/images/multiWaves.png')}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </Flex>
  );
}

// Use for Incomes, Budget, Spending
export function ViewWithTopHeader(props: ViewWithChildrenProps) {
  const { style, children, ...otherProps } = props;

  return (
    <View style={style} {...otherProps}>
      <ImageBackground
        style={{ width: '100%', height: 120, justifyContent: 'center' }}
        source={require('../assets/images/topFrame.png')}
        resizeMode="cover"
      >
        <Heading size="xl" style={{ justifyContent: 'center' }}>
          Income
        </Heading>
      </ImageBackground>
      <Flex>{children}</Flex>
    </View>
  );
}

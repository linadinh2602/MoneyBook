import React from 'react';
import { Flex, Heading, Box } from 'native-base';
import { View, ImageBackground, ViewProps } from 'react-native';

export type ViewWithChildrenProps = {
  children?: React.ReactNode;
  header: string;
} & ViewProps;

// Use for Login, Signup Screen
export const FullBackgroundFrame = (props: ViewWithChildrenProps) => {
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
};

export const FrameWithTopHeaderBackground = (props: ViewWithChildrenProps) => {
  const { style, header, children, ...otherProps } = props;

  return (
    <View style={style} {...otherProps}>
      <ImageBackground
        style={{ width: '100%', height: 125, justifyContent: 'center' }}
        source={require('../assets/images/topFrame.png')}
        resizeMode="cover"
      >
        <Box
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Heading size="xl" color="white" marginTop={10}>
            {header}
          </Heading>
        </Box>
      </ImageBackground>
      <Flex>{children}</Flex>
    </View>
  );
};

// Use for IncomesOverLay
export const FrameWithBottomBackground = (props: ViewWithChildrenProps) => {
  const { style, children, ...otherProps } = props;

  return (
    <Flex style={style} {...otherProps} width="100%" height="100%">
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center' }}
        source={require('../assets/images/bottomBackground.png')}
        resizeMode="cover"
      />
      <Flex>{children}</Flex>
    </Flex>
  );
};

// Use for Incomes, Budget
export const FrameWithTopAndBottomBackground = (
  props: ViewWithChildrenProps
) => {
  const { style, header, children, ...otherProps } = props;

  return (
    <Flex style={style} {...otherProps} width="100%" height="100%">
      <ImageBackground
        style={{ width: '100%', height: 125, justifyContent: 'center' }}
        source={require('../assets/images/topFrame.png')}
        resizeMode="cover"
      >
        <Box
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Heading size="xl" color="white" marginTop={10}>
            {header}
          </Heading>
        </Box>
      </ImageBackground>
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center' }}
        source={require('../assets/images/bottomBackground.png')}
        resizeMode="cover"
      />
      <Flex>{children}</Flex>
    </Flex>
  );
};

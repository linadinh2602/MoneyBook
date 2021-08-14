import React from 'react';
import { ImageBackground, ViewProps } from 'react-native';
import { Heading, Flex, VStack, HStack, IconButton } from 'native-base';
import { WhiteBackButtonIcon, WhiteMenuButtonIcon } from '../../assets/icons';

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
        source={require('../../assets/images/multiWaves.png')}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </Flex>
  );
};

// Use for Incomes, Budget
export const FrameWithTopHeaderBackground = (props: ViewWithChildrenProps) => {
  const { style, header, children, ...otherProps } = props;

  return (
    <Flex style={style} {...otherProps} width="100%" height={125}>
      <ImageBackground
        style={{ width: '100%', height: 125, justifyContent: 'center' }}
        source={require('../../assets/images/topFrame.png')}
        resizeMode="cover"
      >
        <>
          <VStack safeArea justifyContent="center" alignItems="center">
            <VStack
              alignItems="center"
              justifyContent="space-between"
              margin={3}
            />
            <HStack space={80} justifyContent="space-between">
              <IconButton icon={<WhiteBackButtonIcon />} />
              <IconButton icon={<WhiteMenuButtonIcon />} />
            </HStack>
            <Heading size="xl" color="white" marginTop={-7}>
              {header}
            </Heading>
          </VStack>
        </>
      </ImageBackground>
      <Flex>{children}</Flex>
    </Flex>
  );
};

// Use for IncomesOverLay
export const FrameWithBottomBackground = (props: ViewWithChildrenProps) => {
  const { style, children, ...otherProps } = props;

  return (
    <Flex style={style} {...otherProps} width="100%" height="100%">
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center' }}
        source={require('../../assets/images/bottomBackground.png')}
        resizeMode="cover"
      />
      <Flex>{children}</Flex>
    </Flex>
  );
};

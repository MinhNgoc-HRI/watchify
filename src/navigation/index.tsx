import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {refNavigation} from './navigationHelper';
import {MainStackParamList} from './types';

const Navigator: React.FC<any> = () => {
  const linking: LinkingOptions<MainStackParamList> = {
    prefixes: ['watchify://'],
    config: {
      screens: {
        ON_BROAD_SCREEN: {
          path: 'onbroad',
        },
      },
    },
  };
  return (
    <NavigationContainer ref={refNavigation} linking={linking}>
      <MainStack />
    </NavigationContainer>
  );
};
export default Navigator;

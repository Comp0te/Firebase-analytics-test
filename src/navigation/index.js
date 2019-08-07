import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'

const Navigator = createStackNavigator({
  screen1: Screen1,
  screen2: Screen2,
}, {
  initialRouteName: 'screen1',
});

const NavigatorContainer = createAppContainer(Navigator);

const AppNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigatorContainer/>
    </View>
  );
};

export default AppNavigator;

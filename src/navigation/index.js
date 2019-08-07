import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import * as firebase from 'react-native-firebase';

const Navigator = createStackNavigator({
  screen1: Screen1,
  screen2: Screen2,
}, {
  initialRouteName: 'screen1',
});

const NavigatorContainer = createAppContainer(Navigator);

class AppNavigator extends React.Component {
  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }

    const route = navigationState.routes[navigationState.index];
    // Dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }

    return route.routeName;
  }

  onNavigationStateChange = (prevState, currentState) => {
    const currentScreen = this.getActiveRouteName(currentState);
    const prevScreen = this.getActiveRouteName(prevState);

    if (prevScreen !== currentScreen) {
      firebase.analytics().setCurrentScreen(currentScreen);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigatorContainer
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </View>
    );
  }
}

export default AppNavigator;

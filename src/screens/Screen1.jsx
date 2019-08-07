import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommonButton from '../components/CommonButton';

export default class Screen1 extends Component {
  onButtonPress = () => {
    this.props.navigation.navigate('screen2');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Screen # 1</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <CommonButton
          title='to Screen2 with analytics'
          onPress={this.onButtonPress}
          event='onPress_button_to_screen_2'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

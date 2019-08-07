import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';

export default class Screen2 extends Component {
  componentDidMount() {
    firebase.analytics()
      .logEvent(`bla_bla_${Platform.OS == 'ios' ? 'Ios' : 'Android'}`, { id: '12345' });
    firebase.analytics().setCurrentScreen("screen2", "screen2");
  }

  onButtonPress = () => {
    this.props.navigation.navigate('screen1');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Screen # 2</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button
          onPress={this.onButtonPress}
          title={'To screen 1'}
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

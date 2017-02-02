import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PressureCalculator from './pressureCalculator.js';

export default class UnderPressure extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Calculate the pressure of an ideal gas!
        </Text>
        <PressureCalculator />
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
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
  },
});

AppRegistry.registerComponent('UnderPressure', () => UnderPressure);

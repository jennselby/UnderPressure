import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class PressureCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1,
      numberMoles: 1,
      temperature: 1,
    };
  }

  getNumber(value) {
    var number = parseInt(value);
    // nan stands for "not a number". This is checking to see if this number is invalid.
    // if it is, use 1 instead.
    if (value === '' || isNaN(number)) {
        number = 1;
    }
    return number;
  }

  onVolumeChange(value) {
    this.setState({volume: this.getNumber(value)});
  }

  onNumberMolesChange(value) {
    this.setState({numberMoles: this.getNumber(value)});
  }

  onTemperatureChange(value) {
    this.setState({temperature: this.getNumber(value)});
  }

  render() {
    var universalGasConstant = 8.31; // joules / (moles * Kelvins)
    var pressure = (this.state.numberMoles * universalGasConstant * this.state.temperature) / this.state.volume;
    return (
      <View style={styles.container}>
        <Text style={styles.output}>
          Pressure: {pressure}
        </Text>
        <Text style={styles.textBox}>
          Input Volume:
        </Text>
        <TextInput
          style={styles.textInput}    
          keyboardType='numeric'
          placeholder='1'
          onChangeText={(value) => this.onVolumeChange(value)}
          underlineColorAndroid='transparent'
        />
        <Text style={styles.textBox}>
          Input Number of Moles:
        </Text>
        <TextInput
          style={styles.textInput}    
          keyboardType='numeric'
          placeholder='1'
          onChangeText={(value) => this.onNumberMolesChange(value)}
          underlineColorAndroid='transparent'
        />
        <Text style={styles.textBox}>
          Input Temperature:
        </Text>
        <TextInput
          style={styles.textInput}    
          keyboardType='numeric'
          placeholder='1'
          onChangeText={(value) => this.onTemperatureChange(value)}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    textAlign: 'center',
    height: 40,
    fontSize: 20,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  textBox: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  output: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#6600ff',
  },
});

AppRegistry.registerComponent('PressureCalculator', () => PressureCalculator);

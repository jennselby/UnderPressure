import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
} from 'react-native';

export default class PressureDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressure: this.calculatePressure(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({pressure: this.calculatePressure(nextProps)})
  }

  calculatePressure(values) {
    var universalGasConstant = 0.0821;
    var pressure = '';
    if (values.volume === 0) {
        pressure = 'I cannot divide by zero!';
    }
    else {
      pressure = (values.numberMoles * universalGasConstant * values.temperature) / values.volume;
    }
    return pressure;

  }

  render() {
    return (
      <Text style={styles.output}>
        Pressure: {this.state.pressure}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  output: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#6600ff',
  }
});

AppRegistry.registerComponent('PressureDisplay', () => PressureDisplay);

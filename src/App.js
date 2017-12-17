import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


export default class App extends Component {
  constructor() {
    super();
    this.state = { hidden: true };
  }

  render() {
    const hidden = this.state.hidden;
    return (
      <View style={style.container}>
        <TextInput
          value="ABCDE"
          secureTextEntry
          keyboardType={hidden ? 'default' : 'visible-password'}
          onChangeText={() => { this.setState({ hidden: !hidden }); }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

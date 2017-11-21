import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={style.container}><Text>Hello, World!</Text></View>
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

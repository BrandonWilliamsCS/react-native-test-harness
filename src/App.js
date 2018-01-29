import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TextField } from "react-native-material-textfield";

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <TextField
          label="Material TextField"
          value="value"
          containerStyle={style.textFieldContainer}
        />
        <TextField
          label="With Workaround"
          value="value"
          containerStyle={style.textFieldContainer}
          style={style.textField}
        />
        <Text>RN built-in</Text>
        <TextInput style={style.textInput} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee"
  },
  textFieldContainer: {
    width: 100
  },
  textField: {
    // WORKAROUND: clearing out the font size restores functionality but obviously breaks accessible sizing.
    fontSize: null
  },
  textInput: {
    width: 100,
    borderColor: "black",
    borderWidth: 1
  }
});

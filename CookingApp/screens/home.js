import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground
} from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translations: {
        welcome: "Welcome",
        search: "Tell us what ingredients you have.."
      }
    };
  }

  render() {
    return (
      <ImageBackground
        style={styles.image}
        source={require("../assets/img/welcome.jpg")}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>{this.state.translations.welcome}</Text>
          <TextInput
            style={styles.searchField}
            onChangeText={text => this.setState({ text })}
            value={this.state.translations.search}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 40,
    color: "#f4f5f6",
    fontFamily: "Papyrus"
  },
  searchField: {
    height: 28,
    width: 300,
    top: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f4f5f6",
    fontSize: 20,
    color: "#f4f5f6",
    fontFamily: "Papyrus"
  }
});

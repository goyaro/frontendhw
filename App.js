import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import Home from "./components";
import Other from "./components/Other";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route exact path="/other" render={props => <Other {...props} />} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

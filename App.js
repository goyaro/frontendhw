import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import { CategoryPage } from "./components";
import Other from "./components/Other";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <SafeAreaView style={styles.container}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <CategoryPage {...props} />}
            />
            <Route exact path="/other" render={props => <Other {...props} />} />
          </Switch>
        </SafeAreaView>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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

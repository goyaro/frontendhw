import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import { CategoryPage, DoctorPage } from "./components";

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
            <Route
              exact
              path="/doctors/:id"
              render={props => <DoctorPage {...props} />}
            />
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
  }
});

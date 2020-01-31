import React from "react";
import { View, Text, Button } from "react-native";

const DoctorPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <View>
      <Text>This is the page for Surgery type {id}</Text>
      <Button title="Back to Home" onPress={() => history.push("/")} />
    </View>
  );
};

export default DoctorPage;

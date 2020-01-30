import React from "react";
import { View, Text, Button } from "react-native";

const Other = ({ history }) => {
  return (
    <View>
      <Text>Other Page</Text>
      <Button title="Change Page" onPress={() => history.push("/")} />
    </View>
  );
};

export default Other;

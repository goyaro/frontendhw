import React from "react";
import { View, Text } from "react-native";
import styles from "./CardStyles";

const SurgeryCard = ({ category }) => {
  const { name, lowestPrice, highestPrice, numDocs } = category;
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardHeading}>{name}</Text>
      <Text style={styles.text}>
        {lowestPrice} - {highestPrice}
      </Text>
      <Text style={styles.text}>{numDocs} doctors available</Text>
    </View>
  );
};

export default SurgeryCard;

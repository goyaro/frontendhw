import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./CardStyles";

const SurgeryCard = ({ category, history }) => {
  const { name, lowestPrice, highestPrice, numDocs, id } = category;
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => history.push(`/doctors/${id}`)}
    >
      <Text style={styles.cardHeading}>{name}</Text>
      <Text style={styles.text}>
        {lowestPrice} - {highestPrice}
      </Text>
      <Text style={styles.text}>{numDocs} doctors available</Text>
    </TouchableOpacity>
  );
};

export default SurgeryCard;

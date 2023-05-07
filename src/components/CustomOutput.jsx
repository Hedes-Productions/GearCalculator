import { View, Text, StyleSheet } from "react-native";
import React from "react";
import fontStyles from "../styles/FontStyle";

const CustomOutput = ({ descriptionText, value }) => {
  return (
    <View style={styles.outputFieldOutput}>
      <Text style={fontStyles.smallText}>{descriptionText}</Text>
      <Text style={fontStyles.smallText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outputFieldOutput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CustomOutput;

import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import fontStyles from "../styles/FontStyle";

const CustomInput = ({ descriptionText, setValue, value }) => {
  return (
    <View style={styles.inputComponent}>
      <Text style={fontStyles.smallText}>{descriptionText}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(inputText) => setValue(inputText)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    color: "black",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 40,
  },
  inputComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CustomInput;

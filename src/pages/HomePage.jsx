import { View, Text, StyleSheet} from "react-native";
import React from "react";
import HomeButton from "../components/HomeButton";

const HomePage = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.headingPosition}>
      <Text style={styles.headingText}>Gear Calculator</Text>
    </View>
    <HomeButton navigation={navigation}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headingPosition: {
    top: '10%',
  },
  headingText: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: 'center',
  },
});

export default HomePage;

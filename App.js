import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import HomePage from "./src/pages/HomePage";
import backgroundImage from "./src/assets/Background.png";
import CalculatorPage from "./src/pages/CalculatorPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.filter}>
          <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  contentStyle: { backgroundColor: "transparent" },
                  headerStyle: {
                    backgroundColor: "transparent",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    color: "transparent",
                  },
                }}
              >
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Calculator" component={CalculatorPage} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  filter: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "100%",
  },
});

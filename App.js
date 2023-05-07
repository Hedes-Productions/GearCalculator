import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground, SafeAreaView} from 'react-native';
import HomePage from './src/pages/HomePage';
import backgroundImage from "./src/assets/Background.png";
import CalculatorPage from './src/pages/CalculatorPage';

export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.filter}>
        <SafeAreaView style={styles.container}>
          {/* <HomePage /> */}
          <CalculatorPage />
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
  }
});

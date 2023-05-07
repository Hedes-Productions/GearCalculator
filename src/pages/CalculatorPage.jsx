import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import fontStyles from "../styles/FontStyle";
import CustomInput from "../components/CustomInput";
import CustomOutput from "../components/CustomOutput";
import calculateParameters from "../utils/calculateParameters";

const CalculatorPage = () => {
  const [noTeeth, setNoTeeth] = useState();
  const [module, setModule] = useState();
  const [circularPitch, setCircularPitch] = useState();
  const [pitchCircularDiameter, setPitchCircularDiameter] = useState();
  const [addendum, setAddendum] = useState();
  const [dedendum, setDedendum] = useState();
  const [outerDiameter, setOuterDiameter] = useState();
  const [wholeDepth, setWholeDepth] = useState();
  const [cutterNo, setCutterNo] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.inputFieldBackground}>
        <CustomInput
          descriptionText={"No of Teeth:"}
          setValue={setNoTeeth}
          value={noTeeth}
        />
        <CustomInput
          descriptionText={"Module:"}
          setValue={setModule}
          value={module}
        />
        <View style={styles.inputSubmitButtonBackground}>
          <TouchableHighlight
            style={styles.inputSubmitButton}
            onPress={() =>
              calculateParameters(
                noTeeth,
                module,
                setCircularPitch,
                setPitchCircularDiameter,
                setAddendum,
                setDedendum,
                setOuterDiameter,
                setWholeDepth,
                setCutterNo
              )
            }
          >
            <Text style={fontStyles.mediumText}>Get values!</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.outputFieldHeading}>
        <Text style={fontStyles.mediumText}>Gear Parameters</Text>
      </View>
      <View style={styles.outputFieldBackground}>
        <CustomOutput
          descriptionText={"Circular pitch:"}
          value={circularPitch}
        />
        <CustomOutput
          descriptionText={"Pitch circular diameter:"}
          value={pitchCircularDiameter}
        />
        <CustomOutput descriptionText={"Addendum:"} value={addendum} />
        <CustomOutput descriptionText={"Dedendum:"} value={dedendum} />
        <CustomOutput
          descriptionText={"Outer diameter:"}
          value={outerDiameter}
        />
        <CustomOutput descriptionText={"Whole depth:"} value={wholeDepth} />
        <CustomOutput descriptionText={"Cutter no:"} value={cutterNo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: 'red',
  },
  inputFieldBackground: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: "80%",
    height: "30%",
    justifyContent: "space-around",
    padding: "5%",
    borderRadius: 40,
  },
  outputFieldHeading: {
    // backgroundColor: "yellow",
    width: "80%",
    paddingHorizontal: "5%",
  },
  outputFieldBackground: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: "80%",
    height: "60%",
    padding: "5%",
    borderRadius: 40,
    justifyContent: "space-around",
  },
  inputSubmitButtonBackground: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputSubmitButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: "60%",
    borderRadius: "40",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
  },
  buttonText: {
    fontSize: 22,
  },
  outputFieldHeadingText: {
    fontSize: 22,
  },
  insideText: {
    fontSize: 18,
  },
  input: {
    height: 40,
    padding: 10,
    width: "50%",
    color: "white",
    backgroundColor: "white",
    borderRadius: 40,
    marginHorizontal: "5%",
  },
  inputComponent: {
    flexDirection: "row",
    alignItems: "center",
  },
  outputFieldOutput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CalculatorPage;

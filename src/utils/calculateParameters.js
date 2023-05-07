const calculateParameters = (
  noTeeth,
  module,
  setCircularPitch,
  setPitchCircularDiameter,
  setAddendum,
  setDedendum,
  setOuterDiameter,
  setWholeDepth,
  setCutterNo
) => {
  setCircularPitch(parseFloat(Math.PI * module).toFixed(8));
  setPitchCircularDiameter(module * noTeeth);
  setAddendum(module);
  setDedendum(1.166 * module);
  setOuterDiameter((parseInt(noTeeth) + 2) * module);
  setWholeDepth(2.166 * module);
  setCutterNo(module);
};

export default calculateParameters;

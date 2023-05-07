const calculateParameters = (
  noTeeth,
  module,
  setCircularPitch,
  setPitchCircleDiameter,
  setAddendum,
  setDedendum,
  setOuterDiameter,
  setWholeDepth,
  setCutterNo
) => {
  setCircularPitch(parseFloat(Math.PI * module).toFixed(8));
  setPitchCircleDiameter(module * noTeeth);
  setAddendum(module);
  setDedendum(parseFloat(1.166 * module).toFixed(8));
  setOuterDiameter((parseInt(noTeeth) + 2) * module);
  setWholeDepth(parseFloat(2.166 * module).toFixed(8));
  setCutterNo(module);
};

export default calculateParameters;

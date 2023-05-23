import React from "react";
import { View } from "react-native";
import IstirahatPerutPemula from "./IstirahatPerutPemula";

const IstirahatHeelTouch = ({ route }) => {
  return (
    <View>
      <IstirahatPerutPemula
        textLatihanSelanjutnya="Cobra stretch"
        gambarSource={require("../../../../../assets/gif/perut_pemula/cobra_stretch.gif")}
        navigateTo="CobraStretchPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatHeelTouch;

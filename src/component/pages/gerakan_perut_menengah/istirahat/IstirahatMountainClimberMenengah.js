import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutMenengah from "./IstirahatPerutMenengah";

const IstirahatMountainCLimberMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatPerutMenengah
        textLatihanSelanjutnya="Cobra stretch"
        gambarSource={require("../../../../../assets/gif/perut_menengah/cobra_stretch.gif")}
        navigateTo="CobraStretchMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatMountainCLimberMenengah;

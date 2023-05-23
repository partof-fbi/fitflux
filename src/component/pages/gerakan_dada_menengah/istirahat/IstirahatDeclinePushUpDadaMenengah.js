import React from "react";
import { View } from "react-native";

import IstirahatDadaMenengah from "./IstirahatDadaMenengah";

const IstirahatDeclinePushUpDadaMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatDadaMenengah
        textLatihanSelanjutnya="Cobra Stretch"
        gambarSource={require("../../../../../assets/gif/dada_menengah/cobra_stretch.gif")}
        navigateTo="CobraStretchDadaMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatDeclinePushUpDadaMenengah;

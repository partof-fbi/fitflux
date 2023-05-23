import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutLanjutan from "./IstirahatPerutLanjutan";

const IstirahatVUpLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatPerutLanjutan
        textLatihanSelanjutnya="Cobra stretch"
        gambarSource={require("../../../../../assets/gif/perut_lanjutan/cobra_stretch.gif")}
        navigateTo="CobraStretchLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatVUpLanjutan;

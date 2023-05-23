import React from "react";
import { View } from "react-native";

import IstirahatDadaLanjutan from "./IstirahatDadaLanjutan";

const IstirahatArmCirclesDadaLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatDadaLanjutan
        textLatihanSelanjutnya="Burpees"
        gambarSource={require("../../../../../assets/gif/dada_lanjutan/burpees.gif")}
        navigateTo="BurpeesDadaLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatArmCirclesDadaLanjutan;

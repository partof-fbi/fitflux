import React from "react";
import { View } from "react-native";

import IstirahatLenganLanjutan from "./IstirahatLenganLanjutan";

const IstirahatArmCirclesLenganLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatLenganLanjutan
        textLatihanSelanjutnya="Leg barbell curl left"
        gambarSource={require("../../../../../assets/gif/lengan_lanjutan/leg_barbell_curl_left.gif")}
        navigateTo="LegBarbellCurlLeftLenganLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatArmCirclesLenganLanjutan;

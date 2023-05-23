import React from "react";
import { View } from "react-native";

import IstirahatLenganLanjutan from "./IstirahatLenganLanjutan";

const IstirahatLegBarbellCurlLeftLenganLanjutan= ({ route }) => {
  return (
    <View>
      <IstirahatLenganLanjutan
        textLatihanSelanjutnya="Leg barbell curl right"
        gambarSource={require("../../../../../assets/gif/lengan_lanjutan/leg_barbell_curl_right.gif")}
        navigateTo="LegBarbellCurlRightLenganLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatLegBarbellCurlLeftLenganLanjutan;

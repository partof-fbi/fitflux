import React from "react";
import { View } from "react-native";

import IstirahatLenganPemula from "./IstirahatLenganPemula";

const IstirahatLegBarbellCurlLeftLenganPemula = ({ route }) => {
  return (
    <View>
      <IstirahatLenganPemula
        textLatihanSelanjutnya="Leg Barbell Curl Right"
        gambarSource={require("../../../../../assets/gif/lengan_pemula/leg_barbell_curl_right.gif")}
        navigateTo="LegBarbellCurlRightLenganPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatLegBarbellCurlLeftLenganPemula;

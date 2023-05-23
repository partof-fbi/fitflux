import React from "react";
import { View } from "react-native";

import IstirahatLenganPemula from "./IstirahatLenganPemula";

const IstirahatArmCirclesLenganPemula = ({ route }) => {
  return (
    <View>
      <IstirahatLenganPemula
        textLatihanSelanjutnya="Leg Barbell Curl Left"
        gambarSource={require("../../../../../assets/gif/lengan_pemula/leg_barbell_curl_left.gif")}
        navigateTo="LegBarbellCurlLeftLenganPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatArmCirclesLenganPemula;

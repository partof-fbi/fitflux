import React from "react";
import { View } from "react-native";

import IstirahatLenganPemula from "./IstirahatLenganPemula";

const IstirahatLegBarbellCurlRightLenganPemula = ({ route }) => {
  return (
    <View>
      <IstirahatLenganPemula
        textLatihanSelanjutnya="Floor tricep dips"
        gambarSource={require("../../../../../assets/gif/lengan_pemula/floor_tricep_dips.gif")}
        navigateTo="FloorTricepDipsLenganPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatLegBarbellCurlRightLenganPemula;

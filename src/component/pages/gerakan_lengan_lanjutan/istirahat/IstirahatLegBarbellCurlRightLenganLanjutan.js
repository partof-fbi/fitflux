import React from "react";
import { View } from "react-native";

import IstirahatLenganLanjutan from "./IstirahatLenganLanjutan";

const IstirahatLegBarbellCurlRightLenganLanjutan= ({ route }) => {
  return (
    <View>
      <IstirahatLenganLanjutan
        textLatihanSelanjutnya="Floor tricep dips"
        gambarSource={require("../../../../../assets/gif/lengan_lanjutan/floor_tricep_dips.gif")}
        navigateTo="FloorTricepDipsLenganLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatLegBarbellCurlRightLenganLanjutan;

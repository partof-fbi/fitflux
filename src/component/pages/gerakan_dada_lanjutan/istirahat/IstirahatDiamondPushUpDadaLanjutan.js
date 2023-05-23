import React from "react";
import { View } from "react-native";

import IstirahatDadaLanjutan from "./IstirahatDadaLanjutan";

const IstirahatDiamondPushUpDadaLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatDadaLanjutan
        textLatihanSelanjutnya="Chest stretch"
        gambarSource={require("../../../../../assets/gif/dada_lanjutan/chest_stretch.gif")}
        navigateTo="ChestStretchDadaLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatDiamondPushUpDadaLanjutan;

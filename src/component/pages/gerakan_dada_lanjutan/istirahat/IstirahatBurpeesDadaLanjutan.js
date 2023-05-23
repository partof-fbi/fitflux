import React from "react";
import { View } from "react-native";

import IstirahatDadaLanjutan from "./IstirahatDadaLanjutan";

const IstirahatBurpeesDadaLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatDadaLanjutan
        textLatihanSelanjutnya="Diamond push up"
        gambarSource={require("../../../../../assets/gif/dada_lanjutan/diamond_push_up.gif")}
        navigateTo="DiamondPushUpDadaLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatBurpeesDadaLanjutan;

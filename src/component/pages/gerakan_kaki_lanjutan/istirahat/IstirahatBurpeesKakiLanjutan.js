import React from "react";
import { View } from "react-native";

import IstirahatKakiLanjutan from "./IstirahatKakiLanjutan";

const IstirahatBurpeesKakiLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatKakiLanjutan
        textLatihanSelanjutnya="Squats"
        gambarSource={require("../../../../../assets/gif/kaki_lanjutan/squats.gif")}
        navigateTo="SquatsKakiLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatBurpeesKakiLanjutan;

import React from "react";
import { View } from "react-native";

import IstirahatKakiLanjutan from "./IstirahatKakiLanjutan";

const IstirahatJumpingSquatsKakiLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatKakiLanjutan
        textLatihanSelanjutnya="CALF STRETCH"
        gambarSource={require("../../../../../assets/gif/kaki_lanjutan/calf_stretch.gif")}
        navigateTo="CalfStretchKakiLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingSquatsKakiLanjutan;

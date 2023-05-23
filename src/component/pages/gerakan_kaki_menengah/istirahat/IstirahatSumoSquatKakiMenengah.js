import React from "react";
import { View } from "react-native";

import IstirahatKakiMenengah from "./IstirahatKakiMenengah";

const IstirahatSumoSquatKakiMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatKakiMenengah
        textLatihanSelanjutnya="Calf stretch"
        gambarSource={require("../../../../../assets/gif/kaki_menengah/calf_stretch.gif")}
        navigateTo="CalfStretchKakiMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatSumoSquatKakiMenengah;

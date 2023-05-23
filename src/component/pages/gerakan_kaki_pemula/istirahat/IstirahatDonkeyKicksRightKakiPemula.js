import React from "react";
import { View } from "react-native";

import IstirahatKakiPemula from "./IstirahatKakiPemula";

const IstirahatDonkeyKicksRightKakiPemula = ({ route }) => {
  return (
    <View>
      <IstirahatKakiPemula
        textLatihanSelanjutnya="Calf stretch"
        gambarSource={require("../../../../../assets/gif/kaki_pemula/calf_stretch.gif")}
        navigateTo="CalfStretchKakiPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatDonkeyKicksRightKakiPemula;

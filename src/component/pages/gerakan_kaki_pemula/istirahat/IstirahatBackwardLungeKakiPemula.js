import React from "react";
import { View } from "react-native";

import IstirahatKakiPemula from "./IstirahatKakiPemula";

const IstirahatBackwardLungeKakiPemula = ({ route }) => {
  return (
    <View>
      <IstirahatKakiPemula
        textLatihanSelanjutnya="Donkey kicks left"
        gambarSource={require("../../../../../assets/gif/kaki_pemula/donkey_kicks_left.gif")}
        navigateTo="DonkeyKicksLeftKakiPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatBackwardLungeKakiPemula;

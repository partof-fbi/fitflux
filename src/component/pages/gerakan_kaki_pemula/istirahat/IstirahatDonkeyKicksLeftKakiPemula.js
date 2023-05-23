import React from "react";
import { View } from "react-native";

import IstirahatKakiPemula from "./IstirahatKakiPemula";

const IstirahatDonkeyKicksLeftKakiPemula = ({ route }) => {
  return (
    <View>
      <IstirahatKakiPemula
        textLatihanSelanjutnya="Donkey kicks right"
        gambarSource={require("../../../../../assets/gif/kaki_pemula/donkey_kicks_right.gif")}
        navigateTo="DonkeyKicksRightKakiPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatDonkeyKicksLeftKakiPemula;

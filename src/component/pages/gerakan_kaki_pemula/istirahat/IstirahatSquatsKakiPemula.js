import React from "react";
import { View } from "react-native";

import IstirahatKakiPemula from "./IstirahatKakiPemula";

const IstirahatSquatsKakiPemula = ({ route }) => {
  return (
    <View>
      <IstirahatKakiPemula
        textLatihanSelanjutnya="Backward lunge"
        gambarSource={require("../../../../../assets/gif/kaki_pemula/backward_lunge.gif")}
        navigateTo="BackwardLungeKakiPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatSquatsKakiPemula;

import React from "react";
import { View } from "react-native";

import IstirahatLenganMenengah from "./IstirahatLenganMenengah";

const IstirahatDiamondPushUpLenganMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatLenganMenengah
        textLatihanSelanjutnya="Diagonal plank"
        gambarSource={require("../../../../../assets/gif/lengan_menengah/diagonal_plank.gif")}
        navigateTo="DiagonalPlankLenganMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatDiamondPushUpLenganMenengah;

import React from "react";
import { View } from "react-native";

import IstirahatLenganMenengah from "./IstirahatLenganMenengah";

const IstirahatArmRaisesLenganMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatLenganMenengah
        textLatihanSelanjutnya="Tricep dips"
        gambarSource={require("../../../../../assets/gif/lengan_menengah/triceps_dips.gif")}
        navigateTo="TricepsDipsLenganMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatArmRaisesLenganMenengah;

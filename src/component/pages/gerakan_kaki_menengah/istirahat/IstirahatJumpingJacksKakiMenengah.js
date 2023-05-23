import React from "react";
import { View } from "react-native";

import IstirahatKakiMenengah from "./IstirahatKakiMenengah";

const IstirahatJumpingJacksKakiMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatKakiMenengah
        textLatihanSelanjutnya="Squats"
        gambarSource={require("../../../../../assets/gif/kaki_menengah/squats.gif")}
        navigateTo="SquatsKakiMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingJacksKakiMenengah;

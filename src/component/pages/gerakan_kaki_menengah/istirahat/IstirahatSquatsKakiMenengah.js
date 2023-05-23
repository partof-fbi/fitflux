import React from "react";
import { View } from "react-native";

import IstirahatKakiMenengah from "./IstirahatKakiMenengah";

const IstirahatSquatsKakiMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatKakiMenengah
        textLatihanSelanjutnya="Lunges"
        gambarSource={require("../../../../../assets/gif/kaki_menengah/lunges.gif")}
        navigateTo="LungesKakiMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatSquatsKakiMenengah;

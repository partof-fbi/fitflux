import React from "react";
import { View } from "react-native";

import IstirahatKakiLanjutan from "./IstirahatKakiLanjutan";

const IstirahatSquatsKakiLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatKakiLanjutan
        textLatihanSelanjutnya="Cursty lunges"
        gambarSource={require("../../../../../assets/gif/kaki_lanjutan/cursty_lunges.gif")}
        navigateTo="CurstyLungesKakiLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatSquatsKakiLanjutan;

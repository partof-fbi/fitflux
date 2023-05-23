import React from "react";
import { View } from "react-native";

import IstirahatKakiLanjutan from "./IstirahatKakiLanjutan";

const IstirahatCurstyLungesKakiLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatKakiLanjutan
        textLatihanSelanjutnya="Jumping squats"
        gambarSource={require("../../../../../assets/gif/kaki_lanjutan/jumping_squats.gif")}
        navigateTo="JumpingSquatsKakiLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatCurstyLungesKakiLanjutan;

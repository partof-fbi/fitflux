import React from "react";
import { View } from "react-native";

import IstirahatDadaLanjutan from "./IstirahatDadaLanjutan";

const IstirahatJumpingJacksDadaLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatDadaLanjutan
        textLatihanSelanjutnya="Arm circles"
        gambarSource={require("../../../../../assets/gif/dada_lanjutan/arm_circles.gif")}
        navigateTo="ArmCirclesDadaLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingJacksDadaLanjutan;

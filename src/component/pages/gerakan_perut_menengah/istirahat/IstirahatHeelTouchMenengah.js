import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutMenengah from "./IstirahatPerutMenengah";

const IstirahatHeelTouchMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatPerutMenengah
        textLatihanSelanjutnya="Mountain Climber"
        gambarSource={require("../../../../../assets/gif/perut_menengah/mountain_climber.gif")}
        navigateTo="MountainClimberMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatHeelTouchMenengah;

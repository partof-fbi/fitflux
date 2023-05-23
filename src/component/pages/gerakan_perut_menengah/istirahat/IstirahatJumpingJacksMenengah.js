import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutMenengah from "./IstirahatPerutMenengah";

const IstirahatJumpingJacksMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatPerutMenengah
        textLatihanSelanjutnya="Sit up"
        gambarSource={require("../../../../../assets/gif/perut_menengah/sit_up.gif")}
        navigateTo="SitUpMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingJacksMenengah;

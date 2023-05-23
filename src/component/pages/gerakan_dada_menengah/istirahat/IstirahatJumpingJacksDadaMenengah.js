import React from "react";
import { View } from "react-native";

import IstirahatDadaMenengah from "./IstirahatDadaMenengah";

const IstirahatJumpingJacksDadaMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatDadaMenengah
        textLatihanSelanjutnya="Knee push up"
        gambarSource={require("../../../../../assets/gif/dada_menengah/knee_push_up.gif")}
        navigateTo="KneePushUpDadaMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingJacksDadaMenengah;

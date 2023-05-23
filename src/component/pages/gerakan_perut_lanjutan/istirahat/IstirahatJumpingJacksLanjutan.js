import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutLanjutan from "./IstirahatPerutLanjutan";

const IstirahatJumpingJacksLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatPerutLanjutan
        textLatihanSelanjutnya="Sit up"
        gambarSource={require("../../../../../assets/gif/perut_lanjutan/sit_up.gif")}
        navigateTo="SitUpLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingJacksLanjutan;

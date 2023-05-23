import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutLanjutan from "./IstirahatPerutLanjutan";

const IstirahatBiscyleCrunchesLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatPerutLanjutan
        textLatihanSelanjutnya="V-up"
        gambarSource={require("../../../../../assets/gif/perut_lanjutan/v_up.gif")}
        navigateTo="VUpLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatBiscyleCrunchesLanjutan;

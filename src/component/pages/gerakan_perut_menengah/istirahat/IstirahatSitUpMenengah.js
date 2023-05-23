import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutMenengah from "./IstirahatPerutMenengah";

const IstirahatSitUpMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatPerutMenengah
        textLatihanSelanjutnya="Heel touch"
        gambarSource={require("../../../../../assets/gif/perut_menengah/heel_touch.gif")}
        navigateTo="HeelTouchMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatSitUpMenengah;

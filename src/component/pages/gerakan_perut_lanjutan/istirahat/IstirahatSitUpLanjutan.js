import React from "react";
import {
  View,
} from "react-native";

import IstirahatPerutLanjutan from "./IstirahatPerutLanjutan";

const IstirahatSitUpLanjutan = ({ route }) => {
  return (
    <View>
      <IstirahatPerutLanjutan
        textLatihanSelanjutnya="Biscyle crunches"
        gambarSource={require("../../../../../assets/gif/perut_lanjutan/biscyle_crunche.gif")}
        navigateTo="BiscyleCrunchesLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatSitUpLanjutan;

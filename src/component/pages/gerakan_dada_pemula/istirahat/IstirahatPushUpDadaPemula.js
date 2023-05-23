import React from "react";
import {
  View,
} from "react-native";

import IstirahatDadaPemula from "./IstirahatDadaPemula";

const IstirahatPushUpDadaPemula = ({ route }) => {
  return (
    <View>
      <IstirahatDadaPemula
        textLatihanSelanjutnya="Tricep dips"
        gambarSource={require("../../../../../assets/gif/dada_pemula/tricep_dips.gif")}
        navigateTo="TricepsDipsDadaPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatPushUpDadaPemula;

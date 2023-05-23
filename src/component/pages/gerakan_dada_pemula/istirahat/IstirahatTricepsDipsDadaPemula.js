import React from "react";
import {
  View,
} from "react-native";

import IstirahatDadaPemula from "./IstirahatDadaPemula";

const IstirahatTricepsDipsDadaPemula = ({ route }) => {
  return (
    <View>
      <IstirahatDadaPemula
        textLatihanSelanjutnya="Cobra Stretch"
        gambarSource={require("../../../../../assets/gif/dada_pemula/cobra_stretch.gif")}
        navigateTo="CobraStretchDadaPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatTricepsDipsDadaPemula;

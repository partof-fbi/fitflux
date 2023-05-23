import React from "react";
import {
  View,
} from "react-native";

import IstirahatDadaPemula from "./IstirahatDadaPemula";

const IstirahatInclinePushUpDadaPemula = ({ route }) => {
  return (
    <View>
      <IstirahatDadaPemula
        textLatihanSelanjutnya="Push up"
        gambarSource={require("../../../../../assets/gif/dada_pemula/push_up.gif")}
        navigateTo="PushUpDadaPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatInclinePushUpDadaPemula;

import React from "react";
import {
  View,
} from "react-native";

import IstirahatDadaPemula from "./IstirahatDadaPemula";

const IstirahatJumpingJacksDadaPemula = ({ route }) => {
  return (
    <View>
      <IstirahatDadaPemula
        textLatihanSelanjutnya="Incline push up"
        gambarSource={require("../../../../../assets/gif/dada_pemula/incline_push_up.gif")}
        navigateTo="InclinePushUpDadaPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingJacksDadaPemula;

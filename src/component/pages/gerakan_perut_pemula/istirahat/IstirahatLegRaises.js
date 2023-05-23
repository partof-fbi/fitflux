
import React from "react";
import {
  View,
} from "react-native";
import IstirahatPerutPemula from "./IstirahatPerutPemula";

const IstirahatLegRaises = ({ route }) => {
  return (
    <View>
      <IstirahatPerutPemula
        textLatihanSelanjutnya="Heel Touch"
        gambarSource={require("../../../../../assets/gif/perut_pemula/heel_touch.gif")}
        navigateTo="HeelTouchPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatLegRaises;

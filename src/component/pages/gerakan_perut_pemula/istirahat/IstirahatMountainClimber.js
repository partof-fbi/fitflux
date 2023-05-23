// IstirahatMountainClimber

import React from "react";
import { View } from "react-native";
import IstirahatPerutPemula from "./IstirahatPerutPemula";

const IstirahatMountainClimber = ({ route }) => {
  return (
    <View>
      <IstirahatPerutPemula
        textLatihanSelanjutnya="Leg Raises"
        gambarSource={require("../../../../../assets/gif/perut_pemula/leg_raises.gif")}
        navigateTo="LegRaisesPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatMountainClimber;

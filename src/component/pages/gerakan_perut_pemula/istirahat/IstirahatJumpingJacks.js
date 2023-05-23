import React from "react";
import {
  View,
} from "react-native";
import IstirahatPerutPemula from "./IstirahatPerutPemula";

const IstirahatJumpingJacks = ({ route }) => {

  
  return (
    <View>
      <IstirahatPerutPemula
        textLatihanSelanjutnya="Mountain Climber"
        gambarSource={require("../../../../../assets/gif/perut_pemula/mountain_climber.gif")}
        navigateTo="MountainClimberPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatJumpingJacks;

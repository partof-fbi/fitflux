import React from "react";
import GerakanRepitisi from "./GerakanRepitisi";
const LegRaisesPemula = ({ route }) => {
  return (
      <GerakanRepitisi
        textLatihan="LEG RAISES"
        repitisi="x 16"
        gambarKirim={require("../../../../../assets/gif/perut_pemula/leg_raises.gif")}
        navigateTo="IstirahatLegRaises"
        navigateBefore="IstirahatMountainClimber"
        soundSource={require("../../../../../assets/sounds/perut_pemula/leg_raises.mp3")}
        route={route}
      />
  );
};
export default LegRaisesPemula;



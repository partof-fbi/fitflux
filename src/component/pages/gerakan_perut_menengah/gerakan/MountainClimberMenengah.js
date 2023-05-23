import React from "react";
import GerakanRepitisi2 from "./GerakanRepitisi2";
const MountainClimberMenengah = ({ route }) => {
  return (
    <GerakanRepitisi2
      textLatihan="MOUNTAIN CLIMBER"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/perut_menengah/mountain_climber.gif")}
      navigateTo="IstirahatMountainClimberMenengah"
      navigateBefore="IstirahatHeelTouchMenengah"
      soundSource={require("../../../../../assets/sounds/perut_menengah/mountain_climber.mp3")}
      route={route}
    />
  );
};
export default MountainClimberMenengah;

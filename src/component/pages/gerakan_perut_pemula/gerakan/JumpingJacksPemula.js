import React from "react";
import GerakanRepitisi from "./GerakanRepitisi";
const JumpingJacksPemula = ({ route }) => {
  return (
    <GerakanRepitisi
      textLatihan="JUMPING JACKS"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/perut_pemula/jumping_jacks.gif")}
      navigateTo="IstirahatJumpingJacks"
      navigateBefore="PerutPemula"
      soundSource={require("../../../../../assets/sounds/perut_pemula/jumping_jack.mp3")}
      route={route}
    />
  );
};
export default JumpingJacksPemula;

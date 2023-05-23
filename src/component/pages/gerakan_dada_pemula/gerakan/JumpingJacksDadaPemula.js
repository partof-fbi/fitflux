import React from "react";
import GerakanRepitisi4 from "./GerakanRepitisi4";
const JumpingJacksDadaPemula = ({ route }) => {
  return (
    <GerakanRepitisi4
      textLatihan="JUMPING JACKS"
      repitisi="x 30"
      gambarKirim={require("../../../../../assets/gif/dada_pemula/jumping_jacks.gif")}
      navigateTo="IstirahatJumpingJacksDadaPemula"
      navigateBefore="DadaPemula"
      soundSource={require("../../../../../assets/sounds/dada_pemula/jumping_jack.mp3")}
      route={route}
    />
  );
};
export default JumpingJacksDadaPemula;

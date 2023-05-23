import React from "react";
import GerakanRepitisi6 from "./GerakanRepitisi6";
const JumpingJacksDadaLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi6
      textLatihan="JUMPING JACKS"
      repitisi="x 30"
      gambarKirim={require("../../../../../assets/gif/dada_lanjutan/jumping_jacks.gif")}
      navigateTo="IstirahatJumpingJacksDadaLanjutan"
      navigateBefore="DadaLanjutan"
      soundSource={require("../../../../../assets/sounds/dada_lanjutan/jumping_jack.mp3")}
      route={route}
    />
  );
};
export default JumpingJacksDadaLanjutan;

import React from "react";
import GerakanRepitisi5 from "./GerakanRepitisi5";
const JumpingJacksDadaMenengah = ({ route }) => {
  return (
    <GerakanRepitisi5
      textLatihan="JUMPING JACKS"
      repitisi="x 30"
      gambarKirim={require("../../../../../assets/gif/dada_menengah/jumping_jacks.gif")}
      navigateTo="IstirahatJumpingJacksDadaMenengah"
      navigateBefore="DadaMenengah"
      soundSource={require("../../../../../assets/sounds/dada_menengah/jumping_jack.mp3")}
      route={route}
    />
  );
};
export default JumpingJacksDadaMenengah;

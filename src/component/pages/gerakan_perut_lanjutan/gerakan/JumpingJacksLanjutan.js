import React from "react";
import GerakanRepitisi3 from "./GerakanRepitisi3";
const JumpingJacksLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi3
      textLatihan="JUMPING JACKS"
      repitisi="x 30"
      gambarKirim={require("../../../../../assets/gif/perut_lanjutan/jumping_jacks.gif")}
      navigateTo="IstirahatJumpingJacksLanjutan"
      navigateBefore="PerutLanjutan"
      soundSource={require("../../../../../assets/sounds/perut_lanjutan/jumping_jack.mp3")}
      route={route}
    />
  );
};
export default JumpingJacksLanjutan;

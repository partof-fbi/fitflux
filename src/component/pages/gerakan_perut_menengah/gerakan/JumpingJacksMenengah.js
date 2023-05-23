import React from "react";
import GerakanRepitisi2 from "./GerakanRepitisi2";
const JumpingJacksMenengah = ({ route }) => {
  return (
    <GerakanRepitisi2
      textLatihan="JUMPING JACKS"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/perut_menengah/jumping_jacks.gif")}
      navigateTo="IstirahatJumpingJacksMenengah"
      navigateBefore="PerutMenengah"
      soundSource={require("../../../../../assets/sounds/perut_menengah/jumping_jack.mp3")}
      route={route}
    />
  );
};
export default JumpingJacksMenengah;

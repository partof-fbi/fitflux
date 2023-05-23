import React from "react";
import GerakanRepitisi11 from "./GerakanRepitisi11";
const JumpingJacksKakiMenengah = ({ route }) => {
  return (
    <GerakanRepitisi11
      textLatihan="JUMPING JACKS"
      repitisi="x 30"
      gambarKirim={require("../../../../../assets/gif/kaki_menengah/jumping_jacks.gif")}
      navigateTo="IstirahatJumpingJacksKakiMenengah"
      navigateBefore="KakiMenengah"
      soundSource={require("../../../../../assets/sounds/kaki_menengah/jumping_jacks.mp3")}
      route={route}
    />
  );
};
export default JumpingJacksKakiMenengah;

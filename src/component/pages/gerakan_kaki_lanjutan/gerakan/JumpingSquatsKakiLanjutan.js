import React from "react";
import GerakanRepitisi12 from "./GerakanRepitisi12";
const JumpingSquatsKakiLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi12
      textLatihan="JUMPING SQUATS"
      repitisi="x 15"
      gambarKirim={require("../../../../../assets/gif/kaki_lanjutan/jumping_squats.gif")}
      navigateTo="IstirahatJumpingSquatsKakiLanjutan"
      navigateBefore="IstirahatCurstyLungesKakiLanjutan"
      soundSource={require("../../../../../assets/sounds/kaki_lanjutan/jumping_squats.mp3")}
      route={route}
    />
  );
};
export default JumpingSquatsKakiLanjutan;

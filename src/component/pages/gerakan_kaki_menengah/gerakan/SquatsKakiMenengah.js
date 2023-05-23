import React from "react";
import GerakanRepitisi11 from "./GerakanRepitisi11";
const SquatsKakiMenengah = ({ route }) => {
  return (
    <GerakanRepitisi11
      textLatihan="SQUATS"
      repitisi="x 12"
      gambarKirim={require("../../../../../assets/gif/kaki_menengah/squats.gif")}
      navigateTo="IstirahatSquatsKakiMenengah"
      navigateBefore="IstirahatJumpingJacksKakiMenengah"
      soundSource={require("../../../../../assets/sounds/kaki_menengah/squats.mp3")}
      route={route}
    />
  );
};
export default SquatsKakiMenengah;

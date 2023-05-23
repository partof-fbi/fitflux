import React from "react";
import GerakanRepitisi6 from "./GerakanRepitisi6";
const ArmCirclesDadaLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi6
      textLatihan="ARM CIRCLES"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/dada_lanjutan/arm_circles.gif")}
      navigateTo="IstirahatArmCirclesDadaLanjutan"
      navigateBefore="IstirahatJumpingJacksDadaLanjutan"
      soundSource={require("../../../../../assets/sounds/dada_lanjutan/arm_circles.mp3")}
      route={route}
    />
  );
};
export default ArmCirclesDadaLanjutan;

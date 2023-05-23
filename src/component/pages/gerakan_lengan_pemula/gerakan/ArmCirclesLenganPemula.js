import React from "react";
import GerakanRepitisi7 from "./GerakanRepitisi7";
const ArmCirclesLenganPemula = ({ route }) => {
  return (
    <GerakanRepitisi7
      textLatihan="ARM CIRCLES"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/lengan_pemula/arm_circles.gif")}
      navigateTo="IstirahatArmCirclesLenganPemula"
      navigateBefore="LenganPemula"
      soundSource={require("../../../../../assets/sounds/lengan_pemula/arm_circles.mp3")}
      route={route}
    />
  );
};
export default ArmCirclesLenganPemula;

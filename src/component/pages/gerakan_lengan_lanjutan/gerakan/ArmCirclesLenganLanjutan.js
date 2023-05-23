import React from "react";
import GerakanRepitisi9 from "./GerakanRepitisi9";
const ArmCirclesLenganLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi9
      textLatihan="ARM CIRCLES"
      repitisi="x 25"
      gambarKirim={require("../../../../../assets/gif/lengan_lanjutan/arm_circle.gif")}
      navigateTo="IstirahatArmCirclesLenganLanjutan"
      navigateBefore="LenganLanjutan"
      soundSource={require("../../../../../assets/sounds/lengan_lanjutan/arm_circle.mp3")}
      route={route}
    />
  );
};
export default ArmCirclesLenganLanjutan;

import React from "react";
import GerakanRepitisi8 from "./GerakanRepitisi8";
const ArmRaisesLenganMenengah = ({ route }) => {
  return (
    <GerakanRepitisi8
      textLatihan="ARM RAISES"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/lengan_menengah/arm_raises.gif")}
      navigateTo="IstirahatArmRaisesLenganMenengah"
      navigateBefore="LenganMenengah"
      soundSource={require("../../../../../assets/sounds/lengan_menengah/arm_raises.mp3")}
      route={route}
    />
  );
};
export default ArmRaisesLenganMenengah;

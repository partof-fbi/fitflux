import React from "react";
import GerakanRepitisi10 from "./GerakanRepitisi10";
const BackwardLungeKakiPemula = ({ route }) => {
  return (
    <GerakanRepitisi10
      textLatihan="BACKWARD LUNGE"
      repitisi="x 14"
      gambarKirim={require("../../../../../assets/gif/kaki_pemula/backward_lunge.gif")}
      navigateTo="IstirahatBackwardLungeKakiPemula"
      navigateBefore="IstirahatSquatsKakiPemula"
      soundSource={require("../../../../../assets/sounds/kaki_pemula/backward_lunge.mp3")}
      route={route}
    />
  );
};
export default BackwardLungeKakiPemula;

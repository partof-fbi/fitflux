import React from "react";
import GerakanRepitisi10 from "./GerakanRepitisi10";
const SquatsKakiPemula = ({ route }) => {
  return (
    <GerakanRepitisi10
      textLatihan="SQUATS"
      repitisi="x 12"
      gambarKirim={require("../../../../../assets/gif/kaki_pemula/squats.gif")}
      navigateTo="IstirahatSquatsKakiPemula"
      navigateBefore="KakiPemula"
      soundSource={require("../../../../../assets/sounds/kaki_pemula/squats.mp3")}
      route={route}
    />
  );
};
export default SquatsKakiPemula;

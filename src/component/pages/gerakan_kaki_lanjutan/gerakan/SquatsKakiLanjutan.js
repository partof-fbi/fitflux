import React from "react";
import GerakanRepitisi12 from "./GerakanRepitisi12";
const SquatsKakiLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi12
      textLatihan="SQUATS"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/kaki_lanjutan/squats.gif")}
      navigateTo="IstirahatSquatsKakiLanjutan"
      navigateBefore="IstirahatBurpeesKakiLanjutan"
      soundSource={require("../../../../../assets/sounds/kaki_lanjutan/squats.mp3")}
      route={route}
    />
  );
};
export default SquatsKakiLanjutan;

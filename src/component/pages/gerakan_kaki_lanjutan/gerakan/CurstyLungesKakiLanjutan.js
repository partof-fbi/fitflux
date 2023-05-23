import React from "react";
import GerakanRepitisi12 from "./GerakanRepitisi12";
const CurstyLungesKakiLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi12
      textLatihan="CURSTY LUNGES"
      repitisi="x 15"
      gambarKirim={require("../../../../../assets/gif/kaki_lanjutan/cursty_lunges.gif")}
      navigateTo="IstirahatCurstyLungesKakiLanjutan"
      navigateBefore="IstirahatSquatsKakiLanjutan"
      soundSource={require("../../../../../assets/sounds/kaki_lanjutan/cursty_lunges.mp3")}
      route={route}
    />
  );
};
export default CurstyLungesKakiLanjutan;

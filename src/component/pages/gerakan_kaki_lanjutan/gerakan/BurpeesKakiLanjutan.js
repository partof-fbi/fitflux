import React from "react";
import GerakanRepitisi12 from "./GerakanRepitisi12";
const BurpeesKakiLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi12
      textLatihan="BURPEES"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/kaki_lanjutan/burpees.gif")}
      navigateTo="IstirahatBurpeesKakiLanjutan"
      navigateBefore="KakiLanjutan"
      soundSource={require("../../../../../assets/sounds/kaki_lanjutan/burpees.mp3")}
      route={route}
    />
  );
};
export default BurpeesKakiLanjutan;

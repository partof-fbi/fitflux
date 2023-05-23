import React from "react";
import GerakanRepitisi9 from "./GerakanRepitisi9";
const LegBarbellCurlLeftLenganLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi9
      textLatihan="LEG BARBELL CURL LEFT"
      repitisi="x 15"
      gambarKirim={require("../../../../../assets/gif/lengan_lanjutan/leg_barbell_curl_left.gif")}
      navigateTo="IstirahatLegBarbellCurlLeftLenganLanjutan"
      navigateBefore="IstirahatArmCirclesLenganLanjutan"
      soundSource={require("../../../../../assets/sounds/lengan_lanjutan/leg_barbell_curl_left.mp3")}
      route={route}
    />
  );
};
export default LegBarbellCurlLeftLenganLanjutan;

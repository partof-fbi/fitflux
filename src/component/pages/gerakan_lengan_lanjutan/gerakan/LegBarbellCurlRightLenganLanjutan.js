import React from "react";
import GerakanRepitisi9 from "./GerakanRepitisi9";
const LegBarbellCurlRightLenganLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi9
      textLatihan="LEG BARBELL CURL RIGHT"
      repitisi="x 15"
      gambarKirim={require("../../../../../assets/gif/lengan_lanjutan/leg_barbell_curl_right.gif")}
      navigateTo="IstirahatLegBarbellCurlRightLenganLanjutan"
      navigateBefore="IstirahatLegBarbellCurlLeftLenganLanjutan"
      soundSource={require("../../../../../assets/sounds/lengan_lanjutan/leg_barbell_curl_right.mp3")}
      route={route}
    />
  );
};
export default LegBarbellCurlRightLenganLanjutan;

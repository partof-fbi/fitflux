import React from "react";
import GerakanRepitisi7 from "./GerakanRepitisi7";
const LegBarbellCurlRightLenganPemula = ({ route }) => {
  return (
    <GerakanRepitisi7
      textLatihan="LEG BARBELL CURL RIGHT"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/lengan_pemula/leg_barbell_curl_right.gif")}
      navigateTo="IstirahatLegBarbellCurlRightLenganPemula"
      navigateBefore="IstirahatLegBarbellCurlLeftLenganPemula"
      soundSource={require("../../../../../assets/sounds/lengan_pemula/leg_barbell_curl_right.mp3")}
      route={route}
    />
  );
};
export default LegBarbellCurlRightLenganPemula;

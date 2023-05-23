import React from "react";
import GerakanRepitisi7 from "./GerakanRepitisi7";
const LegBarbellCurlLeftLenganPemula = ({ route }) => {
  return (
    <GerakanRepitisi7
      textLatihan="LEG BARBELL CURL LEFT"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/lengan_pemula/leg_barbell_curl_left.gif")}
      navigateTo="IstirahatLegBarbellCurlLeftLenganPemula"
      navigateBefore="IstirahatArmCirclesLenganPemula"
      soundSource={require("../../../../../assets/sounds/lengan_pemula/leg_barbell_curl_left.mp3")}
      route={route}
    />
  );
};
export default LegBarbellCurlLeftLenganPemula;

import React from "react";
import GerakanRepitisi6 from "./GerakanRepitisi6";
const DiamondPushUpDadaLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi6
      textLatihan="BURPEES"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/dada_lanjutan/diamond_push_up.gif")}
      navigateTo="IstirahatDiamondPushUpDadaLanjutan"
      navigateBefore="IstirahatBurpeesDadaLanjutan"
      soundSource={require("../../../../../assets/sounds/dada_lanjutan/diamond_push_up.mp3")}
      route={route}
    />
  );
};
export default DiamondPushUpDadaLanjutan;

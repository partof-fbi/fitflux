import React from "react";
import GerakanRepitisi6 from "./GerakanRepitisi6";
const BurpeesDadaLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi6
      textLatihan="BURPEES"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/dada_lanjutan/burpees.gif")}
      navigateTo="IstirahatBurpeesDadaLanjutan"
      navigateBefore="IstirahatArmCirclesDadaLanjutan"
      soundSource={require("../../../../../assets/sounds/dada_lanjutan/burpees.mp3")}
      route={route}
    />
  );
};
export default BurpeesDadaLanjutan;

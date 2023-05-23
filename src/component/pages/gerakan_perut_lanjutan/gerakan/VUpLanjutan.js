import React from "react";
import GerakanRepitisi3 from "./GerakanRepitisi3";
const VUpLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi3
      textLatihan="V-UP"
      repitisi="x 18"
      gambarKirim={require("../../../../../assets/gif/perut_lanjutan/v_up.gif")}
      navigateTo="IstirahatVUpLanjutan"
      navigateBefore="IstirahatBiscyleCrunchesLanjutan"
      soundSource={require("../../../../../assets/sounds/perut_lanjutan/v_up.mp3")}
      route={route}
    />
  );
};
export default VUpLanjutan;

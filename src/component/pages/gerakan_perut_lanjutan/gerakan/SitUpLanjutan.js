import React from "react";
import GerakanRepitisi3 from "./GerakanRepitisi3";
const SitUpLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi3
      textLatihan="SIT UP"
      repitisi="x 30"
      gambarKirim={require("../../../../../assets/gif/perut_lanjutan/sit_up.gif")}
      navigateTo="IstirahatSitUpLanjutan"
      navigateBefore="IstirahatJumpingJacksLanjutan"
      soundSource={require("../../../../../assets/sounds/perut_lanjutan/sit_up.mp3")}
      route={route}
    />
  );
};
export default SitUpLanjutan;

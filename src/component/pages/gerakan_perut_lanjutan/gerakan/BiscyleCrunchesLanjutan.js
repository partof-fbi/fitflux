import React from "react";
import GerakanRepitisi3 from "./GerakanRepitisi3";
const BiscyleCrunchesLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi3
      textLatihan="BISCYLE CRUNCHES"
      repitisi="x 24"
      gambarKirim={require("../../../../../assets/gif/perut_lanjutan/biscyle_crunche.gif")}
      navigateTo="IstirahatBiscyleCrunchesLanjutan"
      navigateBefore="IstirahatJumpingJacksLanjutan"
      soundSource={require("../../../../../assets/sounds/perut_lanjutan/bicycle_crunches.mp3")}
      route={route}
    />
  );
};
export default BiscyleCrunchesLanjutan;

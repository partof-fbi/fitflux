import React from "react";
import GerakanRepitisi2 from "./GerakanRepitisi2";
const SitUpMenengah = ({ route }) => {
  return (
    <GerakanRepitisi2
      textLatihan="SIT UP"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/perut_menengah/sit_up.gif")}
      navigateTo="IstirahatSitUpMenengah"
      navigateBefore="IstirahatJumpingJacksMenengah"
      soundSource={require("../../../../../assets/sounds/perut_menengah/sit_up.mp3")}
      route={route}
    />
  );
};
export default SitUpMenengah;

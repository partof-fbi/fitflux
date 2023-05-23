import React from "react";
import GerakanRepitisi5 from "./GerakanRepitisi5";
const KneePushUpDadaMenengah = ({ route }) => {
  return (
    <GerakanRepitisi5
      textLatihan="KNEE PUSH UP"
      repitisi="x 12"
      gambarKirim={require("../../../../../assets/gif/dada_menengah/knee_push_up.gif")}
      navigateTo="IstirahatKneePushUpDadaMenengah"
      navigateBefore="IstirahatJumpingJacksDadaMenengah"
      soundSource={require("../../../../../assets/sounds/dada_menengah/knee_push_up.mp3")}
      route={route}
    />
  );
};
export default KneePushUpDadaMenengah;
 
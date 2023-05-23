import React from "react";
import GerakanRepitisi4 from "./GerakanRepitisi4";
const InclinePushUpDadaPemula = ({ route }) => {
  return (
    <GerakanRepitisi4
      textLatihan="INCLINE PUSH UP"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/dada_pemula/incline_push_up.gif")}
      navigateTo="IstirahatInclinePushUpDadaPemula"
      navigateBefore="IstirahatJumpingJacksDadaPemula"
      soundSource={require("../../../../../assets/sounds/dada_pemula/incline_push_up.mp3")}
      route={route}
    />
  );
};
export default InclinePushUpDadaPemula;

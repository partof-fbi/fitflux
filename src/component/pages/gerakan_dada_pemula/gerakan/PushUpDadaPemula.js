import React from "react";
import GerakanRepitisi4 from "./GerakanRepitisi4";
const PushUpDadaPemula = ({ route }) => {
  return (
    <GerakanRepitisi4
      textLatihan="PUSH UP"
      repitisi="x 8"
      gambarKirim={require("../../../../../assets/gif/dada_pemula/push_up.gif")}
      navigateTo="IstirahatPushUpDadaPemula"
      navigateBefore="IstirahatInclinePushUpDadaPemula"
      soundSource={require("../../../../../assets/sounds/dada_pemula/push_up.mp3")}
      route={route}
    />
  );
};
export default PushUpDadaPemula;

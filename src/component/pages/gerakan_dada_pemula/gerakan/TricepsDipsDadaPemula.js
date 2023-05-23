import React from "react";
import GerakanRepitisi4 from "./GerakanRepitisi4";
const TricepsDipsDadaPemula = ({ route }) => {
  return (
    <GerakanRepitisi4
      textLatihan="TRICEPS DIPS"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/dada_pemula/tricep_dips.gif")}
      navigateTo="IstirahatTricepsDipsDadaPemula"
      navigateBefore="IstirahatPushUpDadaPemula"
      soundSource={require("../../../../../assets/sounds/dada_pemula/triceps_dips.mp3")}
      route={route}
    />
  );
};
export default TricepsDipsDadaPemula;

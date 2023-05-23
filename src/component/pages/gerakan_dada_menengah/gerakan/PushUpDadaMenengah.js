import React from "react";
import GerakanRepitisi5 from "./GerakanRepitisi5";
const PushUpDadaMenengah = ({ route }) => {
  return (
    <GerakanRepitisi5
      textLatihan="KNEE PUSH UP"
      repitisi="x 12"
      gambarKirim={require("../../../../../assets/gif/dada_menengah/push_up.gif")}
      navigateTo="IstirahatPushUpDadaMenengah"
      navigateBefore="IstirahatKneePushUpDadaMenengah"
      soundSource={require("../../../../../assets/sounds/dada_menengah/push_up.mp3")}
      route={route}
    />
  );
};
export default PushUpDadaMenengah;

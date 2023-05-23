import React from "react";
import GerakanRepitisi5 from "./GerakanRepitisi5";
const DeclinePushUpDadaMenengah = ({ route }) => {
  return (
    <GerakanRepitisi5
      textLatihan="DECLINE PUSH UP"
      repitisi="x 12"
      gambarKirim={require("../../../../../assets/gif/dada_menengah/decline_push_up.gif")}
      navigateTo="IstirahatDeclinePushUpDadaMenengah"
      navigateBefore="IstirahatPushUpDadaMenengah"
      soundSource={require("../../../../../assets/sounds/dada_menengah/decline_push_up.mp3")}
      route={route}
    />
  );
};
export default DeclinePushUpDadaMenengah;

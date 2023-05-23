import React from "react";
import GerakanRepitisi8 from "./GerakanRepitisi8";
const DiamondPushUpLenganMenengah = ({ route }) => {
  return (
    <GerakanRepitisi8
      textLatihan="DIAMOND PUSH UP"
      repitisi="x 6"
      gambarKirim={require("../../../../../assets/gif/lengan_menengah/diamond_push_up.gif")}
      navigateTo="IstirahatDiamondPushUpLenganMenengah"
      navigateBefore="IstirahatTricepsDipsLenganMenengah"
      soundSource={require("../../../../../assets/sounds/lengan_menengah/diamond_push_up.mp3")}
      route={route}
    />
  );
};
export default DiamondPushUpLenganMenengah;

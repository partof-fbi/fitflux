import React from "react";
import GerakanRepitisi8 from "./GerakanRepitisi8";
const TricepsDipsLenganMenengah = ({ route }) => {
  return (
    <GerakanRepitisi8
      textLatihan="TRICEP DIPS"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/lengan_menengah/triceps_dips.gif")}
      navigateTo="IstirahatTricepsDipsLenganMenengah"
      navigateBefore="IstirahatArmRaisesLenganMenengah"
      soundSource={require("../../../../../assets/sounds/lengan_menengah/triceps_dips.mp3")}
      route={route}
    />
  );
};
export default TricepsDipsLenganMenengah;

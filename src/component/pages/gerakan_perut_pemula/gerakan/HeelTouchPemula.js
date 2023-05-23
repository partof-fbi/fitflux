import React from "react";
import GerakanRepitisi from "./GerakanRepitisi";
const HeelTouchPemula = ({ route }) => {
  return (
    <GerakanRepitisi
      textLatihan="HEEL TOUCH"
      repitisi="x 16"
      gambarKirim={require("../../../../../assets/gif/perut_pemula/heel_touch.gif")}
      navigateTo="IstirahatHeelTouch"
      navigateBefore="IstirahatLegRaises"
      soundSource={require("../../../../../assets/sounds/perut_pemula/heel_touch.mp3")}
      route={route}
    />
  );
};
export default HeelTouchPemula;

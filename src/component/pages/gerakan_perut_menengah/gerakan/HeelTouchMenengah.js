import React from "react";
import GerakanRepitisi2 from "./GerakanRepitisi2";
const HeelTouchMenengah = ({ route }) => {
  return (
    <GerakanRepitisi2
      textLatihan="HEEL TOUCH"
      repitisi="x 26"
      gambarKirim={require("../../../../../assets/gif/perut_menengah/heel_touch.gif")}
      navigateTo="IstirahatHeelTouchMenengah"
      navigateBefore="IstirahatSitUpMenengah"
      soundSource={require("../../../../../assets/sounds/perut_menengah/heel_touch.mp3")}
      route={route}
    />
  );
};
export default HeelTouchMenengah;

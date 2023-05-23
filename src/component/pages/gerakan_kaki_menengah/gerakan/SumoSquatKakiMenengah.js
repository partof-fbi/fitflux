import React from "react";
import GerakanRepitisi11 from "./GerakanRepitisi11";
const SumoSquatKakiMenengah = ({ route }) => {
  return (
    <GerakanRepitisi11
      textLatihan="SUMO SQUATS"
      repitisi="x 14"
      gambarKirim={require("../../../../../assets/gif/kaki_menengah/sumo_squat.gif")}
      navigateTo="IstirahatSumoSquatKakiMenengah"
      navigateBefore="IstirahatLungesKakiMenengah"
      soundSource={require("../../../../../assets/sounds/kaki_menengah/sumo_squat.mp3")}
      route={route}
    />
  );
};
export default SumoSquatKakiMenengah;

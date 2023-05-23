import React from "react";
import GerakanRepitisi11 from "./GerakanRepitisi11";
const LungesKakiMenengah = ({ route }) => {
  return (
    <GerakanRepitisi11
      textLatihan="LUNGES"
      repitisi="x 14"
      gambarKirim={require("../../../../../assets/gif/kaki_menengah/lunges.gif")}
      navigateTo="IstirahatLungesKakiMenengah"
      navigateBefore="IstirahatSquatsKakiMenengah"
      soundSource={require("../../../../../assets/sounds/kaki_menengah/lunges.mp3")}
      route={route}
    />
  );
};
export default LungesKakiMenengah;

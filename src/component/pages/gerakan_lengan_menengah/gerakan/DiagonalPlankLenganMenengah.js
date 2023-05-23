import React from "react";
import GerakanRepitisi8 from "./GerakanRepitisi8";
const DiagonalPlankLenganMenengah = ({ route }) => {
  return (
    <GerakanRepitisi8
      textLatihan="DIAGONAL PLANK"
      repitisi="x 10"
      gambarKirim={require("../../../../../assets/gif/lengan_menengah/diagonal_plank.gif")}
      navigateTo="IstirahatDiagonalPlankLenganMenengah"
      navigateBefore="IstirahatDiamondPushUpLenganMenengah"
      soundSource={require("../../../../../assets/sounds/lengan_menengah/diagonal_plank.mp3")}
      route={route}
    />
  );
};
export default DiagonalPlankLenganMenengah;

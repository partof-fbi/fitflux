import React from "react";
import GerakanRepitisi8 from "./GerakanRepitisi8";
const WallPushUpLenganMenengah = ({ route }) => {
  return (
    <GerakanRepitisi8
      textLatihan="WALL PUSH UP"
      repitisi="x 12"
      gambarKirim={require("../../../../../assets/gif/lengan_menengah/wall_push_up.gif")}
      navigateTo="HasilLenganMenengah"
      navigateBefore="IstirahatDiagonalPlankLenganMenengah"
      soundSource={require("../../../../../assets/sounds/lengan_menengah/wall_push_up.mp3")}
      route={route}
    />
  );
};
export default WallPushUpLenganMenengah;

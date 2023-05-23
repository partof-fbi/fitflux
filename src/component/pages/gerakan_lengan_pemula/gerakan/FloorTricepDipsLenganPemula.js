import React from "react";
import GerakanRepitisi7 from "./GerakanRepitisi7";
const FloorTricepDipsLenganPemula = ({ route }) => {
  return (
    <GerakanRepitisi7
      textLatihan="FLOOR TRICEP DIPS"
      repitisi="x 12"
      gambarKirim={require("../../../../../assets/gif/lengan_pemula/floor_tricep_dips.gif")}
      navigateTo="IstirahatFloorTricepDipsLenganPemula"
      navigateBefore="IstirahatLegBarbellCurlRightLenganPemula"
      soundSource={require("../../../../../assets/sounds/lengan_pemula/floor_tricep_dips.mp3")}
      route={route}
    />
  );
};
export default FloorTricepDipsLenganPemula;

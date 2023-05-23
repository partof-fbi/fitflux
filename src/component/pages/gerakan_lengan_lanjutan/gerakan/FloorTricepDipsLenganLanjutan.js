import React from "react";
import GerakanRepitisi9 from "./GerakanRepitisi9";
const FloorTricepDipsLenganLanjutan = ({ route }) => {
  return (
    <GerakanRepitisi9
      textLatihan="FLOOR TRICEP DIPS"
      repitisi="x 20"
      gambarKirim={require("../../../../../assets/gif/lengan_lanjutan/floor_tricep_dips.gif")}
      navigateTo="IstirahatFloorTricepDipsLenganLanjutan"
      navigateBefore="IstirahatLegBarbellCurlRightLenganLanjutan"
      soundSource={require("../../../../../assets/sounds/lengan_lanjutan/floor_tricep_dips.mp3")}
      route={route}
    />
  );
};
export default FloorTricepDipsLenganLanjutan;

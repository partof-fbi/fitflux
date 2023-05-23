import React from "react";
import GerakanRepitisi10 from "./GerakanRepitisi10";
const DonkeyKicksRightKakiPemula = ({ route }) => {
  return (
    <GerakanRepitisi10
      textLatihan="DONKEY KICKS RIGHT"
      repitisi="x 15"
      gambarKirim={require("../../../../../assets/gif/kaki_pemula/donkey_kicks_right.gif")}
      navigateTo="IstirahatDonkeyKicksRightKakiPemula"
      navigateBefore="IstirahatDonkeyKicksLeftKakiPemula"
      soundSource={require("../../../../../assets/sounds/kaki_pemula/donkey_kicks_right.mp3")}
      route={route}
    />
  );
};
export default DonkeyKicksRightKakiPemula;

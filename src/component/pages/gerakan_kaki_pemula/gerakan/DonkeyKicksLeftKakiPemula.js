import React from "react";
import GerakanRepitisi10 from "./GerakanRepitisi10";
const DonkeyKicksLeftKakiPemula = ({ route }) => {
  return (
    <GerakanRepitisi10
      textLatihan="DONKEY KICKS LEFT"
      repitisi="x 15"
      gambarKirim={require("../../../../../assets/gif/kaki_pemula/donkey_kicks_left.gif")}
      navigateTo="IstirahatDonkeyKicksLeftKakiPemula"
      navigateBefore="IstirahatBackwardLungeKakiPemula"
      soundSource={require("../../../../../assets/sounds/kaki_pemula/donkey_kicks_left.mp3")}
      route={route}
    />
  );
};
export default DonkeyKicksLeftKakiPemula;

import React from "react";
import { View } from "react-native";

import IstirahatLenganPemula from "./IstirahatLenganPemula";

const IstirahatFloorTricepDipsLenganPemula = ({ route }) => {
  return (
    <View>
      <IstirahatLenganPemula
        textLatihanSelanjutnya="Chest stretch"
        gambarSource={require("../../../../../assets/gif/lengan_pemula/chest_stretch.gif")}
        navigateTo="ChestStretchLenganPemula"
        route={route}
      />
    </View>
  );
};

export default IstirahatFloorTricepDipsLenganPemula;

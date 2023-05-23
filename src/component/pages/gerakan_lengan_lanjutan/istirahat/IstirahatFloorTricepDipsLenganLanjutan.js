import React from "react";
import { View } from "react-native";

import IstirahatLenganLanjutan from "./IstirahatLenganLanjutan";

const IstirahatFloorTricepDipsLenganLanjutan= ({ route }) => {
  return (
    <View>
      <IstirahatLenganLanjutan
        textLatihanSelanjutnya="Chest stretch"
        gambarSource={require("../../../../../assets/gif/lengan_lanjutan/chest_stretch.gif")}
        navigateTo="ChestStretchLenganLanjutan"
        route={route}
      />
    </View>
  );
};

export default IstirahatFloorTricepDipsLenganLanjutan;

import React from "react";
import { View } from "react-native";

import IstirahatLenganMenengah from "./IstirahatLenganMenengah";

const IstirahatTricepsDipsLenganMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatLenganMenengah
        textLatihanSelanjutnya="Diamond push up"
        gambarSource={require("../../../../../assets/gif/lengan_menengah/diamond_push_up.gif")}
        navigateTo="DiamondPushUpLenganMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatTricepsDipsLenganMenengah;

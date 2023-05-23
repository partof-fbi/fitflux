import React from "react";
import { View } from "react-native";

import IstirahatLenganMenengah from "./IstirahatLenganMenengah";

const IstirahatDiagonalPlankLenganMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatLenganMenengah
        textLatihanSelanjutnya="Wall push up"
        gambarSource={require("../../../../../assets/gif/lengan_menengah/wall_push_up.gif")}
        navigateTo="WallPushUpLenganMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatDiagonalPlankLenganMenengah;

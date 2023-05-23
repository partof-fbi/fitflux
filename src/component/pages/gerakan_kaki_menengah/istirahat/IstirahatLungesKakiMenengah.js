import React from "react";
import { View } from "react-native";

import IstirahatKakiMenengah from "./IstirahatKakiMenengah";

const IstirahatLungesKakiMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatKakiMenengah
        textLatihanSelanjutnya="Sumo squat"
        gambarSource={require("../../../../../assets/gif/kaki_menengah/sumo_squat.gif")}
        navigateTo="SumoSquatKakiMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatLungesKakiMenengah;

import React from "react";
import { View } from "react-native";

import IstirahatDadaMenengah from "./IstirahatDadaMenengah";

const IstirahatKneePushUpDadaMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatDadaMenengah
        textLatihanSelanjutnya="Push up"
        gambarSource={require("../../../../../assets/gif/dada_menengah/push_up.gif")}
        navigateTo="PushUpDadaMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatKneePushUpDadaMenengah;

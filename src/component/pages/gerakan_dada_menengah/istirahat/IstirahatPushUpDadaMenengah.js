import React from "react";
import { View } from "react-native";

import IstirahatDadaMenengah from "./IstirahatDadaMenengah";

const IstirahatPushUpDadaMenengah = ({ route }) => {
  return (
    <View>
      <IstirahatDadaMenengah
        textLatihanSelanjutnya="Decline push up"
        gambarSource={require("../../../../../assets/gif/dada_menengah/decline_push_up.gif")}
        navigateTo="DeclinePushUpDadaMenengah"
        route={route}
      />
    </View>
  );
};

export default IstirahatPushUpDadaMenengah;

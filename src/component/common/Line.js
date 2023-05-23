import React from "react";
import { View, StyleSheet } from "react-native";

const Line = ({ position }) => {
  const styles = StyleSheet.create({
    line: {
      width: 300,
      height: 6,
      backgroundColor: "#0152FF",
      shadowOffset: { width: 12, height: 12 },
      shadowRadius: 25,
      shadowOpacity: 0.5,
      shadowColor: "#0051FF",
      borderRadius: 25,
      position: "absolute",
      ...position,
    },
  });
  return <View style={styles.line}></View>;
};

export default Line;




import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Line from "../common/Line";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Opening");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Line
        position={{
          bottom: 100,
          right: 0,
        }}
      />
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Fit Flux</Text>
      <Text style={styles.title2}>
        Jaga tubuh kuat bersama kami
      </Text>
      <Line
        position={{
          top: 100,
          left: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  image: {
    width: 170,
    height: 170,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "Roboto-Bold",
  },
  title2: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
});

export default SplashScreen;

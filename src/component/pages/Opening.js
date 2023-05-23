import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextStroke } from "react-native-textstroke";
import { useNavigation } from "@react-navigation/native";
const Opening = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require("../../../assets/images/elemenStroke1.png")}
          style={styles.elemenStroke1}
        />
        <View style={styles.containerImageLeft}>
          <Image
            source={require("../../../assets/images/opening_1.png")}
            style={styles.image1}
          />
          <Image
            source={require("../../../assets/images/opening_2.png")}
            style={styles.image2}
          />
        </View>
        <View style={styles.containerImageRight}>
          <Image
            source={require("../../../assets/images/opening_3.png")}
            style={styles.image3}
          />
          <Image
            source={require("../../../assets/images/opening_4.png")}
            style={styles.image4}
          />
        </View>
      </View>

      <View style={styles.containerMainText}>
        <TextStroke stroke={1.2} color="#222">
          <Text style={styles.MainText1}>
            Jaga tubuh kuat
          </Text>
        </TextStroke>
        <Text style={styles.MainText2}>bersama kami</Text>
        <Image
          source={require("../../../assets/images/elemenStroke2.png")}
          style={styles.elemenStroke2}
        />
      </View>

      <View style={styles.containerAboutText}>
        <Text style={styles.text2}>
          jika kamu berpikir akan ada kesempatan kedua, kau
          akan bermalas-malasan
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.styleButton}
      >
        <Text style={styles.TextButton}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: 50,
    gap: 50,
    flexDirection: "column",
  },
  text: {
    color: "#222",
    fontFamily: "Roboto-Medium",
  },
  text2: {
    color: "#222",
    fontFamily: "Roboto-Regular",
    letterSpacing: 0.8,
  },
  containerImage: {
    width: "100%",
    height: 351,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  containerImageLeft: {
    width: "50%",
    height: 351,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    marginRight: 10,
  },
  containerImageRight: {
    width: "50%",
    height: 351,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  image1: {
    height: 190.11,
    width: 143,
    borderTopLeftRadius: 54,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 54,
    borderBottomLeftRadius: 0,
  },
  image2: {
    height: 135,
    width: 143,
    borderTopLeftRadius: 54,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 54,
    borderBottomLeftRadius: 54,
  },
  image3: {
    height: 135,
    width: 143,
    borderTopLeftRadius: 54,
    borderTopRightRadius: 54,
    borderBottomRightRadius: 54,
    borderBottomLeftRadius: 0,
  },
  image4: {
    height: 190.11,
    width: 143,
    borderTopLeftRadius: 54,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 54,
    borderBottomLeftRadius: 0,
  },
  elemenStroke1: {
    width: 57,
    height: 57,
    position: "absolute",
    top: -20,
    left: -30,
  },
  elemenStroke2: {
    width: 62,
    height: 36,
    position: "relative",
    right: -250,
    top: -50,
  },
  containerMainText: {
    width: "100%",
    height: 97,
    display: "flex",
    gap: 12,
  },

  MainText1: {
    fontSize: 42,
    fontFamily: "Roboto-Bold",
    color: "#fff",
  },

  MainText2: {
    fontSize: 36,
    fontFamily: "Roboto-Bold",
    color: "#333",
  },

  containerAboutText: {
    width: "100%",
    height: 40,
    position: "relative",
    top: -10,
  },
  openingImage: {
    width: "118%",
    height: "116%",
    position: "relative",
    left: -10,
    transform: [{ scale: 0.9 }],
  },
  styleButton: {
    width: 204,
    height: 83.45,
    backgroundColor: "#293241",
    borderRadius: 27.82,
    position: "relative",
    left: 60,
    transform: [{ scale: 0.9 }],
  },
  TextButton: {
    textAlign: "center",
    color: "#fff",
    lineHeight: 83.45,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});
export default Opening;

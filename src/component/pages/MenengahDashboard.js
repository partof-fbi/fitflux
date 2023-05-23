import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonToDashboard from "../common/ButtonToDashboard";
import NavTopButton from "../common/NavTopButton";

const MenengahDashboard = () => {
  const navigation = useNavigation();
  const cardExercise = [
    // Data card 1
    {
      imageSource: require("../../../assets/images/perut.png"),
      title: "Perut",
      level: "Menengah",
      duration: "18 Menit",
      navigateTo: "NestedScreens2",
      params: {
        screen: "PerutMenengah"
      }
    },
    // Data card 2
    {
      imageSource: require("../../../assets/images/dada.png"),
      title: "Dada",
      level: "Menengah",
      duration: "18 Menit",
      navigateTo: "NestedScreens5",
      params: {
        screen: "DadaMenengah"
      }
    },
    // Data card 3
    {
      imageSource: require("../../../assets/images/lengan.png"),
      title: "Lengan",
      level: "Menengah",
      duration: "18 Menit",
      navigateTo: "NestedScreens8",
      params: {
        screen: "LenganMenengah"
      }
    },
    // Data card 4
    {
      imageSource: require("../../../assets/images/kaki.png"),
      title: "Kaki",
      level: "Menengah",
      duration: "18 Menit",
      navigateTo: "NestedScreens11",
      params: {
        screen: "KakiMenengah"
      }
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/menengah_navbar.png")}
        style={styles.navbarRectangle}
      />
      <NavTopButton />

      {/* main container */}
      <View style={styles.mainContainer}>
        <Image
          source={require("../../../assets/images/jenisLatihanMenengah.png")}
          style={styles.imageCard}
        />
        <View style={styles.cardBlur}></View>

        {/* card contant */}
        <View style={styles.cardBottom}>
          <Text style={styles.cardNBottomLevel}>
            Menengah
          </Text>
          <View style={styles.cardBottomCalorieTime}>
            <View style={styles.cardBottomCalorie}>
              <Image
                source={require("../../../assets/images/calori_red.png")}
                style={styles.caloriImage2}
              />
              <View
                style={styles.cardBottomCalorieTimeText}
              >
                <Text style={styles.cardTextRegular}>
                  480
                </Text>
                <Text
                  style={styles.cardNavigationTextMedium}
                >
                  Kalori
                </Text>
              </View>
            </View>
            <View style={styles.cardNavigationBottomTime}>
              <Image
                source={require("../../../assets/images/time_green.png")}
                style={styles.timeImage2}
              />
              <View
                style={styles.cardBottomCalorieTimeText}
              >
                <Text style={styles.cardTextRegular}>
                  48
                </Text>
                <Text
                  style={styles.cardNavigationTextMedium}
                >
                  Menit
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* cardExercise */}
        <View style={styles.cardExerciseContainer}>
          {cardExercise.map((cardExe, index) => {
            return (
              <View style={styles.cardExercise} key={index}>
                <Image
                  source={cardExe.imageSource}
                  style={styles.cardImageExercise}
                />
                <View style={styles.contentTextContainer}>
                  <View style={styles.typeLevel}>
                    <Text style={styles.cardTextTop}>
                      {cardExe.title}
                    </Text>
                    <View style={styles.circle}></View>
                    <Text style={styles.cardTextTop}>
                      {cardExe.level}
                    </Text>
                  </View>
                  <Text style={styles.cardTextBottom}>
                    {cardExe.duration}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(cardExe.navigateTo)
                  }
                  style={styles.styleButton}
                >
                  <Image
                    source={require("../../../assets/images/arrow_white.png")}
                    style={styles.imageButton}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>

      <ButtonToDashboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  navbarRectangle: {
    height: 190,
    width: "105%",
    position: "absolute",
    top: -60,
  },
  mainContainer: {
    width: 336,
    height: 546,
    backgroundColor: "#fff",
    borderRadius: 24,
    shadowColor: "#666",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  imageCard: {
    width: "100%",
    height: 140,
    position: "absolute",
    top: 0,
    borderRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  // card color
  cardBlur: {
    width: "100%",
    height: 65,
    backgroundColor: "#333",
    position: "absolute",
    top: 75,
    opacity: 0.6,
  },

  // card bottom
  cardBottom: {
    width: "100%",
    height: 65,
    position: "absolute",
    top: 75,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardNBottomLevel: {
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    color: "white",
    position: "absolute",
    left: 18,
  },

  cardBottomCalorieTime: {
    height: "100%",
    width: 150,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    position: "absolute",
    right: 35,
  },
  cardBottomCalorie: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  cardNavigationBottomTime: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  caloriImage2: {
    width: 22,
    height: 28,
    marginBottom: 10,
  },
  timeImage2: {
    width: 23,
    height: 27,
    marginBottom: 10,
  },
  cardBottomCalorieTimeText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  },
  cardTextRegular: {
    fontSize: 16,
    color: "white",
    fontFamily: "Roboto-Regular",
  },
  cardNavigationTextMedium: {
    fontSize: 14,
    color: "white",
    fontFamily: "Roboto-Medium",
  },

  // jenis latihan
  cardImageExercise: {
    width: 76,
    height: 76,
    borderRadius: 24,
  },
  cardExerciseContainer: {
    width: "100%",
    height: 406,
    position: "absolute",
    bottom: 0,
    borderRadius: 24,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: "hidden",
  },
  cardExercise: {
    width: "100%",
    height: "25%",
    backgroundColor: "#fff",
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 0,
  },
  circle: {
    width: 3,
    height: 3,
    backgroundColor: "#222",
    borderRadius: 50,
  },
  styleButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FC8877",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 0.9 }],
  },
  contentTextContainer: {
    height: "100%",
    width: 148,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  typeLevel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  cardTextTop: {
    fontSize: 16,
    color: "#222",
    fontFamily: "Roboto-Bold",
  },
  cardTextBottom: {
    fontSize: 12,
    color: "#222",
    fontFamily: "Roboto-Regular",
  },
  imageButton: {
    width: 22,
    height: 13,
    transform: [{ scale: 0.9 }],
  },
});

export default MenengahDashboard;

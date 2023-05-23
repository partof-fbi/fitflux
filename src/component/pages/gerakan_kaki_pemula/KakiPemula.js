                    
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const KakiPemula = () => {
  const [menitDurasiAwal, setMenitDurasiAwal] = useState(0);
  const [detikDurasiAwal, setDetikDurasiAwal] = useState(0);
  const navigation = useNavigation();

  const hitungDurasi = () => {
    let durasi;
    durasi = setInterval(() => {
      setDetikDurasiAwal((detikDurasiAwal) => {
        if (detikDurasiAwal === 59) {
          setDetikDurasiAwal(0);
          setMenitDurasiAwal(
            (menitDurasiAwal) => menitDurasiAwal + 1
          );
        } else {
          return detikDurasiAwal + 1;
        }
      });
    }, 1000);
    console.log(menitDurasiAwal, ":", detikDurasiAwal);
    return () => clearInterval(waktu);
  };


  const moveTypeCard = [
    {
      imageSource: require("../../../../assets/gif/kaki_pemula/squats.gif"),
      moveTypee: "SQUATS",
      duration: "x 12",
    },
    {
      imageSource: require("../../../../assets/gif/kaki_pemula/backward_lunge.gif"),
      moveTypee: "BACKWARD LUNGE",
      duration: "x 14",
    },
    {
      imageSource: require("../../../../assets/gif/kaki_pemula/donkey_kicks_left.gif"),
      moveTypee: "DONKEY KICKS LEFT",
      duration: "x 15",
    },
    {
      imageSource: require("../../../../assets/gif/kaki_pemula/donkey_kicks_right.gif"),
      moveTypee: "DONKEY KICKS RIGHT",
      duration: "X 15",
    },
    {
      imageSource: require("../../../../assets/gif/kaki_pemula/calf_stretch.gif"),
      moveTypee: "CALF STRETCH",
      duration: "00:20",
    },
  ];
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PemulaDashboard")
        }
        style={styles.buttonToDBeforePage}
      >
        <Image
          source={require("../../../../assets/images/arrow.png")}
          style={styles.imageButton}
        />
      </TouchableOpacity>

      {/* card top */}

      <View style={styles.cardTop}>
        <Image
          source={require("../../../../assets/images/kakiExercise.jpeg")}
          style={styles.imageCard}
        />
        <View style={styles.cardBlur}></View>

        <View style={styles.cardBottom}>
          <View style={styles.typeLevel}>
            <Text style={styles.cardTextTop1}>Kaki</Text>
            <View style={styles.circle}></View>
            <Text style={styles.cardTextTop1}>Pemula</Text>
          </View>
          <View style={styles.cardBottomCalorieTime}>
            <View style={styles.cardBottomCalorie}>
              <Image
                source={require("../../../../assets/images/calori_red.png")}
                style={styles.caloriImage2}
              />
              <View
                style={styles.cardBottomCalorieTimeText}
              >
                <Text style={styles.cardTextRegular}>
                  100
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
                source={require("../../../../assets/images/time_green.png")}
                style={styles.timeImage2}
              />
              <View
                style={styles.cardBottomCalorieTimeText}
              >
                <Text style={styles.cardTextRegular}>
                  10
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
      </View>
      <View style={styles.movementTypeContainer}>
        {moveTypeCard.map((moving, index) => {
          return (
            <View
              style={styles.cardmovementType}
              key={index}
            >
              <Image
                source={moving.imageSource}
                style={styles.cardImageExercise}
              />
              <View style={styles.cardTextExercise}>
                <Text style={styles.cardTextTop}>
                  {moving.moveTypee}
                </Text>
                <Text style={styles.cardTextBottom}>
                  {moving.duration}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* tombol mulai */}
      <TouchableOpacity
        onPress={() => {
          hitungDurasi();
          navigation.navigate("PersiapanGerakan10", {
            menitDurasiAwal: menitDurasiAwal,
            detikDurasiAwal: detikDurasiAwal,
          });
        }}
        style={styles.buttonToNextPage}
      >
        <Text style={styles.TextButton}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#222",
  },

  //   card top

  cardTop: {
    width: "100%",
    height: 245,
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  imageCard: {
    width: "110%",
    height: "100%",
    position: "absolute",
    left: -20,
  },
  cardBlur: {
    width: "100%",
    height: 90,
    backgroundColor: "#333",
    position: "absolute",
    bottom: 0,
    opacity: 0.6,
  },

  //   card bottom
  cardBottom: {
    width: "100%",
    height: 75,
    position: "absolute",
    bottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  circle: {
    width: 3,
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  cardNBottomLevel: {
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    color: "white",
  },
  typeLevel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "relative",
    left: -10,
  },
  cardTextTop1: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "Roboto-Bold",
  },

  cardBottomCalorieTime: {
    height: "100%",
    width: 150,
    display: "flex",
    flexDirection: "row",
    gap: 15,
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

  //   button
  buttonToDBeforePage: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 100,
    transform: [{ scale: 0.9 }, { rotate: "180deg" }],
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    top: 50,
    zIndex: 1,
  },
  imageButton: {
    width: 22,
    height: 13,
    transform: [{ scale: 1 }],
  },

  //   movement type container

  movementTypeContainer: {
    width: "100%",
    height: "58%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 120,
  },
  cardmovementType: {
    width: "100%",
    height: "20%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingLeft: 30,
    gap: 38,
  },
  cardImageExercise: {
    width: 74,
    height: 74,
    borderRadius: 24,
  },
  cardTextExercise: {
    display: "flex",
    gap: 10,
  },
  cardTextTop: {
    fontSize: 16,
    color: "#222",
    fontFamily: "Roboto-Bold",
  },
  cardTextBottom: {
    fontSize: 16,
    color: "#222",
    fontFamily: "Roboto-Regular",
  },
  buttonToNextPage: {
    width: 145,
    height: 60,
    backgroundColor: "#293241",
    borderRadius: 18,
    position: "absolute",
    bottom: 45,
  },
  TextButton: {
    textAlign: "center",
    color: "#fff",
    lineHeight: 60,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});

export default KakiPemula;

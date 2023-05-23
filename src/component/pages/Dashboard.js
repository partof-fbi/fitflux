import React, { Component } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import firebase from "../../../config";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      historyLatihan: [],
      data: null,
    };
  }

  motivation = [
    {
      personMotivation: "Aomine daiki",
      quoteMotivation:
        "“The only one who can beat me is me”",
    },
    {
      personMotivation: "Marsha doble",
      quoteMotivation:
        "“Aku harus berolahraga di pagi hari sebelum otak mengetahui apa yang aku lakukan.”",
    },
    {
      personMotivation: "Your mind",
      quoteMotivation:
        "“70% orang yang memulai rencana kebugaran berhenti. Kecuali kamu. Tidak kali ini.”",
    },
    {
      personMotivation: "Miftah farid",
      quoteMotivation:
        "“Latihan satu jam adalah 4% dari hari Anda. Tidak ada alasan”",
    },
  ];

  componentDidMount() {
    const focusHandler = this.props.navigation.addListener(
      "focus",
      () => {
        this.updateDataSetelahLatihan();
        this.tampilkanHistory();
      }
    );

    return focusHandler;
  }
  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  updateDataSetelahLatihan = async () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            this.setState({
              data: snapshot.data(),
              historyLatihan:
                snapshot.data().historyLatihan,
            });
            console.log(
              "Panjang history latihan",
              snapshot.data().historyLatihan.length
            );
          } else {
            console.log("user does not exist");
          }
        });
    }
  };

  hitungJumlahKalori = () => {
    const { historyLatihan } = this.state;
    if (historyLatihan.length !== 0) {
      const totalKalori = historyLatihan.reduce(
        (total, item) => total + item.kalori,
        0
      );
      return totalKalori;
    } else {
      console.log("Array kosong");
      return "0";
    }
  };

  hitungJumlahMenit = () => {
    const { historyLatihan } = this.state;
    if (historyLatihan.length !== 0) {
      const totalMenit = historyLatihan.reduce(
        (total, item) => total + item.menitDurasiAkhir,
        0
      );
      return totalMenit;
    } else {
      return "0";
    }
  };

  hitungJumlahDetik = () => {
    const { historyLatihan } = this.state;
    if (historyLatihan.length !== 0) {
      const totalMenit = historyLatihan.reduce(
        (total, item) => total + item.detikDurasiAkhir,
        0
      );
      return totalMenit;
    } else {
      return "0";
    }
  };

  hitungJumlahDurasi = () => {
    const { historyLatihan } = this.state;
    if (historyLatihan.length !== 0) {
      let jumlahMenit = this.hitungJumlahMenit();
      let jumlahDetik = this.hitungJumlahDetik();
      if (jumlahDetik > 59) {
        const sisaMenit = Math.floor(jumlahDetik / 60);
        const sisaDetik = jumlahDetik % 60;
        return `${jumlahMenit + sisaMenit},${sisaDetik.toString().padStart(2, "0")}`;
      } else {
        return `${jumlahMenit}:${jumlahDetik.toString().padStart(2, "0")}`;
      }
    } else {
      return "0";
    }
  };
  

  // hitungJumlahDurasiMenit = () => {
  //   const { historyLatihan } = this.state;
  //   if (historyLatihan.length !== 0) {
  //     const totalDetik = historyLatihan.reduce(
  //       (total, item) => total + item.menitDurasiAkhir * 60, // Mengalikan menit dengan 60 untuk mengonversi ke detik
  //       0
  //     );

  //     const totalMenit = Math.floor(totalDetik / 60); // Menghitung jumlah menit
  //     const sisaDetik = totalDetik % 60; // Menghitung sisa detik setelah dikonversi ke menit

  //     return `${totalMenit}:${sisaDetik
  //       .toString()
  //       .padStart(2, "0")}`; // Format tampilan menit:sisa detik
  //   } else {
  //     console.log("Array kosong");
  //     return "0";
  //   }
  // };

  // hitungJumlahDurasi = () => {
  //   const totalKalori = this.historyLatihan.reduce(
  //     (total, item) => total + item.menitDurasiAkhir,
  //     0
  //   );
  //   return totalKalori;
  // };

  tampilkanHistory = () => {
    const { historyLatihan } = this.state;
    if (!historyLatihan || historyLatihan.length === 0) {
      return (
        <View style={styles.noHistoryContainer}>
          <Text style={styles.noHistoryText}>
            Belum ada latihan
          </Text>
          <Image
            source={require("../../../assets/images/no_history.png")}
            style={styles.noHistoryImage}
          />
        </View>
      );
    }

    return historyLatihan.map((card, index) => {
      let gambarHistory;

      switch (card.jenisLatihan) {
        case "Perut":
          gambarHistory = require("../../../assets/images/perut.png");
          break;
        case "Dada":
          gambarHistory = require("../../../assets/images/dada.png");
          break;
        case "Lengan":
          gambarHistory = require("../../../assets/images/lengan.png");
          break;
        case "Kaki":
          gambarHistory = require("../../../assets/images/kaki.png");
          break;
        default:
          gambarHistory = null;
      }

      return (
        <View style={styles.card} key={index}>
          <Image
            source={gambarHistory}
            style={styles.cardImage}
          />
          <View style={styles.cardTextContainer}>
            <View style={styles.cardTextTop}>
              <Text style={styles.cardTextTopText}>
                {card.jenisLatihan}
              </Text>
              <View style={styles.cardTextTopCircle}></View>
              <Text style={styles.cardTextTopText}>
                {card.tingkatanLatihan}
              </Text>
            </View>

            <View style={styles.cardTextBottom}>
              <View style={styles.cardTextBottomContainer}>
                <Text style={styles.cardTextBottomText}>
                  {card.tanggal
                    .toDate()
                    .toLocaleString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </Text>
                <Text style={styles.cardTextBottomText}>
                  {card.tanggal.toDate().getDate()}{" "}
                  {card.tanggal
                    .toDate()
                    .toLocaleString("id-ID", {
                      month: "long",
                    })}
                </Text>
              </View>
              <View style={styles.cardTextBottomContainer}>
                <Text style={styles.cardTextBottomText}>
                  {String(card.menitDurasiAkhir).padStart(
                    2,
                    "0"
                  )}{" "}
                  :{" "}
                  {String(card.detikDurasiAkhir).padStart(
                    2,
                    "0"
                  )}
                </Text>

                <Text style={styles.cardTextBottomText}>
                  Durasi
                </Text>
              </View>
              <View style={styles.cardTextBottomContainer}>
                <Text style={styles.cardTextBottomText}>
                  {card.kalori}
                </Text>
                <Text style={styles.cardTextBottomText}>
                  Kkal
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    });
  };

  render() {
    tombolPindah = (navigateTo) => {
      this.props.navigation.navigate(navigateTo);
    };
    const { data } = this.state;
    const cardNavigation = [
      {
        imageSource: require("../../../assets/images/opening_1.png"),
        level: "Pemula",
        calories: "400",
        time: "40",
        navigateTo: "PemulaDashboard",
      },
      {
        imageSource: require("../../../assets/images/opening_4(1).png"),
        level: "Menengah",
        calories: "480",
        time: "48",
        navigateTo: "MenengahDashboard",
      },
      {
        imageSource: require("../../../assets/images/lupa_password.png"),
        level: "Lanjutan",
        calories: "600",
        time: "60",
        navigateTo: "LanjutanDashboard",
      },
    ];

    const { historyLatihan } = this.state;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.navTop}>
          <Text style={styles.navTopText}>Fit Flux</Text>
          <TouchableOpacity
            onPress={this.handleLogout}
            style={styles.navTopButton}
          >
            <Text style={styles.navTopButtonText}>
              Keluar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image
            source={require("../../../assets/images/rectangle1.png")}
            style={styles.greyContainer}
          />
          <View style={styles.rectangle1}>
            <Text style={styles.text1}>
              {data && `Hai ${data.lastName}`}
            </Text>
            <Text style={styles.text2}>
              Jaga tubuh kuat
            </Text>
            <Text style={styles.text3}>Bersama kami</Text>
            <Image
              source={require("../../../assets/images/logoDashboard.png")}
              style={styles.image}
            />
            <Image
              source={require("../../../assets/images/decoration3.png")}
              style={styles.image2}
            />
          </View>
          <View style={styles.kaloriTimeWeek}>
            <Image
              source={require("../../../assets/images/rectangle2.png")}
              style={styles.salmonContainer}
            />
            <Image
              source={require("../../../assets/images/rectangle3.png")}
              style={styles.blueContainer}
            />
            <View style={styles.leftKaloriTimeWeek}>
              <Image
                source={require("../../../assets/images/calori.png")}
                style={styles.caloriImage}
              />
              <Text style={styles.calorieCountText}>
                {this.hitungJumlahKalori()}
              </Text>
              <Text style={styles.caloriWeekText}>
                Kalori / minggu
              </Text>
            </View>
            <View style={styles.rightKaloriTimeWeek}>
              <Text style={styles.timeCountText}>
                {this.hitungJumlahDurasi()}
              </Text>
              <Image
                source={require("../../../assets/images/time.png")}
                style={styles.timeImage}
              />
              <Text style={styles.timeWeekText}>
                Menit / minggu
              </Text>
            </View>
          </View>

          <Text style={styles.historyText}>
            History Latihan
          </Text>

          <View style={styles.historyContainer}>
            <ScrollView
              contentContainerStyle={styles.cardContainer}
              indicatorStyle="white"
            >
              {this.tampilkanHistory()}
            </ScrollView>
          </View>

          <View style={styles.motivationContainer}>
            <Swiper
              autoplay
              autoplayTimeout={5}
              dot={<View style={styles.dot} />}
              activeDot={
                <View
                  style={[styles.dot, styles.activeDot]}
                />
              }
            >
              {this.motivation.map((item, index) => (
                <View
                  key={index}
                  style={styles.motivationCard}
                >
                  <View style={styles.cardMotivationPerson}>
                    <Text
                      style={styles.textMotivationPerson}
                    >
                      {item.personMotivation}
                    </Text>
                  </View>
                  <Text style={styles.textMotivationQoutes}>
                    {item.quoteMotivation}
                  </Text>
                </View>
              ))}
            </Swiper>
          </View>

          {/* card navigation container */}
          <View style={styles.cardNavigationContainer}>
            {cardNavigation.map((cardNav, index) => (
              <View
                style={styles.cardNavigation}
                key={index}
              >
                <Image
                  source={cardNav.imageSource}
                  style={styles.imageCardNavigation}
                />
                <View style={styles.cardBlur}></View>
                <View style={styles.cardNavigationBottom}>
                  <Text
                    style={styles.cardNavigationBottomLevel}
                  >
                    {cardNav.level}
                  </Text>
                  <View
                    style={
                      styles.cardNavigationBottomCalorieTime
                    }
                  >
                    <View
                      style={
                        styles.cardNavigationBottomCalorie
                      }
                    >
                      <Image
                        source={require("../../../assets/images/calori_red.png")}
                        style={styles.caloriImage2}
                      />
                      <View
                        style={
                          styles.cardNavigationBottomCalorieTimeText
                        }
                      >
                        <Text
                          style={
                            styles.cardNavigationTextRegular
                          }
                        >
                          {cardNav.calories}
                        </Text>
                        <Text
                          style={
                            styles.cardNavigationTextMedium
                          }
                        >
                          Kalori
                        </Text>
                      </View>
                    </View>
                    <View
                      style={
                        styles.cardNavigationBottomTime
                      }
                    >
                      <Image
                        source={require("../../../assets/images/time_green.png")}
                        style={styles.timeImage2}
                      />
                      <View
                        style={
                          styles.cardNavigationBottomCalorieTimeText
                        }
                      >
                        <Text
                          style={
                            styles.cardNavigationTextRegular
                          }
                        >
                          {cardNav.time}
                        </Text>
                        <Text
                          style={
                            styles.cardNavigationTextMedium
                          }
                        >
                          Menit
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      tombolPindah(cardNav.navigateTo)
                    }
                    style={styles.styleButton}
                  >
                    <Image
                      source={require("../../../assets/images/arrow.png")}
                      style={styles.imageButton}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    backgroundColor: "#fff",
    height: 2000,
    flex: 1,
  },
  navTop: {
    width: "100%",
    height: 60,
    position: "absolute",
    top: 50,
    zIndex: 999,
    paddingHorizontal: 35,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  navTopText: {
    fontSize: 24,
    fontFamily: "Roboto-Bold",
    color: "#4B5565",
    position: "relative",
    top: 2,
  },
  navTopButton: {
    width: 108,
    height: 46,
    backgroundColor: "#FC8877",
    borderRadius: 16,
  },
  navTopButtonText: {
    textAlign: "center",
    color: "#fff",
    lineHeight: 45,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  container: {
    width: "100%",
    height: 1900,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 45,

    marginTop: 50,
  },
  rectangle1: {
    width: 350,
    height: 250,
    paddingTop: 60,
    padding: 40,
    display: "flex",
    gap: 15,
    position: "relative",
    top: 10,
  },
  text1: {
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },
  text2: {
    fontSize: 24,
    fontFamily: "Roboto-Medium",
    color: "#fff",
    position: "relative",
    top: 5,
  },
  text3: {
    fontSize: 22,
    fontFamily: "Roboto-Regular",
    color: "#fff",
    position: "relative",
    top: 5,
  },
  image: {
    width: 65,
    height: 65,
    position: "relative",
    left: 210,
    bottom: 100,
  },
  image2: {
    width: 35,
    height: 21.18,
    position: "relative",
    left: 160,
    bottom: 115,
  },
  greyContainer: {
    width: 385,
    // 370
    height: 250,
    // 242
    position: "absolute",
    top: 70,
  },
  kaloriTimeWeek: {
    width: 345,
    height: 190,
    position: "absolute",
    top: 280,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  salmonContainer: {
    width: 160,
    height: 171,
    position: "absolute",
    left: 0,
  },
  blueContainer: {
    width: 160,
    height: 171,
    position: "absolute",
    right: 0,
  },
  leftKaloriTimeWeek: {
    width: 160,
    height: 171,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  rightKaloriTimeWeek: {
    width: 160,
    height: 171,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  caloriImage: {
    width: 45,
    height: 56,
    position: "absolute",
    bottom: 65,
    left: 20,
  },
  timeImage: {
    width: 45.75,
    height: 53,
    position: "absolute",
    bottom: 65,
    right: 20,
  },
  calorieCountText: {
    fontSize: 32,
    color: "white",
    fontFamily: "Roboto-Regular",
    position: "relative",
    bottom: 0,
    left: 30,
  },
  caloriWeekText: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    color: "#fff",
    position: "absolute",
    bottom: 40,
    right: 15,
  },

  timeCountText: {
    fontSize: 32,
    color: "white",
    fontFamily: "Roboto-Regular",
    position: "relative",
    bottom: 0,
    right: 30,
  },
  timeWeekText: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    color: "#fff",
    position: "absolute",
    bottom: 40,
    left: 15,
  },
  historyText: {
    fontFamily: "Roboto-Bold",
    fontSize: 28,
    color: "#444",
    position: "absolute",
    top: 510,
    left: 40,
  },
  historyContainer: {
    width: 345,
    height: 300,
    backgroundColor: "#333",
    borderRadius: 28,
    position: "absolute",
    top: 570,
  },
  cardContainer: {
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  noHistoryContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  noHistoryText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    marginTop: 30,
  },
  noHistoryImage: {
    width: 120,
    height: 150,

    transform: [{ scale: 0.8 }],
  },
  card: {
    width: "100%",
    height: 110,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 16,
  },
  cardImage: {
    width: 85,
    height: 85,
    borderRadius: 24,
    position: "relative",
    left: -10,
  },
  cardTextContainer: {
    width: "60%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  cardTextTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTextTopCircle: {
    width: 3,
    height: 3,
    backgroundColor: "white",
  },
  cardTextTopText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Roboto-Medium",
  },
  cardTextBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTextBottomContainer: {
    display: "flex",
    gap: 2,
  },
  cardTextBottomText: {
    fontSize: 13,
    color: "white",
    fontFamily: "Roboto-Medium",
  },

  // motivation container
  motivationContainer: {
    width: 350,
    height: 200,
    position: "absolute",
    top: 920,
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  motivationCard: {
    width: 325,
    height: 125,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#888",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    marginTop: 30,
    marginLeft: 12,
  },
  textMotivationQoutes: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 10,
  },
  textMotivationPerson: {
    fontSize: 14,
    color: "#333",
    fontFamily: "Roboto-Bold",
  },
  cardMotivationPerson: {
    height: 46,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    position: "absolute",
    top: -20,
    left: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    margin: 4,
    position: "relative",
    bottom: -30,
  },
  activeDot: {
    backgroundColor: "#888",
  },

  // card navigation container
  cardNavigationContainer: {
    width: 345,
    height: 576,
    borderRadius: 12,
    position: "absolute",
    top: 1200,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
  },
  cardNavigation: {
    width: "100%",
    borderRadius: 12,
    height: 180,
    backgroundColor: "#999",
    marginBottom: 40,
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  imageCardNavigation: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 6,
  },
  cardBlur: {
    width: "100%",
    height: 70,
    backgroundColor: "#333",
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    position: "absolute",
    bottom: 0,
    opacity: 0.6,
  },
  cardNavigationBottom: {
    width: "100%",
    height: 70,
    borderRadius: 6,
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  styleButton: {
    width: 35,
    height: 35,
    backgroundColor: "white",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 15,
  },
  imageButton: {
    width: 22,
    height: 13,
    transform: [{ scale: 0.9 }],
  },
  cardNavigationBottomLevel: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "white",
    position: "absolute",
    left: 20,
  },
  cardNavigationBottomCalorieTime: {
    height: "100%",
    width: 150,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginLeft: 55,
  },
  cardNavigationBottomCalorie: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  cardNavigationBottomTime: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
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
  cardNavigationBottomCalorieTimeText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
  },
  cardNavigationTextRegular: {
    fontSize: 16,
    color: "white",
    fontFamily: "Roboto-Regular",
  },
  cardNavigationTextMedium: {
    fontSize: 13,
    color: "white",
    fontFamily: "Roboto-Medium",
  },
});

import React, {
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Audio } from "expo-av";
import {
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";
import { hitungWaktu } from "../../hitungWaktu";

const CobraStretchDadaPemula = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [timer, setTimer] = useState(20);
  const [sound, setSound] = useState(null);
  const [reminderSound, setReminderSound] = useState(null);
  const { menitDurasiAkhir, detikDurasiAkhir } =
    route.params;
  const [menitDurasiAwal, setMenitDurasiAwal] = useState(
    menitDurasiAkhir
  );
  const [detikDurasiAwal, setDetikDurasiAwal] = useState(
    detikDurasiAkhir
  );

  const playSound = useCallback(async () => {
    try {
      if (timer === 20) {
        const { sound: move } =
          await Audio.Sound.createAsync(
            require("../../../../../assets/sounds/dada_pemula/cobra_stretch.mp3")
          );
        setSound(move);
        await move.playAsync();
        console.log("Suara diputar");
        setTimeout(async () => {
          await move.stopAsync();
          console.log("Suara dihentikan");
        }, 3000);
      }
    } catch (error) {
      console.log("Gagal memutar suara", error);
    }
  }, [timer]);

  const playReminder = useCallback(async () => {
    try {
      if (timer === 3) {
        const { sound: reminderSound } =
          await Audio.Sound.createAsync(
            require("../../../../../assets/sounds/pengingat_321.mp3")
          );
        setReminderSound(reminderSound);
        await reminderSound.playAsync();
        console.log("Suara pengingat diputar");
        setTimeout(async () => {
          await reminderSound.stopAsync();
          console.log("Suara pengingat dihentikan");
        }, 3000);
      }
    } catch (error) {
      console.log("Gagal memutar suara pengingat", error);
    }
  }, [timer]);

  // hitung waktu istirahat
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
      hitungWaktu(
        setDetikDurasiAwal,
        detikDurasiAwal,
        setMenitDurasiAwal,
        menitDurasiAwal
      );
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
      navigation.navigate("HasilDadaPemula", {
        menitDurasiAkhir: menitDurasiAwal,
        detikDurasiAkhir: detikDurasiAwal,
      });
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer, navigation]);

  useEffect(() => {
    if (isFocused) {
      setTimer(20);
      setSound(null);
      setReminderSound(null);
    } else {
      sound && sound.stopAsync();
      reminderSound && reminderSound.stopAsync();
    }
  }, [isFocused]);

  useEffect(() => {
    if (isFocused) {
      playSound();
      playReminder();
    }
  }, [isFocused, playSound, playReminder]);

  useEffect(() => {
    const cleanupSound = async () => {
      if (!isFocused) {
        sound && (await sound.stopAsync());
        reminderSound && (await reminderSound.stopAsync());
        console.log("Suara dihentikan");
        console.log("Suara pengingat dihentikan");
      }
    };

    cleanupSound();

    return () => {
      cleanupSound();
    };
  }, [isFocused, sound, reminderSound]);

  return (
    <View style={styles.container}>
      <View style={styles.containerGift}>
        <Image
          source={require("../../../../../assets/gif/dada_pemula/cobra_stretch.gif")}
          style={styles.gift}
        />
      </View>
      <Text style={styles.instructionText}>
        COBRA STRETCH
      </Text>
      <Text style={styles.timerText}>
        {timer < 10 ? `00:0${timer}` : `00:${timer}`}
      </Text>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.previousNextButton1}
        >
          <Image
            source={require("../../../../../assets/images/previousnext_button.png")}
            style={styles.buttonDoneImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HasilDadaPemula", {
              menitDurasiAkhir: menitDurasiAwal,
              detikDurasiAkhir: detikDurasiAwal,
            });
          }}
          style={styles.buttonDoneStyle}
        >
          <Image
            source={require("../../../../../assets/images/button_done.png")}
            style={styles.buttonDoneImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HasilDadaPemula", {
              menitDurasiAkhir: menitDurasiAwal,
              detikDurasiAkhir: detikDurasiAwal,
            });
          }}
          style={styles.previousNextButton2}
        >
          <Image
            source={require("../../../../../assets/images/previousnext_button.png")}
            style={styles.buttonDoneImageStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    gap: 50,
    position: "relative",
  },
  containerGift: {
    width: "100%",
    height: 352,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    top: -30,
    overflow: "hidden",
  },
  gift: {
    width: "100%",
    height: "100%",
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    fontFamily: "Roboto-Medium",
    color: "white",
    top: -50,
  },

  instructionText: {
    fontSize: 32,
    marginTop: 16,
    fontFamily: "Roboto-Medium",
    color: "white",
    top: -30,
  },
  buttonArea: {
    width: "80%",
    height: 110,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: -50,
    flexDirection: "row",
    gap: 35,
  },
  buttonDoneStyle: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: "#0152FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 1.2 }],
  },
  buttonDoneImageStyle: {
    width: 43.05,
    height: 29.74,
    transform: [{ scale: 0.9 }],
  },
  previousNextButton1: {
    width: 75,
    height: 75,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 1.3 }],
  },
  previousNextButton2: {
    width: 75,
    height: 75,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 1.3 }, { rotate: "180deg" }],
  },
});

export default CobraStretchDadaPemula;

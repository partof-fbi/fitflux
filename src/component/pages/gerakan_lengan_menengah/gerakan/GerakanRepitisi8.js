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

const GerakanRepitisi8 = ({
  textLatihan,
  repitisi,
  gambarKirim,
  navigateTo,
  navigateBefore,
  soundSource,
  route,
}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [sound, setSound] = useState(null);
  const { menitDurasiAkhir, detikDurasiAkhir } =
    route.params;
  const [menitDurasiAwal, setMenitDurasiAwal] = useState(
    menitDurasiAkhir
  );
  const [detikDurasiAwal, setDetikDurasiAwal] = useState(
    detikDurasiAkhir
  );

  useEffect(() => {
    let waktu;
    waktu = setInterval(() => {
      hitungWaktu(
        setDetikDurasiAwal,
        detikDurasiAwal,
        setMenitDurasiAwal,
        menitDurasiAwal
      );
    }, 1000);
    return () => clearInterval(waktu);
  });

  const playSound = useCallback(async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        soundSource
      );
      setSound(sound);
      await sound.playAsync();
      console.log("Suara diputar");
    } catch (error) {
      console.log("Gagal memutar suara", error);
    }
  }, []);

  useEffect(() => {
    playSound();

    return () => {
      sound && sound.stopAsync();
      console.log("Suara dihentikan");
    };
  }, [playSound]);

  useEffect(() => {
    if (!isFocused) {
      sound && sound.stopAsync();
      console.log("Suara dihentikan");
    }
  }, [isFocused, sound]);
  return (
    <View style={styles.container}>
      <View style={styles.containerGift}>
        <Image source={gambarKirim} style={styles.gift} />
      </View>
      <Text style={styles.instructionText}>
        {textLatihan}
      </Text>
      <Text style={styles.timerText}>{repitisi}</Text>

      <View style={styles.buttonArea}>
        {/* tombol kembali */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigateBefore, {
              menitDurasiAkhir: menitDurasiAwal,
              detikDurasiAkhir: detikDurasiAwal,
            })
          }
          style={styles.previousNextButton1}
        >
          <Image
            source={require("../../../../../assets/images/previousnext_button.png")}
            style={styles.buttonDoneImageStyle}
          />
        </TouchableOpacity>
        {/* tombol next */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigateTo, {
              menitDurasiAkhir: menitDurasiAwal,
              detikDurasiAkhir: detikDurasiAwal,
            })
          }
          style={styles.buttonDoneStyle}
        >
          <Image
            source={require("../../../../../assets/images/button_done.png")}
            style={styles.buttonDoneImageStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigateTo, {
              menitDurasiAkhir: menitDurasiAwal,
              detikDurasiAkhir: detikDurasiAwal,
            })
          }
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

export default GerakanRepitisi8;

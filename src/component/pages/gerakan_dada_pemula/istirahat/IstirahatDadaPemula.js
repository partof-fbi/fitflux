import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";
import { hitungWaktu } from "../../hitungWaktu";

const IstirahatDadaPemula = ({
  textLatihanSelanjutnya,
  gambarSource,
  navigateTo,
  route,
}) => {
  const [timer, setTimer] = useState(20);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { menitDurasiAkhir, detikDurasiAkhir } =
    route.params;
  const [menitDurasiAwal, setMenitDurasiAwal] = useState(
    menitDurasiAkhir
  );
  const [detikDurasiAwal, setDetikDurasiAwal] = useState(
    detikDurasiAkhir
  );

  useEffect(() => {
    const countdown = setInterval(() => {
      console.log(
        navigateTo,
        menitDurasiAwal,
        detikDurasiAwal
      );
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
      if (isFocused) {
        navigateToNextPage();
      }
    }

    return () => clearInterval(countdown);
  }, [timer, isFocused]);

  useEffect(() => {
    if (isFocused) {
      setTimer(20);
    }
  }, [isFocused]);

  const navigateToNextPage = () => {
    try {
      navigation.navigate(navigateTo, {
        menitDurasiAkhir: menitDurasiAwal,
        detikDurasiAkhir: detikDurasiAwal,
      });
    } catch (error) {
      console.log(
        "Error navigating to",
        navigateTo,
        ":",
        error
      );
    }
  };

  const handleSkip = () => {
    if (isFocused) {
      navigateToNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textButtonContainer}>
        <Text style={styles.preperText}>Istirahat</Text>
        <Text style={styles.timerText}>
          {timer < 10 ? `00:0${timer}` : `00:${timer}`}
        </Text>
        {/* tombol next */}
        <TouchableOpacity
          onPress={handleSkip}
          style={styles.buttonToNextPage}
        >
          <Text style={styles.TextButton}>lewatkan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nextContainer}>
        <View style={styles.textNextContainer}>
          <Text style={styles.nextText1}>Selanjutnya</Text>
          <Text style={styles.nextText2}>
            {textLatihanSelanjutnya}
          </Text>
        </View>
        <View style={styles.containerGift}>
          <Image
            source={gambarSource}
            style={styles.gift}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7787F4",
    position: "relative",
  },
  textButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    top: -150,
  },
  preperText: {
    fontSize: 36,
    color: "#fff",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  timerText: {
    fontSize: 64,
    color: "#fff",
    fontFamily: "Roboto-Bold",
  },
  buttonToNextPage: {
    width: 200,
    height: 80,
    backgroundColor: "#FC8877",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    marginTop: 25,
    transform: [{ scale: 0.9 }],
  },
  TextButton: {
    textAlign: "center",
    color: "#fff",
    lineHeight: 60,
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },
  nextContainer: {
    width: "100%",
    height: 360,
    position: "absolute",
    bottom: 0,
  },
  textNextContainer: {
    marginLeft: 23,
    gap: 10,
  },
  nextText1: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    color: "white",
  },
  nextText2: {
    fontSize: 24,
    fontFamily: "Roboto-Medium",
    color: "white",
  },
  containerGift: {
    overflow: "hidden",
    width: "100%",
    height: 270,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    bottom: -28,
  },
  gift: {
    width: "100%",
    height: "100%",
  },
});

export default IstirahatDadaPemula;

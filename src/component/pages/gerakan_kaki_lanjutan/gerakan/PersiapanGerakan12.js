import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { hitungWaktu } from "../../hitungWaktu";

const PersiapanGerakan12 = ({ route }) => {
  const [timer, setTimer] = useState(5);
  const navigation = useNavigation();
  const { menitDurasiAwal, detikDurasiAwal } = route.params;
  const [menitDurasiAkhir, setMenitDurasiAkhir] =
    useState(menitDurasiAwal);
  const [detikDurasiAkhir, setDetikDurasiAkhir] =
    useState(detikDurasiAwal);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
      hitungWaktu(
        setDetikDurasiAkhir,
        detikDurasiAkhir,
        setMenitDurasiAkhir,
        menitDurasiAkhir
      );
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
      navigation.navigate("BurpeesKakiLanjutan", {
        menitDurasiAkhir: menitDurasiAkhir,
        detikDurasiAkhir: detikDurasiAkhir,
      });
    }

    return () => clearInterval(countdown);
  }, [timer, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.preperText}>Siap beraksi</Text>
      <Text style={styles.timerText}>{timer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    backgroundColor: "#7787F4",
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
    fontFamily: "Roboto-Regular",
  },
});

export default PersiapanGerakan12;

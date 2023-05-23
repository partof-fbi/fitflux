import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const NavTopButton = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRoute = route.name;

  return (
    <View style={styles.navTop}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PemulaDashboard")
        }
        style={styles.navButton}
      >
        <Text
          style={[
            styles.navTopTextHere,
            currentRoute === "PemulaDashboard" &&
              styles.activeNavText,
          ]}
        >
          Pemula
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MenengahDashboard")
        }
        style={styles.navButton}
      >
        <Text
          style={[
            styles.navTopText,
            currentRoute === "MenengahDashboard" &&
              styles.activeNavText,
          ]}
        >
          Menengah
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("LanjutanDashboard")
        }
        style={styles.navButton}
      >
        <Text
          style={[
            styles.navTopText,
            currentRoute === "LanjutanDashboard" &&
              styles.activeNavText,
          ]}
        >
          Lanjutan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navTop: {
    width: "100%",
    height: 60,
    position: "absolute",
    top: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  navTopTextHere: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    color: "#222",
  },
  navTopText: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    color: "#222",
  },
  activeNavText: {
    color: "white",
  },
  navButton: {
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NavTopButton;

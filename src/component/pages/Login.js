import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  LayoutAnimation,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../../config";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResettingPassword, setIsResettingPassword] =
    useState(false);
  const [containerPosition, setContainerPosition] =
    useState(-500);

  const loginUser = async (email, password) => {
    if (email === "") {
      return alert("Masukkan email Anda");
    }

    if (password === "") {
      return alert("Masukkan password Anda");
    }

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      // Redirect to dashboard page on successful login
      navigation.navigate("Dashboard");
    } catch (error) {
      let errorMessage =
        "Terjadi kesalahan. Silakan coba lagi.";
      if (error.code === "auth/user-not-found") {
        errorMessage =
          "Pengguna dengan email ini tidak ditemukan.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Email tidak valid.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Password salah.";
      } // tambahkan else if untuk kode error lainnya
      alert(errorMessage);
    }
  };

  useEffect(() => {
    function handleKeyboardShow() {
      LayoutAnimation.configureNext(
        LayoutAnimation.Presets.easeInEaseOut
      );
      setContainerPosition(-400);
    }

    function handleKeyboardHide() {
      LayoutAnimation.configureNext(
        LayoutAnimation.Presets.easeInEaseOut
      );
      setContainerPosition(-500);
    }

    Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardShow
    );
    Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardHide
    );
    return () => {
      Keyboard.removeListener(
        "keyboardDidShow",
        handleKeyboardShow
      );
      Keyboard.removeListener(
        "keyboardDidHide",
        handleKeyboardHide
      );
    };
  }, []);
  const changePassword = () => {
    if (isResettingPassword || email === "") {
      return;
    }

    setIsResettingPassword(true);

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Email pengaturan ulang kata sandi dikirim");
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setIsResettingPassword(false);
      });
  };

  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        source={require("../../../assets/images/masuk.png")}
        style={styles.image}
      />

      <View
        style={[
          styles.containerLogin,
          { bottom: containerPosition },
        ]}
      >
        <Text style={styles.tittle}>Masuk</Text>
        <TextInput
          style={styles.textInput1}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput2}
          placeholder="Password"
          placeholderTextColor="#888"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Registration")
            }
            style={styles.styleButton2}
          >
            <Text style={styles.textButton2}>Daftar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => loginUser(email, password)}
            style={styles.styleButton1}
          >
            <Text style={styles.textButton1}>Mulai</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => changePassword()}>
          <Text style={styles.textForget}>
            Lupa Password ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#222",
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    left: -70,
    marginTop: 48,
    gap: 12,
  },
  textForget: {
    textAlign: "center",
    color: "#FF6363",
    fontSize: 16,
    margin: 20,
    fontFamily: "Roboto-Medium",
  },
  styleButton1: {
    width: 155,
    height: 70,
    backgroundColor: "#293241",
    borderRadius: 24,
    position: "relative",
    left: 60,
    transform: [{ scale: 0.9 }],
  },
  styleButton2: {
    width: 155,
    height: 70,
    borderWidth: 2,
    borderColor: "#888",
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderRadius: 24,
    position: "relative",
    left: 60,
    transform: [{ scale: 0.9 }],
  },
  textButton1: {
    textAlign: "center",
    color: "#fff",
    lineHeight: 70,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
  textButton2: {
    textAlign: "center",
    color: "#222",
    lineHeight: 70,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
  textInput1: {
    padding: 20,
    width: 305,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#888",
    marginTop: 45,
  },
  textInput2: {
    padding: 20,
    width: 305,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#888",
    marginTop: 48,
  },  
  containerLogin: {
    width: "100%",
    height: 1025,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 10,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    display: "flex",
    padding: 60,
  },
  image: {
    width: "110%",
    height: "75%",
    position: "absolute",
    top: -100,
    left: -30,
  },
  tittle: {
    fontFamily: "Roboto-Medium",
    fontSize: 28,
  },
});

export default Login;

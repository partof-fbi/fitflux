import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

import firebase from "../../../config";

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const registerUser = async (
    email,
    password,
    firstName,
    lastName
  ) => {
    if (!email || !password || !firstName || !lastName) {
      alert("Mohon lengkapi semua input sebelum mendaftar");
      return;
    }
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      await currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: "https://fitflux-b7e65.firebaseapp.com",
      });
      alert("Akun telah terdaftar silahkan login");
      await firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
          historyLatihan: [],
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/daftar.png")}
        style={styles.image}
      />

      <View style={styles.containerRegist}>
        <Text>
          <Text style={styles.tittle}>Daftar</Text>
        </Text>
        <TextInput
          style={styles.textInput1}
          placeholder="First Name"
          placeholderTextColor="#888"
          onChangeText={(firstName) =>
            setFirstName(firstName)
          }
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput2}
          placeholder="Last Name"
          placeholderTextColor="#888"
          onChangeText={(lastName) => setLastName(lastName)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput1}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(email) => setEmail(email)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput2}
          placeholder="Password"
          placeholderTextColor="#888"
          onChangeText={(password) => setPassword(password)}
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() =>
            registerUser(
              email,
              password,
              firstName,
              lastName
            )
          }
          style={styles.styleButton1}
        >
          <Text style={styles.textButton1}>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.styleButton2}
        >
          <Text style={styles.textButton2}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    fontFamily: "Roboto-Medium",
    fontSize: 28,
  },
  image: {
    width: 800,
    height: "70%",
    position: "absolute",
    bottom: -150,
    right: -250,
    transform: [{ scale: 0.7 }],
  },
  containerRegist: {
    width: "100%",
    height: 630,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    display: "flex",
    padding: 60,
    paddingTop: 70,
  },
  textInput1: {
    padding: 20,
    width: 305,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#888",
    marginTop: 35,
  },
  textInput2: {
    padding: 20,
    width: 305,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#888",
    marginTop: 26,
  },
  styleButton1: {
    width: 155,
    height: 70,
    backgroundColor: "#293241",
    borderRadius: 24,
    position: "relative",
    left: 150,
    top: 45,
    transform: [{ scale: 0.9 }],
  },
  styleButton2: {
    width: 155,
    height: 70,
    backgroundColor: "transparent",
    borderRadius: 24,
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
    fontSize: 16,
    color: "#444",
    fontFamily: "Roboto-Medium",
    marginLeft: 10,
    paddingHorizontal:10,
  },

});

export default Registration;

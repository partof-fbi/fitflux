import React from "react";
import { View } from "react-native";
import GerakanRepitisi from "./GerakanRepitisi";
const MountainClimberPemula = ({ route }) => {
  return (
      <GerakanRepitisi
        textLatihan="Mountain Climber"
        repitisi="x 16"
        gambarKirim={require("../../../../../assets/gif/perut_pemula/mountain_climber.gif")}
        navigateTo="IstirahatMountainClimber"
        navigateBefore="IstirahatJumpingJacks"
        soundSource={require("../../../../../assets/sounds/perut_pemula/mountain_climber.mp3")}
        route={route}
      />
  );
};
export default MountainClimberPemula;







// import React, {
//   useEffect,
//   useState,
//   useCallback,
// } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Audio } from "expo-av";
// import {
//   useNavigation,
//   useIsFocused,
// } from "@react-navigation/native";
// import { hitungWaktu } from "../../hitungWaktu";

// const MountainClimberPemula = ({ route }) => {
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const [sound, setSound] = useState(null);
//   const {
//     menitDurasiAkhir,
//     detikDurasiAkhir,
//   } = route.params;
//   const [
//     menitDurasiAwal,
//     setMenitDurasiAwal,
//   ] = useState(menitDurasiAkhir);
//   const [
//     detikDurasiAwal,
//     setDetikDurasiAwal,
//   ] = useState(detikDurasiAkhir);

//   const playSound = useCallback(async () => {
//     try {
//       const { sound } = await Audio.Sound.createAsync(
//         require("../../../../../assets/sounds/mountain_climber.mp3")
//       );
//       setSound(sound);
//       await sound.playAsync();
//       console.log("Suara diputar");
//     } catch (error) {
//       console.log("Gagal memutar suara", error);
//     }
//   }, []);

//   // hitung durasi mountain climb
//   useEffect(() => {
//     let waktu;
//     waktu = setInterval(() => {
//       hitungWaktu(
//         setDetikDurasiAwal,
//         detikDurasiAwal,
//         setMenitDurasiAwal,
//         menitDurasiAwal
//       );
//     }, 1000);
//     return () => clearInterval(waktu);
//   });

//   useEffect(() => {
//     playSound();

//     return () => {
//       sound && sound.stopAsync();
//       console.log("Suara dihentikan");
//     };
//   }, [playSound]);

//   useEffect(() => {
//     if (!isFocused) {
//       sound && sound.stopAsync();
//       console.log("Suara dihentikan");
//     }
//   }, [isFocused, sound]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.containerGift}>
//         <Image
//           source={require("../../../../../assets/gif/perut_pemula/mountain_climber.gif")}
//           style={styles.gift}
//         />
//       </View>
//       <Text style={styles.instructionText}>
//         MOUNTAIN CLIMBER
//       </Text>
//       <Text style={styles.timerText}>x 16</Text>

//       <View style={styles.buttonArea}>
//         {/* tombol back ke istirahat jumping */}
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate("IstirahatJumpingJacks", {
//               menitDurasiAkhir:
//                 menitDurasiAwal,
//               detikDurasiAkhir:
//                 detikDurasiAwal,
//             })
//           }
//           style={styles.previousNextButton1}
//         >
//           <Image
//             source={require("../../../../../assets/images/previousnext_button.png")}
//             style={styles.buttonDoneImageStyle}
//           />
//         </TouchableOpacity>

//         {/* tombol ke istirahat */}
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate(
//               "IstirahatMountainClimber",
//               {
//                 menitDurasiAkhir:
//                   menitDurasiAwal,
//                 detikDurasiAkhir:
//                   detikDurasiAwal,
//               }
//             )
//           }
//           style={styles.buttonDoneStyle}
//         >
//           <Image
//             source={require("../../../../../assets/images/button_done.png")}
//             style={styles.buttonDoneImageStyle}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() =>
//             navigation.navigate(
//               "IstirahatMountainClimber",
//               {
//                menitDurasiAkhir: menitDurasiAwal,
//                detikDurasiAkhir: detikDurasiAwal
//               }
//             )
//           }
//           style={styles.previousNextButton2}
//         >
//           <Image
//             source={require("../../../../../assets/images/previousnext_button.png")}
//             style={styles.buttonDoneImageStyle}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#222",
//     gap: 50,
//     position: "relative",
//   },
//   containerGift: {
//     width: "100%",
//     height: 352,
//     borderTopLeftRadius: 36,
//     borderTopRightRadius: 36,
//     top: -30,
//     overflow: "hidden",
//   },
//   gift: {
//     width: "100%",
//     height: "100%",
//   },
//   timerText: {
//     fontSize: 48,
//     fontWeight: "bold",
//     fontFamily: "Roboto-Medium",
//     color: "white",
//     top: -50,
//   },

//   instructionText: {
//     fontSize: 32,
//     marginTop: 16,
//     fontFamily: "Roboto-Medium",
//     color: "white",
//     top: -30,
//   },
//   buttonArea: {
//     width: "80%",
//     height: 110,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     top: -50,
//     flexDirection: "row",
//     gap: 35,
//   },
//   buttonDoneStyle: {
//     width: 75,
//     height: 75,
//     borderRadius: 100,
//     backgroundColor: "#0152FF",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     transform: [{ scale: 1.2 }],
//   },
//   buttonDoneImageStyle: {
//     width: 43.05,
//     height: 29.74,
//     transform: [{ scale: 0.9 }],
//   },
//   previousNextButton1: {
//     width: 75,
//     height: 75,
//     borderRadius: 100,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     transform: [{ scale: 1.3 }],
//   },
//   previousNextButton2: {
//     width: 75,
//     height: 75,
//     borderRadius: 100,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     transform: [{ scale: 1.3 }, { rotate: "180deg" }],
//   },
// });

// export default MountainClimberPemula;



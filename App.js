import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import React, { useState, useEffect } from "react";
import firebase from "./config";
import SplashScreen from "./src/component/pages/SplashScreen";
import Opening from "./src/component/pages/Opening";
import Login from "./src/component/pages/Login";
import Registration from "./src/component/pages/Registration";
import Dashboard from "./src/component/pages/Dashboard";
import PemulaDashboard from "./src/component/pages/PemulaDashboard";
import MenengahDashboard from "./src/component/pages/MenengahDashboard";
import LanjutanDashboard from "./src/component/pages/LanjutanDashboard";
// perut pemula
import PerutPemula from "./src/component/pages/gerakan_perut_pemula/PerutPemula";
import PersiapanGerakan from "./src/component/pages/gerakan_perut_pemula/gerakan/PersiapanGerakan";
import JumpingJacksPemula from "./src/component/pages/gerakan_perut_pemula/gerakan/JumpingJacksPemula";
import IstirahatJumpingJacks from "./src/component/pages/gerakan_perut_pemula/istirahat/IstirahatJumpingJacks";
import MountainClimberPemula from "./src/component/pages/gerakan_perut_pemula/gerakan/MountainClimberPemula";
import IstirahatMountainClimber from "./src/component/pages/gerakan_perut_pemula/istirahat/IstirahatMountainClimber";
import LegRaisesPemula from "./src/component/pages/gerakan_perut_pemula/gerakan/LegRaisesPemula";
import IstirahatLegRaises from "./src/component/pages/gerakan_perut_pemula/istirahat/IstirahatLegRaises";
import HeelTouchPemula from "./src/component/pages/gerakan_perut_pemula/gerakan/HeelTouchPemula";
import IstirahatHeelTouch from "./src/component/pages/gerakan_perut_pemula/istirahat/IstirahatHeelTouch";
import CobraStretchPemula from "./src/component/pages/gerakan_perut_pemula/gerakan/CobraStretchPemula";
import HasilPerutPemula from "./src/component/pages/gerakan_perut_pemula/HasilPerutPemula";

// perut menengah
import PerutMenengah from "./src/component/pages/gerakan_perut_menengah/PerutMenengah";
import PersiapanGerakan2 from "./src/component/pages/gerakan_perut_menengah/gerakan/PersiapanGerakan2";
import JumpingJacksMenengah from "./src/component/pages/gerakan_perut_menengah/gerakan/JumpingJacksMenengah";
import IstirahatJumpingJacksMenengah from "./src/component/pages/gerakan_perut_menengah/istirahat/IstirahatJumpingJacksMenengah";
import SitUpMenengah from "./src/component/pages/gerakan_perut_menengah/gerakan/SitUpMenengah";
import IstirahatSitUpMenengah from "./src/component/pages/gerakan_perut_menengah/istirahat/IstirahatSitUpMenengah";
import HeelTouchMenengah from "./src/component/pages/gerakan_perut_menengah/gerakan/HeelTouchMenengah";
import IstirahatHeelTouchMenengah from "./src/component/pages/gerakan_perut_menengah/istirahat/IstirahatHeelTouchMenengah";
import MountainClimberMenengah from "./src/component/pages/gerakan_perut_menengah/gerakan/MountainClimberMenengah";
import IstirahatMountainClimberMenengah from "./src/component/pages/gerakan_perut_menengah/istirahat/IstirahatMountainClimberMenengah";
import CobraStretchMenengah from "./src/component/pages/gerakan_perut_menengah/gerakan/CobraStretchMenengah";
import HasilPerutMenengah from "./src/component/pages/gerakan_perut_menengah/HasilPerutMenengah";

// perut lanjutan
import PerutLanjutan from "./src/component/pages/gerakan_perut_lanjutan/PerutLanjutan";
import PersiapanGerakan3 from "./src/component/pages/gerakan_perut_lanjutan/gerakan/PersiapanGerakan3";
import JumpingJacksLanjutan from "./src/component/pages/gerakan_perut_lanjutan/gerakan/JumpingJacksLanjutan";
import IstirahatJumpingJacksLanjutan from "./src/component/pages/gerakan_perut_lanjutan/istirahat/IstirahatJumpingJacksLanjutan";
import SitUpLanjutan from "./src/component/pages/gerakan_perut_lanjutan/gerakan/SitUpLanjutan";
import IstirahatSitUpLanjutan from "./src/component/pages/gerakan_perut_lanjutan/istirahat/IstirahatSitUpLanjutan";
import BiscyleCrunchesLanjutan from "./src/component/pages/gerakan_perut_lanjutan/gerakan/BiscyleCrunchesLanjutan";
import IstirahatBiscyleCrunchesLanjutan from "./src/component/pages/gerakan_perut_lanjutan/istirahat/IstirahatBiscyleCrunchesLanjutan";
import VUpLanjutan from "./src/component/pages/gerakan_perut_lanjutan/gerakan/VUpLanjutan";
import IstirahatVUpLanjutan from "./src/component/pages/gerakan_perut_lanjutan/istirahat/IstirahatVUpLanjutan";
import CobraStretchLanjutan from "./src/component/pages/gerakan_perut_lanjutan/gerakan/CobraStretchLanjutan";
import HasilPerutLanjutan from "./src/component/pages/gerakan_perut_lanjutan/HasilPerutLanjutan";

// dada_pemula
import DadaPemula from "./src/component/pages/gerakan_dada_pemula/DadaPemula";
import PersiapanGerakan4 from "./src/component/pages/gerakan_dada_pemula/gerakan/PersiapanGerakan4";
import JumpingJacksDadaPemula from "./src/component/pages/gerakan_dada_pemula/gerakan/JumpingJacksDadaPemula";
import IstirahatJumpingJacksDadaPemula from "./src/component/pages/gerakan_dada_pemula/istirahat/IstirahatJumpingJacksDadaPemula";
import InclinePushUpDadaPemula from "./src/component/pages/gerakan_dada_pemula/gerakan/InclinePushUpDadaPemula";
import IstirahatInclinePushUpDadaPemula from "./src/component/pages/gerakan_dada_pemula/istirahat/IstirahatInclinePushUpDadaPemula";
import PushUpDadaPemula from "./src/component/pages/gerakan_dada_pemula/gerakan/PushUpDadaPemula";
import IstirahatPushUpDadaPemula from "./src/component/pages/gerakan_dada_pemula/istirahat/IstirahatPushUpDadaPemula";
import TricepsDipsDadaPemula from "./src/component/pages/gerakan_dada_pemula/gerakan/TricepsDipsDadaPemula";
import IstirahatTricepsDipsDadaPemula from "./src/component/pages/gerakan_dada_pemula/istirahat/IstirahatTricepsDipsDadaPemula";
import CobraStretchDadaPemula from "./src/component/pages/gerakan_dada_pemula/gerakan/CobraStretchDadaPemula";
import HasilDadaPemula from "./src/component/pages/gerakan_dada_pemula/HasilDadaPemula";

// dada_menengah
import DadaMenengah from "./src/component/pages/gerakan_dada_menengah/DadaMenengah";
import PersiapanGerakan5 from "./src/component/pages/gerakan_dada_menengah/gerakan/PersiapanGerakan5";
import JumpingJacksDadaMenengah from "./src/component/pages/gerakan_dada_menengah/gerakan/JumpingJacksDadaMenengah";
import IstirahatJumpingJacksDadaMenengah from "./src/component/pages/gerakan_dada_menengah/istirahat/IstirahatJumpingJacksDadaMenengah";
import KneePushUpDadaMenengah from "./src/component/pages/gerakan_dada_menengah/gerakan/KneePushUpDadaMenengah";
import IstirahatKneePushUpDadaMenengah from "./src/component/pages/gerakan_dada_menengah/istirahat/IstirahatKneePushUpDadaMenengah";
import PushUpDadaMenengah from "./src/component/pages/gerakan_dada_menengah/gerakan/PushUpDadaMenengah";
import IstirahatPushUpDadaMenengah from "./src/component/pages/gerakan_dada_menengah/istirahat/IstirahatPushUpDadaMenengah";
import DeclinePushUpDadaMenengah from "./src/component/pages/gerakan_dada_menengah/gerakan/DeclinePushUpDadaMenengah";
import IstirahatDeclinePushUpDadaMenengah from "./src/component/pages/gerakan_dada_menengah/istirahat/IstirahatDeclinePushUpDadaMenengah";
import CobraStretchDadaMenengah from "./src/component/pages/gerakan_dada_menengah/gerakan/CobraStretchDadaMenengah";
import HasilDadaMenengah from "./src/component/pages/gerakan_dada_menengah/HasilDadaMenengah";

// dada_lanjutan
import DadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/DadaLanjutan";
import PersiapanGerakan6 from "./src/component/pages/gerakan_dada_lanjutan/gerakan/PersiapanGerakan6";
import JumpingJacksDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/gerakan/JumpingJacksDadaLanjutan";
import IstirahatJumpingJacksDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/istirahat/IstirahatJumpingJacksDadaLanjutan";
import ArmCirclesDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/gerakan/ArmCirclesDadaLanjutan";
import IstirahatArmCirclesDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/istirahat/IstirahatArmCirclesDadaLanjutan";
import BurpeesDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/gerakan/BurpeesDadaLanjutan";
import IstirahatBurpeesDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/istirahat/IstirahatBurpeesDadaLanjutan";
import DiamondPushUpDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/gerakan/DiamondPushUpDadaLanjutan";
import IstirahatDiamondPushUpDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/istirahat/IstirahatDiamondPushUpDadaLanjutan";
import ChestStretchDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/gerakan/ChestStretchDadaLanjutan";
import HasilDadaLanjutan from "./src/component/pages/gerakan_dada_lanjutan/HasilDadaLanjutan";

// lengan pemula
import LenganPemula from "./src/component/pages/gerakan_lengan_pemula/LenganPemula";
import PersiapanGerakan7 from "./src/component/pages/gerakan_lengan_pemula/gerakan/PersiapanGerakan7";
import ArmCirclesLenganPemula from "./src/component/pages/gerakan_lengan_pemula/gerakan/ArmCirclesLenganPemula";
import IstirahatArmCirclesLenganPemula from "./src/component/pages/gerakan_lengan_pemula/istirahat/IstirahatArmCirclesLenganPemula";
import LegBarbellCurlLeftLenganPemula from "./src/component/pages/gerakan_lengan_pemula/gerakan/LegBarbellCurlLeftLenganPemula";
import IstirahatLegBarbellCurlLeftLenganPemula from "./src/component/pages/gerakan_lengan_pemula/istirahat/IstirahatLegBarbellCurlLeftLenganPemula";
import LegBarbellCurlRightLenganPemula from "./src/component/pages/gerakan_lengan_pemula/gerakan/LegBarbellCurlRightLenganPemula";
import IstirahatLegBarbellCurlRightLenganPemula from "./src/component/pages/gerakan_lengan_pemula/istirahat/IstirahatLegBarbellCurlRightLenganPemula";
import FloorTricepDipsLenganPemula from "./src/component/pages/gerakan_lengan_pemula/gerakan/FloorTricepDipsLenganPemula";
import IstirahatFloorTricepDipsLenganPemula from "./src/component/pages/gerakan_lengan_pemula/istirahat/IstirahatFloorTricepDipsLenganPemula";
import ChestStretchLenganPemula from "./src/component/pages/gerakan_lengan_pemula/gerakan/ChestStretchLenganPemula";
import HasilLenganPemula from "./src/component/pages/gerakan_lengan_pemula/HasilLenganPemula";

// lengan menengah
import LenganMenengah from "./src/component/pages/gerakan_lengan_menengah/LenganMenengah";
import PersiapanGerakan8 from "./src/component/pages/gerakan_lengan_menengah/gerakan/PersiapanGerakan8";
import ArmRaisesLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/gerakan/ArmRaisesLenganMenengah";
import IstirahatArmRaisesLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/istirahat/IstirahatArmRaisesLenganMenengah";
import TricepsDipsLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/gerakan/TricepsDipsLenganMenengah";
import IstirahatTricepsDipsLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/istirahat/IstirahatTricepsDipsLenganMenengah";
import DiamondPushUpLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/gerakan/DiamondPushUpLenganMenengah";
import IstirahatDiamondPushUpLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/istirahat/IstirahatDiamondPushUpLenganMenengah";
import DiagonalPlankLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/gerakan/DiagonalPlankLenganMenengah";
import IstirahatDiagonalPlankLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/istirahat/IstirahatDiagonalPlankLenganMenengah";
import WallPushUpLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/gerakan/WallPushUpLenganMenengah";
import HasilLenganMenengah from "./src/component/pages/gerakan_lengan_menengah/HasilLenganMenengah";

// lengan lanjutan
import LenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/LenganLanjutan";
import PersiapanGerakan9 from "./src/component/pages/gerakan_lengan_lanjutan/gerakan/PersiapanGerakan9";
import ArmCirclesLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/gerakan/ArmCirclesLenganLanjutan";
import IstirahatArmCirclesLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/istirahat/IstirahatArmCirclesLenganLanjutan";
import LegBarbellCurlLeftLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/gerakan/LegBarbellCurlLeftLenganLanjutan";
import IstirahatLegBarbellCurlLeftLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/istirahat/IstirahatLegBarbellCurlLeftLenganLanjutan";
import LegBarbellCurlRightLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/gerakan/LegBarbellCurlRightLenganLanjutan";
import IstirahatLegBarbellCurlRightLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/istirahat/IstirahatLegBarbellCurlRightLenganLanjutan";
import FloorTricepDipsLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/gerakan/FloorTricepDipsLenganLanjutan";
import IstirahatFloorTricepDipsLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/istirahat/IstirahatFloorTricepDipsLenganLanjutan";
import ChestStretchLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/gerakan/ChestStretchLenganLanjutan";
import HasilLenganLanjutan from "./src/component/pages/gerakan_lengan_lanjutan/HasilLenganLanjutan";

// kaki pemula
import KakiPemula from "./src/component/pages/gerakan_kaki_pemula/KakiPemula";
import PersiapanGerakan10 from "./src/component/pages/gerakan_kaki_pemula/gerakan/PersiapanGerakan10";
import SquatsKakiPemula from "./src/component/pages/gerakan_kaki_pemula/gerakan/SquatsKakiPemula";
import IstirahatSquatsKakiPemula from "./src/component/pages/gerakan_kaki_pemula/istirahat/IstirahatSquatsKakiPemula";
import BackwardLungeKakiPemula from "./src/component/pages/gerakan_kaki_pemula/gerakan/BackwardLungeKakiPemula";
import IstirahatBackwardLungeKakiPemula from "./src/component/pages/gerakan_kaki_pemula/istirahat/IstirahatBackwardLungeKakiPemula";
import DonkeyKicksLeftKakiPemula from "./src/component/pages/gerakan_kaki_pemula/gerakan/DonkeyKicksLeftKakiPemula";
import IstirahatDonkeyKicksLeftKakiPemula from "./src/component/pages/gerakan_kaki_pemula/istirahat/IstirahatDonkeyKicksLeftKakiPemula";
import DonkeyKicksRightKakiPemula from "./src/component/pages/gerakan_kaki_pemula/gerakan/DonkeyKicksRightKakiPemula";
import IstirahatDonkeyKicksRightKakiPemula from "./src/component/pages/gerakan_kaki_pemula/istirahat/IstirahatDonkeyKicksRightKakiPemula";
import CalfStretchKakiPemula from "./src/component/pages/gerakan_kaki_pemula/gerakan/CalfStretchKakiPemula";
import HasilKakiPemula from "./src/component/pages/gerakan_kaki_pemula/HasilKakiPemula";

// kaki menengah
import KakiMenengah from "./src/component/pages/gerakan_kaki_menengah/KakiMenengah";
import PersiapanGerakan11 from "./src/component/pages/gerakan_kaki_menengah/gerakan/PersiapanGerakan11";
import JumpingJacksKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/gerakan/JumpingJacksKakiMenengah";
import IstirahatJumpingJacksKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/istirahat/IstirahatJumpingJacksKakiMenengah";
import SquatsKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/gerakan/SquatsKakiMenengah";
import IstirahatSquatsKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/istirahat/IstirahatSquatsKakiMenengah";
import LungesKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/gerakan/LungesKakiMenengah";
import IstirahatLungesKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/istirahat/IstirahatLungesKakiMenengah";
import SumoSquatKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/gerakan/SumoSquatKakiMenengah";
import IstirahatSumoSquatKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/istirahat/IstirahatSumoSquatKakiMenengah";
import CalfStretchKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/gerakan/CalfStretchKakiMenengah";
import HasilKakiMenengah from "./src/component/pages/gerakan_kaki_menengah/HasilKakiMenengah";

// kaki lanjutan
import KakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/KakiLanjutan";
import PersiapanGerakan12 from "./src/component/pages/gerakan_kaki_lanjutan/gerakan/PersiapanGerakan12";
import BurpeesKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/gerakan/BurpeesKakiLanjutan";
import IstirahatBurpeesKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/istirahat/IstirahatBurpeesKakiLanjutan";
import SquatsKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/gerakan/SquatsKakiLanjutan";
import IstirahatSquatsKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/istirahat/IstirahatSquatsKakiLanjutan";
import CurstyLungesKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/gerakan/CurstyLungesKakiLanjutan";
import IstirahatCurstyLungesKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/istirahat/IstirahatCurstyLungesKakiLanjutan";
import JumpingSquatsKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/gerakan/JumpingSquatsKakiLanjutan";
import IstirahatJumpingSquatsKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/istirahat/IstirahatJumpingSquatsKakiLanjutan";
import CalfStretchKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/gerakan/CalfStretchKakiLanjutan";
import HasilKakiLanjutan from "./src/component/pages/gerakan_kaki_lanjutan/HasilKakiLanjutan";

const Stack = createStackNavigator();
const NestedStack = createStackNavigator();

const App = () => {
  const [fontLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "My-Font": require("./assets/fonts/My-Font.ttf"),
  });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // handle user state changes
  function onAuthStateChange(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase
      .auth()
      .onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!fontLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="Opening"
          component={Opening}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Registration"
          component={Registration}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          name="PemulaDashboard"
          component={PemulaDashboard}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="MenengahDashboard"
          component={MenengahDashboard}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="LanjutanDashboard"
          component={LanjutanDashboard}
          options={{
            animationEnabled: false,
          }}
        />

        {/* perut pemula */}
        <Stack.Screen
          name="NestedScreens"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="PerutPemula"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="PerutPemula"
                component={PerutPemula}
              />
              <NestedStack.Screen
                name="PersiapanGerakan"
                component={PersiapanGerakan}
              />
              <NestedStack.Screen
                name="JumpingJacksPemula"
                component={JumpingJacksPemula}
                options={{
                  animationEnabled: false,
                }}
              />
              <NestedStack.Screen
                name="IstirahatJumpingJacks"
                component={IstirahatJumpingJacks}
              />
              <NestedStack.Screen
                name="MountainClimberPemula"
                component={MountainClimberPemula}
              />
              <NestedStack.Screen
                name="IstirahatMountainClimber"
                component={IstirahatMountainClimber}
              />
              <NestedStack.Screen
                name="LegRaisesPemula"
                component={LegRaisesPemula}
                options={{
                  animationEnabled: false,
                }}
              />
              <NestedStack.Screen
                name="IstirahatLegRaises"
                component={IstirahatLegRaises}
              />
              <NestedStack.Screen
                name="HeelTouchPemula"
                component={HeelTouchPemula}
                options={{
                  animationEnabled: false,
                }}
              />
              <NestedStack.Screen
                name="IstirahatHeelTouch"
                component={IstirahatHeelTouch}
              />
              <NestedStack.Screen
                name="CobraStretchPemula"
                component={CobraStretchPemula}
              />
              <NestedStack.Screen
                name="HasilPerutPemula"
                component={HasilPerutPemula}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* perut menengah */}
        <Stack.Screen
          name="NestedScreens2"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="PerutMenengah"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="PerutMenengah"
                component={PerutMenengah}
              />
              <NestedStack.Screen
                name="PersiapanGerakan2"
                component={PersiapanGerakan2}
              />
              <NestedStack.Screen
                name="JumpingJacksMenengah"
                component={JumpingJacksMenengah}
              />
              <NestedStack.Screen
                name="IstirahatJumpingJacksMenengah"
                component={IstirahatJumpingJacksMenengah}
              />
              <NestedStack.Screen
                name="SitUpMenengah"
                component={SitUpMenengah}
              />
              <NestedStack.Screen
                name="IstirahatSitUpMenengah"
                component={IstirahatSitUpMenengah}
              />
              <NestedStack.Screen
                name="HeelTouchMenengah"
                component={HeelTouchMenengah}
              />
              <NestedStack.Screen
                name="IstirahatHeelTouchMenengah"
                component={IstirahatHeelTouchMenengah}
              />
              <NestedStack.Screen
                name="MountainClimberMenengah"
                component={MountainClimberMenengah}
              />
              <NestedStack.Screen
                name="IstirahatMountainClimberMenengah"
                component={IstirahatMountainClimberMenengah}
              />
              <NestedStack.Screen
                name="CobraStretchMenengah"
                component={CobraStretchMenengah}
              />
              <NestedStack.Screen
                name="HasilPerutMenengah"
                component={HasilPerutMenengah}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* perut lanjutan */}
        <Stack.Screen
          name="NestedScreens3"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="PerutLanjutan"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="PerutLanjutan"
                component={PerutLanjutan}
              />
              <NestedStack.Screen
                name="PersiapanGerakan3"
                component={PersiapanGerakan3}
              />
              <NestedStack.Screen
                name="JumpingJacksLanjutan"
                component={JumpingJacksLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatJumpingJacksLanjutan"
                component={IstirahatJumpingJacksLanjutan}
              />
              <NestedStack.Screen
                name="SitUpLanjutan"
                component={SitUpLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatSitUpLanjutan"
                component={IstirahatSitUpLanjutan}
              />
              <NestedStack.Screen
                name="BiscyleCrunchesLanjutan"
                component={BiscyleCrunchesLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatBiscyleCrunchesLanjutan"
                component={IstirahatBiscyleCrunchesLanjutan}
              />
              <NestedStack.Screen
                name="VUpLanjutan"
                component={VUpLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatVUpLanjutan"
                component={IstirahatVUpLanjutan}
              />
              <NestedStack.Screen
                name="CobraStretchLanjutan"
                component={CobraStretchLanjutan}
              />
              <NestedStack.Screen
                name="HasilPerutLanjutan"
                component={HasilPerutLanjutan}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* dada pemula */}

        <Stack.Screen
          name="NestedScreens4"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="DadaPemula"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="DadaPemula"
                component={DadaPemula}
              />
              <NestedStack.Screen
                name="PersiapanGerakan4"
                component={PersiapanGerakan4}
              />
              <NestedStack.Screen
                name="JumpingJacksDadaPemula"
                component={JumpingJacksDadaPemula}
              />
              <NestedStack.Screen
                name="IstirahatJumpingJacksDadaPemula"
                component={IstirahatJumpingJacksDadaPemula}
              />
              <NestedStack.Screen
                name="InclinePushUpDadaPemula"
                component={InclinePushUpDadaPemula}
              />
              <NestedStack.Screen
                name="IstirahatInclinePushUpDadaPemula"
                component={IstirahatInclinePushUpDadaPemula}
              />
              <NestedStack.Screen
                name="PushUpDadaPemula"
                component={PushUpDadaPemula}
              />
              <NestedStack.Screen
                name="IstirahatPushUpDadaPemula"
                component={IstirahatPushUpDadaPemula}
              />
              <NestedStack.Screen
                name="TricepsDipsDadaPemula"
                component={TricepsDipsDadaPemula}
              />
              <NestedStack.Screen
                name="IstirahatTricepsDipsDadaPemula"
                component={IstirahatTricepsDipsDadaPemula}
              />
              <NestedStack.Screen
                name="CobraStretchDadaPemula"
                component={CobraStretchDadaPemula}
              />
              <NestedStack.Screen
                name="HasilDadaPemula"
                component={HasilDadaPemula}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* dada menengah */}

        <Stack.Screen
          name="NestedScreens5"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="DadaMenengah"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="DadaMenengah"
                component={DadaMenengah}
              />
              <NestedStack.Screen
                name="PersiapanGerakan5"
                component={PersiapanGerakan5}
              />
              <NestedStack.Screen
                name="JumpingJacksDadaMenengah"
                component={JumpingJacksDadaMenengah}
              />
              <NestedStack.Screen
                name="IstirahatJumpingJacksDadaMenengah"
                component={
                  IstirahatJumpingJacksDadaMenengah
                }
              />
              <NestedStack.Screen
                name="KneePushUpDadaMenengah"
                component={KneePushUpDadaMenengah}
              />
              <NestedStack.Screen
                name="IstirahatKneePushUpDadaMenengah"
                component={IstirahatKneePushUpDadaMenengah}
              />
              <NestedStack.Screen
                name="PushUpDadaMenengah"
                component={PushUpDadaMenengah}
              />
              <NestedStack.Screen
                name="IstirahatPushUpDadaMenengah"
                component={IstirahatPushUpDadaMenengah}
              />
              <NestedStack.Screen
                name="DeclinePushUpDadaMenengah"
                component={DeclinePushUpDadaMenengah}
              />
              <NestedStack.Screen
                name="IstirahatDeclinePushUpDadaMenengah"
                component={
                  IstirahatDeclinePushUpDadaMenengah
                }
              />
              <NestedStack.Screen
                name="CobraStretchDadaMenengah"
                component={CobraStretchDadaMenengah}
              />
              <NestedStack.Screen
                name="HasilDadaMenengah"
                component={HasilDadaMenengah}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* dada lanjutan */}
        <Stack.Screen
          name="NestedScreens6"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="DadaLanjutan"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="DadaLanjutan"
                component={DadaLanjutan}
              />
              <NestedStack.Screen
                name="PersiapanGerakan6"
                component={PersiapanGerakan6}
              />
              <NestedStack.Screen
                name="JumpingJacksDadaLanjutan"
                component={JumpingJacksDadaLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatJumpingJacksDadaLanjutan"
                component={
                  IstirahatJumpingJacksDadaLanjutan
                }
              />
              <NestedStack.Screen
                name="ArmCirclesDadaLanjutan"
                component={ArmCirclesDadaLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatArmCirclesDadaLanjutan"
                component={IstirahatArmCirclesDadaLanjutan}
              />
              <NestedStack.Screen
                name="BurpeesDadaLanjutan"
                component={BurpeesDadaLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatBurpeesDadaLanjutan"
                component={IstirahatBurpeesDadaLanjutan}
              />
              <NestedStack.Screen
                name="DiamondPushUpDadaLanjutan"
                component={DiamondPushUpDadaLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatDiamondPushUpDadaLanjutan"
                component={
                  IstirahatDiamondPushUpDadaLanjutan
                }
              />
              <NestedStack.Screen
                name="ChestStretchDadaLanjutan"
                component={ChestStretchDadaLanjutan}
              />
              <NestedStack.Screen
                name="HasilDadaLanjutan"
                component={HasilDadaLanjutan}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* lengan pemula */}
        <Stack.Screen
          name="NestedScreens7"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="LenganPemula"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="LenganPemula"
                component={LenganPemula}
              />
              <NestedStack.Screen
                name="PersiapanGerakan7"
                component={PersiapanGerakan7}
              />
              <NestedStack.Screen
                name="ArmCirclesLenganPemula"
                component={ArmCirclesLenganPemula}
              />
              <NestedStack.Screen
                name="IstirahatArmCirclesLenganPemula"
                component={IstirahatArmCirclesLenganPemula}
              />
              <NestedStack.Screen
                name="LegBarbellCurlLeftLenganPemula"
                component={LegBarbellCurlLeftLenganPemula}
              />
              <NestedStack.Screen
                name="IstirahatLegBarbellCurlLeftLenganPemula"
                component={
                  IstirahatLegBarbellCurlLeftLenganPemula
                }
              />
              <NestedStack.Screen
                name="LegBarbellCurlRightLenganPemula"
                component={LegBarbellCurlRightLenganPemula}
              />
              <NestedStack.Screen
                name="IstirahatLegBarbellCurlRightLenganPemula"
                component={
                  IstirahatLegBarbellCurlRightLenganPemula
                }
              />
              <NestedStack.Screen
                name="FloorTricepDipsLenganPemula"
                component={FloorTricepDipsLenganPemula}
              />
              <NestedStack.Screen
                name="IstirahatFloorTricepDipsLenganPemula"
                component={
                  IstirahatFloorTricepDipsLenganPemula
                }
              />
              <NestedStack.Screen
                name="ChestStretchLenganPemula"
                component={ChestStretchLenganPemula}
              />
              <NestedStack.Screen
                name="HasilLenganPemula"
                component={HasilLenganPemula}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* lengan menengah */}
        <Stack.Screen
          name="NestedScreens8"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="LenganMenengah"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="LenganMenengah"
                component={LenganMenengah}
              />
              <NestedStack.Screen
                name="PersiapanGerakan8"
                component={PersiapanGerakan8}
              />
              <NestedStack.Screen
                name="ArmRaisesLenganMenengah"
                component={ArmRaisesLenganMenengah}
              />
              <NestedStack.Screen
                name="IstirahatArmRaisesLenganMenengah"
                component={IstirahatArmRaisesLenganMenengah}
              />
              <NestedStack.Screen
                name="TricepsDipsLenganMenengah"
                component={TricepsDipsLenganMenengah}
              />
              <NestedStack.Screen
                name="IstirahatTricepsDipsLenganMenengah"
                component={
                  IstirahatTricepsDipsLenganMenengah
                }
              />
              <NestedStack.Screen
                name="DiamondPushUpLenganMenengah"
                component={DiamondPushUpLenganMenengah}
              />
              <NestedStack.Screen
                name="IstirahatDiamondPushUpLenganMenengah"
                component={
                  IstirahatDiamondPushUpLenganMenengah
                }
              />
              <NestedStack.Screen
                name="DiagonalPlankLenganMenengah"
                component={DiagonalPlankLenganMenengah}
              />
              <NestedStack.Screen
                name="IstirahatDiagonalPlankLenganMenengah"
                component={
                  IstirahatDiagonalPlankLenganMenengah
                }
              />
              <NestedStack.Screen
                name="WallPushUpLenganMenengah"
                component={WallPushUpLenganMenengah}
              />
              <NestedStack.Screen
                name="HasilLenganMenengah"
                component={HasilLenganMenengah}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* lengan lanjutan */}
        <Stack.Screen
          name="NestedScreens9"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="LenganLanjutan"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="LenganLanjutan"
                component={LenganLanjutan}
              />
              <NestedStack.Screen
                name="PersiapanGerakan9"
                component={PersiapanGerakan9}
              />
              <NestedStack.Screen
                name="ArmCirclesLenganLanjutan"
                component={ArmCirclesLenganLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatArmCirclesLenganLanjutan"
                component={
                  IstirahatArmCirclesLenganLanjutan
                }
              />
              <NestedStack.Screen
                name="LegBarbellCurlLeftLenganLanjutan"
                component={LegBarbellCurlLeftLenganLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatLegBarbellCurlLeftLenganLanjutan"
                component={
                  IstirahatLegBarbellCurlLeftLenganLanjutan
                }
              />
              <NestedStack.Screen
                name="LegBarbellCurlRightLenganLanjutan"
                component={
                  LegBarbellCurlRightLenganLanjutan
                }
              />
              <NestedStack.Screen
                name="IstirahatLegBarbellCurlRightLenganLanjutan"
                component={
                  IstirahatLegBarbellCurlRightLenganLanjutan
                }
              />
              <NestedStack.Screen
                name="FloorTricepDipsLenganLanjutan"
                component={FloorTricepDipsLenganLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatFloorTricepDipsLenganLanjutan"
                component={
                  IstirahatFloorTricepDipsLenganLanjutan
                }
              />
              <NestedStack.Screen
                name="ChestStretchLenganLanjutan"
                component={ChestStretchLenganLanjutan}
              />
              <NestedStack.Screen
                name="HasilLenganLanjutan"
                component={HasilLenganLanjutan}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* kaki pemula */}
        <Stack.Screen
          name="NestedScreens10"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="KakiPemula"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="KakiPemula"
                component={KakiPemula}
              />
              <NestedStack.Screen
                name="PersiapanGerakan10"
                component={PersiapanGerakan10}
              />
              <NestedStack.Screen
                name="SquatsKakiPemula"
                component={SquatsKakiPemula}
              />
              <NestedStack.Screen
                name="IstirahatSquatsKakiPemula"
                component={IstirahatSquatsKakiPemula}
              />
              <NestedStack.Screen
                name="BackwardLungeKakiPemula"
                component={BackwardLungeKakiPemula}
              />
              <NestedStack.Screen
                name="IstirahatBackwardLungeKakiPemula"
                component={IstirahatBackwardLungeKakiPemula}
              />
              <NestedStack.Screen
                name="DonkeyKicksLeftKakiPemula"
                component={DonkeyKicksLeftKakiPemula}
              />
              <NestedStack.Screen
                name="IstirahatDonkeyKicksLeftKakiPemula"
                component={
                  IstirahatDonkeyKicksLeftKakiPemula
                }
              />
              <NestedStack.Screen
                name="DonkeyKicksRightKakiPemula"
                component={DonkeyKicksRightKakiPemula}
              />
              <NestedStack.Screen
                name="IstirahatDonkeyKicksRightKakiPemula"
                component={
                  IstirahatDonkeyKicksRightKakiPemula
                }
              />
              <NestedStack.Screen
                name="CalfStretchKakiPemula"
                component={CalfStretchKakiPemula}
              />
              <NestedStack.Screen
                name="HasilKakiPemula"
                component={HasilKakiPemula}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* kaki menengah */}
        <Stack.Screen
          name="NestedScreens11"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="KakiMenengah"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="KakiMenengah"
                component={KakiMenengah}
              />
              <NestedStack.Screen
                name="PersiapanGerakan11"
                component={PersiapanGerakan11}
              />
              <NestedStack.Screen
                name="JumpingJacksKakiMenengah"
                component={JumpingJacksKakiMenengah}
              />
              <NestedStack.Screen
                name="IstirahatJumpingJacksKakiMenengah"
                component={
                  IstirahatJumpingJacksKakiMenengah
                }
              />
              <NestedStack.Screen
                name="SquatsKakiMenengah"
                component={SquatsKakiMenengah}
              />
              <NestedStack.Screen
                name="IstirahatSquatsKakiMenengah"
                component={IstirahatSquatsKakiMenengah}
              />
              <NestedStack.Screen
                name="LungesKakiMenengah"
                component={LungesKakiMenengah}
              />
              <NestedStack.Screen
                name="IstirahatLungesKakiMenengah"
                component={IstirahatLungesKakiMenengah}
              />
              <NestedStack.Screen
                name="SumoSquatKakiMenengah"
                component={SumoSquatKakiMenengah}
              />
              <NestedStack.Screen
                name="IstirahatSumoSquatKakiMenengah"
                component={IstirahatSumoSquatKakiMenengah}
              />
              <NestedStack.Screen
                name="CalfStretchKakiMenengah"
                component={CalfStretchKakiMenengah}
              />
              <NestedStack.Screen
                name="HasilKakiMenengah"
                component={HasilKakiMenengah}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>

        {/* kaki lanjutan */}
        <Stack.Screen
          name="NestedScreens12"
          options={{ headerShown: false }}
        >
          {() => (
            <NestedStack.Navigator
              initialRouteName="KakiLanjutan"
              screenOptions={{ headerShown: false }}
            >
              <NestedStack.Screen
                name="KakiLanjutan"
                component={KakiLanjutan}
              />
              <NestedStack.Screen
                name="PersiapanGerakan12"
                component={PersiapanGerakan12}
              />
              <NestedStack.Screen
                name="BurpeesKakiLanjutan"
                component={BurpeesKakiLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatBurpeesKakiLanjutan"
                component={
                  IstirahatBurpeesKakiLanjutan
                }
              />
              <NestedStack.Screen
                name="SquatsKakiLanjutan"
                component={SquatsKakiLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatSquatsKakiLanjutan"
                component={IstirahatSquatsKakiLanjutan}
              />
              <NestedStack.Screen
                name="CurstyLungesKakiLanjutan"
                component={CurstyLungesKakiLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatCurstyLungesKakiLanjutan"
                component={IstirahatCurstyLungesKakiLanjutan}
              />
              <NestedStack.Screen
                name="JumpingSquatsKakiLanjutan"
                component={JumpingSquatsKakiLanjutan}
              />
              <NestedStack.Screen
                name="IstirahatJumpingSquatsKakiLanjutan"
                component={IstirahatJumpingSquatsKakiLanjutan}
              />
              <NestedStack.Screen
                name="CalfStretchKakiLanjutan"
                component={CalfStretchKakiLanjutan}
              />
              <NestedStack.Screen
                name="HasilKakiLanjutan"
                component={HasilKakiLanjutan}
                options={{
                  animationEnabled: false,
                }}
              />
            </NestedStack.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

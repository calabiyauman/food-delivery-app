import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions, Image } from "react-native";
import { useFonts, ArimaMadurai_700Bold } from "@expo-google-fonts/arima-madurai";
import { DMSans_700Bold, DMSans_500Medium, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import AppLoading from "expo-app-loading";
import SystemNavigationBar from "react-native-system-navigation-bar";

SystemNavigationBar.stickyImmersive()

const getImageDimension = (optimalSize: number) => {
  const windowWidth = Dimensions.get("window").width;
  return optimalSize > windowWidth / 1.8 ? optimalSize : windowWidth / 1.8;
};

const Loading = () => {
  let [fontsLoaded] =  useFonts({
    ArimaMadurai_700Bold,
    DMSans_700Bold,
    DMSans_500Medium,
    DMSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" hidden={true} />
        
        <View style={styles.circleView}>
          <Image source={require("../assets/icons/snackfleet-logobrighter.png")} style={styles.container}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffe108",
  },
  imageBackground: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  circleView: {
    width: getImageDimension(200),
    height: getImageDimension(200),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  logoTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  healthyText: { fontSize: 18, color: "#fff", fontFamily: "ArimaMadurai_700Bold" },
  foodText: { fontSize: 18, color: "#F26303", fontFamily: "ArimaMadurai_700Bold" },
});

export default Loading;

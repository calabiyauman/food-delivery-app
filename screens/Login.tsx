import React from "react";
import { render } from "react-dom";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "./Main";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";



const Login = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<RouteProp<MainStackParamList, "Login">>();
    return 
    <View 
    style={{}}>


    </View>
}
export default Login




import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from "@react-navigation/stack"
import DoiMatKhau from "../screens/Doimatkhau"
const stackNav = createStackNavigator()
export default class DoiMatKhauContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown:false}}>
                <stackNav.Screen name ="Doimatkhau" component={DoiMatKhau}/>
            </stackNav.Navigator>
        )
    }
}
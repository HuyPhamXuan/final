import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from "@react-navigation/stack"
import ThongTinChinhQuyen from "../screens/Thongtinchinhquyen"
import HoSoChinhQuyen from '../screens/Hosochinhquyen'
const stackNav = createStackNavigator()
export default class ThongTinChinhQuyenContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown:false}}>
                <stackNav.Screen name ="Thongtinchinhquyen" component={ThongTinChinhQuyen}/>
                <stackNav.Screen name ="Hosochinhquyen" component={HoSoChinhQuyen}/>
            </stackNav.Navigator>
        )
    }
}
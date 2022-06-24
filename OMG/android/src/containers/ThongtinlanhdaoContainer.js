import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from "@react-navigation/stack"
import LanhDaoTheoCap from "../screens/Thongtinlanhdao"
import HoSoLanhDao from "../screens/Hosolanhdao"
import ThongTinLanhDao from '../screens/Lanhdaotheocap'
const stackNav = createStackNavigator()
export default class ThongTinLanhDaoContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown:false}}>
                <stackNav.Screen name ="Lanhdaotheocap" component={LanhDaoTheoCap}/>
                <stackNav.Screen name ="Hosolanhdao" component={HoSoLanhDao}/>
                <stackNav.Screen name ="Thongtinlanhdao" component={ThongTinLanhDao}/>
            </stackNav.Navigator>
        )
    }
}
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from "@react-navigation/stack"
import ThongTinThanNhan from "../screens/Thongtinnhanthan"
import HoSoThanNhan from '../screens/Hosothanhan'
const stackNav = createStackNavigator()
export default class ThongTinThanNhanContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown:false}}>
                <stackNav.Screen name ="Thongtinthannhan" component={ThongTinThanNhan}/>
                <stackNav.Screen name ="Hosothannhan" component={HoSoThanNhan}/>
            </stackNav.Navigator>
        )
    }
}
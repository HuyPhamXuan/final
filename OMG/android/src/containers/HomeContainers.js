import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Home from '../screens/Home'
import { createStackNavigator } from "@react-navigation/stack"
import ThongTinCaNhan from '../screens/Thongtincanhan'
import Newpaper from '../screens/Newpaper'
const stackNav = createStackNavigator()
export default class HomeContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown: false}}>
                <stackNav.Screen name = "Home" component={Home}/>
                <stackNav.Screen name = "Newpaper" component={Newpaper}/>
            </stackNav.Navigator>
        )
    }
}
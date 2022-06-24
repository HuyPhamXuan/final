import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import BottomNavigator from '../components/BottomNav'
import SignIn from '../screens/Dangnhap'
const stack = createStackNavigator()
export default class Containersss extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <stack.Navigator screenOptions={{headerShown:false}}>
                <stack.Screen name = "Bottom_Navigator" component={BottomNavigator}/>
            </stack.Navigator>
        )
    }
}
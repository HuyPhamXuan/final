import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Notification from '../screens/Notification'
const stackNav = createStackNavigator()
export default class NotificationContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown: false}}>
                <stackNav.Screen name = "Notification" component={Notification}/>
            </stackNav.Navigator>
        )
    }
}
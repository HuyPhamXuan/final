import React, { Component } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import Person from "../screens/Person";
import ServiceContainer from "./ServiceContainers";
import BottomNavigator from "../components/BottomNav";
import HomeContainer from "./HomeContainers";
import PersonContainer from "./PersonContainers";
const tabBottom= createBottomTabNavigator();
export default class NavigatorBottom extends Component{
    render(){
        return(
            <tabBottom.Navigator
                tabBar={props => <BottomNavigator {...props}/>}
                screenOptions={{headerShown :false, tabBarHideOnKeyboard: true}}          
            >
                <tabBottom.Screen name = "HomeContainer" component={ HomeContainer }/>
                <tabBottom.Screen name = "ServiceContainer" component={ ServiceContainer }/>
                <tabBottom.Screen name = "Notification" component={ Notification }/>
                <tabBottom.Screen name = "PersonContainer" component={ PersonContainer }/>
            </tabBottom.Navigator>
        )
    }
}
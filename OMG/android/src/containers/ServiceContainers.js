import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Service from '../screens/Service'
import CongChungContainer from "../containers/CongchungContainer"
import KhieuNaiContainer from "../containers/KhieunaiContainer"
import CapNhatThongTinContainer from "../containers/CapnhatthongtinContainer"
import DatLichHenContainer from './DatlichhenContainer'
import GopY from '../screens/Gopy'
import ListLichHen from '../screens/Danhsachlichhen'
const stackNav = createStackNavigator()
export default class ServiceContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown: false}}>
                <stackNav.Screen name = "Service" component={Service}/>
                <stackNav.Screen name = "Congchung_Container" component={CongChungContainer}/>
                <stackNav.Screen name = "Capnhatthongtin_Container" component={CapNhatThongTinContainer}/>
                <stackNav.Screen name = "Datlichhen_Container" component={DatLichHenContainer}/>
                <stackNav.Screen name = "Khieunai_Container" component={KhieuNaiContainer}/>
                <stackNav.Screen name = "Gopy_Container" component={GopY}/>
                <stackNav.Screen name = "Lichhen_Container" component={ListLichHen}/>
            </stackNav.Navigator>
        )
    }
}
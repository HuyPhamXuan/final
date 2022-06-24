import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Person from '../screens/Person'
import { createStackNavigator } from "@react-navigation/stack"
import ThongTinCaNhanContainer from "../containers/ThongtincanhanContainer"
import ThongTinCaNhan from '../screens/Thongtincanhan'
import ThongTinLanhDaoContainer from './ThongtinlanhdaoContainer'
import ThongTinThanNhanContainer from './ThongtinthannhanContainer'
import ThongTinChinhQuyenContainer from './ThongtinchinhquyenContainer'
import DoiMatKhauContainer from './DoimatkhauContainer'
const stackNav = createStackNavigator()
export default class PersonContainer extends Component{
    render(){
        return(
            <stackNav.Navigator screenOptions={{headerShown: false}}>
                <stackNav.Screen name = "Person" component={Person}/>
                <stackNav.Screen name = "Thongtincanhan_Container" component={ThongTinCaNhanContainer}/>
                <stackNav.Screen name = "Thongtinlanhdao_Container" component={ThongTinLanhDaoContainer}/>
                <stackNav.Screen name = "Thongtinthannhan_Container" component={ThongTinThanNhanContainer}/>
                <stackNav.Screen name = "Thongtinchinhquyen_Container" component={ThongTinChinhQuyenContainer}/>
                <stackNav.Screen name = "Doimatkhau_Container" component={DoiMatKhauContainer}/>
            </stackNav.Navigator>
        )
    }
}
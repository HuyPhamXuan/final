import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RowBoxMenu, BoxMenu, BoxService } from '../components/BoxMenu'
import Header from '../components/Header'
export default class Service extends Component{
    render(){
        return(
            <>
            <Header
                center = {<Text style ={{fontSize: 20, color :"white"}}>Dịch vụ</Text>}
            >

            </Header>
            <View style = {{flex:1, backgroundColor:"#D3D3D3"}}>
                <View style = {{ margin:10}}></View>
                    <BoxService
                        text = "Xin giấy tờ"
                        icon_name = "document-text-outline"
                        name_screen = "Congchung_Container"
                        navigation = {this.props.navigation} 
                    >                       
                    </BoxService>
                    <View style = {{ margin:7}}></View>
                    <BoxService
                        text = "Hẹn lịch"
                        icon_name = "calendar-sharp"
                        name_screen = "Datlichhen_Container"
                        navigation = {this.props.navigation} 
                    >                       
                    </BoxService>
                    <View style = {{ margin:7}}></View>
                    <BoxService
                        text = "Góp ý"
                        icon_name = "chatbubble-ellipses-outline"
                        name_screen = "Gopy_Container"
                        navigation = {this.props.navigation} 
                    >                       
                    </BoxService>
                    <View style = {{ margin:7}}></View>
                    <BoxService
                        text = "Danh sách lịch hẹn"
                        icon_name = "ios-cafe-outline"
                        name_screen = "Lichhen_Container"
                        navigation = {this.props.navigation} 
                    >                       
                    </BoxService>
                    <View style = {{ margin:7}}></View>
                    <BoxService
                        text = "Thời gian nhận giấy tờ"
                        icon_name = "alarm-outline"
                        name_screen = "Lichhen_Container"
                        navigation = {this.props.navigation} 
                    >                       
                    </BoxService>
                    <View style = {{ margin:5}}></View>
            </View>
            </>
        )
    }
}
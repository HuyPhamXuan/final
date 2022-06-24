import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { color } from 'native-base/lib/typescript/theme/styled-system'
const { width, height } = Dimensions.get("window")
export default class HoSoChinhQuyen extends Component{
    render(){
        return(
            <>
            <Header
                left = {
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.goBack()}}
                >
                    <Ionicons name ="chevron-back-outline" size={35} color = "white"/>
                </TouchableOpacity>
               }
               center = { <Text style = {{ fontSize: 20, color:"white"}}>Thông tin chính quyền</Text>}
            >               
            </Header>
            <ScrollView>
               <View style = { styles.box1 }>
                    <Image style ={{width: width, height: 150}} source = {require("../image/2.jpg")}/>
               </View>
               <View style = { styles.box2 }> 
                    <Text style = {{  marginBottom: 2}}>Tên cơ quan:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.name}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ marginBottom: 2}}>Ngày thành lập:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.date}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{  marginBottom: 2}}>Người đứng đầu:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.leader}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{  marginBottom: 2}}>Địa chỉ:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.address}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ marginBottom: 2}}>Trách nhiệm:</Text>
                    <TextInput
                        style = { styles.text_ip_juve }
                        editable = { false }
                        multiline={true}
                        value = {this.props.route.params.data.responsibility}
                    />
                    
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ marginBottom: 2}}>Lịch sử hình thành:</Text>
                    <TextInput
                        style = { styles.text_ip_juve }
                        editable = { false }
                        multiline={true}
                        value = {this.props.route.params.data.history}
                    />
                    
               </View>
               <View style = {{ marginBottom:30 }}></View>
            </ScrollView>
            </>
        )
    }
}
var styles = StyleSheet.create({
    scroll:{
        flex:1
    },
    box1:{
        height:150,
        width:width,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    sub_box1_1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    sub_box1_2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box2:{
        flex:1,
        marginLeft: 30,
    },
    text_ip_name:{
        height:42,
        width: width - 60,

        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16,
        elevation:10
    },
    text_ip_work:{
        height:42,
        width: width/2 - 30,
        borderWidth: 0.3,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16,
        elevation:10
    },
    text_ip_sex:{
        height:42,
        width: width/2 - 60,
        borderWidth: 0.3,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16
    },
    text_ip_juve:{
        height:150,
        width: width - 60,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16,
        textAlignVertical: 'top',
        elevation:10
    },
})

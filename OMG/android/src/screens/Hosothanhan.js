import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { color } from 'native-base/lib/typescript/theme/styled-system'
const { width, height } = Dimensions.get("window")
export default class HoSoThanNhan extends Component{
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
               center = { <Text style = {{ fontSize: 20, color:"white"}}>Thông tin thân nhân</Text>}
            >               
            </Header>
            <ScrollView>
               <View style = { styles.box1 }>
                    <View style = { styles.sub_box1_1 }>
                        <Text style = {{ fontSize:40, color:"#FF4500"}}>HỒ SƠ</Text>
                        <Text style = {{ fontSize:27, color:"#FF4500" }}>THÂN NHÂN</Text>
                        <View style = {{ borderWidth:0.3, width: width/2 - 60, marginTop:10, borderColor:"#FF4500"}}></View>
                    </View>
                    <View style = { styles.sub_box1_2 }>
                        <Image style = {{height:130, width: 100}} source={require("../image/1.jpg")}/>
                    </View>
               </View>
               <View style = { styles.box2 }> 
                    <Text style = {{  marginBottom: 2}}>Họ và tên:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.name}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{marginBottom: 2}}>Ngày tháng năm sinh:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.date}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ marginBottom: 2}}>Căn cước/CMND:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {String(this.props.route.params.data.cmnd)}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <View style = {{ height: 22, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <Text style = {{ marginBottom: 2}}>Dân tộc:</Text>
                        </View>
                        <View style = {{ flex:1,}}>
                            <Text style = {{ marginBottom: 2}}>Giới tính:</Text>
                        </View>
                    </View>
                    <View style = {{ height: 42, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_work }
                                editable = { false }
                                value = {this.props.route.params.data.folk}
                            />   
                        </View>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_sex }
                                editable = { false }
                                value = {this.props.route.params.data.sex?"Nam":"Nữ"}
                            />   
                        </View>
                    </View>
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ marginBottom: 2}}>Quê quán:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.country}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <View style = {{ height: 22, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <Text style = {{  marginBottom: 2}}>Quốc tịch:</Text>
                        </View>
                        <View style = {{ flex:1,}}>
                            <Text style = {{ marginBottom: 2}}>Tình trạng kết hôn:</Text>
                        </View>
                    </View>
                    <View style = {{ height: 42, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_work }
                                editable = { false }
                                value = {this.props.route.params.data.nationality}
                            />   
                        </View>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_sex }
                                editable = { false }
                                value = {this.props.route.params.data.weeding?"Đã kết hôn":"Chưa kết hôn"}
                            />   
                        </View>
                    </View>
                    <View style = {{ marginBottom:10 }}></View>
                    
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
        flexDirection:"row",
        marginTop:10,
        marginBottom: 15
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
        elevation:5,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16
    },
    text_ip_work:{
        height:42,
        width: width/2 - 30,
        elevation:5,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16
    },
    text_ip_sex:{
        height:42,
        width: width/2 - 60,
        elevation:5,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16
    },
    text_ip_juve:{
        height:150,
        width: width - 60,
        borderWidth: 0.5,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16,
        textAlignVertical: 'top'
    },
})

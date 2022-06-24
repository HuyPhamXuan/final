import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { color } from 'native-base/lib/typescript/theme/styled-system'
const { width, height } = Dimensions.get("window")
export default class HoSoLanhDao extends Component{
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
               center = { <Text style = {{ fontSize: 20, color:"white"}}>Thông tin lãnh đạo</Text>}
            >               
            </Header>
            <ScrollView>
               <View style = { styles.box1 }>
                    <View style = { styles.sub_box1_1 }>
                        <Text style = {{ fontSize:40, color:"#FF4500" }}>HỒ SƠ</Text>
                        <Text style = {{ fontSize:27, color:"#FF4500"}}>LÃNH ĐẠO</Text>
                        <View style = {{ borderWidth:0.3, width: width/2 - 60, marginTop:10, borderColor:"#FF4500"}}></View>
                    </View>
                    <View style = { styles.sub_box1_2 }>
                        <Image style = {{height:130, width: 100}} source={require("../image/1.jpg")}/>
                    </View>
               </View>
               <View style = { styles.box2 }> 
                    <Text style = {{ fontSize: 16, marginBottom: 2}}>Họ và tên:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.name}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ fontSize: 16, marginBottom: 2}}>Ngày tháng năm sinh:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.date}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ fontSize: 16, marginBottom: 2}}>Chức vụ:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.work}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{ fontSize: 16, marginBottom: 2}}>Nơi công tác hiện tại:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.address_work}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <View style = {{ height: 22, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <Text style = {{fontSize: 16, marginBottom: 2}}>Dân tộc:</Text>
                        </View>
                        <View style = {{ flex:1,}}>
                            <Text style = {{ fontSize: 16, marginBottom: 2}}>Giới tính:</Text>
                        </View>
                    </View>
                    <View style = {{ height: 42, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_work }
                                editable = { false }
                                value = {this.props.route.params.data.nation}
                            />   
                        </View>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_sex }
                                editable = { false }
                                value = {this.props.route.params.data.sex}
                            />   
                        </View>
                    </View>
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{fontSize: 16, marginBottom: 2}}>Quốc tịch:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.country}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text style = {{fontSize: 16, marginBottom: 2}}>Quê quán:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.route.params.data.country}
                    />
                    <View style = {{ marginBottom:10 }}></View>

                    <Text style = {{ fontSize: 16, marginBottom: 2}}>Tiểu sử:</Text>
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
        borderWidth: 0.5,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16
    },
    text_ip_work:{
        height:42,
        width: width/2 - 30,
        borderWidth: 0.5,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16
    },
    text_ip_sex:{
        height:42,
        width: width/2 - 60,
        borderWidth: 0.5,
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

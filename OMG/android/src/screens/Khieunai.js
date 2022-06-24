import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import CheckBox from '@react-native-community/checkbox';
const { width, height } = Dimensions.get("window")
export default class KhieuNai extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            area: "",
            checkBox: false,
        }
    }
    onChangetitle = (text)=>{
        this.setState({
            title: text
        })
    } 
    onChangeArea = (text) => {
        this.setState({
            area: text
        })
    }
    toggleCheckBox = (newValue) =>{
        this.setState({
            checkBox: newValue
        })
    }
    render(){
        return(
            <>
            <Header
                left = {
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.goBack()}}
                >
                    <Ionicons name ="chevron-back-outline" size={35} color = {"white"}/>
                </TouchableOpacity>
               }
               center = {<Text style = {{fontSize: 20, color: "white"}}>Khiếu nại</Text>}
            >               
            </Header>
            <View style = {{flex:1, backgroundColor: "#D3D3D3"}}>
            <View style ={styles.form}>
                <View style={styles.box_text}>
                    <Text style ={{ fontSize: 38, color:"#FF4500", marginTop: 15}}>ĐƠN KHIẾU NẠI</Text>
                    <View style ={styles.line}></View>
                </View>
                <Text style = {{ marginLeft: 20, marginBottom: 5, color:"black"}}>Tiêu đề:</Text>
                <TextInput
                    style = {styles.comboBox}
                    value = {this.state.title}
                    onChangeText = {(text) => {
                        this.onChangetitle(text)
                    }}

                />
                <Text style = {{ marginLeft: 20, marginBottom: 5, color:"black"}}>Nội dung:</Text>
                <TextInput
                    style = {styles.textArea}
                    value = {this.state.area}
                    onChangeText = {(text) => {
                        this.onChangeArea(text)
                    }}
                    multiline = {true}

                />
                <View style = {{ flexDirection: "row", marginLeft: 13}}>
                    <View style = {{ flex: 1}}>
                        <CheckBox 
                                disabled={false}
                                value={this.state.checkBox}
                                onValueChange={(newValue) => this.toggleCheckBox(newValue)}
                        />
                    </View>
                    <View style = {{flex: 7, justifyContent:"center"}}>
                        <Text style ={{fontSize: 16, color:"red"}}>Yêu cầu lên lịch hẹn</Text>
                    </View>
                </View>
                <View style = { styles.box_button }>
                    <TouchableOpacity
                        style = { styles.button }
                    >
                        <Text style = {{ fontSize: 19, color: "white"}}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            </>
        )
    }
}
var styles = StyleSheet.create({
    form:{
        height: height - 60 * 3 - 20,
        width: width - 40,
        marginLeft: 20,
        borderWidth: 0.5,
        borderRadius:3,
        marginTop: 25,
        backgroundColor: "white"
    },
    box_text:{
        height:110,
        width: width - 40,
        alignItems:"center",
        marginTop:10
    },
    comboBox:{
        height: 45,
        width: width - 80,
        borderWidth:0.5,
        marginLeft: 20,
        marginBottom: 15,    
        borderColor: "black",
        justifyContent: "center"    
    },
    button:{
        width:150,
        height:40,
        backgroundColor: "#FF4500",
        alignItems:"center",
        justifyContent:"center"      
    },
    line:{
        marginTop:10,
        height:1,
        width: width -170,
        alignItems:"center",
        borderWidth:0.5,
        borderColor:"#FF4500"
    },
    box_button:{
        width:width - 40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5
    },
    textArea:{
        height: 155,
        width: width - 80,
        borderWidth:0.5,
        marginLeft: 20,
        marginBottom: 5,    
        borderColor: "black",
        justifyContent: "center" ,
        textAlignVertical: 'top' 
    }
})

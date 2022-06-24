import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import { connect } from "react-redux";
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { postData } from '../connect'
const { width, height } = Dimensions.get("window")
const data = [
    {
        "id":1,
        "label":"Xac nhan ho ngheo"
    },
    {
        "id":2,
        "label":"Cong chung can cuoc/cmnd"
    },
    {
        "id":3,
        "label":"Xac nhan tam tru tam vang"
    },
    {
        "id":4,
        "label":"Xac nhan hoan nghia vu quan su"
    }
]
class CongChung extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueComboBox: 1,
            number: 1,
            monney: 5000,
            check:true,
            label:"Xac nhan ho ngheo"
        }
    }
    onChangeValueComboBox = (itemValue, itemIndex)=>{
        this.setState({
            valueComboBox: itemValue,
            label:data[itemIndex].label
        })
    } 
    onChangeNumber = (number) =>{
        let ch = true
        for ( let i = 0; i < number.length; i ++){
            if (!Number.isNaN(parseInt(number[i]))) {
                continue
            } else {
                ch = false
                this.setState({
                    check: false,
                })
                break
            }
        }
        this.setState({
            number: number,
        })
        if ( ch === true ){
            this.setState({
                check: true,
            })
        }

    }
    createTwoButtonAlert = () =>
    Alert.alert(
      "Xin giấy tờ",
      "Bạn có chắc muốn xin giấy tờ không?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.button() }
      ]
    )
    button = async () => {
        postData({
            "problem": this.state.label,
            "number": this.state.number,
            "ThongTinCaNhan": this.props.signIn.ThongTinCaNhan
        }, "https://backendcnpmem.herokuapp.com/api/createXinXacNhan").then((res) => {
            console.log("res =: ", res)
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
               center = {<Text style ={{ fontSize: 20, color:"white"}}>Xin giấy tờ</Text>}
            >               
            </Header>
            <View style = {{ flex:1, backgroundColor: "#D3D3D3"}}>
            <View style ={styles.form}>
                <View style={styles.box_text}>
                    <Text style ={{ fontSize: 38, color:"#FF4500"}}>XIN GIẤY TỜ</Text>
                    <View style ={styles.line}></View>
                </View>
                <Text style = {{ marginLeft: 20, marginBottom: 5, }}>Loại đơn:</Text>
                <View 
                    style = { styles.comboBox}
                >
                <Picker
                    selectedValue = {this.state.valueComboBox}
                    onValueChange = {(itemValue, itemIndex)=>{this.onChangeValueComboBox(itemValue, itemIndex)}}
                >
                    <Picker.Item label='Xác nhận hộ nghèo' value={1}/>
                    <Picker.Item label='Công chứng căn cước/cmnd' value={2}/>
                    <Picker.Item label='Xác nhận tạm trú tạm vắng' value={3}/>
                    <Picker.Item label='Xác nhận miễn nghĩa vụ quân sự' value={4}/>
                </Picker>
                </View>
                <Text style = {{ marginLeft: 20, marginBottom: 5, }}>Số lượng:</Text>
                <TextInput
                    style = {styles.comboBox}
                    value = {String(this.state.number)}
                    onChangeText = {(text) => {
                        this.onChangeNumber(text)
                    }}

                />
                {this.state.check === false?<Text style = {{marginLeft:20, top: -10, color: "red"}}>Vui lòng nhập số</Text> : <View></View>}
                <Text style = {{ marginLeft: 20, marginBottom: 5,}}>Lệ phí:</Text>
                <TextInput
                    style = {styles.comboBox}
                    value = {this.state.check?String(this.state.monney * this.state.number):" "}
                    editable = {false}

                />
                <View style = { styles.box_button }>
                    <TouchableOpacity
                        style = { styles.button }
                        onPress = {() =>{
                            this.createTwoButtonAlert()
                        }}
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
function mapStatetoProps(state){
    return {
        signIn: state.signIn,
        thong_tin_ca_nhan: state.thong_tin_ca_nhan,
        all_citizen: state.all_citizen
    };
}
export default connect(mapStatetoProps)(CongChung);
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
        marginTop:30
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
        marginTop:5,
        height:1,
        width: width -240,
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
    }
})

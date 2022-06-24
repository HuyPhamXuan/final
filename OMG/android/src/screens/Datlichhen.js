import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { postData } from '../connect'
import { connect } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker'


const { width, height } = Dimensions.get("window")
const data = [
    {
        "id":1,
        "label":"Xác nhận vay vốn"
    },
    {
        "id":2,
        "label":"Giải quyết sai lệch giấy tờ"
    },
    {
        "id":3,
        "label":"Công chứng giấy tờ nhà đất"
    },
    {
        "id":4,
        "label":"Vấn đề khác"
    }
]

class DatLichHen extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueComboBox: 1,
            area: "",
            label:"Xác nhận vay vốn",
            openDate: false,
            date:'',
            openTime: false,
            time:''
        }
    }
    onChangeValueComboBox = (itemValue, itemIndex)=>{
        this.setState({
            valueComboBox: itemValue,
            label:data[itemIndex].label
        })
    } 
    onChangeText = (text) => {
        this.setState({
            area: text
        })
    }
    createTwoButtonAlert = () =>
    Alert.alert(
      "Đặt lịch hẹn",
      "Bạn có chắc muốn đặt lịch hẹn không?",
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
            "comment": this.state.area,
            "ThongTinCaNhan": this.props.signIn.ThongTinCaNhan,
            "date": this.state.date,
            "time": this.state.time
        }, "https://backendcnpmem.herokuapp.com/api/createLichHen").then((res) => {
            console.log("res =: ", res)
        })
    }
    onChangeDate = (event, date) => {
        let convert 
        convert = date.toISOString().substring(0, 10)
        this.setState({
            date:convert,
            openDate:false
        })
        console.log(date.toISOString().substring(0, 10))
    }
    onChangeTime = (event, time) => {
        let convert 
        convert = time.toTimeString()
        let new_time 
        new_time = convert.split("GMT")
        this.setState({
            time:new_time[0],
            openTime:false
        })
        console.log(convert)
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
               center = {<Text style = {{fontSize: 20, color: "white"}}>Đặt lịch hẹn</Text>}
            >               
            </Header>
            <View style = {{flex:1, backgroundColor:"#D3D3D3"}}>
            <View style ={styles.form}>
                <View style={styles.box_text}>
                    <Text style ={{ fontSize: 36, color:"#FF4500"}}>ĐẶT LỊCH HẸN</Text>
                    <View style ={styles.line}></View>
                </View>
                <Text style = {{ marginLeft: 20, marginBottom: 5, }}>Vấn đề cần giải quyết:</Text>
                <View 
                    style = { styles.comboBox}
                >
                <Picker
                    selectedValue = {this.state.valueComboBox}
                    onValueChange = {(itemValue, itemIndex)=>{this.onChangeValueComboBox(itemValue, itemIndex)}}
                >
                    <Picker.Item label='Xác nhận vay vốn' value={1}/>
                    <Picker.Item label='Giải quyết sai lệch giấy tờ' value={2}/>
                    <Picker.Item label='Công chứng giấy tờ nhà đất' value={3}/>
                    <Picker.Item label='Vấn đề khác' value={4}/>
                </Picker>
                </View>
                <View style = {{height:75, width:width-40, }}>
                <View style = {{flexDirection:"row", justifyContent:"center"}}>
                    <View style = {{flex:4}}>
                        <Text style = {{ marginLeft: 20, marginBottom: 5, }}>Chọn ngày hẹn:</Text>
                    </View>
                    <View style = {{flex:3}}>
                        <Text style = {{ marginLeft: 20, marginBottom: 5, }}>Chọn giờ hẹn:</Text>
                    </View>
                </View>
                <View style = {{flexDirection:"row", justifyContent:"center"}}>
                    <View style = {{flex:3}}>
                        <TouchableOpacity
                            style = {styles.date}
                            value = {this.state.title}
                            onPress = {()=>{
                                this.setState({
                                openDate:true
                            })
                            }}
                        >
                            <Text style = {{marginLeft: 10, color: "black"}}>{this.state.date}</Text> 
                        </TouchableOpacity>
                    </View>
                    <View style = {{flex:3}}>
                        <TouchableOpacity
                            style = {styles.time}
                            value = {this.state.title}
                            onPress = {()=>{
                                this.setState({
                                openTime:true
                            })
                            }}
                        >
                            <Text style = {{marginLeft: 10, color:"black"}}>{this.state.time}</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
                  
                </View>
                <Text style = {{ marginLeft: 20, marginBottom: 5, marginTop:20}}>Ghi chú:</Text>
                <TextInput
                    style = {styles.textArea}
                    value = {this.state.area}
                    onChangeText = {(text) => {
                        this.onChangeText(text)
                    }}
                    multiline = {true}
                    blurOnSubmit={true}

                />
                {this.state.openDate?
                    <RNDateTimePicker 
                        mode = 'date' 
                        value={new Date()}
                        onChange = {this.onChangeDate}
                    >

                    </RNDateTimePicker> : <View></View>
                }
                {this.state.openTime?
                    <RNDateTimePicker 
                        mode = 'time' 
                        value={new Date()}
                        onChange = {this.onChangeTime}
                    >

                    </RNDateTimePicker> : <View></View>
                }
                <View style = { styles.box_button }>
                    <TouchableOpacity
                        style = { styles.button }
                        onPress = {() =>{
                            this.createTwoButtonAlert()
                        }}
                    >
                        <Text style = {{ fontSize: 19, color: "white"}}>Hẹn lịch</Text>
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
export default connect(mapStatetoProps)(DatLichHen);
var styles = StyleSheet.create({
    form:{
        height: height - 60 * 3  ,
        width: width - 40,
        marginLeft: 20,
        borderWidth: 0.5,
        borderRadius:3,
        marginTop: 25,
        backgroundColor: "white"
    },
    box_text:{
        height:80,
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
        width: width -190,
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
        height: 135,
        width: width - 80,
        borderWidth:0.5,
        marginLeft: 20,
        marginBottom: 15,    
        borderColor: "black",
        justifyContent: "center" ,
        textAlignVertical: 'top' 
    },
    date:{
        height: 45,
        width: (width - 80)/5 * 3 -10,
        borderWidth:0.5,
        marginLeft: 20,
        marginBottom: 15,    
        borderColor: "black",
        justifyContent: "center"     
    },
    time:{
        height: 45,
        width: (width - 80)/5 * 2 -10,
        borderWidth:0.5,
        marginLeft: 45,
        marginBottom: 15,    
        borderColor: "black",
        justifyContent: "center"     
    }
})

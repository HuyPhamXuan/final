import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { postData } from '../connect'
import { cleanAccents } from '../extend'
import _ from "lodash";
const { width, height } = Dimensions.get("window")
class LichHen extends Component{

    render(){
        return(
            <>
            
            <View 
                style ={styles.box_lichhen}
            >
                <View style ={ styles.box_img }>
                    <Ionicons name = "alarm-sharp" size={50}/>

                </View>
                <View style = { styles.box_text }>
                    <View style = {styles.box_title}>
                        <Text style = {{fontSize: 18, color :"black"}}>{this.props.value.problem}</Text>
                    </View>
                    <View style = {styles.sub_line}></View>
                    <View style ={styles.box_2}>
                        <View style = {styles.box_sub_21}>
                            <Text style ={{fontStyle:"italic", color:"black"}}>Ngày hẹn: </Text>
                            <Text>{this.props.value.date}</Text>
                        </View>
                        <View style = {styles.box_sub_22}>
                            <Text style ={{fontStyle:"italic", color:"black"}}>Giờ hẹn: </Text>
                            <Text>{this.props.value.time}</Text>
                        </View>
                        <View style = {styles.box_sub_22}>
                            <Text style ={{fontStyle:"italic", color:"black"}}>Trạng thái: </Text>
                            <Text>{this.props.value.status}</Text>
                        </View>
                    </View>
                </View>
            </View>
            </>
        )
    }
}
const data = [
    {
        title :"Hẹn gặp lần 1",
        ngay_hen: "14/03/2022",
        state: "Đã xử lý"
    },
    {
        title :"Hẹn gặp lần 2",
        ngay_hen: "14/04/2022",
        state: "Đã xử lý"
    },
    {
        title :"Hẹn gặp lần 3",
        ngay_hen: "14/05/2022",
        state: "Đã lên lịch"
    },
    {
        title :"Hẹn gặp lần 4",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
    {
        title :"Hẹn gặp lần 5",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
    {
        title :"Hẹn gặp lần 6",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
    {
        title :"Hẹn gặp lần 7",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
]
class ListLichHen extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueComboBox: 1,
            data : [],
            buffer_data: []
        }
    }
    search = (text) =>{
        const newText= cleanAccents(String(text).toLowerCase())
        const data = _.filter(this.state.data, (elmt)=>{
            let newElmt=cleanAccents(String(elmt.problem).toLowerCase())
            if(newElmt.search(newText) !== -1){
                return true
            }
            else {
                return false
            }
        })
        this.setState({
            buffer_data:data
        })
    }
    componentDidMount(){
        postData({
            "userId": this.props.signIn.ThongTinCaNhan
        }, "https://backendcnpmem.herokuapp.com/api/lichHenCongDan").then((res) => {
            let arr = []
            res.map((value) => {
                let date = value.date.split("T")
                let p  = value
                p.date = date[0]
                arr.push(p)
            })
            this.setState({
                data:arr,
                buffer_data:arr
            })
        })
    }
    onChangeValueComboBox = (itemValue, itemIndex)=>{
        this.setState({
            valueComboBox: itemValue
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
               center = {<Text style = {{ fontSize: 20, color:"white"}}>Danh sách lịch hẹn</Text>}
            >               
            </Header>
            <ScrollView style = {{ backgroundColor:"#D3D3D3"}}>
                <View style = {{ height: 90, marginTop: 15, }}>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 40, backgroundColor: "white", alignItems:"center"}}>
                            <Ionicons name ="ios-search" size={28}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.search(text)
                            }}
                            placeholder = "Nhập tên cuộc hẹn"
                        />
                    </View>
                    <View style = {styles.box_search}>
                        <View style = {{elevation:10, height: 40, width: 160, marginRight: 15, justifyContent:"center", backgroundColor:"white"}}>
                            <Picker
                                selectedValue = {this.state.valueComboBox}
                                onValueChange = {(itemValue, itemIndex)=>{this.onChangeValueComboBox(itemValue, itemIndex)}}
                            >
                                <Picker.Item label='Ngày hẹn' value={1}/>
                                <Picker.Item label='Trạng thái' value={2}/>
                            </Picker>
                        </View>
                    </View>
                </View>
                {
                    this.state.buffer_data.map((val) =>{
                        return (
                            <>
                            <View style ={styles.line}></View>
                            <LichHen value = {val}/>
                            </>
                        )
                    })
                }
                <View style ={{marginTop:20}}>

                </View>
            </ScrollView>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        thong_tin_ca_nhan: state.thong_tin_ca_nhan,
        signIn: state.signIn
    };
}
export default connect(mapStatetoProps)(ListLichHen);
var styles = StyleSheet.create({
    box_lichhen:{
        flexDirection:"row",
        height: 105,
        width: width - 40,
        marginLeft: 20,
        elevation:10,
        backgroundColor: "white",
        borderRadius:3,
        borderColor:"#FF4500"
    },
    img:{
        height: 60,
        width: 60,
    },
    box_text:{
        flex:4,
    },
    box_title:{
        flex: 1,
        justifyContent: "center"
    },
    box_2:{
        flex: 2,
        justifyContent: "center"
    },
    line:{
        marginTop: 10,
    },
    sub_line:{
        borderWidth: 0.2,
        height:0.35,
        width: width - 150,
        borderColor: "gray",
        marginBottom: 3,
        marginTop : 5
    },
    box_img:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box_sub_21:{
        flexDirection: "row",
        flex: 1.3,
        alignItems:"center",
    },
    box_sub_22:{
        flexDirection: "row",
        flex: 1.5,
    },
    box_input:{
        height:40,
        justifyContent:"center",
        alignItems:"center",
        width: width - 40,
        marginLeft: 20,
        flexDirection:"row",
        borderRadius:3,
        backgroundColor:"white",
        elevation:9
    },
    text_input:{
        height: 39,
        width: width - 81,
        backgroundColor: "white",
        borderRadius:3,

    },
    search:{
        height: 38,
        backgroundColor: "#00008B",
        width: 85,
        borderRadius: 3,
        justifyContent: "center",
        alignItems:"center"
    },
    box_search:{
        marginTop: 10,
        height: 41, 
        width: width- 40, 
        marginLeft: 20,
        marginBottom: 10,
        flexDirection: "row",
        marginLeft: width - 180
    }
})
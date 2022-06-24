import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
import _ from "lodash";
import { cleanAccents } from '../extend'
class LanhDao extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <>
            <TouchableOpacity 
                style ={styles.box_nguoithan}
                onPress = {()=>{
                    this.props.navigation.navigate("Hosolanhdao", {data: this.props.data})
                }}
            >
                <View style ={ styles.box_img }>
                    <Image  source={require("../image/1.jpg")} style ={styles.img}/>

                </View>
                <View style = { styles.box_text }>
                    <Text style ={{fontSize:18}}>{this.props.data.name}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
const  data = [
    {
        name: "Lê Văn A",
        address_work: "UBND huyện A",
        date: "01/01/1995",
        nation: "Kinh",
        sex: "Nam",
        country: "Việt Nam",
        work: "Chủ tịch huyện",
        prison: ""
    },
    {
        name: "Lê Văn B",
        address_work: "UBND huyện A",
        date: "01/01/1995",
        nation: "Kinh",
        sex: "Nam",
        country: "Việt Nam",
        work: "Kế toán",
        prison: ""
    },
    {
        name: "Lê Văn C",
        address_work: "UBND huyện A",
        date: "01/01/1995",
        nation: "Kinh",
        sex: "Nam",
        country: "Việt Nam",
        work: "Chuyên viên",
        prison: ""
    },
    {
        name: "Lê Thị D",
        date: "01/01/1995",
        address_work: "UBND huyện A",
        nation: "Kinh",
        sex: "Nữ",
        country: "Việt Nam",
        work: "Kế Toán Trưởng",
        prison: ""
    },
    {
        name: "Lê Thị F",
        date: "01/01/1995",
        address_work: "UBND huyện A",
        nation: "Kinh",
        sex: "Nữ",
        country: "Việt Nam",
        weeding: "Đã kết hôn",
        work: "Chuyên viên",
        prison: ""
    },

]
export default class ThongTinLanhDao extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: data,
            buffer_data: data
        }
    }
    search = (text) =>{
        const newText= cleanAccents(String(text).toLowerCase())
        const data = _.filter(this.state.data, (elmt)=>{
            let newElmt=cleanAccents(String(elmt.name).toLowerCase())
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
               center = {<Text style = {{fontSize: 20, color: "white"}}>Lãnh Đạo</Text>}
            >               
            </Header>
            <View style = {{ flexDirection: "row", height: 40, marginTop: 15, }}>
                <View style = { styles.box_input }>
                    <View style ={{ width: 40, backgroundColor: "white", alignItems:"center"}}>
                        <Ionicons name ="ios-search" size={28}/>
                    </View>
                    <TextInput
                        style = { styles.text_input }
                        onChangeText = {(text)=>{
                            this.search(text)
                        }}
                        placeholder = "Nhập tên lãnh đạo"
                    />
                </View>
            </View>
            <ScrollView style ={{marginTop: 15}}>
               {
                   this.state.buffer_data.map((value)=>{
                       return (
                        <>
                        <LanhDao data = {value} navigation = { this.props.navigation }/>
                        <View style = {{ marginBottom:13}}></View>
                        </>
                       )
                   })
               }
            </ScrollView>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box_nguoithan:{
        flexDirection:"row",
        height: 75,
        width: width - 40,
        marginLeft: 20,
        borderWidth: 0.4,
        backgroundColor: "white",
        borderRadius:3,
        borderColor:"#FF4500"
    },
    img:{
        height: 60,
        width: 60,
    },
    box_img:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box_text:{
        flex: 4,
        justifyContent:"center",
        marginLeft: 10
    },
    box_input:{
        height:40,
        justifyContent:"center",
        alignItems:"center",
        width: width - 40,
        marginLeft: 20,
        flexDirection:"row",
        borderWidth: 0.3,
        borderRadius:3,
        backgroundColor:"white"
    },
    text_input:{
        height: 39,
        width: width - 82,
        backgroundColor: "white",
        borderRadius:3,
    },
    search:{
        height: 38,
        backgroundColor: "#00008B",
        width: 85,
        marginLeft: 15,
        borderRadius: 3,
        justifyContent: "center",
        alignItems:"center"
    }
})

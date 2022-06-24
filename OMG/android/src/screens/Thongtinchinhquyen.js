import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { DiaChiCQ } from "../screens/Diachi"
import _ from "lodash";
import { cleanAccents } from '../extend'
const { width, height } = Dimensions.get("window")
const  data = [
    {
        name:"UBND Huyện A",
        date: "01/01/2000",
        leader: "Phạm Văn A",
        address: "54 Nguyễn Lương Bằng",
        responsibility: "Thực hiện chức năng quản lí hành chính nhà nước ở địa phương trên các lĩnh vực kinh tế, văn hoá, giáo dục, y tế, quốc phòng, an ninh...",
        history: "Hình thành và phát triển hơn 20 năm, đạt được nhiều thành tích nổi bật."
    },
    {
        name:"UBND Xã B",
        date: "01/01/2001",
        leader: "Phạm Văn B",
        address: "100 Nguyễn Lương Bằng",
        responsibility: "Thực hiện chức năng quản lí hành chính nhà nước ở địa phương trên các lĩnh vực kinh tế, văn hoá, giáo dục, y tế, quốc phòng, an ninh...",
        history: "Hình thành và phát triển hơn 20 năm, đạt được nhiều thành tích nổi bật."
    },
    {
        name:"UBND Xã C",
        date: "01/01/2001",
        leader: "Phạm Văn C",
        address: "541 Nguyễn Lương Bằng",
        responsibility: "Thực hiện chức năng quản lí hành chính nhà nước ở địa phương trên các lĩnh vực kinh tế, văn hoá, giáo dục, y tế, quốc phòng, an ninh...",
        history: "Hình thành và phát triển hơn 20 năm, đạt được nhiều thành tích nổi bật."
    },
    {
        name:"UBND Xã D",
        date: "01/01/2000",
        leader: "Phạm Văn D",
        address: "333 Nguyễn Lương Bằng",
        responsibility: "Thực hiện chức năng quản lí hành chính nhà nước ở địa phương trên các lĩnh vực kinh tế, văn hoá, giáo dục, y tế, quốc phòng, an ninh...",
        history: "Hình thành và phát triển hơn 20 năm, đạt được nhiều thành tích nổi bật."
    },
    {
        name:"UBND Xã E",
        date: "01/01/2000",
        leader: "Phạm Văn E",
        address: "154 Nguyễn Lương Bằng",
        responsibility: "Thực hiện chức năng quản lí hành chính nhà nước ở địa phương trên các lĩnh vực kinh tế, văn hoá, giáo dục, y tế, quốc phòng, an ninh...",
        history: "Hình thành và phát triển hơn 20 năm, đạt được nhiều thành tích nổi bật."
    },
    {
        name:"UBND Xã F",
        date: "01/01/2000",
        leader: "Phạm Văn F",
        address: "24 Nguyễn Lương Bằng",
        responsibility: "Thực hiện chức năng quản lí hành chính nhà nước ở địa phương trên các lĩnh vực kinh tế, văn hoá, giáo dục, y tế, quốc phòng, an ninh...",
        history: "Hình thành và phát triển hơn 20 năm, đạt được nhiều thành tích nổi bật."
    },
    

]
export default class ThongTinChinhQuyen extends Component{
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
               center = {<Text style = {{fontSize: 20, color: "white"}}>Chính quyền</Text>}
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
                        placeholder = "Nhập tên cơ quan"
                    />
                </View>
            </View>
            <ScrollView style ={{marginTop: 15}}>
                <View style = {{marginTop: 5}}></View>
               {
                   this.state.buffer_data.map((value)=>{
                       return (
                        <>
                        <DiaChiCQ data = {value} name_screen = {"Hosochinhquyen"} navigation = { this.props.navigation }/>
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
        borderWidth: 0.3,
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
        elevation:10,
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


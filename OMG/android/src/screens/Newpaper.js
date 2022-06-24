import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
export default class Newpaper extends Component{
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
               center = { <Text style = {{ fontSize: 20, color:"white"}}>Báo chí</Text>}
            >               
            </Header>
            <ScrollView>

                <View style = {{ height: 75, width: width -30, marginLeft: 15, justifyContent: "center", alignItems:"center"}}>
                    <Text style = {{ fontSize :23, color: "black"}}>Phá đường dây bán nhiều thiếu nữ cho quán karaoke, massage</Text>
                </View>
                <View style ={{height:0.6, borderWidth: 0.3, width:width -40, marginLeft:20, marginBottom: 15}}></View>
                <View style = { styles.box1 }>
                    <Image style ={{height: 200, width: width}} source = {require("../image/5.jpg")}/>
                </View>
                <View style ={{ width:width -40, marginLeft:20, marginBottom: 15}}>
                    <Text style = {{ fontSize :18, color: "black"}} >Ngày 21/4, Trần Văn Huy (19 tuổi, quê Bắc Giang) cùng 5 bị can khác bị Cục Cảnh sát hình sự Bộ Công an khởi tố, lệnh tạm giam về tội Mua bán người dưới 16 tuổi, theo Điều 151 Bộ luật Hình sự. Trong số bị can, Hoàng Văn Cường và Dương Tuấn Cường (cùng trú tỉnh Bắc Giang) kết bạn với 2 cô gái (16 và 18 tuổi, quê ở Bắc Giang và Thanh Hóa). Sau khi hứa giúp 2 người tìm việc, họ dụ nạn nhân đi làm thuê với mức lương cao rồi đưa đến một nhà trọ do Huy thuê ở huyện Quế Võ, tỉnh Bắc Ninh.

Đầu tháng 3, Huy và đồng bọn bán 2 bị hại cho các quán karaoke, massage ở TP Ninh Bình, tỉnh Ninh Bình và quận Hà Đông, Hà Nội, với giá khoảng 4 triệu đồng mỗi nạn nhân.

Sau khi thu thập đủ chứng cứ, ngày 17/3, Cục Cảnh sát hình sự cùng công an các địa phương Hà Nội, Ninh Bình, Thanh Hóa, Bắc Giang bắt giữ Trần Văn Huy và 5 người còn lại.</Text>
                </View>
            </ScrollView>
            </>
        )
    }
}
var styles = StyleSheet. create({
    box1:{
        height:200,
        width:width,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center"
    },
})

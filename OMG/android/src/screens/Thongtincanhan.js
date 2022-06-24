import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import { getData } from '../connect'
import { connect } from "react-redux";
import { Table, Row, Rows } from 'react-native-table-component';
const { width, height } = Dimensions.get("window")
 class ThongTinCaNhan extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tien_an_tien_su:[],
            tableHead: ['Ngày vi phạm', 'Loại hình phạt', 'Lỗi vi phạm',],
            date: ""
        }
    }
    componentDidMount(){
        const arr = []
        this.props.thong_tin_ca_nhan.TienAnTienSu.map((value) => {
            let date = value.date.split("T")
            let sub_arr = [date[0], value.violationError, value.penalty]
            arr.push(sub_arr)
        })
        let buffer = [" ", " ", " "]
        arr.push(buffer)
        this.setState({
            tien_an_tien_su: arr
        })
        let date
        date = this.props.thong_tin_ca_nhan.date.split("T")
        this.setState({
            date:date[0]
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
                    <Ionicons name ="chevron-back-outline" size={35} color = "white"/>
                </TouchableOpacity>
               }
               center = { <Text style = {{ fontSize: 20, color:"white"}}>Thông tin cá nhân</Text>}
            >               
            </Header>
            <ScrollView>
               <View style = { styles.box1 }>
                    <View style = { styles.sub_box1_1 }>
                        <Text style = {{ fontSize:40, color:"#FF4500"}}>HỒ SƠ</Text>
                        <Text style = {{ fontSize:27, color:"#FF4500" }}>CÁ NHÂN</Text>
                        <View style = {{ borderWidth:0.3, width: width/2 - 60, marginTop:10, borderColor:"#FF4500"}}></View>
                    </View>
                    <View style = { styles.sub_box1_2 }>
                        <Image style = {{height:130, width: 100}} source={require("../image/1.jpg")}/>
                    </View>
               </View>
               <View style = { styles.box2 }> 
                    <Text>Họ và tên:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.thong_tin_ca_nhan.name}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Ngày tháng năm sinh:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.state.date}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Căn cước/CMND:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {String(this.props.thong_tin_ca_nhan.cmnd)}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <View style = {{ height: 22, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <Text>Dân tộc:</Text>
                        </View>
                        <View style = {{ flex:1,}}>
                            <Text>Giới tính:</Text>
                        </View>
                    </View>
                    <View style = {{ height: 42, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_work }
                                editable = { false }
                                value = {this.props.thong_tin_ca_nhan.folk}
                            />   
                        </View>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_sex }
                                editable = { false }
                                value = {this.props.thong_tin_ca_nhan.sex?"Nam":"Nữ"}
                            />   
                        </View>
                    </View>
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Quê quán:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.thong_tin_ca_nhan.country}
                    />                    
                    <View style = {{ marginBottom:10 }}></View>
                    <Text>Nơi ở hiện tại:</Text>
                    <TextInput
                        style = { styles.text_ip_name }
                        editable = { false }
                        value = {this.props.thong_tin_ca_nhan.address}
                    />
                    <View style = {{ marginBottom:10 }}></View>
                    <View style = {{ height: 22, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <Text>Quốc tịch:</Text>
                        </View>
                        <View style = {{ flex:1,}}>
                            <Text>Tình trạng kết hôn:</Text>
                        </View>
                    </View>
                    <View style = {{ height: 42, width: width, flexDirection:"row"}}>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_work }
                                editable = { false }
                                value = {this.props.thong_tin_ca_nhan.nationality}
                            />   
                        </View>
                        <View style = {{ flex:1}}>
                            <TextInput
                                style = { styles.text_ip_sex }
                                editable = { false }
                                value = {this.props.thong_tin_ca_nhan.weedding? "Đã kết hôn":"Chưa kết hôn"}
                            />   
                        </View>
                    </View>
                    <View style = {{ marginBottom:10 }}></View>

                    <Text>Tiền án tiền sự:</Text>
                    <View style = {{marginRight:20, left:-5}}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                            <Rows data={this.state.tien_an_tien_su} textStyle={{marginLeft:10}} />
                        </Table>
                    </View>
                    
               </View>
               <View style = {{ marginBottom:30 }}></View>
            </ScrollView>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        thong_tin_ca_nhan: state.thong_tin_ca_nhan,
        tien_an_tien_su: state.tien_an_tien_su
    };
}
export default connect(mapStatetoProps)(ThongTinCaNhan);
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
        borderWidth: 0.15,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16,
        elevation:5
    },
    text_ip_work:{
        height:42,
        width: width/2 - 30,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16,
        elevation:5
    },
    text_ip_sex:{
        height:42,
        width: width/2 - 60,
        backgroundColor:"#FFEFD5",
        color: "black",
        fontSize: 16,
        elevation:5
    },
    text_ip_juve:{
        height:150,
        width: width - 60,
        borderWidth: 0.5,
        backgroundColor:"#778899",
        color: "white",
        fontSize: 16,
        textAlignVertical: 'top',
        elevation:5
    },
    head: { height: 40, backgroundColor: '#FFEFD5', justifyContent:"center", },
    text: { color:"black", marginLeft:10 }
})

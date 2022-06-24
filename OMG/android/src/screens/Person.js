import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { RowBoxMenu, BoxMenu } from '../components/BoxMenu'
import  BoxAvt  from '../components/BoxAvt'
import Line from '../components/Line'
import Header from '../components/Header'
import { connect } from "react-redux";
import { removeValue } from '../storage'
const { width, height } = Dimensions.get("window")
class Person extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }
    componentDidMount(){
        this.setState({
            name: this.props.thong_tin_ca_nhan.name
        })
        let arr 
        arr = this.props.all_citizen.data.filter((val,idx)=>{
            if (this.props.thong_tin_ca_nhan.numberHousehold == val.numberHousehold){
                return true
            }
        })
        console.log("arr = ", arr)
        this.props.dispatch({
            type:"GET_HOME",
            than_nhan: arr
        })
        
    }
    render(){
        return(
            <>
            <Header 
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Cá nhân</Text>}
            />
            <View style = {{flex:1, backgroundColor:"#D3D3D3"}}>
                <BoxAvt navigation = { this.props.navigation } name = {this.state.name}></BoxAvt>
                <Line></Line>
                <View style = {{ marginTop:10}}></View>
                <RowBoxMenu
                    text1 = "Thông tin thân nhân"
                    text2 = "Thông tin lãnh đạo"
                    icon_name1 = "person-sharp"
                    icon_name2 = "person-circle"
                    navigation = { this.props.navigation }
                    name_screen1 = "Thongtinthannhan_Container"
                    name_screen2 = "Thongtinlanhdao_Container"
                ></RowBoxMenu>
                <View style = {{ marginTop:10}}></View>
                <RowBoxMenu
                    text1 = "Thông tin chính quyền"
                    text2 = "Đổi mật khẩu"
                    icon_name1 = "people-sharp"
                    icon_name2 = "md-build-sharp"
                    navigation = { this.props.navigation }
                    name_screen1 = "Thongtinchinhquyen_Container"
                    name_screen2 = "Doimatkhau_Container"
                ></RowBoxMenu>
                <View style ={styles.box}>
                <TouchableOpacity style = {styles.button}
                    onPress = {() =>{
                        this.props.dispatch({
                            type: "SIGN_OUT"
                        })
                        removeValue("token")
                        this.props.navigation.navigate("SignIn")
                    }}
                >
                    <Text style = {{ fontSize: 20, color: "white"}}>Đăng xuất</Text>
                </TouchableOpacity>
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
export default connect(mapStatetoProps)(Person);
var styles = StyleSheet.create({
    box:{
        height: 45,
        width: width,
        justifyContent:"center",
        alignItems:"center",
        marginTop: height/3 - 20,
    },
    button:{
        height: 45,
        width: width - 40,
        backgroundColor:"#FF4500",
        justifyContent:"center",
        alignItems:"center",
        
    }
})
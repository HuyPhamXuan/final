import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView, Alert } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { postData } from '../connect'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get("window")
class DoiMatKhau extends Component{
    constructor(props){
        super(props)
        this.state = {
            newPass1: "",
            newPass2: "",
            pass:"",
            err:false,
            context:"",
            succes:""
        }
    }
    onChangePass0 = (text) =>{
        this.setState({
            pass:text
        })
    }
    onChangePass1 = (text) =>{
        this.setState({
            newPass1:text
        })
    }
    onChangePass2 = (text) =>{
        this.setState({
            newPass2:text
        })
    }
    checkValidation = () =>{
        if (this.state.newPass1.length < 6){
            this.setState({
                context:"Mật khẩu mới quá ngắn",
                err:true
            })
            return
        }
        if (this.state.newPass1 != this.state.newPass2){
            this.setState({
                context:"Mật khẩu mới không trùng khớp",
                err: true
            })
            return
        }
        this.setState({
            context:"",
            err:false
        })
    }
    createTwoButtonAlert = () =>
    Alert.alert(
      "Đổi mật khẩu",
      "Bạn có chắc muốn đổi mật khẩu không?",
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
        let a = await this.checkValidation()
        if (this.state.err) return
        postData({
            "_id":this.props.signIn._id,
            "password": this.state.pass,
            "newPassword" : this.state.newPass1
        }, "https://backendcnpmem.herokuapp.com/api/updatePassword").then((res) => {
            
            if (res.error) {
                console.log("res =", res)
                this.setState({
                    err:true,
                    context:"Mật khẩu cũ không đúng"
                })
            }
            else{
                this.setState({
                    succes:"Đổi mật khẩu thành công",
                    newPass1: "",
                    newPass2: "",
                    pass:"",
                })
            }
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
               center = {<Text style ={{ fontSize:20, color:"white"}}>Mật Khẩu</Text>}
            >               
            </Header>
            <View style = { styles.box }>
                    <View style = { styles.box_text } >
                        <View style = {{ flexDirection: "row", flex: 1, alignItems:"center"}}>
                            <View style = {{ flex:1 }}>
                                <Ionicons name='golf-sharp' size={30}/>
                            </View>
                            <View style = {{ flex: 7}}>
                                <Text style ={{ fontSize: 16, color:"black", fontStyle:"italic"}}>Mẹo chọn mật khẩu</Text>
                            </View>
                        </View>
                        <View style = {{ flex: 3, flexDirection:"row", }}>
                            <View style = {{flex:1}}></View>
                            <View style = {{ flex:8}}>
                                <Text>• Chọn mật khẩu mà bạn chưa dùng ở nơi nào khác trên mạng</Text>
                                <Text>• Hãy chọn mật khẩu dễ nhớ nhưng khó đoán với người khác</Text>
                                <Text>• Đừng chia sẻ mật khẩu với bất kỳ ai</Text>
                            </View>
                        </View>
                    </View>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 50, backgroundColor: "white", alignItems:"center"}}>
                            <Ionicons name ="ios-shield-outline" size={30}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.onChangePass0(text)
                            }}
                            placeholder = "Nhập mật khẩu cũ"
                            value= {this.state.pass}
                        />
                    </View>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 50, alignItems:"center"}}>
                            <Ionicons name ="ios-key-outline" size={30}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.onChangePass1(text)
                            }}
                            placeholder = "Nhập mật khẩu mới"
                            value= {this.state.newPass1}
                        />
                    </View>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 50, backgroundColor: "white", alignItems:"center"}}>
                            <Ionicons name ="ios-key-outline" size={30}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.onChangePass2(text)
                            }}
                            placeholder = "Nhập lại mật khẩu mới"
                            value= {this.state.newPass2}
                        />
                    </View>
                    <View style = {{
                            width:width - 40,
                            marginLeft: 20,
                            marginTop:5
                    }}>
                        <Text style = {{color:"red", fontSize:14}}>{this.state.err?this.state.context:this.state.succes}</Text>
                    </View>
                    <View style = { styles.box_button }>
                        <TouchableOpacity
                            style = { styles.button }
                            onPress = {() =>{
                                this.createTwoButtonAlert()
                                
                            }}
                        >
                            <Text style ={{ color: "white", fontSize: 20}}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
export default connect(mapStatetoProps)(DoiMatKhau);
var styles = StyleSheet.create({
    screen:{
        height: height - 200
    },
    box:{
        width: width,
        height: 410,
        marginTop: 20
    },
    box_text:{
        
        height:140,
        justifyContent:"center",
        alignItems: "center",
        width:width - 40,
        marginLeft: 20,
        borderWidth:0.2,
        borderRadius: 3,
        backgroundColor: "#D3D3D3"


    },
    box_input:{
        marginTop: 15,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        width: width - 40,
        marginLeft: 20,
        flexDirection:"row",
        borderRadius:3,
        backgroundColor:"white",
        elevation:10
    },
    box_button:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    text_input:{
        height: 39,
        width: width - 91,
        backgroundColor: "white",
        borderRadius:3,
        elevation:10
    },
    text_input2:{
        height: 39,
        width: width - 91,
        backgroundColor: "white",
        borderRadius:3,
        elevation:10
    },
    text1:{
        fontSize: 16,
        marginLeft: 60,
        bottom:-7
    },
    text2:{
        fontSize: 16,
        marginLeft: 60,
        bottom: -7
    },
    button:{
        height:45,
        width: width - 230,
        backgroundColor:"#FF4500",
        justifyContent: "center",
        alignItems: "center"
    }
})
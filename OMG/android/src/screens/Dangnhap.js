import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { connect } from "react-redux";
import { getData, postData } from "../connect";
import { storeData } from "../storage";
const { width, height } = Dimensions.get("window")
class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            text_CMND: "",
            text_Pass: "",
            sign_in: 1,
            err: ""
        }
    }
    onChangeCMND = (text)=>{
        this.setState({
            text_CMND: text
        })
    }
    onChangePass = (text)=>{
        this.setState({
            text_Pass: text
        })
    }
    /*
    componentDidUpdate(){
        if ( this.props.signIn === true) {
            this.props.navigation.navigate("Bottom_Navigator")
        }
    }
    */
    checkValidate = () =>{
        let err = "Tài khoản hoặc mật khẩu không chính xác"
        if(this.state.text_CMND.length != 9) return err;
    }
    signIn = async () => {
        
        let a = await postData({
            "cmnd": this.state.text_CMND,
            "password": this.state.text_Pass
        },"https://backendcnpmem.herokuapp.com/api/signinCongDan" )  
           
        if(a.token){
            console.log("a=",a.user.ThongTinCaNhan)
            let b = await postData({
                "_id": a.user.ThongTinCaNhan
            },"https://backendcnpmem.herokuapp.com/api/readThongTinCaNhan")
            this.props.dispatch({
                type:"GET_INFO",
                info: b
            })
            this.props.navigation.navigate("Bottom_Navigator") 
            storeData('token', a.token)
            this.props.dispatch({
                type:'SIGN_IN',
                signIn: a.user
            }) 
            this.setState({
                text_CMND:"",
                text_Pass:"",
                err:""
            }) 
        }
        else{
            this.setState({
                err:"Tài khoản hoặc mật khẩu không chính xác"
            })
        }
        

        //this.props.navigation.navigate("Bottom_Navigator")
   
    }
    render(){
        return(
            <>
            <View style = { styles.screen }>
                <View style = { styles.box }>
                    <View style = { styles.box_text } >
                        <Text style ={{ color: "#00008B", fontSize: 40, bottom: 20}}>ĐĂNG NHẬP</Text>
                    </View>
                    <Text style = { styles.text1 }>Nhập Căn Cước/CMND:</Text>
                    <View style = { styles.box_input1 }>
                        <TextInput
                            style = { styles.text_input1 }
                            onChangeText = {(text)=>{
                                this.onChangeCMND(text)
                            }}
                            value= {this.state.text_CMND}
                        />
                    </View>
                    <Text style = { styles.text2 }>Nhập Mật Khẩu:</Text>
                    <View style = { styles.box_input2 }>
                        <TextInput
                            secureTextEntry={true}
                            style = { styles.text_input2 }
                            onChangeText = {(text) =>{
                                this.onChangePass(text)
                            }}
                            value= {this.state.text_Pass}
                        />
                    </View>
                    <View style = {{ width: width - 120, height: 25,  justifyContent:"center", marginLeft: 60,}}>
                        <Text style = {{color:"#8B0000"}}>{this.state.err}</Text>
                    </View>
                    <View style = { styles.box_button }>
                        <TouchableOpacity
                            style = { styles.button }
                            onPress = {() =>{
                                this.signIn()
                            }}
                        >
                            <Text style ={{ color: "white", fontSize: 20}}>Đăng nhập</Text>
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
        signIn: state.signIn
    };
}
export default connect(mapStatetoProps)(SignIn);

var styles = StyleSheet.create({
    screen:{
        backgroundColor: "#FFE4B5",
        justifyContent: "center",
        flex:1
    },
    box:{
        width: width,
        height: 280,
        
    },
    box_text:{
        flex:1.3,
        justifyContent:"center",
        alignItems: "center",
        width:width
    },
    box_input1:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center",
    },
    box_input2:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center"
    },
    box_button:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    text_input1:{
        height: 45,
        elevation:20,
        width: width - 120,
        backgroundColor: "white",
        borderRadius:5
    },
    text_input2:{
        height: 45,
        elevation:20,
        width: width - 120,
        backgroundColor: "white",
        borderRadius:5
    },
    text1:{
        color: "#00008B", 
        fontSize: 16,
        marginLeft: 60,
        bottom:-3
    },
    text2:{
        color: "#00008B",
        fontSize: 16,
        marginLeft: 60,
        bottom: -3
    },
    button:{
        height:45,
        width: width - 230,
        backgroundColor:"#00008B",
        justifyContent: "center",
        alignItems: "center"
    }
})
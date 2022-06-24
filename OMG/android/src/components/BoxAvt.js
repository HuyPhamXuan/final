import { background } from "native-base/lib/typescript/theme/styled-system";
import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native"
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux";
const {width, height}=Dimensions.get("window");
class BoxAvt extends Component{
    render(){
        return(
            <>
            <TouchableOpacity style ={ styles.box }
                onPress = {() => {
                    this.props.navigation.navigate("Thongtincanhan_Container")
                }}
            >
                <View style = { styles.boxavt }>
                    <Image source={require("../image/1.jpg")} style ={{height: 60, width: 60}} />
                </View>
                <View style = { styles.boxtext }>
                    <View style = { styles.boxsubtext1 }>
                        <Text style = {{ marginLeft:10, fontSize:20, bottom: -5, color:"#FF4500" }} >{this.props.name}</Text>
                    </View>
                    <View style = { styles.boxsubtext2 }>
                        <Text style = {{ marginLeft:10, bottom: 7, color:"#696969" }}>Xem thông tin cá nhân</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        thong_tin_ca_nhan: state.thong_tin_ca_nhan,
    };
}
export default connect(mapStatetoProps)(BoxAvt);
var styles = StyleSheet.create({
    box: {
        width: width -30,
        height: width/6 + 5,
        flexDirection: "row",
        backgroundColor:"#D3D3D3",
        marginLeft: 15,
    },
    boxavt:{
        flex:1,
        justifyContent:"center",
    },
    boxtext:{
        flex:6,
        flexDirection:"column"
    },
    boxsubtext1:{
        flex:1,
        justifyContent:"center",
    },
    boxsubtext2:{
        flex:1,
        justifyContent:"center",
    }

})
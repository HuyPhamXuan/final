import React, { Component } from "react"
import { View , StyleSheet, Dimensions } from "react-native"
import DisplayMode from "react-native/Libraries/ReactNative/DisplayMode"
const {width, height}=Dimensions.get("window");
export default class Line extends Component{
    render(){
        return(
            <>
            <View style = {styles.line}>

            </View>
            </>
        )
    }
}
var styles = StyleSheet.create({
    line:{
        width: width - 30,
        borderWidth: 0.25,
        height: 0.5,
        marginLeft: 15,
        backgroundColor: "#FF4500",
        borderColor:"#FF4500"
    }
})
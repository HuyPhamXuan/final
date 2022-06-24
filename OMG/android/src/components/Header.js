import  React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
const {witdh, height} = Dimensions.get("window")
export default class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <View style = { styles.header }>
                <View style = { [styles.left, this.props.styleL] }>{this.props.left}</View>
                <View style = { [styles.center, this.props.styleC] }>{this.props.center}</View>
                <View style = { [styles.right, this.props.styleR] }>{this.props.right}</View>
            </View>
            </>
        )
    }
}
var styles = StyleSheet.create({
    header:{
        width: witdh,
        height:60,
        flexDirection:"row",
        backgroundColor:"#FF4500",

    },
    left:{
        flex:1,    
        justifyContent:"center", 

    },
    right :{
        flex:1,
        justifyContent:"center",
        alignItems:"center", 

    },
    center:{
        flex:3,
        justifyContent:"center",
        alignItems:"center", 

    }
})
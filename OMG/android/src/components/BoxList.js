import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons  from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
export default class BoxList extends Component{
    render(){
        return(
            <>
            <TouchableOpacity style = { [styles.box, {backgroundColor: this.props.color}] }>
                <View style = { styles.boxavt }>
                    <Ionicons name = "logo-twitch" size={50} color = "#FF4500"/>
                </View>
                <View style = { styles.boxtext }>
                    <Text style={{marginRight:10, fontSize:16, color:"black", fontWeight:"bold", fontStyle:"italic"}}>{this.props.data.title}</Text>
                    <View style = {{ marginTop: 2}}>
                    <Text style ={{marginRight:20}}>{this.props.data.content} </Text>
                    </View>               
                </View>

            </TouchableOpacity>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box: {
        width: width,
        height: width/5,
        flexDirection: "row",
        elevation:5
    },
    boxavt:{
        width: width/6 + 5,
        justifyContent:"center",
        alignItems:"center",
    },
    boxtext:{
        width: width - width/6 - 5,
        marginLeft :7,
        marginTop:5,

    }
})
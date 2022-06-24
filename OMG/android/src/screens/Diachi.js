import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
export class DiaChiLD extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity 
                style ={styles.box_diachi}
                onPress = {()=>{
                    this.props.navigation.navigate(this.props.name_screen, {name: this.props.name})
                }}
            >
                <View style ={ styles.box_img }>
                    <Image  source={require("../image/1.jpg")} style ={styles.img}/>

                </View>
                <View style = { styles.box_text }>
                    <Text style ={{fontSize:18}}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
export  class DiaChiCQ extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity 
                style ={styles.box_diachi}
                onPress = {()=>{
                    this.props.navigation.navigate(this.props.name_screen, {data: this.props.data})
                }}
            >
                <View style ={ styles.box_img }>
                    <Image  source={require("../image/1.jpg")} style ={styles.img}/>

                </View>
                <View style = { styles.box_text }>
                    <Text style ={{fontSize:18}}>{this.props.data.name}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box_diachi:{
        flexDirection:"row",
        height: 75,
        width: width - 40,
        marginLeft: 20,
        elevation:5,
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
        width: width - 140,
        marginLeft: 20,
        flexDirection:"row",
        borderWidth: 0.3,
        borderRadius:3,
        backgroundColor:"white"
    },
    text_input:{
        height: 39,
        width: width - 182,
        backgroundColor: "white",
        borderRadius:3,
    },
    search:{
        height: 38,
        backgroundColor: "red",
        width: 85,
        marginLeft: 15,
        borderRadius: 3,
        justifyContent: "center",
        alignItems:"center"
    }
})

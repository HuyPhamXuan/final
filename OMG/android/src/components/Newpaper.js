import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"
import Line from "./Line"
const {width, height}=Dimensions.get("window");
const data = require("../image/5.jpg")
class BigNewpaper extends Component{
    render(){
        return(
            <>
                <TouchableOpacity style = { styles.box_bignewpaper }
                    onPress = {()=>{
                        this.props.navigation.navigate("Newpaper", {data:"abc"})
                    }}
                    activeOpacity = {0.8}
                >
                    <View style = { styles.box_image }>
                        <Image style = {styles.image } source = {data}/>
                    </View>
                    <View style = { styles.box_text }>
                        <Text style = {{ fontSize:24}}>Phá đường dây bán nhiều thiếu nữ cho quán karaoke, massage</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
}
class LitleNewpaper extends Component{
    render(){
        return(
            <>
            <TouchableOpacity 
                style = { styles.box_litle_newpaper }
                onPress = {()=>{
                    this.props.navigation.navigate("Newpaper", {data:"abc"})
                }}
                activeOpacity = {0.8}
            >
                <View style = { styles.box_litle_img }>
                    <Image style = { styles.litle_img } source={data}/>
                </View>
                <View style = { styles.box_litle_text }>
                    <Text style = {{ fontSize: 17}}>Phá đường dây bán nhiều thiếu nữ cho quán karaoke, massage</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
export { BigNewpaper, LitleNewpaper };
var styles = StyleSheet.create({
    box_bignewpaper:{
        width: width,
        height: width * 0.7,
        backgroundColor: "white"
    },
    box_image:{
        width: width,
        height: width * 0.8 * 0.6,
    },
    box_text:{
        flex:1,
        justifyContent:"center",
        marginLeft:15,
        marginRight: 15,
        
    },
    image:{
        width: width,
        height: width * 0.8 * 0.6,
        borderRadius: 5
    },
    box_litle_newpaper:{
        width: width,
        height: width * 0.2,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white"
    },
    box_litle_img:{
        flex:1,
        alignItems: "center",
        justifyContent : "center",
        marginLeft: 15
    },
    box_litle_text:{
        flex: 3,
        marginLeft: 15,
        marginTop: 10,
        marginRight: 15,
    },
    litle_img:{
        width: width/4 - 10,
        height: width * 0.2
    }
})
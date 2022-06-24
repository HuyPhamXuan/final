import { background, color } from "native-base/lib/typescript/theme/styled-system";
import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import Ionicons  from 'react-native-vector-icons/Ionicons'
const {width, height}=Dimensions.get("window");
class BoxMenu extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity  style = { styles.box }
                onPress={()=>{this.props.navigation.navigate(this.props.name_screen)}}
            >
                <View style = { styles.boxicon }>
                    <Ionicons name = {this.props.icon_name} size = {25} color ={"#FF4500"}/>
                </View>
                <View style={ styles.boxtext }>
                    <Text style = {{fontSize: 14, color: "#00008B"}}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
class RowBoxMenu extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <View style = { styles.rowboxmenu}>
                <View style = {{ flex:1, marginLeft: 15, }}>
                    <BoxMenu 
                        text = {this.props.text1} 
                        navigation = {this.props.navigation} 
                        icon_name = {this.props.icon_name1}
                        name_screen = {this.props.name_screen1}
                        >

                    </BoxMenu>
                </View>
                <View style = {{ flex:1, marginLeft: 7,  }}>
                    <BoxMenu 
                        text = {this.props.text2} 
                        navigation = {this.props.navigation} 
                        icon_name = {this.props.icon_name2}
                        name_screen = {this.props.name_screen2}
                        >
    
                    </BoxMenu>
                </View>
            </View>
            </>
        )
    }
}
class BoxService extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity 
                style = {styles.box_service}
                activeOpacity = {0.8}
                onPress = {()=>{this.props.navigation.navigate(this.props.name_screen)}}
            >
                <View style = {styles.box_icon_service}>
                    <Ionicons name = {this.props.icon_name} size = {45} color ={"#FF4500"}/>
                </View>
                <View style = {styles.box_text_service}>
                    <Text style = {{fontSize: 22, color: "#00008B", fontStyle:"italic"}}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
export { RowBoxMenu, BoxMenu, BoxService };
var styles = StyleSheet.create({
    box_service: {
        width: width - 30,
        height: 0.42*(width/2-25),
        backgroundColor:"#FFFFFF",
        borderRadius:7,
        elevation:5,
        flexDirection: "row",
        marginLeft:15
    },
    box_icon_service:{
        justifyContent:"center",
        alignItems: "center",
        flex:1
    },
    box_text_service:{
        justifyContent:"center",
        flex:4,
        marginLeft:10
    },
    box: {
        width: width/2 - 24,
        height: 0.42*(width/2-25),
        backgroundColor:"#FFFFFF",
        borderRadius:7,
        elevation:5
    },
    boxtext:{
        justifyContent:"center",
        flex:1,
        marginLeft:20,
        bottom: 5
    },
    boxicon:{
        justifyContent:"center",
        flex:1,
        marginLeft:20,
        bottom:-5,
    },
    rowboxmenu:{
        width: width,
        height: 0.42 * width/2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
    },
    subbox1:{
        marginLeft : 15,

    },
    subbox2:{
        marginRight: 15
    }

})